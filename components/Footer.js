import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imagePart}>
                <Image src="/imgs/cartoon1.jpg" layout='fill'/>
            </div>
            <div className={styles.LinksPart}>
                <h2 className={styles.joinUsText}>Join us on</h2>
                <div>
                <FaYoutube size={30} color="white"/>
                <FaFacebookSquare size={30} color="white"/>
                <FaTwitterSquare size={30} color="white"/>
                <FaInstagramSquare size={30} color="white"/>
                </div>
            </div>
            <div className={styles.TextPart}>
                <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever /n
                since the 1500s, when an unknown printer took a galley of type and scrambled it to /n
                make a type specimen book. It has survived not only five centuries, but also the leap /n
                into electronic typesetting, remaining essentially unchanged</p>
            </div>
        </div>
    )
}

export default Footer;