import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { getAllRecipes } from '../../redux/recipes/recipes.actions';

// Components
import SearchResults from './SearchResults';

// Bootstrap Components
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Searchbar2 = ({ getAllRecipes, allRecipes }) => {
  const [state, setState] = useState({
    showResults: false,
    searchParameters: null,
    filtered: null
  });

  const handleClick = () => {
    if (allRecipes === null)
      getAllRecipes();
  }

  const handleChange = (e) => {
    if (allRecipes) {
      setState({
        ...state,
        showResults: true,
        searchParameters: e.target.value,
        filtered: allRecipes.filter(recipe =>
          recipe.strMeal.toLowerCase().includes(e.target.value.toLowerCase())
        )
      });
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter')
      console.log('Search submited from Enter!');
  }

  const handleButtonClick = () => {
    console.log('Search submited from Button!');
  }

  const handleOnBlur = () => {
    setState({
      ...state,
      showResults: false
    })
  }

  return (
    <Fragment>
      <div className='searchbar'>
        <InputGroup className="mt-3 mb-1" >
          <FormControl
            placeholder="Search recipes..."
            aria-label="Search recipes..."
            aria-describedby="basic-addon2"
            onClick={handleClick}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleOnBlur}
          />
          <InputGroup.Append>
            <Button variant="danger" onClick={handleButtonClick}>Search</Button>
          </InputGroup.Append>
        </InputGroup>
        {state.showResults && <SearchResults filteredRecipes={state.filtered} />}
      </div>
    </Fragment>

  )
}

const mapStateToProps = state => ({
  allRecipes: state.recipes.allRecipes
});

const mapDispatchToProps = dispatch => ({
  getAllRecipes: () => dispatch(getAllRecipes())
})

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar2);
