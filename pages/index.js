import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import LogoAnimation from '../components/LogoAnimation'
import NumberScroll from '../components/NumberScroll'
import Carousel from '../components/Carousel'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>DocSpera</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderNav />

      <img id='landing-bg' src='images/hexagon_bottom.png' width={'100%'} />
      {/* <Image src='images/hexagon_bottom.png' height={1200} width={2300} /> */}

      <div id='logo-animation'>
        <LogoAnimation />
      </div>

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
            title='Surgical Users'
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

      <div id='connecting-section'>
        <div id='words-div'>
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

      <div className='carousel-container'>
        <div className='blog-section'>
          <h2>DocSpera Blog</h2>
          <Carousel type='blog' />
        </div>

        <div className='case-study-section'>
          <h2>Case Studies</h2>
          <Carousel type='case-study' />
        </div>
      </div>

      <Footer />
      <style jsx>{`
        .container {
          width: 100%;
        }

        #landing-bg {
          margin-top: -200px;
          position: absolute;
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
          width: 100%;
          margin-top: 100px;
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
      `}</style>
    </div>
  )
}
