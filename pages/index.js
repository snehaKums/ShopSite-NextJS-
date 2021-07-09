import React,{useState} from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home({products}) {
  const [ postNum, setPostNum] = useState(10); 

  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 10) 
  }
  return (
    <Layout pageTitle="ShopSite" >
      <Header />
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-3">
                {products.slice(0, postNum).map((product) => (
                    <div className="card" key={product.id}>
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                            <Image
                            alt='Logo img'
                            src={product.image}
                            width={400}
                            height={400}
                          />
                            </div>
                            <div className="card-body">
                                <h1 className="card-text">{product.title}</h1>
                                <p className="card-subtext">Price: $ {product.price}</p>
                               <a href={'/detail/' + product.id}>
                                    <button className="button">Detail</button>
                                </a>
                                <button className="button">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
                {(products.length -postNum) < 1 ? null : <button className="button" onClick={handleClick}>Load More</button>}

                </div>
            </div>
        </div>
      <Footer />
    </Layout>
  )
}

export async function getStaticProps(){
  const res = await axios.get(process.env.API_MAIN_URL);
  const products = res.data;
  return {  
    props:{
      products
    }
  };
}
