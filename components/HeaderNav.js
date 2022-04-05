import React, { useState, useContext } from 'react'
import { Context, changePage } from '../context/context'
import { useMedia } from '../hooks/useMedia'
import MobileNav from '../components/MobileNav'
import HeaderNavDropdown from './HeaderNavDropdown'

export default function HeaderNav() {
  const { state, dispatch } = useContext(Context)
  const isBrowser = () => typeof window !== 'undefined'
  const [href, setHref] = useState()

  let tabletSize, mobileSize
  if (isBrowser) {
    tabletSize = useMedia('(max-width: 1050px)')
    mobileSize = useMedia('(max-width: 875px)')
  }

  const [productDropdown, setProductDropdown] = useState(false)
  const handleProductOnHover = () => {
    setProductDropdown(!productDropdown)
  }

  const [blogHover, setBlogHover] = useState(false)
  const handleBlogOnHover = () => {
    setBlogHover(!blogHover)
    setProductDropdown(false)
  }

  const getLink = (path) => {
    if (typeof window !== 'undefined') {
      if (window.location.href.includes('docvisor')) {
        setHref(`https://docvisor.com/${path}`)
        return `https://docvisor.com/${path}`
      } else if (window.location.href.includes('docspera.localhost')) {
        setHref(`http://docspera.localhost/${path}`)
        return `http://docspera.localhost/${path}`
      } else if (window.location.href.includes('docspera')) {
        setHref(`https://docspera.com/${path}`)
        return `https://docspera.com/${path}`
      } else if (window.location.href.includes('localhost')) {
        setHref(`http://docspera.localhost/${path}`)
        return `http://docspera.localhost/${path}`
      } else {
        setHref(`https://docspera.com/${path}`)
        return `https://docspera.com/${path}`
      }
    } else {
      setHref(`https://docspera.com/${path}`)
      return `https://docspera.com/${path}`
    }
  }

  return mobileSize ? (
    <MobileNav getLink={(path) => getLink(path)} href={href} />
  ) : (
    <nav>
      {isBrowser && (
        <a id='logo' onClick={() => dispatch(changePage('home'))}>
          <img
            id='logo'
            src={`${
              tabletSize
                ? 'https://assets.d4.docspera.com/home/images/logo-short.png'
                : 'https://assets.d4.docspera.com/home/images/graphics/logo.svg'
            }`}
            height={`${tabletSize ? 40 : 70}`}
            width={`${tabletSize ? 40 : 150}`}
          />
        </a>
      )}

      <div id='right-side'>
        <div id='nav-items'>
          <a
            className={
              (productDropdown && 'active_a') ||
              ((state.page == 'provider' || state.page == 'medical-device') && 'active_a')
            }
            onMouseEnter={handleProductOnHover}
          >
            <span>SOLUTIONS</span>
          </a>
          {productDropdown && (
            <div className='product-dropdown' onMouseLeave={handleProductOnHover}>
              <div
                className='box'
                onClick={() => {
                  dispatch(changePage('provider'))
                  handleProductOnHover()
                }}
              >
                <h4>
                  <img src='https://assets.d4.docspera.com/home/images/surgeon-users.png' />
                  Providers{' '}
                  <img
                    className='chevron-img'
                    src='https://assets.d4.docspera.com/home/images/graphics/chevron.png'
                  />
                </h4>
                <ul>
                  <li>Integrated Surgical Scheduling</li>
                  <li>Intelligent Dashboard</li>
                  <li>Episode of Care</li>
                </ul>
              </div>
              <div
                className='box'
                onClick={() => {
                  dispatch(changePage('medical-device'))
                  handleProductOnHover()
                }}
              >
                <h4>
                  <img src='https://assets.d4.docspera.com/home/images/medical-device.png' />
                  Device Partners{' '}
                  <img
                    className='chevron-img'
                    src='https://assets.d4.docspera.com/home/images/graphics/chevron.png'
                  />
                </h4>
                <ul>
                  <li>Advanced Case Notification</li>
                  <li>Integrated Provider Solutions</li>
                  <li>Data Intelligence &amp; RWD Insights</li>
                </ul>
              </div>
            </div>
          )}

          <HeaderNavDropdown
            state={state}
            title='COMPANY'
            items={[
              {
                id: 'company',
                pageName: 'About Our Company',
                onClick: () => dispatch(changePage('company'))
              },
              {
                id: 'leadership',
                pageName: 'Meet Our Leadership',
                onClick: () => dispatch(changePage('leadership'))
              }
            ]}
            onHover={() => setProductDropdown(false)}
          />

          <HeaderNavDropdown
            state={state}
            title='CONTACT'
            items={[
              {
                pageName: 'Contact Us',
                onClick: () => window.open(getLink('support'))
              },
              {
                pageName: 'Request Demo',
                onClick: () => window.open(getLink('demo'))
              }
            ]}
            onHover={() => setProductDropdown(false)}
          />

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
        <a className='ext-link' href={href} onClick={() => getLink('login')} target='_blank'>
          <button>LOGIN</button>
        </a>
      </div>

      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          background-color: ${productDropdown ? 'white' : 'RGBa(255,255,255, .7)'};
          background-image: Linear-Gradient(RGBa(255, 255, 255, 1), RGBa(255, 255, 255, 0)),
            Linear-Gradient(RGBa(255, 255, 255, 0.8), RGBa(255, 255, 255, 0));
          box-shadow: 0 0 50px 50px RGBa(255, 255, 255, 0.7);
          justify-content: space-between;
          align-items: center;
          padding-left: 30px;
          padding-right: 30px;
          position: fixed;
          top: 0;
          z-index: 10000;
          height: 70px;
        }
        #right-side {
          display: flex;
          align-items: flex-start;
        }

        #nav-items {
          display: flex;
          padding-right: 10vh;
          width: 100%;
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
          background-color: var(--blueDocsperaLight);
        }
        .active_a,
        .active_a {
          background-color: var(--blueDocsperaLight);
        }
        #logo:hover {
          cursor: pointer;
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
        button:hover {
          cursor: pointer;
        }
        .product-dropdown {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100vw;
          background-color: rgba(255, 255, 255, 1);
          padding: 20px 0;
          border-bottom: 2px solid var(--blueSky);
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

        h4 {
          margin: 0;
        }
        @media (max-width: 1050px) {
          #nav-items {
            padding-right: 20px;
          }
        }
      `}</style>
    </nav>
  )
}
