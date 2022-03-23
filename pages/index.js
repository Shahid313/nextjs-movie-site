import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Featured from '../components/Featured'
import ProductsListings from '../components/ProductsListings'
import Link from 'next/link'

const Home = () => {
  return(
    <div className={styles.body}>
    
    <Featured/>
    <div className={styles.productTitleBox}>
      <h1 className={styles.productTitle}>Movies</h1>
    </div>
  <ProductsListings/>

    </div>
  )
}

export default Home;