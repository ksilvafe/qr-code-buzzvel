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

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\n\n\nconst getUsers = async ()=>{\n    const { serverRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_3___default()();\n    console.log(serverRuntimeConfig.PROJECT_ROOT);\n    const databaseFile = path__WEBPACK_IMPORTED_MODULE_0___default().join(serverRuntimeConfig.PROJECT_ROOT, \"./public/db.json\");\n    const users = JSON.parse(await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.readFile)(databaseFile, \"utf8\"));\n    return {\n        databaseFile,\n        users\n    };\n};\nconst routes = {\n    \"GET\": async (req, res)=>{\n        const { id  } = req.query;\n        const { users  } = await getUsers();\n        const currentUser = users.find((user)=>user.id === id);\n        return currentUser ? res.status(200).json(currentUser) : res.status(404).json({\n            message: \"Usu\\xe1rio n\\xe3o encontrado\"\n        });\n    // }\n    // res.status(404).json({message: 'preencha o id'})\n    },\n    \"POST\": async (req, res)=>{\n        try {\n            const { name , githubURL , linkedinURL  } = JSON.parse(req.body);\n            const { databaseFile , users  } = await getUsers();\n            var id = (0,crypto__WEBPACK_IMPORTED_MODULE_2__.randomUUID)();\n            const user = {\n                id,\n                name,\n                githubURL,\n                linkedinURL\n            };\n            users.push(user);\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(databaseFile, JSON.stringify(users));\n            return res.status(201).setHeader(\"id\", id).json({\n                ok: \"ok\"\n            });\n        } catch (error) {\n            return res.status(500).json({\n                message: error\n            });\n        }\n    }\n};\nasync function handler(req, res) {\n    const { method  } = req;\n    if (method) {\n        return await routes[method](req, res);\n    }\n    return res.status(404).json({\n        message: \"Metodo n\\xe3o encontrado\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZFQUE2RTtBQUVyRDtBQUNtQjtBQUNSO0FBQ0c7QUFDRjtBQVlwQyxNQUFNSyxXQUFXLFVBQVc7SUFDMUIsTUFBTSxFQUFFQyxvQkFBbUIsRUFBRSxHQUFHRixrREFBU0E7SUFDekNHLFFBQVFDLEdBQUcsQ0FBQ0Ysb0JBQW9CRyxZQUFZO0lBQzVDLE1BQU1DLGVBQWVWLGdEQUFTLENBQUNNLG9CQUFvQkcsWUFBWSxFQUFFO0lBRWpFLE1BQU1HLFFBQWdCQyxLQUFLQyxLQUFLLENBQUMsTUFBTVgscURBQVFBLENBQUNPLGNBQWM7SUFFOUQsT0FBTztRQUNMQTtRQUNBRTtJQUNGO0FBQ0Y7QUFFQSxNQUFNRyxTQUFjO0lBQ2xCLE9BQU8sT0FBTUMsS0FBb0JDLE1BQXlCO1FBQ3hELE1BQU0sRUFBQ0MsR0FBRSxFQUFDLEdBQUdGLElBQUlHLEtBQUs7UUFDdEIsTUFBTSxFQUFDUCxNQUFLLEVBQUMsR0FBRyxNQUFNUDtRQUN0QixNQUFNZSxjQUFnQ1IsTUFBTVMsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLSixFQUFFLEtBQUtBO1FBQ3JFLE9BQU9FLGNBQWNILElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNKLGVBQWVILElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUztRQUF3QixFQUFFO0lBQ2xILElBQUk7SUFDSixtREFBbUQ7SUFDckQ7SUFDQSxRQUFRLE9BQU1ULEtBQW9CQyxNQUF5QjtRQUN6RCxJQUFJO1lBQ0YsTUFBTSxFQUFDUyxLQUFJLEVBQUVDLFVBQVMsRUFBRUMsWUFBVyxFQUFFLEdBQUdmLEtBQUtDLEtBQUssQ0FBQ0UsSUFBSWEsSUFBSTtZQUMzRCxNQUFNLEVBQUVuQixhQUFZLEVBQUVFLE1BQUssRUFBRSxHQUFHLE1BQU1QO1lBRXRDLElBQUlhLEtBQUtoQixrREFBVUE7WUFFbkIsTUFBTW9CLE9BQWE7Z0JBQ2pCSjtnQkFDQVE7Z0JBQ0FDO2dCQUNBQztZQUNGO1lBQ0FoQixNQUFNa0IsSUFBSSxDQUFDUjtZQUVYLE1BQU1yQixzREFBU0EsQ0FBQ1MsY0FBY0csS0FBS2tCLFNBQVMsQ0FBQ25CO1lBQzdDLE9BQU9LLElBQUlNLE1BQU0sQ0FBQyxLQUFLUyxTQUFTLENBQUMsTUFBTWQsSUFBSU0sSUFBSSxDQUFDO2dCQUFDUyxJQUFJO1lBQUk7UUFDM0QsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsT0FBT2pCLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUNDLFNBQVNTO1lBQUs7UUFDN0M7SUFDRjtBQUNGO0FBRWUsZUFBZUMsUUFDNUJuQixHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxNQUFNLEVBQUNtQixPQUFNLEVBQUMsR0FBR3BCO0lBRWpCLElBQUdvQixRQUFRO1FBQ1QsT0FBTyxNQUFNckIsTUFBTSxDQUFDcUIsT0FBTyxDQUFDcEIsS0FBS0M7SUFDbkMsQ0FBQztJQUVELE9BQU9BLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0MsU0FBUztJQUF1QjtBQUUvRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXItY29kZS8uL3NyYy9wYWdlcy9hcGkvdXNlcnMudHM/MTRjMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzLCB7IHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gJ2NyeXB0bydcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcbnR5cGUgRGF0YSA9IHtcbiAgbmFtZT86IHN0cmluZ1xuICBtZXNzYWdlPzogc3RyaW5nXG59XG5cbnR5cGUgVXNlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgZ2l0aHViVVJMOiBzdHJpbmdcbiAgbGlua2VkaW5VUkw6IHN0cmluZ1xufVxuY29uc3QgZ2V0VXNlcnMgPSBhc3luYygpID0+IHtcbiAgY29uc3QgeyBzZXJ2ZXJSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxuICBjb25zb2xlLmxvZyhzZXJ2ZXJSdW50aW1lQ29uZmlnLlBST0pFQ1RfUk9PVCk7XG4gIGNvbnN0IGRhdGFiYXNlRmlsZSA9IHBhdGguam9pbihzZXJ2ZXJSdW50aW1lQ29uZmlnLlBST0pFQ1RfUk9PVCwgJy4vcHVibGljL2RiLmpzb24nKTtcblxuICBjb25zdCB1c2VyczogVXNlcltdID0gSlNPTi5wYXJzZShhd2FpdCByZWFkRmlsZShkYXRhYmFzZUZpbGUsICd1dGY4JykpO1xuXG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2VGaWxlLFxuICAgIHVzZXJzLFxuICB9XG59XG5cbmNvbnN0IHJvdXRlczogYW55ID0ge1xuICAnR0VUJzogYXN5bmMocmVxOk5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHtpZH0gPSByZXEucXVlcnk7XG4gICAgY29uc3Qge3VzZXJzfSA9IGF3YWl0IGdldFVzZXJzKCk7XG4gICAgY29uc3QgY3VycmVudFVzZXI6IFVzZXIgfCB1bmRlZmluZWQgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gaWQpO1xuICAgIHJldHVybiBjdXJyZW50VXNlciA/IHJlcy5zdGF0dXMoMjAwKS5qc29uKGN1cnJlbnRVc2VyKSA6IHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZXNzYWdlOiAnVXN1w6FyaW8gbsOjbyBlbmNvbnRyYWRvJ30pXG4gICAgLy8gfVxuICAgIC8vIHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZXNzYWdlOiAncHJlZW5jaGEgbyBpZCd9KVxuICB9LFxuICAnUE9TVCc6IGFzeW5jKHJlcTpOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge25hbWUsIGdpdGh1YlVSTCwgbGlua2VkaW5VUkwgfSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuICAgICAgY29uc3QgeyBkYXRhYmFzZUZpbGUsIHVzZXJzIH0gPSBhd2FpdCBnZXRVc2VycygpO1xuICAgICAgXG4gICAgICB2YXIgaWQgPSByYW5kb21VVUlEKClcbiAgXG4gICAgICBjb25zdCB1c2VyOiBVc2VyID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZ2l0aHViVVJMLFxuICAgICAgICBsaW5rZWRpblVSTFxuICAgICAgfVxuICAgICAgdXNlcnMucHVzaCh1c2VyKSAgXG4gICAgICBcbiAgICAgIGF3YWl0IHdyaXRlRmlsZShkYXRhYmFzZUZpbGUsIEpTT04uc3RyaW5naWZ5KHVzZXJzKSlcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2V0SGVhZGVyKCdpZCcsIGlkKS5qc29uKHtvazogJ29rJ30pOyBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHttZXNzYWdlOiBlcnJvcn0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHtcbiAgY29uc3Qge21ldGhvZH0gPSByZXE7XG5cbiAgaWYobWV0aG9kKSB7XG4gICAgcmV0dXJuIGF3YWl0IHJvdXRlc1ttZXRob2RdKHJlcSwgcmVzKTtcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVzc2FnZTogJ01ldG9kbyBuw6NvIGVuY29udHJhZG8nfSlcbiAgXG59Il0sIm5hbWVzIjpbInBhdGgiLCJ3cml0ZUZpbGUiLCJyYW5kb21VVUlEIiwicmVhZEZpbGUiLCJnZXRDb25maWciLCJnZXRVc2VycyIsInNlcnZlclJ1bnRpbWVDb25maWciLCJjb25zb2xlIiwibG9nIiwiUFJPSkVDVF9ST09UIiwiZGF0YWJhc2VGaWxlIiwiam9pbiIsInVzZXJzIiwiSlNPTiIsInBhcnNlIiwicm91dGVzIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsImN1cnJlbnRVc2VyIiwiZmluZCIsInVzZXIiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm5hbWUiLCJnaXRodWJVUkwiLCJsaW5rZWRpblVSTCIsImJvZHkiLCJwdXNoIiwic3RyaW5naWZ5Iiwic2V0SGVhZGVyIiwib2siLCJlcnJvciIsImhhbmRsZXIiLCJtZXRob2QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/users.ts\n");

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