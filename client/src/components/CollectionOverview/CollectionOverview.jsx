import React from 'react';
import { StickyContainer } from 'react-sticky';

// Components
import CollectionSidebar from './CollectionSidebar/CollectionSidebar';
import CollectionContent from './CollectionContent/CollectionContent';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CollectionOverview = () => {
  return (
    <div className='collection-overview'>
      <StickyContainer className='mb-5'>
        <Row>
          <Col xs={3}>
            <CollectionSidebar />
          </Col>
          <Col xs={9}>
            <CollectionContent />
          </Col>
        </Row>
      </StickyContainer>

    </div>
  )
}

export default CollectionOverview;
