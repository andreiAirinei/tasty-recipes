import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Select, { components } from 'react-select';
import ReactLogo from '../../assets/svgs/solid/search.svg';

import { getAllRecipes } from '../../redux/recipes/recipes.actions';

// Bootstrap Components
import Button from 'react-bootstrap/Button';

const Searchbar = ({ history, match, getAllRecipes, allRecipes }) => {
  const [parameters, setParameters] = useState({});
  // useEffect(() => {
  //   getAllRecipes();
  // }, []);

  const handleClick = () => allRecipes === null && getAllRecipes();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      history.push(`/meal`);
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
    <div className='searchbar mt-3 d-flex' onClick={handleClick}>
      <Select
        theme={customTheme}
        options={allRecipes}
        placeholder='Search...'
        isClearable
        isSearchable
        openMenuOnClick={false}
        noOptionsMessage={() => 'No recipes found.'}
        components={{ DropdownIndicator: () => null }}
        className='w-100'
        onChange={setParameters}
        onKeyDown={handleKeyDown}
      />
      <Link to='/meal' variant="danger" className="btn btn-danger search-icon px-4">
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
