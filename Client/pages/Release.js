import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from "../styles/layout.module.css";
const {ethers} = require("ethers"); // node.js require
import React, { useState,useEffect } from "react";
function Home() {

    return (


        // <body>
        //
        // <nav className="navbar navbar-inverse">
        //     <div className="container-fluid">
        //         <div className="navbar-header">
        //             <a className="navbar-brand" href="#">WebSiteName</a>
        //         </div>
        //         <ul className="nav navbar-nav">
        //             <li className="active"><a href="#">Home</a></li>
        //             <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span
        //                 className="caret"></span></a>
        //                 <ul className="dropdown-menu">
        //                     <li><a href="#">Page 1-1</a></li>
        //                     <li><a href="#">Page 1-2</a></li>
        //                     <li><a href="#">Page 1-3</a></li>
        //                 </ul>
        //             </li>
        //             <li><a href="#">Page 2</a></li>
        //             <li><a href="#">Page 3</a></li>
        //         </ul>
        //     </div>
        // </nav>
        //
        // <div className="container">
        //     <h3>Navbar With Dropdown</h3>
        //     <p>This example adds a dropdown menu for the "Page 1" button in the navigation bar.</p>
        // </div>
        //
        // </body>

        <main className={styles.main}>
            <header className={styles.header}>

                <h1>My Tickets</h1>
            </header>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">ID</th>
                    <th scope="col">Tickets left</th>
                    <th scope="col">Release Type</th>
                    <th scope="col">Number</th>
                    <th scope="col">Release</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Doge</td>
                    <td>1</td>
                    <td>100</td>
                    <td>
                        <div>
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                id="dropdownMenuButton1"
                                aria-expanded="false"
                            >
                                Dropdown
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Option 1
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Option 2
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Option 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td>

                        <input type="text"  id="number"
                        ></input><br/><br/>
                    </td>
                    <td><button type="submit" className="btn btn-primary">Submit</button></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Doge</td>
                    <td>1</td>
                    <td>100</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Doge</td>
                    <td>1</td>
                    <td>100</td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <h2>
                <Link href="/main">
                    <a>Back to home</a>
                </Link>
            </h2>
            {/*</div>*/}
        </main>
    )
}
export default Home