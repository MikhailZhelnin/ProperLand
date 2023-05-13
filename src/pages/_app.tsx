import type { AppProps } from 'next/app'
import {Provider} from "react-redux";

import {store, wrapper} from "@/store/store";

import 'remixicon/fonts/remixicon.css'
import '@/styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(App)