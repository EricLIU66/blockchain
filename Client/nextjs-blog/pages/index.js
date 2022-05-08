// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import main from './main';
// const { ethers } = require("ethers"); // node.js require
import {React, useState, useEffect} from 'react'
import Link from 'next/link'
import Router from 'next/router'
import config from "../config.json";
// import { nftContractAddress } from '../config.js'
// import { ethers } from 'ethers'
// import axios from 'axios'
// import NFT from '../../'

function Home ()  {
    // const ethers = require('ethers');
    // const config = require('../config.json');
    // let privateKey = config['private_key']
    // let network = config['network']
    // let address = config['address']
    // let test_json = require('../../artifacts/contracts/TicketMarket.sol/TicketMarket.json');
    // let provider = new ethers.providers.JsonRpcProvider(network)
    // let wallet = new ethers.Wallet(privateKey , provider);
    // let abi = test_json.abi;
    // let market = new ethers.Contract( address , abi , wallet );

    // market.functions.function_name_in_smart_contract()

    const dirToMain = ()=>{

        Router.push("/main")
        console.log(1)
    }

    return(
            <div className={styles.container}>
                <main className={styles.main}>
                    <label htmlFor="exampleFormControlInput1">Please enter the address</label>
                    <input type="text" className="form-control" id="ticket_name"
                    ></input><br/><br/>

                    <button type="submit" className="btn btn-primary" onClick={dirToMain}>Submit</button>
                </main>
            </div>
    )

}
export default Home