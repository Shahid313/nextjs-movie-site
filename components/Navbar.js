import styles from '../styles/Navbar.module.css'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/Gi";
import { ImCross } from "react-icons/Im";

const Navbar = () => {
    const [show, setShow] = useState(false)

    const showMenu = () => {
        setShow(true)
    }

    const cancel = () => {
        setShow(false)
    }
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/imgs/dream2.png" height="60px" width="60px"/>
            </div>
            
            <ul className={styles.navigationLinks}>
                <li className={styles.homeLink}><Link href="/">Home</Link></li>
                <li className={styles.links}><Link href="/about">About</Link></li>
                <li className={styles.links}><Link href="/about">Contact</Link></li>
                <li className={styles.links}><Link href="/about">New</Link></li>
            </ul>
            <div onClick={() => showMenu()} className={styles.HamburgerIcon}>
                <GiHamburgerMenu size={30} color='white'/>
            </div>
    {show ? 
    <div className={styles.menu}>
        
     <ul className={styles.navigationLinks2}>
        <li className={styles.homelink2}><Link href="/">Home</Link></li>
        <li className={styles.links2}><Link href="/about">About</Link></li>
        <li className={styles.links2}><Link href="/about">Contact</Link></li>
        <li className={styles.links2}><Link href="/about">New</Link></li>
    </ul>
        <div onClick={() => cancel()} className={styles.cancelIcon}>
            <ImCross color='white' size={20}/>
        </div>
    </div>
    :null}
            
        </div>
    )
}

export default Navbar;