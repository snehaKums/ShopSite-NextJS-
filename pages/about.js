import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';

const About = () => {
  
  return (
    <Layout pageTitle="Headless CMS" >
       <Header  />
      <h2 className="aboutHeader">About Us</h2>
      <h4 className="aboutSubHeader">Ecommerce website</h4>
      <p className="aboutText">It is About us page</p>
      <Footer  />
    </Layout>
  );
};


export default About;