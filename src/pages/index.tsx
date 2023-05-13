import {Main} from "@/templates/Main";
import {Meta} from "@/layout/Meta";
import Banner from "@/components/shared/Banner/Banner";

import {images} from "../../public/assests/images";

export default function Home() {
  return (
    <Main meta={<Meta title='Home' description='Home Page'/>}>
      <Banner
        background={images.banner.home}
        overhead='Real estate agency'
        title='Find the perfect place to Live with your family'
        text='Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.'
        button
        buttonText='Explore Property'
      />
    </Main>
  )
}
