(function() {
var exports = {};
exports.id = "pages/list";
exports.ids = ["pages/list"];
exports.modules = {

/***/ "./components/UNSD.jsx":
/*!*****************************!*\
  !*** ./components/UNSD.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uauth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uauth/js */ "@uauth/js");
/* harmony import */ var _uauth_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uauth_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\c1\\DragVerse\\components\\UNSD.jsx";



const uauth = new (_uauth_js__WEBPACK_IMPORTED_MODULE_2___default())({
  clientID: "f479c4fb-992e-4995-bb7b-12aa6019f3af",
  redirectUri: "http://localhost:3000/list"
});

function UNSD() {
  const {
    0: Uauth,
    1: setUauth
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  async function Connect() {
    try {
      const authorization = await uauth.loginWithPopup();
      setUauth(JSON.parse(JSON.stringify(authorization))["idToken"]);
      await authenticate();
    } catch (error) {
      console.error(error);
    }
  }

  async function logOut() {
    uauth.logout();
    logout();
  }

  function log() {
    if (Uauth === null || Uauth === undefined) {
      Connect();
    } else {
      logOut();
    }
  }

  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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

/* harmony default export */ __webpack_exports__["default"] = (UNSD);

/***/ }),

/***/ "./components/head.tsx":
/*!*****************************!*\
  !*** ./components/head.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_env_vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/env-vars */ "./utils/env-vars.ts");

var _jsxFileName = "D:\\c1\\DragVerse\\components\\head.tsx";



const Head = ({
  title,
  description,
  url,
  ogImage
}) => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
  children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    charSet: "UTF-8"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
    children: title ? `${_utils_env_vars__WEBPACK_IMPORTED_MODULE_2__.APP_TITLE} | ${title}` : _utils_env_vars__WEBPACK_IMPORTED_MODULE_2__.APP_TITLE
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "description",
    content: description || _utils_env_vars__WEBPACK_IMPORTED_MODULE_2__.APP_DESCRIPTION
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
    rel: "icon",
    type: "image/png",
    sizes: "24x24",
    href: _utils_env_vars__WEBPACK_IMPORTED_MODULE_2__.FAVICON
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    property: "og:url",
    content: url || _utils_env_vars__WEBPACK_IMPORTED_MODULE_2__.BASE_URL
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    property: "og:title",
    content: title || ''
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    property: "og:description",
    content: description || _utils_env_vars__WEBPACK_IMPORTED_MODULE_2__.APP_DESCRIPTION
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "twitter:site",
    content: url || _utils_env_vars__WEBPACK_IMPORTED_MODULE_2__.BASE_URL
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    name: "twitter:image",
    content: ogImage || _utils_env_vars__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_OG_CARD
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    property: "og:image",
    content: ogImage || _utils_env_vars__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_OG_CARD
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    property: "og:image:width",
    content: "1200"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
    property: "og:image:height",
    content: "630"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 21,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./pages/list.tsx":
/*!************************!*\
  !*** ./pages/list.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ List; }
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UNSD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UNSD */ "./components/UNSD.jsx");
/* harmony import */ var _zoralabs_manage_auction_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zoralabs/manage-auction-hooks */ "@zoralabs/manage-auction-hooks");
/* harmony import */ var _zoralabs_manage_auction_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_zoralabs_manage_auction_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zoralabs/nft-components */ "@zoralabs/nft-components");
/* harmony import */ var _zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _zoralabs_nft_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zoralabs/nft-hooks */ "@zoralabs/nft-hooks");
/* harmony import */ var _zoralabs_nft_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_zoralabs_nft_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _zoralabs_simple_wallet_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zoralabs/simple-wallet-provider */ "@zoralabs/simple-wallet-provider");
/* harmony import */ var _zoralabs_simple_wallet_provider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_zoralabs_simple_wallet_provider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_env_vars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/env-vars */ "./utils/env-vars.ts");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/head */ "./components/head.tsx");
/* harmony import */ var _styles_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../styles/components */ "./styles/components.tsx");



var _jsxFileName = "D:\\c1\\DragVerse\\pages\\list.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }












const ListItemComponent = () => {
  var _data$pricing$reserve, _data$pricing$reserve2;

  const {
    nft: {
      data
    }
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_4__.NFTDataContext);
  const {
    openManageAuction,
    openListAuction
  } = (0,_zoralabs_manage_auction_hooks__WEBPACK_IMPORTED_MODULE_3__.useManageAuction)();

  if (!data || !data.nft) {
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }, undefined);
  }

  if (((_data$pricing$reserve = data.pricing.reserve) === null || _data$pricing$reserve === void 0 ? void 0 : _data$pricing$reserve.status) === "Active" || ((_data$pricing$reserve2 = data.pricing.reserve) === null || _data$pricing$reserve2 === void 0 ? void 0 : _data$pricing$reserve2.status) === "Pending") {
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "button",
      onClick: () => {
        var _data$pricing$reserve3;

        const reserveId = (_data$pricing$reserve3 = data.pricing.reserve) === null || _data$pricing$reserve3 === void 0 ? void 0 : _data$pricing$reserve3.id;

        if (reserveId) {
          openManageAuction(parseInt(reserveId, 10));
        }
      },
      children: "Manage"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined);
  }

  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    onClick: () => {
      openListAuction(data.nft.contract.address, data.nft.tokenId);
    },
    className: "button",
    children: "List"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, undefined);
};

const ConnectWallet = () => {
  const {
    buttonAction,
    actionText,
    connectedInfo
  } = (0,_zoralabs_simple_wallet_provider__WEBPACK_IMPORTED_MODULE_6__.useWalletButton)();
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: `${connectedInfo === undefined ? "To List your NFT Connect your wallet!" : connectedInfo}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "button",
        onClick: () => buttonAction(),
        children: actionText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UNSD__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined);
};

const RenderOwnedList = ({
  account
}) => {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_8___default()(`/api/ownedItems?owner=${account}`, url => fetch(url).then(res => res.json()));

  if (!data) {
    // loading
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 12
    }, undefined);
  }

  if (error) {
    // error
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 12
    }, undefined);
  }

  if (data.tokens.length === 0) {
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "owned-list-no-tokens",
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "We couldn\u2019t find any NFTs you own \uD83D\uDE22"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Make sure you\u2019ve connected the correct wallet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined);
  }

  return data.tokens.map(token => {
    const tokenInfo = _zoralabs_nft_hooks__WEBPACK_IMPORTED_MODULE_5__.FetchStaticData.getIndexerServerTokenInfo(token);
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_4__.NFTPreview, {
      id: tokenInfo.tokenId,
      contract: tokenInfo.tokenContract,
      initialData: token,
      useBetaIndexer: true,
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "owned-list-item",
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_4__.PreviewComponents.MediaThumbnail, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "list-component-wrapper",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItemComponent, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined)
    }, `${tokenInfo.tokenContract}-${tokenInfo.tokenId}`, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, undefined);
  });
};

const MediaThumbnailPreview = ({
  tokenContract,
  tokenId
}) => {
  return (// TODO(iain): Fix indexer in this use case
    (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_4__.NFTPreview, {
      id: tokenId,
      contract: tokenContract,
      useBetaIndexer: true,
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "owned-list-item",
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_4__.PreviewComponents.MediaThumbnail, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 9
        }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "list-component-wrapper",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItemComponent, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }, undefined)
  );
};

function List() {
  const {
    active,
    account
  } = (0,_zoralabs_simple_wallet_provider__WEBPACK_IMPORTED_MODULE_6__.useWeb3Wallet)();
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_head__WEBPACK_IMPORTED_MODULE_10__.default, {
      title: "List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_zoralabs_manage_auction_hooks__WEBPACK_IMPORTED_MODULE_3__.AuctionManager, {
      renderMedia: MediaThumbnailPreview,
      strings: {
        LIST_MEDIA_HEADER: "List your NFT",
        LIST_MEDIA_DESCRIPTION: `Set the reserve price to list your NFT on ${_utils_env_vars__WEBPACK_IMPORTED_MODULE_9__.APP_TITLE}`
      },
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListWrapper, {
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectWallet, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this), account && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "owned-list",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RenderOwnedList, {
            account: account
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

const ListWrapper = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(_styles_components__WEBPACK_IMPORTED_MODULE_11__.PageWrapper,  false ? 0 : {
  target: "elwabre0",
  label: "ListWrapper"
})( false ? 0 : {
  name: "17vfm80",
  styles: "max-width:var(--content-width-lg);.owned-list{padding-top:var(--space-md);display:flex;flex-wrap:wrap;justify-content:center;}.owned-list-no-tokens{text-align:center;padding-top:var(--space-sm);}.list-component-wrapper{padding:var(--base-unit) 0;border-top:var(--border-light);}.thumbnail-manage-button{margin:0 auto var(--space-sm)!important;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjMVxcRHJhZ1ZlcnNlXFxwYWdlc1xcbGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUx1QyIsImZpbGUiOiJEOlxcYzFcXERyYWdWZXJzZVxccGFnZXNcXGxpc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBVTlNEIGZyb20gXCIuLi9jb21wb25lbnRzL1VOU0RcIjtcclxuaW1wb3J0IHtcclxuICBBdWN0aW9uTWFuYWdlcixcclxuICB1c2VNYW5hZ2VBdWN0aW9uLFxyXG59IGZyb20gXCJAem9yYWxhYnMvbWFuYWdlLWF1Y3Rpb24taG9va3NcIjtcclxuaW1wb3J0IHtcclxuICBORlREYXRhQ29udGV4dCxcclxuICBORlRQcmV2aWV3LFxyXG4gIFByZXZpZXdDb21wb25lbnRzLFxyXG59IGZyb20gXCJAem9yYWxhYnMvbmZ0LWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgRmV0Y2hTdGF0aWNEYXRhIH0gZnJvbSBcIkB6b3JhbGFicy9uZnQtaG9va3NcIjtcclxuaW1wb3J0IHtcclxuICB1c2VXYWxsZXRCdXR0b24sXHJcbiAgdXNlV2ViM1dhbGxldCxcclxufSBmcm9tIFwiQHpvcmFsYWJzL3NpbXBsZS13YWxsZXQtcHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB7IEFQUF9USVRMRSB9IGZyb20gXCIuLi91dGlscy9lbnYtdmFyc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XHJcbmltcG9ydCB7IFBhZ2VXcmFwcGVyIH0gZnJvbSBcIi4vLi4vc3R5bGVzL2NvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IExpc3RJdGVtQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG5mdDogeyBkYXRhIH0sXHJcbiAgfSA9IHVzZUNvbnRleHQoTkZURGF0YUNvbnRleHQpO1xyXG5cclxuICBjb25zdCB7IG9wZW5NYW5hZ2VBdWN0aW9uLCBvcGVuTGlzdEF1Y3Rpb24gfSA9IHVzZU1hbmFnZUF1Y3Rpb24oKTtcclxuXHJcbiAgaWYgKCFkYXRhIHx8ICFkYXRhLm5mdCkge1xyXG4gICAgcmV0dXJuIDxGcmFnbWVudCAvPjtcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIGRhdGEucHJpY2luZy5yZXNlcnZlPy5zdGF0dXMgPT09IFwiQWN0aXZlXCIgfHxcclxuICAgIGRhdGEucHJpY2luZy5yZXNlcnZlPy5zdGF0dXMgPT09IFwiUGVuZGluZ1wiXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNlcnZlSWQgPSBkYXRhLnByaWNpbmcucmVzZXJ2ZT8uaWQ7XHJcbiAgICAgICAgICBpZiAocmVzZXJ2ZUlkKSB7XHJcbiAgICAgICAgICAgIG9wZW5NYW5hZ2VBdWN0aW9uKHBhcnNlSW50KHJlc2VydmVJZCwgMTApKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgTWFuYWdlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBvcGVuTGlzdEF1Y3Rpb24oZGF0YS5uZnQuY29udHJhY3QuYWRkcmVzcywgZGF0YS5uZnQudG9rZW5JZCk7XHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICA+XHJcbiAgICAgIExpc3RcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDb25uZWN0V2FsbGV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYnV0dG9uQWN0aW9uLCBhY3Rpb25UZXh0LCBjb25uZWN0ZWRJbmZvIH0gPSB1c2VXYWxsZXRCdXR0b24oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT57YCR7XHJcbiAgICAgICAgY29ubmVjdGVkSW5mbyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IFwiVG8gTGlzdCB5b3VyIE5GVCBDb25uZWN0IHlvdXIgd2FsbGV0IVwiXHJcbiAgICAgICAgICA6IGNvbm5lY3RlZEluZm9cclxuICAgICAgICB9YH08L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gYnV0dG9uQWN0aW9uKCl9PlxyXG4gICAgICAgIHthY3Rpb25UZXh0fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPFVOU0QvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSZW5kZXJPd25lZExpc3QgPSAoeyBhY2NvdW50IH06IHsgYWNjb3VudDogc3RyaW5nIH0pID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBgL2FwaS9vd25lZEl0ZW1zP293bmVyPSR7YWNjb3VudH1gLFxyXG4gICAgKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICApO1xyXG5cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIC8vIGxvYWRpbmdcclxuICAgIHJldHVybiA8RnJhZ21lbnQgLz47XHJcbiAgfVxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgLy8gZXJyb3JcclxuICAgIHJldHVybiA8RnJhZ21lbnQgLz47XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YS50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVkLWxpc3Qtbm8tdG9rZW5zXCI+XHJcbiAgICAgICAgPGgyPldlIGNvdWxkbuKAmXQgZmluZCBhbnkgTkZUcyB5b3Ugb3duIPCfmKI8L2gyPlxyXG4gICAgICAgIDxwPk1ha2Ugc3VyZSB5b3XigJl2ZSBjb25uZWN0ZWQgdGhlIGNvcnJlY3Qgd2FsbGV0PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0YS50b2tlbnMubWFwKCh0b2tlbjogYW55KSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbkluZm8gPSBGZXRjaFN0YXRpY0RhdGEuZ2V0SW5kZXhlclNlcnZlclRva2VuSW5mbyh0b2tlbik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TkZUUHJldmlld1xyXG4gICAgICAgIGlkPXt0b2tlbkluZm8udG9rZW5JZH1cclxuICAgICAgICBjb250cmFjdD17dG9rZW5JbmZvLnRva2VuQ29udHJhY3R9XHJcbiAgICAgICAgaW5pdGlhbERhdGE9e3Rva2VufVxyXG4gICAgICAgIHVzZUJldGFJbmRleGVyPXt0cnVlfVxyXG4gICAgICAgIGtleT17YCR7dG9rZW5JbmZvLnRva2VuQ29udHJhY3R9LSR7dG9rZW5JbmZvLnRva2VuSWR9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZWQtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICA8UHJldmlld0NvbXBvbmVudHMuTWVkaWFUaHVtYm5haWwgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb21wb25lbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05GVFByZXZpZXc+XHJcbiAgICApO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgTWVkaWFUaHVtYm5haWxQcmV2aWV3ID0gKHtcclxuICB0b2tlbkNvbnRyYWN0LFxyXG4gIHRva2VuSWQsXHJcbn06IHtcclxuICB0b2tlbkNvbnRyYWN0OiBzdHJpbmc7XHJcbiAgdG9rZW5JZDogc3RyaW5nO1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIFRPRE8oaWFpbik6IEZpeCBpbmRleGVyIGluIHRoaXMgdXNlIGNhc2VcclxuICAgIDxORlRQcmV2aWV3XHJcbiAgICAgIGlkPXt0b2tlbklkfVxyXG4gICAgICBjb250cmFjdD17dG9rZW5Db250cmFjdH1cclxuICAgICAgdXNlQmV0YUluZGV4ZXI9e3RydWV9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZWQtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgPFByZXZpZXdDb21wb25lbnRzLk1lZGlhVGh1bWJuYWlsIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbXBvbmVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L05GVFByZXZpZXc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoKSB7XHJcbiAgY29uc3QgeyBhY3RpdmUsIGFjY291bnQgfSA9IHVzZVdlYjNXYWxsZXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQgdGl0bGU9XCJMaXN0XCIgLz5cclxuICAgICAgPEF1Y3Rpb25NYW5hZ2VyXHJcbiAgICAgICAgcmVuZGVyTWVkaWE9e01lZGlhVGh1bWJuYWlsUHJldmlld31cclxuICAgICAgICBzdHJpbmdzPXt7XHJcbiAgICAgICAgICBMSVNUX01FRElBX0hFQURFUjogXCJMaXN0IHlvdXIgTkZUXCIsXHJcbiAgICAgICAgICBMSVNUX01FRElBX0RFU0NSSVBUSU9OOiBgU2V0IHRoZSByZXNlcnZlIHByaWNlIHRvIGxpc3QgeW91ciBORlQgb24gJHtBUFBfVElUTEV9YCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3RXcmFwcGVyPlxyXG4gICAgICAgICAgPENvbm5lY3RXYWxsZXQgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2FjY291bnQgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lZC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPFJlbmRlck93bmVkTGlzdCBhY2NvdW50PXthY2NvdW50fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3RXcmFwcGVyPlxyXG4gICAgICAgIFxyXG4gICAgICA8L0F1Y3Rpb25NYW5hZ2VyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTGlzdFdyYXBwZXIgPSBzdHlsZWQoUGFnZVdyYXBwZXIpYFxyXG4gIG1heC13aWR0aDogdmFyKC0tY29udGVudC13aWR0aC1sZyk7XHJcbiAgLm93bmVkLWxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLW1kKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLm93bmVkLWxpc3Qtbm8tdG9rZW5zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgfVxyXG4gIC5saXN0LWNvbXBvbmVudC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLWJhc2UtdW5pdCkgMDtcclxuICAgIGJvcmRlci10b3A6IHZhcigtLWJvcmRlci1saWdodCk7XHJcbiAgfVxyXG4gIC50aHVtYm5haWwtbWFuYWdlLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0byB2YXIoLS1zcGFjZS1zbSkhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

/***/ }),

/***/ "./styles/components.tsx":
/*!*******************************!*\
  !*** ./styles/components.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageWrapper": function() { return /* binding */ PageWrapper; }
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const PageWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("section",  false ? 0 : {
  target: "ei09kja0",
  label: "PageWrapper"
})( false ? 0 : {
  name: "15w3rja",
  styles: "margin:0 auto;width:100%;max-width:var(--content-width-md);position:relative;padding:var(--space-sm) var(--space-sm) var(--space-lg)",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjMVxcRHJhZ1ZlcnNlXFxzdHlsZXNcXGNvbXBvbmVudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUV5QyIsImZpbGUiOiJEOlxcYzFcXERyYWdWZXJzZVxcc3R5bGVzXFxjb21wb25lbnRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoLW1kKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzpcclxuICAgIHZhcigtLXNwYWNlLXNtKVxyXG4gICAgdmFyKC0tc3BhY2Utc20pXHJcbiAgICB2YXIoLS1zcGFjZS1sZyk7XHJcbmAiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react/jsx-dev-runtime");;

/***/ }),

/***/ "@emotion/styled/base":
/*!***************************************!*\
  !*** external "@emotion/styled/base" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/styled/base");;

/***/ }),

/***/ "@uauth/js":
/*!****************************!*\
  !*** external "@uauth/js" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("@uauth/js");;

/***/ }),

/***/ "@zoralabs/manage-auction-hooks":
/*!*************************************************!*\
  !*** external "@zoralabs/manage-auction-hooks" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@zoralabs/manage-auction-hooks");;

/***/ }),

/***/ "@zoralabs/nft-components":
/*!*******************************************!*\
  !*** external "@zoralabs/nft-components" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@zoralabs/nft-components");;

/***/ }),

/***/ "@zoralabs/nft-hooks":
/*!**************************************!*\
  !*** external "@zoralabs/nft-hooks" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@zoralabs/nft-hooks");;

/***/ }),

/***/ "@zoralabs/simple-wallet-provider":
/*!***************************************************!*\
  !*** external "@zoralabs/simple-wallet-provider" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@zoralabs/simple-wallet-provider");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["utils_env-vars_ts"], function() { return __webpack_exec__("./pages/list.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtYXVjdGlvbi1ob3VzZS8uL2NvbXBvbmVudHMvVU5TRC5qc3giLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvLi9jb21wb25lbnRzL2hlYWQudHN4Iiwid2VicGFjazovL2NyZWF0ZS1hdWN0aW9uLWhvdXNlLy4vcGFnZXMvbGlzdC50c3giLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvLi9zdHlsZXMvY29tcG9uZW50cy50c3giLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jcmVhdGUtYXVjdGlvbi1ob3VzZS9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZC9iYXNlXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvZXh0ZXJuYWwgXCJAdWF1dGgvanNcIiIsIndlYnBhY2s6Ly9jcmVhdGUtYXVjdGlvbi1ob3VzZS9leHRlcm5hbCBcIkB6b3JhbGFicy9tYW5hZ2UtYXVjdGlvbi1ob29rc1wiIiwid2VicGFjazovL2NyZWF0ZS1hdWN0aW9uLWhvdXNlL2V4dGVybmFsIFwiQHpvcmFsYWJzL25mdC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvZXh0ZXJuYWwgXCJAem9yYWxhYnMvbmZ0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvZXh0ZXJuYWwgXCJAem9yYWxhYnMvc2ltcGxlLXdhbGxldC1wcm92aWRlclwiIiwid2VicGFjazovL2NyZWF0ZS1hdWN0aW9uLWhvdXNlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NyZWF0ZS1hdWN0aW9uLWhvdXNlL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJ1YXV0aCIsIlVBdXRoIiwiY2xpZW50SUQiLCJyZWRpcmVjdFVyaSIsIlVOU0QiLCJVYXV0aCIsInNldFVhdXRoIiwidXNlU3RhdGUiLCJDb25uZWN0IiwiYXV0aG9yaXphdGlvbiIsImxvZ2luV2l0aFBvcHVwIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYXV0aGVudGljYXRlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nT3V0IiwibG9nb3V0IiwibG9nIiwidW5kZWZpbmVkIiwiSGVhZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJvZ0ltYWdlIiwiQVBQX1RJVExFIiwiQVBQX0RFU0NSSVBUSU9OIiwiRkFWSUNPTiIsIkJBU0VfVVJMIiwiREVGQVVMVF9PR19DQVJEIiwiTGlzdEl0ZW1Db21wb25lbnQiLCJuZnQiLCJkYXRhIiwidXNlQ29udGV4dCIsIk5GVERhdGFDb250ZXh0Iiwib3Blbk1hbmFnZUF1Y3Rpb24iLCJvcGVuTGlzdEF1Y3Rpb24iLCJ1c2VNYW5hZ2VBdWN0aW9uIiwicHJpY2luZyIsInJlc2VydmUiLCJzdGF0dXMiLCJyZXNlcnZlSWQiLCJpZCIsInBhcnNlSW50IiwiY29udHJhY3QiLCJhZGRyZXNzIiwidG9rZW5JZCIsIkNvbm5lY3RXYWxsZXQiLCJidXR0b25BY3Rpb24iLCJhY3Rpb25UZXh0IiwiY29ubmVjdGVkSW5mbyIsInVzZVdhbGxldEJ1dHRvbiIsIlJlbmRlck93bmVkTGlzdCIsImFjY291bnQiLCJ1c2VTV1IiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidG9rZW5zIiwibGVuZ3RoIiwibWFwIiwidG9rZW4iLCJ0b2tlbkluZm8iLCJGZXRjaFN0YXRpY0RhdGEiLCJ0b2tlbkNvbnRyYWN0IiwiTWVkaWFUaHVtYm5haWxQcmV2aWV3IiwiTGlzdCIsImFjdGl2ZSIsInVzZVdlYjNXYWxsZXQiLCJMSVNUX01FRElBX0hFQURFUiIs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WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgVUF1dGggZnJvbSBcIkB1YXV0aC9qc1wiXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxyXG5cclxuY29uc3QgdWF1dGggPSBuZXcgVUF1dGgoe1xyXG4gICAgY2xpZW50SUQ6IFwiZjQ3OWM0ZmItOTkyZS00OTk1LWJiN2ItMTJhYTYwMTlmM2FmXCIsXHJcbiAgICByZWRpcmVjdFVyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvbGlzdFwiLFxyXG59KVxyXG5cclxuZnVuY3Rpb24gVU5TRCgpIHtcclxuICAgIGNvbnN0IFtVYXV0aCwgc2V0VWF1dGhdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIENvbm5lY3QoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYXV0aG9yaXphdGlvbiA9IGF3YWl0IHVhdXRoLmxvZ2luV2l0aFBvcHVwKClcclxuICAgICAgICAgICAgc2V0VWF1dGgoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhdXRob3JpemF0aW9uKSlbXCJpZFRva2VuXCJdKVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgYXV0aGVudGljYXRlKClcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2dPdXQoKSB7XHJcbiAgICAgICAgdWF1dGgubG9nb3V0KClcclxuICAgICAgICBsb2dvdXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZygpIHtcclxuICAgICAgICBpZiAoVWF1dGggPT09IG51bGwgfHwgVWF1dGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBDb25uZWN0KClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2dPdXQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17bG9nfT5cclxuICAgICAgICAgICAgICAgIHtVYXV0aCAhPSBudWxsID8gVWF1dGhbXCJzdWJcIl0gOiBcIkxvZ2luIHdpdGggVU5TRFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVU5TRCIsImltcG9ydCBOZXh0SGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7XHJcbiAgQVBQX1RJVExFLFxyXG4gIEFQUF9ERVNDUklQVElPTixcclxuICBERUZBVUxUX09HX0NBUkQsXHJcbiAgRkFWSUNPTixcclxuICBCQVNFX1VSTFxyXG59IGZyb20gJy4uL3V0aWxzL2Vudi12YXJzJ1xyXG5cclxuY29uc3QgSGVhZCA9ICh7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgdXJsLFxyXG4gIG9nSW1hZ2UsXHJcbn06IHtcclxuICB0aXRsZT86IHN0cmluZ1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXHJcbiAgdXJsPzogc3RyaW5nXHJcbiAgb2dJbWFnZT86IHN0cmluZ1xyXG59KSA9PiAoXHJcbiAgPE5leHRIZWFkPlxyXG4gICAgPG1ldGEgY2hhclNldD0nVVRGLTgnIC8+XHJcbiAgICA8dGl0bGU+e3RpdGxlID8gYCR7QVBQX1RJVExFfSB8ICR7dGl0bGV9YCA6IEFQUF9USVRMRX08L3RpdGxlPlxyXG4gICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxyXG4gICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uIHx8IEFQUF9ERVNDUklQVElPTn0gLz5cclxuICAgIDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMjR4MjQnIGhyZWY9e0ZBVklDT059IC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dXJsJyBjb250ZW50PXt1cmwgfHwgQkFTRV9VUkx9IC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dGl0bGUnIGNvbnRlbnQ9e3RpdGxlIHx8ICcnfSAvPlxyXG4gICAgPG1ldGFcclxuICAgICAgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJ1xyXG4gICAgICBjb250ZW50PXtkZXNjcmlwdGlvbiB8fCBBUFBfREVTQ1JJUFRJT059XHJcbiAgICAvPlxyXG4gICAgPG1ldGEgbmFtZT0ndHdpdHRlcjpzaXRlJyBjb250ZW50PXt1cmwgfHwgQkFTRV9VUkx9IC8+XHJcbiAgICA8bWV0YSBuYW1lPSd0d2l0dGVyOmNhcmQnIGNvbnRlbnQ9J3N1bW1hcnlfbGFyZ2VfaW1hZ2UnIC8+XHJcbiAgICA8bWV0YSBuYW1lPSd0d2l0dGVyOmltYWdlJyBjb250ZW50PXtvZ0ltYWdlIHx8IERFRkFVTFRfT0dfQ0FSRH0gLz5cclxuICAgIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZScgY29udGVudD17b2dJbWFnZSB8fCBERUZBVUxUX09HX0NBUkR9IC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2U6d2lkdGgnIGNvbnRlbnQ9JzEyMDAnIC8+XHJcbiAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2U6aGVpZ2h0JyBjb250ZW50PSc2MzAnIC8+XHJcbiAgPC9OZXh0SGVhZD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZFxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuaW1wb3J0IFVOU0QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVU5TRFwiO1xyXG5pbXBvcnQge1xyXG4gIEF1Y3Rpb25NYW5hZ2VyLFxyXG4gIHVzZU1hbmFnZUF1Y3Rpb24sXHJcbn0gZnJvbSBcIkB6b3JhbGFicy9tYW5hZ2UtYXVjdGlvbi1ob29rc1wiO1xyXG5pbXBvcnQge1xyXG4gIE5GVERhdGFDb250ZXh0LFxyXG4gIE5GVFByZXZpZXcsXHJcbiAgUHJldmlld0NvbXBvbmVudHMsXHJcbn0gZnJvbSBcIkB6b3JhbGFicy9uZnQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBGZXRjaFN0YXRpY0RhdGEgfSBmcm9tIFwiQHpvcmFsYWJzL25mdC1ob29rc1wiO1xyXG5pbXBvcnQge1xyXG4gIHVzZVdhbGxldEJ1dHRvbixcclxuICB1c2VXZWIzV2FsbGV0LFxyXG59IGZyb20gXCJAem9yYWxhYnMvc2ltcGxlLXdhbGxldC1wcm92aWRlclwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgQVBQX1RJVExFIH0gZnJvbSBcIi4uL3V0aWxzL2Vudi12YXJzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRcIjtcclxuaW1wb3J0IHsgUGFnZVdyYXBwZXIgfSBmcm9tIFwiLi8uLi9zdHlsZXMvY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgTGlzdEl0ZW1Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbmZ0OiB7IGRhdGEgfSxcclxuICB9ID0gdXNlQ29udGV4dChORlREYXRhQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHsgb3Blbk1hbmFnZUF1Y3Rpb24sIG9wZW5MaXN0QXVjdGlvbiB9ID0gdXNlTWFuYWdlQXVjdGlvbigpO1xyXG5cclxuICBpZiAoIWRhdGEgfHwgIWRhdGEubmZ0KSB7XHJcbiAgICByZXR1cm4gPEZyYWdtZW50IC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgZGF0YS5wcmljaW5nLnJlc2VydmU/LnN0YXR1cyA9PT0gXCJBY3RpdmVcIiB8fFxyXG4gICAgZGF0YS5wcmljaW5nLnJlc2VydmU/LnN0YXR1cyA9PT0gXCJQZW5kaW5nXCJcclxuICApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc2VydmVJZCA9IGRhdGEucHJpY2luZy5yZXNlcnZlPy5pZDtcclxuICAgICAgICAgIGlmIChyZXNlcnZlSWQpIHtcclxuICAgICAgICAgICAgb3Blbk1hbmFnZUF1Y3Rpb24ocGFyc2VJbnQocmVzZXJ2ZUlkLCAxMCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBNYW5hZ2VcclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIG9wZW5MaXN0QXVjdGlvbihkYXRhLm5mdC5jb250cmFjdC5hZGRyZXNzLCBkYXRhLm5mdC50b2tlbklkKTtcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgID5cclxuICAgICAgTGlzdFxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbm5lY3RXYWxsZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBidXR0b25BY3Rpb24sIGFjdGlvblRleHQsIGNvbm5lY3RlZEluZm8gfSA9IHVzZVdhbGxldEJ1dHRvbigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPntgJHtcclxuICAgICAgICBjb25uZWN0ZWRJbmZvID09PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gXCJUbyBMaXN0IHlvdXIgTkZUIENvbm5lY3QgeW91ciB3YWxsZXQhXCJcclxuICAgICAgICAgIDogY29ubmVjdGVkSW5mb1xyXG4gICAgICAgIH1gfTwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBidXR0b25BY3Rpb24oKX0+XHJcbiAgICAgICAge2FjdGlvblRleHR9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8VU5TRC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJlbmRlck93bmVkTGlzdCA9ICh7IGFjY291bnQgfTogeyBhY2NvdW50OiBzdHJpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGAvYXBpL293bmVkSXRlbXM/b3duZXI9JHthY2NvdW50fWAsXHJcbiAgICAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICk7XHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgLy8gbG9hZGluZ1xyXG4gICAgcmV0dXJuIDxGcmFnbWVudCAvPjtcclxuICB9XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICAvLyBlcnJvclxyXG4gICAgcmV0dXJuIDxGcmFnbWVudCAvPjtcclxuICB9XHJcblxyXG4gIGlmIChkYXRhLnRva2Vucy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZWQtbGlzdC1uby10b2tlbnNcIj5cclxuICAgICAgICA8aDI+V2UgY291bGRu4oCZdCBmaW5kIGFueSBORlRzIHlvdSBvd24g8J+YojwvaDI+XHJcbiAgICAgICAgPHA+TWFrZSBzdXJlIHlvdeKAmXZlIGNvbm5lY3RlZCB0aGUgY29ycmVjdCB3YWxsZXQ8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhLnRva2Vucy5tYXAoKHRva2VuOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHRva2VuSW5mbyA9IEZldGNoU3RhdGljRGF0YS5nZXRJbmRleGVyU2VydmVyVG9rZW5JbmZvKHRva2VuKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxORlRQcmV2aWV3XHJcbiAgICAgICAgaWQ9e3Rva2VuSW5mby50b2tlbklkfVxyXG4gICAgICAgIGNvbnRyYWN0PXt0b2tlbkluZm8udG9rZW5Db250cmFjdH1cclxuICAgICAgICBpbml0aWFsRGF0YT17dG9rZW59XHJcbiAgICAgICAgdXNlQmV0YUluZGV4ZXI9e3RydWV9XHJcbiAgICAgICAga2V5PXtgJHt0b2tlbkluZm8udG9rZW5Db250cmFjdH0tJHt0b2tlbkluZm8udG9rZW5JZH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lZC1saXN0LWl0ZW1cIj5cclxuICAgICAgICAgIDxQcmV2aWV3Q29tcG9uZW50cy5NZWRpYVRodW1ibmFpbCAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbXBvbmVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTkZUUHJldmlldz5cclxuICAgICk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBNZWRpYVRodW1ibmFpbFByZXZpZXcgPSAoe1xyXG4gIHRva2VuQ29udHJhY3QsXHJcbiAgdG9rZW5JZCxcclxufToge1xyXG4gIHRva2VuQ29udHJhY3Q6IHN0cmluZztcclxuICB0b2tlbklkOiBzdHJpbmc7XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgLy8gVE9ETyhpYWluKTogRml4IGluZGV4ZXIgaW4gdGhpcyB1c2UgY2FzZVxyXG4gICAgPE5GVFByZXZpZXdcclxuICAgICAgaWQ9e3Rva2VuSWR9XHJcbiAgICAgIGNvbnRyYWN0PXt0b2tlbkNvbnRyYWN0fVxyXG4gICAgICB1c2VCZXRhSW5kZXhlcj17dHJ1ZX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lZC1saXN0LWl0ZW1cIj5cclxuICAgICAgICA8UHJldmlld0NvbXBvbmVudHMuTWVkaWFUaHVtYm5haWwgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtY29tcG9uZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxMaXN0SXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTkZUUHJldmlldz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCgpIHtcclxuICBjb25zdCB7IGFjdGl2ZSwgYWNjb3VudCB9ID0gdXNlV2ViM1dhbGxldCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZCB0aXRsZT1cIkxpc3RcIiAvPlxyXG4gICAgICA8QXVjdGlvbk1hbmFnZXJcclxuICAgICAgICByZW5kZXJNZWRpYT17TWVkaWFUaHVtYm5haWxQcmV2aWV3fVxyXG4gICAgICAgIHN0cmluZ3M9e3tcclxuICAgICAgICAgIExJU1RfTUVESUFfSEVBREVSOiBcIkxpc3QgeW91ciBORlRcIixcclxuICAgICAgICAgIExJU1RfTUVESUFfREVTQ1JJUFRJT046IGBTZXQgdGhlIHJlc2VydmUgcHJpY2UgdG8gbGlzdCB5b3VyIE5GVCBvbiAke0FQUF9USVRMRX1gLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdFdyYXBwZXI+XHJcbiAgICAgICAgICA8Q29ubmVjdFdhbGxldCAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7YWNjb3VudCAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVkLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8UmVuZGVyT3duZWRMaXN0IGFjY291bnQ9e2FjY291bnR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvTGlzdFdyYXBwZXI+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvQXVjdGlvbk1hbmFnZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBMaXN0V3JhcHBlciA9IHN0eWxlZChQYWdlV3JhcHBlcilgXHJcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoLWxnKTtcclxuICAub3duZWQtbGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2UtbWQpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAub3duZWQtbGlzdC1uby10b2tlbnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLXNtKTtcclxuICB9XHJcbiAgLmxpc3QtY29tcG9uZW50LXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogdmFyKC0tYmFzZS11bml0KSAwO1xyXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tYm9yZGVyLWxpZ2h0KTtcclxuICB9XHJcbiAgLnRodW1ibmFpbC1tYW5hZ2UtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIHZhcigtLXNwYWNlLXNtKSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogdmFyKC0tY29udGVudC13aWR0aC1tZCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6XHJcbiAgICB2YXIoLS1zcGFjZS1zbSlcclxuICAgIHZhcigtLXNwYWNlLXNtKVxyXG4gICAgdmFyKC0tc3BhY2UtbGcpO1xyXG5gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWQvYmFzZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVhdXRoL2pzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAem9yYWxhYnMvbWFuYWdlLWF1Y3Rpb24taG9va3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB6b3JhbGFicy9uZnQtY29tcG9uZW50c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHpvcmFsYWJzL25mdC1ob29rc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHpvcmFsYWJzL3NpbXBsZS13YWxsZXQtcHJvdmlkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9