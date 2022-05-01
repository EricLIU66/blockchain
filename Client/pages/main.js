import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Festival from './createTicket';
import Purchase from './purchase';
import MyTickets from './myTicket';
import SecondaryMarket from './secondaryMarket';
import Link from 'next/link'
const { ethers } = require("ethers"); // node.js require
function Home ()  {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="/createTicket">Create Tickets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/Release">Release tickets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/purchase">Buy Tickets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/secondaryMarket">Secondary Market</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/myTicket">My Tickets</a>
                    </li>
                </ul>
                <h1 className={styles.title}>
                    Welcome to Ticket market
                </h1>
                <p className={styles.description}>
                </p>
            </main>
        </div>


    )
}
export default Home