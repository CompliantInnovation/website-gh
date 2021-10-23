import React, { useState } from 'react'
import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import NumberScroll from '../components/NumberScroll'
import Carousel from '../components/Carousel'
import FooterBar from '../components/Footer'
import ProviderSolutions from '../components/ProviderSolutions'
import { useMedia } from '../hooks/useMedia'

export default function Provider() {
  // const isBrowser = () =>

  if (typeof document !== 'undefined') {
    const sectionOne = document.querySelector('.statistics')
    const sections = document.querySelectorAll('.inner-div')

    const options = {
      root: null, // default: viewport
      threshold: 0, // 0-1 scale, default: 0
      rootMargin: '-150px'
    }

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        console.log(entry.target, 'translate?')
        // entry.target.classList.toggle('translate')
      })
    }, options)

    sections.forEach((section) => {
      observer.observe(section)
    })
  } else {
    console.log('NOPE')
  }

  const emrLogos = [
    { img: 'athena-health.png', height: null, width: 220 },
    { img: 'prime.png', height: null, width: 120 },
    { img: 'modernizing-medicine.png', height: null, width: 190 },
    { img: 'medstrat.jpg', height: null, width: 190 },
    { img: 'CMS.jpg', height: 65, width: 220 },
    { img: 'centricity.png', height: null, width: 150 },
    { img: 'medent.png', height: null, width: 180 },
    { img: 'app-orchard.png', height: null, width: 150 },
    { img: 'elation-health.jpg', height: null, width: 190 },
    { img: 'next-gen.jpg', height: null, width: 140 },
    { img: 'e-clinical-works.jpg', height: null, width: 180 },
    { img: 'cerner.png', height: null, width: 170 },
    { img: 'allscripts.png', height: null, width: 170 },
    { img: 'drchrono.png', height: null, width: 140 },
    { img: 'greenway.png', height: null, width: 150 },
    { img: 'SRS.jpg', height: null, width: 120 }
  ]

  const [viewMoreEmr, setViewMoreEmr] = useState(false)
  const numberOfEmrLogos = viewMoreEmr ? emrLogos.length : 4

  const handleViewMoreEmr = () => {
    setViewMoreEmr(!viewMoreEmr)
  }

  const instLogos = [
    { img: 'images/logos/UCSF.png', width: 100 },
    { img: 'images/logos/orthocare.jpg', width: 170 },
    { img: 'images/logos/TMI.jpg', width: 170 },
    { img: 'images/logos/webster.png', width: 160 },
    { img: 'images/logos/emerge-ortho.jpg', width: 180 },
    { img: 'images/logos/DOC.png', width: 150 },
    { img: 'images/logos/mos.png', width: 170 },
    { img: 'images/logos/CPO.png', width: 180 },
    { img: 'images/logos/baylor.jpg', width: 160 },
    { img: 'images/logos/childress.png', width: 200 },
    { img: 'images/logos/trinity.png', width: 180 },
    { img: 'images/logos/louisville.png', width: 170 },
    { img: 'images/logos/washington.png', width: 200 },
    { img: 'images/logos/englewood.png', width: 160 }
  ]

  const [viewMoreInst, setViewMoreInst] = useState(false)
  const numberOfInstLogos = viewMoreInst ? instLogos.length : 4

  const handleViewMoreInst = () => {
    setViewMoreInst(!viewMoreInst)
  }

  let testimonials = [
    {
      quote:
        'Dr. Mayle saves time, reduces redundant work and errors using DocSpera at California Pacific Orthopaedics (CPOSM).',
      name: 'Robert E. Mayle, Jr MD',
      location: 'California Pacific Orthopaedics (CPOSM)',
      pic: 'RobertMaley.png'
    },
    {
      quote:
        'I do a fair bit of team coverage for athletic teams. Connecting w. the athletic trainers is a breeze, they love the real-time interaction and HIPAA compliance as well... Best under-recognized app on the market to keep busy docs organized. A true hidden gem',
      name: 'Christopher Donaldson, MD',
      location: 'Western Pennsylvania Orthopedic & Sport Medicine',
      pic: 'ChristopherDonaldson.png'
    },
    {
      quote:
        'The DocSpera scheduling platform has been a tremendous asset to my surgical practice. The extremely user­ friendly mobile app offers remarkable flexibility and provides seamless communication between the surgical team and industry reps, ensuring no preoperative planning or scheduling detail goes unrecognized',
      name: 'Shane Seroyer, MD',
      location: 'TMI Sports Medicine & Orthopedic Surgery Arlington',
      pic: 'ShaneSeroyer.png'
    },
    {
      quote:
        'DocSpera has been an invaluable tool in my practice; it streamlined my transition into the bundle payment model with very little disruption in my practice workflow. Data collected from DocSpera has allowed us to improve clinical processes and procedures AND provided us with valuable information for commercial payor negotiations',
      name: 'Aaron Salyapongse MD',
      location: 'Stanford Health Care -­ ValleyCare',
      pic: 'AaronSalyapongse.png'
    }
  ]

  return (
    <>
      <Head>
        <title>DocSpera | HIPAA Compliant, Integrated Surgical Coordination Platform</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderNav />

      <div className='container' style={{ border: '1px solid pink' }}>
        <div id='hero-div'>
          <h2 id='hero-h2'>
            Intelligent Surgical Coordination: Enabling Efficiency and Profitability
          </h2>
          <p id='hero-p'>
            DocSpera is an integrated surgical coordination solution to help manage coordination
            across multiple sites and teams, drive improved efficiencies and deliver better patient
            care.
          </p>
          <img src='images/provider-art-work.png' id='surgeon-doodle' />
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
                imgSrc='images/surgical-cases.png'
                number={350000}
                title='Surgical Cases'
                plus
              />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--blueDocspera', height: 400 }}>
          <div id='seamless-integration' className='inner-div'>
            <h2 style={{ color: 'white' }}>Seamless Integration </h2>
            {/* <img src='images/seamless-integration.png' /> */}
          </div>
        </div>

        <ProviderSolutions />

        <div id='rapid-integration' className='inner-div'>
          <h2>Rapid Integration & Deployment at Scale</h2>
          <p>Integrated with over 30 EMR and 3rd party systems</p>
          <div className='logos'>
            <div>
              {emrLogos.slice(0, numberOfEmrLogos).map((logo) => {
                return (
                  <img src={`images/logos/${logo.img}`} height={logo.height} width={logo.width} />
                )
              })}
              <button onClick={handleViewMoreEmr}>{viewMoreEmr ? 'View Less' : 'View More'}</button>
            </div>
            <div>
              <img src='images/logos/athena-health.png' width={220} />
              <img src='images/logos/prime.png' width={120} />
              <img src='images/logos/modernizing-medicine.png' width={190} />
              <img src='images/logos/medstrat.jpg' width={190} />

              <img src='images/logos/CMS.jpg' height={65} width={100} />
              <img src='images/logos/centricity.png' width={150} />
              <img src='images/logos/medent.png' width={180} />
              <img src='images/logos/app-orchard.png' width={150} />

              <img src='images/logos/elation-health.jpg' width={190} />
              <img src='images/logos/next-gen.jpg' width={140} />
              <img src='images/logos/e-clinical-works.jpg' width={180} />
              <img src='images/logos/cerner.png' width={170} />

              <img src='images/logos/allscripts.png' width={170} />
              <img src='images/logos/drchrono.png' width={140} />
              <img src='images/logos/greenway.png' width={150} />
              <img src='images/logos/SRS.jpg' width={120} />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--blueXLight' }}>
          <div id='designed-for-providers' className='inner-div'>
            <h2>Designed for Providers Like You</h2>
            <div>
              <img id='mock-up-img' src='images/product-shots/mockups.png' />

              <div>
                <div className='box'>
                  <img src='images/surgical.svg' />
                  <div>
                    <h4>Built for the Surgical Environment</h4>
                    <p>
                      Used by thousands of surgeons across hundreds of institution with varying
                      surgical pathways
                    </p>
                  </div>
                </div>
                <div className='box'>
                  <img src='images/graphics/security.svg' />
                  <div>
                    <h4>Secure</h4>
                    <p>Provider verified, SOC 2 level and HIPAA compliant</p>
                  </div>
                </div>
                <div className='box'>
                  <img src='images/graphics/data-driven.svg' />
                  <div>
                    <h4>Driven by Data</h4>
                    <p>Comprehensive and longitudinal data across the continuum of care</p>
                  </div>
                </div>
                <div className='box'>
                  <img src='images/graphics/integration.svg' />
                  <div>
                    <h4>Effortless Integration</h4>
                    <p>Web and mobile interface easily integrate with other critical systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--blueFaint' }}>
          <div className='inner-div'>
            <h2 style={{ marginBottom: 50 }}>Testimonials</h2>
            <div id='testimonials'>
              {testimonials.map((t, idx) => {
                return (
                  <div className='testimonial' key={idx}>
                    <img src={`images/testimonials/${t.pic}`} className='testimonial-img' />
                    <div>
                      <p>"...{t.quote}..."</p>
                      <span className='name'> - {t.name}</span>
                      <p className='location'>{t.location}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className='inner-div'>
          <h2 style={{ minWidth: '100%'}}>
            Join 300+ Institutions Using DocSpera Across the US
          </h2>
          <div className='logos institutions'>
            {/* <div>
              {instLogos.slice(0, numberOfInstLogos).map((logo) => {
                return <img src={logo.img} height={logo.height} width={logo.width} />
              })}
              <button onClick={handleViewMoreInst}>
                {viewMoreInst ? 'View Less' : 'View More'}
              </button>
            </div>
            <div> */}
              <Carousel
                type='logo'
                content={instLogos}
              />
            {/* </div> */}
          </div>
        </div>
      </div>

      <FooterBar />
      <style jsx>{`
        h2 {
          margin-bottom: 15px;
          z-index: 10;
        }

        .container p {
          margin-bottom: 10px;
        }

        #hero-h2 {
          text-align: center;
        }

        #hero-p {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        #hero-div {
          height: 100vh;
          display: block;
          margin-top: 80px;
        }

        #surgeon-doodle {
          box-sizing: border-box;
          max-height: 50vh;
          max-width: 100%;
          display: block;
          margin: 0 auto;
          z-index: -10000;
        }

        .logos > div:nth-child(1) {
          display: none;
        }

        #designed-for-providers > div {
          display: flex;
          align-items: center;
        }

        #mock-up-img {
          max-height: 400px;
          margin-right: 50px;
        }

        #designed-for-providers .box {
          border: 2px solid var(--blueDocspera);
          margin: 10px 0;
          padding: 10px;
          border-radius: 10px;
          filter: drop-shadow(0 0px 5px lightgray);
          background-color: white;
          display: flex;
          align-items: center;
        }

        #designed-for-providers .box h4 {
          margin: 0;
        }

        #designed-for-providers .box img {
          width: 50px;
          margin-right: 20px;
          margin-left: 5px;
        }

        #testimonials {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .testimonial {
          width: 47%;
          filter: drop-shadow(0 0px 5px lightgray);
          background-color: white;
          border-radius: 10px;
          margin: 10px;
          padding: 10px;
        }

        .testimonial > div {
          margin-left: 20px;
        }

        .testimonial-img {
          height: 100px;
          border-radius: 100px;
          display: block;
          margin: 10px auto;
          margin-bottom: 20px;
        }

        .location {
          color: gray;
        }

        .logos div {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 1fr;
          justify-content: space-between;
          align-items: center;
          align-content: space-between;
        }

        .logos div img:nth-child(4n-2),
        .logos div img:nth-child(4n-1) {
          justify-self: center;
        }

        .logos div img:nth-child(4n) {
          justify-self: end;
        }

        .institutions div {
          grid-row-gap: 20px;
        }

        @media (max-width: 1000px) and (min-width: 650px) {
          .institutions div:nth-child(2) {
            display: none;
          }

          .institutions div:nth-child(1) {
            display: grid;
          }

          .institutions button {
            background-color: white;
            border: 1px solid gray;
            border-radius: 10px;
            color: gray;
            padding: 10px 50px;
            font-size: 16px;
            margin: auto;
            grid-column: span 4;
            filter: drop-shadow(0 5px 5px lightgray);
            cursor: pointer;
          }
        }

        @media (max-width: 1025px) {
          #designed-for-providers > div {
            flex-direction: column;
          }

          #mock-up-img {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 890px) {
          .logos img {
            width: 80%;
          }
        }

        @media (max-width: 835px) {
          .testimonial {
            width: 45%;
          }
        }

        @media (max-width: 650px) {
          .logos img {
            width: 60%;
          }

          .logos div:nth-child(1) > img:nth-child(5) {
            height: 75px;
          }

          .logos > div:nth-child(1) {
            display: grid;
          }

          .logos > div:nth-child(2) {
            display: none;
          }

          .logos div {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 1fr;
            justify-content: space-between;
            align-items: center;
          }

          .logos div img:nth-child(2n) {
            justify-self: center;
          }
          .logos div img:nth-child(2n-1) {
            justify-self: center;
          }

          button {
            background-color: white;
            border: 1px solid gray;
            border-radius: 10px;
            color: gray;
            padding: 10px 50px;
            font-size: 16px;
            margin: auto;
            grid-column: span 2;
            filter: drop-shadow(0 5px 5px lightgray);
            cursor: pointer;
          }

          .testimonial {
            width: 100%;
          }
          #mock-up-img {
            width: 85%;
          }
        }

        @media (max-width: 480px) {
          .logos img {
            width: 50%;
          }

          .logos div:nth-child(1) > img:nth-child(5) {
            height: 75px;
            width: 40%;
          }

          .logos div {
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: 120px;
          }

          button {
            grid-column: auto;
          }
        }
      `}</style>
    </>
  )
}
