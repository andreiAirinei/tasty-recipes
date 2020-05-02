import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title text-center">
      <div className="title d-inline-block text-center bg-white">
        <h2 className='d-inline px-3 '>{title}</h2>
      </div>
    </div>
  )
}

export default SectionTitle;
