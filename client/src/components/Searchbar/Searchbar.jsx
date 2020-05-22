import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import ReactLogo from '../../assets/svgs/solid/search.svg';

import { getAllRecipes } from '../../redux/recipes/recipes.actions';

const Searchbar = ({ history, getAllRecipes, allRecipes }) => {
  const [parameters, setParameters] = useState('');

  useEffect(() => {
    !allRecipes && getAllRecipes();
  })

  const handleKeyDown = (e) => {
    // Execute history push only if parameters are not empty
    if (e.key === 'Enter' && parameters !== '' && parameters !== null) {
      history.push(`recipes/recipe/${parameters.value}`);
    };
  }

  const handleSearchButton = () => {
    if (parameters !== '' && parameters !== null) {
      history.push(`recipes/recipe/${parameters.value}`);
    }
  }

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: '#FFE5C9',
        primary: 'orange'
      }
    }
  }

  return (
    <div className='searchbar mt-3 d-flex bg-white p-1'>
      <Select
        theme={customTheme}
        // Empty array as 'options' if recipes list is not ready
        options={allRecipes ? allRecipes : []}
        placeholder='Find it here...'
        isClearable
        isSearchable
        openMenuOnClick={false}
        noOptionsMessage={() => 'No recipes found.'}
        components={{ DropdownIndicator: () => null }}
        className='searchbar-select w-100'
        classNamePrefix="select"
        onChange={setParameters}
        onKeyDown={handleKeyDown}
      />

      {/* <Link to={`/recipe/${parameters.value}`} > */}
      <button variant="danger" className="btn btn-danger search-icon p-0" onClick={handleSearchButton}>
        <img src={ReactLogo} alt="Search Icon" />
      </button>
      {/* </Link> */}

    </div >
  )
}

const mapStateToProps = state => ({
  allRecipes: state.recipes.allRecipes
});

const mapDispatchToProps = dispatch => ({
  getAllRecipes: () => dispatch(getAllRecipes())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Searchbar));
