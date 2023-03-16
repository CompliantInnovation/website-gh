import React, { useState } from 'react'
import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import NumberScroll from '../components/NumberScroll'
import FooterBar from '../components/Footer'
import { useMedia } from '../hooks/useMedia'
import useInterval from '../hooks/useInterval'
import AnnoucementBanner from '../components/AnnoucementBanner'
import LeftArrow from '../components/icons/LeftArrow'
import RightArrow from '../components/icons/RigthArrow'
import Play from '../components/icons/Play'
import Close from '../components/icons/Close'

console.log({ useInterval })

export default function Index () {
  const isBrowser = () => typeof window !== 'undefined'
  const smallScreen = useMedia('(max-width: 1100px)')
  const max950w = useMedia('(max-width: 950px)')

  const sepecialistData = [
    {
      name: 'Dr. Alexander Sah',
      title: 'Sah Orthopaedic Associates',
      img: '/images/testimonials/Alex.png',
      videoURL: 'https://www.youtube.com/embed/pLWFCRYPoMc',
      quote:
        '"With DocSpera, the implant reps, nurses, surgical scheduler, technicians in the OR, all already know what implants will be used, they even know the sizes."',
    },
    {
      name: 'Casey Smith',
      title: 'Device Consultant',
      img: '/images/testimonials/Smith.png',
      videoURL: 'https://www.youtube.com/embed/zXI3UuwWX0c',
      quote:
        '"Since the implementation of DocSpera into my distributorship, I have noticed a vast improvement in my work/life balance."',
    },
    {
      name: 'Dr. Robert Mayle',
      title: 'California Pacific Orthopaedics',
      img: '/images/testimonials/Mayle.png',
      videoURL: 'https://www.youtube.com/embed/L3CNetQcAis',
      quote:
        '"It\'s become an integral role to our workflow. It has provided great time savings. It has helped us communicate effectively. It has helped us anticipate needs and inventory."',
    },
  ]

  const [stateSpecialistData, setStateSpecialistData] =
    useState(sepecialistData)

  const [showModal, setShowModal] = useState(false)

  const [selectedVid, setSelectedVid] = useState('')

  const next = () => {
    setStateSpecialistData((prevData) => [
      prevData[prevData.length - 1],
      ...prevData.slice(0, prevData.length - 1),
    ])
  }
  const prev = () => {
    setStateSpecialistData((prevData) => [
      ...prevData.slice(1, prevData.length),
      prevData[0],
    ])
  }

  useInterval(() => {
    next()
  }, 1000 * 5)

  return (
    <>
      <AnnoucementBanner/>
      <div className="container">
        <Head>
          <title>
            DocSpera | HIPAA Compliant, Integrated Surgical Coordination
            Platform
          </title>
          <link
            rel="icon"
            href="/favicon.ico"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link
            href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <HeaderNav/>

        <div>
          <div id="landing-bg-div" style={{ postion: 'relative' }}></div>
          <div id="hero-h1">
            {isBrowser &&
              (max950w ? (
                <h1 style={{ width: '90%' }}>
                  Intelligent Surgical Planning Platform from Diagnosis to
                  Recovery
                </h1>
              ) : (
                <h1>
                  Intelligent Surgical Planning Platform <br></br> from
                  Diagnosis to Recovery
                </h1>
              ))}
          </div>

          <div className="statistics">
            <div>
              <NumberScroll
                imgSrc="/images/patient-volume.png"
                number={150000}
                title="Monthly Patient Volume"
                plus
              />
              <NumberScroll
                imgSrc="/images/surgeon-users.png"
                number={7000}
                title="Providers"
                plus
              />
            </div>
            <div>
              <NumberScroll
                imgSrc="/images/graphics/episodic-cases.png"
                number={800000}
                title="Episodic Cases"
                plus
              />
              <NumberScroll
                imgSrc="/images/practices.png"
                number={300}
                title="Practices, ASCs & Hospitals"
                plus
              />
            </div>
          </div>
        </div>

        {/* Our Vision is to Adress... Section */}
        <div style={{ backgroundColor: 'var(--blueXLight)' }}>
          <div className="inner-div">
            {smallScreen ? (
              <div className="vision-section">
                <h1
                  style={{
                    marginBottom: 35,
                    maxWidth: 550,
                    textAlign: 'center',
                  }}
                >
                  Our Vision is to Address Priorities and Unmet Needs Through a
                  Patient’s Surgical Journey
                </h1>
                <div id="iphone-calendar-div">
                  <img
                    id="iphone-calendar"
                    src="/images/product-shots/iphone-calendar.png"
                  />
                </div>

                <div id="timeline-div">
                  <img
                    id="timeline-graphic"
                    src="/images/graphics/timeline-graphic.png"
                  />
                </div>
              </div>
            ) : (
              <div>
                <h2
                  style={{
                    textAlign: 'center',
                    maxWidth: 700,
                    margin: '10px auto 30px auto',
                  }}
                >
                  Our Vision is to Address Priorities and Unmet Needs Through a
                  Patient’s Surgical Journey
                </h2>
                <div className="vision-section">
                  <div id="iphone-calendar-div">
                    <img
                      id="iphone-calendar"
                      src="/images/product-shots/iphone-calendar.png"
                    />
                  </div>

                  <div id="timeline-div">
                    <img
                      id="timeline-graphic"
                      src="/images/graphics/timeline-graphic.png"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{ backgroundColor: 'white' }}>
          <div id="connecting-section" className="inner-div">
            <div id="words-div">
              <h1>DocSpera Integrated Care Coordination Platform</h1>
              <h2>
                Connecting <b>Care Teams</b>, <br/> <b>Surgery Locations</b> &{' '}
                <b>Device Partners</b>
              </h2>
              <p style={{ maxWidth: 420, marginLeft: -20 }}>
                <ul>
                  <li>
                    Single institution-agnostic interface managing cases from
                    surgery decision to recovery
                  </li>
                  <li>Seamlessly integrates with EMR systems and PACS</li>
                  <li>
                    Current and reliable supply chain signaling for improved
                    logistics and support.
                  </li>
                  <li>
                    Enables early intervention with predictive indicators for
                    patient compliance, discharge info, & readmission
                  </li>
                </ul>
              </p>
            </div>
            <img
              id="connecting-graphic"
              src="/images/graphics/connected-graphic.png"
            />
          </div>
        </div>

        <div className="testimonial-addition">
          <h2>HEAR FROM OUR PARTNERS</h2>

          <div
            style={{
              position: 'relative',
              minHeight: '150px',
              padding: '30px 80px 80px 80px',
            }}
          >
            <LeftArrow
              style={{
                position: 'absolute',
                top: '30%',
                left: 30,
                cursor: 'pointer',
              }}
              onClick={() => prev()}
            />
            <RightArrow
              style={{
                position: 'absolute',
                top: '30%',
                right: 30,
                cursor: 'pointer',
              }}
              onClick={() => next()}
            />
            {smallScreen ? (
              <div className="specialist single-specialist">
                <img
                  width={188}
                  src={stateSpecialistData[0].img}
                  alt={stateSpecialistData[0].name}
                />
                <h4>{stateSpecialistData[0].name}</h4>
                <p>{stateSpecialistData[0].title}</p>
                <blockquote>{stateSpecialistData[1].quote}</blockquote>
                <button
                  onClick={() => {
                    setSelectedVid(stateSpecialistData[0].videoURL)
                    setShowModal(true)
                  }}
                >
                  <Play/> &nbsp; VIEW MORE
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="specialist">
                  <img
                    width={85}
                    src={stateSpecialistData[0].img}
                    alt={stateSpecialistData[0].name}
                  />
                  <h4>{stateSpecialistData[0].name}</h4>
                  <p>{stateSpecialistData[0].title}</p>
                </div>
                <div className="main-specialist">
                  <img
                    width={188}
                    src={stateSpecialistData[1].img}
                    alt={stateSpecialistData[1].name}
                  />
                  <div>
                    <blockquote>{stateSpecialistData[1].quote}</blockquote>
                    <div className="name-button-row">
                      <div>
                        <h4>{stateSpecialistData[1].name}</h4>
                        <p>{stateSpecialistData[1].title}</p>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedVid(stateSpecialistData[1].videoURL)
                          setShowModal(true)
                        }}
                      >
                        <Play/> &nbsp; VIEW MORE
                      </button>
                    </div>
                  </div>
                </div>
                <div className="specialist">
                  <img
                    width={85}
                    src={stateSpecialistData[2].img}
                    alt={stateSpecialistData[2].name}
                  />
                  <h4>{stateSpecialistData[2].name}</h4>
                  <p>{stateSpecialistData[2].title}</p>
                </div>
              </div>
            )}
          </div>
          {showModal && (
            <div
              onClick={(e) => {
                e.stopPropagation()
                setShowModal(false)
              }}
              className="modal-container"
            >
              <div>
                <Close
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    cursor: 'pointer',
                  }}
                  onClick={() => setShowModal(false)}
                />
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVid}
                  title={`${stateSpecialistData[2].name} `}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          )}
        </div>

        <div style={{ backgroundColor: 'var(--blueXLight)' }}>
          <div className="inner-div" id="solutions">
            <h2 className="products-h2">We have solutions for...</h2>
            <div className="product-section">
              <div className="outer-box">
                <div className="box">
                  <h4>
                    <img src="/images/surgeon-users.png"/>
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
                  <button onClick={() => router.push('/provider')}>
                    View Provider Solutions{' '}
                    <img
                      className="chevron-img"
                      src="/images/graphics/chevron-blue.png"
                    />
                  </button>
                </div>
              </div>
              <div className="outer-box">
                <div className="box">
                  <h4>
                    <img src="/images/medical-device.png"/>
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
                  <button
                    onClick={() => router.push('/medical-device')}
                  >
                    View Device Partner Solutions{' '}
                    <img
                      className="chevron-img"
                      src="/images/graphics/chevron-blue.png"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inner-div">
          <h2 id="docspera-works-h2">
            DocSpera works with leading health solution Providers and
            Organizations
          </h2>
          <div className="logos">
            <div>
              <a
                href="https://innovaccer.com/marketplace/Intelligent-surgical-planning-from-diagnosis-to-recovery/"
                target="_blank"
              >
                <img
                  src="/images/logos/innovacer.png"
                  width={220}
                />
              </a>
              <a
                href="https://marketplace.athenahealth.com/product/docspera"
                target="_blank"
              >
                <img
                  src="/images/logos/athena-health.png"
                  width={180}
                />
              </a>
              <a
                href="https://apporchard.epic.com/Gallery?id=3515"
                target="_blank"
              >
                <img
                  src="/images/logos/app-orchard.png"
                  width={170}
                />
              </a>
              <a href="https://www.aahks.org/" target="_blank">
                <img
                  src="/images/logos/AAHKS.jpg"
                  width={170}
                />
              </a>
              {/* <a href='https://www.prnewswire.com/news-releases/anterior-hip-foundation-and-docspera-partner-to-uncover-valuable-insights-through-data-analytics-in-order-to-advance-anterior-approach-hip-replacement-300605530.html' target='_blank'>
                <img src='/images/logos/anterior-hip-foundation.png' width={170} />
              </a> */}
              <a
                href="https://www.medicare.gov/manage-your-health/share-your-medicare-claims-medicares-blue-button/organize-share-your-medical-information-claims"
                target="_blank"
              >
                <img
                  src="/images/logos/CMS.jpg"
                  width={100}
                />
              </a>
              <a
                href="https://dolby.io/blog/docspera-integrates-dolby-io-with-surgeon-telehealth-solution-in-1-week/"
                target="_blank"
              >
                <img
                  src="/images/logos/dolby.png"
                  width={150}
                />
              </a>
            </div>
          </div>
        </div>

        <FooterBar/>
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
            //top: 50px;
            left: 0;
            right: 0;
            border-radius: 10px;
            padding: 10px;
            text-shadow: 0 1px 4px RGBa(0, 0, 0, .6), 0 0 100px Black;
            display: block;
            //margin: 0 auto;
            //margin-top: 70px;

            top: 30%;
            left: 50%;
            transform: translate(-50%, -30%);
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
            background-image: url('/images/iPad-landing-bluer.png');
            background-position: 15% 50%, center bottom;
            background-repeat: no-repeat;
            background-size: cover;
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
              margin-bottom: -50px;
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

          // TESTIMONIAL SECTION

          .testimonial-addition {
            margin: 0px auto -40px auto;
            min-height: 200px;
            background: white;
            position: relative;
          }

          .testimonial-addition:after {
            content: "";
            position: absolute;
            height: 150px;
            top: -150px;
            width: 100%;
            background: linear-gradient(0deg,
            rgba(0, 212, 255, 0) 0%,
            rgba(238, 247, 252, 1) 31%,
            rgba(238, 247, 252, 1) 50%,
            rgba(0, 212, 255, 0) 100%);
          }

          .testimonial-addition:before {
            content: "";
            position: absolute;
            height: 50px;
            bottom: -10px;
            width: 100%;
            background: linear-gradient(0deg,
            rgba(238, 247, 252, 1) 0%,
            rgba(238, 247, 252, 1) 31%,
            rgba(0, 212, 255, 0) 100%);
          }


          .testimonial-addition h2 {
            font-family: Rubik;
            font-weight: bold;
            font-size: 36px;
            line-height: 43px;
            text-align: center;
            color: #002855;
            padding-top: 50px;
          }

          .testimonial-addition .specialist {
            display: flex;
            flex-direction: column;
            width: 140px;
            align-items: center;
          }

          .testimonial-addition .specialist h4 {
            font-size: 14px;
            line-height: 17px;
            font-family: Rubik;
            font-weight: 400;
            margin: 4px 0 0 0;
          }

          .testimonial-addition .specialist p {
            font-size: 14px;
            line-height: 17px;
            font-family: Rubik;
            font-weight: 400;
            opacity: 0.49;
            text-align: center;
          }

          .testimonial-addition .main-specialist {
            display: flex;
          }

          .testimonial-addition .main-specialist blockquote, .single-specialist blockquote {
            width: 592px;
            text-align: center;
            color: #0096FA;
            font-size: 18px;
            line-height: 22px;
            font-family: Rubik;
            font-weight: 400;
            margin-left: 20px;
            max-width: 95%;
          }

          .testimonial-addition .main-specialist h4, .main-specialist p {
            margin: 0;
            margin-left: 20px;
            font-size: 20px;
            line-height: 24px;
            font-family: Rubik;
            font-weight: 400;
          }

          .testimonial-addition .main-specialist p {
            opacity: 0.49;
          }

          .single-specialist {
            width: 100% !important;
            flex-direction: column;
            align-items: center;

          }

          .single-specialist blockquote {
            margin: 0;
          }

          .name-button-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }

          .name-button-row button, single-specialist, button {
            background: #0096FA;
            border-radius: 3px;
            border: none;
            color: white;
            display: flex;
            align-items: center;
            font-size: 12px;
            line-height: 14px;
            font-family: Rubik;
            font-weight: 500;
            height: 28px;
            padding: 10px;
            margin-right: 40px;
            cursor: pointer;
          }

          .single-specialist button {
            margin-right: 0px;
            margin-top: 30px;
          }

          .modal-container {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.25);
            z-index: 4;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 150px;
          }

          .modal-container > div {
            position: relative;
            padding: 50px 20px 20px 20px;
            background: #002855;
            z-index: 5;
            border-radius: 8px;
            width: 80vw;
            height: 70vh;
            min-width: 380px;
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
            flex-grow: 1;
            min-height: 300px;
            padding: 20px;
            width: 100%;
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
            margin: 0 0 15px 0;
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
    </>
  )
}
