
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import "mapbox-gl/dist/mapbox-gl.css"

import "../styles/main.scss";
import Navigation from "components/global/naviagtion/Navigation";
import HeadAndMeta from "components/global/head/Head"
import { useEffect } from 'react';
import { useCookies } from "react-cookie";
import { lang } from "components/util/translate.content";



function MyApp({ Component, pageProps }) {
  const [cookies, setCookie, removeCookie] = useCookies(['lang']);


  useEffect(() => {
    if (cookies.lang && cookies.lang.length > 0 && cookies.lang != 'geo') {
      const translateElements = document.querySelectorAll('[data-translation]')

      Array.from(translateElements).map((el: HTMLElement, i) => {
        el.innerHTML = lang[cookies.lang].index[el.dataset.translation]
      })

      const translateGlobalElements = document.querySelectorAll('[data-translation-global]')

      Array.from(translateGlobalElements).map((el: HTMLElement, i) => {
        el.innerHTML = lang[cookies.lang].global.navigation[el.dataset.translationGlobal]
      })
    }
  }, [])



  return (
    <>
      <HeadAndMeta
        title='Fast Service Group'
        description='FSG - საფოსტო საკურიერო სერვისები'
        favIconImagePath='/svg/fsg_logo.png'
        baseUrl='https://fsgpost.ge'
        ogTitle='📦 Fast Service Group'
        ogDescription='FSG - საფოსტო საკურიერო სერვისები'
        ogImagePath='/svg/fsg_logo.png' />

      <GeistProvider>
        <CssBaseline />

        <Navigation />
        <Component {...pageProps} />
      </GeistProvider>
    </>
  );
}




export default MyApp;
