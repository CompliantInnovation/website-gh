import React from 'react'

const LeaderProfile = ({ leader }) => {
  return (
    <div className='profile'>
      <img
        src={`https://assets.d4.docspera.com/home/images/${leader.picture}`}
        style={{ width: '110%', minHeight: 200, minWidth: 220 }}
      />
      <div className='panel'>
        <h3>{leader.name}</h3>
        <h4>{leader.title}</h4>
        <div className='linkedIn-box'>
          <div onClick={() => window.open(leader.linkedIn)}>
            <img src={`https://assets.d4.docspera.com/home/images/linkedin.png`} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .profile {
          margin: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 225px;
          justify-items: stretch;
        }

        .panel {
          background-color: white;
          filter: drop-shadow(0px 0px 0.3rem lightgrey);
          width: 100%;
          border-radius: 8px;
          padding-top: 100px;
          margin-top: -130px;
          flex-grow: 1;
        }
        h3 {
          text-align: center;
          color: var(--blueDocspera);
          margin-bottom: 0;
        }
        h4 {
          text-align: center;
          font-size: 14px;
          margin-top: 4px;
        }
        .linkedIn-box {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          padding: 6px 14px;
          cursor: pointer;
        }
        .linkedIn-box div {
          width: 60px;
          z-index: 100;
        }

        .linkedIn-box div:hover {
          cursor: pointer;
        }

        img {
          width: 100%;
          z-index: 100;
        }
      `}</style>
    </div>
  )
}

export default LeaderProfile
