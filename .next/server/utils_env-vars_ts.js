exports.id = "utils_env-vars_ts";
exports.ids = ["utils_env-vars_ts"];
exports.modules = {

/***/ "./utils/env-vars.ts":
/*!***************************!*\
  !*** ./utils/env-vars.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NETWORK_ID": function() { return /* binding */ NETWORK_ID; },
/* harmony export */   "CURATOR_ID": function() { return /* binding */ CURATOR_ID; },
/* harmony export */   "CONTRACT_ADDRESSES": function() { return /* binding */ CONTRACT_ADDRESSES; },
/* harmony export */   "APP_TITLE": function() { return /* binding */ APP_TITLE; },
/* harmony export */   "APP_DESCRIPTION": function() { return /* binding */ APP_DESCRIPTION; },
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "DEFAULT_OG_CARD": function() { return /* binding */ DEFAULT_OG_CARD; },
/* harmony export */   "FAVICON": function() { return /* binding */ FAVICON; },
/* harmony export */   "RPC_URL": function() { return /* binding */ RPC_URL; }
/* harmony export */ });
const NETWORK_ID = "4";

if (!NETWORK_ID) {
  throw new Error("NetworkID is required.");
}

const CURATOR_ID = process.env.NEXT_PUBLIC_CURATOR_ID;
const CONTRACT_ADDRESSES =  false ? 0 : "0x7C2668BD0D3c050703CEcC956C11Bd520c26f7d4";

if (!CURATOR_ID && !CONTRACT_ADDRESSES) {
  throw new Error("At least one of curator id or contract address is required");
}

const APP_TITLE = "DragVerse";
const APP_DESCRIPTION = "Secondary Marketplace for the DragVerse" || 0;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';
const DEFAULT_OG_CARD = `${BASE_URL}/meta-content/social-card.jpg`;
const FAVICON = `${BASE_URL}/meta-content/social-card.jpg`;
const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtYXVjdGlvbi1ob3VzZS8uL3V0aWxzL2Vudi12YXJzLnRzIl0sIm5hbWVzIjpbIk5FVFdPUktfSUQiLCJwcm9jZXNzIiwiRXJyb3IiLCJDVVJBVE9SX0lEIiwiZW52IiwiTkVYVF9QVUJMSUNfQ1VSQVRPUl9JRCIsIkNPTlRSQUNUX0FERFJFU1NFUyIsIkFQUF9USVRMRSIsIkFQUF9ERVNDUklQVElPTiIsIkJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfQkFTRV9VUkwiLCJERUZBVUxUX09HX0NBUkQiLCJGQVZJQ09OIiwiUlBDX1VSTCIsIk5FWFRfUFVCTElDX1JQQ19VUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsVUFBa0IsR0FBR0MsR0FBM0I7O0FBQ1AsSUFBSSxDQUFDRCxVQUFMLEVBQWlCO0FBQ2YsUUFBTSxJQUFJRSxLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUNEOztBQUVNLE1BQU1DLFVBQVUsR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVlDLHNCQUEvQjtBQUVBLE1BQU1DLGtCQUFrQixHQUM3QkwsTUFBQSxHQUNLQSxDQURMLEdBRUtBLDRDQUhBOztBQUtQLElBQUksQ0FBQ0UsVUFBRCxJQUFlLENBQUNHLGtCQUFwQixFQUF3QztBQUN0QyxRQUFNLElBQUlKLEtBQUosQ0FDSiw0REFESSxDQUFOO0FBR0Q7O0FBRU0sTUFBTUssU0FBUyxHQUFHTixXQUFsQjtBQUNBLE1BQU1PLGVBQWUsR0FBR1AseUNBQUEsSUFBK0MsQ0FBdkU7QUFDQSxNQUFNUSxRQUFRLEdBQUdSLE9BQU8sQ0FBQ0csR0FBUixDQUFZTSxvQkFBWixJQUFvQyxFQUFyRDtBQUNBLE1BQU1DLGVBQWUsR0FBSSxHQUFFRixRQUFTLCtCQUFwQztBQUNBLE1BQU1HLE9BQU8sR0FBSSxHQUFFSCxRQUFTLCtCQUE1QjtBQUVBLE1BQU1JLE9BQTJCLEdBQUdaLE9BQU8sQ0FBQ0csR0FBUixDQUFZVSxtQkFBaEQsQyIsImZpbGUiOiJ1dGlsc19lbnYtdmFyc190cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBORVRXT1JLX0lEOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ORVRXT1JLX0lEITtcclxuaWYgKCFORVRXT1JLX0lEKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29ya0lEIGlzIHJlcXVpcmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENVUkFUT1JfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DVVJBVE9SX0lEO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRSQUNUX0FERFJFU1NFUyA9XHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTkVUV09SS19JRCA9PT0gJzEnXHJcbiAgICA/IChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQUlOTkVUX0NPTlRSQUNUUyBhcyBzdHJpbmcpXHJcbiAgICA6IChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19URVNUTkVUX0NPTlRSQUNUUyBhcyBzdHJpbmcpXHJcblxyXG5pZiAoIUNVUkFUT1JfSUQgJiYgIUNPTlRSQUNUX0FERFJFU1NFUykge1xyXG4gIHRocm93IG5ldyBFcnJvcihcclxuICAgIFwiQXQgbGVhc3Qgb25lIG9mIGN1cmF0b3IgaWQgb3IgY29udHJhY3QgYWRkcmVzcyBpcyByZXF1aXJlZFwiXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9USVRMRSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9USVRMRVxyXG5leHBvcnQgY29uc3QgQVBQX0RFU0NSSVBUSU9OID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVGQVVMVF9ERVNDUklQVElPTiB8fCAnJ1xyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTCB8fCAnJ1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9PR19DQVJEID0gYCR7QkFTRV9VUkx9L21ldGEtY29udGVudC9zb2NpYWwtY2FyZC5qcGdgXHJcbmV4cG9ydCBjb25zdCBGQVZJQ09OID0gYCR7QkFTRV9VUkx9L21ldGEtY29udGVudC9zb2NpYWwtY2FyZC5qcGdgXHJcblxyXG5leHBvcnQgY29uc3QgUlBDX1VSTDogc3RyaW5nIHwgdW5kZWZpbmVkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUlBDX1VSTDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==