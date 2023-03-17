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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\nconst getUsers = async ()=>{\n    const databaseFile = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"public/db.json\");\n    const users = JSON.parse(await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(databaseFile, \"utf8\"));\n    return {\n        databaseFile,\n        users\n    };\n};\nconst routes = {\n    \"GET\": async (req, res)=>{\n        const { id  } = req.query;\n        const { users  } = await getUsers();\n        const currentUser = users.find((user)=>user.id === id);\n        return currentUser ? res.status(200).json(currentUser) : res.status(404).json({\n            message: \"Usu\\xe1rio n\\xe3o encontrado\"\n        });\n    // }\n    // res.status(404).json({message: 'preencha o id'})\n    },\n    \"POST\": async (req, res)=>{\n        const { name , githubURL , linkedinURL  } = JSON.parse(req.body);\n        const { databaseFile , users  } = await getUsers();\n        var id = (0,crypto__WEBPACK_IMPORTED_MODULE_2__.randomUUID)();\n        const user = {\n            id,\n            name,\n            githubURL,\n            linkedinURL\n        };\n        users.push(user);\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(databaseFile, JSON.stringify(users));\n        return res.status(201).setHeader(\"id\", id).json({\n            ok: \"ok\"\n        });\n    }\n};\nasync function handler(req, res) {\n    const { method  } = req;\n    if (method) {\n        return await routes[method](req, res);\n    }\n    return res.status(404).json({\n        message: \"Metodo n\\xe3o encontrado\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFFckQ7QUFDbUI7QUFDUjtBQWVuQyxNQUFNSSxXQUFXLFVBQVc7SUFDMUIsTUFBTUMsZUFBZUwsZ0RBQVMsQ0FBQ08sUUFBUUMsR0FBRyxJQUFJO0lBQzlDLE1BQU1DLFFBQWdCQyxLQUFLQyxLQUFLLENBQUMsTUFBTVYsMkRBQVcsQ0FBQ0ksY0FBYztJQUVqRSxPQUFPO1FBQ0xBO1FBQ0FJO0lBQ0Y7QUFDRjtBQUVBLE1BQU1JLFNBQWM7SUFDbEIsT0FBTyxPQUFNQyxLQUFvQkMsTUFBeUI7UUFDeEQsTUFBTSxFQUFDQyxHQUFFLEVBQUMsR0FBR0YsSUFBSUcsS0FBSztRQUN0QixNQUFNLEVBQUNSLE1BQUssRUFBQyxHQUFHLE1BQU1MO1FBQ3RCLE1BQU1jLGNBQWdDVCxNQUFNVSxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtKLEVBQUUsS0FBS0E7UUFDckUsT0FBT0UsY0FBY0gsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0osZUFBZUgsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDQyxTQUFTO1FBQXdCLEVBQUU7SUFDbEgsSUFBSTtJQUNKLG1EQUFtRDtJQUNyRDtJQUNBLFFBQVEsT0FBTVQsS0FBb0JDLE1BQXlCO1FBQ3pELE1BQU0sRUFBQ1MsS0FBSSxFQUFFQyxVQUFTLEVBQUVDLFlBQVcsRUFBRSxHQUFHaEIsS0FBS0MsS0FBSyxDQUFDRyxJQUFJYSxJQUFJO1FBQzNELE1BQU0sRUFBRXRCLGFBQVksRUFBRUksTUFBSyxFQUFFLEdBQUcsTUFBTUw7UUFFdEMsSUFBSVksS0FBS2Isa0RBQVVBO1FBRW5CLE1BQU1pQixPQUFhO1lBQ2pCSjtZQUNBUTtZQUNBQztZQUNBQztRQUNGO1FBQ0FqQixNQUFNbUIsSUFBSSxDQUFDUjtRQUVYLE1BQU1sQixzREFBU0EsQ0FBQ0csY0FBY0ssS0FBS21CLFNBQVMsQ0FBQ3BCO1FBQzdDLE9BQU9NLElBQUlNLE1BQU0sQ0FBQyxLQUFLUyxTQUFTLENBQUMsTUFBTWQsSUFBSU0sSUFBSSxDQUFDO1lBQUNTLElBQUk7UUFBSTtJQUMzRDtBQUNGO0FBRWUsZUFBZUMsUUFDNUJsQixHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxNQUFNLEVBQUNrQixPQUFNLEVBQUMsR0FBR25CO0lBRWpCLElBQUdtQixRQUFRO1FBQ1QsT0FBTyxNQUFNcEIsTUFBTSxDQUFDb0IsT0FBTyxDQUFDbkIsS0FBS0M7SUFDbkMsQ0FBQztJQUVELE9BQU9BLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0MsU0FBUztJQUF1QjtBQUUvRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXItY29kZS8uL3NyYy9wYWdlcy9hcGkvdXNlcnMudHM/MTRjMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzLCB7IHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gJ2NyeXB0bydcbnR5cGUgRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZ1xuICBtZXNzYWdlPzogc3RyaW5nXG59XG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vcHVibGljL2RiLmpzb24nXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuXG50eXBlIFVzZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGdpdGh1YlVSTDogc3RyaW5nXG4gIGxpbmtlZGluVVJMOiBzdHJpbmdcbn1cblxuY29uc3QgZ2V0VXNlcnMgPSBhc3luYygpID0+IHtcbiAgY29uc3QgZGF0YWJhc2VGaWxlID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMvZGIuanNvbicpO1xuICBjb25zdCB1c2VyczogVXNlcltdID0gSlNPTi5wYXJzZShhd2FpdCBmcy5yZWFkRmlsZShkYXRhYmFzZUZpbGUsICd1dGY4JykpO1xuXG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2VGaWxlLFxuICAgIHVzZXJzLFxuICB9XG59XG5cbmNvbnN0IHJvdXRlczogYW55ID0ge1xuICAnR0VUJzogYXN5bmMocmVxOk5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHtpZH0gPSByZXEucXVlcnk7XG4gICAgY29uc3Qge3VzZXJzfSA9IGF3YWl0IGdldFVzZXJzKCk7XG4gICAgY29uc3QgY3VycmVudFVzZXI6IFVzZXIgfCB1bmRlZmluZWQgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gaWQpO1xuICAgIHJldHVybiBjdXJyZW50VXNlciA/IHJlcy5zdGF0dXMoMjAwKS5qc29uKGN1cnJlbnRVc2VyKSA6IHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZXNzYWdlOiAnVXN1w6FyaW8gbsOjbyBlbmNvbnRyYWRvJ30pXG4gICAgLy8gfVxuICAgIC8vIHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZXNzYWdlOiAncHJlZW5jaGEgbyBpZCd9KVxuICB9LFxuICAnUE9TVCc6IGFzeW5jKHJlcTpOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCB7bmFtZSwgZ2l0aHViVVJMLCBsaW5rZWRpblVSTCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4gICAgY29uc3QgeyBkYXRhYmFzZUZpbGUsIHVzZXJzIH0gPSBhd2FpdCBnZXRVc2VycygpO1xuICAgIFxuICAgIHZhciBpZCA9IHJhbmRvbVVVSUQoKVxuXG4gICAgY29uc3QgdXNlcjogVXNlciA9IHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGdpdGh1YlVSTCxcbiAgICAgIGxpbmtlZGluVVJMXG4gICAgfVxuICAgIHVzZXJzLnB1c2godXNlcikgIFxuICAgIFxuICAgIGF3YWl0IHdyaXRlRmlsZShkYXRhYmFzZUZpbGUsIEpTT04uc3RyaW5naWZ5KHVzZXJzKSlcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNldEhlYWRlcignaWQnLCBpZCkuanNvbih7b2s6ICdvayd9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxuKSB7XG4gIGNvbnN0IHttZXRob2R9ID0gcmVxO1xuXG4gIGlmKG1ldGhvZCkge1xuICAgIHJldHVybiBhd2FpdCByb3V0ZXNbbWV0aG9kXShyZXEsIHJlcyk7XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lc3NhZ2U6ICdNZXRvZG8gbsOjbyBlbmNvbnRyYWRvJ30pXG4gIFxufSJdLCJuYW1lcyI6WyJwYXRoIiwiZnMiLCJ3cml0ZUZpbGUiLCJyYW5kb21VVUlEIiwiZ2V0VXNlcnMiLCJkYXRhYmFzZUZpbGUiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsInVzZXJzIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGUiLCJyb3V0ZXMiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibmFtZSIsImdpdGh1YlVSTCIsImxpbmtlZGluVVJMIiwiYm9keSIsInB1c2giLCJzdHJpbmdpZnkiLCJzZXRIZWFkZXIiLCJvayIsImhhbmRsZXIiLCJtZXRob2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/users.ts\n");

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