// import styles from '../components/my_css.module.css'
// import styles from '../styles/Home.module.css'
import Head from 'next/head'
// import Layout from '../components/layout'
import styles from '../styles/layout.module.css'
import Link from "next/link";
function Home() {
    return(

        <main className={styles.main}>

            {/*<div>*/}
                <header className={styles.header}>
                    <h1>Buy Tickets</h1>
                </header>

                <table className="table">

                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Address</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Type</th>
                        <th scope="col">Tickets Left</th>
                        <th scope="col">Purchase</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <th scope="row">1</th>
                        <td></td>
                        <td>Mark</td>
                        <td>1</td>
                        <td>Lottery</td>
                        <td>30</td>
                        <td><button type="submit" className="btn btn-primary">Submit</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td></td>
                        <td>Jacob</td>
                        <td>1</td>
                        <td>Lottery</td>
                        <td>30</td>
                        <td><button type="submit" className="btn btn-primary">Submit</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td></td>
                        <td>Larry</td>
                        <td>1</td>
                        <td>Lottery</td>
                        <td>30</td>
                        <td><button type="submit" className="btn btn-primary">Submit</button></td>
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