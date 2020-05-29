import React from 'react';

import { connect } from 'react-redux';

const SidebarButton = ({
  text,
  handleClick,
  iconName = null,
  isListItem = false,
  isCountry,
  activeCategory
}) => {

  return (
    <button
      data-name={text}
      data-iscountry={isCountry}
      onClick={handleClick}
      className={`btn-category w-100 text-left text-decoration-none border-0 px-2 py-1 d-flex align-items-center justify-content-between 
      ${isListItem && `btn-category--secondary`}
      ${activeCategory.type === text && `btn-category--active`}
      `}
    >
      {text}
      {
        iconName && (iconName !== 'Unknown') && < img src={require(`../../../assets/flags/${iconName}.png`)} alt={`${iconName} flag`} className='dropdown-flag text-right' />
      }
    </button>
  )
}

const mapStateToProps = state => ({
  activeCategory: state.category.activeCategory
})

export default connect(mapStateToProps)(SidebarButton);
