import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMedia } from '../hooks/useMedia'
import React, { useState } from 'react'
import MobileNav from '../components/MobileNav'

export default function HeaderNav() {
  const router = useRouter()
  const isBrowser = () => typeof window !== 'undefined'

  let tabletSize, mobileSize
  if (isBrowser) {
    tabletSize = useMedia('(max-width: 775px)')
    mobileSize = useMedia('(max-width: 530px)')
  }

  const [productDropdown, setProductDropdown] = useState(false)
  const handleProductOnHover = () => {
    setProductDropdown(!productDropdown)
    setContactDropdown(false)
  }

  const [contactDropdown, setContactDropdown] = useState(false)
  const handleContactOnHover = () => {
    setContactDropdown(!contactDropdown)
    setProductDropdown(false)
  }

  const [blogHover, setBlogHover] = useState(false)
  const handleBlogOnHover = () => {
    setBlogHover(!blogHover)
    setContactDropdown(false)
    setProductDropdown(false)
  }

  const [isLogin, setIsLogin] = useState(false)
  const handleLogin = () => {
    setIsLogin(!isLogin)
  }

  return mobileSize ? (
    <MobileNav />
  ) : (
    <nav>
      {isBrowser && (
        <Link href='/'>
          <a id='logo'>
            <img
              id='logo'
              src={`${tabletSize ? '/website-gh/images/logo-short.png' : '/website-gh/images/graphics/logo.svg'}`}
              height={`${tabletSize ? 40 : 70}`}
              width={`${tabletSize ? 40 : 150}`}
            />
          </a>
        </Link>
      )}

      <div id='right-side'>
        <div id='nav-items'>
          <a
            className={
              (productDropdown && 'active_a') ||
              ((router.pathname == '/provider' || router.pathname == '/medical-device') &&
                'active_a')
            }
            onMouseEnter={handleProductOnHover}
          >
            <span>SOLUTIONS</span>
          </a>
          {productDropdown && (
            <div className='product-dropdown' onMouseLeave={handleProductOnHover}>
              <Link href='/provider'>
                <div className='box' onClick={handleProductOnHover}>
                  <h4>
                    <img src='/website-gh/images/surgeon-users.png' />
                    Providers <img className='chevron-img' src='/website-gh/images/graphics/chevron.png' />
                  </h4>
                  <ul>
                    <li>Integrated Surgical Scheduling</li>
                    <li>Intelligent Dashboard</li>
                    <li>Episode of Care</li>
                  </ul>
                </div>
              </Link>
              <Link href='/medical-device'>
                <div className='box' onClick={handleProductOnHover}>
                  <h4>
                    <img src='/website-gh/images/medical-device.png' />
                    Device Partners {' '}
                    <img className='chevron-img' src='/website-gh/images/graphics/chevron.png' />
                  </h4>
                  <ul>
                    <li>Advanced Case Notification</li>
                    <li>Integrated Provider Solutions</li>
                    <li>Data Intelligence &amp; RWD Insights</li>
                  </ul>
                </div>
              </Link>
            </div>
          )}

          <Link href='/company'>
            <a className={router.pathname == '/company' && 'active_a'}>
              <span>COMPANY</span>
            </a>
          </Link>
          <div className='dropdown'>
            <p className={contactDropdown && 'active_a'} onMouseEnter={handleContactOnHover}>
              <span>CONTACT</span>
            </p>
            {contactDropdown && (
              <div id='contact-dropdown' onMouseLeave={handleContactOnHover}>
                <ul>
                  <li>
                    <a href='https://docspera.com/support' target='_blank'>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href='https://docspera.com/demo' target='_blank'>
                      Request Demo
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a
            className={blogHover && 'active_a'}
            style={{ marginRight: 0 }}
            href='https://blog.d4.docspera.com/'
            target='_blank'
            onMouseEnter={handleBlogOnHover}
            onMouseLeave={handleBlogOnHover}
          >
            <span>BLOG</span>
          </a>
        </div>
        {router.pathname == '/login' || isLogin ? (
          <a className='ext-link' href='https://docspera.com/demo' target='_blank'>
            <button onClick={handleLogin}>Request Demo</button>
          </a>
        ) : (
          <a className='ext-link' href='https://docspera.com/login' target='_blank'>
            <button onClick={handleLogin}>LOGIN</button>
          </a>
        )}
      </div>

      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          background-color: ${productDropdown ? 'white' : 'RGBa(255,255,255, .7)'};
          background-image: Linear-Gradient(RGBa(255,255,255, 1), RGBa(255,255,255, 0)), Linear-Gradient(RGBa(255,255,255, .8), RGBa(255,255,255, 0));
          box-shadow: 0 0 50px 50px RGBa(255,255,255, .7);
          justify-content: space-between;
          align-items: center;
          padding-left: 30px;
          padding-right: 30px;
          position: fixed;
          top: 0;
          z-index: 10000;
          height: 60px;
        }
        #right-side {
          display: flex;
          align-items: center;
        }
        #nav-items {
          display: flex;
          padding-right: 10vh;
        }
        #nav-items span {
          cursor: pointer;
        }
        #nav-items a {
          color: var(--blueDocspera);
          text-decoration: none;
          margin-right: 50px;
          font-size: 16px;
          font-weight: bold;
          padding: 10px 20px;
          border-radius: 5px;
        }
        a:hover {
          background-color: rgba(0, 150, 250, 0.2);
        }
        .active_a,
        .dropdown .active_a {
          font-weight: 600;
          background-color: rgba(0, 150, 250, 0.2);
        }
        #logo:hover {
          background-color: rgba(0, 0, 0, 0);
        }
        #ext-link {
          padding: 0;
        }
        button {
          background-color: var(--blueDocspera);
          border: none;
          border-radius: 5px;
          color: white;
          padding: 10px 15px;
          font-size: 16px;
          font-weight: bold;
        }
        .product-dropdown {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: rgba(255, 255, 255, 1);
          padding: 20px 0;
        }
        .box {
          margin: 30px;
          padding: 40px;
          cursor: pointer;
        }
        .box:hover {
          filter: drop-shadow(0px 0px 0.3rem lightgrey);
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 1);
        }
        .box h4 {
          display: flex;
          align-items: center;
          padding-bottom: 10px;
        }
        .box img {
          filter: brightness(0%);
          height: 30px;
          margin-right: 10px;
        }
        .box .chevron-img {
          height: 12px;
          padding: 0 30px;
        }
        .box ul {
          list-style-type: none;
          margin: 5px 0;
          padding: 0;
          border-left: 2px solid lightgrey;
        }
        .box li {
          font-size: 14px;
          padding: 0 0 4px 10px;
          color: grey;
        }
        .dropdown {
          position: relative;
          margin-right: 50px;
        }
        .dropdown:hover {
          color: var(--blueDocspera);
        }
        .dropdown p {
          color: var(--blueDocspera);
          margin: 0;
          font-size: 16px;
          font-weight: bold;
          padding: 10px 20px;
          border-radius: 5px;
        }
        .dropdown p:hover {
          background-color: rgba(0, 150, 250, 0.2);
        }
        #contact-dropdown {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 110%;
          left: -10%;
          background-color: rgba(255, 255, 255, 1);
          padding: 0px 10px;
          color: black;
          width: 140px;
          padding-top: 10px;
          margin-top: 3px;
        }
        #contact-dropdown ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          padding-bottom: 10px;
        }
        #contact-dropdown li a {
          color: grey;
          padding-right: 0 !important;
          margin: 0;
          font-weight: normal;
          padding: 0 0 10px 0;
        }
        #contact-dropdown li a:hover {
          color: black;
          cursor: default;
          font-weight: bold;
          cursor: pointer;
          background-color: white;
          border-radius: 0;
        }
        h4 {
          margin: 0;
        }
        @media (max-width: 1050px) {
          #nav-items {
            padding-right: 6vh;
          }
          #nav-items a,
          .dropdown {
            margin-right: 15px;
          }
        }
        @media (max-width: 880px) {
          #nav-items {
            padding-right: 3vh;
          }
          #nav-items a,
          .dropdown {
            margin-right: 5px;
          }
        }
        @media (max-width: 775px) {
          #nav-items a,
          .dropdown p {
            font-size: 15px;
            padding: 5px 10px;
          }
          button {
            font-size: 14px;
          }
          #nav-items {
            padding: 0 10px;
          }
        }
      `}</style>
    </nav>
  )
}