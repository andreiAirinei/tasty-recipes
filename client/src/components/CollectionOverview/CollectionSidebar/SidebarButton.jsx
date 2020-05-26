import React from 'react';

const SidebarButton = ({
  text,
  handleClick,
  iconName = null,
  isListItem = false
}) => {
  return (
    <button
      data-name={text}
      onClick={handleClick}
      className={`btn-category w-100 text-left text-decoration-none border-0 px-2 py-1 d-flex align-items-center justify-content-between ${isListItem && `btn-category--secondary`}
      `}
    >
      {text}
      {
        iconName && (iconName !== 'Unknown') && < img src={require(`../../../assets/flags/${iconName}.png`)} alt={`${iconName} flag`} className='dropdown-flag text-right' />
      }
    </button>
  )
}

export default SidebarButton;
