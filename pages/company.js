import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import FooterBar from '../components/Footer'

export default function Company() {
  return (
    <div className='container'>
      <Head>
        <title>DocSpera</title>
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
      </div>

      <FooterBar />
      <style jsx>{`
        .container {
          width: 100%;
        }
      `}</style>
    </div>
  )
}
