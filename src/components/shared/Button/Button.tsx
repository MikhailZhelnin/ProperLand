import Link from "next/link";
import Image from "next/image";

import {icons} from "../../../../public/assests/icons";

import styles from './Button.module.scss'

interface ButtonProps {
  color: 'primary' | 'secondary' | 'third'
  text: string
  icon?: boolean
  asLink?: boolean
  linkPath?: string
  btnAction?(): void
}

const Button = ({color = 'primary', text, icon, asLink, linkPath, btnAction}: ButtonProps) => {
  return (
    <>
      {!asLink ? (
        <button
          className={
            color === 'primary' ?
              `${styles.button} ${styles.buttonPrimary}` :
              color === 'secondary' ?
                `${styles.button} ${styles.buttonSecondary}` :
                color == 'third' ?
                  `${styles.button} ${styles.buttonThird}` :
                  ''
          }
          onClick={btnAction}
        >
          <span className={styles.buttonText}>{text}</span>
          {icon && <div className={styles.buttonIcon}>
              <Image src={icons.arrow_right_for_btn} alt='Arrow right'/>
          </div>}
        </button>
      ) : (
        <Link href={`${linkPath}`}>
          <button
            className={
              color === 'primary' ?
                `${styles.button} ${styles.buttonPrimary}` :
                color === 'secondary' ?
                  `${styles.button} ${styles.buttonSecondary}` :
                  color == 'third' ?
                    `${styles.button} ${styles.buttonThird}` :
                    ''
            }
          >
            <span className={styles.buttonText}>{text}</span>
            {icon && <div className={styles.buttonIcon}>
                <Image src={icons.arrow_right_for_btn} alt='Arrow right'/>
            </div>}
          </button>
        </Link>
      )}
    </>
  )
}

export default Button;