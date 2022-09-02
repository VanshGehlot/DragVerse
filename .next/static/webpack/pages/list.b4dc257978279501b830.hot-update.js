self["webpackHotUpdate_N_E"]("pages/list",{

/***/ "./components/UNSD.jsx":
/*!*****************************!*\
  !*** ./components/UNSD.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_c1_DragVerse_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_c1_DragVerse_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_c1_DragVerse_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var D_c1_DragVerse_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uauth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uauth/js */ "./node_modules/@uauth/js/build/index.module.mjs");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\c1\\DragVerse\\components\\UNSD.jsx",
    _s = $RefreshSig$();




var uauth = new _uauth_js__WEBPACK_IMPORTED_MODULE_3__.default({
  clientID: "f479c4fb-992e-4995-bb7b-12aa6019f3af",
  redirectUri: "http://localhost:3000/list"
});

function UNSD() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      Uauth = _useState[0],
      setUauth = _useState[1];

  function Connect() {
    return _Connect.apply(this, arguments);
  }

  function _Connect() {
    _Connect = (0,D_c1_DragVerse_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_c1_DragVerse_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var authorization;
      return D_c1_DragVerse_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return uauth.loginWithPopup();

            case 3:
              authorization = _context.sent;
              setUauth(JSON.parse(JSON.stringify(authorization))["idToken"]);
              _context.next = 7;
              return authenticate();

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));
    return _Connect.apply(this, arguments);
  }

  function logOut() {
    return _logOut.apply(this, arguments);
  }

  function _logOut() {
    _logOut = (0,D_c1_DragVerse_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_c1_DragVerse_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return D_c1_DragVerse_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              uauth.logout();
              logout();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _logOut.apply(this, arguments);
  }

  function log() {
    if (Uauth === null || Uauth === undefined) {
      Connect();
    } else {
      logOut();
    }
  }

  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      className: "button",
      onClick: log,
      children: Uauth != null ? Uauth["sub"] : "Login with UNSD"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(UNSD, "Wz8LgpV5tzhVMPBBeMmbwvtFlfU=");

_c = UNSD;
/* harmony default export */ __webpack_exports__["default"] = (UNSD);

var _c;

$RefreshReg$(_c, "UNSD");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VTlNELmpzeCJdLCJuYW1lcyI6WyJ1YXV0aCIsIlVBdXRoIiwiY2xpZW50SUQiLCJyZWRpcmVjdFVyaSIsIlVOU0QiLCJ1c2VTdGF0ZSIsIlVhdXRoIiwic2V0VWF1dGgiLCJDb25uZWN0IiwibG9naW5XaXRoUG9wdXAiLCJhdXRob3JpemF0aW9uIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYXV0aGVudGljYXRlIiwiY29uc29sZSIsImVycm9yIiwibG9nT3V0IiwibG9nb3V0IiwibG9nIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxJQUFJQyw4Q0FBSixDQUFVO0FBQ3BCQyxVQUFRLEVBQUUsc0NBRFU7QUFFcEJDLGFBQVcsRUFBRTtBQUZPLENBQVYsQ0FBZDs7QUFLQSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ2NDLCtDQUFRLEVBRHRCO0FBQUEsTUFDTEMsS0FESztBQUFBLE1BQ0VDLFFBREY7O0FBQUEsV0FHR0MsT0FISDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtUkFHWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRW9DUixLQUFLLENBQUNTLGNBQU4sRUFGcEM7O0FBQUE7QUFFY0MsMkJBRmQ7QUFHUUgsc0JBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxhQUFmLENBQVgsRUFBMEMsU0FBMUMsQ0FBRCxDQUFSO0FBSFI7QUFBQSxxQkFLY0ksWUFBWSxFQUwxQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT1FDLHFCQUFPLENBQUNDLEtBQVI7O0FBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIWTtBQUFBO0FBQUE7O0FBQUEsV0FjR0MsTUFkSDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrUkFjWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lqQixtQkFBSyxDQUFDa0IsTUFBTjtBQUNBQSxvQkFBTTs7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWRZO0FBQUE7QUFBQTs7QUFtQlosV0FBU0MsR0FBVCxHQUFlO0FBQ1gsUUFBSWIsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBS2MsU0FBaEMsRUFBMkM7QUFDdkNaLGFBQU87QUFDVixLQUZELE1BRU87QUFDSFMsWUFBTTtBQUNUO0FBQ0o7O0FBRUQsU0FDSTtBQUFBLGNBQ0k7QUFBUSxlQUFTLEVBQUMsUUFBbEI7QUFBMkIsYUFBTyxFQUFFRSxHQUFwQztBQUFBLGdCQUNLYixLQUFLLElBQUksSUFBVCxHQUFnQkEsS0FBSyxDQUFDLEtBQUQsQ0FBckIsR0FBK0I7QUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBT0g7O0dBbENRRixJOztLQUFBQSxJO0FBb0NULCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpc3QuYjRkYzI1Nzk3ODI3OTUwMWI4MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBVQXV0aCBmcm9tIFwiQHVhdXRoL2pzXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5jb25zdCB1YXV0aCA9IG5ldyBVQXV0aCh7XHJcbiAgICBjbGllbnRJRDogXCJmNDc5YzRmYi05OTJlLTQ5OTUtYmI3Yi0xMmFhNjAxOWYzYWZcIixcclxuICAgIHJlZGlyZWN0VXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9saXN0XCIsXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBVTlNEKCkge1xyXG4gICAgY29uc3QgW1VhdXRoLCBzZXRVYXV0aF0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gQ29ubmVjdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhdXRob3JpemF0aW9uID0gYXdhaXQgdWF1dGgubG9naW5XaXRoUG9wdXAoKVxyXG4gICAgICAgICAgICBzZXRVYXV0aChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGF1dGhvcml6YXRpb24pKVtcImlkVG9rZW5cIl0pXHJcblxyXG4gICAgICAgICAgICBhd2FpdCBhdXRoZW50aWNhdGUoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvZ091dCgpIHtcclxuICAgICAgICB1YXV0aC5sb2dvdXQoKVxyXG4gICAgICAgIGxvZ291dCgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9nKCkge1xyXG4gICAgICAgIGlmIChVYXV0aCA9PT0gbnVsbCB8fCBVYXV0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIENvbm5lY3QoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvZ091dCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXtsb2d9PlxyXG4gICAgICAgICAgICAgICAge1VhdXRoICE9IG51bGwgPyBVYXV0aFtcInN1YlwiXSA6IFwiTG9naW4gd2l0aCBVTlNEXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVTlNEIl0sInNvdXJjZVJvb3QiOiIifQ==