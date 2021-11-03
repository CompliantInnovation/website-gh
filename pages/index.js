import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import Link from 'next/link'
import NumberScroll from '../components/NumberScroll'
import FooterBar from '../components/Footer'
import { useMedia } from '../hooks/useMedia'

export default function Home() {
  const isBrowser = () => typeof window !== 'undefined'
  let smallScreen
  if (isBrowser) {
    smallScreen = useMedia('(max-width: 1100px)')
  }

  return (
    <div className='container'>
      <Head>
        <title>DocSpera | HIPAA Compliant, Integrated Surgical Coordination Platform</title>
        <link rel='icon' href='/website-gh/favicon.ico' />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
      </Head>
      <HeaderNav />

      <div>
        <div id='landing-bg-div' style={{border: '2px solid pink', postion: 'relative'}}>
          {/* <img id='landing-bg' src='/website-gh/images/iPad-landing-bluer.png' /> */}
        </div>
        <div id='hero-h1'>
        {useMedia('(max-width: 950px)') ? (
            <h1 style={{width: '90%'}}>Intelligent Surgical Planning Platform 
              from Diagnosis to Recovery</h1>
        ) : (
            <h1 >Intelligent Surgical Planning Platform <br></br> from Diagnosis to Recovery</h1>
        )}
        </div>

        <div className='statistics'>
          <div>
            <NumberScroll
              imgSrc='/website-gh/images/patient-volume.png'
              number={100000}
              title='Monthly Patient Volume'
              plus
            />
            <NumberScroll
              imgSrc='/website-gh/images/surgeon-users.png'
              number={6000}
              title='Surgeon Users'
              plusπ
            />
          </div>
          <div>
            <NumberScroll
              imgSrc='/website-gh/images/graphics/episodic-cases.png'
              number={350000}
              title='Episodic Cases'
              plus
            />
            <NumberScroll
              imgSrc='/website-gh/images/practices.png'
              number={300}
              title='Practices, ASCs & Hospitals'
              plus
            />
          </div>
        </div>
      </div>

      {/* Our Vision is to Adress... Section */}
      <div style={{backgroundColor: 'var(--blueXLight)'}}>
        <div className='inner-div'>
          {smallScreen ? (
            <div className='vision-section'>
              <h1 style={{ marginBottom: 35, maxWidth: 550, textAlign: 'center' }}>
                Our Vision is to Address Priorities and Unmet Needs Through a Patient’s Surgical
                Journey
              </h1>
              <div id='iphone-calendar-div'>
                <img id='iphone-calendar' src='/website-gh/images/product-shots/iphone-calendar.png' />
              </div>

              <div id='timeline-div'>
                <img id='timeline-graphic' src='/website-gh/images/graphics/timeline-graphic.png' />
              </div>
            </div>
          ) : (
            <div >
                <h2 style={{ textAlign: 'center', maxWidth: 700, margin: '10px auto 30px auto' }}>
                  Our Vision is to Address Priorities and Unmet Needs Through a Patient’s Surgical
                  Journey
                </h2>
                <div className='vision-section'>
              <div id='iphone-calendar-div'>
                <img id='iphone-calendar' src='/website-gh/images/product-shots/iphone-calendar.png' />
              </div>

              <div id='timeline-div'>
                <img id='timeline-graphic' src='/website-gh/images/graphics/timeline-graphic.png' />
              </div>
                </div>
                
            </div>
          )}
        </div>
      </div>
      

      <div style={{ backgroundColor: 'white' }}>
        <div id='connecting-section' className='inner-div'>
          <div id='words-div'>
            <h1>DocSpera Integrated Care Coordination Platform</h1>
            <h2>
              Connecting <b>Care Teams</b>, <br /> <b>Surgery Locations</b> & <b>Device Partners</b>
            </h2>
            <p style={{ maxWidth: 420, marginLeft: -20 }}>
              <ul>
                <li>
                  Single institution-agnostic interface managing cases from surgery decision to
                  recovery
                </li>
                <li>Seamlessly integrates with EMR systems and PACS</li>
                <li>
                  Current and reliable supply chain signaling for improved logistics and support.
                </li>
                <li>
                  Enables early intervention with predictive indicators for patient compliance,
                  discharge info, & readmission
                </li>
              </ul>
            </p>
          </div>
          <img id='connecting-graphic' src='/website-gh/images/graphics/connected-graphic.png' />
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--blueXLight)' }}>
        <div className='inner-div' id='solutions'>
          <h2 className='products-h2'>We have solutions for...</h2>
          <div className='product-section'>
            <div className='outer-box'>
              <div className='box'>
                <h4>
                  <img src='/website-gh/images/surgeon-users.png' />
                  Providers
                </h4>
                <p>
                  <span>&#10140;</span> Integrated Surgical Scheduling
                </p>
                <p>
                  <span>&#10140;</span> Intelligent Dashboard
                </p>
                <p>
                  <span>&#10140;</span> Episode of Care
                </p>
                <Link href='/provider'>
                  <button>
                    View Provider Solutions{' '}
                    <img className='chevron-img' src='/website-gh/images/graphics/chevron-blue.png' />
                  </button>
                </Link>
              </div>
            </div>
            <div className='outer-box'>
              <div className='box'>
                <h4>
                  <img src='/website-gh/images/medical-device.png' />
                  Device Partners
                </h4>
                <p>
                  <span>&#10140;</span> Advanced Case Notification
                </p>
                <p>
                  <span>&#10140;</span> Integrated Provider Solutions
                </p>
                <p>
                  <span>&#10140;</span> Data Intelligence &amp; RWD Insights
                </p>
                <Link href='/medical-device'>
                  <button>
                    View Device Partner Solutions{' '}
                    <img className='chevron-img' src='/website-gh/images/graphics/chevron-blue.png' />
                  </button>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className='inner-div'>
        <h2 id='docspera-works-h2'>
          DocSpera works with leading health solution Providers and Organizations
        </h2>
          <div className='logos'>
            <div>
              <a href='https://innovaccer.com/marketplace/Intelligent-surgical-planning-from-diagnosis-to-recovery/' target='_blank'>
                <img src='/website-gh/images/logos/innovacer.png' width={220} />
              </a>
              <a href='https://marketplace.athenahealth.com/product/docspera' target='_blank'>
                <img src='/website-gh/images/logos/athena-health.png' width={180} />
              </a>
              <a href='https://apporchard.epic.com/Gallery?id=3515' target='_blank'>
                <img src='/website-gh/images/logos/app-orchard.png' width={170} />
              </a>
              <a href='https://www.aahks.org/' target='_blank'>
                <img src='/website-gh/images/logos/AAHKS.jpg' width={170} />
              </a>
              {/* <a href='https://www.prnewswire.com/news-releases/anterior-hip-foundation-and-docspera-partner-to-uncover-valuable-insights-through-data-analytics-in-order-to-advance-anterior-approach-hip-replacement-300605530.html' target='_blank'>
                <img src='/website-gh/images/logos/anterior-hip-foundation.png' width={170} />
              </a> */}
              <a href='https://www.medicare.gov/manage-your-health/share-your-medicare-claims-medicares-blue-button/organize-share-your-medical-information-claims' target='_blank'>
                <img src='/website-gh/images/logos/CMS.jpg' width={100} />
              </a>
              <a href='https://dolby.io/blog/docspera-integrates-dolby-io-with-surgeon-telehealth-solution-in-1-week/' target='_blank'>
                <img src='/website-gh/images/logos/dolby.png' width={150} />
              </a>
            </div>
          </div>
      </div>


      <FooterBar />
      <style jsx>{`
        .container {
          width: 100%;
        }
        
        #hero-h1 > h1 {
          color: white;
          font-size: 4em;
          font-family: 'Varela Round', sans-serif;
          text-align: center;
          width: max-content;
          position: absolute;
          top: 50px;
          left: 0;
          right: 0;
          border-radius: 10px;
          padding: 10px;
          text-shadow: 0 1px 4px RGBa(0,0,0, .6), 0 0 100px Black;
          display: block;
          margin: 0 auto;
          margin-top: 70px;
        }

        @media (max-width: 1400px) {
          #hero-h1 > h1 {
            font-size: 50px;
          }
        }
       
        @media (max-width: 600px) {
          #hero-h1 > h1 {
            font-size: 40px;
          }
        }
      
        @media (max-width: 400px) {
          #hero-h1 > h1 {
            font-size: 36px;
          }
        }
        #hero-h1 > span {
          font-size: 20px;
        }

        #landing-bg-div {
          overflow: hidden;
          width: 100vw;
          z-index: -100;
          min-height: 500px;
          height: 100vh;
          position: relative;
          background-image: url('/website-gh/images/iPad-landing-bluer.png');
          background-position: 15% 50%, center bottom;
        }

        #landing-bg {
          bottom: 0px;
          left: 0;
          transition: 1s;
          width: 100%;
        }

        // H E I G H T queries for landing
        @media (max-height: 750px) {
          #landing-bg {
            margin-bottom: -50px;
          }
        }

        @media (max-height: 850px) {
          #landing-bg {
            margin-bottom : -50px;
          }
        }

        // W I D T H queries for landing
        @media (max-width: 1300px) {
          #landing-bg {
            // left: -300px;
            // width: auto;
          }
        }

        @media (max-width: 500px) {
          #hero-h1 > h1 {
            font-size: 30px;
          }
        }
       
        @media (max-width: 650px) {
          #landing-bg { 
            left: -250px;
            height: 100vh;
          }
        }
        
        @media (min-width: 800px) {
          .statistics {
            padding-top: 10px;
            padding-bottom: 40px;
          }
        }

        // VISION SECTION
        .vision-section {
          display: flex;
          align-items: center;
        }
        
        #iphone-calendar-div {
          width: 50%;
        }

        #iphone-calendar {
          width: 110%;
          margin-left: -60px;
        }

        #timeline-div {
          width: 50%;
        }

        .vision-section h2 {
          max-width: 550px; 
          margin-bottom: 20px;
        }

        #timeline-graphic {
          max-width: 600px;
        }

        @media (max-width: 1100px) {
          .vision-section {
            flex-direction: column;
          }

          #iphone-calendar-div {
            width: 60%;
          }

          #timeline-div {
            width: 100%;
            overflow: hidden;
          }

          #timeline-graphic {
            width: 100%;
            display: block;
            margin: 0 auto;
            padding-left: 30px;
          }

          .vision-section h2 {
            margin: 15px auto;
          }
        }

        @media (max-width: 800px) {
          #timeline-graphic {
            max-width: 525px;
          }
        }
  
        @media (max-width: 550px) {
          #iphone-calendar-div {
            width: 100%;
          }
          .vision-section h2 {
            max-width: 100%;
          }
          #timeline-graphic {
            padding: 0;
          }
        }
  
        @media (max-width: 400px) {
          #timeline-graphic {
            width: 108%;
            margin-left: -10px;
          }
        }

        // CONNECTING SECTION
        #connecting-section {
          display: flex;
          justify-content: center;
          flex: 1;
          padding-top: 0px;
          color: black;
        }

        #connecting-section h1 {
          margin-top: 60px;
        }

        @media (max-width: 1270px) {
          #connecting-section {
            flex-direction: column;
          }
        }

        #connecting-graphic {
          width: 60%;
          align-self: flex-end;
          margin-right: -160px;
        }

        @media (max-width: 1270px) {
          #connecting-graphic {
            margin-top: -150px;
            margin-right: -30px;
          }
        }

        @media (max-width: 800px) {
          #connecting-graphic {
            margin-top: 10px;
            margin-right: 0;
            width: 100%;
          }
        }

        #words-div {
          padding-top: 4vw;
          padding-left: 4vw;
        }

        @media (max-width: 1200px) {
          #words-div {
            padding-top: 0;
          }
        }

        #words-div > h2 {
          font-weight: 200;
        }

        .products-h2 {
          text-align: center;
          font-weight: 600;
          margin-bottom: 20px;
        }

        @media (max-width: 800px) {
          .products-h2 {
            margin-left: 0; 
          }
        }

        .product-section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 0px 0 60px 0;
        }

        @media (max-width: 850px) {
          .product-section {
            flex-direction: column;
          }

          .outer-box {
            margin: 15px 0 !important;
            display: block;
          }
        }

        .product-section h4 {
          font-size: 24px;
        }

        .product-section .chevron-img {
          height: 10px;
          margin: 0 0 0 10px;
        }

        .outer-box {
          min-height: 300px;
          min-width: 400px;
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 15px;
        }

        .box h4 {
          font-family: 'Varela Round', sans-serif;
          display: flex;
          align-items: center;
          margin:0 0 15px 0;
        }

        .box > h4 > img {
          filter: brightness(0%);
          height: 30px;
          margin-right: 10px;
        }

        .box p {
          display: flex;
          align-items: center;
          font-size: 16px;
          color: grey;
          margin-bottom: 5px;
        }

        .box p > span {
          padding-right: 10px;
          font-size: 15px;
          color: var(--blueDocspera);
        }

        .box button {
          font-family: 'Varela Round', sans-serif;
          background-color: white;
          border: 2px solid var(--blueDocspera);
          border-radius: 5px;
          filter: drop-shadow(0, 3px, 6px, black);
          color: var(--blueDocspera);
          padding: 10px 15px;
          font-size: 16px;
          margin-top: 10px;
        }

        .box button:hover {
          cursor: pointer;
          filter: drop-shadow(0 5px 5px var(--blueSky));
          transform: translate(0, -3px);
          transition: all 0.2s;
        }

      
        #docspera-works-h2 {
          text-align: center;
          margin-bottom: -40px; 
          max-width: 600px;
          margin: 0px auto -40px auto;
        }

        @media (max-width: 900px) {
          #docspera-works-h2 { 
            max-width: 600px;
          }
        }

        .logos {
          margin-top: 50px;
        }

        .logos div {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 1fr;
          justify-content: space-between;
          align-items: center;
          align-content: space-between;
        }
        
        .logos div a:nth-child(2),
        .logos div a:nth-child(5) {
          justify-self: center;
        }

        .logos div a:nth-child(4n) {
          justify-self: start;
        }

        .logos div a:nth-child(6n),
        .logos div a:nth-child(3n) {
          justify-self: end;
        }

        @media (max-width: 800px) {
          .logos img {
            width: 80%;
          }
        }

        @media (max-width: 650px) {
          .logos img {
            width: 100%;
          }

          .logos a:nth-child(5) {
            width: 50%;
          }

          .logos a {
            width: 60%;
          }

          .logos div {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 1fr;
            justify-content: space-between;
            align-items: center;
          }

          .logos div a:nth-child(2n) {
            justify-self: center;
          }

          .logos div a:nth-child(2n-1) {
            justify-self: center;
          }

          @media (max-width: 480px) {
            .logos a {
              width: 50%;
            }
      
            .logos div {
              display: grid;
              grid-template-columns: 1fr;
              grid-auto-rows: 120px;
            }
          }

      `}</style>
    </div>
  )
}