import React from 'react'

export default function InfoCard ({ icon, subText, mainText, mainTextIcon }) {
  return (
    <div className="card-container">
      <div className="icon-container">{icon}</div>
      <p className="main-text">
        {mainText} {mainTextIcon ? mainTextIcon : ''}
      </p>
      <p className="sub-text">{subText}</p>

      <style jsx>{`
        .card-container {
          box-shadow: 0px 1px 4px #00000099;
          border-radius: 5px;
          width: 179px;
          height: 188px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          background: white;
          z-index: 2;
        }

        .icon-container {
          margin-top: 10px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          min-height: 40px;
        }

        .main-text {
          color: #002855;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 24px;
          line-height: 28px;
          margin-bottom: 10px;
        }

        .main-text span {
          transform: translateY(5px);
        }

        .sub-text {
          color: #0096fa;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
