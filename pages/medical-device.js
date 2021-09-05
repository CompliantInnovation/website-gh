import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import NumberScroll from '../components/NumberScroll'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

export default function MedicalDevicePage() {
  return (
    <>
      <Head>
        <title>DocSpera</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderNav />
      <div className='container'>
        <h2>Power Your Digital Surgery Offerings & Data</h2>
        <p>
          DocSpera is an integrated, comprehensive, and compliant digital solution powering
          patient-specific data, enabling insights and driving efficient supply chain.
        </p>
        <div className='statistics'>
          <NumberScroll
            imgSrc='/images/surgeon-users.png'
            number={6000}
            title='Surgeon Users'
            plus
          />
          <NumberScroll
            imgSrc='/images/surgical-cases.png'
            number={350000}
            title='Surgical Cases'
            plus
          />
          <NumberScroll
            imgSrc='/images/medical-device.png'
            number={'3/5'}
            title='Top Medical Device Companies'
          />
          <NumberScroll imgSrc='/images/tech-partners.png' number={30} title='Tech Partners' plus />
        </div>

        <div id='offerings-section'>
          <div id='offerings'>
            <h2>Enterprise Offerings and Outcomes</h2>
            <div id='offerings-divs'>
              <div>
                <div className='title'>
                  <img />
                  <h4>Advanced Case Notification</h4>
                </div>
                <p>Early case demand signal to improve supply chain and robotics</p>
                <button>View</button>
              </div>
              <div>
                <div className='title'>
                  <img />
                  <h4>Integrated Provider Solutions</h4>
                </div>
                <p>Enhance enterprise software offerings</p>
                <button>View</button>
              </div>
              <div>
                <div className='title'>
                  <img />
                  <h4>Data Intelligence</h4>
                </div>
                <p>Enhance enterprise software offerings</p>
                <button>View</button>
              </div>
            </div>
          </div>
        </div>

        <div id='solve-challenges-section'>
          <h2>Solve Urgent Challenges</h2>
          <p>With early, integrated, real-time capture of surgical cases:</p>
          <div id='solve-challenges-divs'>
            <div>
              <img />
              <p>
                Improve inventory management across shipping, sterilization, tray sizing,
                cancellation management, etc
              </p>
            </div>
            <div>
              <img />
              <p>
                Deepen your understanding of your product performance in real world clinical
                settings
              </p>
            </div>
            <div>
              <img />
              <p>Strengthen market position through strategic offerings & engagements</p>
            </div>
          </div>
        </div>

        <div id='advanced-case-notification'>
          <h2>Advanced Case Notification</h2>
          <p>Improves Supply Chain Efficiencies</p>
          <p>
            <ul>
              <li>Inventory</li>
              <li>Shipping</li>
              <li>Right Size</li>
              <li>Right Location</li>
            </ul>
          </p>
          <img src='images/advanced-case-notification.svg' />
        </div>

        <div className='provider-solutions'>
          <h2>Integrated Provider Solutions</h2>
          <p>
            Best in class SaaS, real-time, predictive platform for the entire surgical ecosystem
          </p>
          <div className='provider-solutions-row'>
            <div>
              <img src='images/scheduling.png' />
              <h4>Integrated Surgical Scheduling</h4>
              <h6>Coordination across entire care team</h6>
              <p>
                <ul>
                  <li>Case scheduling & OR management</li>
                  <li>Image Sharing</li>
                  <li>EMR & Telelhealth intergration</li>
                </ul>
              </p>
            </div>
            <div>
              <img src='images/smart-scheduling.png' />
              <h4>Optimized & Coordinated</h4>
              <h6>Coordination across entire care team</h6>
              <p>
                <ul>
                  <li>Real time coordination between clinic, OR Team & Device Rep</li>
                  <li>Intelligent case backlog booking</li>
                </ul>
              </p>
            </div>
            <div>
              <img src='images/episode-of-care.png' />
              <h4>Episode of Care</h4>
              <h6>Coordination across entire care team</h6>
              <p>
                <ul>
                  <li>Post-acute management and recovery coordination</li>
                  <li>Risk stratification & management</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div id='insights-section'>
          <h2>Data Intelligence & RWD Insights</h2>
          <p>Support the capture of real-word data and insights across the surgical continuum</p>
          <img src='/images/demand-intel.png' />
          <div id='insights-copy-div'>
            <div>
              <div className='insight-title-div'>
                <img src='' />
                <h4>Demand Intelligence</h4>
              </div>
              <p>View aggregated case demand information by region</p>
            </div>
            <div>
              <div className='insight-title-div'>
                <img src='' />
                <h4>Market Intelligence</h4>
              </div>
              <p>Understand market share across specialty and therapeutic areas</p>
            </div>
            <div>
              <div className='insight-title-div'>
                <img src='' />
                <h4>Device Intelligence & Registry</h4>
              </div>
              <p>Longitudinal data from pre-op to recovery and support post market surveillance</p>
            </div>
          </div>
        </div>

        <div className='carousel-container'>
          <div className='case-study-section'>
            <h2>Case Studies</h2>
            <Carousel type='case-study' />
          </div>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .container > h2,
        .container > p {
          padding: 0 5vw;
        }

        button {
          background-color: var(--blueDocspera);
          border: none;
          border-radius: 5px;
          filter: drop-shadow(0, 3px, 6px, black);
          color: white;
          padding: 5px 10px;
          font-size: 14px;
          letter-spacing: 1px;
          position: absolute;
          right: 10px;
          bottom: 10px;
        }

        h2 {
          margin-top: 80px;
        }

        .statistics {
          padding-top: 200px;
          display: flex;
          justify-content: center;
        }

        #offerings-section {
          margin-top: 100px;
          padding: 150px 0;
          width: 100%;
          background-color: var(--blueDocspera);
        }

        #offerings h2 {
          margin-top: 0;
          color: white;
        }

        #offerings {
          margin: 0 auto;
          max-width: 1150px;
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
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }

        #offerings-divs .title {
          display: flex;
        }

        #offerings-divs h4 {
          margin: 0;
        }

        #solve-challenges-section {
          margin: 0 auto;
          max-width: 1150px;
          padding: 0 5vw;
        }

        #solve-challenges-divs {
          display: flex;
        }

        #solve-challenges-divs > div {
          background-color: white;
          border-radius: 10px;
          margin: 10px;
          padding: 10px;
          filter: drop-shadow(0 0px 10px lightgray);
        }

        #solve-challenges-divs > div > img {
          width: 100%;
          min-height: 100px;
        }

        #insights-section {
          margin: 0 auto;
          max-width: 1150px;
          padding: 0 5vw;
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
        }

        .insight-title-div img {
          height: 25px;
          width: 25px;
          margin-right: 10px;
        }

        #advanced-case-notification {
          margin: 0 auto;
          max-width: 1150px;
          padding: 0 5vw;
        }

        #advanced-case-notification ul {
          margin-left: -20px;
        }

        #advanced-case-notification img {
          width: 100%;
        }

        .provider-solutions {
          margin: 0 auto;
          max-width: 1150px;
          padding: 0 5vw;
        }

        .provider-solutions-row {
          display: flex;
          justify-content: space-between;
        }

        .provider-solutions-row > div {
          padding: 10px;
        }

        .provider-solutions-row img {
          width: 300px;
          height: 180px;
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
      `}</style>
    </>
  )
}
