// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import main from './main';
const { ethers } = require("ethers"); // node.js require
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
function Home ()  {
    const dirToMain = ()=>{
        Router.push("/main")

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