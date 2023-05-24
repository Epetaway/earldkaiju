"use strict";
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ ArticleLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(956);
// EXTERNAL MODULE: ./src/lib/formatDate.js
var formatDate = __webpack_require__(5933);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/Prose.jsx


function Prose({ as: Component = "div" , className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        className: external_clsx_default()(className, "pt-6 prose prose-lg text-xl max-w-none dark:prose-invert ", // headings
        // lead
        // links
        // link underline
        // pre
        // hr
        "dark:prose-hr:border-zinc-800"),
        ...props
    });
}

;// CONCATENATED MODULE: ./src/components/ArticleLayout.jsx






function ArrowLeftIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function ArticleLayout({ children , meta , isRssFeed =false , previousPathname ,  }) {
    let router = (0,router_.useRouter)();
    if (isRssFeed) {
        return children;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: meta.title,
                description: meta.description,
                canonical: `https://earl.dev${router.pathname}`,
                openGraph: {
                    url: `https://earl.dev${router.pathname}`,
                    images: [
                        {
                            url: `https://og.earl.dev/api/og?title=${meta.title}&desc=${meta.description}`,
                            width: 1200,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/jpeg"
                        }
                    ],
                    siteName: "earl.dev"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-16 lg:mt-32",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "xl:relative",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-auto max-w-2xl",
                        children: [
                            previousPathname && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                onClick: ()=>router.back(),
                                "aria-label": "Go back to articles",
                                className: "group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowLeftIcon, {
                                    className: "h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                                                children: meta.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("time", {
                                                dateTime: meta.date,
                                                className: "order-first flex items-center text-base text-zinc-500 dark:text-zinc-200",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "h-4 w-0.5 rounded-full bg-zinc-500 dark:bg-zinc-200"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ml-3",
                                                        children: (0,formatDate/* formatDate */.p)(meta.date)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Prose, {
                                        className: "mt-8",
                                        children: children
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ })

};
;