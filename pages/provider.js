import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import NumberScroll from '../components/NumberScroll'
import FooterBar from '../components/Footer'

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
        <title>DocSpera</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderNav />

      <div className='container'>
        <h2 style={{ maxWidth: 450 }}>
          Intelligent Surgical Coordination: Enabling Efficiency and Profitability
        </h2>
        <p>
          DocSpera is an integrated surgical coordination solution to help manage 
          coordination across multiple sites and teams, drive improved efficiencies and deliver better patient care.
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

        <div className='provider-solutions inner-div'>
          <h2>Integrated Provider Solutions</h2>
          <p>
            Best in class SaaS, real-time, predictive platform for the entire surgical ecosystem
          </p>
          <div className='provider-solutions-row'>
            <div>
              <img src='images/scheduling.png' />
              <h4>Integrated Surgical Scheduling & Coordination Across Entire Care Team</h4>
              {/* <h6>Coordination across entire care team</h6> */}
              <p>
                <ul>
                  <li>Case scheduling & OR management</li>
                  <li>Image Sharing</li>
                  <li>EMR & Telehealth intergration</li>
                </ul>
              </p>
              <div>Integrated Workflow</div>
            </div>
            <div>
              <img src='images/smart-scheduling.png' />
              <h4>Surgical Dashboard for Managing Upcoming Cases</h4>
              {/* <h6>Manage upcoming cases</h6> */}
              <p>
                <ul>
                  <li>Real-time coordination between Clinic, OR Team & Device Rep</li>
                  <li>Intelligent case backlog booking</li>
                </ul>
              </p>
              <div>Optimized and Coordinated</div>
            </div>
            <div>
              <img src='images/episode-of-care.png' />
              <h4>Episode of Care Tracker for Post Operative Care Management</h4>
              {/* <h6>Post operative care management</h6> */}
              <p>
                <ul>
                  <li>Post-acute management and recovery coordination</li>
                  <li>Risk stratification & management</li>
                </ul>
              </p>
              <div>Outcomes and Risk Management</div>
            </div>
          </div>
        </div>

        <div id='seamless-integration' className='inner-div'>
          <h2>Seamless Integration </h2>
          <img src='images/seamless-integration.png' />
        </div>

        <div id='rapid-integration' className='inner-div'>
          <h2>Rapid Integration & Deployment at Scale</h2>
          <p>Integrated with over 30 EMR and 3rd party systems</p>
          <div className='logos' id='emr'>
            <div>
              <img src='images/logos/athena-health.png' width={220} />
              <img src='images/logos/prime.png' width={120} />
              <img src='images/logos/modernizing-medicine.png' width={190} />
              <img src='images/logos/medstrat.jpg' width={190} />
            {/* </div>
            <div> */}
              <img src='images/logos/CMS.jpg' height={50} width={100} />
              <img src='images/logos/centricity.png' width={150} />
              <img src='images/logos/medent.png' width={180} />
              <img src='images/logos/app-orchard.png' width={150} />
            {/* </div>
            <div> */}
              <img src='images/logos/elation-health.jpg' width={190} />
              <img src='images/logos/next-gen.jpg' width={140} />
              <img src='images/logos/e-clinical-works.jpg' width={180} />
              <img src='images/logos/cerner.png' width={170} />
            {/* </div>
            <div> */}
              <img src='images/logos/allscripts.png' width={170} />
              <img src='images/logos/drchrono.png' width={140} />
              <img src='images/logos/greenway.png' width={150} />
              <img src='images/logos/SRS.jpg' width={120} />
            </div>
          </div>
        </div>

        <div id='designed-for-providers' className='inner-div'>
          <h2>Designed for Providers Like You</h2>
          <div>
            <img id='mock-up-img' src='images/mockups.png' />

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
                <img src='images/security.svg' />
                <div>
                  <h4>Secure</h4>
                  <p>Provider verified, SOC 2 level and HIPAA compliant</p>
                </div>
              </div>
              <div className='box'>
                <img src='images/data-driven.svg' />
                <div>
                  <h4>Driven by Data</h4>
                  <p>Comprehensive and longitudinal data across the continuum of care</p>
                </div>
              </div>
              <div className='box'>
                <img src='images/integration.svg' />
                <div>
                  <h4>Effortless Integration</h4>
                  <p>Web and mobile interface easily integrate with other critical systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        <div className='inner-div'>
          <h2 style={{ minWidth: '100%', marginBottom: 50 }}>
            Join 300+ Institutions Using DocSpera Across the US
          </h2>
          <div className='logos'>
            <div>
              <img src='images/logos/UCSF.png' width={100} />
              <img src='images/logos/orthocare.jpg' width={170} />
              <img src='images/logos/TMI.jpg' width={170} />
              <img src='images/logos/webster.png' width={160} />
            </div>
            <div>
              <img src='images/logos/emerge-ortho.jpg' width={180} />
              <img src='images/logos/DOC.png' width={150} />
              <img src='images/logos/mos.png' width={170} />
              <img src='images/logos/CPO.png' width={180} />
            </div>
            <div>
              <img src='images/logos/baylor.jpg' width={160} />
              <img src='images/logos/childress.png' width={200} />
              <img src='images/logos/trinity.png' width={180} />
              <img src='images/logos/louisville.png' width={170} />
            </div>
            <div>
              <img src='images/logos/washington.png' width={200} />
              <img src='images/logos/englewood.png' width={160} />
            </div>
          </div>
        </div>
      </div>

      <FooterBar />
      <style jsx>{`
        .container {
          padding: 0 5vw;
          p
        }
        h2 {
          margin-top: 80px;
          max-width: 600px;
          z-index: 10;
        }

        .statistics {
          margin-top: 50px;
        }

        #surgeon-doodle {
          // position: absolute;
          width: 80%;
          display: block;
          margin: 0 auto;
          z-index: -10000;
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

        .provider-solutions-row > div > div {
          padding: 10px ;
          background-color: var(--blueDocspera);
          text-align: center;
          border-radius: 18px;
          color: white;
          width: 100%;
    
        }

        #seamless-integration {
        }

        #seamless-integration img {
          display: block;
          margin: 10px auto;
          width: 100%;
          margin-top: 30px;
        }

        // .logos div {
        //   display: flex;
        //   align-items: center;
        //   justify-content: space-between;
        //   height: 100px;
     
        // }

        #designed-for-providers > div {
          display: flex;
          margin-top: 50px;
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

        #emr div {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 1fr;
          grid-row-gap: 5px;
          justify-content: space-between;   
          align-items: center;
          align-content: space-between;

        }


        #emr div img:nth-child(4n-2), #emr div img:nth-child(4n-1) {
          justify-self: center;
        }


        #emr div img:nth-child(4n) {
          justify-self: end;
        }
 

        @media (max-width: 890px) {
          #emr img {
            width: 80%;
          }
        }

        @media (max-width: 650px) {
          #emr img {
            width: 60%;
          }

          #emr div { 
            display:grid;
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 1fr;
            justify-content: space-between;   
            align-items: center;
          }

          #emr div img:nth-child(2n) {
            justify-self: center;
          }
          #emr div img:nth-child(2n-1) {
            justify-self: center;
          }
        }

        @media(max-width: 480px) {
          #emr img {
            width: 50%;
          }

          #emr div { 
            display:grid;
            grid-template-columns: 1fr;
            grid-auto-rows: 100px;
          }
        }


      `}</style>
    </>
  )
}
