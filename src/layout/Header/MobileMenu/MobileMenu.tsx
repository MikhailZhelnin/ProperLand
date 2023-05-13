import Link from "next/link";

import Button from "@/components/shared/Button/Button";

import {menuItems} from "@/data";

import styles from './MobileMenu.module.scss'

interface MobileMenuProps {
  active: boolean
  closeMobileMenu(): void
}

const MobileMenu = ({active, closeMobileMenu}: MobileMenuProps) => {
  return (
    <div className={!active ? styles.mobileMenu : `${styles.mobileMenu} ${styles.mobileMenuActive}`}>
      <nav className={styles.mobileMenuNav}>
        <ul className={styles.mobileMenuNavList}>
          {menuItems.map(item => (
            <li key={item.id} className={styles.mobileMenuNavListItem}>
              <Link href={item.link} className={styles.mobileMenuNavListLink}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.mobileMenuContactButton}>
        <Button color='primary' text='Contact' asLink linkPath='/'/>
      </div>
      <button className={styles.mobileMenuCloseButton} onClick={closeMobileMenu}>
        <i className="ri-close-line ri-4x"></i>
      </button>
    </div>
  )
}

export default MobileMenu;