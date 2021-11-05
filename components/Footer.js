import Link from 'next/link'
import { AppleFilled, FacebookFilled, TwitterCircleFilled, LinkedinFilled } from '@ant-design/icons'

export default function FooterBar() {
  return (
    <footer>
      <div id='footer-inner-div'>
        <div style={{ margin: 'auto 0', flexGrow: 1 }}>
          <img id='logo' src='images/logo-white.svg' />

          <div id='icons-div'>
            <a
              href='mailto: Hello@DocSpera.com'
              className='section-title'
              style={{
                paddingBottom: 10,
                display: 'block',
                fontSize: 16
              }}
            >
              Hello@DocSpera.com
            </a>
            <a href='https://docspera.com/appstore' target='_blank'>
              <AppleFilled style={{ color: 'var(--blueDark)', fontsize: 25, cursor: 'pointer' }} />
            </a>
            <a href='https://www.facebook.com/DocSperaApp' target='_blank'>
              <FacebookFilled
                style={{
                  color: 'var(--blueDark)',
                  fontsize: 25,
                  marginLeft: 20,
                  cursor: 'pointer'
                }}
              />
            </a>
            <a href='https://twitter.com/DocSperaApp' target='_blank'>
              <TwitterCircleFilled
                style={{
                  color: 'var(--blueDark)',
                  fontsize: 25,
                  marginLeft: 20,
                  cursor: 'pointer'
                }}
              />
            </a>
            <a href='https://www.linkedin.com/company/docspera/mycompany/' target='_blank'>
              <LinkedinFilled
                style={{
                  color: 'var(--blueDark)',
                  fontsize: 25,
                  marginLeft: 20,
                  cursor: 'pointer'
                }}
              />
            </a>
          </div>
        </div>

        <div id='footer-nav'>
          <div>
            <span className='section-title'>PRODUCTS FOR</span>
            <Link href='/provider'>
              <div className='footer-menu-item'>
                <a>Providers</a>
                <img src='/website-gh/images/graphics/chevron-white.png' />
              </div>
            </Link>
            <Link href='/medical-device'>
              <div className='footer-menu-item'>
                <a>Medical Device</a>
                <img src='/website-gh/images/graphics/chevron-white.png' />
              </div>
            </Link>

            <span className='section-title' style={{ display: 'block', paddingTop: 50 }}>
              SOLUTIONS
            </span>
            <a href='https://docspera.com/scheduling' target='_blank'>
              <div className='footer-menu-item'>
                <a>Integrated Scheduling</a>
                <img src='/website-gh/images/graphics/chevron-white.png' />
              </div>
            </a>
            <a href='https://docspera.com/or' target='_blank'>
              <div className='footer-menu-item'>
                <a>Surgical Dashboards</a>
                <img src='/website-gh/images/graphics/chevron-white.png' />
              </div>
            </a>
            <a href='https://docspera.com/eoc' target='_blank'>
              <div className='footer-menu-item'>
                <a>Episode of Care Tracker</a>
                <img src='/website-gh/images/graphics/chevron-white.png' />
              </div>
            </a>
          </div>

          <div id='footer-nav-col-2'>
            <span className='section-title'>COMPANY</span>
            <Link href='/about'>
              <div className='footer-menu-item'>
                <a>About Us</a>
                <img src='/website-gh/images/graphics/chevron-white.png' />
              </div>
            </Link>

            <span className='section-title' style={{ display: 'block', paddingTop: 30 }}>
              CONTACT
            </span>

            <a href='https://docspera.com/support' target='_blank'>
              <div className='footer-menu-item'>
                <a>Contact Us</a>
                <img src='/website-gh/images/graphics/chevron-white.png' />
              </div>
            </a>

            <a href='https://docspera.com/demo' target='_blank'>
              <div className='footer-menu-item'>
                <a>Request Demo</a>
                <img src='/website-gh/images/graphics/chevron-white.png' />
              </div>
            </a>

            <span className='section-title' style={{ display: 'block', paddingTop: 30 }}>
              BLOG
            </span>

            <a href='https://blog.d4.docspera.com/' target='_blank'>
              <div className='footer-menu-item'>
                <a>DocSpera Blog</a>
                <img src='/website-gh/images/graphics/chevron-white.png' />
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          width: 100%;
          background-color: var(--blueDocspera);
          display: flex;
          align-items: center;
          filter: drop-shadow(0 -10px 50px #cdf0fd);
          padding: 30px;
          padding-top: 50px;
        }

        a {
          text-decoration: none;
        }

        #footer-inner-div {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 100%;
          margin-left: 5vw;
        }

        @media (max-width: 600px) {
          #footer-inner-div {
            margin-left: 0;
          }
          #logo {
            margin-left: 0;
          }

          #icons-div {
            margin-left: 0;
          }
        }

        footer #logo {
          max-width: 300px;
        }

        @media (max-width: 600px) {
          footer #logo {
            max-width: 90%;
          }
        }

        #icons-div {
          margin-top: 0px;
        }

        #footer-nav {
          padding: 0 5vw;
          display: flex;
        }

        #footer-nav-col-2 {
          margin-left: 10vw;
        }

        .section-title {
          color: var(--blueDark);
          font-size: 13px;
          letter-spacing: 1px;
        }

        .footer-menu-item {
          color: white;
          display: flex;
          align-items: center;
          margin: 10px 0;
          text-decoration: none;
          cursor: pointer;
        }

        .footer-menu-item > img {
          width: 6px;
          height: 10px;
          margin-left: 10px;
        }

        @media (max-width: 915px) {
          #footer-inner-div {
            flex-direction: column;
          }

          #logo {
            margin-left: 5vw;
          }

          #icons-div {
            margin-left: 5vw;
            margin-bottom: 50px;
          }
        }

        @media (max-width: 510px) {
          #footer-nav {
            flex-direction: column;
          }
          #footer-nav-col-2 {
            margin-left: 0;
            padding-top: 50px;
          }

          #logo {
            width: 100%;
          }
        }
      `}</style>
    </footer>
  )
}
