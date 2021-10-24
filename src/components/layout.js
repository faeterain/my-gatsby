import React from 'react';
import * as styles from './layout.module.css'
import Navbar from './Navbar/Navbar';

const Layout = ({pageTitle, children}) => {
    return (
        <div className={styles.container}>
            <title>{pageTitle}</title>
            <Navbar />
            <main>
                <h1 className={styles.heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
export default Layout;