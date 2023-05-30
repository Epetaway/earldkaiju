"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,91];
exports.modules = {

/***/ 7933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/Button.jsx



const variantStyles = {
    primary: "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
    secondary: "bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
};
function Button({ variant ="primary" , className , href , ...props }) {
    className = external_clsx_default()("inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none", variantStyles[variant], className);
    return href ? /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: href,
        className: className,
        ...props
    }) : /*#__PURE__*/ jsx_runtime.jsx("button", {
        className: className,
        ...props
    });
}

// EXTERNAL MODULE: ./src/components/Card.jsx
var Card = __webpack_require__(9537);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(5649);
// EXTERNAL MODULE: ./src/components/SocialIcons.jsx
var SocialIcons = __webpack_require__(7643);
;// CONCATENATED MODULE: ./src/images/photos/me.jpeg
/* harmony default export */ const me = ({"src":"/_next/static/media/me.0a9ce799.jpeg","height":960,"width":960,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAgEAABBAEEAwAAAAAAAAAAAAABAAIDBCEFBxESIjFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALnSas3dOgy3cmoUpPGuxr+YrDADgj12J+5GEREH/9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/photos/justMe.png
/* harmony default export */ const justMe = ({"src":"/_next/static/media/justMe.03e56064.png","height":1694,"width":1708,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEUFBRBLLipmWWANDS4KDA8fGy4VExgvJyxzYnEmJj0dFiMICTsvKjINDVwyKz9GODlWQER+c4gqIRpgUUlEKDsRETSseGFDP0xUSF3Htb6ilpu4uMyvoL3VrJ9XTWd3RME2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nAXBBQLAIAwEsCsUKG5z+/8zl8BrnTMA+BhXtsoiVaaRXsKy9T4HTbj23N8hF0LZi5FTwfhgrBKAk5NWHX5jawLOQv25zAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/photos/us.jpeg
/* harmony default export */ const us = ({"src":"/_next/static/media/us.21fce331.jpeg","height":960,"width":957,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABAwQDAAAAAAAAAAAAAAABAAIRAwUSEyExof/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAWEQADAAAAAAAAAAAAAAAAAAAAAhP/2gAMAwEAAhEDEQA/AICjfdcDJ7C2rOqQG4DkT70iIhmo9WP/2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/photos/MeBjj_2.jpg
/* harmony default export */ const MeBjj_2 = ({"src":"/_next/static/media/MeBjj_2.6bf53e95.jpg","height":1368,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAACAQQCAwAAAAAAAAAAAAABAgADBBEhBQYTYYH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAwDAQACEQMRAD8An0e6crYmpbulvVdHKt5HYlCNYHrWfsRErV1jL//Z","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/photos/BjjClass.jpg
/* harmony default export */ const BjjClass = ({"src":"/_next/static/media/BjjClass.2d33ac4d.jpg","height":2268,"width":4032,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAgMAAwAAAAAAAAAAAAABAgADBAUhEXGB/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EABoRAAICAwAAAAAAAAAAAAAAAAABAwRRUrH/2gAMAwEAAhEDEQA/AJsTf7CnINjWLcCoUJYoKjh749kH4IiI86cGvQtWJcn/2Q==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: external "feed"
const external_feed_namespaceObject = require("feed");
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
// EXTERNAL MODULE: ./src/lib/getAllArticles.js
var getAllArticles = __webpack_require__(3178);
;// CONCATENATED MODULE: ./src/lib/generateRssFeed.js





async function generateRssFeed() {
    let articles = await (0,getAllArticles/* getAllArticles */.z)();
    let siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    let author = {
        name: "Brian Ketelsen",
        email: "me@brian.dev"
    };
    let feed = new external_feed_namespaceObject.Feed({
        title: author.name,
        description: "Brian Ketelsen - Blog",
        author,
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/favicon.ico`,
        favicon: `${siteUrl}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        feedLinks: {
            rss2: `${siteUrl}/rss/feed.xml`,
            json: `${siteUrl}/rss/feed.json`
        }
    });
    for (let article of articles){
        let url = `${siteUrl}/articles/${article.slug}`;
        let html = server_default().renderToStaticMarkup(/*#__PURE__*/ jsx_runtime.jsx(article.component, {
            isRssFeed: true
        }));
        feed.addItem({
            title: article.title,
            id: url,
            link: url,
            description: article.description,
            content: html,
            author: [
                author
            ],
            contributor: [
                author
            ],
            date: new Date(article.date)
        });
    }
    await (0,promises_namespaceObject.mkdir)("./public/rss", {
        recursive: true
    });
    await Promise.all([
        (0,promises_namespaceObject.writeFile)("./public/rss/feed.xml", feed.rss2(), "utf8"),
        (0,promises_namespaceObject.writeFile)("./public/rss/feed.json", feed.json1(), "utf8")
    ]);
}

// EXTERNAL MODULE: ./src/lib/formatDate.js
var formatDate = __webpack_require__(3652);
// EXTERNAL MODULE: ./src/data/siteMeta.js + 7 modules
var siteMeta = __webpack_require__(7289);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/pages/index.jsx


















function MailIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z",
                className: "fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6",
                className: "stroke-zinc-400 dark:stroke-zinc-500"
            })
        ]
    });
}
function BriefcaseIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z",
                className: "fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5",
                className: "stroke-zinc-400 dark:stroke-zinc-500"
            })
        ]
    });
}
function ArrowDownIcon(props) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function Article({ article  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* Card */.Z, {
        as: "article",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Card/* Card.Title */.Z.Title, {
                href: `/articles/${article.slug}`,
                children: article.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Card/* Card.Eyebrow */.Z.Eyebrow, {
                as: "time",
                dateTime: article.date,
                decorate: true,
                children: (0,formatDate/* formatDate */.p)(article.date)
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Card/* Card.Description */.Z.Description, {
                children: article.description
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Card/* Card.Cta */.Z.Cta, {
                children: "Read article"
            })
        ]
    });
}
function SocialLink({ icon: Icon , ...props }) {
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        className: "group -m-1 p-1",
        ...props,
        children: /*#__PURE__*/ jsx_runtime.jsx(Icon, {
            className: "h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        })
    });
}
function Newsletter() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        action: "/thank-you",
        className: "rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                className: "flex text-sm font-semibold text-zinc-900 dark:text-zinc-100",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(MailIcon, {
                        className: "h-6 w-6 flex-none"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "ml-3",
                        children: "Stay up to date"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "mt-2 text-sm text-zinc-600 dark:text-zinc-400",
                children: "Get notified when I publish something new, and unsubscribe at any time."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-6 flex",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "email",
                        placeholder: "Email address",
                        "aria-label": "Email address",
                        required: true,
                        className: "min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Button, {
                        type: "submit",
                        className: "ml-4 flex-none",
                        children: "Join"
                    })
                ]
            })
        ]
    });
}
function Resume() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                className: "flex text-sm font-semibold text-zinc-900 dark:text-zinc-100",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(BriefcaseIcon, {
                        className: "h-6 w-6 flex-none"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "ml-3",
                        children: "Work"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ol", {
                className: "mt-6 space-y-4",
                children: siteMeta/* resume.map */.v4.map((role, roleIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: role.logo,
                                    alt: "",
                                    className: "h-7 w-7",
                                    unoptimized: true
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("dl", {
                                className: "flex flex-auto flex-wrap gap-x-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("dt", {
                                        className: "sr-only",
                                        children: "Company"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("dd", {
                                        className: "w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100",
                                        children: role.company
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("dt", {
                                        className: "sr-only",
                                        children: "Role"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("dd", {
                                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                                        children: role.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("dt", {
                                        className: "sr-only",
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("dd", {
                                        className: "ml-auto text-xs text-zinc-500 dark:text-zinc-500",
                                        "aria-label": `${role.start.label ?? role.start} until ${role.end.label ?? role.end}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("time", {
                                                dateTime: role.start.dateTime ?? role.start,
                                                children: role.start.label ?? role.start
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                "aria-hidden": "true",
                                                children: "—"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("time", {
                                                dateTime: role.end.dateTime ?? role.end,
                                                children: role.end.label ?? role.end
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, roleIndex))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button, {
                href: "https://www.linkedin.com/in/earl-hickson-jr/",
                variant: "secondary",
                className: "group mt-6 w-full",
                children: [
                    "More on LinkedIn",
                    /*#__PURE__*/ jsx_runtime.jsx(ArrowDownIcon, {
                        className: "h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                    })
                ]
            })
        ]
    });
}
function Photos() {
    let rotations = [
        "rotate-2",
        "-rotate-2",
        "rotate-2",
        "rotate-2",
        "-rotate-2"
    ];
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mt-16 sm:mt-20",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8",
            children: [
                us,
                justMe,
                me,
                BjjClass,
                MeBjj_2
            ].map((image, imageIndex)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: external_clsx_default()("relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl", rotations[imageIndex % rotations.length]),
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: image,
                        alt: "",
                        sizes: "(min-width: 640px) 18rem, 11rem",
                        className: "absolute inset-0 h-full w-full object-cover"
                    })
                }, image.src))
        })
    });
}
function Home({ articles  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_next_seo_.NextSeo, {
                title: "Earl The Kaiju",
                description: siteMeta/* default.description */.ZP.description,
                canonical: "https://Earl.dev/",
                openGraph: {
                    url: "https://Earl.dev",
                    images: [
                        {
                            url: `https://og.Earl.dev/api/og?title=${siteMeta/* default.title */.ZP.title}&desc=${siteMeta/* default.description */.ZP.description}`,
                            width: 1200,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/jpeg"
                        }
                    ],
                    siteName: "Earl.dev"
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Container/* Container */.W, {
                className: "mt-9",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-2xl text-lg",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                            children: "Graphic artist, Front-end developer, and Jiu-Jitsu enthusiast."
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "prose mt-6 dark:prose-invert",
                            children: "I'm Earl, better known as Earl The Kaiju. I weave visual narratives through graphic arts and streamline user experiences as a front-end developer. When I'm not crafting designs or code, I'm on the mat, competing and sharing my passion for Jiu-Jitsu with others. It's been a thrilling journey so far and it's only getting better!"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mt-6 flex gap-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(SocialLink, {
                                    href: siteMeta/* default.author.instagram */.ZP.author.instagram,
                                    "aria-label": "Follow on Instagram",
                                    icon: SocialIcons/* InstagramIcon */.yu
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(SocialLink, {
                                    href: "https://github.com",
                                    "aria-label": "Follow on GitHub",
                                    icon: SocialIcons/* GitHubIcon */.fy
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(SocialLink, {
                                    href: siteMeta/* default.author.linkedin */.ZP.author.linkedin,
                                    "aria-label": "Follow on LinkedIn",
                                    icon: SocialIcons/* LinkedInIcon */.nI
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Photos, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Container/* Container */.W, {
                className: "mt-24 md:mt-28",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex flex-col gap-16",
                            children: articles.map((article)=>/*#__PURE__*/ jsx_runtime.jsx(Article, {
                                    article: article
                                }, article.slug))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-10 lg:pl-16 xl:pl-24",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(Newsletter, {}),
                                /*#__PURE__*/ jsx_runtime.jsx(Resume, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
async function getStaticProps() {
    if (true) {
        await generateRssFeed();
    }
    return {
        props: {
            articles: (await (0,getAllArticles/* getAllArticles */.z)()).slice(0, 4).map(({ component , ...meta })=>meta)
        }
    };
}


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2479:
/***/ ((module) => {

module.exports = require("fast-glob");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,636,675,649,643,289,537,165], () => (__webpack_exec__(7933)));
module.exports = __webpack_exports__;

})();