import React, { useState, useRef } from 'react';
import { Sticky } from 'react-sticky';

// Components
import ButtonSecondary from '../../layout/ButtonSecondary';

const CollectionSidebar = () => {

  const [currentButton, setCurrentButton] = useState(null);
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const dropdownRef = useRef(null);

  const handleSidebarButton = e => {
    if (e.target !== currentButton) {
      console.log(e.target.dataset.name);
      e.target.classList.add('btn-category--active');
      if (currentButton) currentButton.classList.remove('btn-category--active');
      setCurrentButton(e.target);
    }
  }

  const handleButtonExpand = () => {
    console.log('Dropdown');
    if (!dropdownToggle) {
      dropdownRef.current.classList.add('category-dropdown--expanded');
    } else {
      dropdownRef.current.classList.remove('category-dropdown--expanded');
    }
    setDropdownToggle(!dropdownToggle);
  }

  return (
    <Sticky topOffset={-150} bottomOffset={150}>
      {
        ({ style, isSticky }) => (
          <div
            className='sidebar-category'
            style={{ ...style, marginTop: isSticky ? '150px' : '0px' }}
          >
            <ButtonSecondary handleClick={handleSidebarButton} text='All' />
            <ButtonSecondary handleClick={handleSidebarButton} text='Latest' />
            <ButtonSecondary handleClick={handleSidebarButton} text='Dish types' />
            <ButtonSecondary handleClick={handleSidebarButton} text='Country' />
            <button onClick={handleButtonExpand} className='btn-category w-100 text-left text-decoration-none border-0 px-2 py-1 text-dk'>
              Other
                        <img src={require('../../../assets/angle-down.svg')} alt="Dropdown" className='ml-2' />
              <img src={require('../../../assets/angle-up.svg')} alt="Dropdown" className='ml-2' />
            </button>
            <div ref={dropdownRef} className="category-dropdown ml-3">
              <ButtonSecondary handleClick={handleSidebarButton} text='Item1' />
              <ButtonSecondary handleClick={handleSidebarButton} text='Item2' />
              <ButtonSecondary handleClick={handleSidebarButton} text='Item3' />
              <ButtonSecondary handleClick={handleSidebarButton} text='Item4' />
              <ButtonSecondary handleClick={handleSidebarButton} text='Item5' />
            </div>
          </div>)
      }
    </Sticky>
  )
}

export default CollectionSidebar
