const ProviderSolutions = ({ premium }) => {
  return (
    <div style={{ backgroundColor: 'var(--blueXLight)', width: '100%' }}>
      <div className='provider-solutions inner-div'>
        {premium && <h3 className='title'>DocSpera Premium</h3>}
        <h2 className='title-h2'>Integrated Provider Solutions</h2>
        <p>
          Efficient care coordination through patient's entire surgical journey using a best in
          class, real-time predictive platform
        </p>
        <div className='provider-solutions-row'>
          <div className='content'>
            <div>
              <div className='img-div'>
                <img src='https://assets.d4.docspera.com/home/images/product-shots/Laptop-Calendar.png' />
              </div>
              <div className='h4-div'>
                <h4>Integrated Surgical Scheduling & Coordination Across Entire Care Team</h4>
              </div>
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
                <img src='https://assets.d4.docspera.com/home/images/product-shots/smart-scheduling.png' />
              </div>
              <div className='h4-div'>
                <h4>Intelligent Dashboard for Managing Upcoming Cases</h4>
              </div>
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
                <img src='https://assets.d4.docspera.com/home/images/product-shots/EOC.png' />
              </div>
              <div className='h4-div'>
                <h4>Episode of Care Tracker for Post Operative Care Management </h4>
              </div>
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
      </div>

      <style jsx>{`
        .provider-solutions-row {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 1000px) {
          .provider-solutions-row {
            flex-wrap: wrap;
          }
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
          max-width: 300px;
        }

        .content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .img-div {
          min-height: 230px;
          background-color: transparent !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1000px) {
          .img-div {
            width: 100%;
            height: auto;
          }
        }

        .img-div > img {
          max-height: 100%;
          max-width: 100%;
          border-radius: 10px;
          filter: drop-shadow(0 0px 10px lightgray);
        }

        .h4-div {
          height: 90px;
          display: flex;
          align-items: center;
        }

        .provider-solutions-row h4 {
          text-align: center;
          color: black;
          max-width: 350px;
          margin: 0 auto;
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
          margin-top: -10px;
          max-width: 350px;
        }

        @media (max-width: 650px) {
          .provider-solutions-row {
            display: flex;
            flex-direction: column;
            align-items: center;
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
          background-color: white;
          border: 2px solid var(--blueDocspera);
          border-radius: 5px;
          color: var(--blueDocspera);
          padding: 5px 10px;
          font-size: 16px;
          font-weight: 500;
          width: 100%;
          height: 40px;
          max-width: 350px;
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
