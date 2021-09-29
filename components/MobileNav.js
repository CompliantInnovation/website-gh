import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMedia } from '../hooks/useMedia'
import React, { useState } from 'react'

export default function MobileNav() {
    const router = useRouter()
    const isBrowser = () => typeof window !== 'undefined'

    let tabletSize
    if (isBrowser) {
        tabletSize = useMedia('(max-width: 775px)')
    }

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
                        <a className={router.pathname == '/company' && 'active_a'}>
                            <span>Home</span>
                            <div className={router.pathname == '/company' && 'underline'}></div>
                        </a>
                    </Link>
                    <a className={productDropdown && 'active_a'} onClick={handleProductOnHover}>
                        <span>Products</span>
                        <div className={productDropdown && 'underline'}></div>
                    </a>
                    {productDropdown && (

                        <div className='product-dropdown' onClick={handleProductOnHover}>
                            <Link href='/provider' >
                                <div className='box'>
                                    <p><img src='/images/surgeon-users.png' /> Providers <img className='chevron-img' src='/images/chevron.png' /></p>
                                   
                                </div>
                            </Link>
                            <Link href='/medical-device'>
                                <div className='box'>
                                    <p><img src='/images/medical-device.png' /> Medical Device <img className='chevron-img' src='/images/chevron.png' /></p>
                                   
                                </div>
                            </Link>
                        </div>

                    )}
                    <Link href='/company'>
                        <a className={router.pathname == '/company' && 'active_a'}>
                            <span>Our Company</span>
                            <div className={router.pathname == '/company' && 'underline'}></div>
                        </a>
                    </Link>
                    <div className='dropdown'>
                        <p className={contactDropdown && 'active_a'} onClick={handleContactOnHover}>
                            <span>Contact</span>
                            <div className={contactDropdown && 'underline'} ></div>
                        </p>
                        {contactDropdown && (
                            <div className='contact-dropdown' onClick={handleContactOnHover}>
                                <ul >
                                    <li>Contact Us</li>
                                    <li>Request Demo</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <a className={blogHover && 'active_a'} href='https://blog.d4.docspera.com/' target='_blank' onMouseEnter={handleBlogOnHover} onMouseLeave={handleBlogOnHover}>
                        <span>Blog</span>
                        <div className={blogHover && 'underline'}></div>
                    </a>          </div>

            )}








            <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          background-color: white;
          justify-content: space-between;
          align-items: center;
          filter: drop-shadow(0 10px 50px #cdf0fd);
          padding: 0 30px;
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
          background-color: #f6fcff;
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

          .product-dropdown img {
              height: 20px;
          }
      `}</style>
        </nav>
    )
}
