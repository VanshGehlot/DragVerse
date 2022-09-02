(function() {
var exports = {};
exports.id = "pages/api/ownedItems";
exports.ids = ["pages/api/ownedItems"];
exports.modules = {

/***/ "./pages/api/ownedItems.ts":
/*!*********************************!*\
  !*** ./pages/api/ownedItems.ts ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _nftHooks = __webpack_require__(/*! @zoralabs/nft-hooks */ "@zoralabs/nft-hooks");

var _envVars = __webpack_require__(/*! ./../../utils/env-vars */ "./utils/env-vars.ts");

module.exports = async (req, res) => {
  const {
    owner
  } = req.query;

  if (!owner) {
    return res.status(403).json({
      failed: true
    });
  }

  const fetchAgent = new _nftHooks.MediaFetchAgent(_envVars.NETWORK_ID);
  const tokens = await _nftHooks.FetchStaticData.fetchUserOwnedNFTs(fetchAgent, {
    collectionAddresses: _envVars.CONTRACT_ADDRESSES ? _envVars.CONTRACT_ADDRESSES.split(",") : undefined,
    userAddress: owner,
    limit: 200,
    offset: 0
  }, true);
  res.status(200).json({
    tokens
  });
};

/***/ }),

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

/***/ }),

/***/ "@zoralabs/nft-hooks":
/*!**************************************!*\
  !*** external "@zoralabs/nft-hooks" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@zoralabs/nft-hooks");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/ownedItems.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtYXVjdGlvbi1ob3VzZS8uL3BhZ2VzL2FwaS9vd25lZEl0ZW1zLnRzIiwid2VicGFjazovL2NyZWF0ZS1hdWN0aW9uLWhvdXNlLy4vdXRpbHMvZW52LXZhcnMudHMiLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvZXh0ZXJuYWwgXCJAem9yYWxhYnMvbmZ0LWhvb2tzXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcSIsInJlcyIsIm93bmVyIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwiZmFpbGVkIiwiZmV0Y2hBZ2VudCIsIk1lZGlhRmV0Y2hBZ2VudCIsIk5FVFdPUktfSUQiLCJ0b2tlbnMiLCJGZXRjaFN0YXRpY0RhdGEiLCJmZXRjaFVzZXJPd25lZE5GVHMiLCJjb2xsZWN0aW9uQWRkcmVzc2VzIiwiQ09OVFJBQ1RfQUREUkVTU0VTIiwic3BsaXQiLCJ1bmRlZmluZWQiLCJ1c2VyQWRkcmVzcyIsImxpbWl0Iiwib2Zmc2V0IiwicHJvY2VzcyIsIkVycm9yIiwiQ1VSQVRPUl9JRCIsImVudiIsIk5FWFRfUFVCTElDX0NVUkFUT1JfSUQiLCJBUFBfVElUTEUiLCJBUFBfREVTQ1JJUFRJT04iLCJCQVNFX1VSTCIsIk5FWFRfUFVCTElDX0JBU0VfVVJMIiwiREVGQVVMVF9PR19DQVJEIiwiRkFWSUNPTiIsIlJQQ19VUkwiLCJORVhUX1BVQkxJQ19SUENfVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLE9BQU9DLEdBQVAsRUFBaUJDLEdBQWpCLEtBQThCO0FBQzdDLFFBQU07QUFBRUM7QUFBRixNQUFZRixHQUFHLENBQUNHLEtBQXRCOztBQUNBLE1BQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsV0FBT0QsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBckIsQ0FBUDtBQUNEOztBQUVELFFBQU1DLFVBQVUsR0FBRyxJQUFJQyx5QkFBSixDQUNqQkMsbUJBRGlCLENBQW5CO0FBSUEsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLDBCQUFnQkMsa0JBQWhCLENBQ25CTCxVQURtQixFQUVuQjtBQUNFTSx1QkFBbUIsRUFBRUMsOEJBQ2hCQSwyQkFBRCxDQUErQkMsS0FBL0IsQ0FBcUMsR0FBckMsQ0FEaUIsR0FFakJDLFNBSE47QUFJRUMsZUFBVyxFQUFFZixLQUpmO0FBS0VnQixTQUFLLEVBQUUsR0FMVDtBQU1FQyxVQUFNLEVBQUU7QUFOVixHQUZtQixFQVVuQixJQVZtQixDQUFyQjtBQVlBbEIsS0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUs7QUFBRixHQUFyQjtBQUNELENBdkJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSE8sTUFBTUQsVUFBa0IsR0FBR1csR0FBM0I7O0FBQ1AsSUFBSSxDQUFDWCxVQUFMLEVBQWlCO0FBQ2YsUUFBTSxJQUFJWSxLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUNEOztBQUVNLE1BQU1DLFVBQVUsR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVlDLHNCQUEvQjtBQUVBLE1BQU1WLGtCQUFrQixHQUM3Qk0sTUFBQSxHQUNLQSxDQURMLEdBRUtBLDRDQUhBOztBQUtQLElBQUksQ0FBQ0UsVUFBRCxJQUFlLENBQUNSLGtCQUFwQixFQUF3QztBQUN0QyxRQUFNLElBQUlPLEtBQUosQ0FDSiw0REFESSxDQUFOO0FBR0Q7O0FBRU0sTUFBTUksU0FBUyxHQUFHTCxXQUFsQjtBQUNBLE1BQU1NLGVBQWUsR0FBR04seUNBQUEsSUFBK0MsQ0FBdkU7QUFDQSxNQUFNTyxRQUFRLEdBQUdQLE9BQU8sQ0FBQ0csR0FBUixDQUFZSyxvQkFBWixJQUFvQyxFQUFyRDtBQUNBLE1BQU1DLGVBQWUsR0FBSSxHQUFFRixRQUFTLCtCQUFwQztBQUNBLE1BQU1HLE9BQU8sR0FBSSxHQUFFSCxRQUFTLCtCQUE1QjtBQUVBLE1BQU1JLE9BQTJCLEdBQUdYLE9BQU8sQ0FBQ0csR0FBUixDQUFZUyxtQkFBaEQsQzs7Ozs7Ozs7Ozs7QUN4QlAsaUQiLCJmaWxlIjoicGFnZXMvYXBpL293bmVkSXRlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGZXRjaFN0YXRpY0RhdGEsIE1lZGlhRmV0Y2hBZ2VudCB9IGZyb20gXCJAem9yYWxhYnMvbmZ0LWhvb2tzXCI7XHJcbmltcG9ydCB7IE5FVFdPUktfSUQsIENPTlRSQUNUX0FERFJFU1NFUyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZW52LXZhcnMnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IG93bmVyIH0gPSByZXEucXVlcnk7XHJcbiAgaWYgKCFvd25lcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgZmFpbGVkOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmV0Y2hBZ2VudCA9IG5ldyBNZWRpYUZldGNoQWdlbnQoXHJcbiAgICBORVRXT1JLX0lEIGFzIGFueVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHRva2VucyA9IGF3YWl0IEZldGNoU3RhdGljRGF0YS5mZXRjaFVzZXJPd25lZE5GVHMoXHJcbiAgICBmZXRjaEFnZW50LFxyXG4gICAge1xyXG4gICAgICBjb2xsZWN0aW9uQWRkcmVzc2VzOiBDT05UUkFDVF9BRERSRVNTRVNcclxuICAgICAgICA/IChDT05UUkFDVF9BRERSRVNTRVMgYXMgc3RyaW5nKS5zcGxpdChcIixcIilcclxuICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgICAgdXNlckFkZHJlc3M6IG93bmVyLFxyXG4gICAgICBsaW1pdDogMjAwLFxyXG4gICAgICBvZmZzZXQ6IDAsXHJcbiAgICB9LFxyXG4gICAgdHJ1ZVxyXG4gICk7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0b2tlbnMgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBORVRXT1JLX0lEOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ORVRXT1JLX0lEITtcclxuaWYgKCFORVRXT1JLX0lEKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29ya0lEIGlzIHJlcXVpcmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENVUkFUT1JfSUQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DVVJBVE9SX0lEO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRSQUNUX0FERFJFU1NFUyA9XHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTkVUV09SS19JRCA9PT0gJzEnXHJcbiAgICA/IChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQUlOTkVUX0NPTlRSQUNUUyBhcyBzdHJpbmcpXHJcbiAgICA6IChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19URVNUTkVUX0NPTlRSQUNUUyBhcyBzdHJpbmcpXHJcblxyXG5pZiAoIUNVUkFUT1JfSUQgJiYgIUNPTlRSQUNUX0FERFJFU1NFUykge1xyXG4gIHRocm93IG5ldyBFcnJvcihcclxuICAgIFwiQXQgbGVhc3Qgb25lIG9mIGN1cmF0b3IgaWQgb3IgY29udHJhY3QgYWRkcmVzcyBpcyByZXF1aXJlZFwiXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9USVRMRSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9USVRMRVxyXG5leHBvcnQgY29uc3QgQVBQX0RFU0NSSVBUSU9OID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVGQVVMVF9ERVNDUklQVElPTiB8fCAnJ1xyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTCB8fCAnJ1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9PR19DQVJEID0gYCR7QkFTRV9VUkx9L21ldGEtY29udGVudC9zb2NpYWwtY2FyZC5qcGdgXHJcbmV4cG9ydCBjb25zdCBGQVZJQ09OID0gYCR7QkFTRV9VUkx9L21ldGEtY29udGVudC9zb2NpYWwtY2FyZC5qcGdgXHJcblxyXG5leHBvcnQgY29uc3QgUlBDX1VSTDogc3RyaW5nIHwgdW5kZWZpbmVkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUlBDX1VSTDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHpvcmFsYWJzL25mdC1ob29rc1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==