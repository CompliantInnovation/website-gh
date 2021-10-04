import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function MobileNav() {
    const router = useRouter();

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
       
          {mobileNav ? <img id='x' src='/images/exit_icon.svg' onClick={openMenu} /> : <img id='hamburger' src='/images/hamburger.png' onClick={openMenu} />}
       
          {router.pathname == '/login' || isLogin ? <a href='https://docspera.com/demo' target='_blank'> <button onClick={handleLogin}>Demo</button></a> : <a href='https://docspera.com/login' target='_blank'><button onClick={handleLogin}>Log In</button></a>}

      


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
                <img id={productDropdown ? 'chevron-img' : ''} src='/images/chevron.png' />
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
                <img id={contactDropdown ? 'chevron-img' : ''} src='/images/chevron.png' />
              </div>
              
              {contactDropdown && (

                <div className='contact-dropdown' >
                  <div className='underline'></div>
                  <ul>
                    <li><a href='https://docspera.com/support' target='_blank'>Contact Us</a></li>
                    <li><a href='https://docspera.com/demo' target='_blank'>Request Demo</a></li>
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
            position: absolute;
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

          #x, #hamburger {
            height: 20px;
            display: flex;
            align-items: center;
          }

          a {
            text-decoration: none;
            color: black;
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
            background-color: lightgrey;
            border-radius: 10px;
            margin-bottom: 10px;
          }

          .product-dropdown {
            padding-bottom: 10px;
            font-size: 16px;
          }

          .box {
            display: flex;
            align-items: center;
            padding: 10px 20px;
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

          #chevron-img {
            transform: rotate(90deg);
            transition-duration: 0.2s;
          }

          .contact-dropdown ul {
            list-style-type: none;
            padding-left: 20px;
          }
          .contact-dropdown li {
            font-size: 16px;
            padding-bottom: 10px;
          }

           

      `}</style>
        </nav>
    )
}
