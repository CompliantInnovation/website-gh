import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import NumberScroll from '../components/NumberScroll'
import FooterBar from '../components/Footer'

export default function Provider() {
  return (
    <>
      <Head>
        <title>DocSpera</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderNav />

      <div className='container'>
        <h2 style={{ maxWidth: 450 }}>
          Intelligent Surgical Coordination: Enabling Efficiency and Profitability
        </h2>
        <p>
          DocSpera is an integrated solution, helping manage coordination across multiple sites and
          teams, drive improved efficiencies and deliver better care.
        </p>

        <div className='statistics'>
          <div>
            <NumberScroll imgSrc='images/surgeon-users.png' number={6000} title='Surgeons' plus />
            <NumberScroll
              imgSrc='images/patient-volume.png'
              number={100000}
              title='Monthly Patient Visits'
              plus
            />
          </div>
          <div>
            <NumberScroll
              imgSrc='images/practices.png'
              number={300}
              title='Practices, ASCs and Hospitals'
              plus
            />
            <NumberScroll
              imgSrc='images/tech-partners.png'
              number={350000}
              title='Tech Partners'
              plus
            />
          </div>
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
      </div>

      <FooterBar />
      <style jsx>{`
        .container {
          padding: 0 5vw;
        }
        h2 {
          margin-top: 80px;
          max-width: 600px;
        }

        .provider-solutions {
          margin: 0 auto;
          max-width: 1150px;
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
