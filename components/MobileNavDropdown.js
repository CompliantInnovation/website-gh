import React, { useState } from 'react'

const MobileNavDropdown = ({ state, title, items }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className='container' onClick={() => setDropdownOpen(!isDropdownOpen)}>
      <div className='menu-item'>
        <div>{title}</div>
        <img
          id={isDropdownOpen ? 'chevron-img' : ''}
          className='chevron-img'
          src='https://assets.d4.docspera.com/home/images/graphics/chevron.png'
        />
      </div>

      {isDropdownOpen && (
        <div className='dropdown'>
          <div className='underline'></div>
          {items.map((navItem) => navItem.display)}
        </div>
      )}

      <style jsx>{`
        .container {
          background-color: white;
          margin-bottom: 10px;
        }

        .container .menu-item {
          margin: 0;
        }

        .menu-item {
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
          margin-bottom: 10px;
          cursor: pointer;
          border: 1px solid white;
          border-radius: 3px;
        }

        .menu-item img {
          height: 16px;
        }

        .dropdown {
          padding-bottom: 10px;
          font-size: 16px;
        }

        .underline {
          height: 1px;
          width: 95%;
          margin: auto;
          background-color: var(--blueSky);
          border-radius: 10px;
          margin-bottom: 10px;
        }

        #chevron-img {
          transform: rotate(90deg);
          transition-duration: 0.2s;
        }
      `}</style>
    </div>
  )
}

export default MobileNavDropdown
