import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from "../styles/layout.module.css";
const {ethers} = require("ethers"); // node.js require
import React, { useState,useEffect } from "react";
function Home() {
    return (
        <main>
            <div className="container center">
                <div className="row">
                    <div className="container ">
                        <div className="container ">
                            <header className={styles.header}>
                                <h1>Create Tickets</h1>
                            </header>
                            <form>
                                <label htmlFor="exampleFormControlInput1">Name</label>
                                <input type="text" className="form-control" id="ticket_name"
                                ></input><br/><br/>
                                <label htmlFor="exampleFormControlInput1">ID</label>
                                <input type="text" className="form-control" id="ticket_id"
                                ></input><br/><br/>

                                <label htmlFor="exampleFormControlInput1">Price</label>
                                <input type="text" className="form-control" id="ticket_price"
                                ></input><br/><br/>
                                <label htmlFor="exampleFormControlInput1">Supply</label>
                                <input type="text" className="form-control" id="ticket_supply"
                                ></input><br/><br/>
                                <button type="submit" className="btn btn-primary">Submit</button>
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