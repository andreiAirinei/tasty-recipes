import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import ReactLogo from '../../assets/svgs/solid/search.svg';

import { getAllRecipes } from '../../redux/recipes/recipes.actions';

const Searchbar = ({ history, getAllRecipes, allRecipes }) => {
  const [parameters, setParameters] = useState('');

  const handleClick = () => allRecipes === null && getAllRecipes();

  const handleKeyDown = (e) => {
    // Execute history push only if parameters are not empty
    if (e.key === 'Enter' && parameters !== '') {
      history.push(`/meal/${parameters.value}`);
    };
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
    <div className='searchbar mt-3 d-flex bg-white p-1' onClick={handleClick}>
      <Select
        theme={customTheme}
        // Empty array as 'options' if recipes list is not ready
        options={allRecipes ? allRecipes : []}
        placeholder='Search...'
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
      <Link to='/recipe' variant="danger" className="btn btn-danger search-icon p-0">
        <img src={ReactLogo} alt="Search Icon" />
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  allRecipes: state.recipes.allRecipes
});

const mapDispatchToProps = dispatch => ({
  getAllRecipes: () => dispatch(getAllRecipes())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Searchbar));
