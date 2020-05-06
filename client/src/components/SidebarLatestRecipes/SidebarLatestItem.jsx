import React from 'react';

const SidebarLatestItem = ({ recipeID, name, category, imageURL }) => {
  return (
    <div className='latest-list-item'>
      <img src={`${imageURL}/preview`} alt={name} />
    </div>
  )
}

export default SidebarLatestItem;
