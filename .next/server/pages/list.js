(function() {
var exports = {};
exports.id = "pages/list";
exports.ids = ["pages/list"];
exports.modules = {

/***/ "./components/Resolution.tsx":
/*!***********************************!*\
  !*** ./components/Resolution.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\c1\\DragVerse\\components\\Resolution.tsx";



function Resolution() {
  const API_URL = "https://unstoppabledomains.g.alchemy.com/domains/";
  const API_KEY1 = "OPnt5xBjF7t5cIhhqwpZ42iXOoqCut_-";
  const {
    0: stats,
    1: setStats
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  function processLookup(e) {
    e.preventDefault();
    let domain = document.getElementById("domain").value;
    if (!domain) return;
    axios__WEBPACK_IMPORTED_MODULE_2___default().get(API_URL + domain, {
      headers: {
        Authorization: `bearer ${API_KEY1}`
      }
    }).then(res => {
      setStats(res.data);
      console.log(res.data);
    }).catch(err => {
      setStats();
    });
  }

  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-col px-24 relative justify-center items-center",
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " bg-[#0f172a4d] rounded-3xl p-7 mt-6 ",
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Domain "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          id: "domain",
          type: "text",
          placeholder: "Enter a domain name",
          "aria-label": "Enter a domain name",
          "aria-describedby": "button-addon",
          autoComplete: "off",
          className: " mt-5 border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[600px]"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex mt-5",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "font-roboto text-white border-2 px-[60px] py-2 border-[#22C55E] hover:bg-[#22C55E] mb-10",
            onClick: processLookup,
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "",
          children: stats ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
              children: ["Domain Name - ", stats.meta.domain]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
              children: ["Owned by - ", stats.meta.owner]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
              children: ["Blockchain - ", stats.meta.blockchain]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: stats.records["ipfs.redirect_domain.value"] ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                children: ["Website - ", stats.records["ipfs.redirect_domain.value"]]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 21
              }, this) : (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                  children: "No Website found"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                children: "Blockchain addresses in the domain"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: stats.records["crypto.ETH.address"] ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                  children: ["ETH Address : ", stats.records["crypto.ETH.address"]]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 23
                }, this) : (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                    children: "No ETH address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: stats.records["crypto.MATIC.version.MATIC.address"] ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                  children: ["MATIC Address :", " ", stats.records["crypto.MATIC.version.MATIC.address"]]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 23
                }, this) : (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                    children: "No Matic address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 19
              }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "font-roboto  mt-3 px-[60px] py-2 border-gradient-1  mb-10",
                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "contactlink",
                  target: "_blank",
                  href: `${stats.records["ipfs.redirect_domain.value"]}`,
                  rel: "noreferrer",
                  children: "Website"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, this) : (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Resolution);

/***/ }),

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
/* harmony import */ var _components_Resolution__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Resolution */ "./components/Resolution.tsx");



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
      lineNumber: 32,
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
      lineNumber: 40,
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
    lineNumber: 55,
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
      lineNumber: 71,
      columnNumber: 7
    }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "button",
        onClick: () => buttonAction(),
        children: actionText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UNSD__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Resolution__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
      lineNumber: 96,
      columnNumber: 12
    }, undefined);
  }

  if (error) {
    // error
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
        lineNumber: 106,
        columnNumber: 9
      }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Make sure you\u2019ve connected the correct wallet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
          lineNumber: 123,
          columnNumber: 11
        }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "list-component-wrapper",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItemComponent, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined)
    }, `${tokenInfo.tokenContract}-${tokenInfo.tokenId}`, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
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
          lineNumber: 148,
          columnNumber: 9
        }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "list-component-wrapper",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItemComponent, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
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
      lineNumber: 161,
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
          lineNumber: 170,
          columnNumber: 11
        }, this), account && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "owned-list",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RenderOwnedList, {
            account: account
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjMVxcRHJhZ1ZlcnNlXFxwYWdlc1xcbGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUx1QyIsImZpbGUiOiJEOlxcYzFcXERyYWdWZXJzZVxccGFnZXNcXGxpc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBVTlNEIGZyb20gXCIuLi9jb21wb25lbnRzL1VOU0RcIjtcclxuaW1wb3J0IHtcclxuICBBdWN0aW9uTWFuYWdlcixcclxuICB1c2VNYW5hZ2VBdWN0aW9uLFxyXG59IGZyb20gXCJAem9yYWxhYnMvbWFuYWdlLWF1Y3Rpb24taG9va3NcIjtcclxuaW1wb3J0IHtcclxuICBORlREYXRhQ29udGV4dCxcclxuICBORlRQcmV2aWV3LFxyXG4gIFByZXZpZXdDb21wb25lbnRzLFxyXG59IGZyb20gXCJAem9yYWxhYnMvbmZ0LWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgRmV0Y2hTdGF0aWNEYXRhIH0gZnJvbSBcIkB6b3JhbGFicy9uZnQtaG9va3NcIjtcclxuaW1wb3J0IHtcclxuICB1c2VXYWxsZXRCdXR0b24sXHJcbiAgdXNlV2ViM1dhbGxldCxcclxufSBmcm9tIFwiQHpvcmFsYWJzL3NpbXBsZS13YWxsZXQtcHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB7IEFQUF9USVRMRSB9IGZyb20gXCIuLi91dGlscy9lbnYtdmFyc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XHJcbmltcG9ydCB7IFBhZ2VXcmFwcGVyIH0gZnJvbSBcIi4vLi4vc3R5bGVzL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlc29sdXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVzb2x1dGlvblwiO1xyXG5cclxuY29uc3QgTGlzdEl0ZW1Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbmZ0OiB7IGRhdGEgfSxcclxuICB9ID0gdXNlQ29udGV4dChORlREYXRhQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHsgb3Blbk1hbmFnZUF1Y3Rpb24sIG9wZW5MaXN0QXVjdGlvbiB9ID0gdXNlTWFuYWdlQXVjdGlvbigpO1xyXG5cclxuICBpZiAoIWRhdGEgfHwgIWRhdGEubmZ0KSB7XHJcbiAgICByZXR1cm4gPEZyYWdtZW50IC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgZGF0YS5wcmljaW5nLnJlc2VydmU/LnN0YXR1cyA9PT0gXCJBY3RpdmVcIiB8fFxyXG4gICAgZGF0YS5wcmljaW5nLnJlc2VydmU/LnN0YXR1cyA9PT0gXCJQZW5kaW5nXCJcclxuICApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc2VydmVJZCA9IGRhdGEucHJpY2luZy5yZXNlcnZlPy5pZDtcclxuICAgICAgICAgIGlmIChyZXNlcnZlSWQpIHtcclxuICAgICAgICAgICAgb3Blbk1hbmFnZUF1Y3Rpb24ocGFyc2VJbnQocmVzZXJ2ZUlkLCAxMCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBNYW5hZ2VcclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIG9wZW5MaXN0QXVjdGlvbihkYXRhLm5mdC5jb250cmFjdC5hZGRyZXNzLCBkYXRhLm5mdC50b2tlbklkKTtcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgID5cclxuICAgICAgTGlzdFxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbm5lY3RXYWxsZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBidXR0b25BY3Rpb24sIGFjdGlvblRleHQsIGNvbm5lY3RlZEluZm8gfSA9IHVzZVdhbGxldEJ1dHRvbigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPntgJHtcclxuICAgICAgICBjb25uZWN0ZWRJbmZvID09PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gXCJUbyBMaXN0IHlvdXIgTkZUIENvbm5lY3QgeW91ciB3YWxsZXQhXCJcclxuICAgICAgICAgIDogY29ubmVjdGVkSW5mb1xyXG4gICAgICAgIH1gfTwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBidXR0b25BY3Rpb24oKX0+XHJcbiAgICAgICAge2FjdGlvblRleHR9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxVTlNEIC8+XHJcbiAgICAgICAgPFJlc29sdXRpb24vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSZW5kZXJPd25lZExpc3QgPSAoeyBhY2NvdW50IH06IHsgYWNjb3VudDogc3RyaW5nIH0pID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBgL2FwaS9vd25lZEl0ZW1zP293bmVyPSR7YWNjb3VudH1gLFxyXG4gICAgKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICApO1xyXG5cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIC8vIGxvYWRpbmdcclxuICAgIHJldHVybiA8RnJhZ21lbnQgLz47XHJcbiAgfVxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgLy8gZXJyb3JcclxuICAgIHJldHVybiA8RnJhZ21lbnQgLz47XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YS50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVkLWxpc3Qtbm8tdG9rZW5zXCI+XHJcbiAgICAgICAgPGgyPldlIGNvdWxkbuKAmXQgZmluZCBhbnkgTkZUcyB5b3Ugb3duIPCfmKI8L2gyPlxyXG4gICAgICAgIDxwPk1ha2Ugc3VyZSB5b3XigJl2ZSBjb25uZWN0ZWQgdGhlIGNvcnJlY3Qgd2FsbGV0PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0YS50b2tlbnMubWFwKCh0b2tlbjogYW55KSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbkluZm8gPSBGZXRjaFN0YXRpY0RhdGEuZ2V0SW5kZXhlclNlcnZlclRva2VuSW5mbyh0b2tlbik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TkZUUHJldmlld1xyXG4gICAgICAgIGlkPXt0b2tlbkluZm8udG9rZW5JZH1cclxuICAgICAgICBjb250cmFjdD17dG9rZW5JbmZvLnRva2VuQ29udHJhY3R9XHJcbiAgICAgICAgaW5pdGlhbERhdGE9e3Rva2VufVxyXG4gICAgICAgIHVzZUJldGFJbmRleGVyPXt0cnVlfVxyXG4gICAgICAgIGtleT17YCR7dG9rZW5JbmZvLnRva2VuQ29udHJhY3R9LSR7dG9rZW5JbmZvLnRva2VuSWR9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZWQtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICA8UHJldmlld0NvbXBvbmVudHMuTWVkaWFUaHVtYm5haWwgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb21wb25lbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05GVFByZXZpZXc+XHJcbiAgICApO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgTWVkaWFUaHVtYm5haWxQcmV2aWV3ID0gKHtcclxuICB0b2tlbkNvbnRyYWN0LFxyXG4gIHRva2VuSWQsXHJcbn06IHtcclxuICB0b2tlbkNvbnRyYWN0OiBzdHJpbmc7XHJcbiAgdG9rZW5JZDogc3RyaW5nO1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIFRPRE8oaWFpbik6IEZpeCBpbmRleGVyIGluIHRoaXMgdXNlIGNhc2VcclxuICAgIDxORlRQcmV2aWV3XHJcbiAgICAgIGlkPXt0b2tlbklkfVxyXG4gICAgICBjb250cmFjdD17dG9rZW5Db250cmFjdH1cclxuICAgICAgdXNlQmV0YUluZGV4ZXI9e3RydWV9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZWQtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgPFByZXZpZXdDb21wb25lbnRzLk1lZGlhVGh1bWJuYWlsIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbXBvbmVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L05GVFByZXZpZXc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoKSB7XHJcbiAgY29uc3QgeyBhY3RpdmUsIGFjY291bnQgfSA9IHVzZVdlYjNXYWxsZXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQgdGl0bGU9XCJMaXN0XCIgLz5cclxuICAgICAgPEF1Y3Rpb25NYW5hZ2VyXHJcbiAgICAgICAgcmVuZGVyTWVkaWE9e01lZGlhVGh1bWJuYWlsUHJldmlld31cclxuICAgICAgICBzdHJpbmdzPXt7XHJcbiAgICAgICAgICBMSVNUX01FRElBX0hFQURFUjogXCJMaXN0IHlvdXIgTkZUXCIsXHJcbiAgICAgICAgICBMSVNUX01FRElBX0RFU0NSSVBUSU9OOiBgU2V0IHRoZSByZXNlcnZlIHByaWNlIHRvIGxpc3QgeW91ciBORlQgb24gJHtBUFBfVElUTEV9YCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3RXcmFwcGVyPlxyXG4gICAgICAgICAgPENvbm5lY3RXYWxsZXQgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2FjY291bnQgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lZC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPFJlbmRlck93bmVkTGlzdCBhY2NvdW50PXthY2NvdW50fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3RXcmFwcGVyPlxyXG4gICAgICAgIFxyXG4gICAgICA8L0F1Y3Rpb25NYW5hZ2VyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTGlzdFdyYXBwZXIgPSBzdHlsZWQoUGFnZVdyYXBwZXIpYFxyXG4gIG1heC13aWR0aDogdmFyKC0tY29udGVudC13aWR0aC1sZyk7XHJcbiAgLm93bmVkLWxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLW1kKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLm93bmVkLWxpc3Qtbm8tdG9rZW5zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgfVxyXG4gIC5saXN0LWNvbXBvbmVudC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLWJhc2UtdW5pdCkgMDtcclxuICAgIGJvcmRlci10b3A6IHZhcigtLWJvcmRlci1saWdodCk7XHJcbiAgfVxyXG4gIC50aHVtYm5haWwtbWFuYWdlLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0byB2YXIoLS1zcGFjZS1zbSkhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuIl19 */",
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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_head_tsx-styles_components_tsx"], function() { return __webpack_exec__("./pages/list.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtYXVjdGlvbi1ob3VzZS8uL2NvbXBvbmVudHMvUmVzb2x1dGlvbi50c3giLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvLi9jb21wb25lbnRzL1VOU0QuanN4Iiwid2VicGFjazovL2NyZWF0ZS1hdWN0aW9uLWhvdXNlLy4vcGFnZXMvbGlzdC50c3giLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jcmVhdGUtYXVjdGlvbi1ob3VzZS9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZC9iYXNlXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvZXh0ZXJuYWwgXCJAdWF1dGgvanNcIiIsIndlYnBhY2s6Ly9jcmVhdGUtYXVjdGlvbi1ob3VzZS9leHRlcm5hbCBcIkB6b3JhbGFicy9tYW5hZ2UtYXVjdGlvbi1ob29rc1wiIiwid2VicGFjazovL2NyZWF0ZS1hdWN0aW9uLWhvdXNlL2V4dGVybmFsIFwiQHpvcmFsYWJzL25mdC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvZXh0ZXJuYWwgXCJAem9yYWxhYnMvbmZ0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLWF1Y3Rpb24taG91c2UvZXh0ZXJuYWwgXCJAem9yYWxhYnMvc2ltcGxlLXdhbGxldC1wcm92aWRlclwiIiwid2VicGFjazovL2NyZWF0ZS1hdWN0aW9uLWhvdXNlL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jcmVhdGUtYXVjdGlvbi1ob3VzZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NyZWF0ZS1hdWN0aW9uLWhvdXNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jcmVhdGUtYXVjdGlvbi1ob3VzZS9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovL2NyZWF0ZS1hdWN0aW9uLWhvdXNlL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiUmVzb2x1dGlvbiIsIkFQSV9VUkwiLCJBUElfS0VZMSIsInN0YXRzIiwic2V0U3RhdHMiLCJ1c2VTdGF0ZSIsInByb2Nlc3NMb29rdXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJkb21haW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJheGlvcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJtZXRhIiwib3duZXIiLCJibG9ja2NoYWluIiwicmVjb3JkcyIsInVhdXRoIiwiVUF1dGgiLCJjbGllbnRJRCIsInJlZGlyZWN0VXJpIiwiVU5TRCIsIlVhdXRoIiwic2V0VWF1dGgiLCJDb25uZWN0IiwiYXV0aG9yaXphdGlvbiIsImxvZ2luV2l0aFBvcHVwIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiYXV0aGVudGljYXRlIiwiZXJyb3IiLCJsb2dPdXQiLCJsb2dvdXQiLCJ1bmRlZmluZWQiLCJMaXN0SXRlbUNvbXBvbmVudCIsIm5mdCIsInVzZUNvbnRleHQiLCJORlREYXRhQ29udGV4dCIsIm9wZW5NYW5hZ2VBdWN0aW9uIiwib3Blbkxpc3RBdWN0aW9uIiwidXNlTWFuYWdlQXVjdGlvbiIsInByaWNpbmciLCJyZXNlcnZlIiwic3RhdHVzIiwicmVzZXJ2ZUlkIiwiaWQiLCJwYXJzZUludCIsImNvbnRyYWN0IiwiYWRkcmVzcyIsInRva2VuSWQiLCJDb25uZWN0V2FsbGV0IiwiYnV0dG9uQWN0aW9uIiwiYWN0aW9uVGV4dCIsImNvbm5lY3RlZEluZm8iLCJ1c2VXYWxsZXRCdXR0b24iLCJSZW5kZXJPd25lZExpc3QiLCJhY2NvdW50IiwidXNlU1dSIiwidXJsIiwiZmV0Y2giLCJqc29uIiwidG9rZW5zIiwibGVuZ3RoIiwibWFwIiwidG9rZW4iLCJ0b2tlbkluZm8iLCJGZXRjaFN0YXRpY0RhdGEiLCJ0b2tlbkNvbnRyYWN0IiwiTWVkaWFUaHVtYm5haWxQcmV2aWV3IiwiTGlzdCIsImFjdGl2ZSIsInVzZVdlYjNXYWxsZXQiLCJMSVNUX01FRElBX0hFQURFUiIsIkxJU1RfTUVESUFfREVTQ1JJUFRJT04iLCJBUFBfVElUTEUiLCJMaXN0V3JhcHBlciIsIlBhZ2VXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBSUEsU0FBU0EsVUFBVCxHQUFzQjtBQUVwQixRQUFNQyxPQUFPLEdBQUcsbURBQWhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLGtDQUFqQjtBQUVBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQyxJQUFELENBQWxDOztBQUdBLFdBQVNDLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBL0M7QUFDQSxRQUFJLENBQUNILE1BQUwsRUFBYTtBQUViSSxvREFBQSxDQUNPWixPQUFPLEdBQUdRLE1BRGpCLEVBQ3lCO0FBQ3JCSyxhQUFPLEVBQUU7QUFDUEMscUJBQWEsRUFBRyxVQUFTYixRQUFTO0FBRDNCO0FBRFksS0FEekIsRUFNR2MsSUFOSCxDQU1TQyxHQUFELElBQVM7QUFDYmIsY0FBUSxDQUFDYSxHQUFHLENBQUNDLElBQUwsQ0FBUjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBRyxDQUFDQyxJQUFoQjtBQUNELEtBVEgsRUFVR0csS0FWSCxDQVVVQyxHQUFELElBQVM7QUFDZGxCLGNBQVE7QUFDVCxLQVpIO0FBYUQ7O0FBSUQsU0FDRTtBQUFBLGNBQ0U7QUFBSyxlQUFTLEVBQUMsMERBQWY7QUFBQSxnQkFDRTtBQUFLLGlCQUFTLEVBQUMsdUNBQWY7QUFBQSxtQkFDRTtBQUFLLG1CQUFTLEVB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUF1QkQ7O0FBRUQsTUFBTW1CLFdBQVcsR0FBRyx5RUFBT0MsNERBQVA7QUFBQTtBQUFBO0FBQUEsRUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBakIsQzs7Ozs7Ozs7Ozs7QUN2TEEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFJlc29sdXRpb24oKSB7XHJcbiAgXHJcbiAgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly91bnN0b3BwYWJsZWRvbWFpbnMuZy5hbGNoZW15LmNvbS9kb21haW5zL1wiO1xyXG4gIGNvbnN0IEFQSV9LRVkxID0gXCJPUG50NXhCakY3dDVjSWhocXdwWjQyaVhPb3FDdXRfLVwiO1xyXG5cclxuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc0xvb2t1cChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IGRvbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9tYWluXCIpLnZhbHVlO1xyXG4gICAgaWYgKCFkb21haW4pIHJldHVybjtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KEFQSV9VUkwgKyBkb21haW4sIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgYmVhcmVyICR7QVBJX0tFWTF9YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdHMocmVzLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRTdGF0cygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBweC0yNCByZWxhdGl2ZSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1bIzBmMTcyYTRkXSByb3VuZGVkLTN4bCBwLTcgbXQtNiBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8aDQ+RG9tYWluIDwvaDQ+XHJcbiAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImRvbWFpblwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIGRvbWFpbiBuYW1lXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVudGVyIGEgZG9tYWluIG5hbWVcIlxyXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYnV0dG9uLWFkZG9uXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG10LTUgYm9yZGVyLVsjMzM0MTU1XSBib3JkZXIgYmctWyMxRTI5M0JdIHJvdW5kZWQtbGcgdGV4dC1bI0RCRUFGRV0gcHktMiBweC0xMCB3LVs2MDBweF1cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC01XCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1yb2JvdG8gdGV4dC13aGl0ZSBib3JkZXItMiBweC1bNjBweF0gcHktMiBib3JkZXItWyMyMkM1NUVdIGhvdmVyOmJnLVsjMjJDNTVFXSBtYi0xMFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17cHJvY2Vzc0xvb2t1cH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICB7c3RhdHMgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoNj5Eb21haW4gTmFtZSAtIHtzdGF0cy5tZXRhLmRvbWFpbn08L2g2PlxyXG4gICAgICAgICAgICAgICAgPGg2Pk93bmVkIGJ5IC0ge3N0YXRzLm1ldGEub3duZXJ9PC9oNj5cclxuICAgICAgICAgICAgICAgIDxoNj5CbG9ja2NoYWluIC0ge3N0YXRzLm1ldGEuYmxvY2tjaGFpbn08L2g2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge3N0YXRzLnJlY29yZHNbXCJpcGZzLnJlZGlyZWN0X2RvbWFpbi52YWx1ZVwiXSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlIC0ge3N0YXRzLnJlY29yZHNbXCJpcGZzLnJlZGlyZWN0X2RvbWFpbi52YWx1ZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gV2Vic2l0ZSBmb3VuZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5CbG9ja2NoYWluIGFkZHJlc3NlcyBpbiB0aGUgZG9tYWluPC9oNj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhdHMucmVjb3Jkc1tcImNyeXB0by5FVEguYWRkcmVzc1wiXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRVRIIEFkZHJlc3MgOiB7c3RhdHMucmVjb3Jkc1tcImNyeXB0by5FVEguYWRkcmVzc1wiXX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5ObyBFVEggYWRkcmVzczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhdHMucmVjb3Jkc1tcImNyeXB0by5NQVRJQy52ZXJzaW9uLk1BVElDLmFkZHJlc3NcIl0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1BVElDIEFkZHJlc3MgOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRzLnJlY29yZHNbXCJjcnlwdG8uTUFUSUMudmVyc2lvbi5NQVRJQy5hZGRyZXNzXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pk5vIE1hdGljIGFkZHJlc3M8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZvbnQtcm9ib3RvICBtdC0zIHB4LVs2MHB4XSBweS0yIGJvcmRlci1ncmFkaWVudC0xICBtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWN0bGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7c3RhdHMucmVjb3Jkc1tcImlwZnMucmVkaXJlY3RfZG9tYWluLnZhbHVlXCJdfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBXZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNvbHV0aW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBVQXV0aCBmcm9tIFwiQHVhdXRoL2pzXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXHJcblxyXG5jb25zdCB1YXV0aCA9IG5ldyBVQXV0aCh7XHJcbiAgICBjbGllbnRJRDogXCJmNDc5YzRmYi05OTJlLTQ5OTUtYmI3Yi0xMmFhNjAxOWYzYWZcIixcclxuICAgIHJlZGlyZWN0VXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9saXN0XCIsXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBVTlNEKCkge1xyXG4gICAgY29uc3QgW1VhdXRoLCBzZXRVYXV0aF0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gQ29ubmVjdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhdXRob3JpemF0aW9uID0gYXdhaXQgdWF1dGgubG9naW5XaXRoUG9wdXAoKVxyXG4gICAgICAgICAgICBzZXRVYXV0aChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGF1dGhvcml6YXRpb24pKVtcImlkVG9rZW5cIl0pXHJcblxyXG4gICAgICAgICAgICBhd2FpdCBhdXRoZW50aWNhdGUoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvZ091dCgpIHtcclxuICAgICAgICB1YXV0aC5sb2dvdXQoKVxyXG4gICAgICAgIGxvZ291dCgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9nKCkge1xyXG4gICAgICAgIGlmIChVYXV0aCA9PT0gbnVsbCB8fCBVYXV0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIENvbm5lY3QoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvZ091dCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXtsb2d9PlxyXG4gICAgICAgICAgICAgICAge1VhdXRoICE9IG51bGwgPyBVYXV0aFtcInN1YlwiXSA6IFwiTG9naW4gd2l0aCBVTlNEXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVTlNEIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBVTlNEIGZyb20gXCIuLi9jb21wb25lbnRzL1VOU0RcIjtcclxuaW1wb3J0IHtcclxuICBBdWN0aW9uTWFuYWdlcixcclxuICB1c2VNYW5hZ2VBdWN0aW9uLFxyXG59IGZyb20gXCJAem9yYWxhYnMvbWFuYWdlLWF1Y3Rpb24taG9va3NcIjtcclxuaW1wb3J0IHtcclxuICBORlREYXRhQ29udGV4dCxcclxuICBORlRQcmV2aWV3LFxyXG4gIFByZXZpZXdDb21wb25lbnRzLFxyXG59IGZyb20gXCJAem9yYWxhYnMvbmZ0LWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgRmV0Y2hTdGF0aWNEYXRhIH0gZnJvbSBcIkB6b3JhbGFicy9uZnQtaG9va3NcIjtcclxuaW1wb3J0IHtcclxuICB1c2VXYWxsZXRCdXR0b24sXHJcbiAgdXNlV2ViM1dhbGxldCxcclxufSBmcm9tIFwiQHpvcmFsYWJzL3NpbXBsZS13YWxsZXQtcHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB7IEFQUF9USVRMRSB9IGZyb20gXCIuLi91dGlscy9lbnYtdmFyc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XHJcbmltcG9ydCB7IFBhZ2VXcmFwcGVyIH0gZnJvbSBcIi4vLi4vc3R5bGVzL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlc29sdXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVzb2x1dGlvblwiO1xyXG5cclxuY29uc3QgTGlzdEl0ZW1Db21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbmZ0OiB7IGRhdGEgfSxcclxuICB9ID0gdXNlQ29udGV4dChORlREYXRhQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHsgb3Blbk1hbmFnZUF1Y3Rpb24sIG9wZW5MaXN0QXVjdGlvbiB9ID0gdXNlTWFuYWdlQXVjdGlvbigpO1xyXG5cclxuICBpZiAoIWRhdGEgfHwgIWRhdGEubmZ0KSB7XHJcbiAgICByZXR1cm4gPEZyYWdtZW50IC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgZGF0YS5wcmljaW5nLnJlc2VydmU/LnN0YXR1cyA9PT0gXCJBY3RpdmVcIiB8fFxyXG4gICAgZGF0YS5wcmljaW5nLnJlc2VydmU/LnN0YXR1cyA9PT0gXCJQZW5kaW5nXCJcclxuICApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc2VydmVJZCA9IGRhdGEucHJpY2luZy5yZXNlcnZlPy5pZDtcclxuICAgICAgICAgIGlmIChyZXNlcnZlSWQpIHtcclxuICAgICAgICAgICAgb3Blbk1hbmFnZUF1Y3Rpb24ocGFyc2VJbnQocmVzZXJ2ZUlkLCAxMCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBNYW5hZ2VcclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIG9wZW5MaXN0QXVjdGlvbihkYXRhLm5mdC5jb250cmFjdC5hZGRyZXNzLCBkYXRhLm5mdC50b2tlbklkKTtcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgID5cclxuICAgICAgTGlzdFxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbm5lY3RXYWxsZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBidXR0b25BY3Rpb24sIGFjdGlvblRleHQsIGNvbm5lY3RlZEluZm8gfSA9IHVzZVdhbGxldEJ1dHRvbigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPntgJHtcclxuICAgICAgICBjb25uZWN0ZWRJbmZvID09PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gXCJUbyBMaXN0IHlvdXIgTkZUIENvbm5lY3QgeW91ciB3YWxsZXQhXCJcclxuICAgICAgICAgIDogY29ubmVjdGVkSW5mb1xyXG4gICAgICAgIH1gfTwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBidXR0b25BY3Rpb24oKX0+XHJcbiAgICAgICAge2FjdGlvblRleHR9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxVTlNEIC8+XHJcbiAgICAgICAgPFJlc29sdXRpb24vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSZW5kZXJPd25lZExpc3QgPSAoeyBhY2NvdW50IH06IHsgYWNjb3VudDogc3RyaW5nIH0pID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBgL2FwaS9vd25lZEl0ZW1zP293bmVyPSR7YWNjb3VudH1gLFxyXG4gICAgKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICApO1xyXG5cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIC8vIGxvYWRpbmdcclxuICAgIHJldHVybiA8RnJhZ21lbnQgLz47XHJcbiAgfVxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgLy8gZXJyb3JcclxuICAgIHJldHVybiA8RnJhZ21lbnQgLz47XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YS50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVkLWxpc3Qtbm8tdG9rZW5zXCI+XHJcbiAgICAgICAgPGgyPldlIGNvdWxkbuKAmXQgZmluZCBhbnkgTkZUcyB5b3Ugb3duIPCfmKI8L2gyPlxyXG4gICAgICAgIDxwPk1ha2Ugc3VyZSB5b3XigJl2ZSBjb25uZWN0ZWQgdGhlIGNvcnJlY3Qgd2FsbGV0PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0YS50b2tlbnMubWFwKCh0b2tlbjogYW55KSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbkluZm8gPSBGZXRjaFN0YXRpY0RhdGEuZ2V0SW5kZXhlclNlcnZlclRva2VuSW5mbyh0b2tlbik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TkZUUHJldmlld1xyXG4gICAgICAgIGlkPXt0b2tlbkluZm8udG9rZW5JZH1cclxuICAgICAgICBjb250cmFjdD17dG9rZW5JbmZvLnRva2VuQ29udHJhY3R9XHJcbiAgICAgICAgaW5pdGlhbERhdGE9e3Rva2VufVxyXG4gICAgICAgIHVzZUJldGFJbmRleGVyPXt0cnVlfVxyXG4gICAgICAgIGtleT17YCR7dG9rZW5JbmZvLnRva2VuQ29udHJhY3R9LSR7dG9rZW5JbmZvLnRva2VuSWR9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZWQtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICA8UHJldmlld0NvbXBvbmVudHMuTWVkaWFUaHVtYm5haWwgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb21wb25lbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05GVFByZXZpZXc+XHJcbiAgICApO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgTWVkaWFUaHVtYm5haWxQcmV2aWV3ID0gKHtcclxuICB0b2tlbkNvbnRyYWN0LFxyXG4gIHRva2VuSWQsXHJcbn06IHtcclxuICB0b2tlbkNvbnRyYWN0OiBzdHJpbmc7XHJcbiAgdG9rZW5JZDogc3RyaW5nO1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIFRPRE8oaWFpbik6IEZpeCBpbmRleGVyIGluIHRoaXMgdXNlIGNhc2VcclxuICAgIDxORlRQcmV2aWV3XHJcbiAgICAgIGlkPXt0b2tlbklkfVxyXG4gICAgICBjb250cmFjdD17dG9rZW5Db250cmFjdH1cclxuICAgICAgdXNlQmV0YUluZGV4ZXI9e3RydWV9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZWQtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgPFByZXZpZXdDb21wb25lbnRzLk1lZGlhVGh1bWJuYWlsIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbXBvbmVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L05GVFByZXZpZXc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoKSB7XHJcbiAgY29uc3QgeyBhY3RpdmUsIGFjY291bnQgfSA9IHVzZVdlYjNXYWxsZXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQgdGl0bGU9XCJMaXN0XCIgLz5cclxuICAgICAgPEF1Y3Rpb25NYW5hZ2VyXHJcbiAgICAgICAgcmVuZGVyTWVkaWE9e01lZGlhVGh1bWJuYWlsUHJldmlld31cclxuICAgICAgICBzdHJpbmdzPXt7XHJcbiAgICAgICAgICBMSVNUX01FRElBX0hFQURFUjogXCJMaXN0IHlvdXIgTkZUXCIsXHJcbiAgICAgICAgICBMSVNUX01FRElBX0RFU0NSSVBUSU9OOiBgU2V0IHRoZSByZXNlcnZlIHByaWNlIHRvIGxpc3QgeW91ciBORlQgb24gJHtBUFBfVElUTEV9YCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3RXcmFwcGVyPlxyXG4gICAgICAgICAgPENvbm5lY3RXYWxsZXQgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2FjY291bnQgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lZC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPFJlbmRlck93bmVkTGlzdCBhY2NvdW50PXthY2NvdW50fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3RXcmFwcGVyPlxyXG4gICAgICAgIFxyXG4gICAgICA8L0F1Y3Rpb25NYW5hZ2VyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTGlzdFdyYXBwZXIgPSBzdHlsZWQoUGFnZVdyYXBwZXIpYFxyXG4gIG1heC13aWR0aDogdmFyKC0tY29udGVudC13aWR0aC1sZyk7XHJcbiAgLm93bmVkLWxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLW1kKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLm93bmVkLWxpc3Qtbm8tdG9rZW5zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgfVxyXG4gIC5saXN0LWNvbXBvbmVudC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLWJhc2UtdW5pdCkgMDtcclxuICAgIGJvcmRlci10b3A6IHZhcigtLWJvcmRlci1saWdodCk7XHJcbiAgfVxyXG4gIC50aHVtYm5haWwtbWFuYWdlLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0byB2YXIoLS1zcGFjZS1zbSkhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWQvYmFzZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVhdXRoL2pzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAem9yYWxhYnMvbWFuYWdlLWF1Y3Rpb24taG9va3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB6b3JhbGFicy9uZnQtY29tcG9uZW50c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHpvcmFsYWJzL25mdC1ob29rc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHpvcmFsYWJzL3NpbXBsZS13YWxsZXQtcHJvdmlkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==