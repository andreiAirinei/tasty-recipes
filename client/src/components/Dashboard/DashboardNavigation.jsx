import React from 'react';

// Redux
import { connect } from 'react-redux';
import { setActiveTab } from '../../redux/dashboard/dashboard.actions';

// Bootstrap
import Button from 'react-bootstrap/Button';

const DashboardNavigation = ({ activeTab, setActiveTab }) => {

  const handleClick = e => {
    e.preventDefault();
    setActiveTab(e.currentTarget.dataset.tab);
  }

  return (
    <div className="d-flex flex-column justify-content-center">
      <Button
        onClick={handleClick}
        data-tab='create'
        variant='none'
        className={`text-left outline-none text-dark border-0 ${activeTab === 'create' && 'bg-tasty text-white'}`}
      >
        Create meal +
      </Button>
      <Button
        onClick={handleClick}
        data-tab='myrecipes'
        className={`text-left outline-none text-dark border-0 ${activeTab === 'myrecipes' && 'bg-tasty text-white'}`}
        variant='none'
      >
        My recipes
        </Button>
      <Button
        onClick={handleClick}
        data-tab='favorites'
        className={`text-left outline-none text-dark border-0 ${activeTab === 'favorites' && 'bg-tasty text-white'}`}
        variant='none'
      >
        Favorites
      </Button>
    </div>
  )
}

const mapStateToProps = state => ({
  activeTab: state.dashboard.activeTab
});

const mapDispatchToProps = dispatch => ({
  setActiveTab: tab => dispatch(setActiveTab(tab))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavigation);
