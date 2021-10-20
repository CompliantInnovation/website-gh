import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import Link from 'next/link'
import LogoAnimation from '../components/LogoAnimation'
import NumberScroll from '../components/NumberScroll'
import Carousel from '../components/Carousel'
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
        <link rel='icon' href='/favicon.ico' />
        <link rel='preload' href='/fonts/VarelaRound-Regular.ttf' as='font' crossOrigin='' />
      </Head>
      <HeaderNav />

      <div id='hero-h1'>
        <h1>Intelligent Surgical Planning Software from Diagnosis to Recovery</h1>
      </div>
      <div style={{ height: '95vh', overflow: 'hidden' }}>
        <img id='landing-bg' src='images/iPad-landing.jpg' />
      </div>

      <div
        style={{
          backgroundColor: 'var(--blueXLight)',
          maxWidth: '100%',
          marginTop: -10,
          paddingBottom: 10
        }}
      >
        <div className='statistics'>
          <div>
            <NumberScroll
              imgSrc='images/patient-volume.png'
              number={100000}
              title='Monthly Patient Volume'
              plus
            />
            <NumberScroll
              imgSrc='images/surgeon-users.png'
              number={6000}
              title='Surgeon Users'
              plus
            />
          </div>
          <div>
            <NumberScroll
              imgSrc='images/graphics/episodic-cases.png'
              number={350000}
              title='Episodic Cases'
            />
            <NumberScroll
              imgSrc='images/practices.png'
              number={300}
              title='Practices, ASCs & Hospitals'
              plus
            />
          </div>
        </div>
      </div>

      <div className='inner-div'>
        {smallScreen ? (
          <div id='vision-section'>
            <h2 style={{ marginBottom: 35, maxWidth: 550, textAlign: 'center' }}>
              Our Vision is to Address Priorities and Unmet Needs Through a Patient’s Surgical
              Journey
            </h2>
            {/* Iphone Calendar Mockups */}

            <div id='iphone-calendar-div'>
              <img id='iphone-calendar' src='images/product-shots/iphone-calendar.png' />
            </div>

            <div id='timeline-div'>
              {/* Timeline Graphic + Copy  "1. Pre-Operative..." */}
              <img id='timeline-graphic' src='images/timeline-graphic.png' />
            </div>
          </div>
        ) : (
          <div id='vision-section'>
            {/* Iphone Calendar Mockups */}
            <div id='iphone-calendar-div'>
              <img id='iphone-calendar' src='images/product-shots/iphone-calendar.png' />
            </div>

            <div id='timeline-div'>
              <h2>
                Our Vision is to Address Priorities and Unmet Needs Through a Patient’s Surgical
                Journey
              </h2>
              {/* Timeline Graphic + Copy  "1. Pre-Operative..." */}
              <img id='timeline-graphic' src='images/graphics/timeline-graphic.png' />
            </div>
          </div>
        )}
      </div>

      <div style={{ backgroundColor: 'var(--blueXLight)' }}>
        <div id='connecting-section' className='inner-div'>
          <div id='words-div'>
            <h1>DocSpera Integrated Care Coordination Platform</h1>
            <h2>
              Connecting <b>Surgeons</b>, <br /> <b>Care Teams</b> & <b>Medical Device Co.</b>
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
                  Enable early intervention with predictive indicators for patient compliance,
                  discharge info, & readmission
                </li>
              </ul>
            </p>
          </div>
          <img id='connecting-graphic' src='images/graphics/connected-graphic.png' />
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--blueSky)' }}>
        <div className='inner-div'>
          <h2 className='products-h2'>View our solutions for...</h2>
          <div className='product-section'>
            <div className='box'>
              <h4>
                <img src='images/surgeon-users.png' />
                Providers
              </h4>
              <p>
                <span>&#10140;</span> Episode of Care
              </p>
              <p>
                <span>&#10140;</span> Prioritized Rebooking
              </p>
              <p>
                <span>&#10140;</span> Data Intelligence &amp; RWD Insights
              </p>
              <Link href='/provider'>
                <button>
                  View Provider Products{' '}
                  <img className='chevron-img' src='images/graphics/chevron.png' />
                </button>
              </Link>
            </div>
            <div className='box'>
              <h4>
                <img src='images/medical-device.png' />
                Medical Device
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
                  View Medical Device Products{' '}
                  <img className='chevron-img' src='images/graphics/chevron.png' />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='inner-div'>
        <h2 id='docspera-works-h2'>
          DocSpera works with leading health solution providers and Organizations
        </h2>
        <Carousel
          type='logo'
          content={[
            {
              img: 'images/logos/innovacer.png',
              width: 180
            },
            {
              img: 'images/logos/athena-health.png',
              width: 210
            },
            {
              img: 'images/logos/app-orchard.png',
              width: 170
            },
            {
              img: 'images/logos/dolby.png',
              width: 160
            },
            {
              img: 'images/logos/AAHKS.jpg',
              width: 170
            },
            {
              img: 'images/logos/anterior-hip-foundation.png',
              width: 180
            },
            {
              img: 'images/logos/CMS.jpg',
              width: 120
            }
          ]}
        />
      </div>

      <img id='map' src='images/graphics/map-with-pins.png' alt='map of docspera locations' />

      <FooterBar />
      <style jsx>{`

        .container {
          width: 100%;
        }

        #hero-h1 {
        }
        
        #hero-h1 > h1 {
          color: white;
          font-size: 64px;
          font-family: 'Varela Round';
          text-align: center;
          width: 90%;
          position: absolute;
          top: 50px;
          left: calc(100% - 95%);
          border-radius: 10px;
          padding: 10px;
          text-shadow: 0 1px 2px RGBa(0,0,0, .6), 0 0 50px #cdf0fd;
          // text-shadow: 0 1px 2px RGBa(0,0,0, .6), 0 0 50px var(--blueDocspera);
          margin-bottom: 0;
        }

        @media (max-width: 1100px) {
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

        #landing-bg {
          z-index: -100;
          min-width: 100%;
          height: 100%;
        }

        @media (max-width: ) {
          #landing-bg {

          }
        }




        // VISION SECTION

        #vision-section {
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

        #vision-section h2 {
          max-width: 550px; 
          margin-bottom: 20px;
        }

        #timeline-graphic {
          max-width: 600px;
        }

        @media (max-width: 1100px) {
          #vision-section {
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
            width: 110%;
            display: block;
            margin: 0 auto;
            padding-left: 30px;
          }

          #vision-section h2 {
            margin: 15px auto;

          }
        }
  
        @media (max-width: 550px) {
          #iphone-calendar-div {
            width: 100%;
          }

          #vision-section h2 {
            max-width: 100%;
          }

          #timeline-graphic {
            padding: 0;
          }
        }
  

        @media (max-width: 400px) {
          #timeline-graphic {
            width: 120%;
            margin-left: -10px;
          }
        }




        // CONNECTING SECTION

        #connecting-section {
          background-color: #2a83bf;
          background-color: var(--blueXLight);
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
          color: var(--blueDocspera);
          text-align: center;
          margin-left: 45px;
          margin-bottom: 20px; 
          font-weight: 600;
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

        .product-section h4 {
          font-size: 24px;
        }


        .product-section .chevron-img {
          filter: brightness(0) invert(1);
          height: 10px;
          margin: 0 0 0 10px;
        }

        .box {      
          padding: 25px 100px;
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 1);
          margin: 0 15px;
          box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);
        }
        .box:hover {
          border-radius: 5px;
          background-color: rgba(255, 255, 255, 1);
        }

        .box h4 {
          display: flex;
          align-items: center;
          margin:0 0 15px 0;
        }

        .box img {
          filter: brightness(0%);
          height: 30px;
          margin-right: 10px;
        }

        .box p {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: grey;
          margin-bottom: 5px;
        }

        .box p > span {
          padding-right: 10px;
          font-size: 15px;
          color: var(--blueDocspera);
        }

        .box button {
          background-color: var(--blueDocspera);
          border: none;
          border-radius: 5px;
          filter: drop-shadow(0, 3px, 6px, black);
          color: white;
          padding: 10px 15px;
          font-size: 14px;
          margin-top: 10px;
        }

        .box button:hover {
          box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        #map {
          width: 60%;
          display: block;
          margin: 0 auto;
          user-select: none;
          margin-top: -120px;
          margin-bottom: 150px;
        }

        @media (max-width: 900px) {
          #map {
            width: 90%;
            margin-top: -80px;
          }
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

        .logos div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100px;
        }

        @media (max-width: 1024px) {
          .product-section {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
       
          }
          .box {   
            width: 45%;
            padding: 25px 50px;
        }

        @media (max-width: 768px) {
          .product-section {
            display: flex;
            flex-direction: column;
  
          }
          .box {   
            width: 100%;   
            padding: 30px;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  )
}
