import Head from "next/head";
import HeaderNav from "../components/HeaderNav";
import FooterBar from "../components/Footer";
import { useMedia } from "../hooks/useMedia";

export default function Company() {
  return (
    <div className="container">
      <Head>
        <title>
          DocSpera | HIPAA Compliant, Integrated Surgical Coordination Platform
        </title>
        <link
          rel="icon"
          href="https://assets.d4.docspera.com/home/favicon.ico"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <HeaderNav />

      <div className="inner-div">
        <h2>About Our Company</h2>
        <div style={{ width: "100%", display: "flex", justifyContent: "center"}}>
        <img
          className="img"
          src="https://assets.d4.docspera.com/home/images/IMG_9457.jpg"
          style={{ width: "100%", marginTop: 40 }}
        />
        </div>
        <p>
          DocSpera's bold and passionate team comes from diverse healthcare,
          technology and security backgrounds, and is positioned all across the
          United States to serve our customers everywhere. We share core values
          that have helped us succeed throughout our lives, and certainly
          together as a team –{" "}
          <b className="intro-bold">
            Obsession with our Customer, working Collaboratively, to quickly
            execute Bold ideas with Integrity , providing a High Quality product
            – and to Continuously Improve!
          </b>{" "}
          Our team brings with it decades of technical, professional service,
          and executive level experience from innovative companies like Abbott,
          Baxter, Cisco, Eli Lilly, Esri, GE, Guidant, Intuit, Merck, Microsoft,
          Penumbra, Siemens, and Yahoo! to name a few. We share core values that
          have helped us succeed throughout our lives, and certainly together as
          a team.
        </p>

        {/* Brainstorming Session */}
        <div style={{ display: "flex", marginTop: 40 }}>
          <div style={{ width: "50%", marginRight: 7.5 }}>
            <img
              className="img"
              src="https://assets.d4.docspera.com/home/images/IMG_9513.jpeg"
              style={{ width: "100%", marginBottom: 10 }}
            />
          </div>
          <div style={{ width: "50%", marginLeft: 7.5, marginBottom: 10 }}>
            <img
              className="img"
              src="https://assets.d4.docspera.com/home/images/company/IMG_8849.jpeg"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Dinner images */}
        <img
          className="img"
          src="https://assets.d4.docspera.com/home/images/company/IMG_8790.jpeg"
          style={{ width: "100%", marginBottom: 10 }}
        />
        <div style={{ display: "flex" }}>
          {/* Dinner images groups with meals */}
          <div style={{ width: "50%", marginRight: 7.5 }}>
            <img
              className="img"
              src="https://assets.d4.docspera.com/home/images/IMG_9496.jpeg"
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ width: "50%", marginLeft: 7.5, marginBottom: 10 }}>
            <img
              className="img"
              src="https://assets.d4.docspera.com/home/images/IMG_9466.jpg"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Random shots of team */}
        <div style={{ display: "flex" }}>
          <div style={{ width: "33%", marginRight: 7.5 }}>
            <img
              className="img"
              src="https://assets.d4.docspera.com/home/images/company/IMG_8865.jpeg"
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ width: "33%", marginLeft: 7.5, marginBottom: 10 }}>
            <img
              className="img"
              src="https://assets.d4.docspera.com/home/images/company/IMG_8825.jpeg"
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ width: "33%", marginLeft: 15, marginBottom: 10 }}>
            <img
              className="img"
              src="https://assets.d4.docspera.com/home/images/company/IMG_8791.jpeg"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        {/* Company with Jackets Image */}
        <img
          className="img"
          src="https://assets.d4.docspera.com/home/images/company/IMG_8940.jpeg"
          style={{ width: "100%" }}
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
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding-top: 30px;
          padding-bottom: 50px;
        }
        .intro-bold {
          color: var(--blueDocspera);
        }
        .img {
          border-radius: 0px;
        }
      `}</style>
    </div>
  );
}
