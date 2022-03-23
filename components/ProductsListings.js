import styles from '../styles/ProductsListings.module.css'
import Image from 'next/image'

const ProductsListings = () => {
    return(
        <div className={styles.productsList}>
            <div className={styles.productBox}>
                <Image src='/imgs/cartoon1.jpg' layout='fill'/>
                <div className={styles.TitleBackground}>
                <h1 className={styles.MovieTitle}>THE KID</h1>
                </div>
            </div>
            <div className={styles.productBox}>
                <Image src='/imgs/catoon2.jpg' layout='fill'/>
                <div className={styles.TitleBackground}>
                <h1 className={styles.MovieTitle}>PETTER RABBIT</h1>
                </div>
            </div>

            <div className={styles.productBox}>
                <Image src='/imgs/cartoon1.jpg' layout='fill'/>
                <div className={styles.TitleBackground}>
                <h1 className={styles.MovieTitle}>THE KID</h1>
                </div>
            </div>
            <div className={styles.productBox}>
                <Image src='/imgs/catoon2.jpg' layout='fill'/>
                <div className={styles.TitleBackground}>
                <h1 className={styles.MovieTitle}>PETTER RABBIT</h1>
                </div>
            </div>

            <div className={styles.productBox}>
                <Image src='/imgs/cartoon1.jpg' layout='fill'/>
                <div className={styles.TitleBackground}>
                <h1 className={styles.MovieTitle}>THE KID</h1>
                </div>
            </div>
            <div className={styles.productBox}>
                <Image src='/imgs/catoon2.jpg' layout='fill'/>
                <div className={styles.TitleBackground}>
                <h1 className={styles.MovieTitle}>PETTER RABBIT</h1>
                </div>
            </div>

            <div className={styles.productBox}>
                <Image src='/imgs/cartoon1.jpg' layout='fill'/>
                <div className={styles.TitleBackground}>
                <h1 className={styles.MovieTitle}>THE KID</h1>
                </div>
            </div>
            <div className={styles.productBox}>
                <Image src='/imgs/catoon2.jpg' layout='fill'/>
                <div className={styles.TitleBackground}>
                <h1 className={styles.MovieTitle}>PETTER RABBIT</h1>
                
                </div>
            </div>
            
        </div>
    )
}

export default ProductsListings;