import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import FooterBar from '../components/Footer'
import LeaderProfile from '../components/LeaderProfile'

export default function Leadership() {
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
        <h2>Meet our Leadership</h2>
        <p>
          DocSpera is supported by the market's most influential surgeons and medical advisors.
          Company HQ in Silicon Valley with experience at prominent healthcare and technology
          companies.
        </p>

        <div id='leader-container'>
          <div>
            <LeaderProfile
              leader={{
                picture: 'sam-hexagon.png',
                name: 'Samuel Ethiopia',
                title: 'Co-Founder, CEO',
                linkedIn: 'https://www.linkedin.com/in/samuel-ethiopia-b25631/'
              }}
            />
            <LeaderProfile
              leader={{
                picture: 'sy-hexagon.png',
                name: 'Sy Fahimi',
                title: 'Co-Founder, Exec Chairman',
                linkedIn: 'https://www.linkedin.com/in/sy-fahimi-9a3983/'
              }}
            />
          </div>
          <div>
            <LeaderProfile
              leader={{
                picture: 'ken-hexagon.png',
                name: 'Ken Trauner, MD',
                title: 'Co-Founder & Board Member',
                linkedIn: 'https://www.linkedin.com/in/kenneth-trauner-md-a249bab/'
              }}
            />
            <LeaderProfile
              leader={{
                picture: 'vineet-hexagon.png',
                name: 'Vineet Agrawal',
                title: 'CRO',
                linkedIn: 'https://www.linkedin.com/in/vineet-agrawal-18919b/'
              }}
            />
          </div>
        </div>
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
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding-top: 30px;
          padding-bottom: 50px;
        }
        #leader-container {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        #leader-container div {
          display: flex;
        }
        @media (max-width: 450px) {
          #leader-container div {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
