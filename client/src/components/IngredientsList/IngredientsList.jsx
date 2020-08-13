import React, { useEffect, useRef } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

// Redux & Selectors
import { connect } from 'react-redux';
import {
  selectIngredientsGroupedAlphabetically
} from '../../redux/ingredients/ingredients.selectors';

// Components
import IngredientsGroup from './IngredientsGroup';

const IngredientsList = ({ ingredientsByGroup }) => {

  // Create an array of refs
  const lettersRefList = useRef([]);

  useEffect(() => {
    console.log(lettersRefList);
  }, []);

  const handleClick = (e, idx) => {
    e.preventDefault();
    // Scroll to specific ref
    lettersRefList.current[idx].scrollIntoView();
    // Adjust page after scroll
    window.scrollBy(0, -100);
  }

  return (
    <div className='ingredients-list'>
      <StickyContainer>
        <Sticky topOffset={-50}>
          {
            ({ style, isSticky }) => (
              <div className='ingredients-letters-menu text-center py-4 bg-white' style={{ ...style, marginTop: isSticky ? '50px' : '0px', zIndex: 999 }}>
                {
                  lettersRefList.current.length > 1 && lettersRefList.current.map((el, idx) => (
                    <button className='btn btn-link p-1 text-danger text-size-09' onClick={(e) => handleClick(e, idx)} key={idx}>
                      {el.innerText}
                    </button>
                  ))
                }
              </div>
            )
          }

        </Sticky>
        <div className='mt-5'>
{
  Object.entries(ingredientsByGroup).map(
    (ingredientGroup, idx) => (
      <IngredientsGroup
        ingredientGroup={ingredientGroup}
        key={idx}
        // Assign a ref for each child
        ref={ingredientGroup => lettersRefList.current[idx] = ingredientGroup}
      />
    )
  )
}
        </div>
        
      </StickyContainer>
    </div>
  )
}

const mapStateToProps = state => ({
  ingredientsByGroup: selectIngredientsGroupedAlphabetically(state)
})

export default connect(mapStateToProps)(IngredientsList);
