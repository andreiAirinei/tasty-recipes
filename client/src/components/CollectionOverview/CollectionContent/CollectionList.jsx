import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

// Redux
import { connect } from 'react-redux';
import { setInfinityListSettings } from '../../../redux/ui/ui.actions';

// Selectors
import { createStructuredSelector } from 'reselect';
import { selectInfinityList } from '../../../redux/recipes/recipes.selectors';
import { selectInfinityListSettings } from '../../../redux/ui/ui.selectors';

// Components
import CollectionListItem from './CollectionListItem';
import LoadingSpinner from '../../layout/LoadingSpinner';


const CollectionList = ({ infinityList, infinityListSettings, setInfinityListSettings }) => {

  const fetchMoreItems = () => {
    console.log('Reached Bottom');
    setInfinityListSettings({
      idxStart: infinityListSettings.idxStart + 0,
      idxEnd: infinityListSettings.idxEnd + 8
    })
  }

  return (
    <div className='collection-list'>
      {
        infinityList.data &&
        <InfiniteScroll
          className='d-flex flex-row flex-wrap justify-content-start'
          dataLength={infinityList.data.length}
          hasMore={infinityList.hasMore}
          next={fetchMoreItems}
          loader={<LoadingSpinner />}
        >
          {
            infinityList.data.map(recipe => (
              <CollectionListItem
                key={recipe.idMeal}
                recipeID={recipe.idMeal}
                name={recipe.strMeal}
                imageURL={recipe.strMealThumb}
              />
            ))
          }
        </InfiniteScroll>
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  infinityList: selectInfinityList,
  infinityListSettings: selectInfinityListSettings
});

const mapDispatchToProps = dispatch => ({
  setInfinityListSettings: settings => dispatch(setInfinityListSettings(settings))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);

// #####################################
