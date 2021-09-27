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

      <div id='connecting-section'>
        
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

      <div className='product-section'>
        <div className='box'>
          <h4><img src='/images/surgeon-users.png' />Providers</h4>
          <p><span>&#10140;</span> Episode of Care</p>
          <p><span>&#10140;</span> Prioritized Rebooking</p>
          <p><span>&#10140;</span> Data Intelligence &amp; RWD Insights</p>
          <Link href='/provider'><button>View More <img className='chevron-img' src='/images/chevron.png' /></button></Link>
        </div>
        <div className='box'>
          <h4><img src='/images/medical-device.png' />Medical Device Enterprise</h4>
          <p><span>&#10140;</span> Advanced Case Notification</p>
          <p><span>&#10140;</span> Integrated Provider Solutions</p>
          <p><span>&#10140;</span> Data Intelligence &amp; RWD Insights</p>
          <Link href='/medical-device' ><button>View More <img className='chevron-img' src='/images/chevron.png' /></button></Link>
        </div>
      </div>
      
      <div className='collab-section'>
        <h2>DocSpera works with leading health solution providers and Organizations</h2>
        <div className='collaborators'>
          <div>Innovaccer</div>
          <div>AthenaHealth Marketplace</div>
          <div>EPIC App Orchard</div>
          <div>DOLBY</div>
          <div>AAHKS</div>
          <div>Anterior Hip Foundation</div>
          <div>CMS</div>
        </div>
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

      <FooterBar />
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

        .product-section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 0px 0 60px 0;
  
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
        }
        .box:hover {
          box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);
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


        .collab-section {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 100px 0;
          width: 100%;
     
        }

        .collaborators {
          display: grid;
          grid-template-columns: 1fr  1fr 1fr;
          grid-template-rows: 1fr 1fr; 
          column-gap: 10px;
          row-gap: 10px;
          justify-items: center;
          align-items: center;
          margin-top: 20px;
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
