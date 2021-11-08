import Layout from '../components/Layout';
import {AppProps} from 'next/app';
import React from 'react';
import '../styles/main.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    );
};

export default MyApp;