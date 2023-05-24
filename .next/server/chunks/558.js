"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 1558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArticlesIndex),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6539);
/* harmony import */ var _components_SimpleLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1439);
/* harmony import */ var _lib_getAllArticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4381);
/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5933);
/* harmony import */ var _data_siteMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7943);







function Article({ article  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "md:grid md:grid-cols-4 md:items-baseline",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
                className: "md:col-span-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* .Card.Title */ .Z.Title, {
                        href: `/articles/${article.slug}`,
                        children: article.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* .Card.Eyebrow */ .Z.Eyebrow, {
                        as: "time",
                        dateTime: article.date,
                        className: "md:hidden",
                        decorate: true,
                        children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_6__/* .formatDate */ .p)(article.date)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* .Card.Description */ .Z.Description, {
                        children: article.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* .Card.Cta */ .Z.Cta, {
                        children: "Read article"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* .Card.Eyebrow */ .Z.Eyebrow, {
                as: "time",
                dateTime: article.date,
                className: "mt-1 hidden md:block",
                children: (0,_lib_formatDate__WEBPACK_IMPORTED_MODULE_6__/* .formatDate */ .p)(article.date)
            })
        ]
    });
}
function ArticlesIndex({ articles  }) {
    const headline = "Ultra-jitsu: blog";
    const intro = "Whether you're a fellow martial artist, considering starting Jiu-Jitsu, or simply curious about the sport, I hope my story can inspire, inform, and maybe even entertain you. My journey is not just about mastering techniques or winning fights—it's about personal growth, overcoming challenges, and learning to see the world from new perspectives.";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
                title: "Ultra-Jitsu - Earl the Kaiju",
                description: _data_siteMeta__WEBPACK_IMPORTED_MODULE_5__/* ["default"].description */ .ZP.description,
                canonical: "https://earl.dev/ultrajitsu",
                openGraph: {
                    url: "https://earl.dev/ultrajitsu",
                    images: [
                        {
                            url: `https://og.earl.dev/api/og?title=Ultra-Jitsu&desc=${headline}`,
                            width: 1200,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/jpeg"
                        }
                    ],
                    siteName: "earl.dev"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SimpleLayout__WEBPACK_IMPORTED_MODULE_3__/* .SimpleLayout */ .X, {
                title: headline,
                intro: intro,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex max-w-3xl flex-col space-y-16",
                        children: articles.map((article)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Article, {
                                article: article
                            }, article.slug))
                    })
                })
            })
        ]
    });
}
async function getStaticProps() {
    return {
        props: {
            articles: (await (0,_lib_getAllArticles__WEBPACK_IMPORTED_MODULE_4__/* .getAllArticles */ .z)()).map(({ component , ...meta })=>meta)
        }
    };
}


/***/ })

};
;