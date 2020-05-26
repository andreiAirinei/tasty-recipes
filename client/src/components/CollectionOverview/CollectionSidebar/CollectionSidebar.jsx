import React, { useState, useEffect } from 'react';
import { Sticky } from 'react-sticky';

// Redux
import { connect } from 'react-redux';
import {
  fetchCountries,
  fetchDishTypes
} from '../../../redux/category/category.actions';

// Components
import SidebarButton from './SidebarButton';
import ExpandableList from '../../ExpandableList/ExpandableList';

const CollectionSidebar = ({
  fetchCountries,
  fetchDishTypes,
  countriesList,
  dishTypes
}) => {
  const [currentButton, setCurrentButton] = useState(null);

  useEffect(() => {
    fetchCountries();
    fetchDishTypes();
  }, []);

  // The 'currentTarget' read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant.
  const handleSidebarButton = e => {
    if (e.currentTarget !== currentButton) {
      console.log(e.currentTarget.dataset.name);
      e.currentTarget.classList.add('btn-category--active');
      if (currentButton) currentButton.classList.remove('btn-category--active');
      setCurrentButton(e.currentTarget);

      // do data fetching
    }
  }

  return (
    <Sticky topOffset={-150} bottomOffset={150}>
      {
        ({ style, isSticky }) => (
          <div
            className='sidebar-category'
            style={{ ...style, marginTop: isSticky ? '150px' : '0px' }}
          >
            <SidebarButton handleClick={handleSidebarButton} text='All' />
            <SidebarButton handleClick={handleSidebarButton} text='Latest' />
            <ExpandableList listName='Dish Type'>
              {
                dishTypes && dishTypes.map(dish => (
                  <SidebarButton
                    key={dish.strCategory}
                    text={dish.strCategory}
                    handleClick={handleSidebarButton}
                    isListItem
                  />
                ))
              }
            </ExpandableList>
            <ExpandableList listName='World Cuisine'>
              {
                countriesList && countriesList.map(country => (
                  <SidebarButton
                    key={country.strArea}
                    text={country.strArea}
                    iconName={country.strArea}
                    handleClick={handleSidebarButton}
                    isListItem
                  />
                ))
              }
            </ExpandableList>
          </div>)
      }
    </Sticky>
  )
}

const mapStateToProps = state => ({
  countriesList: state.category.countriesList,
  dishTypes: state.category.dishTypes
})

const maDispatchToProps = dispatch => ({
  fetchCountries: () => dispatch(fetchCountries()),
  fetchDishTypes: () => dispatch(fetchDishTypes())
});

export default connect(mapStateToProps, maDispatchToProps)(CollectionSidebar);
