import "../styles/globals.css"
import type { AppProps } from 'next/app'

import Layout from "../app/layout/MainLayout";
import React from "react";
function MyApp({ Component, pageProps }: AppProps) {
  return <div className={"bg-gray-100 min-h-screen"}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
}

export default MyApp
