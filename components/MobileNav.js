import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMedia } from '../hooks/useMedia'
import React, { useState } from 'react'

export default function MobileNav() {
    const router = useRouter()
    const isBrowser = () => typeof window !== 'undefined'

    const [productDropdown, setProductDropdown] = useState(false);
    const handleProductOnHover = () => {
        setProductDropdown(!productDropdown);
        setContactDropdown(false);
    }

    const [contactDropdown, setContactDropdown] = useState(false);
    const handleContactOnHover = () => {
        setContactDropdown(!contactDropdown);
        setProductDropdown(false);
    }

    const [blogHover, setBlogHover] = useState(false);
    const handleBlogOnHover = () => {
        setBlogHover(!blogHover);
        setContactDropdown(false);
        setProductDropdown(false);
    }

    const [isLogin, setIsLogin] = useState(false);
    const handleLogin = () => {
        setIsLogin(!isLogin)
    }

    const [mobileNav, setMobileNav] = useState(false);
    const openMenu = () => {
        setMobileNav(!mobileNav);
    }


    return (
      <nav>
        <div>
          {mobileNav ? <img id='x' src='/images/x.png' onClick={openMenu} /> : <img id='hamburger' src='/images/hamburger.png' onClick={openMenu} />}
        </div>
        <div>
          {router.pathname == '/login' || isLogin ? <button onClick={handleLogin}>Request Demo</button> : <Link href='/login'><button>Log In</button></Link>}

        </div>


        {mobileNav && (

          <div className='mobile-menu'>
            <Link href='/'>
              <div className='menu-item'>
                <div>Home</div>
                <img className='chevron-img' src='/images/chevron.png' />
              </div>
            </Link>

            <div className='product-container' onClick={handleProductOnHover}>
              <div className='menu-item'>
                <div>Products</div>
                <img className='chevron-img' src='/images/chevron.png' />
              </div>
              
              {productDropdown && (

                <div className='product-dropdown'>
                  <div className='underline'></div>
                  <Link href='/provider' >
                    <div className='box'>
                      <img src='/images/surgeon-users.png' /> Providers <img className='chevron-img' src='/images/chevron.png' />

                    </div>
                  </Link>
                  <Link href='/medical-device'>
                    <div className='box'>
                      <img src='/images/medical-device.png' /> Medical Device <img className='chevron-img' src='/images/chevron.png' />

                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href='/company'>
              <div className='menu-item'>
                <div>Our Company</div>
                <img className='chevron-img' src='/images/chevron.png' />
              </div>
            </Link>

            <div className='contact-container' onClick={handleContactOnHover}>
              <div className='menu-item'>
                <div>Contact</div>
                <img className='chevron-img' src='/images/chevron.png' />
              </div>
              
              {contactDropdown && (

                <div className='contact-dropdown' onClick={handleContactOnHover}>
                  <div className='underline'></div>

                  <ul >
                    <li>Contact Us</li>
                    <li>Request Demo</li>
                  </ul>
                </div>
              )}
            </div>

            <a className={blogHover && 'active_a'} href='https://blog.d4.docspera.com/' target='_blank' onMouseEnter={handleBlogOnHover} onMouseLeave={handleBlogOnHover}>
              <div className='menu-item'>
                <div>Blog</div>
                <img className='chevron-img' src='/images/chevron.png' />
              </div>
            </a>

        
            </div>

        )}








        <style jsx>{`
          nav {
            width: 100%;
            display: flex;
            background-color: white;
            justify-content: space-between;
            align-items: center;
            filter: drop-shadow(0 10px 50px #cdf0fd);
            padding: 10px 30px;
            position: fixed;
            top: 0;
            z-index: 10000;
            height: 60px;

          }

          .mobile-menu {
            display: flex;
            align-items: left;
            justify-content: center;
            flex-direction: column;
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--blueLight);
            padding: 30px;
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

            .menu-item {
              background-color: var(--blueFaint);
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 10px 20px;
              margin-bottom: 10px;
            }

            .menu-item img {
              height: 16px;
            }
            
            .product-container, .contact-container {
              background-color: var(--blueFaint);
              margin-bottom: 10px;
            }

            .product-container .menu-item, .contact-container .menu-item {
              margin: 0;
            }

            .underline {
              height: 2px;
              width: 95%;
              margin: auto;
              background-color: grey;
              border-radius: 10px;
            }

            .product-dropdown {
              padding-bottom: 10px;
            }

            .box {
              display: flex;
              align-items: center;
              padding: 10px 20px;
              margin-top: 10px;
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


      `}</style>
        </nav>
    )
}
