import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import NumberScroll from '../components/NumberScroll'
import Carousel from '../components/Carousel'
import FooterBar from '../components/Footer'

export default function MedicalDevicePage() {
  return (
    <>
      <Head>
        <title>DocSpera</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderNav />
      <div className='container'>
        <h2>
          Power Your Digital and Surgical solutions using a Comprehensive, Intelligent Care
          Coordination platform
        </h2>
        <p>
          DocSpera is an integrated, comprehensive, and compliant digital solution powering
          patient-specific data, enabling Clinical insights, including an efficient supply chain.
        </p>
        <img src='/website-gh/images/medical-device-art-work.png' id='business' width={570} />
        <div className='statistics'>
          <div>
            <NumberScroll
              imgSrc='/website-gh/images/surgeon-users.png'
              number={6000}
              title='Surgeons'
              plus
            />
            <NumberScroll
              imgSrc='/website-gh/images/surgical-cases.png'
              number={350000}
              title='Surgical Cases'
              plus
            />
          </div>
          <div id='placement'>
            <NumberScroll
              imgSrc='/website-gh/images/medical-device.png'
              number={null}
              title='Top Global Medical Device Companies'
              percent
            />
            <NumberScroll
              imgSrc='/website-gh/images/tech-partners.png'
              number={30}
              title='Technology Partners'
              plus
            />
          </div>
        </div>

        <div id='offerings-section'>
          <div id='offerings' className='inner-div'>
            <h2 style={{ marginBottom: 20 }}>Enterprise Offerings & Outcomes</h2>
            <div id='offerings-divs'>
              <div>
                <h3>Docspera Demand</h3>
                <img src='/website-gh/images/case-notification.png' />
                <h4>Advanced Case Notification</h4>
                <p>
                  Early and reliable case demand signal to improve case support preparedness and
                  supply chain management
                </p>
                <p className='outcome'>
                  BENEFIT: Up to 5 weeks additional time for more accurate case preparation
                </p>
                <button>
                  <a href='#advanced-case-notification'>View</a>
                </button>
              </div>
              <div>
                <h3>DocSpera Integrator</h3>
                <img src='/website-gh/images/provider-solutions.png' height='auto' />
                <h4>Integrated Provider Solutions</h4>
                <p>
                  Flexible platform & modules to integrate and enhance multiple enterprise software
                  offerings
                </p>
                <p className='outcome'>
                  BENEFIT: Offer better digital offerings to providers, not just individual
                  capabilities
                </p>
                <button>
                  <a href='#integrated-providers-solutions'>View</a>
                </button>
              </div>
              <div>
                <h3>DocSpera Insights</h3>
                <img src='/website-gh/images/data-intelligence.png' />
                <h4>Data Intelligence & RWD Insights</h4>
                <p>
                  Support the capture of real-world data across the surgical continuum - from
                  surgical decision to recovery.
                </p>
                <p className='outcome'>
                  BENEFIT: Provide clinical registry enablement, regional trends and outcome studies
                </p>
                <button>
                  <a href='#insights-section'>View</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id='solve-challenges-section' className='inner-div'>
          <h2 style={{ marginBottom: 0 }}>Solving Urgent C-Suite Challenges </h2>
          <p style={{ marginTop: 0 }}>
            With early, integrated, real-time capture of surgical cases:
          </p>
          <div id='solve-challenges-divs'>
            <div>
              <h4>Inventory and Logistic Costs</h4>
              <img src='/website-gh/images/cancellations.png' />
              <p>
                Improved case preparedness and inventory management through earlier, more integrated
                real-time updates of surgical case
              </p>
              <p>
                70% reduction in implant needs driving improvements across shipping, sterilization,
                tray sizing, cancellation management, etc.
              </p>
            </div>
            <div>
              <h4>Product/Data Understanding</h4>
              <img src='/website-gh/images/data-driven.png' />
              <p>Deeper understanding of your product performance across continuum of care</p>
              <p>
                Access real-world data and gain insight of your product performance in real-world
                clinical settings
              </p>
            </div>
            <div>
              <h4>Market Penetration</h4>
              <img src='/website-gh/images/strategic.png' />
              <p>
                Strengthen market position and become a more strategic partner to your customers
                through diversified and easily managed risk-sharing based offerings
              </p>
              <p>
                Complement implant sales with digital offerings that extends your solutions in more
                strategic engagements
              </p>
            </div>
          </div>
        </div>

        <div id='advanced-case-notification' className='inner-div'>
          <h3 style={{ marginTop: 100, marginBottom: 0 }}>DocSpera Demand</h3>
          <h2 style={{ marginTop: 0, marginBottom: 0 }}>Real Time Advanced Case Notification</h2>
          {/* <h2 style={{ marginTop: 100, marginBottom: 0 }}> Real Time Advanced Case Notification</h2> */}

          <p style={{ margin: 0 }}>Improves Case Preparedness and Supply Chain Efficiencies</p>
          <div style={{ display: 'flex', marginLeft: -20, marginTop: 20 }}>
            <ul>
              <li className='badge'>Inventory</li>
              <li className='badge'>Shipping</li>
            </ul>
            <ul>
              <li className='badge'>Right Size</li>
              <li className='badge'>Right Location</li>
            </ul>
          </div>
          <img src='/website-gh/images/advanced-case-notification.png' />
        </div>

        <div className='provider-solutions inner-div'>
          <h2>Integrated Provider Solutions</h2>
          <p>
            Best in class SaaS, real-time, predictive platform for the entire surgical ecosystem
          </p>
          <div className='provider-solutions-row'>
            <div>
              {/* <img src='/website-gh/images/scheduling.png' /> */}
              <div className='img-div'>
                <img src='/website-gh/images/share-calendar.png' />
              </div>
              <h4>Integrated Surgical Scheduling & Coordination Across Entire Care Team</h4>
              {/* <h6>Coordination across entire care team</h6> */}
              <p>
                <ul>
                  <li>Case scheduling & OR management</li>
                  <li>Image Sharing</li>
                  <li>EMR & Telehealth integration</li>
                </ul>
              </p>
              <div>Integrated Workflow</div>
            </div>
            <div>
              <div className='img-div'>
                <img src='/website-gh/images/smart-scheduling.png' />
              </div>
              <h4>Surgical Dashboard for Managing Upcoming Cases</h4>
              {/* <h6>Manage upcoming cases</h6> */}
              <p>
                <ul>
                  <li>Real-time coordination between Clinic, OR Team & Device Rep</li>
                  <li>Intelligent case backlog and cancellations re-booking</li>
                </ul>
              </p>
              <div>Optimized and Coordinated</div>
            </div>
            <div>
              {/* <img src='/website-gh/images/episode-of-care.png' /> */}
              <div className='img-div'>
                <img src='/website-gh/images/eoc-mac.png' />
              </div>
              <h4>Episode of Care Tracker for Post operative care management </h4>
              {/* <h6> Tracker for Post operative care management</h6> */}
              <p>
                <ul>
                  <li>Post-acute management and recovery coordination</li>
                  <li>Risk stratification & management</li>
                </ul>
              </p>
              <div>Outcomes and Risk Management</div>
            </div>
          </div>
        </div>

        <div id='insights-section' className='inner-div'>
          <h3 style={{ marginTop: 100, marginBottom: 0 }}>DocSpera Insights</h3>
          <h2 style={{ marginTop: 0, marginBottom: 0 }}>Data Intelligence & RWD Insights</h2>
          <p>
            Support improved care delivery using real-world data and insights across the surgical
            continuum{' '}
          </p>
          <img src='/website-gh/images/demand-intel.png' />
          <div id='insights-copy-div'>
            <div>
              <div className='insight-title-div'>
                <img src='/website-gh/images/line-graph.png' />
                <h4>Demand Intelligence</h4>
              </div>
              <p>View aggregated case demand information by region</p>
            </div>
            <div>
              <div className='insight-title-div'>
                <img src='/website-gh/images/mac.png' />
                <h4>Market Intelligence</h4>
              </div>
              <p>Understand market share across specialty and therapeutic areas</p>
            </div>
            <div>
              <div className='insight-title-div'>
                <img src='/website-gh/images/target.png' />
                <h4>Device Intelligence & Registry</h4>
              </div>
              <p>Longitudinal data from pre-op to recovery and support post market surveillance</p>
            </div>
          </div>
        </div>

        {/* <div className='carousel-container'>
          <div className='case-study-section'>
            <h2>Case Studies</h2>
            <Carousel type='case-study' />
          </div>
        </div> */}
      </div>
      <FooterBar />

      <style jsx>{`
        .container > h2,
        .container > p {
          padding: 0 5vw;
        }

        button {
          background-color: var(--blueDocspera);
          border: none;
          border-radius: 5px;
          color: white;
          padding: 5px 10px;
          font-size: 16px;
          position: absolute;
          right: 10px;
          bottom: 10px;
          font-weight: 500;
          filter: drop-shadow(0 5px 10px transparent);
        }

        button:hover {
          filter: drop-shadow(0 5px 5px var(--blueSky));
          transform: translate(0, -3px);
          transition: all 0.2s;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        h2 {
          margin-top: 80px;
          z-index: 1000;
        }

        #business {
          width: auto;
          height: 70vh;
          top: 0;
          z-index: -1000;
          border: none;
          display: block;
          margin: 0 auto;
          margin-top: -40px;
        }

        .statistics {
          margin-top: -50px;
        }

        #offerings-section {
          margin-top: 50px;
          padding: 70px 0 100px 0;
          width: 100%;
          background-color: var(--blueDocspera);
        }

        #offerings h2 {
          margin-top: 0;
          color: white;
        }

        #offerings {
          padding: 0 5vw;
        }

        #offerings-divs {
          display: flex;
          justify-content: space-between;
          flex: 1;
        }

        #offerings-divs > div {
          position: relative;
          flex: 1;
          border-radius: 10px;
          background-color: white;
          padding: 15px;
          padding-bottom: 30px;
          margin: 10px;
        }

        #offerings-divs img {
          width: 100%;
          max-height: 175px;
          height: auto;
          width: auto;
          border-radius: 5px;
          display: block;
          margin: 0 auto;
          margin-bottom: 10px;
        }

        #offerings-divs h4,
        h3 {
          margin: 0;
        }

        #offerings-divs .outcome {
          color: var(--blueDocspera);
        }

        #solve-challenges-divs {
          display: flex;
        }

        #solve-challenges-divs > div {
          background-color: white;
          margin: 10px;
          padding: 10px;
          text-align: center;
        }

        #solve-challenges-divs > div > img {
          max-height: 150px;
          min-height: 100px;
          display: block;
          margin: 0 auto;
          margin-bottom: 15px;
        }

        #solve-challenges-divs > div > p:nth-child(4) {
          font-size: 12px;
          color: grey;
        }

        #insights-section > img {
          width: 100%;
        }

        #insights-section h4 {
          margin: 0;
          color: var(--blueDocspera);
        }

        #insights-copy-div {
          padding-top: 10px;
          display: flex;
          justify-content: space-around;
        }

        #insights-copy-div p {
          max-width: 285px;
        }

        .insight-title-div {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          height: 50px;
        }

        .insight-title-div img {
          width: 40px;
          height: auto;
          max-height: 40px;
          margin-right: 10px;
        }

        #advanced-case-notification img {
          margin-top: 20px;
          width: 100%;
        }

        #advanced-case-notification ul {
          margin-top: 0;
        }

        #advanced-case-notification li {
          border-radius: 3px;
          margin: 2px;
          color: var(--blueDocspera);
          font-weight: 500;
        }

        .provider-solutions-row {
          display: flex;
          justify-content: space-between;
        }

        .provider-solutions-row > div {
          padding: 10px;
        }

        .img-div {
          height: 250px;
          background-color: transparent !important;
        }

        .provider-solutions-row img {
          max-width: 300px;
          height: 100%;
          border-radius: 10px;
          filter: drop-shadow(0 0px 10px lightgray);
        }

        .provider-solutions-row h4 {
          margin: 0;
          margin-top: 20px;
          color: var(--blueDocspera);
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
          max-width: 300px;
        }

        .provider-solutions-row > div > div {
          padding: 10px;
          // background-color: var(--blueDocspera);
          text-align: center;
          border-radius: 18px;
          color: white;
          width: 100%;
        }

        .view-product-btn {
          position: static;
          width: 100%;
          height: 40px;
        }
      `}</style>
    </>
  )
}
