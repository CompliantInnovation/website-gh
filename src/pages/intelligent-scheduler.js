import React from 'react'
import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import FooterBar from '../components/Footer'
import { useMedia } from '../hooks/useMedia'
import AnnoucementBanner from '../components/AnnoucementBanner'
import InfoCard from '../components/InfoCard'
import Calendar from '../components/icons/Calendar'
import DownArrow from '../components/icons/DownArrow'
import Computer from '../components/icons/Computer'
import Clock from '../components/icons/Clock'
import QuestionPan from '../components/icons/QuestionPan'
import SolutionBulb from '../components/icons/SolutionBulb'
import Check from '../components/icons/Check'
import DoubleArrow from '../components/icons/DoubleArrow'

export default function IntelligentScheduler () {
  const isBrowser = () => typeof window !== 'undefined'
  const smallScreen = useMedia('(max-width: 1100px)')

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
        <div className="container">
          <div className="scheduler-hero-section">
            <div className="hero-text-content">
              <h1>INTELLIGENT SCHEDULER PLATFORM</h1>
              <h2>
                DocSpera&apos;s AI-based <em>surgical scheduling platform</em>
              </h2>
              <ul>
                <li>Automate re-bookings and reduce surgical backlogs</li>
                <li>Increase access to Patient Care and Revenue</li>
              </ul>
            </div>
            <div className="cards-container">
              <div className="cards-inner-container">
                <InfoCard
                  icon={<Calendar/>}
                  subText="Reduction in Cancellations*"
                  mainText="36%"
                  mainTextIcon={<DownArrow/>}
                />
                <InfoCard
                  icon={<Computer/>}
                  subText="Backlog Reduction*"
                  mainText="40%"
                  mainTextIcon={<DownArrow/>}
                />
                <InfoCard
                  icon={<Clock/>}
                  subText="Per week time saved on patient follow-up and booking*"
                  mainText="6-7 HOURS"
                />
              </div>
            </div>
          </div>
          <div className="case-study-main-container">
            <h3>CASE STUDY</h3>
            <div className="case-study-container">
              <div className="case-study-group-container">
                <div className="case-study-group">
                  <div
                    style={{ transform: 'translateY(-10px)' }}
                    className="case-study-icon-container"
                  >
                    <QuestionPan/>
                  </div>
                  <h4 style={{ color: '#0096FA' }}>PROBLEM</h4>
                  <p style={{ width: '186px' }}>
                    A large hospital was struggling with a large patient backlog
                    and increased loss of patients from the practice
                  </p>
                </div>
                <div className="case-study-group center-case-study">
                  <div className="case-study-icon-container">
                    <SolutionBulb/>
                  </div>
                  <h4 style={{ color: '#0064B0' }}>SOLUTION</h4>
                  <p style={{ width: '266px' }}>
                    DocSpera&apos;s Intelligent Scheduler was integrated to manage
                    patient backlog{' '}
                  </p>
                  <p style={{ width: '266px' }}>
                    Therefore, DocSpera was able to prioritize patients with
                    higher needs and availability for rebooking
                  </p>
                </div>
                <div className="case-study-group">
                  <div className="case-study-icon-container">
                    <Check/>
                  </div>
                  <h4 style={{ color: '#00386D' }}>RESULTS</h4>
                  <p style={{ width: '309px' }}>
                    <em>40%</em> of backlog patients into booked patients
                  </p>
                  <p style={{ width: '309px' }}>
                    <em>15%</em> saved time spent rebooking for nursing staff
                  </p>
                  <p style={{ width: '309px' }}>
                    <em>80%</em> of patients engaged with DocSpera
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="workflow">
            <h3>
              Fully Automated and able to run in the background without any
              impact to workflow
            </h3>
            <div className="workflow-case-container">
              <div className="workflow-case">
                <h4>EMR Integrated for Seamless Case Management</h4>
                <ul>
                  <li>Easily share cases with care team on single platform</li>
                </ul>
                <img
                  src="/images/intelligent-scheduler/SchedulerImage.jpg"
                  alt="EMR Image"
                />
              </div>
              <DoubleArrow
                style={{
                  alignSelf: 'center',
                  margin: '0 20px',
                  minWidth: '50px',
                }}
              />
              <div className="workflow-case">
                <h4>Assessment of Patient Readiness and Clearance</h4>
                <ul>
                  <li>Automated capture through digital intake</li>
                </ul>
                <img
                  src="/images/intelligent-scheduler/UnderstandingThing.jpg"
                  alt="Assessment Of Patient"
                />
              </div>
              <DoubleArrow
                style={{
                  alignSelf: 'center',
                  margin: '0 20px',
                  minWidth: '50px',
                }}
              />
              <div className="workflow-case">
                <h4 style={{ width: '419px' }}>
                  Prioritize and Optimize Cases based on Readiness for Booking
                </h4>
                <ul>
                  <li>Efficient and Optimized Case Management</li>
                </ul>
                <img
                  src="/images/intelligent-scheduler/IntelligentSchedulerImage.jpg"
                  alt="Intelligent Scheduler Image"
                />
              </div>
            </div>
          </div>

          <div className="cta">
            <h3>IMPROVE YOUR WORKFLOW</h3>
            <a
              className="contact-btn"
              href="https://docspera.com/support"
              target="_blank"
            >
              Get in touch with us
            </a>
            <a
              className="demo-btn"
              href="https://docspera.com/demo"
              target="_blank"
            >
              Request a Demo
            </a>
          </div>
        </div>

        <FooterBar/>
        <style jsx>{`
          .container {
            width: 100%;
            font-family: Rubik, serif;
          }

          .scheduler-hero-section {
            background: #fff url("/images/intelligent-scheduler/UnderstandingThing.jpg");
            min-height: 600px;
            background-repeat: no-repeat;
            background-position: 110% 0;
            position: relative;
          }

          .scheduler-hero-section:after {
            content: "";
            position: absolute;
            height: 150px;
            bottom: 0;
            width: 100%;
            background: linear-gradient(0deg,
            rgba(218, 240, 251, 1) 0%,
            rgba(218, 240, 251, 1) 31%,
            rgba(0, 212, 255, 0) 100%);
          }

          .case-study-main-container:after {
            content: "";
            position: absolute;
            height: 150px;
            bottom: -150px;
            width: 100%;
            background: linear-gradient(0deg,
            rgba(0, 212, 255, 0) 0%,
            rgba(218, 240, 251, 1) 31%,
            rgba(218, 240, 251, 1) 100%);
          }

          .hero-text-content {
            margin-right: 30px;
            margin-left: 30px;
            padding-top: 30px;
          }

          .hero-text-content h1, .cta h3 {
            color: #0096fa;
            font-weight: bold;
            font-size: 34px;
            line-height: 41px;
            text-transform: uppercase;
          }

          .hero-text-content h2 {
            font-weight: normal;
            font-size: 28px;
            line-height: 33px;
            width: 400px;
          }

          .hero-text-content h2 em {
            font-style: normal;
            font-weight: bold;
          }

          .hero-text-content ul,
          .workflow-case ul {
            margin-left: 0;
            padding-left: 20px;
          }

          .hero-text-content ul li,
          .workflow-case li {
            list-style: none;
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            position: relative;
            margin-bottom: 10px;
            width: 400px;
          }

          .hero-text-content ul li:before,
          .workflow-case li:before {
            position: absolute;
            content: "";
            width: 8px;
            height: 8px;
            background: #0096fa;
            left: -20px;
            top: 6px;
          }

          .cards-container {
            width: 100%;
            margin-top: 100px;
            display: flex;
            justify-content: center;
          }

          .cards-inner-container {
            display: flex;
            max-width: 100%;
            width: 700px;
            justify-content: space-between;
          }

          .case-study-main-container {
            height: 600px;
            padding-top: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #daf0fb;
            flex-direction: column;
            position: relative;
          }

          .center-case-study {
            margin: 0 180px;
          }

          .case-study-group-container {
            display: flex;
            margin: 0 auto;
            padding-top: 100px;
            justify-content: center;
            width: 94%;
          }

          .case-study-main-container h3,
          .workflow h3 {
            text-align: center;
            font-weight: bold;
            font-size: 28px;
            line-height: 33px;
            color: #0096fa;
            margin-bottom: 70px;
          }

          .case-study-group {
            height: 180px;
            width: 220px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .case-study-group h4 {
            margin: 0;
            margin-bottom: 10px;
            font-size: 22px;
            line-height: 27px;
          }

          .case-study-group p {
            font-size: 14px;
            line-height: 17px;
            font-weight: normal;
          }

          .case-study-group p em {
            font-style: normal;
            font-weight: bold;
          }

          .case-study-icon-container {
            height: 50px;
          }

          .workflow {
            background: white;
            margin: 200px 20px;
          }

          .workflow-case-container {
            display: flex;
            margin: 0 auto;
          }

          .workflow h3 {
            width: 707px;
            margin: 0 auto;
            margin-bottom: 50px;
          }

          .workflow h4 {
            color: #002855;
            font-size: 22px;
            line-height: 27px;
            width: 316px;
            margin-left: 20px;
            margin-bottom: 0;
          }

          .workflow li {
            margin-left: 20px;
          }

          .workflow-case {
            display: flex;
            flex-direction: column;
            width: 28%;
          }

          .cta {
            height: 250px;
            background: #DAF0FB;
            position: relative;
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 200px;
          }

          .cta h3 {
            margin-top: 0;
          }

          .cta:after {
            content: "";
            position: absolute;
            height: 150px;
            top: -150px;
            right: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            background: linear-gradient(0deg,
            rgba(218, 240, 251, 1) 0%,
            rgba(218, 240, 251, 1) 31%,
            rgba(0, 212, 255, 0) 100%);
          }

          .cta a {
            margin-right: 50px;
            text-decoration: none;
            padding: 15px 22px;
            border-radius: 5px;
            display: inline-block;
            box-shadow: 0 1px 2px #00000033;
            font-size: 18px;
            line-height: 22px;
            font-weight: bold;
            padding-left: 54px;

          }

          .cta .contact-btn {
            color: #fff;
            background: #0096FA;
            background-image: url("/images/intelligent-scheduler/contactInactive.svg");
            background-position: 22px 50%;
            background-repeat: no-repeat;
            transition: background-color .3s;
          }

          .cta .contact-btn:hover {
            background: #B1E0FF;
            background-image: url("/images/intelligent-scheduler/contactHovered.svg");
            color: #0096FA;
            background-position: 22px 50%;
            background-repeat: no-repeat;
          }

          .cta .demo-btn {
            color: #0096FA;
            background: #fff;
            border: 1px solid #0096FA;
            padding-left: 60px;
            background-image: url("/images/intelligent-scheduler/demoInactive.svg");
            background-position: 22px 50%;
            background-repeat: no-repeat;
            transition: background-color .3s;
          }

          .cta .demo-btn:hover {
            color: #fff;
            background: #0096FA;
            background-image: url("/images/intelligent-scheduler/demoHovered.svg");
            background-position: 22px 50%;
            background-repeat: no-repeat;
          }

        `}</style>
      </div>
    </>
  )
}
