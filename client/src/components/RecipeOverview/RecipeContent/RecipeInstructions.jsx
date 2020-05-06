import React from 'react';
import { connect } from 'react-redux';

const RecipeInstructions = ({ singleRecipe }) => {

  const handleInstructions = (instructions) => {
    let stepCount = 1;
    let newInstructions = instructions.replace(/\r/g, "");
    newInstructions = newInstructions.replace(/\n\s*/g, chars => {
      stepCount++;
      return `
        <div class="step my-4">
          <h5 class='d-inline bg-white pr-3 text-info'>Step ${stepCount}</h5>
        </div>
      `;
    });

    return { __html: newInstructions };
  }

  return (
    <div className="recipe-steps mb-5">
      {singleRecipe &&
        <>
          <h2 className='mb-4 text-center text-sm-left'>How to make it</h2>
          <div className="step my-4">
            <h5 className='d-inline bg-white pr-3 text-info'>Step 1</h5>
          </div>
          <div className="instructions text-justify "
            dangerouslySetInnerHTML={handleInstructions(singleRecipe.strInstructions)} />
        </>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  singleRecipe: state.recipes.singleRecipe
});

export default connect(mapStateToProps)(RecipeInstructions);
