import React from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import DashboardNavigation from './DashboardNavigation';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DashboardDirectory = ({ activeTab }) => {
  return (
    <div className='dashboard-directory mt-5'>
      <Row>
        <Col md={2}>
          <DashboardNavigation />
        </Col>
        <Col md={10}>
          {activeTab === 'create' && 'CREATE TAB'}
          {activeTab === 'myrecipes' && 'MY RECIPES'}
          {activeTab === 'favorites' && 'FAVORITE RECIPES'}
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({
  activeTab: state.dashboard.activeTab
});

export default connect(mapStateToProps)(DashboardDirectory);
