module.exports = [
"[project]/Documents/Forgera/forgera-web/public/logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo.0n7-7og7_jjq9.png" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/Documents/Forgera/forgera-web/public/logo.png.mjs { IMAGE => \"[project]/Documents/Forgera/forgera-web/public/logo.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/public/logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2000,
    height: 2000,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAb0lEQVR42oXNsQpAQACA4XsBIo9gt1otFhtZWIgXQGxegEGRhbrheCrJYDvl3D2CmVzq377hBzgRPgN8SEWcSUeuvGHv7K022RxT6DMUMBRS6NHBAWupLYV6VjppTTZFdHRJY1y99XxkMk7E3zkHbp9WX7M+PxEFAAAAAElFTkSuQmCC"
};
}),
"[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$public$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Documents/Forgera/forgera-web/public/logo.png.mjs { IMAGE => "[project]/Documents/Forgera/forgera-web/public/logo.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
const links = [
    'Features',
    'How it Works',
    'Platform',
    'Pricing',
    'FAQ'
];
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
    const scrollTo = (id)=>{
        const el = document.getElementById(id.toLowerCase().replace(/\s+/g, '-'));
        if (el) el.scrollIntoView({
            behavior: 'smooth'
        });
        setMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(18px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
            transition: 'all 0.3s ease',
            padding: '0 5%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 68
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$public$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "Forgera",
                                style: {
                                    height: 36,
                                    width: 36,
                                    borderRadius: 8
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'Sora',
                                    fontWeight: 700,
                                    fontSize: 20,
                                    color: '#fff'
                                },
                                children: "Forgera"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 32,
                            alignItems: 'center'
                        },
                        className: "nav-links",
                        children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollTo(l),
                                style: {
                                    background: 'none',
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: 14,
                                    fontWeight: 500,
                                    transition: 'color 0.2s',
                                    cursor: 'pointer',
                                    border: 'none',
                                    fontFamily: 'Inter'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = '#E8700D',
                                onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(255,255,255,0.7)',
                                children: l
                            }, l, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollTo('pricing'),
                                style: {
                                    background: '#E8700D',
                                    color: '#fff',
                                    borderRadius: 8,
                                    padding: '9px 20px',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    transition: 'background 0.2s, transform 0.2s'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = '#C45D0A';
                                    e.currentTarget.style.transform = 'translateY(-1px)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = '#E8700D';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                },
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMenuOpen(!menuOpen),
                                className: "hamburger",
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    color: '#fff',
                                    flexDirection: 'column',
                                    gap: 5,
                                    padding: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            width: 22,
                                            height: 2,
                                            background: '#fff',
                                            borderRadius: 2,
                                            transition: 'all 0.3s',
                                            transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            width: 22,
                                            height: 2,
                                            background: '#fff',
                                            borderRadius: 2,
                                            transition: 'all 0.3s',
                                            opacity: menuOpen ? 0 : 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'block',
                                            width: 22,
                                            height: 2,
                                            background: '#fff',
                                            borderRadius: 2,
                                            transition: 'all 0.3s',
                                            transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'rgba(17,17,17,0.98)',
                    backdropFilter: 'blur(20px)',
                    padding: '20px 5%',
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                },
                children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollTo(l),
                        style: {
                            background: 'none',
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: 16,
                            fontWeight: 500,
                            textAlign: 'left',
                            padding: '12px 0',
                            border: 'none',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                            fontFamily: 'Inter',
                            cursor: 'pointer'
                        },
                        children: l
                    }, l, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                        lineNumber: 176,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AICard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function AICard({ screens = [], currentIndex = 0, onIndexChange = ()=>{}, autoRotate = true, showTabs = true, showStatusBar = true, showLabel = true, scrollTriggerConfig, style = {}, className = '' }) {
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const perspWrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasWrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chipLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const autoTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gsapScrollTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Mouse parallax state
    const mouseTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 4,
        y: 0
    });
    const mouseCurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 4,
        y: 0
    });
    const entryDone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scrollRot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(currentIndex);
    const [fadeKey, setFadeKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Draw the screenshot on canvas with AI holographic tint
    const drawImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        const screen = screens[index];
        if (!screen || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const W = 1456;
        const H = 840;
        canvas.width = W;
        canvas.height = H;
        ctx.clearRect(0, 0, W, H);
        if (screen.img && screen.img.complete && screen.img.naturalWidth > 0) {
            ctx.drawImage(screen.img, 0, 0, W, H);
        } else {
            ctx.fillStyle = '#0A0A0A';
            ctx.fillRect(0, 0, W, H);
        }
        const overlay = ctx.createLinearGradient(0, 0, W, H);
        overlay.addColorStop(0, 'rgba(80,60,180,0.06)');
        overlay.addColorStop(0.5, 'rgba(232,112,13,0.02)');
        overlay.addColorStop(1, 'rgba(0,100,200,0.05)');
        ctx.fillStyle = overlay;
        ctx.fillRect(0, 0, W, H);
    }, [
        screens
    ]);
    // Update chips
    const updateChips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        const screen = screens[index];
        if (!screen || !chipLayerRef.current) return;
        const chipLayer = chipLayerRef.current;
        if (!chipLayer) return;
        chipLayer.innerHTML = '';
        (screen.chips || []).forEach((chip)=>{
            const el = document.createElement('div');
            el.className = 'ai-chip';
            const pos = {};
            if (chip.top) pos.top = chip.top;
            if (chip.bottom) pos.bottom = chip.bottom;
            if (chip.left) pos.left = chip.left;
            if (chip.right) pos.right = chip.right;
            Object.assign(el.style, pos);
            el.innerHTML = `
        <div class="ai-chip-dot" style="background:${chip.dot};box-shadow:0 0 6px ${chip.dot}55"></div>
        <span class="ai-chip-label">${chip.label}</span>
        <span class="ai-chip-val">${chip.val}</span>
      `;
            chipLayer.appendChild(el);
        });
    }, [
        screens
    ]);
    // Switch screen
    const switchTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index, animate = false)=>{
        setActiveIndex(index);
        onIndexChange(index);
        if (animate) {
            setFadeKey((k)=>k + 1);
            requestAnimationFrame(()=>{
                drawImage(index);
                updateChips(index);
            });
        } else {
            drawImage(index);
            updateChips(index);
        }
    }, [
        drawImage,
        updateChips,
        onIndexChange
    ]);
    // Load images
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        screens.forEach((screen, i)=>{
            if (screen.src && !screen.img) {
                const img = new Image();
                img.onload = ()=>{
                    screen.img = img;
                    if (i === activeIndex) {
                        drawImage(i);
                    }
                };
                img.src = screen.src;
            }
        });
        if (screens[activeIndex]) {
            drawImage(activeIndex);
            updateChips(activeIndex);
        }
    }, [
        screens,
        activeIndex,
        drawImage,
        updateChips
    ]);
    // Auto-rotate
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!autoRotate || screens.length <= 1) return;
        autoTimerRef.current = setInterval(()=>{
            const next = (activeIndex + 1) % screens.length;
            switchTo(next, true);
        }, 5000);
        return ()=>{
            if (autoTimerRef.current) clearInterval(autoTimerRef.current);
        };
    }, [
        autoRotate,
        screens.length,
        activeIndex,
        switchTo
    ]);
    // Mouse parallax
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stage = stageRef.current;
        if (!stage) return;
        const handleMouseMove = (e)=>{
            const rect = stage.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / rect.width;
            const dy = (e.clientY - cy) / rect.height;
            mouseTarget.current = {
                x: 4 - dy * 14,
                y: dx * 12
            };
        };
        const handleMouseLeave = ()=>{
            mouseTarget.current = {
                x: 4,
                y: 0
            };
        };
        stage.addEventListener('mousemove', handleMouseMove);
        stage.addEventListener('mouseleave', handleMouseLeave);
        return ()=>{
            stage.removeEventListener('mousemove', handleMouseMove);
            stage.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
    // GSAP ScrollTrigger
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!scrollTriggerConfig) return;
        const wrap = perspWrapRef.current;
        if (!wrap) return;
        let gsap;
        let ScrollTrigger;
        const loadGSAP = async ()=>{
            try {
                const gsapModule = await __turbopack_context__.A("[project]/Documents/Forgera/forgera-web/node_modules/gsap/index.js [app-ssr] (ecmascript, async loader)");
                gsap = gsapModule.default;
                const { ScrollTrigger: ST } = await __turbopack_context__.A("[project]/Documents/Forgera/forgera-web/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript, async loader)");
                ScrollTrigger = ST;
                gsap.registerPlugin(ScrollTrigger);
                const { start, end, scrub, rotateX, rotateY } = {
                    start: 'top 90%',
                    end: 'top 20%',
                    scrub: 1,
                    rotateX: {
                        start: 18,
                        end: 4
                    },
                    rotateY: {
                        start: -8,
                        end: 0
                    },
                    ...scrollTriggerConfig
                };
                const sx = rotateX.start !== undefined ? rotateX.start : 18;
                const sy = rotateY.start !== undefined ? rotateY.start : -8;
                const ex = rotateX.end !== undefined ? rotateX.end : 4;
                const ey = rotateY.end !== undefined ? rotateY.end : 0;
                const rangeX = ex - sx;
                const rangeY = ey - sy;
                const tween = gsap.to(wrap, {
                    scrollTrigger: {
                        trigger: stageRef.current || wrap.closest('section'),
                        start,
                        end,
                        scrub,
                        invalidateOnRefresh: true,
                        onUpdate: (self)=>{
                            const p = self.progress;
                            scrollRot.current = {
                                x: sx + rangeX * p,
                                y: sy + rangeY * p
                            };
                        }
                    }
                });
                gsapScrollTweenRef.current = tween;
                scrollRot.current = {
                    x: sx,
                    y: sy
                };
                ScrollTrigger.addEventListener('refresh', ()=>ScrollTrigger.refresh());
            } catch (e) {
            // GSAP unavailable
            }
        };
        loadGSAP();
        return ()=>{
            if (gsapScrollTweenRef.current) {
                gsapScrollTweenRef.current.scrollTrigger && gsapScrollTweenRef.current.scrollTrigger.kill();
                gsapScrollTweenRef.current.kill();
            }
        };
    }, [
        scrollTriggerConfig
    ]);
    // Entry animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (entryDone.current) return;
        entryDone.current = true;
        const card = cardRef.current;
        if (!card) return;
        const doEntry = async ()=>{
            let gsap;
            try {
                const mod = await __turbopack_context__.A("[project]/Documents/Forgera/forgera-web/node_modules/gsap/index.js [app-ssr] (ecmascript, async loader)");
                gsap = mod.default;
            } catch  {
                card.style.opacity = '1';
                card.style.transform = 'rotateX(4deg) rotateY(0deg) scale(1)';
                return;
            }
            gsap.set(card, {
                opacity: 0,
                scale: 0.9,
                rotateX: 0,
                rotateY: 0
            });
            gsap.to(card, {
                opacity: 1,
                scale: 1,
                rotateX: 4,
                rotateY: 0,
                duration: 1.1,
                delay: 0.3,
                ease: 'power3.out'
            });
        };
        doEntry();
    }, []);
    // Main animation loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const card = cardRef.current;
        const canvasWrap = canvasWrapRef.current;
        if (!card) return;
        const lerp = (a, b, t)=>a + (b - a) * t;
        const animate = ()=>{
            mouseCurrent.current.x = lerp(mouseCurrent.current.x, mouseTarget.current.x, 0.06);
            mouseCurrent.current.y = lerp(mouseCurrent.current.y, mouseTarget.current.y, 0.06);
            if (card) {
                const mx = mouseCurrent.current.x;
                const my = mouseCurrent.current.y;
                card.style.transform = `rotateX(${mx}deg) rotateY(${my}deg)`;
            }
            if (canvasWrap) {
                const sr = scrollRot.current;
                const mr = mouseCurrent.current;
                const totalX = sr.x + (mr.x - 4);
                const totalY = sr.y + mr.y;
                const tx = totalY * 0.8;
                const ty = -(totalX - 4) * 0.6;
                canvasWrap.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return ()=>{
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: stageRef,
        className: `ai-card-stage ${className}`,
        style: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            ...style
        },
        children: [
            showTabs && screens.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ai-tab-bar",
                children: screens.map((screen, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `ai-tab-btn ${i === activeIndex ? 'active' : ''}`,
                        onClick: ()=>{
                            if (autoTimerRef.current) clearInterval(autoTimerRef.current);
                            switchTo(i, true);
                        },
                        children: screen.label
                    }, i, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                        lineNumber: 363,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                lineNumber: 361,
                columnNumber: 9
            }, this),
            showStatusBar && screens[activeIndex] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ai-status-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ai-status-url",
                        children: screens[activeIndex].url || screens[activeIndex].label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                        lineNumber: 379,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ai-status-live",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ai-live-dot"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this),
                            "LIVE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                lineNumber: 378,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: perspWrapRef,
                className: "ai-perspective-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: cardRef,
                        className: "ai-product-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ai-glow"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ai-glass-frame",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ai-scanlines"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ai-top-tint"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ai-bottom-tint"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ai-corner ai-corner-tl"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ai-corner ai-corner-tr"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ai-corner ai-corner-bl"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ai-corner ai-corner-br"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: canvasWrapRef,
                                        className: "ai-canvas-wrap",
                                        style: {
                                            position: 'relative',
                                            zIndex: 1,
                                            willChange: 'transform'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                            ref: canvasRef,
                                            className: "ai-screen-canvas",
                                            style: {
                                                width: '100%',
                                                display: 'block',
                                                opacity: 1,
                                                transition: 'none'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: chipLayerRef,
                                        className: "ai-chip-layer"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ai-reflection"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this),
            showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ai-product-label",
                children: "Forgera OS · Intelligent Business Operations"
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                lineNumber: 430,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .ai-card-stage {
          perspective: 1000px;
          perspective-origin: 50% 40%;
        }

        .ai-tab-bar {
          display: flex;
          gap: 6px;
          margin-bottom: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50px;
          padding: 5px;
          position: relative;
          z-index: 10;
        }
        .ai-tab-btn {
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
          font-family: inherit;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .ai-tab-btn.active {
          background: rgba(232,112,13,0.15);
          border: 1px solid rgba(232,112,13,0.35);
          color: #E8700D;
        }
        .ai-tab-btn:not(.active):hover {
          color: rgba(255,255,255,0.7);
        }

        .ai-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4px;
          margin-bottom: 10px;
          width: 100%;
          max-width: 860px;
          position: relative;
          z-index: 10;
        }
        .ai-status-url {
          font-size: 11px;
          color: rgba(232,112,13,0.6);
          letter-spacing: 0.06em;
          font-family: 'SF Mono', 'Fira Code', monospace;
        }
        .ai-status-live {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.05em;
        }
        .ai-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4CAF50;
          box-shadow: 0 0 6px #4CAF50;
          animation: ai-live-pulse 2s infinite;
        }
        @keyframes ai-live-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .ai-perspective-wrap {
          perspective: 1000px;
          perspective-origin: 50% 40%;
          width: 100%;
          max-width: 860px;
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .ai-product-card {
          width: 100%;
          transform-style: preserve-3d;
          border-radius: 18px;
          position: relative;
          will-change: transform;
        }

        .ai-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 50%;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(232,112,13,0.06) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
          z-index: -1;
        }

        .ai-glass-frame {
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(232,112,13,0.22);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.04),
            0 32px 80px rgba(0,0,0,0.7),
            0 0 60px rgba(232,112,13,0.08),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .ai-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.06) 3px,
            rgba(0,0,0,0.06) 4px
          );
          pointer-events: none;
          z-index: 20;
          border-radius: 18px;
        }

        .ai-top-tint {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(180deg, rgba(232,112,13,0.06) 0%, transparent 100%);
          pointer-events: none;
          z-index: 18;
        }

        .ai-bottom-tint {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(0deg, rgba(7,7,16,0.5) 0%, transparent 100%);
          pointer-events: none;
          z-index: 18;
        }

        .ai-corner {
          position: absolute;
          width: 18px;
          height: 18px;
          z-index: 25;
        }
        .ai-corner-tl {
          top: -1px;
          left: -1px;
          border-top: 2px solid rgba(232,112,13,0.7);
          border-left: 2px solid rgba(232,112,13,0.7);
          border-radius: 4px 0 0 0;
        }
        .ai-corner-tr {
          top: -1px;
          right: -1px;
          border-top: 2px solid rgba(232,112,13,0.7);
          border-right: 2px solid rgba(232,112,13,0.7);
          border-radius: 0 4px 0 0;
        }
        .ai-corner-bl {
          bottom: -1px;
          left: -1px;
          border-bottom: 2px solid rgba(232,112,13,0.7);
          border-left: 2px solid rgba(232,112,13,0.7);
          border-radius: 0 0 0 4px;
        }
        .ai-corner-br {
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid rgba(232,112,13,0.7);
          border-right: 2px solid rgba(232,112,13,0.7);
          border-radius: 0 0 4px 0;
        }

        .ai-canvas-wrap {
          overflow: hidden;
        }
        .ai-screen-canvas {
          width: 100%;
          display: block;
        }

        .ai-chip-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 22;
        }

        .ai-chip {
          position: absolute;
          background: rgba(7,7,16,0.82);
          border: 1px solid rgba(232,112,13,0.3);
          border-radius: 8px;
          padding: 6px 10px;
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          gap: 7px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4), 0 0 12px rgba(232,112,13,0.08);
          white-space: nowrap;
        }
        .ai-chip-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .ai-chip-label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .ai-chip-val {
          font-size: 13px;
          font-weight: 700;
          color: #E8700D;
          font-family: 'SF Mono', 'Fira Code', monospace;
          margin-left: 2px;
        }

        .ai-reflection {
          width: 90%;
          height: 40px;
          margin: 0 auto;
          background: linear-gradient(180deg, rgba(232,112,13,0.04) 0%, transparent 100%);
          border-radius: 0 0 50% 50%;
          filter: blur(12px);
        }

        .ai-product-label {
          margin-top: 28px;
          text-align: center;
          font-size: 12px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ai-product-label::before,
        .ai-product-label::after {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: rgba(255,255,255,0.1);
        }

        @media (max-width: 640px) {
          .ai-tab-btn {
            padding: 6px 12px;
            font-size: 11px;
          }
          .ai-chip {
            padding: 4px 8px;
          }
          .ai-chip-label {
            font-size: 9px;
          }
          .ai-chip-val {
            font-size: 11px;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$AICard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const SCREENS = [
    {
        label: 'Dashboard',
        src: '/dashboard.webp',
        url: 'os.forgera.app / dashboard',
        chips: [
            {
                top: '12%',
                left: '2%',
                dot: '#4CAF50',
                label: 'Sales 30d',
                val: 'Rs. 543.1K'
            },
            {
                top: '12%',
                right: '2%',
                dot: '#E8700D',
                label: 'Low Stock',
                val: '745 items'
            },
            {
                bottom: '18%',
                left: '3%',
                dot: '#378ADD',
                label: 'Orders',
                val: '135 today'
            }
        ]
    },
    {
        label: 'AI Agent',
        src: '/ai_assistant.webp',
        url: 'os.forgera.app / ai-agent',
        chips: [
            {
                top: '10%',
                left: '2%',
                dot: '#7F77DD',
                label: 'AI Mode',
                val: 'Live data'
            },
            {
                bottom: '22%',
                right: '3%',
                dot: '#4CAF50',
                label: 'Accuracy',
                val: '98.3%'
            }
        ]
    }
];
function Hero() {
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentScreen, setCurrentScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTimeout(()=>setLoaded(true), 100);
    }, []);
    const scrollTo = (id)=>{
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: heroRef,
        className: "section-hero",
        style: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '120px 5% 80px',
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,112,13,0.13) 0%, transparent 70%), #0A0A0A'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 700,
                    height: 400,
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse, rgba(232,112,13,0.07) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    filter: 'blur(40px)'
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.7s ease 0.2s',
                    fontSize: 'clamp(38px, 6vw, 72px)',
                    fontWeight: 800,
                    textAlign: 'center',
                    maxWidth: 820,
                    lineHeight: 1.1,
                    color: '#fff',
                    letterSpacing: '-0.02em'
                },
                children: [
                    "Stop Guessing What to Buy.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                        lineNumber: 70,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#E8700D'
                        },
                        children: "Let AI Decide With You."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.7s ease 0.35s',
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    color: '#888',
                    textAlign: 'center',
                    maxWidth: 600,
                    marginTop: 24,
                    lineHeight: 1.7
                },
                children: "Our platform ForgeraAI helps inventory-driven businesses predict demand, prevent stockouts, optimize purchasing, and gain complete visibility into inventory, suppliers, and cash flow—all from one intelligent platform."
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.7s ease 0.5s',
                    display: 'flex',
                    gap: 14,
                    marginTop: 40,
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollTo('pricing'),
                        style: {
                            background: '#E8700D',
                            color: '#fff',
                            borderRadius: 10,
                            padding: '14px 32px',
                            fontSize: 16,
                            fontWeight: 600,
                            transition: 'all 0.25s',
                            boxShadow: '0 0 30px rgba(232,112,13,0.3)'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = '#C45D0A';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 40px rgba(232,112,13,0.45)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = '#E8700D';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(232,112,13,0.3)';
                        },
                        children: "Get Started Free"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>scrollTo('features'),
                        style: {
                            background: 'transparent',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.18)',
                            borderRadius: 10,
                            padding: '14px 32px',
                            fontSize: 16,
                            fontWeight: 500,
                            transition: 'all 0.25s'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.borderColor = '#E8700D';
                            e.currentTarget.style.color = '#E8700D';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                            e.currentTarget.style.color = '#fff';
                        },
                        children: "See Features"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-stats",
                style: {
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.7s ease 0.65s',
                    display: 'flex',
                    gap: 48,
                    marginTop: 64,
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                },
                children: [
                    {
                        val: '10+',
                        label: 'Modules'
                    },
                    {
                        val: 'Multi',
                        label: 'Location Support'
                    },
                    {
                        val: 'Real-time',
                        label: 'AI Insights'
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-stat-item",
                        style: {
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 28,
                                    fontWeight: 800,
                                    color: '#E8700D',
                                    fontFamily: 'Sora'
                                },
                                children: s.val
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                                lineNumber: 126,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 13,
                                    color: '#666',
                                    marginTop: 4
                                },
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                                lineNumber: 127,
                                columnNumber: 25
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                        lineNumber: 125,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.96)',
                    transition: 'all 0.9s ease 0.75s',
                    marginTop: 72,
                    width: '100%',
                    maxWidth: 900
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$AICard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    screens: SCREENS,
                    currentIndex: currentScreen,
                    onIndexChange: (idx)=>setCurrentScreen(idx),
                    autoRotate: true,
                    showTabs: true,
                    showStatusBar: true,
                    showLabel: true,
                    scrollTriggerConfig: {
                        start: 'top 85%',
                        end: 'top 15%',
                        scrub: 1.5,
                        rotateX: {
                            start: 18,
                            end: 4
                        },
                        rotateY: {
                            start: -8,
                            end: 0
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                    lineNumber: 138,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
                @media (max-width: 640px) {
                    .section-hero { padding: 100px 5% 50px !important; }
                    .hero-stats { gap: 24px !important; }
                }
            `
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
                lineNumber: 156,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Forgera/forgera-web/app/components/Features.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Features
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
'use client';
;
const features = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                width: 28,
                height: 28
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "3.27 6.96 12 12.01 20.73 6.96"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 10,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "22.08",
                    x2: "12",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "7",
                    y1: "9.5",
                    x2: "17",
                    y2: "9.5"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        title: 'Inventory Management',
        desc: 'Real-time stock tracking across multiple locations and warehouses. Get instant alerts for low stock, expiry, and movement anomalies.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                width: 28,
                height: 28
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "4",
                    y: "14",
                    width: "4",
                    height: "6",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "10",
                    y: "10",
                    width: "4",
                    height: "10",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "16",
                    y: "6",
                    width: "4",
                    height: "14",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "6 14 12 10 18 6"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        title: 'Sales & Order Tracking',
        desc: 'Monitor sales performance, customer orders, and revenue trends. Drill down by branch, product, or time period.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                width: 28,
                height: 28
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "21",
                    r: "1"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "20",
                    cy: "21",
                    r: "1"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "13 9 15 11 19 7"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
            lineNumber: 32,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        title: 'Purchasing & Suppliers',
        desc: 'Streamline purchase orders, track supplier performance, and automate reorder triggers based on stock thresholds.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                width: 28,
                height: 28
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "1",
                    y: "7",
                    width: "22",
                    height: "14",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "1",
                    y1: "11",
                    x2: "23",
                    y2: "11"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 4l-5 3v4c0 3.5 3 6.5 5 7 2-.5 5-3.5 5-7V7l-5-3z"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
            lineNumber: 44,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        title: 'Customer Credit Control',
        desc: 'Manage credit limits, outstanding balances, and payment histories for your wholesale and retail customers.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                width: 28,
                height: 28
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 8l1.5 3 3 1.5-3 1.5L12 17l-1.5-3-3-1.5 3-1.5Z"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        title: 'AI Agent',
        desc: 'Ask questions about your business in plain language. Get instant answers, forecasts, and recommendations from your operational data.'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                width: 28,
                height: 28
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "20",
                    x2: "21",
                    y2: "20"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "20",
                    x2: "3",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "4 16 10 14 13 10 17 9"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "17 9 21 5",
                    strokeDasharray: "2 3"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
            lineNumber: 65,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        title: 'AI Analytics & Forecasting',
        desc: 'Demand forecasting, stock optimization, and financial decision support powered by your historical and real-time data.'
    }
];
function Features() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        className: "section-features",
        style: {
            padding: '100px 5%',
            background: '#0A0A0A'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1200,
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        marginBottom: 64
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "reveal",
                            style: {
                                display: 'inline-block',
                                background: 'rgba(232,112,13,0.1)',
                                border: '1px solid rgba(232,112,13,0.2)',
                                borderRadius: 50,
                                padding: '5px 14px',
                                marginBottom: 16,
                                fontSize: 12,
                                fontWeight: 600,
                                color: '#E8700D',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase'
                            },
                            children: "Features"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "reveal delay-1",
                            style: {
                                fontSize: 'clamp(30px, 4vw, 48px)',
                                fontWeight: 800,
                                color: '#fff',
                                marginBottom: 16
                            },
                            children: [
                                "Everything your business needs.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                                    lineNumber: 97,
                                    columnNumber: 56
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#E8700D'
                                    },
                                    children: "All in one platform."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "reveal delay-2",
                            style: {
                                fontSize: 18,
                                color: '#666',
                                maxWidth: 560,
                                margin: '0 auto'
                            },
                            children: "From stock management to AI-powered insights, Forgera covers every layer of your operations."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "features-grid",
                    style: {
                        display: 'grid',
                        gap: 20
                    },
                    children: features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `reveal delay-${Math.min(i % 4 + 1, 5)}`,
                            style: {
                                background: '#111',
                                border: '1px solid rgba(255,255,255,0.07)',
                                borderRadius: 16,
                                padding: '28px 24px',
                                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                                cursor: 'default'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.borderColor = 'rgba(232,112,13,0.3)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 48,
                                        height: 48,
                                        borderRadius: 12,
                                        background: 'rgba(232,112,13,0.12)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 22,
                                        marginBottom: 16
                                    },
                                    children: f.icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                                    lineNumber: 133,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: 17,
                                        fontWeight: 700,
                                        color: '#fff',
                                        marginBottom: 10,
                                        fontFamily: 'Sora'
                                    },
                                    children: f.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                                    lineNumber: 139,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 14,
                                        color: '#666',
                                        lineHeight: 1.7
                                    },
                                    children: f.desc
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                                    lineNumber: 142,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, f.title, true, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                            lineNumber: 113,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
                    lineNumber: 106,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
            lineNumber: 83,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Features.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const steps = [
    {
        num: '01',
        title: 'Connect Your Business',
        desc: 'Set up your locations, product catalogue, suppliers, and teams in minutes. Forgera adapts to your existing structure.'
    },
    {
        num: '02',
        title: 'Centralize Operations',
        desc: 'All your inventory, orders, purchases, and customer accounts flow into one unified system — across every branch.'
    },
    {
        num: '03',
        title: 'Gain Intelligence',
        desc: 'The AI layer analyzes your data to surface insights, predict demand, flag risks, and recommend actions automatically.'
    },
    {
        num: '04',
        title: 'Scale with Confidence',
        desc: 'Add new locations, products, and teams as you grow. Forgera scales with your business without added complexity.'
    }
];
function HowItWorks() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "how-it-works",
        className: "section-howitworks",
        style: {
            padding: '100px 5%',
            background: 'linear-gradient(180deg, #0A0A0A 0%, #0f0f0f 100%)',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    right: -200,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(232,112,13,0.05) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 72
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reveal",
                                style: {
                                    display: 'inline-block',
                                    background: 'rgba(232,112,13,0.1)',
                                    border: '1px solid rgba(232,112,13,0.2)',
                                    borderRadius: 50,
                                    padding: '5px 14px',
                                    marginBottom: 16,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: '#E8700D',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase'
                                },
                                children: "How it Works"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "reveal delay-1",
                                style: {
                                    fontSize: 'clamp(28px, 4vw, 48px)',
                                    fontWeight: 800,
                                    color: '#fff'
                                },
                                children: [
                                    "Up and running in ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#E8700D'
                                        },
                                        children: "four steps."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                                        lineNumber: 52,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "how-it-works-grid",
                        style: {
                            display: 'grid',
                            gap: 20,
                            position: 'relative'
                        },
                        children: steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `reveal delay-${i + 1}`,
                                style: {
                                    position: 'relative',
                                    padding: '0 8px'
                                },
                                children: [
                                    i < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 36,
                                            left: '60%',
                                            right: '-10%',
                                            height: 1,
                                            background: 'linear-gradient(90deg, rgba(232,112,13,0.3), transparent)',
                                            display: 'block'
                                        },
                                        className: "step-connector"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                                        lineNumber: 67,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#111',
                                            border: '1px solid rgba(255,255,255,0.07)',
                                            borderRadius: 16,
                                            padding: '32px 24px',
                                            height: '100%',
                                            position: 'relative',
                                            zIndex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 42,
                                                    fontWeight: 800,
                                                    fontFamily: 'Sora',
                                                    color: 'rgba(232,112,13,0.15)',
                                                    lineHeight: 1,
                                                    marginBottom: 20
                                                },
                                                children: step.num
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                                                lineNumber: 79,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: 18,
                                                    fontWeight: 700,
                                                    color: '#fff',
                                                    marginBottom: 12,
                                                    fontFamily: 'Sora'
                                                },
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                                                lineNumber: 83,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: 14,
                                                    color: '#666',
                                                    lineHeight: 1.7
                                                },
                                                children: step.desc
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                                                lineNumber: 86,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: 24,
                                                    width: 32,
                                                    height: 3,
                                                    borderRadius: 2,
                                                    background: '#E8700D'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                                                lineNumber: 87,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                                        lineNumber: 74,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, step.num, true, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                .how-it-works-grid {
                    grid-template-columns: repeat(4, 1fr);
                }
                @media (max-width: 768px) {
                    .how-it-works-grid { grid-template-columns: 1fr 1fr !important; }
                    .step-connector { display: none !important; }
                }
                @media (max-width: 480px) {
                    .how-it-works-grid { grid-template-columns: 1fr !important; }
                }
            `
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Platform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$AICard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/AICard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const pillars = [
    {
        label: 'Retail',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                width: 28,
                height: 28
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "7",
                    width: "20",
                    height: "14",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 10,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 21V14H8v7"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "2 7 12 2 22 7"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "11",
                    x2: "7",
                    y2: "11"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "17",
                    y1: "11",
                    x2: "19",
                    y2: "11"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        points: [
            'POS-ready inventory sync',
            'Customer credit accounts',
            'Daily sales reporting'
        ]
    },
    {
        label: 'Wholesale',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                width: 28,
                height: 28
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "4",
                    width: "18",
                    height: "16",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "9",
                    y1: "4",
                    x2: "9",
                    y2: "20"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "15",
                    y1: "4",
                    x2: "15",
                    y2: "20"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "10",
                    x2: "21",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "14",
                    x2: "21",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        points: [
            'Bulk order management',
            'Trade pricing tiers',
            'Supplier coordination'
        ]
    },
    {
        label: 'Distribution',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                width: 28,
                height: 28
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "1",
                    y: "13",
                    width: "13",
                    height: "5",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "11",
                    y: "8",
                    width: "8",
                    height: "5",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "19",
                    y1: "13",
                    x2: "19",
                    y2: "16"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "5",
                    cy: "18",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "15",
                    cy: "18",
                    r: "2"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 10l-3-3-3 3"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        points: [
            'Warehouse-to-branch flow',
            'Dispatch tracking',
            'Route-level visibility'
        ]
    }
];
const AI_SCREENS = [
    {
        label: 'AI Agent',
        src: '/ai_assistant.webp',
        url: 'os.forgera.app / ai-agent',
        chips: [
            {
                top: '10%',
                left: '2%',
                dot: '#7F77DD',
                label: 'AI Mode',
                val: 'Live data'
            },
            {
                bottom: '22%',
                right: '3%',
                dot: '#4CAF50',
                label: 'Accuracy',
                val: '98.3%'
            }
        ]
    }
];
function Platform() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "platform",
        className: "section-platform",
        style: {
            padding: '100px 5%',
            background: '#0A0A0A'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 80,
                            alignItems: 'center',
                            marginBottom: 100
                        },
                        className: "platform-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "reveal-left",
                                        style: {
                                            display: 'inline-block',
                                            background: 'rgba(232,112,13,0.1)',
                                            border: '1px solid rgba(232,112,13,0.2)',
                                            borderRadius: 50,
                                            padding: '5px 14px',
                                            marginBottom: 16,
                                            fontSize: 12,
                                            fontWeight: 600,
                                            color: '#E8700D',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase'
                                        },
                                        children: "Intelligence Layer"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "reveal-left delay-1",
                                        style: {
                                            fontSize: 'clamp(26px, 3.5vw, 44px)',
                                            fontWeight: 800,
                                            color: '#fff',
                                            marginBottom: 20
                                        },
                                        children: [
                                            "Beyond record-keeping.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                                lineNumber: 85,
                                                columnNumber: 51
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#E8700D'
                                                },
                                                children: "Actual intelligence."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                                lineNumber: 86,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                        lineNumber: 81,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "reveal-left delay-2",
                                        style: {
                                            fontSize: 16,
                                            color: '#666',
                                            lineHeight: 1.8,
                                            marginBottom: 32
                                        },
                                        children: "Traditional ERPs store data. Forgera understands it. Our AI layer continuously analyzes your operations to surface what matters — before problems become costly."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                        lineNumber: 88,
                                        columnNumber: 25
                                    }, this),
                                    [
                                        'Ask your data anything in plain language',
                                        'Demand forecasting based on historical patterns',
                                        'Automatic reorder recommendations',
                                        'Branch-level performance comparison'
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `reveal-left delay-${i + 2}`,
                                            style: {
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: 12,
                                                marginBottom: 14
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 20,
                                                        height: 20,
                                                        borderRadius: '50%',
                                                        background: 'rgba(232,112,13,0.15)',
                                                        border: '1px solid rgba(232,112,13,0.3)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0,
                                                        marginTop: 2
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "10",
                                                        height: "10",
                                                        viewBox: "0 0 10 10",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M2 5L4.5 7.5L8 3",
                                                            stroke: "#E8700D",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 15,
                                                        color: '#aaa'
                                                    },
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, item, true, {
                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                            lineNumber: 97,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reveal-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$AICard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    screens: AI_SCREENS,
                                    autoRotate: true,
                                    showTabs: false,
                                    showStatusBar: true,
                                    showLabel: false,
                                    scrollTriggerConfig: {
                                        start: 'top 85%',
                                        end: 'top 15%',
                                        scrub: 1.5,
                                        rotateX: {
                                            start: -12,
                                            end: 4
                                        },
                                        rotateY: {
                                            start: 10,
                                            end: 0
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                lineNumber: 116,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 48
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "reveal",
                            style: {
                                fontSize: 'clamp(26px, 3.5vw, 40px)',
                                fontWeight: 800,
                                color: '#fff'
                            },
                            children: [
                                "Built for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#E8700D'
                                    },
                                    children: "every business type."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                    lineNumber: 137,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            maxWidth: 900,
                            margin: '0 auto',
                            gap: 20
                        },
                        children: pillars.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `reveal delay-${i + 1}`,
                                style: {
                                    background: '#111',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: 16,
                                    padding: '28px 24px',
                                    transition: 'border-color 0.3s'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.borderColor = 'rgba(232,112,13,0.3)',
                                onMouseLeave: (e)=>e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 48,
                                            height: 48,
                                            borderRadius: 12,
                                            background: 'rgba(232,112,13,0.12)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: 16
                                        },
                                        children: p.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                        lineNumber: 156,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: 20,
                                            fontWeight: 700,
                                            color: '#fff',
                                            marginBottom: 16,
                                            fontFamily: 'Sora'
                                        },
                                        children: p.label
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                        lineNumber: 162,
                                        columnNumber: 29
                                    }, this),
                                    p.points.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 10,
                                                alignItems: 'center',
                                                marginBottom: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: '50%',
                                                        background: '#E8700D',
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 14,
                                                        color: '#888'
                                                    },
                                                    children: pt
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, pt, true, {
                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                            lineNumber: 164,
                                            columnNumber: 33
                                        }, this))
                                ]
                            }, p.label, true, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                                lineNumber: 148,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @media (max-width: 768px) {
                    .platform-grid { grid-template-columns: 1fr !important; gap: 40px !important; margin-bottom: 50px !important; }
                }
                @media (max-width: 640px) {
                    .section-platform { padding: 60px 5% !important; }
                    .platform-grid { gap: 28px !important; margin-bottom: 40px !important; }
                }
            `
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pricing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const plans = [
    {
        name: 'Starter',
        monthly: 'LKR 5,900',
        yearly: 'LKR 59,000',
        desc: 'Perfect for small businesses getting started with smarter inventory management.',
        cta: 'Start Free Trial',
        popular: false,
        features: [
            'Inventory Management',
            'Product & Category Management',
            'Supplier Management',
            'Purchase Orders',
            'Sales Tracking',
            'Finance Dashboard & Cash Flow Overview',
            'Low Stock Alerts',
            'Inventory Reports',
            'PDF & Excel Export',
            'Up to 3 Users',
            'Email Support'
        ]
    },
    {
        name: 'Professional',
        monthly: 'LKR 11,900',
        yearly: 'LKR 119,000',
        desc: 'AI-powered inventory intelligence for growing distributors and SMEs.',
        cta: 'Start Free Trial',
        popular: true,
        features: [
            'Everything in Starter',
            'AI Inventory Advisor',
            'Demand Forecasting',
            'Reorder Recommendations',
            'Dead Stock Detection',
            'Fast Moving Product Analysis',
            'Inventory Health Score',
            'Supplier Performance Analytics',
            'Stockout Prediction',
            'AI Business Insights',
            'Up to 10 Users',
            'Priority Support'
        ]
    },
    {
        name: 'Enterprise',
        monthly: 'LKR 19,900',
        yearly: 'LKR 199,000',
        desc: 'Advanced AI procurement and forecasting for large inventory-driven businesses.',
        cta: 'Contact Sales',
        popular: false,
        features: [
            'Everything in Professional',
            'Advanced Demand Forecasting',
            'Seasonal Demand Prediction',
            'AI Purchase Order Generation',
            'AI Supplier Email Drafting',
            'Purchase Approval Workflow',
            'Multi-Branch Management',
            'Unlimited Users',
            'Advanced Analytics Dashboard',
            'Priority Support'
        ]
    }
];
function Pricing() {
    const [yearly, setYearly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "pricing",
        className: "section-pricing",
        style: {
            padding: '100px 5%',
            background: 'linear-gradient(180deg, #0A0A0A 0%, #0d0d0d 100%)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1100,
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        marginBottom: 52
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "reveal",
                            style: {
                                display: 'inline-block',
                                background: 'rgba(232,112,13,0.1)',
                                border: '1px solid rgba(232,112,13,0.2)',
                                borderRadius: 50,
                                padding: '5px 14px',
                                marginBottom: 16,
                                fontSize: 12,
                                fontWeight: 600,
                                color: '#E8700D',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase'
                            },
                            children: "Pricing"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "reveal delay-1",
                            style: {
                                fontSize: 'clamp(28px, 4vw, 48px)',
                                fontWeight: 800,
                                color: '#fff',
                                marginBottom: 16
                            },
                            children: "Pricing built for growing inventory-driven businesses"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "reveal delay-2",
                            style: {
                                fontSize: 17,
                                color: '#666',
                                marginBottom: 28,
                                maxWidth: 700,
                                margin: '0 auto',
                                lineHeight: 1.6
                            },
                            children: "Choose a plan that fits your business today and scale as your operations grow. Every plan includes secure cloud hosting, continuous updates and intelligent inventory management."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "reveal delay-3",
                            style: {
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 14,
                                background: '#111',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: 50,
                                padding: '6px 10px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 14,
                                        color: yearly ? '#555' : '#fff',
                                        fontWeight: yearly ? 400 : 600,
                                        paddingLeft: 6
                                    },
                                    children: "Monthly"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setYearly(!yearly),
                                    style: {
                                        width: 44,
                                        height: 24,
                                        borderRadius: 12,
                                        background: yearly ? '#E8700D' : '#333',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 3,
                                            left: yearly ? 23 : 3,
                                            width: 18,
                                            height: 18,
                                            borderRadius: '50%',
                                            background: '#fff',
                                            transition: 'left 0.3s'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                        lineNumber: 111,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 14,
                                        color: yearly ? '#fff' : '#555',
                                        fontWeight: yearly ? 600 : 400
                                    },
                                    children: "Annual"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 11,
                                        fontWeight: 600,
                                        color: '#E8700D',
                                        background: 'rgba(232,112,13,0.12)',
                                        borderRadius: 50,
                                        padding: '2px 8px',
                                        marginRight: 4
                                    },
                                    children: "Save 17%"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pricing-grid",
                    style: {
                        display: 'grid',
                        gap: 20,
                        alignItems: 'stretch'
                    },
                    children: plans.map((plan, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `reveal delay-${i + 1}`,
                            style: {
                                background: plan.popular ? 'linear-gradient(135deg, #1a1200, #111)' : '#111',
                                border: `1px solid ${plan.popular ? 'rgba(232,112,13,0.5)' : 'rgba(255,255,255,0.07)'}`,
                                borderRadius: 20,
                                padding: '32px 28px',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: plan.popular ? '0 0 80px rgba(232,112,13,0.15)' : 'none',
                                transition: 'transform 0.3s'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.transform = 'translateY(-4px)',
                            onMouseLeave: (e)=>e.currentTarget.style.transform = 'translateY(0)',
                            children: [
                                plan.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: 20,
                                        right: 20,
                                        background: '#E8700D',
                                        color: '#fff',
                                        fontSize: 11,
                                        fontWeight: 700,
                                        borderRadius: 50,
                                        padding: '3px 12px'
                                    },
                                    children: "⭐ Most Popular"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                    lineNumber: 146,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: '#fff',
                                        fontFamily: 'Sora',
                                        marginBottom: 8
                                    },
                                    children: plan.name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                    lineNumber: 153,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 34,
                                                fontWeight: 800,
                                                color: plan.popular ? '#E8700D' : '#fff',
                                                fontFamily: 'Sora'
                                            },
                                            children: yearly ? plan.yearly : plan.monthly
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                            lineNumber: 155,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 14,
                                                color: '#555',
                                                marginLeft: 4
                                            },
                                            children: [
                                                "/",
                                                yearly ? 'year' : 'mo'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                            lineNumber: 158,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                    lineNumber: 154,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 13,
                                        color: '#666',
                                        marginBottom: 24,
                                        lineHeight: 1.6
                                    },
                                    children: plan.desc
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                    lineNumber: 162,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: 10,
                                        background: plan.popular ? '#E8700D' : 'transparent',
                                        color: plan.popular ? '#fff' : '#aaa',
                                        border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.15)',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        marginBottom: 28,
                                        transition: 'all 0.2s'
                                    },
                                    onMouseEnter: (e)=>{
                                        if (!plan.popular) {
                                            e.currentTarget.style.borderColor = '#E8700D';
                                            e.currentTarget.style.color = '#E8700D';
                                        } else {
                                            e.currentTarget.style.background = '#C45D0A';
                                        }
                                    },
                                    onMouseLeave: (e)=>{
                                        if (!plan.popular) {
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                                            e.currentTarget.style.color = '#aaa';
                                        } else {
                                            e.currentTarget.style.background = '#E8700D';
                                        }
                                    },
                                    children: plan.cta
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                    lineNumber: 164,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderTop: '1px solid rgba(255,255,255,0.07)',
                                        paddingTop: 20
                                    },
                                    children: plan.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 10,
                                                alignItems: 'flex-start',
                                                marginBottom: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 16 16",
                                                    fill: "none",
                                                    style: {
                                                        flexShrink: 0,
                                                        marginTop: 2
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "8",
                                                            cy: "8",
                                                            r: "7",
                                                            stroke: "rgba(232,112,13,0.3)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M5 8L7 10L11 6",
                                                            stroke: "#E8700D",
                                                            strokeWidth: "1.3",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 14,
                                                        color: '#888'
                                                    },
                                                    children: f
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, f, true, {
                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                            lineNumber: 185,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                    lineNumber: 183,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, plan.name, true, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                            lineNumber: 134,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                    lineNumber: 126,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "reveal",
                    style: {
                        marginTop: 60,
                        padding: '28px 32px',
                        borderRadius: 16,
                        background: '#111',
                        border: '1px solid rgba(255,255,255,0.07)',
                        textAlign: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontSize: 18,
                                fontWeight: 700,
                                color: '#fff',
                                marginBottom: 16,
                                fontFamily: 'Sora'
                            },
                            children: "All Paid Plans Include"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                            lineNumber: 203,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '8px 24px',
                                maxWidth: 700,
                                margin: '0 auto'
                            },
                            children: [
                                'Secure cloud hosting',
                                'Automatic backups',
                                'Continuous software updates',
                                'SSL encryption',
                                'Mobile responsive dashboard',
                                'Inventory & supplier management',
                                'Free onboarding',
                                'Email support'
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 14,
                                        color: '#888',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "8",
                                                    cy: "8",
                                                    r: "7",
                                                    stroke: "rgba(232,112,13,0.3)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 8L7 10L11 6",
                                                    stroke: "#E8700D",
                                                    strokeWidth: "1.3",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                            lineNumber: 221,
                                            columnNumber: 33
                                        }, this),
                                        item
                                    ]
                                }, item, true, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                                    lineNumber: 220,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                            lineNumber: 206,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
                    lineNumber: 198,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
            lineNumber: 79,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const testimonials = [
    {
        name: 'Kasun Perera',
        role: 'Owner, Perera Hardware Distributors',
        location: 'Galle, Sri Lanka',
        text: 'Before Forgera, we had no idea which branch had what stock. Now I get a full picture every morning without calling anyone. The AI assistant alone has saved us hours every week.',
        avatar: 'KP'
    },
    {
        name: 'Nilufar Hashim',
        role: 'Operations Manager, SL Building Materials',
        location: 'Colombo, Sri Lanka',
        text: 'The credit management feature is a game changer for us. We deal with hundreds of wholesale clients and tracking who owes what was a nightmare. Forgera made it effortless.',
        avatar: 'NH'
    },
    {
        name: 'Roshan Fernando',
        role: 'Founder, RF Tiles & Sanitary',
        location: 'Matara, Sri Lanka',
        text: 'We scaled from one showroom to three branches within six months because Forgera gave us the visibility to do it confidently. The multi-location stock tracking is excellent.',
        avatar: 'RF'
    }
];
function Testimonials() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-testimonials",
        style: {
            padding: '100px 5%',
            background: '#0A0A0A'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 1100,
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        marginBottom: 60
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "reveal",
                            style: {
                                display: 'inline-block',
                                background: 'rgba(232,112,13,0.1)',
                                border: '1px solid rgba(232,112,13,0.2)',
                                borderRadius: 50,
                                padding: '5px 14px',
                                marginBottom: 16,
                                fontSize: 12,
                                fontWeight: 600,
                                color: '#E8700D',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase'
                            },
                            children: "Testimonials"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "reveal delay-1",
                            style: {
                                fontSize: 'clamp(28px, 4vw, 46px)',
                                fontWeight: 800,
                                color: '#fff'
                            },
                            children: [
                                "Trusted by businesses across ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#E8700D'
                                    },
                                    children: "Sri Lanka."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                                    lineNumber: 45,
                                    columnNumber: 54
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: 20
                    },
                    children: testimonials.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `reveal delay-${i + 1}`,
                            style: {
                                background: '#111',
                                border: '1px solid rgba(255,255,255,0.07)',
                                borderRadius: 18,
                                padding: '28px 24px',
                                transition: 'border-color 0.3s, transform 0.3s'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.borderColor = 'rgba(232,112,13,0.25)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 4,
                                        marginBottom: 16
                                    },
                                    children: [
                                        ...Array(5)
                                    ].map((_, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#E8700D',
                                                fontSize: 14
                                            },
                                            children: "★"
                                        }, j, false, {
                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                                            lineNumber: 64,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                                    lineNumber: 62,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 15,
                                        color: '#aaa',
                                        lineHeight: 1.75,
                                        marginBottom: 24,
                                        fontStyle: 'italic'
                                    },
                                    children: [
                                        '"',
                                        t.text,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                                    lineNumber: 67,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 42,
                                                height: 42,
                                                borderRadius: '50%',
                                                background: 'rgba(232,112,13,0.15)',
                                                border: '1px solid rgba(232,112,13,0.3)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: '#E8700D'
                                            },
                                            children: t.avatar
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                                            lineNumber: 71,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: '#fff'
                                                    },
                                                    children: t.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: '#555',
                                                        marginTop: 2
                                                    },
                                                    children: t.role
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 11,
                                                        color: '#444',
                                                        marginTop: 1
                                                    },
                                                    children: t.location
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                                            lineNumber: 77,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, t.name, true, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                            lineNumber: 53,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const faqs = [
    {
        q: 'What is Forgera?',
        a: 'Forgera is an AI-powered business operations platform for retail, wholesale, and distribution companies. It centralizes inventory, sales, purchasing, customer credit, and supply chain operations into one intelligent system.'
    },
    {
        q: 'Is Forgera suitable for small businesses?',
        a: 'Yes. Forgera is specifically designed for SMEs and growing multi-location businesses in Sri Lanka. The Starter plan works for single-location businesses, while Growth and Enterprise plans support expansion.'
    },
    {
        q: 'How does the AI assistant work?',
        a: 'You can ask the AI assistant questions about your business in plain language — such as "which products are running low?" or "show me this week\'s sales by branch." It accesses your live operational data to give instant, accurate answers.'
    },
    {
        q: 'Does Forgera support multiple locations?',
        a: 'Yes. Forgera is built around multi-location and warehouse-to-branch workflows. The Growth plan supports up to 5 locations, and the Enterprise plan supports unlimited locations.'
    },
    {
        q: 'What languages does the platform support?',
        a: 'Forgera\'s interface is in English, and the AI assistant understands both English and Sinhala queries to support Sri Lankan business owners and staff.'
    },
    {
        q: 'Is there a free trial available?',
        a: 'Yes. You can start with a 14-day free trial on any plan with no credit card required. Contact us to get started.'
    }
];
function FAQ() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "section-faq",
        style: {
            padding: '100px 5%',
            background: '#0d0d0d'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 780,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 60
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reveal",
                                style: {
                                    display: 'inline-block',
                                    background: 'rgba(232,112,13,0.1)',
                                    border: '1px solid rgba(232,112,13,0.2)',
                                    borderRadius: 50,
                                    padding: '5px 14px',
                                    marginBottom: 16,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: '#E8700D',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase'
                                },
                                children: "FAQ"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "reveal delay-1",
                                style: {
                                    fontSize: 'clamp(28px, 4vw, 44px)',
                                    fontWeight: 800,
                                    color: '#fff'
                                },
                                children: "Common questions."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10
                        },
                        children: faqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `reveal delay-${i % 3 + 1}`,
                                style: {
                                    background: '#111',
                                    border: `1px solid ${open === i ? 'rgba(232,112,13,0.3)' : 'rgba(255,255,255,0.07)'}`,
                                    borderRadius: 14,
                                    overflow: 'hidden',
                                    transition: 'border-color 0.3s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpen(open === i ? null : i),
                                        style: {
                                            width: '100%',
                                            padding: '20px 24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            background: 'none',
                                            color: '#fff',
                                            fontSize: 16,
                                            fontWeight: 600,
                                            textAlign: 'left',
                                            fontFamily: 'Sora',
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            faq.q,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 28,
                                                    height: 28,
                                                    borderRadius: '50%',
                                                    background: open === i ? '#E8700D' : 'rgba(255,255,255,0.07)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    transition: 'background 0.3s, transform 0.3s',
                                                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "12",
                                                    height: "12",
                                                    viewBox: "0 0 12 12",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 2V10M2 6H10",
                                                        stroke: "white",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                                                lineNumber: 72,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                                        lineNumber: 61,
                                        columnNumber: 29
                                    }, this),
                                    open === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '0 24px 20px',
                                            fontSize: 15,
                                            color: '#777',
                                            lineHeight: 1.75,
                                            animation: 'fadeIn 0.2s ease'
                                        },
                                        children: faq.a
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                                        lineNumber: 85,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, faq.q, true, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                                lineNumber: 56,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes fadeIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }`
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function CTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-cta",
        style: {
            padding: '100px 5%',
            background: '#0A0A0A'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 900,
                margin: '0 auto',
                background: 'linear-gradient(135deg, #1a0e00 0%, #111 50%, #0e0a00 100%)',
                border: '1px solid rgba(232,112,13,0.25)',
                borderRadius: 28,
                padding: 'clamp(48px, 6vw, 80px) clamp(32px, 5vw, 80px)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 100px rgba(232,112,13,0.07)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        height: 300,
                        borderRadius: '50%',
                        background: 'radial-gradient(ellipse, rgba(232,112,13,0.08) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "reveal-scale",
                    style: {
                        display: 'inline-block',
                        background: 'rgba(232,112,13,0.1)',
                        border: '1px solid rgba(232,112,13,0.25)',
                        borderRadius: 50,
                        padding: '5px 16px',
                        marginBottom: 20,
                        fontSize: 12,
                        fontWeight: 600,
                        color: '#E8700D',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase'
                    },
                    children: "Ready to get started?"
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "reveal delay-1",
                    style: {
                        fontSize: 'clamp(28px, 4.5vw, 52px)',
                        fontWeight: 800,
                        color: '#fff',
                        marginBottom: 20,
                        position: 'relative'
                    },
                    children: [
                        "Take control of your",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx",
                            lineNumber: 38,
                            columnNumber: 31
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: '#E8700D'
                            },
                            children: "business operations."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "reveal delay-2",
                    style: {
                        fontSize: 18,
                        color: '#666',
                        maxWidth: 520,
                        margin: '0 auto 36px',
                        lineHeight: 1.7,
                        position: 'relative'
                    },
                    children: "Join businesses across Sri Lanka who are using Forgera to run smarter, move faster, and grow with confidence."
                }, void 0, false, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "reveal delay-3",
                    style: {
                        display: 'flex',
                        gap: 14,
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                background: '#E8700D',
                                color: '#fff',
                                borderRadius: 10,
                                padding: '14px 36px',
                                fontSize: 16,
                                fontWeight: 600,
                                transition: 'all 0.25s',
                                boxShadow: '0 0 30px rgba(232,112,13,0.3)'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = '#C45D0A';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 40px rgba(232,112,13,0.5)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = '#E8700D';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 0 30px rgba(232,112,13,0.3)';
                            },
                            children: "Start Free Trial"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.open('https://www.linkedin.com/in/amar-bazlin/', '_blank', 'noopener,noreferrer'),
                            style: {
                                background: 'transparent',
                                color: '#aaa',
                                border: '1px solid rgba(255,255,255,0.15)',
                                borderRadius: 10,
                                padding: '14px 36px',
                                fontSize: 16,
                                fontWeight: 500,
                                transition: 'all 0.25s'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.borderColor = '#E8700D';
                                e.currentTarget.style.color = '#E8700D';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                                e.currentTarget.style.color = '#aaa';
                            },
                            children: "Talk to Founder"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$public$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Documents/Forgera/forgera-web/public/logo.png.mjs { IMAGE => "[project]/Documents/Forgera/forgera-web/public/logo.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
const navLinks = {
    Product: [
        'Features',
        'How it Works',
        'Platform',
        'Pricing'
    ],
    Company: [
        'About',
        'Blog',
        'Careers',
        'Contact'
    ],
    Legal: [
        'Privacy Policy',
        'Terms of Service',
        'Cookie Policy'
    ]
};
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: '#080808',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '64px 5% 32px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr repeat(3, auto)',
                            gap: 48,
                            marginBottom: 56
                        },
                        className: "footer-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 10,
                                            marginBottom: 16
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$public$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$public$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                alt: "Forgera",
                                                style: {
                                                    height: 32,
                                                    width: 32,
                                                    borderRadius: 7
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'Sora',
                                                    fontWeight: 700,
                                                    fontSize: 18,
                                                    color: '#fff'
                                                },
                                                children: "Forgera"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                                lineNumber: 29,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                        lineNumber: 27,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 14,
                                            color: '#555',
                                            lineHeight: 1.8,
                                            maxWidth: 260,
                                            marginBottom: 20
                                        },
                                        children: "AI-powered business operations platform for retail, wholesale, and distribution companies."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                        lineNumber: 31,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            color: '#444'
                                        },
                                        children: "Colombo, Sri Lanka"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/in/amar-bazlin/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        style: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 6,
                                            marginTop: 16,
                                            color: '#E8700D',
                                            fontSize: 13,
                                            fontWeight: 500,
                                            transition: 'opacity 0.2s'
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.opacity = '0.75',
                                        onMouseLeave: (e)=>e.currentTarget.style.opacity = '1',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "4",
                                                        cy: "4",
                                                        r: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 29
                                            }, this),
                                            "Amar Bazlin — Founder"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this),
                            Object.entries(navLinks).map(([col, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12,
                                                fontWeight: 700,
                                                color: '#555',
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                marginBottom: 16
                                            },
                                            children: col
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                            lineNumber: 59,
                                            columnNumber: 29
                                        }, this),
                                        items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: 10
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    style: {
                                                        fontSize: 14,
                                                        color: '#555',
                                                        transition: 'color 0.2s'
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.color = '#E8700D',
                                                    onMouseLeave: (e)=>e.currentTarget.style.color = '#555',
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 37
                                                }, this)
                                            }, item, false, {
                                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                                lineNumber: 61,
                                                columnNumber: 33
                                            }, this))
                                    ]
                                }, col, true, {
                                    fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: '1px solid rgba(255,255,255,0.06)',
                            paddingTop: 28,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 13,
                                    color: '#444'
                                },
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Forgera. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 13,
                                    color: '#333'
                                },
                                children: "Built in Sri Lanka 🇱🇰"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @media (max-width: 768px) {
                    .footer-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 480px) {
                    .footer-grid { grid-template-columns: 1fr !important; }
                }
            `
            }, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Forgera/forgera-web/app/hooks/useScrollAnimation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useScrollAnimation() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.12
        });
        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        elements.forEach((el)=>observer.observe(el));
        return ()=>observer.disconnect();
    }, []);
    return ref;
}
}),
"[project]/Documents/Forgera/forgera-web/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/Hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Features$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/Features.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$HowItWorks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/HowItWorks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Platform$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/Platform.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Pricing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/Pricing.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Testimonials$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/Testimonials.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$FAQ$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/FAQ.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$CTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/CTA.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Forgera/forgera-web/app/hooks/useScrollAnimation.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const dynamic = 'force-dynamic';
function Home() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    // Re-run observer after a short delay to catch dynamically revealed elements
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.12
            });
            document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el)=>{
                observer.observe(el);
            });
            return ()=>observer.disconnect();
        }, 200);
        return ()=>clearTimeout(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Features$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$HowItWorks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Platform$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Pricing$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Testimonials$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$FAQ$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$CTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Forgera$2f$forgera$2d$web$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Forgera/forgera-web/app/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Forgera/forgera-web/app/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_Forgera_forgera-web_0gtu91k._.js.map