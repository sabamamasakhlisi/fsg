/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/util/translate.content.ts":
/*!**********************************************!*\
  !*** ./components/util/translate.content.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lang\": function() { return /* binding */ lang; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar lang = {\n  eng: {\n    global: {\n      navigation: {\n        services: 'services',\n        about_us: 'about us',\n        offices: 'offices',\n        questions: 'questions',\n        contact: 'contact'\n      }\n    },\n    index: {\n      hero_title: 'An easier way to send <br/> and receive parcels',\n      hero_description: 'Get faster and effortless service <br/> in any region of Georgia.',\n      hero_button: 'search',\n      hero_input_placeholder: 'enter tracking number',\n      calculator_from: 'from',\n      calculator_where: 'where',\n      calculator_cost: 'cost',\n      service_title: 'services',\n      service_description: 'The main purpose of Postagram is to simplify and improve the delivery process for the partner companies. As such, in case of any additional needs, we are ready to process your request and create a service that adjusts to you.',\n      about_title: 'about us',\n      about_description: 'Postagram is a postal and logistic company that aims to simplify the purchasing and delivery process for customers based on years of experience in the field. <br/><br/>Postagram delivers parcels in Georgia as well as internationally. The services of the company meet the interests and needs of our partners and help them maintain customer trust.',\n      office_title: 'offices',\n      contact_title: 'contact us',\n      contact_button: 'send'\n    }\n  },\n  rus: {\n    global: {\n      navigation: {\n        services: 'Сервисы',\n        about_us: 'О нас',\n        offices: 'Офисы',\n        questions: 'questions',\n        contact: 'Контакт'\n      }\n    },\n    index: {\n      hero_title: 'Упрости процесс отправки <br/> и получения твоих посылок',\n      hero_description: 'Наша команда готова ответить <br/> на любые ваши вопросы.',\n      hero_button: 'Поиск',\n      hero_input_placeholder: 'введите номер отслеживания',\n      calculator_from: 'куда',\n      calculator_where: 'где',\n      calculator_cost: 'Стоимость',\n      service_title: 'Сервисы',\n      service_description: 'Главная цель Postagram-упрощение и усовершенствование сервиса доставки для компаний-партнеров. Соответственно, в случае возникновения любого дополнительного требования, мы готовы обработать ваше требование и создать сервис,  подходящий именно вам.',\n      about_title: 'О нас',\n      about_description: 'Postagram -это почтовая курьерская компания, цель которой, на основании набранного за годы опыта, упростить потребителю процесс покупки и доставки вещи. <br/> <br/>Postagram –осуществляет  поставку посылок как по всему миру, так и по Грузии. Наши сервисы подстроены под интересы и требования  компаний-партнеров и помогают им в сохранении доверия клиентов.',\n      office_title: 'Офисы',\n      contact_title: 'Контакт',\n      contact_button: 'Отправить'\n    }\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91dGlsL3RyYW5zbGF0ZS5jb250ZW50LnRzPzNiMmIiXSwibmFtZXMiOlsibGFuZyIsImVuZyIsImdsb2JhbCIsIm5hdmlnYXRpb24iLCJzZXJ2aWNlcyIsImFib3V0X3VzIiwib2ZmaWNlcyIsInF1ZXN0aW9ucyIsImNvbnRhY3QiLCJpbmRleCIsImhlcm9fdGl0bGUiLCJoZXJvX2Rlc2NyaXB0aW9uIiwiaGVyb19idXR0b24iLCJoZXJvX2lucHV0X3BsYWNlaG9sZGVyIiwiY2FsY3VsYXRvcl9mcm9tIiwiY2FsY3VsYXRvcl93aGVyZSIsImNhbGN1bGF0b3JfY29zdCIsInNlcnZpY2VfdGl0bGUiLCJzZXJ2aWNlX2Rlc2NyaXB0aW9uIiwiYWJvdXRfdGl0bGUiLCJhYm91dF9kZXNjcmlwdGlvbiIsIm9mZmljZV90aXRsZSIsImNvbnRhY3RfdGl0bGUiLCJjb250YWN0X2J1dHRvbiIsInJ1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSxJQUFJLEdBQUc7QUFDaEJDLEtBQUcsRUFBRTtBQUNEQyxVQUFNLEVBQUU7QUFDSkMsZ0JBQVUsRUFBRTtBQUNSQyxnQkFBUSxFQUFFLFVBREY7QUFFUkMsZ0JBQVEsRUFBRSxVQUZGO0FBR1JDLGVBQU8sRUFBRSxTQUhEO0FBSVJDLGlCQUFTLEVBQUUsV0FKSDtBQUtSQyxlQUFPLEVBQUU7QUFMRDtBQURSLEtBRFA7QUFVREMsU0FBSyxFQUFFO0FBQ0hDLGdCQUFVLEVBQUUsaURBRFQ7QUFFSEMsc0JBQWdCLEVBQUUsbUVBRmY7QUFHSEMsaUJBQVcsRUFBRSxRQUhWO0FBSUhDLDRCQUFzQixFQUFFLHVCQUpyQjtBQU1IQyxxQkFBZSxFQUFFLE1BTmQ7QUFPSEMsc0JBQWdCLEVBQUUsT0FQZjtBQVFIQyxxQkFBZSxFQUFFLE1BUmQ7QUFVSEMsbUJBQWEsRUFBRSxVQVZaO0FBV0hDLHlCQUFtQixFQUFFLG1PQVhsQjtBQWFIQyxpQkFBVyxFQUFFLFVBYlY7QUFjSEMsdUJBQWlCLEVBQUUsMlZBZGhCO0FBZ0JIQyxrQkFBWSxFQUFFLFNBaEJYO0FBa0JIQyxtQkFBYSxFQUFFLFlBbEJaO0FBbUJIQyxvQkFBYyxFQUFFO0FBbkJiO0FBVk4sR0FEVztBQWlDaEJDLEtBQUcsRUFBRTtBQUNEdEIsVUFBTSxFQUFFO0FBQ0pDLGdCQUFVLEVBQUU7QUFDUkMsZ0JBQVEsRUFBRSxTQURGO0FBRVJDLGdCQUFRLEVBQUUsT0FGRjtBQUdSQyxlQUFPLEVBQUUsT0FIRDtBQUlSQyxpQkFBUyxFQUFFLFdBSkg7QUFLUkMsZUFBTyxFQUFFO0FBTEQ7QUFEUixLQURQO0FBVURDLFNBQUssRUFBRTtBQUNIQyxnQkFBVSxFQUFFLDBEQURUO0FBRUhDLHNCQUFnQixFQUFFLDJEQUZmO0FBR0hDLGlCQUFXLEVBQUUsT0FIVjtBQUlIQyw0QkFBc0IsRUFBRSw0QkFKckI7QUFNSEMscUJBQWUsRUFBRSxNQU5kO0FBT0hDLHNCQUFnQixFQUFFLEtBUGY7QUFRSEMscUJBQWUsRUFBRSxXQVJkO0FBVUhDLG1CQUFhLEVBQUUsU0FWWjtBQVdIQyx5QkFBbUIsRUFBRSx5UEFYbEI7QUFhSEMsaUJBQVcsRUFBRSxPQWJWO0FBY0hDLHVCQUFpQixFQUFFLHNXQWRoQjtBQWdCSEMsa0JBQVksRUFBRSxPQWhCWDtBQWtCSEMsbUJBQWEsRUFBRSxTQWxCWjtBQW1CSEMsb0JBQWMsRUFBRTtBQW5CYjtBQVZOO0FBakNXLENBQWIiLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWwvdHJhbnNsYXRlLmNvbnRlbnQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbGFuZyA9IHtcbiAgICBlbmc6IHtcbiAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgc2VydmljZXM6ICdzZXJ2aWNlcycsXG4gICAgICAgICAgICAgICAgYWJvdXRfdXM6ICdhYm91dCB1cycsXG4gICAgICAgICAgICAgICAgb2ZmaWNlczogJ29mZmljZXMnLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uczogJ3F1ZXN0aW9ucycsXG4gICAgICAgICAgICAgICAgY29udGFjdDogJ2NvbnRhY3QnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbmRleDoge1xuICAgICAgICAgICAgaGVyb190aXRsZTogJ0FuIGVhc2llciB3YXkgdG8gc2VuZCA8YnIvPiBhbmQgcmVjZWl2ZSBwYXJjZWxzJyxcbiAgICAgICAgICAgIGhlcm9fZGVzY3JpcHRpb246ICdHZXQgZmFzdGVyIGFuZCBlZmZvcnRsZXNzIHNlcnZpY2UgPGJyLz4gaW4gYW55IHJlZ2lvbiBvZiBHZW9yZ2lhLicsXG4gICAgICAgICAgICBoZXJvX2J1dHRvbjogJ3NlYXJjaCcsXG4gICAgICAgICAgICBoZXJvX2lucHV0X3BsYWNlaG9sZGVyOiAnZW50ZXIgdHJhY2tpbmcgbnVtYmVyJyxcblxuICAgICAgICAgICAgY2FsY3VsYXRvcl9mcm9tOiAnZnJvbScsXG4gICAgICAgICAgICBjYWxjdWxhdG9yX3doZXJlOiAnd2hlcmUnLFxuICAgICAgICAgICAgY2FsY3VsYXRvcl9jb3N0OiAnY29zdCcsXG5cbiAgICAgICAgICAgIHNlcnZpY2VfdGl0bGU6ICdzZXJ2aWNlcycsXG4gICAgICAgICAgICBzZXJ2aWNlX2Rlc2NyaXB0aW9uOiAnVGhlIG1haW4gcHVycG9zZSBvZiBQb3N0YWdyYW0gaXMgdG8gc2ltcGxpZnkgYW5kIGltcHJvdmUgdGhlIGRlbGl2ZXJ5IHByb2Nlc3MgZm9yIHRoZSBwYXJ0bmVyIGNvbXBhbmllcy4gQXMgc3VjaCwgaW4gY2FzZSBvZiBhbnkgYWRkaXRpb25hbCBuZWVkcywgd2UgYXJlIHJlYWR5IHRvIHByb2Nlc3MgeW91ciByZXF1ZXN0IGFuZCBjcmVhdGUgYSBzZXJ2aWNlIHRoYXQgYWRqdXN0cyB0byB5b3UuJyxcblxuICAgICAgICAgICAgYWJvdXRfdGl0bGU6ICdhYm91dCB1cycsXG4gICAgICAgICAgICBhYm91dF9kZXNjcmlwdGlvbjogJ1Bvc3RhZ3JhbSBpcyBhIHBvc3RhbCBhbmQgbG9naXN0aWMgY29tcGFueSB0aGF0IGFpbXMgdG8gc2ltcGxpZnkgdGhlIHB1cmNoYXNpbmcgYW5kIGRlbGl2ZXJ5IHByb2Nlc3MgZm9yIGN1c3RvbWVycyBiYXNlZCBvbiB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRoZSBmaWVsZC4gPGJyLz48YnIvPlBvc3RhZ3JhbSBkZWxpdmVycyBwYXJjZWxzIGluIEdlb3JnaWEgYXMgd2VsbCBhcyBpbnRlcm5hdGlvbmFsbHkuIFRoZSBzZXJ2aWNlcyBvZiB0aGUgY29tcGFueSBtZWV0IHRoZSBpbnRlcmVzdHMgYW5kIG5lZWRzIG9mIG91ciBwYXJ0bmVycyBhbmQgaGVscCB0aGVtIG1haW50YWluIGN1c3RvbWVyIHRydXN0LicsXG5cbiAgICAgICAgICAgIG9mZmljZV90aXRsZTogJ29mZmljZXMnLFxuXG4gICAgICAgICAgICBjb250YWN0X3RpdGxlOiAnY29udGFjdCB1cycsXG4gICAgICAgICAgICBjb250YWN0X2J1dHRvbjogJ3NlbmQnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJ1czoge1xuICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlczogJ9Ch0LXRgNCy0LjRgdGLJyxcbiAgICAgICAgICAgICAgICBhYm91dF91czogJ9CeINC90LDRgScsXG4gICAgICAgICAgICAgICAgb2ZmaWNlczogJ9Ce0YTQuNGB0YsnLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uczogJ3F1ZXN0aW9ucycsXG4gICAgICAgICAgICAgICAgY29udGFjdDogJ9Ca0L7QvdGC0LDQutGCJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW5kZXg6IHtcbiAgICAgICAgICAgIGhlcm9fdGl0bGU6ICfQo9C/0YDQvtGB0YLQuCDQv9GA0L7RhtC10YHRgSDQvtGC0L/RgNCw0LLQutC4IDxici8+INC4INC/0L7Qu9GD0YfQtdC90LjRjyDRgtCy0L7QuNGFINC/0L7RgdGL0LvQvtC6JyxcbiAgICAgICAgICAgIGhlcm9fZGVzY3JpcHRpb246ICfQndCw0YjQsCDQutC+0LzQsNC90LTQsCDQs9C+0YLQvtCy0LAg0L7RgtCy0LXRgtC40YLRjCA8YnIvPiDQvdCwINC70Y7QsdGL0LUg0LLQsNGI0Lgg0LLQvtC/0YDQvtGB0YsuJyxcbiAgICAgICAgICAgIGhlcm9fYnV0dG9uOiAn0J/QvtC40YHQuicsXG4gICAgICAgICAgICBoZXJvX2lucHV0X3BsYWNlaG9sZGVyOiAn0LLQstC10LTQuNGC0LUg0L3QvtC80LXRgCDQvtGC0YHQu9C10LbQuNCy0LDQvdC40Y8nLFxuXG4gICAgICAgICAgICBjYWxjdWxhdG9yX2Zyb206ICfQutGD0LTQsCcsXG4gICAgICAgICAgICBjYWxjdWxhdG9yX3doZXJlOiAn0LPQtNC1JyxcbiAgICAgICAgICAgIGNhbGN1bGF0b3JfY29zdDogJ9Ch0YLQvtC40LzQvtGB0YLRjCcsXG5cbiAgICAgICAgICAgIHNlcnZpY2VfdGl0bGU6ICfQodC10YDQstC40YHRiycsXG4gICAgICAgICAgICBzZXJ2aWNlX2Rlc2NyaXB0aW9uOiAn0JPQu9Cw0LLQvdCw0Y8g0YbQtdC70YwgUG9zdGFncmFtLdGD0L/RgNC+0YnQtdC90LjQtSDQuCDRg9GB0L7QstC10YDRiNC10L3RgdGC0LLQvtCy0LDQvdC40LUg0YHQtdGA0LLQuNGB0LAg0LTQvtGB0YLQsNCy0LrQuCDQtNC70Y8g0LrQvtC80L/QsNC90LjQuS3Qv9Cw0YDRgtC90LXRgNC+0LIuINCh0L7QvtGC0LLQtdGC0YHRgtCy0LXQvdC90L4sINCyINGB0LvRg9GH0LDQtSDQstC+0LfQvdC40LrQvdC+0LLQtdC90LjRjyDQu9GO0LHQvtCz0L4g0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L7Qs9C+INGC0YDQtdCx0L7QstCw0L3QuNGPLCDQvNGLINCz0L7RgtC+0LLRiyDQvtCx0YDQsNCx0L7RgtCw0YLRjCDQstCw0YjQtSDRgtGA0LXQsdC+0LLQsNC90LjQtSDQuCDRgdC+0LfQtNCw0YLRjCDRgdC10YDQstC40YEsICDQv9C+0LTRhdC+0LTRj9GJ0LjQuSDQuNC80LXQvdC90L4g0LLQsNC8LicsXG5cbiAgICAgICAgICAgIGFib3V0X3RpdGxlOiAn0J4g0L3QsNGBJyxcbiAgICAgICAgICAgIGFib3V0X2Rlc2NyaXB0aW9uOiAnUG9zdGFncmFtIC3RjdGC0L4g0L/QvtGH0YLQvtCy0LDRjyDQutGD0YDRjNC10YDRgdC60LDRjyDQutC+0LzQv9Cw0L3QuNGPLCDRhtC10LvRjCDQutC+0YLQvtGA0L7QuSwg0L3QsCDQvtGB0L3QvtCy0LDQvdC40Lgg0L3QsNCx0YDQsNC90L3QvtCz0L4g0LfQsCDQs9C+0LTRiyDQvtC/0YvRgtCwLCDRg9C/0YDQvtGB0YLQuNGC0Ywg0L/QvtGC0YDQtdCx0LjRgtC10LvRjiDQv9GA0L7RhtC10YHRgSDQv9C+0LrRg9C/0LrQuCDQuCDQtNC+0YHRgtCw0LLQutC4INCy0LXRidC4LiA8YnIvPiA8YnIvPlBvc3RhZ3JhbSDigJPQvtGB0YPRidC10YHRgtCy0LvRj9C10YIgINC/0L7RgdGC0LDQstC60YMg0L/QvtGB0YvQu9C+0Log0LrQsNC6INC/0L4g0LLRgdC10LzRgyDQvNC40YDRgywg0YLQsNC6INC4INC/0L4g0JPRgNGD0LfQuNC4LiDQndCw0YjQuCDRgdC10YDQstC40YHRiyDQv9C+0LTRgdGC0YDQvtC10L3RiyDQv9C+0LQg0LjQvdGC0LXRgNC10YHRiyDQuCDRgtGA0LXQsdC+0LLQsNC90LjRjyAg0LrQvtC80L/QsNC90LjQuS3Qv9Cw0YDRgtC90LXRgNC+0LIg0Lgg0L/QvtC80L7Qs9Cw0Y7RgiDQuNC8INCyINGB0L7RhdGA0LDQvdC10L3QuNC4INC00L7QstC10YDQuNGPINC60LvQuNC10L3RgtC+0LIuJyxcblxuICAgICAgICAgICAgb2ZmaWNlX3RpdGxlOiAn0J7RhNC40YHRiycsXG5cbiAgICAgICAgICAgIGNvbnRhY3RfdGl0bGU6ICfQmtC+0L3RgtCw0LrRgicsXG4gICAgICAgICAgICBjb250YWN0X2J1dHRvbjogJ9Ce0YLQv9GA0LDQstC40YLRjCdcbiAgICAgICAgfVxuICAgIH0sXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/util/translate.content.ts\n");

/***/ })

});