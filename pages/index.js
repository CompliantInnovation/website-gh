import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import Link from 'next/link'
import LogoAnimation from '../components/LogoAnimation'
import NumberScroll from '../components/NumberScroll'
import Carousel from '../components/Carousel'
import FooterBar from '../components/Footer'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>DocSpera</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderNav />

      <div id='hero-h1'>
        <h1>Intelligent Surgical Planning Software from Diagnosis to Recovery</h1>
      </div>
      <img id='landing-bg' src='images/care-team.jpg' width={'100%'} />

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
          <NumberScroll imgSrc='images/episodic-cases.png' number={350000} title='Episodic Cases' />
          <NumberScroll
            imgSrc='images/practices.png'
            number={300}
            title='Practices, ASCs & Hospitals'
            plus
          />
        </div>
      </div>

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
              <li>Immediate supply chain signaling for improved logistics and support</li>
              <li>
                Enable early intervention with predictive indicators for patient compliance,
                discharge info, & readmission
              </li>
            </ul>
          </p>
        </div>
        <img id='connecting-graphic' src='images/connecting2.png' />
      </div>

      <div style={{ backgroundColor: 'var(--blueXLight)' }}>
        <div className='inner-div'>
          <h2 style={{ marginLeft: 45, marginBottom: 20, fontWeight: 500 }}>
            View Our Products For...
          </h2>
          <div className='product-section'>
            <div className='box'>
              <h4>
                <img src='/images/surgeon-users.png' />
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
                  View More <img className='chevron-img' src='/images/chevron.png' />
                </button>
              </Link>
            </div>
            <div className='box'>
              <h4>
                <img src='/images/medical-device.png' />
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
                  View More <img className='chevron-img' src='/images/chevron.png' />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='inner-div'>
        <h2>DocSpera works with leading health solution providers and Organizations</h2>
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

      <img id='map' src='/images/map-with-pins.png' alt='map of docspera locations' />

      {/* <div className='carousel-container'>
        <div className='blog-section'>
          <h2>DocSpera Blog</h2>
          <Carousel type='blog' />
        </div>

        <div className='case-study-section'>
          <h2>Case Studies</h2>
          <Carousel type='case-study' />
        </div>
      </div> */}

      <FooterBar />
      <style jsx>{`

        .container {
          width: 100%;
        }

        #hero-h1 {
          color: var(--blueDocspera);
          position: absolute;
          top: 50px;
          border-radius: 10px;
          padding: 10px;
          text-align: center;
          filter: drop-shadow(0 -10px 50px #cdf0fd);
          font-family: 'Varela Round';
          width: 100%;
        }
        
        #hero-h1 > h1 {
          font-size: 3vw;
          margin-bottom: 0;
          text-shadow: 0 1px 2px RGBa(0,0,0, .6), 0 0 50px #cdf0fd;
        }

        #hero-h1 > span {
          font-size: 20px;
        }



        #landing-bg {
          z-index: -100;
        }

        #logo-animation {
          margin: 0 auto;
          margin-top: 100px;
          width: 70%;
        }

        #connecting-section {
          display: flex;
          justify-content: center;
          padding: 100px 0;
          padding-top: 50px;
          width: 100%;
        }

        @media (max-width: 970px) {
          #connecting-section {
            flex-direction: column;
          }
        }

        #connecting-graphic {
          width: 50%;
          align-self: flex-end;
        }

        @media (max-width: 800px) {
          #connecting-graphic {
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

        .product-section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 0px 0 60px 0;
  
        }

        .product-section h4 {
          font-size: 24px;
          // font-family: 'Varela Round';
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
        }

        #map {
          width: 60%;
          display: block;
          margin: 0 auto;
          user-select: none;
          margin-top: -100px;
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
