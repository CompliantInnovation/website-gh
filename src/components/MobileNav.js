import React, { useState } from 'react'

import MobileNavDropdown from './MobileNavDropdown'
import { useMedia } from '../hooks/useMedia'
import { useRouter } from 'next/router'

export default function MobileNav ({ getLink, href }) {
  const router = useRouter()
  const isBrowser = () => typeof window !== 'undefined'
  const min390 = useMedia('(min-width: 390px)')
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const openMenu = () => {
    setMobileNavOpen(!isMobileNavOpen)
  }

  return (
    <nav>
      <div className="nav-bar">
        {isMobileNavOpen ? (
          <img
            id="x"
            src="https://assets.d4.docspera.com/home/images/exit_icon.svg"
            onClick={openMenu}
          />
        ) : (
          <img
            id="hamburger"
            src="https://assets.d4.docspera.com/home/images/graphics/hamburger.png"
            onClick={openMenu}
          />
        )}
        {isBrowser && min390 && (
          <a
            style={{ maxWidth: 150, margin: '0 20px' }}
            onClick={() => router.push('/')}
          >
            <img
              src="https://assets.d4.docspera.com/home/images/graphics/logo.svg"
              width={'100%'}
            />
          </a>
        )}
        <a
          href={href}
          onClick={() => window.open(getLink('login'))}
          target="_blank"
        >
          <button>Log In</button>
        </a>
      </div>

      {isMobileNavOpen && (
        <div className="mobile-menu">
          <div
            className="menu-item"
            onClick={() => {
              router.push('/')
              openMenu()
            }}
          >
            <div>Home</div>
            <img
              className="chevron-img"
              src="https://assets.d4.docspera.com/home/images/graphics/chevron.png"
            />
          </div>

          <MobileNavDropdown
            title="Products"
            items={[
              {
                display: (
                  <div
                    className="box"
                    onClick={() => router.push('/provider')}
                  >
                    <img src="https://assets.d4.docspera.com/home/images/surgeon-users.png"/>
                    Providers
                  </div>
                ),
              },
              {
                display: (
                  <div
                    className="box"
                    onClick={() => router.push('/medical-device')}
                  >
                    <img src="https://assets.d4.docspera.com/home/images/medical-device.png"/>
                    Device Partners
                  </div>
                ),
              },
            ]}
          />

          <MobileNavDropdown
            title="Company"
            items={[
              {
                display: (
                  <div
                    className="box"
                    onClick={() => router.push('/company')}
                  >
                    About Our Company
                  </div>
                ),
              },
              {
                display: (
                  <div
                    className="box"
                    onClick={() => router.push('/leadership')}
                  >
                    Meet Our Leadership
                  </div>
                ),
              },
            ]}
          />

          <MobileNavDropdown
            title="Contact"
            items={[
              {
                display: (
                  <div
                    className="box"
                    onClick={() => window.open(getLink('support'))}
                  >
                    Contact Us
                  </div>
                ),
              },
              {
                display: (
                  <div
                    className="box"
                    onClick={() => window.open(getLink('demo'))}
                  >
                    Request Demo
                  </div>
                ),
              },
            ]}
          />

          <div
            onClick={() => router.push('/blog')}
            className="menu-item"
          >
            <div>Blog</div>
            <img
              className="chevron-img"
              src="https://assets.d4.docspera.com/home/images/graphics/chevron.png"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-bar {
          width: 100%;
          display: flex;
          background-color: white;
          justify-content: space-between;
          align-items: center;
          filter: drop-shadow(0 10px 50px #cdf0fd);
          padding: 10px 30px;
          position: fixed;
          top: 0;
          height: 60px;
          z-index: 3;
        }

        .mobile-menu {
          display: flex;
          align-items: left;
          flex-direction: column;
          position: fixed;
          top: 60px;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--blueFaint);
          padding: 30px;
          z-index: 3;
        }

        button {
          background-color: var(--blueDocspera);
          border: none;
          border-radius: 5px;
          filter: drop-shadow(0, 3px, 6px, black);
          color: white;
          padding: 10px 15px;
          font-size: 16px;
          cursor: pointer;
        }

        #x,
        #hamburger {
          height: 20px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        a {
          text-decoration: none;
          color: black;
          cursor: pointer;
        }

        .menu-item {
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
          margin-bottom: 10px;
          cursor: pointer;
          border: 1px solid white;
          border-radius: 3px;
        }

        .menu-item img {
          height: 16px;
        }

        .box {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          cursor: pointer;
        }

        .box img {
          filter: brightness(0%);
          height: 23px;
          margin-right: 10px;
        }

        .box .chevron-img {
          height: 10px;
          padding: 0 30px;
        }
      `}</style>
    </nav>
  )
}
