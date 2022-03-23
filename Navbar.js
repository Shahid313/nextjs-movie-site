import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/Logo.png" height="80px" width="80px"/>
            </div>
            <ul className={styles.navigationLinks}>
                <li className={styles.homeLink}><Link href="/">Home</Link></li>
                <li className={styles.links}><Link href="/about">About</Link></li>
                <li className={styles.links}><Link href="/about">Contact</Link></li>
                <li className={styles.links}><Link href="/about">Deals</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;