
import styles from '../styles/Home.module.css'

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
                        <a className="nav-link active" href="/Release">Release Tickets</a>
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
                    <li className="nav-item">
                        <a className="nav-link" href="/lottery">Lottery</a>
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