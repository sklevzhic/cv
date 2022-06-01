import "../styles/globals.css"
import type { AppProps } from 'next/app'

import Layout from "../app/layout/MainLayout";
import React from "react";
import { store } from "../store/index"
import { Provider } from "react-redux";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <div className={"bg-gray-100"}>
      <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-DZB5CFBQW4"
      />

      <Script id={"ganalytics"} strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-DZB5CFBQW4');
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  </Provider>
}

export default MyApp
