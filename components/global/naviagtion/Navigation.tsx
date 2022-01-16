import { useState, useEffect } from 'react';
import { Select } from "@geist-ui/react";
import { useCookies } from "react-cookie";
import { lang } from "components/util/translate.content";
import Router from 'next/router'


const Navigation = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['lang']);
  const [isOpen, setIsOpen] = useState(false);



  const logoClickHandler = () => scrollTo(0, 0);



  const changeHtmlLang = async (choosenLang) => {
    await setCookie('lang', choosenLang)

 

    if(choosenLang !== 'geo') {

    await (async () => {
      const translateElements = document.querySelectorAll('[data-translation]')
      const translateGlobalElements = document.querySelectorAll('[data-translation-global]')

      Array.from(translateElements).map((el: HTMLElement, i) => {
        el.innerHTML = lang[choosenLang].index[el.dataset.translation]
      })
      Array.from(translateGlobalElements).map((el: HTMLElement, i) => {
        el.innerHTML = lang[choosenLang].global.navigation[el.dataset.translationGlobal]
      })
    })()
  } else Router.reload()
  }



  const handler = (val) => {
    changeHtmlLang(val.target.value)
  };





  return (
    <>
      <nav className="navigation">
        <div className="navigation_container">
          <div className="logo" onClick={() => logoClickHandler()} />

          <div className="hamburger_container">
            <ul
              className={
                !isOpen ? "menu_none nav_links" : "nav_links menu_block"
              }
            >
              <li className="nav_items">
                <a data-translation-global='services' href="#services">სერვისები</a>
              </li>
              <li className="nav_items">
                <a data-translation-global='about_us' href="#about">ჩვენ შესახებ</a>
              </li>

              <li className="nav_items">
                <a data-translation-global='offices' href="#offices">ოფისები</a>
              </li>

              {/* <li className="nav_items">
                <a data-translation-global='questions' href="#questions">კითხვები</a>
              </li> */}

              <li className="nav_items">
                <a data-translation-global='contact' href="#contact">კონტაქტი</a>
              </li>

              <li>
                <div className="select_lang">
                  <label>
                    <input 
                      id="geo"
                      value="geo"
                      name="lang"
                      type="radio"
                      defaultChecked={cookies.lang === 'geo'}
                      onChange={handler}
                      />
                      <div className={'ge_language'} />
                    </label>
                    <label>
                      <input 
                      id="rus"
                      value="rus"
                      name="lang"
                      type="radio"
                      defaultChecked={cookies.lang === 'rus'}
                      onChange={handler}
                      />
                      <div className={'rus_language'} />
                      </label>
                      <label>
                      <input 
                      id="eng"
                      value="eng"
                      name="lang"
                      type="radio"
                      defaultChecked={cookies.lang === 'eng'}
                      onChange={handler}
                      />
                      <div className={'eng_language'} />
                      </label>
                </div>
              </li>
            </ul>
          </div>

          <div onClick={() => setIsOpen(!isOpen)} className="hamburger"></div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
