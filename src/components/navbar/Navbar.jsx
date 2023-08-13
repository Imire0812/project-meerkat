import React, { useState } from 'react';
import style from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import LogoText from '../../assets/logo_text.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.logo_image}>
            <img src={Logo} alt='/' />
            <img src={LogoText} alt='/' />
          </div>
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <li>
              <a href='##'>About</a>
            </li>
            <li>
              <a href='##'>Weather</a>
            </li>
            <li>
              <a href='##'>Blog</a>
            </li>
            <li>
              <a href='##'>Number1</a>
            </li>
            <li>
              <a href='##'>Number2</a>
            </li>
            <li>
              <a href='##'>Feedback</a>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;