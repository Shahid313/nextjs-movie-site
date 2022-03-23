import styles from '../styles/Featured.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/ai";
import { IconContext } from "react-icons";

const images = [
    "/imgs/movie1.jpg",
    "/imgs/movie2.jpg",
    "/imgs/movie3.jpg",
];

const Featured = () => {
    const [index, setIndex] = useState(0)

    const handleArrow = (direction) => {
        if(direction === "l"){
            setIndex(index !== 0 ? index - 1:2)
        }

        if(direction === "r"){
            setIndex(index !== 2 ? index + 1:0)
        }
    }

    setInterval(() => {
        setIndex(index !== 2 ? index + 1:0)
    }, 2000)
    
    return(
        <div className={styles.container}>
            <div className={styles.arrowcontainer1} onClick={() => handleArrow("l")}>
            <Image src="/leftarrow.png" layout='fill' />
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
                {images.map((img,i) => (
                    <div className={styles.imagecontainer} key={i}>
                    <Image src={img} layout="fill"/>
                    </div>
                ))}
            
            </div>
            <div className={styles.arrowcontainer2} onClick={() => handleArrow("r")}>
            <Image src="/right-arrow.png" layout='fill' />
            </div>
        </div>
    )
}

export default Featured;