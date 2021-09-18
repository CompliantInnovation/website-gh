import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import FooterBar from '../components/Footer'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>DocSpera</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderNav />
      <div className='container'>

      <iframe src="https://docspera.com/login" />
      </div>
      <FooterBar />

      <style jsx>{`
        .container > h2,
        .container > p {
          padding: 0 5vw;
        }

        button {
          background-color: var(--blueDocspera);
          border: none;
          border-radius: 5px;
          filter: drop-shadow(0, 3px, 6px, black);
          color: white;
          padding: 5px 10px;
          font-size: 14px;
          letter-spacing: 1px;
          position: absolute;
          right: 10px;
          bottom: 10px;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        h2 {
          margin-top: 80px;
        }

        
      `}</style>
    </>
  )
}
