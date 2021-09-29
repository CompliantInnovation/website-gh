import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMedia } from '../hooks/useMedia'
import React, { useState } from 'react'

export default function HeaderNav() {
  const router = useRouter()
  const isBrowser = () => typeof window !== 'undefined'

  let tabletSize
  if (isBrowser) {
    tabletSize = useMedia('(max-width: 775px)')
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

  return (
    <nav>
      {isBrowser && (
        <Link href='/'>
          <a>
            <img
              src={`${tabletSize ? 'images/logo-short.png' : 'images/logo.svg'}`}
              height={`${tabletSize ? 40 : 70}`}
              width={`${tabletSize ? 40 : 150}`}
            />
          </a>
        </Link>
      )}

      <div id='right-side'>
        <div id='nav-items'>
          <a className={productDropdown && 'active_a'} onMouseEnter={handleProductOnHover}>
            <span>Product</span>
            <div className={productDropdown && 'underline'}></div>
          </a>
          {productDropdown && (
            <div className='product-dropdown' onMouseLeave={handleProductOnHover}>
              <Link href='/provider'>
                <div className='box'>
                  <h4>
                    <img src='/images/surgeon-users.png' />
                    Providers <img className='chevron-img' src='/images/chevron.png' />
                  </h4>
                  <ul>
                    <li>Episode of Care</li>
                    <li>Prioritized Rebooking</li>
                    <li>Data Intelligence &amp; RWD Insights</li>
                  </ul>
                </div>
              </Link>
              <Link href='/medical-device'>
                <div className='box'>
                  <h4>
                    <img src='/images/medical-device.png' />
                    Medical Device <img className='chevron-img' src='/images/chevron.png' />
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
              <span>Company</span>
              <div className={router.pathname == '/company' && 'underline'}></div>
            </a>
          </Link>
          <div className='dropdown'>
            <p className={contactDropdown && 'active_a'} onMouseEnter={handleContactOnHover}>
              <span>Contact</span>
              <div className={contactDropdown && 'underline'}></div>
            </p>
            {contactDropdown && (
              <div className='contact-dropdown' onMouseLeave={handleContactOnHover}>
                <ul>
                  <li>Contact Us</li>
                  <li>Request Demo</li>
                </ul>
              </div>
            )}
          </div>

          <a
            className={blogHover && 'active_a'}
            href='https://blog.d4.docspera.com/'
            target='_blank'
            onMouseEnter={handleBlogOnHover}
            onMouseLeave={handleBlogOnHover}
          >
            <span>Blog</span>
            <div className={blogHover && 'underline'}></div>
          </a>
          {/* <Link href='/provider'>
            <a className={router.pathname == '/provider' && 'active_a'}>
              <span>Provider</span>
              <div className={router.pathname == '/provider' && 'underline'}></div>
            </a>
          </Link>

          <Link href='/medical-device'>
            <a className={router.pathname == '/medical-device' && 'active_a'}>
              <span>Medical Device Co.</span>
              <div className={router.pathname == '/medical-device' && 'underline'}></div>
            </a>
          </Link> */}
        </div>
        {router.pathname == '/login' || isLogin ? (
          <button onClick={handleLogin}>Request Demo</button>
        ) : (
          <Link href='/login'>
            <button>Log In</button>
          </Link>
        )}
      </div>

      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          background-color: white;
          justify-content: space-between;
          align-items: center;
          filter: drop-shadow(0 10px 50px #cdf0fd);
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
          padding-right: 15vh;
        }

        a {
          color: var(--blueDark);
          text-decoration: none;
          padding-right: 50px;
          font-size: 16px;
        }

        a:hover {
          color: var(--blueDocspera);
        }

        .active_a,
        .dropdown .active_a {
          color: var(--blueDocspera);
          font-weight: 600;
        }

        .underline {
          height: 3px;
          width: 100%;
          background-color: var(--blueDocspera);
          border-radius: 10px;
        }

        button {
          background-color: var(--blueDocspera);
          border: none;
          border-radius: 5px;
          // filter: drop-shadow(0, 3px, 6px, black);
          color: white;
          padding: 10px 15px;
          font-size: 16px;
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
          padding-right: 50px;
        }
        .dropdown:hover {
          color: var(--blueDocspera);
        }

        .dropdown p {
          color: var(--blueDark);
          margin: 0;
          font-size: 16px;
        }

        .dropdown p:hover {
          color: var(--blueDocspera);
        }

        .contact-dropdown {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 100%;
          left: -16%;
          background-color: rgba(255, 255, 255, 1);
          padding: 0px 10px;
          color: black;
          width: 130px;
          margin-top: 16px;
        }

        .contact-dropdown ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .contact-dropdown li {
          font-size: 14px;
          padding-bottom: 10px;
          color: grey;
        }

        .contact-dropdown li:hover {
          color: black;
          cursor: default;
          font-weight: bold;
        }

        h4 {
          margin: 0;
        }
      `}</style>
    </nav>
  )
}
