import axios from 'axios';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Image from 'next/image';

export const getStaticPaths = async () => {
    const res = await axios.get(process.env.API_MAIN_URL);
    const products = res.data;
    let arr=[]
    for(let i=0;i<products.length;i++){
      arr.push(products[i]);
    }
    const paths = arr.map(data=>{
        return {
          params: {id:data.id.toString()}
        }
    })
    return{
        paths,
        fallback: false
      }
}

export const getStaticProps = async(context) =>{
  const productId = context.params.id;
  const res = await axios.get(process.env.API_MAIN_URL+'/'+productId);
  const data = res.data;
  return{
    props:{data}
  }
}

const Details = ({data}) => {
  return (
    <Layout pageTitle="ShopSite" >
       <Header  />
        <div className="detail">
        <h1 className="detail-heading">{data.title}</h1>
        <Image
              alt='Logo img'
              src={data.image}
              width={400}
              height={400}
        />
        <p className="card-subtext">Price: $ {data.price}</p>
        <p className="description">{data. description}</p>
        <button className="button">Add to Cart</button>
        </div>
      <Footer   />
    </Layout>
  );

}

export default Details;