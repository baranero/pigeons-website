import React, { useState, useEffect } from 'react';
import classes from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setHidden(false);
      } else {
        setHidden(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <section className={`${classes.header} ${hidden ? classes.hidden : ''}`}>
      <div className={classes['header-logo']}>
        <img className={classes.image} src="./images/logo.png" alt="Logo" />
        <h1>Krzysztof Baran</h1>
      </div>
      <div className={classes.hamburger}>
        <GiHamburgerMenu size={35}/>
      </div>
      <nav className={classes.navbar}>
        <ul className={classes['navbar-list']}>
          <li className={classes['navbar-item']}><a href="#about">O mnie</a></li>
          <li className={classes['navbar-item']}><a href="#achievements">Osiągniecia</a></li>
          <li className={classes['navbar-item']}><a href="#pigeons">Gołębie</a></li>
          <li className={classes['navbar-item']}><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
