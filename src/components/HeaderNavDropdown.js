import React, { useState, useEffect } from 'react'

const HeaderNavDropdown = ({ state, title, items, onHover }) => {
  const [isHovered, setHovered] = useState(false)

  useEffect(() => {
    isHovered && onHover()
  }, [isHovered])

  return (
    <div style={{ width: 200 }}>
      <div
        id='container'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`title-container  ${isHovered && 'highlight-title'}`}>
          <span className={`title`}>{title}</span>
        </div>
        {isHovered && (
          <div id='nav-items-container'>
            {items?.map((item, idx) => {
              return (
                <a
                  key={idx}
                  onClick={item.onClick}
                  className={item?.id === state?.page ? 'active-a' : ''}
                >
                  {item.pageName}
                </a>
              )
            })}
          </div>
        )}
      </div>
      <style jsx>{`
        #container {
          position: absolute;
          margin-right: 50px;
          margin-title: 8px;
          width: 180px;
        }

        #container:hover {
          color: var(--blueDocspera);
        }

        .title-container {
          position: absolute;
          cursor: default;
          inline-size: max-content;
          margin: 0;
          margin-left: 8px;
          padding: 10px 20px;
          border-radius: 5px;
          z-index: 100;
          width: calc(100% - 15px);
          display: flex;
          justify-content: center;
        }

        .title {
          color: var(--blueDocspera);
          word-break: keep-all;
          font-size: 16px;
          font-weight: bold;
        }

        .highlight-title {
          background-color: var(--blueDocsperaLight);
        }

        #nav-items-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: white;
          border-radius: 10px;
          padding: 60px 20px 10px 20px;
          margin-top: -8px;
          z-index: -8;
          filter: drop-shadow(0px 0px 0.3rem lightgrey);
        }

        .active-a {
          color: var(--blueDocspera);
        }

        a {
          color: grey;
          margin: 0;
          font-weight: normal;
          padding: 5px 0 5px 0;
          font-size: 14px;
          width: 100%;
          text-align: center;
        }

        a:not(:last-child) {
          border-bottom: 1px solid lightgrey;
        }

        a:hover {
          color: black;
          cursor: default;
          cursor: pointer;
          background-color: white;
          border-radius: 0;
        }
      `}</style>
    </div>
  )
}

export default HeaderNavDropdown
