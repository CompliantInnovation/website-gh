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

  const [openDropdown, setOpenDropdown] = useState(false);
  const handleDropdownClick = () => {
    setOpenDropdown(!openDropdown);
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

          <a className={router.pathname == '/product' && 'active_a'} onClick={handleDropdownClick}>
            <span>Product</span>
            <div className={router.pathname == '/product' && 'underline'}></div>
          </a>
          {openDropdown && (
            
            <div className='dropdown'>
            <div className='box'>
              <h4><img src='/images/surgeon-users.png' />Providers &gt;</h4>
              <ul>
                <li>Episode of Care</li>
                <li>Prioritized Rebooking</li>
                <li>Data Intelligence &amp; RWD Insights</li>
              </ul>
            </div>
            <div className='box'>
            <h4><img src='/images/medical-device.png' />Medical Device &gt;</h4>
              <ul>
                <li>Advanced Case Notification</li>
                <li>Integrated Provider Solutions</li>
                <li>Data Intelligence &amp; RWD Insights</li>
              </ul>
            </div>
          </div>

          )}

          <Link href='/company'>
            <a className={router.pathname == '/company' && 'active_a'}>
              <span>Company</span>
              <div className={router.pathname == '/company' && 'underline'}></div>
            </a>
          </Link>
          <Link href='/contact'>
            <a className={router.pathname == '/contact' && 'active_a'}>
              <span>Contact</span>
              <div className={router.pathname == '/contact' && 'underline'}></div>
            </a>
          </Link>
          <a className='active_a' href='https://blog.d4.docspera.com/' target='_blank'>
            <span>Blog</span>
            <div className='underline'></div>
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
        <button>Log In</button>
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
          padding-right: 30px;
          font-size: 16px;
        }

        a:hover {
          color: var(--blueDocspera);
          
        }
        
        .active_a {
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
          filter: drop-shadow(0, 3px, 6px, black);
          color: white;
          padding: 10px 15px;
          font-size: 16px;
        }

        .dropdown {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: white;
          opacity: 65%;
          padding: 50px 0;
       
        }

        .box {
          margin: 30px;
          padding: 12px;
          background-color: white;
          z-index: 10;
        }

        .box:hover {
          box-shadow: 0px 0px 3px 5px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
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

        .box ul {
          list-style-type: none;
          margin: 5px 0;
          padding: 0;
        }

        .box li {
          font-size: 14px;
          border-left: 2px solid lightgrey;
          padding: 0 0 4px 10px;
          color: grey;
      
        }

        h4 {
          margin: 0;
        }
      `}</style>
    </nav>
  )
}
