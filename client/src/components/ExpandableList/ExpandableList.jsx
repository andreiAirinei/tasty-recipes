import React, { useState, useRef } from 'react'

const ExpandableList = ({ children, listName }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonExpand = () => {
    if (!dropdownToggle) {
      dropdownRef.current.classList.add('list-area--expanded');
    } else {
      dropdownRef.current.classList.remove('list-area--expanded');
    }
    setDropdownToggle(!dropdownToggle);
  }

  return (
    <div className='expandable-list'>
      <button onClick={handleButtonExpand} className='btn-category w-100 text-left text-decoration-none border-0 px-2 py-1'>
        {listName}
        {dropdownToggle ?
          <img src={require('../../assets/angle-up.svg')} alt="Arrow" className='btn-arrows ml-2' /> :
          <img src={require('../../assets/angle-down.svg')} alt="Arrow" className='btn-arrows ml-2' />
        }
      </button>
      <div ref={dropdownRef} className="list-area ml-3">
        {children}
      </div>
    </div>
  )
}

export default ExpandableList;
