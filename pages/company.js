import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import FooterBar from '../components/Footer'
import { ProGallery } from 'pro-gallery'
import 'pro-gallery/dist/statics/main.css'

export default function Company() {
  const items = [
    {
      itemId: 'img1',
      mediaUrl: '/images/company/IMG_8790.jpeg',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: '',
        description: '',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        }
      }
    }
  ]

  const options = {
    galleryLayout: 0
  }

  const isBrowser = () => typeof window !== 'undefined'

  const container = {
    width: isBrowser() && window.innerWidth,
    height: isBrowser() && window.innerHeight
  }

  const eventsListener = (eventName, eventData) => console.log({ eventName, eventData })

  const scrollingElement = isBrowser() && window

  return (
    <div className='container'>
      <Head>
        <title>DocSpera | HIPAA Compliant, Integrated Surgical Coordination Platform </title>
        <link rel='icon' href='/website-gh/favicon.ico' />
      </Head>
      <HeaderNav />

      <div className='inner-div'>
        <h2>About the DocSpera Team</h2>
        <p>
          DocSpera's team comes from the healthcare, technology and security industries, and brings
          with it decades of executive level experience from innovative companies like Siemens,
          Yahoo!, Phillips, Heartflow, Microsoft, Cisco, Esri, GE, Intuit, and Eli Lilly to name a
          few.
        </p>
        {isBrowser() && (
          <ProGallery
            items={items}
            options={options}
            container={container}
            eventsListener={eventsListener}
            scrollingElement={scrollingElement}
          />
        )}
      </div>
      {/* <div className='inner-div'>
        <h2>About the DocSpera Team</h2>
        <p>
          DocSpera's team comes from the healthcare, technology and security industries, and brings
          with it decades of executive level experience from innovative companies like Siemens,
          Yahoo!, Phillips, Heartflow, Microsoft, Cisco, Esri, GE, Intuit, and Eli Lilly to name a
          few.
        </p>

        <ProGallery
          items={items}
          options={options}
          container={container}
          eventsListener={eventsListener}
          scrollingElement={scrollingElement}
        />
      </div> */}

      <FooterBar />
      <style jsx>{`
        .container {
          width: 100%;
        }

        p {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          padding-top: 10px;
        }
      `}</style>
    </div>
  )
}
