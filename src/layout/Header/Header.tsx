import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";

import Button from "@/components/shared/Button/Button";
import MobileMenu from "@/layout/Header/MobileMenu/MobileMenu";

import {icons} from "../../../public/assests/icons";
import {menuItems} from "@/data";

import styles from './Header.module.scss'

const Header = () => {

  const [activeBurger, setActiveBurger] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const handleToggle = () => {
    setActiveBurger(!activeBurger);
    setActiveMobileMenu(!activeMobileMenu);
  }

  useEffect(() => {
    if (activeMobileMenu) {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeMobileMenu])

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Image src={icons.logo} alt='Logo'/>
      </div>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          {menuItems.map(item => (
            <li key={item.id} className={styles.headerNavListItem}>
              <Link href={item.link} className={styles.headerNavListItemLink}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.headerButton}>
        <Button color='primary' text='Contact' asLink linkPath='/'/>
      </div>
      <button className={styles.headerBurgerMenu} onClick={handleToggle}>
        <i className="ri-menu-line ri-3x"></i>
      </button>
      <MobileMenu active={activeMobileMenu} closeMobileMenu={() => setActiveMobileMenu(!activeMobileMenu)}/>
    </header>
  )
}

export default Header;