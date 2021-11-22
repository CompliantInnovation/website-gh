import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import FooterBar from '../components/Footer'
import { useMedia } from '../hooks/useMedia'

export default function Company() {
  return (
    <div className='container'>
      <Head>
        <title>DocSpera | HIPAA Compliant, Integrated Surgical Coordination Platform</title>
        <link rel='icon' href='https://assets.d4.docspera.com/home/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Varela+Round&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <HeaderNav />

      <div className='inner-div'>
        <h2>About Our Company</h2>
        <p>
          DocSpera's bold and passionate team comes from diverse healthcare, technology and security
          backgrounds, and is positioned all across the United States to serve our customers
          everywhere. We share core values that have helped us succeed throughout our lives, and
          certainly together as a team – <b>Obsession</b> with our <b>Customer</b>, working{' '}
          <b>Collaboratively</b>, to <b>Quickly</b> execute <b>Bold</b> ideas, with <b>Integrity</b>
          , and a <b>Quality</b> product – and to <b>Continuously Improve</b>! Our team brings with
          it decades of technical, professional service, and executive level experience from
          innovative companies like Abbott, Baxter, Cisco, Eli Lilly, Esri, GE, Guidant, Intuit,
          Merck, Microsoft, Penumbra, Siemens, and Yahoo! to name a few.
        </p>

        {/* Company with Jackets Image */}
        <img
          className='img'
          src='https://assets.d4.docspera.com/home/images/company/IMG_8940.jpeg'
          style={{ width: '100%', marginBottom: 10 }}
        />
        {/* Dinner images */}
        <div style={{ display: 'flex', marginBottom: 10 }}>
          {/* Vertical Dinner images (on the Left) */}
          <div style={{ width: '32%' }}>
            <img
              className='img'
              src='https://assets.d4.docspera.com/home/images/company/IMG_8790.jpeg'
              style={{ width: '100%', marginRight: 5, marginBottom: 10 }}
            />
            <div style={{ width: '100%', overflow: 'hidden', borderRadius: 5 }}>
              <img
                className='img'
                src='https://assets.d4.docspera.com/home/images/company/IMG_8791.jpeg'
                style={{ width: '100%' }}
              />
            </div>
          </div>
          {/* Standing Dinner Image (to the Right) */}
          <div style={{ width: '68%', height: '100%', marginLeft: 10 }}>
            <img
              className='img'
              src='https://assets.d4.docspera.com/home/images/company/IMG_8794.jpeg'
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Brainstorming Session */}
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <img
              className='img'
              src='https://assets.d4.docspera.com/home/images/company/IMG_8825.jpeg'
              style={{ width: '100%', marginBottom: 10 }}
            />
            <img
              className='img'
              src='https://assets.d4.docspera.com/home/images/company/IMG_8887.jpg'
              style={{ width: '100%', marginBottom: 10 }}
            />
          </div>
          <div style={{ width: '50%', marginLeft: 10, marginBottom: 10 }}>
            <img
              className='img'
              src='https://assets.d4.docspera.com/home/images/company/IMG_8838.jpeg'
              style={{ width: '100%', marginBottom: 10 }}
            />
            <img
              className='img'
              src='https://assets.d4.docspera.com/home/images/company/IMG_8849.jpeg'
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Elizabeth, Luca & Jon */}
        <img
          className='img'
          src='https://assets.d4.docspera.com/home/images/company/IMG_8865.jpeg'
          style={{ width: '100%' }}
        />
      </div>

      <FooterBar />
      <style jsx>{`
        .container {
          width: 100%;
        }
        h2 {
          text-align: center;
        }
        p {
          max-width: 700px;
          margin: 0 auto;
          // text-align: center;
          padding-top: 30px;
          padding-bottom: 50px;
        }
        .img {
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}
