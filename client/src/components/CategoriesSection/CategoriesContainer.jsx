import React from 'react';

// Components
import CategoriesItem from './CategoriesItem';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SectionTitle from '../layout/SectionTitle';

const CategoriesContainer = () => {
  return (
    <Container className='categories-container' fluid='xl'>
      <SectionTitle title='Popular Categories' />
      <Row>
        {
          categoryData.map(category =>
            <CategoriesItem name={category.name} imgURL={category.imgURL} />)
        }
        {/* <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem />
        <CategoriesItem /> */}
      </Row>
      <div className="underlay-image">
        <img src={require('../../assets/ingredients/oranges.png')} alt="Oranges" />
      </div>
    </Container>
  )
}

const categoryData = [
  {
    id: 0,
    name: 'Chicken',
    imgURL: 'https://i.ibb.co/h7xdkrN/chicken.jpg'
  },
  {
    id: 1,
    name: 'Beef',
    imgURL: 'https://i.ibb.co/4WNt4Tb/beef.jpg'
  },
  {
    id: 2,
    name: 'Pork',
    imgURL: 'https://i.ibb.co/RSmCF8S/pork.jpg'
  },
  {
    id: 3,
    name: 'Pasta',
    imgURL: 'https://i.ibb.co/xFBTyfW/pasta.jpg'
  },
  {
    id: 4,
    name: 'Seafood',
    imgURL: 'https://i.ibb.co/4JMy4CP/seafood.jpg'
  },
  {
    id: 5,
    name: 'Side',
    imgURL: 'https://i.ibb.co/myS0vJj/side.jpg'
  },

  {
    id: 6,
    name: 'Desserts',
    imgURL: 'https://i.ibb.co/FsSq1cw/dessert.jpg'
  },
  {
    id: 7,
    name: 'Vegetarian',
    imgURL: 'https://i.ibb.co/4sx5Fph/vegetarian.jpg'
  }
];

export default CategoriesContainer;