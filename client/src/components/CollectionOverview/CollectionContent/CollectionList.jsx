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

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CollectionList = ({ infinityList, infinityListSettings, setInfinityListSettings }) => {

  const fetchMoreItems = () => {
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
          // className='d-flex flex-row flex-wrap justify-content-center'
          className='overflow-hidden'
          dataLength={infinityList.data.length}
          hasMore={infinityList.hasMore}
          next={fetchMoreItems}
          loader={<LoadingSpinner />}
        >
          <Row>
            {
              infinityList.data.map((recipe, idx) => (
                <Col xs={6} md={4} lg={3} key={idx}>
                  <CollectionListItem
                    key={recipe.idMeal}
                    recipeID={recipe.idMeal}
                    name={recipe.strMeal}
                    imageURL={recipe.strMealThumb}
                  />
                </Col>
              ))
            }
          </Row>
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
