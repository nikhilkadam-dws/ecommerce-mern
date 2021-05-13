import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../../components/Layout';

const Home = () => {
    return ( 
        <Layout>
            <Container className="mt-5 text-center">
                <h1>Welcome to Admin Dashboard</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste quia deleniti recusandae veniam soluta quibusdam aliquid. Ipsa molestias dolor quo quos? Sapiente inventore neque, quasi repudiandae expedita quibusdam amet.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia ad cupiditate voluptatum distinctio, rem ducimus, nam consequuntur, alias temporibus nemo quas. Harum officiis vitae fugiat neque beatae numquam sed?</p>
            </Container>
        </Layout>
     );
}
 
export default Home;