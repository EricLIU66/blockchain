import Link from 'next/link'
import styles from "../styles/layout.module.css";
import React, { useState,useEffect } from "react";
import Router from 'next/router'
import { withRouter} from 'next/router'
function Home({router}) {

    const ethers = require('ethers');
    const config = require('../config.json');
    let privateKey = config['private_key']
    // let privateKey1 = config['private_key2'] // make change
    let network = config['network']
    let address = config['address']

    let token_address = config['token_address']
    let factory_address = config['factory_address']
    let nft_address = config['nft_address']
    let market_address = config['market_address']


    let provider = ethers.getDefaultProvider(network);
    let wallet = new ethers.Wallet(privateKey , provider);
    // let wallet1 = new ethers.Wallet(privateKey1 , provider); // make change

    let token_ct = require('../../../artifacts/contracts/GogoToken.sol/GogoToken.json');
    let token_abi = token_ct.abi;
    let token = new ethers.Contract( token_address , token_abi , wallet );
    // let tmp = token.functions.transfer(wallet1.address, 1000) //make change

    let balancePromise = token.balanceOf(wallet.address);

    balancePromise.then((balance) => {
        console.log(ethers.utils.formatEther(balance));
    });
    // console.log(wallet.getBalance().toString())
    // let ticketsForSale  = TicketsMartket.functions.getPlayers()
    let TicketFactory_ct = require('../../../artifacts/contracts/TicketFactory.sol/TicketsFactory.json');
    let TicketFactory_abi = TicketFactory_ct.abi;
    let TicketFactory = new ethers.Contract( factory_address , TicketFactory_abi , wallet );

    let TicketsNFT_ct = require('../../../artifacts/contracts/TicketNFT.sol/TicketNFT.json');
    let TicketsNFT_abi = TicketsNFT_ct.abi;
    let TicketsNFT = new ethers.Contract( nft_address , TicketsNFT_abi , wallet ).connect(wallet.address)

    let TicketMarket_ct = require('../../../artifacts/contracts/TicketMarket.sol/TicketMarket.json');
    let TicketMarket_abi = TicketMarket_ct.abi;
    let TicketsMartket = new ethers.Contract( market_address, TicketMarket_abi , wallet );
    const [name, setName] = useState(0);
    const [symbol, setSymbol] = useState(0);
    const [price, setPrice] = useState(0.0);
    const [supply, setSupply] = useState(0.0);

    //
    async function handleSubmit (event){
        event.preventDefault()
        const data = {
            name,
            symbol,
            price,
            supply
        };
        await TicketFactory.functions.createNewFest(token.address, name, symbol, price, supply)
        Router.reload(window.location.pathname)
        // let balancePromise = token.balanceOf(wallet.address);
        //
        // balancePromise.then((balance) => {
        //     console.log(ethers.utils.formatEther(balance));
        // });
        // console.log(ethers.utils.formatEther(wallet.getBalance()))
    }
    return (
        <main>
            <div className="container center">
                <div className="row">
                    <div className="container ">
                        <div className="container ">
                            <header className={styles.header}>
                                <h1>Create Tickets</h1>
                            </header>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="exampleFormControlInput1">Name</label>
                                <input type="text" className="form-control" id="ticket_name"
                                       onChange={e => setName(e.target.value)}></input><br/><br/>
                                <label htmlFor="exampleFormControlInput1">Symbol</label>
                                <input type="text" className="form-control" id="ticket_symbol"
                                       onChange={e => setSymbol(e.target.value)}></input><br/><br/>

                                <label htmlFor="exampleFormControlInput1">Price</label>
                                <input type="text" className="form-control" id="ticket_price"
                                       onChange={e => setPrice(e.target.value)}></input><br/><br/>
                                <label htmlFor="exampleFormControlInput1">Supply</label>
                                <input type="text" className="form-control" id="ticket_supply"
                                       onChange={e => setSupply(e.target.value)}></input><br/><br/>
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </form>
                            <h2>
                                <Link href="/main">
                                    <a>Back to home</a>
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )

}
export default Home