import React from 'react';
import { StickyContainer } from 'react-sticky';

// Components
import SectionTitle from '../layout/SectionTitle';
import CollectionSidebar from './CollectionSidebar/CollectionSidebar';
import CollectionContent from './CollectionContent/CollectionContent';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CollectionOverview = () => {
  return (
    <div className='collection-overview'>
      <SectionTitle title='All Recipes' />
      <StickyContainer className='mb-5'>
        <Row>
          <Col xs={2}>
            <CollectionSidebar />
          </Col>
          <Col xs={10}>
            <CollectionContent />
          </Col>
        </Row>
      </StickyContainer>
    </div>
  )
}

export default CollectionOverview;
