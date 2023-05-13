import Image from "next/image";
import {Source_Sans_3} from "next/font/google";

import Button from "@/components/shared/Button/Button";

import {icons} from "../../../../public/assests/icons";

import styles from './Banner.module.scss'

const sourceSans3 = Source_Sans_3({
  weight: ['400'],
  subsets: ['latin'],
})

interface BannerProps {
  background: string
  overhead: string
  title: string
  text?: string
  button?: boolean
  buttonText?: string
}

const Banner = ({background, overhead, title, text, button, buttonText}: BannerProps) => {
  return (
    <section className={styles.banner}>
      <Image src={background} alt='Background' className={styles.bannerBackground}/>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerOverhead}>
            <Image src={icons.house} alt='House' className={styles.bannerOverheadIcon}/>
            <span className={styles.bannerOverheadText}>{overhead}</span>
          </div>
          <h1 className={styles.bannerTitle}>{title}</h1>
          {text &&
              <div className={styles.bannerText}>
                  <p className={`${sourceSans3.className}`}>{text}</p>
              </div>
          }
          {button && buttonText &&
              <Button color='third' text={buttonText} asLink linkPath='/' icon/>
          }
        </div>
      </div>
    </section>
  )
}

export default Banner;