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
exports.id = "pages/api/project";
exports.ids = ["pages/api/project"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jose":
/*!***********************!*\
  !*** external "jose" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("jose");

/***/ }),

/***/ "(api)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comparePasswords\": () => (/* binding */ comparePasswords),\n/* harmony export */   \"createJWT\": () => (/* binding */ createJWT),\n/* harmony export */   \"getUserFromCookie\": () => (/* binding */ getUserFromCookie),\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"validateJWT\": () => (/* binding */ validateJWT)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"jose\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"(api)/./lib/db.ts\");\n\n\n\nconst hashPassword = (password)=>bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 10);\nconst comparePasswords = (plainTextPassword, hashedPassword)=>bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(plainTextPassword, hashedPassword);\nconst createJWT = (user)=>{\n    // return jwt.sign({ id: user.id }, 'cookies')\n    const iat = Math.floor(Date.now() / 1000);\n    const exp = iat + 60 * 60 * 24 * 7;\n    return new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT({\n        payload: {\n            id: user.id,\n            email: user.email\n        }\n    }).setProtectedHeader({\n        alg: \"HS256\",\n        typ: \"JWT\"\n    }).setExpirationTime(exp).setIssuedAt(iat).setNotBefore(iat).sign(new TextEncoder().encode(process.env.JWT_SECRET));\n};\nconst validateJWT = async (jwt)=>{\n    const { payload  } = await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(jwt, new TextEncoder().encode(process.env.JWT_SECRET));\n    return payload.payload;\n};\nconst getUserFromCookie = async (cookies)=>{\n    const jwt = cookies.get(process.env.COOKIE_NAME);\n    const { id  } = await validateJWT(jwt.value);\n    const user = await _db__WEBPACK_IMPORTED_MODULE_2__.db.user.findUnique({\n        where: {\n            id: id\n        }\n    });\n    return user;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ2M7QUFDaEI7QUFFbkIsTUFBTUksZUFBZSxDQUFDQyxXQUFhTCxrREFBVyxDQUFDSyxVQUFVLElBQUk7QUFFN0QsTUFBTUUsbUJBQW1CLENBQUNDLG1CQUFtQkMsaUJBQ2xEVCxxREFBYyxDQUFDUSxtQkFBbUJDLGdCQUFnQjtBQUU3QyxNQUFNRSxZQUFZLENBQUNDLE9BQVM7SUFDakMsOENBQThDO0lBQzlDLE1BQU1DLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ0MsS0FBS0MsR0FBRyxLQUFLO0lBQ3BDLE1BQU1DLE1BQU1MLE1BQU0sS0FBSyxLQUFLLEtBQUs7SUFFakMsT0FBTyxJQUFJWix5Q0FBT0EsQ0FBQztRQUFFa0IsU0FBUztZQUFFQyxJQUFJUixLQUFLUSxFQUFFO1lBQUVDLE9BQU9ULEtBQUtTLEtBQUs7UUFBQztJQUFFLEdBQzlEQyxrQkFBa0IsQ0FBQztRQUFFQyxLQUFLO1FBQVNDLEtBQUs7SUFBTSxHQUM5Q0MsaUJBQWlCLENBQUNQLEtBQ2xCUSxXQUFXLENBQUNiLEtBQ1pjLFlBQVksQ0FBQ2QsS0FDYmUsSUFBSSxDQUFDLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0FBQ3pELEVBQUU7QUFFSyxNQUFNQyxjQUFjLE9BQU9DLE1BQVE7SUFDeEMsTUFBTSxFQUFFaEIsUUFBTyxFQUFFLEdBQUcsTUFBTWpCLCtDQUFTQSxDQUNqQ2lDLEtBQ0EsSUFBSU4sY0FBY0MsTUFBTSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7SUFHakQsT0FBT2QsUUFBUUEsT0FBTztBQUN4QixFQUFFO0FBRUssTUFBTWlCLG9CQUFvQixPQUFPQyxVQUFZO0lBQ2xELE1BQU1GLE1BQU1FLFFBQVFDLEdBQUcsQ0FBQ1AsUUFBUUMsR0FBRyxDQUFDTyxXQUFXO0lBRS9DLE1BQU0sRUFBRW5CLEdBQUUsRUFBRSxHQUFHLE1BQU1jLFlBQVlDLElBQUlLLEtBQUs7SUFFMUMsTUFBTTVCLE9BQU8sTUFBTVQsbURBQWtCLENBQUM7UUFDcEN1QyxPQUFPO1lBQ0x0QixJQUFJQTtRQUNOO0lBQ0Y7SUFFQSxPQUFPUjtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0YWRtaW4vLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5IH0gZnJvbSBcImpvc2VcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4vZGJcIjtcblxuZXhwb3J0IGNvbnN0IGhhc2hQYXNzd29yZCA9IChwYXNzd29yZCkgPT4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcblxuZXhwb3J0IGNvbnN0IGNvbXBhcmVQYXNzd29yZHMgPSAocGxhaW5UZXh0UGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKSA9PlxuICBiY3J5cHQuY29tcGFyZShwbGFpblRleHRQYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSldUID0gKHVzZXIpID0+IHtcbiAgLy8gcmV0dXJuIGp3dC5zaWduKHsgaWQ6IHVzZXIuaWQgfSwgJ2Nvb2tpZXMnKVxuICBjb25zdCBpYXQgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgY29uc3QgZXhwID0gaWF0ICsgNjAgKiA2MCAqIDI0ICogNztcblxuICByZXR1cm4gbmV3IFNpZ25KV1QoeyBwYXlsb2FkOiB7IGlkOiB1c2VyLmlkLCBlbWFpbDogdXNlci5lbWFpbCB9IH0pXG4gICAgLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogXCJIUzI1NlwiLCB0eXA6IFwiSldUXCIgfSlcbiAgICAuc2V0RXhwaXJhdGlvblRpbWUoZXhwKVxuICAgIC5zZXRJc3N1ZWRBdChpYXQpXG4gICAgLnNldE5vdEJlZm9yZShpYXQpXG4gICAgLnNpZ24obmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUpXVCA9IGFzeW5jIChqd3QpID0+IHtcbiAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkoXG4gICAgand0LFxuICAgIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxuICApO1xuXG4gIHJldHVybiBwYXlsb2FkLnBheWxvYWQgYXMgYW55O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJGcm9tQ29va2llID0gYXN5bmMgKGNvb2tpZXMpID0+IHtcbiAgY29uc3Qgand0ID0gY29va2llcy5nZXQocHJvY2Vzcy5lbnYuQ09PS0lFX05BTUUpO1xuXG4gIGNvbnN0IHsgaWQgfSA9IGF3YWl0IHZhbGlkYXRlSldUKGp3dC52YWx1ZSk7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBpZCBhcyBzdHJpbmcsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHVzZXI7XG59O1xuIl0sIm5hbWVzIjpbImJjcnlwdCIsIlNpZ25KV1QiLCJqd3RWZXJpZnkiLCJkYiIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaCIsImNvbXBhcmVQYXNzd29yZHMiLCJwbGFpblRleHRQYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwiY29tcGFyZSIsImNyZWF0ZUpXVCIsInVzZXIiLCJpYXQiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiZXhwIiwicGF5bG9hZCIsImlkIiwiZW1haWwiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJ0eXAiLCJzZXRFeHBpcmF0aW9uVGltZSIsInNldElzc3VlZEF0Iiwic2V0Tm90QmVmb3JlIiwic2lnbiIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJ2YWxpZGF0ZUpXVCIsImp3dCIsImdldFVzZXJGcm9tQ29va2llIiwiY29va2llcyIsImdldCIsIkNPT0tJRV9OQU1FIiwidmFsdWUiLCJmaW5kVW5pcXVlIiwid2hlcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTzlDLElBQUlDO0FBQ0osSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxPQUFPQyxZQUFZLEVBQUU7UUFDeEJELE9BQU9DLFlBQVksR0FBRyxJQUFJSix3REFBWUE7SUFDeEMsQ0FBQztJQUNEQyxTQUFTRSxPQUFPQyxZQUFZO0FBQzlCLENBQUM7QUFFTSxNQUFNQyxLQUFLSixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdGFkbWluLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxuICB2YXIgY2FjaGVkUHJpc21hOiBQcmlzbWFDbGllbnQ7XG59XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuY2FjaGVkUHJpc21hKSB7XG4gICAgZ2xvYmFsLmNhY2hlZFByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwuY2FjaGVkUHJpc21hO1xufVxuXG5leHBvcnQgY29uc3QgZGIgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCIsImNhY2hlZFByaXNtYSIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/project.ts":
/*!******************************!*\
  !*** ./pages/api/project.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(api)/./lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.ts\");\n\n\nasync function handler(req, res) {\n    const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.validateJWT)(req.cookies[process.env.COOKIE_NAME]);\n    await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.project.create({\n        data: {\n            name: req.body.name,\n            ownerId: user.id\n        }\n    });\n    res.json({\n        data: {\n            message: \"ok\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvamVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFDWDtBQUVmLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLE9BQU8sTUFBTUwsc0RBQVdBLENBQUNHLElBQUlHLE9BQU8sQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLENBQUM7SUFFbkUsTUFBTVIsc0RBQWlCLENBQUM7UUFDdEJXLE1BQU07WUFDSkMsTUFBTVYsSUFBSVcsSUFBSSxDQUFDRCxJQUFJO1lBQ25CRSxTQUFTVixLQUFLVyxFQUFFO1FBQ2xCO0lBQ0Y7SUFFQVosSUFBSWEsSUFBSSxDQUFDO1FBQUVMLE1BQU07WUFBRU0sU0FBUztRQUFLO0lBQUU7QUFDckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RhZG1pbi8uL3BhZ2VzL2FwaS9wcm9qZWN0LnRzPzUzM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmFsaWRhdGVKV1QgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvZGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB1c2VyID0gYXdhaXQgdmFsaWRhdGVKV1QocmVxLmNvb2tpZXNbcHJvY2Vzcy5lbnYuQ09PS0lFX05BTUVdKTtcblxuICBhd2FpdCBkYi5wcm9qZWN0LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbiAgICAgIG93bmVySWQ6IHVzZXIuaWQsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmVzLmpzb24oeyBkYXRhOiB7IG1lc3NhZ2U6IFwib2tcIiB9IH0pO1xufVxuIl0sIm5hbWVzIjpbInZhbGlkYXRlSldUIiwiZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlciIsImNvb2tpZXMiLCJwcm9jZXNzIiwiZW52IiwiQ09PS0lFX05BTUUiLCJwcm9qZWN0IiwiY3JlYXRlIiwiZGF0YSIsIm5hbWUiLCJib2R5Iiwib3duZXJJZCIsImlkIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/project.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/project.ts"));
module.exports = __webpack_exports__;

})();