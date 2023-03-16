import React, { useState } from 'react'
import { useMedia } from '../hooks/useMedia'
import MobileNav from './MobileNav'
import HeaderNavDropdown from './HeaderNavDropdown'
import { useRouter } from 'next/router'

export default function HeaderNav ({ page }) {
  const isBrowser = () => typeof window !== 'undefined'
  const [href, setHref] = useState()
  const router = useRouter()

  const tabletSize = useMedia('(max-width: 1050px)')
  const mobileSize = useMedia('(max-width: 875px)')

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
    <MobileNav getLink={(path) => getLink(path)} href={href}/>
  ) : (
    <nav>
      {isBrowser && (
        <a id="logo" onClick={() => router.push('/')}>
          <img
            id="logo"
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

      <div id="right-side">
        <div id="nav-items">
          <a
            className={
              (productDropdown && 'active_a') ||
              ((page === 'provider' || page === 'medical-device') &&
                'active_a')
            }
            onMouseEnter={handleProductOnHover}
          >
            <span>SOLUTIONS</span>
          </a>
          {productDropdown && (
            <div
              className="product-dropdown"
              onMouseLeave={handleProductOnHover}
            >
              <div
                className="box"
                onClick={() => {
                  router.push('/provider')
                  handleProductOnHover()
                }}
              >
                <h4>
                  <img src="https://assets.d4.docspera.com/home/images/surgeon-users.png"/>
                  Providers{' '}
                  <img
                    className="chevron-img"
                    src="https://assets.d4.docspera.com/home/images/graphics/chevron.png"
                  />
                </h4>
                <ul>
                  <li>Integrated Surgical Scheduling</li>
                  <li>Intelligent Dashboard</li>
                  <li>Episode of Care</li>
                </ul>
              </div>
              <div
                className="box"
                onClick={() => {
                  router.push('/medical-device')
                  handleProductOnHover()
                }}
              >
                <h4>
                  <img src="https://assets.d4.docspera.com/home/images/medical-device.png"/>
                  Device Partners{' '}
                  <img
                    className="chevron-img"
                    src="https://assets.d4.docspera.com/home/images/graphics/chevron.png"
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
            state={page}
            title="COMPANY"
            items={[
              {
                id: 'company',
                pageName: 'About Our Company',
                onClick: () => router.push('/company'),
              },
              {
                id: 'leadership',
                pageName: 'Meet Our Leadership',
                onClick: () => router.push('/leadership'),
              },
            ]}
            onHover={() => setProductDropdown(false)}
          />

          <HeaderNavDropdown
            state={page}
            title="CONTACT"
            items={[
              {
                pageName: 'Contact Us',
                onClick: () => window.open(getLink('support')),
              },
              {
                pageName: 'Request Demo',
                onClick: () => window.open(getLink('demo')),
              },
            ]}
            onHover={() => setProductDropdown(false)}
          />

          <div
            className={`${blogHover && 'active_a'} blog_link`}
            style={{ marginRight: 0 }}
            // href='https://blog.d4.docspera.com/'
            onClick={() => router.push('/blog')}
            onMouseEnter={handleBlogOnHover}
            onMouseLeave={handleBlogOnHover}
          >
            <span>BLOG</span>
          </div>
        </div>
        <a
          className="ext-link"
          href={href}
          onClick={() => getLink('login')}
          target="_blank"
        >
          <button>LOGIN</button>
        </a>
      </div>

      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          background-color: ${productDropdown
                  ? 'white'
                  : 'RGBa(255,255,255, .7)'};
          background-image: Linear-Gradient(RGBa(255, 255, 255, 1),
          RGBa(255, 255, 255, 0)),
          Linear-Gradient(RGBa(255, 255, 255, 0.8), RGBa(255, 255, 255, 0));
          box-shadow: ${['blog', 'intelligent-scheduler'].includes(page)
                  ? page === 'blog'
                          ? 'none'
                          : '0px 3px 5px 0px rgba(0,0,0,0.25)'
                  : '0 70px 50px 50px RGBa(255, 255, 255, 0.7)'};
          justify-content: space-between;
          align-items: center;
          padding-left: 30px;
          padding-right: 30px;
          position: sticky;
          top: 0;
          z-index: 10000;
          height: 70px;
          margin-bottom: ${page === 'blog' ? '20px' : '0'};
        }

        #right-side {
          display: flex;
          align-items: center;
        }

        #nav-items {
          display: flex;
          padding-right: 10vh;
          width: 100%;
        }

        #nav-items span,
        .blog_link {
          cursor: pointer;
        }

        #nav-items a,
        #nav-items .blog_link {
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
