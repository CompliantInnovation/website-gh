import React from 'react'

const ProviderSolutions = (props) => {
  return (
    <div className='provider-solutions inner-div'>
      <h3 className='title'>Provider Premium</h3>
      <h2 className='title-h2'>Integrated Provider Solutions</h2>
      <p>Best in class SaaS, real-time, predictive platform for the entire surgical ecosystem</p>
      <div className='provider-solutions-row'>
        <div className='content'>
          <div>
            <div className='img-div'>
              <img src='images/share-calendar.png' />
            </div>
            <h4>Integrated Surgical Scheduling & Coordination Across Entire Care Team</h4>
            <p>
              <ul>
                <li>Case scheduling & OR management</li>
                <li>Image Sharing</li>
                <li>EMR & Telehealth integration</li>
              </ul>
            </p>
          </div>
          <a href='https://docspera.com/scheduling' target='_blank'>
            <button className='view-product-btn'>View Scheduling Solutions</button>
          </a>
        </div>
        <div className='content'>
          <div>
            <div className='img-div'>
              <img src='images/product-shots/smart-scheduling.png' />
            </div>
            <h4>Surgical Dashboard for Managing Upcoming Cases</h4>
            <p>
              <ul>
                <li>Real-time coordination between Clinic, OR Team & Device Rep</li>
                <li>Intelligent case backlog and cancellations re-booking</li>
              </ul>
            </p>
          </div>
          <a href='https://docspera.com/or' target='_blank'>
            <button className='view-product-btn'>View Management Solutions</button>
          </a>
        </div>
        <div className='content'>
          <div>
            <div className='img-div'>
              <img src='images/product-shots/EOC.png' />
            </div>
            <h4>Episode of Care Tracker for Post Operative Care Management </h4>
            <p>
              <ul>
                <li>Post-acute management and recovery coordination</li>
                <li>Risk stratification & management</li>
              </ul>
            </p>
          </div>
          <a href='https://docspera.com/eoc' target='_blank'>
            <button className='view-product-btn'>View EOC Solutions</button>
          </a>
        </div>
      </div>
      <style jsx>{`
        .provider-solutions-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .provider-solutions-row > div {
          margin: 10px;
          padding: 10px;
          flex: 1;
          background-color: white;
          filter: drop-shadow(0 0px 10px lightgray);
          min-width: 300px;
          border-radius: 10px;
          padding: 15px;
        }

        .content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .img-div {
          height: 230px;
          background-color: transparent !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .img-div > img {
          max-height: 100%;
          max-width: 100%;
          border-radius: 10px;
          filter: drop-shadow(0 0px 10px lightgray);
        }

        .provider-solutions-row h4 {
          color: var(--blueDocspera);
          text-align: center;
          max-width: 350px;
          margin: 0 auto;
          padding-top: 20px;
          padding-left: 10px;
          padding-right: 10px;
        }

        .provider-solutions-row h6 {
          color: var(--blueDark);
          font-size: 16px;
          font-weight: 500;
          margin: 0;
        }

        .provider-solutions-row ul {
          margin-left: -20px;
        }

        .provider-solutions-row p {
          padding-left: 10px;
          padding-right: 10px;
          margin: 0 auto;
          max-width: 350px;
        }

        @media (max-width: 650px) {
          .provider-solutions-row {
            display: flex;
            flex-direction: column;
          }

          .provider-solutions-row div {
            align-content: center;
            align-items: center;
          }
        }

        a {
          text-decoration: none;
          width: 100%;
        }

        .view-product-btn {
          background-color: var(--blueDocspera);
          border: none;
          border-radius: 5px;
          color: white;
          padding: 5px 10px;
          font-size: 16px;
          font-weight: 500;
          width: 100%;
          height: 40px;
          max-width: 500px;
          display: block;
          margin: 0 auto;
        }

        button:hover {
          cursor: pointer;
          filter: drop-shadow(0 5px 5px var(--blueSky));
          transform: translate(0, -3px);
          transition: all 0.2s;
        }
      `}</style>
    </div>
  )
}

export default ProviderSolutions
