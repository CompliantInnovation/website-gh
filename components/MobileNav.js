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
        <div className='nav-bar'>
       
          {mobileNav ? <img id='x' src='/images/exit_icon.svg' onClick={openMenu} /> : <img id='hamburger' src='/images/hamburger.png' onClick={openMenu} />}
       
          {router.pathname == '/login' || isLogin ? <a href='https://docspera.com/demo' target='_blank'> <button onClick={handleLogin}>Demo</button></a> : <a href='https://docspera.com/login' target='_blank'><button onClick={handleLogin}>Log In</button></a>}

      </div>


        {mobileNav && (

          <div className='mobile-menu'>
            <Link href='/' >
              <div className='menu-item' onClick={openMenu}>
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
                    <div className='box' onClick={openMenu}>
                      <img src='/images/surgeon-users.png' /> Providers <img className='chevron-img' src='/images/chevron.png' />

                    </div>
                  </Link>
                  <Link href='/medical-device'>
                    <div className='box' onClick={openMenu}>
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

            <a className={blogHover && 'active_a'} href='https://blog.d4.docspera.com/' target='_blank' onMouseEnter={handleBlogOnHover} >
              <div className='menu-item'>
                <div>Blog</div>
                <img className='chevron-img' src='/images/chevron.png' />
              </div>
            </a>

        
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

          #x, #hamburger {
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

          .product-container, .contact-container {
            background-color: white;
            margin-bottom: 10px;
          }

          .product-container .menu-item, .contact-container .menu-item {
            margin: 0;
          }

          .underline {
            height: 1px;
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
            cursor: pointer;
          }

           

      `}</style>
        </nav>
    )
}
