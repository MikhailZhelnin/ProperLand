import type {ReactNode} from 'react';
import {Kufam} from "next/font/google";

import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const roboto = Kufam({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

const Main = ({meta, children}: IMainProps) => {

  return (
    <div className={`${roboto.className}`}>
      {meta}

      <Header/>

      <main>{children}</main>

      <Footer/>
    </div>
  )
}

export {Main}