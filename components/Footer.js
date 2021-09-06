import Link from 'next/link'

export default function FooterBar() {
  return (
    <footer>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Footer
      </a>

      <style jsx>{`
        footer {
          margin-top: 50px;
          width: 100%;
          background-color: white;
          height: 50px;
          display: flex;
          align-items: center;
          filter: drop-shadow(0 -10px 50px #cdf0fd);
          padding-left: 30px;
          padding-right: 30px;
        }

        a {
          color: black;
          text-decoration: none;
        }
      `}</style>
    </footer>
  )
}
