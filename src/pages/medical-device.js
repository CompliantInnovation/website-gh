import React from 'react';
import Head from 'next/head';
import HeaderNav from '../components/HeaderNav';
import NumberScroll from '../components/NumberScroll';
import FooterBar from '../components/Footer';
import ProviderSolutions from '../components/ProviderSolutions';
import {useMedia} from '../hooks/useMedia';
import {staticAssetPrefix} from '../../next.config';

export default function MedicalDevicePage() {
  return (
    <div style={{position: 'relative'}}>
      <Head>
        <title>
          DocSpera | HIPAA Compliant, Integrated Surgical Coordination Platform
        </title>
      </Head>
      <HeaderNav />
      <div className="container">
        <h2 id="hero-h2">
          Power Your Digital and Surgical solutions using a Comprehensive,
          Intelligent Care Coordination platform
        </h2>
        <p id="hero-p">
          DocSpera is an integrated, comprehensive, and compliant digital
          solution powering patient-specific data, enabling Clinical insights,
          including an efficient supply chain.
        </p>
        <img
          src={
            staticAssetPrefix + '/images/drawings/medical-device-art-work.png'
          }
          id="business"
          width={570}
        />

        <div>
          <div className="statistics">
            <div>
              <NumberScroll
                imgsrc={staticAssetPrefix + '/images/surgeon-users.png'}
                number={6000}
                title="Providers"
                plus
              />
              <NumberScroll
                imgsrc={staticAssetPrefix + '/images/surgical-cases.png'}
                number={350000}
                title="Surgical Cases"
                plus
              />
            </div>
            <div id="placement">
              <NumberScroll
                imgsrc={staticAssetPrefix + '/images/medical-device.png'}
                number={60}
                title="Top Global Medical Device Companies"
                percent
              />
              <NumberScroll
                imgsrc={staticAssetPrefix + '/images/tech-partners.png'}
                number={30}
                title="Technology Partners"
                plus
              />
            </div>
          </div>
        </div>

        <div id="offerings-section">
          <div id="offerings" className="inner-div">
            <h1 style={{marginBottom: 20, color: 'white'}}>
              Enterprise Offerings and Outcomes
            </h1>
            <div id="offerings-divs">
              <div>
                <h3>DocSpera Demand</h3>
                <img
                  src={staticAssetPrefix + '/images/case-notification.png'}
                />
                <h4>Advanced Case Notification</h4>
                <p>
                  Early and reliable case demand signal to improve case support
                  preparedness and supply chain management
                </p>
                <p className="outcome">
                  <span>Benefit:</span> Up to 5 weeks additional time for more
                  accurate case preparation
                </p>
                <button>
                  <a href="src/nav-pages#advanced-case-notification">View</a>
                </button>
              </div>
              <div>
                <h3>DocSpera Premium</h3>
                <img
                  src={staticAssetPrefix + '/images/provider-solutions.png'}
                  height="auto"
                />
                <h4>Integrated Provider Solutions</h4>
                <p>
                  Flexible platform & modules to integrate and enhance multiple
                  enterprise software offerings
                </p>
                <p className="outcome">
                  <span>Benefit:</span> Offer better digital offerings to
                  providers, not just individual capabilities
                </p>
                <button>
                  <a href="src/nav-pages#integrated-providers-solutions">
                    View
                  </a>
                </button>
              </div>
              <div>
                <h3>DocSpera Insights</h3>
                <img
                  src={staticAssetPrefix + '/images/data-intelligence.png'}
                />
                <h4>Data Intelligence & RWD Insights</h4>
                <p>
                  Support the capture of real-world data across the surgical
                  continuum - from surgical decision to recovery.
                </p>
                <p className="outcome">
                  <span>Benefit:</span> Provide clinical registry enablement,
                  regional trends and outcome studies
                </p>
                <button>
                  <a href="src/nav-pages#insights-section">View</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="solve-challenges-section">
          <div className="inner-div">
            <h2 className="title-h2">Solving Urgent C-Suite Challenges </h2>
            <p style={{marginTop: 0}}>
              With early, integrated, real-time capture of surgical cases:
            </p>
            <div id="solve-challenges-divs">
              <div>
                <h4>Inventory and Logistics Costs</h4>
                <img
                  src={staticAssetPrefix + '/images/graphics/efficient.png'}
                />
                <p>
                  Improved case preparedness and inventory management through
                  earlier, more integrated real-time updates of surgical case
                </p>
                <p>
                  70% reduction in implant needs driving improvements across
                  shipping, sterilization, tray sizing, cancellation management,
                  etc.
                </p>
              </div>
              <div>
                <h4>Product/Data Understanding</h4>
                <img
                  src={staticAssetPrefix + '/images/graphics/data-driven.png'}
                />
                <p>
                  Deeper understanding of your product performance across
                  continuum of care
                </p>
                <p>
                  Access real-world data and gain insight of your product
                  performance in real-world clinical settings
                </p>
              </div>
              <div>
                <h4>Market Penetration</h4>
                <img
                  src={staticAssetPrefix + '/images/graphics/strategic.png'}
                />
                <p style={{maxWidth: 'none'}}>
                  Strengthen market position and become a more strategic partner
                  to your customers through diversified and easily managed
                  risk-sharing based offerings
                </p>
                <p>
                  Complement implant sales with digital offerings that extends
                  your solutions in more strategic engagements
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="advanced-case-notification" className="inner-div">
          <h3 className="title">DocSpera Demand</h3>
          <h2 className="title-h2">Real Time Advanced Case Notification</h2>
          <p style={{margin: 0}}>
            Improves Case Preparedness and Supply Chain Efficiencies
          </p>
          <div style={{display: 'flex', marginLeft: -20, marginTop: 20}}>
            <ul>
              <li className="badge">Inventory</li>
              <li className="badge">Shipping</li>
            </ul>
            <ul>
              <li className="badge">Right Size</li>
              <li className="badge">Right Location</li>
            </ul>
          </div>
          <div>
            {useMedia('(max-width: 850px') ? (
              <img
                id="ACN-img-mobile"
                src={
                  staticAssetPrefix +
                  '/images/graphics/advanced-case-notification-mobile-v3.png'
                }
              />
            ) : (
              <img
                id="ACN-img-desktop"
                src={
                  staticAssetPrefix +
                  '/images/graphics/advanced-case-notification-v2.png'
                }
              />
            )}
          </div>
        </div>

        <div id="integrated-providers-solutions">
          <ProviderSolutions premium />
        </div>

        <div id="insights-section">
          <div className="inner-div">
            <h3 className="title">DocSpera Insights</h3>
            <h2 className="title-h2">Data Intelligence & RWD Insights</h2>
            <p>
              Support improved care delivery using real-world data and insights
              across the surgical continuum
            </p>
            <div id="demand-intel-img-div">
              <img
                src={
                  staticAssetPrefix + '/images/product-shots/demand-intel.png'
                }
              />
            </div>
            <div id="insights-copy-div">
              <div>
                <div className="insight-title-div">
                  <img src={staticAssetPrefix + '/images/target.png'} />
                  <h4>Demand Intelligence</h4>
                </div>
                <p>View aggregated case demand information by region</p>
              </div>
              <div>
                <div className="insight-title-div">
                  <img src={staticAssetPrefix + '/images/mac.png'} />
                  <h4>Device Intelligence</h4>
                </div>
                <p>
                  Understand market share across specialty and therapeutic areas
                </p>
              </div>
              <div>
                <div className="insight-title-div">
                  <img src={staticAssetPrefix + '/images/line-graph.png'} />
                  <h4>Device Registry</h4>
                </div>
                <p>
                  Longitudinal data from pre-op to recovery and support post
                  market surveillance
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="smart-enterprise">
          <div className="inner-div">
            <h2>DocSpera Smart Enterprise</h2>
            <h3>In a Nutshell</h3>
            <div id="explainer-vid-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/u-qBmXB6Rzc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>

        {/*  C A S E   S T U D I E S  */}
        <div style={{backgroundColor: 'var(--blueXLight)'}}>
          <div className="inner-div">
            <h2 className="title-h2">Case Studies</h2>
            <div id="case-studies-div">
              <div className="case-study">
                <div className="img-div">
                  <img src="/caseStudies/case1.png" />
                  <div className="h3-div">
                    <h3>Automated Inventory Management</h3>
                  </div>
                  <p>
                    A Single Center study using Integrated Surgical Care
                    Coordination to improve case visibility, planning, and
                    reduce costs
                  </p>
                  <a
                    href="/caseStudies/Automated_Inventory_Management.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="case-study-btn">Read More</button>
                  </a>
                </div>
              </div>
              <div className="case-study">
                <div className="img-div">
                  <img src="/caseStudies/case2.png" />
                  <div className="h3-div">
                    <h3>New Product Launch</h3>
                  </div>
                  <p>
                    Post-Market Clinical Insights Study Using Real-World Data
                  </p>
                </div>
                <a
                  href="/caseStudies/New_Product_Launch.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="case-study-btn">Read More</button>
                </a>
              </div>
              <div className="case-study">
                <div className="img-div">
                  <img src="/caseStudies/case3.png" />
                  <div className="h3-div">
                    <h3>Engage Your Customers</h3>
                  </div>
                  <p>
                    Integrated Care Coordination Platform supports higher
                    revenue growth, as well as cost and time savings for the
                    sales team
                  </p>
                </div>
                <a
                  href="/caseStudies/Engage_Your_Customers.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="case-study-btn">Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterBar />

      <style jsx>{`
        .container > h2,
        .container > p {
          padding: 0 5vw;
        }

        #hero-h2 {
          text-align: center;
          padding-top: 98px;
          max-width: 900px;
          margin: 0 auto;
        }

        #hero-p {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
          padding-top: 10px;
        }

        button {
          background-color: var(--blueDocspera);
          border: none;
          border-radius: 5px;
          color: white;
          padding: 5px 10px;
          font-size: 16px;
          position: absolute;
          right: 10px;
          bottom: 10px;
          font-weight: 500;
          filter: drop-shadow(0 5px 10px transparent);
        }

        button:hover {
          filter: drop-shadow(0 5px 5px var(--blueSky));
          transform: translate(0, -3px);
          transition: all 0.2s;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        h2 {
          z-index: 1000;
          max-width: 875px;
        }

        #business {
          width: auto;
          height: 50vh;
          top: 0;
          z-index: -1000;
          border: none;
          display: block;
          margin: 0 auto;
          margin-bottom: 50px;
        }

        @media (max-width: 700px) {
          #business {
            width: 90%;
            height: auto;
          }
        }

        .statistics {
          margin-top: -50px;
        }

        #offerings-section {
          margin-top: 50px;
          padding: 70px 0 100px 0;
          width: 100%;
          background-color: var(--blueDark);
        }

        #smart-enterprise {
          width: 100%;
          background-color: var(--enterpriseBlue);
        }

        #explainer-vid-container {
          height: 70vh;
        }

        #smart-enterprise h2,
        #smart-enterprise h3 {
          color: white;
        }

        #smart-enterprise h2 {
          font-size: 1.17rem;
        }

        #smart-enterprise h3 {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        #offerings h2 {
          margin-top: 0;
          color: white;
        }

        #offerings {
          padding: 0 5vw;
        }

        #offerings-divs {
          display: flex;
          justify-content: space-between;
          flex: 1;
          flex-wrap: wrap;
        }

        @media (max-width: 1042px) {
          #offerings-divs {
            justify-content: center;
          }
        }

        #offerings-divs > div {
          position: relative;
          flex: 1;
          border-radius: 10px;
          background-color: white;
          padding: 15px;
          padding-bottom: 150px;
          margin: 10px;
          max-width: 335px;
        }

        #offerings-divs img {
          width: 100%;
          max-height: 175px;
          height: auto;
          border-radius: 5px;
          display: block;
          margin: 0 auto;
          margin-bottom: 10px;
          min-width: 250px;
        }

        #offerings-divs h4,
        h3 {
          margin: 0;
        }

        #offerings-divs h3 {
          text-align: center;
          margin-bottom: 10px;
          color: var(--blueDocspera);
        }

        .outcome {
          background-color: var(--blueXLight);
          border-radius: 5px;
          padding: 10px;
          position: absolute;
          width: 90%;
          bottom: 40px;
          height: 90px;
          color: var(--blueDocspera);
        }

        .outcome > span {
          color: var(--blueDark);
        }

        #solve-challenges-section {
          background-color: var(--blueXLight);
        }

        #solve-challenges-section > div {
          margin: 0 auto;
        }

        #solve-challenges-divs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        #solve-challenges-divs > div {
          margin: 10px;
          padding: 10px;
          text-align: center;
          flex: 1;
          min-width: 225px;
          background-color: white;
          border-radius: 10px;
        }

        #solve-challenges-divs > div > img {
          max-height: 150px;
          min-height: 100px;
          display: block;
          margin: 0 auto;
          margin-bottom: 15px;
        }

        #solve-challenges-divs > div > p:nth-child(4) {
          font-size: 12px;
          color: grey;
        }

        #demand-intel-img-div > img {
          filter: drop-shadow(0 0px 10px lightgray);
          border-radius: 10px;
          width: 100%;
        }

        #insights-section h4 {
          margin: 0;
          color: var(--blueDocspera);
        }

        #insights-copy-div {
          padding-top: 10px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        @media (max-width: 600px) {
          #insights-copy-div {
            flex-direction: column;
          }

          .insight-title-div {
            height: 0px;
          }
        }

        #insights-copy-div > div {
          flex: 1;
          padding: 10px;
        }

        .insight-title-div {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          height: 50px;
        }

        @media (max-width: 950px) and (min-width: 600px) {
          .insight-title-div {
            height: 70px;
          }
        }

        .insight-title-div img {
          width: 40px;
          height: auto;
          max-height: 40px;
          margin-right: 10px;
        }

        #ACN-img-desktop {
          margin-top: 20px;
          width: 100%;
        }

        #ACN-img-mobile {
          width: 400px;
          margin: 0 auto;
          display: block;
        }

        @media (max-width: 530px) {
          #ACN-img-mobile {
            width: 100%;
          }
        }

        #advanced-case-notification ul {
          margin-top: -10px;
        }

        #advanced-case-notification li {
          border-radius: 3px;
          margin: 2px;
          color: grey;
          font-weight: 500;
          font-size: 16px;
        }

        .provider-solutions-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .provider-solutions-row > div {
          padding: 10px;
          padding-bottom: 50px;
          max-width: 320px;
          min-width: 300px;
          margin: 10px;
          background-color: white;
          filter: drop-shadow(0 0px 10px lightgray);
          border-radius: 10px;
        }

        #case-studies-div {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
        }

        .case-study {
          flex: 1 1 0;
          margin: 10px;
          padding: 10px;
          background-color: white;
          filter: drop-shadow(0 0px 10px lightgray);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 350px;
          min-width: 250px;
        }

        .img-div > img {
          border-radius: 10px;
          width: 100%;
        }

        .case-study .h3-div {
          display: flex;
          align-items: center;
          min-height: 50px;
        }

        .case-study h3 {
          margin-left: 10px;
          font-size: 18px;
          color: var(--blueDocspera);
        }

        .case-study p {
          margin: 10px;
        }

        .case-study-btn {
          position: static;
          background-color: white;
          border: 2px solid var(--blueDocspera);
          border-radius: 5px;
          color: var(--blueDocspera);
          padding: 5px 10px;
          font-size: 16px;
          font-weight: 500;
          height: 40px;
          width: 100%;
          display: block;
          margin: 0 auto;
        }

        button:hover {
          cursor: pointer;
          filter: drop-shadow(0 5px 5px var(--blueSky));
          transform: translate(0, -3px);
          transition: all 0.2s;
        }
      `}</style>
    </div>
  );
}
