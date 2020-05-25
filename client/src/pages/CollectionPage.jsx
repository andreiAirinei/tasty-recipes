import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import SectionTitle from '../components/layout/SectionTitle';
import CallToActionCard from '../components/CallToActionCard/CallToActionCard';
import CollectionOverview from '../components/CollectionOverview/CollectionOverview';

// Bootstrap
import Container from 'react-bootstrap/Container';


const CollectionPage = ({ categories }) => {


  useEffect(() => {
    console.log(categories);
  });

  return (
    <>
      <div className='collection-page'>
        <div className="collection-hero">
          <Jumbotron imgURL='cooking1.jpg' title='Enjoy our delicious meals and desserts' />
          <CallToActionCard />
        </div>
        <Container className='collection-navbar' fluid='xl'>
          <SectionTitle title='Recipes' />
          <CollectionOverview />
        </Container>
      </div>
      <div className="white-space"></div>
    </>
  )
}

const mapStateToProps = state => ({
  categories: state.category.categories
});

export default connect(mapStateToProps)(CollectionPage);
