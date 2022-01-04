(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 631:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "@geist-ui/react"
var react_ = __webpack_require__(838);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(311);
;// CONCATENATED MODULE: ./components/util/translate.content.ts
const lang = {
  eng: {
    global: {
      navigation: {
        services: 'services',
        about_us: 'about us',
        offices: 'offices',
        questions: 'questions',
        contact: 'contact'
      }
    },
    index: {
      hero_title: 'An easier way to send <br/> and receive parcels',
      hero_description: 'Get faster and effortless service <br/> in any region of Georgia.',
      hero_button: 'search',
      hero_input_placeholder: 'enter tracking number',
      calculator_from: 'from',
      calculator_where: 'where',
      calculator_cost: 'cost',
      service_title: 'services',
      service_description: 'The main purpose of Postagram is to simplify and improve the delivery process for the partner companies. As such, in case of any additional needs, we are ready to process your request and create a service that adjusts to you.',
      about_title: 'about us',
      about_description: 'Fast Service Group is an international company that provides courier services throughout Europe. <br/> <br/> The services are also available in Georgia. We allow our customers to safely send parcels from any region of Georgia to Europe and vice versa in a short period. <br/> <br/> To provide a better, faster service, FSG is gradually opening new offices in different countries.<br/> <br/> The company aims to let clients use more digital services to make the delivery process more effective.',
      office_title: 'offices',
      office_subQuestion: 'In which countries and cities are FSG services available?',
      office_subtitle: 'Currently, the offices of Fast Service Group operate in the following countries: Georgia, Italy, France, Germany, Spain, Czech Republic, Poland. <br/> In addition to the existing offices, it is possible to contact the company representatives to use the services from any region of the countries. ',
      contact_title: 'contact us',
      contact_button: 'send'
    }
  },
  rus: {
    global: {
      navigation: {
        services: 'Сервисы',
        about_us: 'О нас',
        offices: 'Офисы',
        questions: 'questions',
        contact: 'Контакт'
      }
    },
    index: {
      hero_title: 'Упрости процесс отправки <br/> и получения твоих посылок',
      hero_description: 'Получи быстрый и безопасный сервис <br/> в любом уголке Грузии',
      hero_button: 'Поиск',
      hero_input_placeholder: 'введите номер отслеживания',
      calculator_from: 'куда',
      calculator_where: 'где',
      calculator_cost: 'Стоимость',
      service_title: 'Сервисы',
      service_description: 'Главная цель Postagram-упрощение и усовершенствование сервиса доставки для компаний-партнеров. Соответственно, в случае возникновения любого дополнительного требования, мы готовы обработать ваше требование и создать сервис,  подходящий именно вам.',
      about_title: 'О нас',
      about_description: 'Fast Service Group это международная компания, которая осуществляет транспортировку грузов в Европу и Грузию. <br/> <br/> Наш сервис доступен по всей Грузии. Мы предоставляем нашим клиентам возможность в кратчайшие сроки и с соблюдением всех мер безопасности получать или отправить посылку в Европу.<br/> <br/> Для улучшения сервиса мы поэтапно открываем новые офисы во многих странах Европы.<br/> <br/> Наша цель предоставить нашим клиентам доступ к электронным сервисам, которые обеспечивают получение информации в он-лайн режиме о вашей посылке.',
      office_title: 'Офисы',
      office_subQuestion: 'В каких странах доступен наш сервис?',
      office_subtitle: 'На данный момент мы оперируем в следующих странах: Италия, Франция, Германия, Испания, Чехия, Польша, Грузия. Мы работаем как из наших региональных офисов, так и по дистанционным заказам наших клиентов. <br/> Смотрите список городов где есть наши офисы в приложении.',
      contact_title: 'Контакт',
      contact_button: 'Отправить'
    }
  }
};
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./components/global/naviagtion/Navigation.tsx









const Navigation = () => {
  const [cookies, setCookie, removeCookie] = (0,external_react_cookie_.useCookies)(['lang']);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);

  const logoClickHandler = () => scrollTo(0, 0);

  const changeHtmlLang = async choosenLang => {
    await setCookie('lang', choosenLang);
    if (choosenLang == 'geo') router_default().reload();
    await (async () => {
      const translateElements = document.querySelectorAll('[data-translation]');
      const translateGlobalElements = document.querySelectorAll('[data-translation-global]');
      Array.from(translateElements).map((el, i) => {
        el.innerHTML = lang[choosenLang].index[el.dataset.translation];
      });
      Array.from(translateGlobalElements).map((el, i) => {
        el.innerHTML = lang[choosenLang].global.navigation[el.dataset.translationGlobal];
      });
    })();
  };

  const handler = val => {
    changeHtmlLang(val);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "navigation",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "navigation_container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logo",
          onClick: () => logoClickHandler()
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "hamburger_container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: !isOpen ? "menu_none nav_links" : "nav_links menu_block",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav_items",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                "data-translation-global": "services",
                href: "#services",
                children: "\u10E1\u10D4\u10E0\u10D5\u10D8\u10E1\u10D4\u10D1\u10D8"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav_items",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                "data-translation-global": "about_us",
                href: "#about",
                children: "\u10E9\u10D5\u10D4\u10DC \u10E8\u10D4\u10E1\u10D0\u10EE\u10D4\u10D1"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav_items",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                "data-translation-global": "offices",
                href: "#offices",
                children: "\u10DD\u10E4\u10D8\u10E1\u10D4\u10D1\u10D8"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "nav_items",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                "data-translation-global": "contact",
                href: "#contact",
                children: "\u10D9\u10DD\u10DC\u10E2\u10D0\u10E5\u10E2\u10D8"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "select_lang",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Select, {
                  placeholder: "Choose Language",
                  initialValue: cookies.lang,
                  size: "medium",
                  onChange: handler,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Select.Option, {
                    value: "geo",
                    children: "geo"
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Select.Option, {
                    value: "eng",
                    children: "eng"
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Select.Option, {
                    value: "rus",
                    children: "rus"
                  })]
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: () => setIsOpen(!isOpen),
          className: "hamburger"
        })]
      })
    })
  });
};

/* harmony default export */ var naviagtion_Navigation = (Navigation);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/global/head/Head.tsx






const HeadAndMeta = ({
  title,
  description,
  favIconImagePath,
  baseUrl,
  ogTitle,
  ogDescription,
  ogImagePath
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: favIconImagePath
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "title",
        content: title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: description
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: baseUrl + ogImagePath
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: ogTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: ogDescription
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: ogImagePath
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:url",
        content: baseUrl + ogImagePath
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:title",
        content: ogTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:description",
        content: ogDescription
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:image",
        content: ogImagePath
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "#"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "height=device-height,  width=device-width, initial-scale=1.0,  minimum-scale=1.0, maximum-scale=1.0,  user-scalable=no, target-densitydpi=device-dpi"
      })]
    })]
  });
};

/* harmony default export */ var Head = (HeadAndMeta);
;// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  const [cookies, setCookie, removeCookie] = (0,external_react_cookie_.useCookies)(['lang']);
  (0,external_react_.useEffect)(() => {
    if (cookies.lang && cookies.lang.length > 0 && cookies.lang != 'geo') {
      const translateElements = document.querySelectorAll('[data-translation]');
      Array.from(translateElements).map((el, i) => {
        el.innerHTML = lang[cookies.lang].index[el.dataset.translation];
      });
      const translateGlobalElements = document.querySelectorAll('[data-translation-global]');
      Array.from(translateGlobalElements).map((el, i) => {
        el.innerHTML = lang[cookies.lang].global.navigation[el.dataset.translationGlobal];
      });
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Head, {
      title: "Fast Service Group",
      description: "FSG - \u10E1\u10D0\u10E4\u10DD\u10E1\u10E2\u10DD \u10E1\u10D0\u10D9\u10E3\u10E0\u10D8\u10D4\u10E0\u10DD \u10E1\u10D4\u10E0\u10D5\u10D8\u10E1\u10D4\u10D1\u10D8",
      favIconImagePath: "/svg/small_icon.svg",
      baseUrl: "https://fsgpost.ge",
      ogTitle: "\uD83D\uDCE6 Fast Service Group",
      ogDescription: "FSG - \u10E1\u10D0\u10E4\u10DD\u10E1\u10E2\u10DD \u10E1\u10D0\u10D9\u10E3\u10E0\u10D8\u10D4\u10E0\u10DD \u10E1\u10D4\u10E0\u10D5\u10D8\u10E1\u10D4\u10D1\u10D8",
      ogImagePath: "/pictures/postagram_og.png"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.GeistProvider, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.CssBaseline, {}), /*#__PURE__*/jsx_runtime_.jsx(naviagtion_Navigation, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    })]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 838:
/***/ (function(module) {

"use strict";
module.exports = require("@geist-ui/react");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 311:
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(631));
module.exports = __webpack_exports__;

})();