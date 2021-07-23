import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import styles from '../../components/Product/product.module.css'

export const getStaticPaths = async () => {
    const res = await axios.get(process.env.API_MAIN_URL);
    const products = res.data;
    let arr=[]
    for(let i=0;i<products.length;i++){
      arr.push(products[i]);
    }
    const paths = arr.map(data=>{
        return {
          params: {category:data.category.toString()}
        }
    })
    return{
        paths,
        fallback: false
      }
}

export const getStaticProps = async(context) =>{
  const productId = context.params.category;
  const res = await axios.get(process.env.API_MAIN_URL+'/category/'+productId);
  const data = res.data;
  return{
    props:{data}
  }
}

const Details = ({data}) => {
  return (
    <Container fluid>
    <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
        <Row>                    
            {data.map(item => (
            <Col key={item.id} md={4} lg={3}>
                <div className={styles.card}>
                <Image
                    alt='Logo img'
                    src={item.image}
                    width={200}
                    height={200}
                    />
                    <h1 className={styles.cardText}>{item.title}</h1>
                    <p className={styles.cardSubtext}>Price: $ {item.price}</p>
                    <a href={'/detail/' + item.id}>
                        <button className={styles.button}>Detail</button>
                    </a>
                </div>
            </Col>
            ))}
        </Row>
        </Col>
    </Row>
  </Container>
  );

}

export default Details;
