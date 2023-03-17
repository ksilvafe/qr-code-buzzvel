"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/users.ts":
/*!********************************!*\
  !*** ./src/pages/api/users.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\nconst getUsers = async ()=>{\n    const databaseFile = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"public/db.json\");\n    const users = JSON.parse(await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(databaseFile, \"utf8\"));\n    return {\n        databaseFile,\n        users\n    };\n};\nconst routes = {\n    \"GET\": async (req, res)=>{\n        const { id  } = req.query;\n        const { users  } = await getUsers();\n        const currentUser = users.find((user)=>user.id === id);\n        return currentUser ? res.status(200).json(currentUser) : res.status(404).json({\n            message: \"Usu\\xe1rio n\\xe3o encontrado\"\n        });\n    // }\n    // res.status(404).json({message: 'preencha o id'})\n    },\n    \"POST\": async (req, res)=>{\n        try {\n            const { name , githubURL , linkedinURL  } = JSON.parse(req.body);\n            const { databaseFile , users  } = await getUsers();\n            var id = (0,crypto__WEBPACK_IMPORTED_MODULE_2__.randomUUID)();\n            const user = {\n                id,\n                name,\n                githubURL,\n                linkedinURL\n            };\n            users.push(user);\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(databaseFile, JSON.stringify(users));\n            return res.status(201).setHeader(\"id\", id).json({\n                ok: \"ok\"\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }\n};\nasync function handler(req, res) {\n    const { method  } = req;\n    if (method) {\n        return await routes[method](req, res);\n    }\n    return res.status(404).json({\n        message: \"Metodo n\\xe3o encontrado\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFFckQ7QUFDbUI7QUFDUjtBQWVuQyxNQUFNSSxXQUFXLFVBQVc7SUFDMUIsTUFBTUMsZUFBZUwsZ0RBQVMsQ0FBQ08sUUFBUUMsR0FBRyxJQUFJO0lBQzlDLE1BQU1DLFFBQWdCQyxLQUFLQyxLQUFLLENBQUMsTUFBTVYsMkRBQVcsQ0FBQ0ksY0FBYztJQUVqRSxPQUFPO1FBQ0xBO1FBQ0FJO0lBQ0Y7QUFDRjtBQUVBLE1BQU1JLFNBQWM7SUFDbEIsT0FBTyxPQUFNQyxLQUFvQkMsTUFBeUI7UUFDeEQsTUFBTSxFQUFDQyxHQUFFLEVBQUMsR0FBR0YsSUFBSUcsS0FBSztRQUN0QixNQUFNLEVBQUNSLE1BQUssRUFBQyxHQUFHLE1BQU1MO1FBQ3RCLE1BQU1jLGNBQWdDVCxNQUFNVSxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtKLEVBQUUsS0FBS0E7UUFDckUsT0FBT0UsY0FBY0gsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0osZUFBZUgsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDQyxTQUFTO1FBQXdCLEVBQUU7SUFDbEgsSUFBSTtJQUNKLG1EQUFtRDtJQUNyRDtJQUNBLFFBQVEsT0FBTVQsS0FBb0JDLE1BQXlCO1FBQ3pELElBQUk7WUFDSixNQUFNLEVBQUNTLEtBQUksRUFBRUMsVUFBUyxFQUFFQyxZQUFXLEVBQUUsR0FBR2hCLEtBQUtDLEtBQUssQ0FBQ0csSUFBSWEsSUFBSTtZQUMzRCxNQUFNLEVBQUV0QixhQUFZLEVBQUVJLE1BQUssRUFBRSxHQUFHLE1BQU1MO1lBRXRDLElBQUlZLEtBQUtiLGtEQUFVQTtZQUVuQixNQUFNaUIsT0FBYTtnQkFDakJKO2dCQUNBUTtnQkFDQUM7Z0JBQ0FDO1lBQ0Y7WUFDQWpCLE1BQU1tQixJQUFJLENBQUNSO1lBRVgsTUFBTWxCLHNEQUFTQSxDQUFDRyxjQUFjSyxLQUFLbUIsU0FBUyxDQUFDcEI7WUFDN0MsT0FBT00sSUFBSU0sTUFBTSxDQUFDLEtBQUtTLFNBQVMsQ0FBQyxNQUFNZCxJQUFJTSxJQUFJLENBQUM7Z0JBQUNTLElBQUk7WUFBSTtRQUN6RCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBRUY7QUFDRjtBQUVlLGVBQWVHLFFBQzVCckIsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzFCO0lBQ0EsTUFBTSxFQUFDcUIsT0FBTSxFQUFDLEdBQUd0QjtJQUVqQixJQUFHc0IsUUFBUTtRQUNULE9BQU8sTUFBTXZCLE1BQU0sQ0FBQ3VCLE9BQU8sQ0FBQ3RCLEtBQUtDO0lBQ25DLENBQUM7SUFFRCxPQUFPQSxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUNDLFNBQVM7SUFBdUI7QUFFL0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3FyLWNvZGUvLi9zcmMvcGFnZXMvYXBpL3VzZXJzLnRzPzE0YzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcywgeyB3cml0ZUZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nXG50eXBlIERhdGEgPSB7XG4gIG5hbWU/OiBzdHJpbmdcbiAgbWVzc2FnZT86IHN0cmluZ1xufVxuaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9kYi5qc29uJ1xuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcblxudHlwZSBVc2VyID0ge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBnaXRodWJVUkw6IHN0cmluZ1xuICBsaW5rZWRpblVSTDogc3RyaW5nXG59XG5cbmNvbnN0IGdldFVzZXJzID0gYXN5bmMoKSA9PiB7XG4gIGNvbnN0IGRhdGFiYXNlRmlsZSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljL2RiLmpzb24nKTtcbiAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IEpTT04ucGFyc2UoYXdhaXQgZnMucmVhZEZpbGUoZGF0YWJhc2VGaWxlLCAndXRmOCcpKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlRmlsZSxcbiAgICB1c2VycyxcbiAgfVxufVxuXG5jb25zdCByb3V0ZXM6IGFueSA9IHtcbiAgJ0dFVCc6IGFzeW5jKHJlcTpOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCB7aWR9ID0gcmVxLnF1ZXJ5O1xuICAgIGNvbnN0IHt1c2Vyc30gPSBhd2FpdCBnZXRVc2VycygpO1xuICAgIGNvbnN0IGN1cnJlbnRVc2VyOiBVc2VyIHwgdW5kZWZpbmVkID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IGlkKTtcbiAgICByZXR1cm4gY3VycmVudFVzZXIgPyByZXMuc3RhdHVzKDIwMCkuanNvbihjdXJyZW50VXNlcikgOiByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogJ1VzdcOhcmlvIG7Do28gZW5jb250cmFkbyd9KVxuICAgIC8vIH1cbiAgICAvLyByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogJ3ByZWVuY2hhIG8gaWQnfSlcbiAgfSxcbiAgJ1BPU1QnOiBhc3luYyhyZXE6TmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICBjb25zdCB7bmFtZSwgZ2l0aHViVVJMLCBsaW5rZWRpblVSTCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4gICAgY29uc3QgeyBkYXRhYmFzZUZpbGUsIHVzZXJzIH0gPSBhd2FpdCBnZXRVc2VycygpO1xuICAgIFxuICAgIHZhciBpZCA9IHJhbmRvbVVVSUQoKVxuXG4gICAgY29uc3QgdXNlcjogVXNlciA9IHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGdpdGh1YlVSTCxcbiAgICAgIGxpbmtlZGluVVJMXG4gICAgfVxuICAgIHVzZXJzLnB1c2godXNlcikgIFxuICAgIFxuICAgIGF3YWl0IHdyaXRlRmlsZShkYXRhYmFzZUZpbGUsIEpTT04uc3RyaW5naWZ5KHVzZXJzKSlcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNldEhlYWRlcignaWQnLCBpZCkuanNvbih7b2s6ICdvayd9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxuKSB7XG4gIGNvbnN0IHttZXRob2R9ID0gcmVxO1xuXG4gIGlmKG1ldGhvZCkge1xuICAgIHJldHVybiBhd2FpdCByb3V0ZXNbbWV0aG9kXShyZXEsIHJlcyk7XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lc3NhZ2U6ICdNZXRvZG8gbsOjbyBlbmNvbnRyYWRvJ30pXG4gIFxufSJdLCJuYW1lcyI6WyJwYXRoIiwiZnMiLCJ3cml0ZUZpbGUiLCJyYW5kb21VVUlEIiwiZ2V0VXNlcnMiLCJkYXRhYmFzZUZpbGUiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsInVzZXJzIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGUiLCJyb3V0ZXMiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibmFtZSIsImdpdGh1YlVSTCIsImxpbmtlZGluVVJMIiwiYm9keSIsInB1c2giLCJzdHJpbmdpZnkiLCJzZXRIZWFkZXIiLCJvayIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZXIiLCJtZXRob2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/users.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/users.ts"));
module.exports = __webpack_exports__;

})();