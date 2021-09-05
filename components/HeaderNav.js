import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMedia } from '../hooks/useMedia'

export default function HeaderNav() {
  const router = useRouter()
  const isBrowser = () => typeof window !== 'undefined'

  let tabletSize
  if (isBrowser) {
    tabletSize = useMedia('(max-width: 775px)')
  }

  return (
    <nav>
      {isBrowser && (
        <a>
          <img
            src={`${tabletSize ? 'images/logo-short.png' : 'images/logo.svg'}`}
            height={`${tabletSize ? 40 : 70}`}
            width={`${tabletSize ? 40 : 150}`}
          />
        </a>
      )}
      {/* <Link href='/'></Link> */}

      <div id='right-side'>
        <div id='nav-items'>
          <Link href='/provider'>
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
          </Link>
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
      `}</style>
    </nav>
  )
}
