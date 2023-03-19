import React from 'react';
import Head from 'next/head';
import HeaderNav from '../components/HeaderNav';
import FooterBar from '../components/Footer';
import {useMedia} from '../hooks/useMedia';
import AnnoucementBanner from '../components/AnnoucementBanner';

export default function Blog() {
  const isBrowser = () => typeof window !== 'undefined';
  const smallScreen = useMedia('(max-width: 1100px)');

  return (
    <>
      <AnnoucementBanner />
      <div className="container">
        <Head>
          <title>
            DocSpera | HIPAA Compliant, Integrated Surgical Coordination
            Platform
          </title>
        </Head>

        <HeaderNav />

        <iframe
          src="https://blog.d4.docspera.com/"
          width="100%"
          style={{
            border: 'none',
            height: 'calc(100vh - 100px)',
            width: '100%',
          }}
        />

        <FooterBar />
        <style jsx>{`
          .container {
            width: 100%;
          }
        `}</style>
      </div>
    </>
  );
}
