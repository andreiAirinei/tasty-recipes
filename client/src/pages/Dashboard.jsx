import React from 'react';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';

// Bootstrap
import Container from 'react-bootstrap/Container';

const Dashboard = () => {

  console.log('DASHBOARD');

  return (
    <>
      <Jumbotron imgURL='site2.jpg' />
      <Container className='directory'>
        <h1>Recipes</h1>
      </Container>
    </>
  )
}

export default Dashboard;
