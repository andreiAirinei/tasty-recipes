import React from 'react';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';

// Bootstrap
import Container from 'react-bootstrap/Container';

const Dashboard = () => {
  return (
    <Container className='dashboard'>
      <Jumbotron fluid imgUrl='site2.jpg' />
      <h1>Dashboard</h1>
    </Container>
  )
}

export default Dashboard;
