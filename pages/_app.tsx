import "../styles/globals.css"
import type { AppProps } from 'next/app'

import Layout from "../app/layout/MainLayout";
import React from "react";
import { store } from "../store/index"
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <div className={"bg-gray-100 min-h-screen"}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  </Provider>
}

export default MyApp
