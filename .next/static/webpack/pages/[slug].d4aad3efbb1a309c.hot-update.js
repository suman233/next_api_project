"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./pages/[slug].tsx":
/*!**************************!*\
  !*** ./pages/[slug].tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_axiosinstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/axiosinstance */ \"./api/axiosinstance/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/CardActions/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardMedia */ \"./node_modules/@mui/material/CardMedia/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _barrel_optimize_names_Container_Skeleton_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Skeleton!=!@mui/material */ \"__barrel_optimize__?names=Container,Skeleton!=!./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst productdetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug } = router.query;\n    const { data, isLoading } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)({\n        queryKey: [\n            \"singleproduct\",\n            {\n                slug\n            }\n        ],\n        queryFn: async ()=>{\n            const data = await _api_axiosinstance__WEBPACK_IMPORTED_MODULE_1__.axiosInstance.get(// endpoints.fetchedProducts.prod\n            \"https://fakestoreapi.com/products/\".concat(slug));\n            console.log(data.data);\n            return data;\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Skeleton_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                sx: {\n                    color: \"black\",\n                    fontSize: \"30px\",\n                    fontWeight: \"bold\",\n                    mb: 3\n                },\n                children: \"Product Details\"\n            }, void 0, false, {\n                fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    sx: {\n                        maxWidth: 345\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Skeleton_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                            variant: \"rectangular\",\n                            sx: {\n                                backgroundColor: \"lightgray\",\n                                borderRadius: \"10%\"\n                            },\n                            height: 240\n                        }, void 0, false, {\n                            fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                            lineNumber: 38,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Skeleton_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                                        variant: \"text\",\n                                        sx: {\n                                            backgroundColor: \"lightgray\",\n                                            fontSize: \"3rem\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Skeleton_mui_material__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                                    variant: \"text\",\n                                    sx: {\n                                        backgroundColor: \"lightgray\",\n                                        borderRadius: \"10%\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                            lineNumber: 40,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                    lineNumber: 36,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    maxWidth: 345\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        sx: {\n                            height: 240\n                        },\n                        image: data === null || data === void 0 ? void 0 : data.data.image,\n                        title: data === null || data === void 0 ? void 0 : data.data.title\n                    }, void 0, false, {\n                        fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                        lineNumber: 51,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                gutterBottom: true,\n                                variant: \"h3\",\n                                component: \"div\",\n                                sx: {\n                                    color: \"black\"\n                                },\n                                children: data === null || data === void 0 ? void 0 : data.data.title\n                            }, void 0, false, {\n                                fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                                lineNumber: 57,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                variant: \"body2\",\n                                color: \"text.secondary\",\n                                children: data === null || data === void 0 ? void 0 : data.data.description\n                            }, void 0, false, {\n                                fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                                lineNumber: 60,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                sx: {\n                                    color: \"black\"\n                                },\n                                children: [\n                                    \"Price: $\",\n                                    data === null || data === void 0 ? void 0 : data.data.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                                lineNumber: 63,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                        lineNumber: 56,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            variant: \"contained\",\n                            size: \"small\",\n                            children: \"ADD TO CART\"\n                        }, void 0, false, {\n                            fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                            lineNumber: 68,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                        lineNumber: 67,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n                lineNumber: 50,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/webskitters/Desktop/webskitter/next_project_intro/pages/[slug].tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(productdetails, \"4vLZAUltL5LTS+ZWWkaNQxEk5g8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (productdetails);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUVaO0FBQ2Q7QUFDYTtBQUNBO0FBQ2M7QUFDQTtBQUNKO0FBQ047QUFDUTtBQUNDO0FBRW5ELE1BQU1ZLGlCQUFpQjs7SUFDbkIsTUFBTUMsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRWEsSUFBSSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFN0IsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRSxHQUFHZCxxREFBUUEsQ0FBQztRQUNqQ2UsVUFBVTtZQUFDO1lBQWlCO2dCQUFFSjtZQUFLO1NBQUU7UUFDckNLLFNBQVM7WUFDTCxNQUFNSCxPQUFPLE1BQU1oQiw2REFBYUEsQ0FBQ29CLEdBQUcsQ0FDaEMsaUNBQWlDO1lBQ2hDLHFDQUF5QyxPQUFMTjtZQUV6Q08sUUFBUUMsR0FBRyxDQUFDTixLQUFLQSxJQUFJO1lBQ3JCLE9BQU9BO1FBQ1g7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTiw2RkFBU0E7OzBCQUNOLDhEQUFDRCxnRUFBVUE7Z0JBQUNjLElBQUk7b0JBQUVDLE9BQU87b0JBQVNDLFVBQVU7b0JBQVFDLFlBQVk7b0JBQVFDLElBQUk7Z0JBQUU7MEJBQUc7Ozs7OztZQUU3RVYsMEJBQ0k7MEJBQ0ksNEVBQUNiLDBEQUFJQTtvQkFBQ21CLElBQUk7d0JBQUVLLFVBQVU7b0JBQUk7O3NDQUV0Qiw4REFBQ2pCLDRGQUFRQTs0QkFBQ2tCLFNBQVE7NEJBQWNOLElBQUk7Z0NBQUVPLGlCQUFpQjtnQ0FBYUMsY0FBYzs0QkFBTTs0QkFBR0MsUUFBUTs7Ozs7O3NDQUVuRyw4REFBQ0M7OzhDQUNHLDhEQUFDQTs4Q0FDRyw0RUFBQ3RCLDRGQUFRQTt3Q0FBQ2tCLFNBQVE7d0NBQU9OLElBQUk7NENBQUVPLGlCQUFpQjs0Q0FBYUwsVUFBUzt3Q0FBTzs7Ozs7Ozs7Ozs7OENBRWpGLDhEQUFDZCw0RkFBUUE7b0NBQUNrQixTQUFRO29DQUFPTixJQUFJO3dDQUFFTyxpQkFBaUI7d0NBQWFDLGNBQWM7b0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FNN0YsOERBQUMzQiwwREFBSUE7Z0JBQUNtQixJQUFJO29CQUFFSyxVQUFVO2dCQUFJOztrQ0FDdEIsOERBQUNyQiwrREFBU0E7d0JBQ05nQixJQUFJOzRCQUFFUyxRQUFRO3dCQUFJO3dCQUNsQkUsS0FBSyxFQUFFbEIsaUJBQUFBLDJCQUFBQSxLQUFNQSxJQUFJLENBQUNrQixLQUFLO3dCQUN2QkMsS0FBSyxFQUFFbkIsaUJBQUFBLDJCQUFBQSxLQUFNQSxJQUFJLENBQUNtQixLQUFLOzs7Ozs7a0NBRTNCLDhEQUFDN0IsaUVBQVdBOzswQ0FDUiw4REFBQ0csZ0VBQVVBO2dDQUFDMkIsWUFBWTtnQ0FBQ1AsU0FBUTtnQ0FBS1EsV0FBVTtnQ0FBTWQsSUFBSTtvQ0FBRUMsT0FBTztnQ0FBUTswQ0FDdEVSLGlCQUFBQSwyQkFBQUEsS0FBTUEsSUFBSSxDQUFDbUIsS0FBSzs7Ozs7OzBDQUVyQiw4REFBQzFCLGdFQUFVQTtnQ0FBQ29CLFNBQVE7Z0NBQVFMLE9BQU07MENBQzdCUixpQkFBQUEsMkJBQUFBLEtBQU1BLElBQUksQ0FBQ3NCLFdBQVc7Ozs7OzswQ0FFM0IsOERBQUM3QixnRUFBVUE7Z0NBQUNjLElBQUk7b0NBQUVDLE9BQU87Z0NBQVE7O29DQUFHO29DQUN2QlIsaUJBQUFBLDJCQUFBQSxLQUFNQSxJQUFJLENBQUN1QixLQUFLOzs7Ozs7Ozs7Ozs7O2tDQUdqQyw4REFBQ2xDLGtFQUFXQTtrQ0FDUiw0RUFBQ0csNkRBQU1BOzRCQUFDcUIsU0FBUTs0QkFBWVcsTUFBSztzQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckU7R0E3RE01Qjs7UUFDYVgsa0RBQVNBO1FBR0lFLGlEQUFRQTs7O0FBMkR4QywrREFBZVMsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bc2x1Z10udHN4P2MyMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXhpb3NJbnN0YW5jZSB9IGZyb20gJ0AvYXBpL2F4aW9zaW5zdGFuY2UnXG5pbXBvcnQgeyBSb290IH0gZnJvbSAnQC90eXBlc2NyaXB0L2ludGVyZmFjZS9wcm9kdWN0cy5pbnRlcmZhY2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRNZWRpYSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDb250YWluZXIsIFNrZWxldG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcblxuY29uc3QgcHJvZHVjdGRldGFpbHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeVxuXG4gICAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KHtcbiAgICAgICAgcXVlcnlLZXk6IFsnc2luZ2xlcHJvZHVjdCcsIHsgc2x1ZyB9XSxcbiAgICAgICAgcXVlcnlGbjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0PFJvb3Q+KFxuICAgICAgICAgICAgICAgIC8vIGVuZHBvaW50cy5mZXRjaGVkUHJvZHVjdHMucHJvZFxuICAgICAgICAgICAgICAgIGBodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvJHtzbHVnfWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogJ2JsYWNrJywgZm9udFNpemU6ICczMHB4JywgZm9udFdlaWdodDogJ2JvbGQnLCBtYjogMyB9fT5Qcm9kdWN0IERldGFpbHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgbWF4V2lkdGg6IDM0NSB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicmVjdGFuZ3VsYXJcIiBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknLCBib3JkZXJSYWRpdXM6ICcxMCUnIH19IGhlaWdodD17MjQwfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheScsIGZvbnRTaXplOiczcmVtJyB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIiBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknLCBib3JkZXJSYWRpdXM6ICcxMCUnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBtYXhXaWR0aDogMzQ1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGhlaWdodDogMjQwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2RhdGE/LmRhdGEuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2RhdGE/LmRhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDNcIiBjb21wb25lbnQ9XCJkaXZcIiBzeD17eyBjb2xvcjogJ2JsYWNrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE/LmRhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE/LmRhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGNvbG9yOiAnYmxhY2snIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmljZTogJHtkYXRhPy5kYXRhLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIHNpemU9XCJzbWFsbFwiPkFERCBUTyBDQVJUPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0ZGV0YWlscyJdLCJuYW1lcyI6WyJheGlvc0luc3RhbmNlIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VRdWVyeSIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQ2FyZE1lZGlhIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIkNvbnRhaW5lciIsIlNrZWxldG9uIiwicHJvZHVjdGRldGFpbHMiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJkYXRhIiwiaXNMb2FkaW5nIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInN4IiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYiIsIm1heFdpZHRoIiwidmFyaWFudCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImRpdiIsImltYWdlIiwidGl0bGUiLCJndXR0ZXJCb3R0b20iLCJjb21wb25lbnQiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[slug].tsx\n"));

/***/ })

});