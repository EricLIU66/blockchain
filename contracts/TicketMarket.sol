pragma solidity ^0.8.0;

import "./TicketNFT.sol";
import "./GogoToken.sol";

contract TicketMarket {
    GogoToken private _token;
    TicketNFT private _festival;

    address private _organiser;
    address[] public players;

    constructor(GogoToken token, TicketNFT festival) public {
        _token = token;
        _festival = festival;
        _organiser = _festival.getOrganiser();
    }

    event Purchase(address indexed buyer, address seller, uint256 ticketId);

    // Purchase tickets from the organiser directly
    function purchaseTicket() public {
        address buyer = msg.sender;
        // first transfer the token to contract address, then to organizer
        require(
            _festival.getTicketsOfCustomer(buyer).length < 2,
            "Cannot buy more than 2 tickets"
        );
        _token.transferFrom(buyer, address(this), _festival.getTicketPrice());
        _token.transfer(_organiser, _festival.getTicketPrice());
        _festival.transferTicket(buyer);
    }

    // Purchase ticket from the secondary market hosted by organiser
    function secondaryPurchase(uint256 ticketId) public {
        address seller = _festival.ownerOf(ticketId);
        address buyer = msg.sender;
        uint256 sellingPrice = _festival.getSellingPrice(ticketId);
        uint256 commision = (sellingPrice * 10) / 100;

        _token.transferFrom(buyer, address(this), sellingPrice - commision);
        _token.transfer(seller, sellingPrice - commision);

        _token.transferFrom(buyer, address(this), commision);
        _token.transfer(_organiser, commision);

        _festival.secondaryTransferTicket(buyer, ticketId);

        emit Purchase(buyer, seller, ticketId);
    }

    // Fans who has less than 2 ticket can try lottery
    function lotteryTicket() public{
        uint winnerNo = _festival.getLotteryNo();
        for (uint256 i = 0; i < winnerNo; i++) {
            uint index = random() % players.length;
            address winner = players[0];
            uint256 remain = _festival.getTicketPrice() * 90 / 100;
            _token.transferFrom(winner, address(this), remain);
            _token.transfer(_organiser, remain);
            _festival.transferLotteryTicket(winner);
        }
        // address winner = players[0];
        // uint256 remain = _festival.getTicketPrice() * 90 / 100;
        // _token.transferFrom(winner, address(this), remain);
        // _token.transfer(_organiser, remain);
        // _festival.transferTicket(winner);
    }

    // Fans pay the enter fee first
    function enter(TicketNFT oldfestival) public{
        address player = msg.sender;

        require(
            oldfestival.getOrganiser() == _festival.getOrganiser(), 
            "Player must have participate in activities before"
        );

        require(
            oldfestival.isCustomerExist(player),
            "Player must hold tickets before"
        );

        require(
            _festival.getTicketsOfCustomer(player).length < 2,
            "Player must hold less than 2 tickets"
        );
        uint256 commision = _festival.getTicketPrice() * 10 / 100;
        _token.transferFrom(player, address(this), commision);
        _token.transfer(_organiser, commision);
        players.push(player);
    }

    function random() private view returns(uint){
        return  uint (keccak256(abi.encode(block.timestamp,  players)));
    }

    // Get selling price for the ticket
    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}