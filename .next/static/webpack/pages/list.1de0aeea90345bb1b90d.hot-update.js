self["webpackHotUpdate_N_E"]("pages/list",{

/***/ "./pages/list.tsx":
/*!************************!*\
  !*** ./pages/list.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ List; }
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var _components_UNSD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UNSD */ "./components/UNSD.jsx");
/* harmony import */ var _zoralabs_manage_auction_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zoralabs/manage-auction-hooks */ "./node_modules/@zoralabs/manage-auction-hooks/dist/index.js");
/* harmony import */ var _zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zoralabs/nft-components */ "./node_modules/@zoralabs/nft-components/dist/index.js");
/* harmony import */ var _zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _zoralabs_nft_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zoralabs/nft-hooks */ "./node_modules/@zoralabs/nft-hooks/dist/index.js");
/* harmony import */ var _zoralabs_simple_wallet_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zoralabs/simple-wallet-provider */ "./node_modules/@zoralabs/simple-wallet-provider/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils_env_vars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/env-vars */ "./utils/env-vars.ts");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/head */ "./components/head.tsx");
/* harmony import */ var _styles_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../styles/components */ "./styles/components.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\c1\\DragVerse\\pages\\list.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }












var ListItemComponent = function ListItemComponent() {
  _s();

  var _data$pricing$reserve, _data$pricing$reserve2;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_3__.NFTDataContext),
      data = _useContext.nft.data;

  var _useManageAuction = (0,_zoralabs_manage_auction_hooks__WEBPACK_IMPORTED_MODULE_2__.useManageAuction)(),
      openManageAuction = _useManageAuction.openManageAuction,
      openListAuction = _useManageAuction.openListAuction;

  if (!data || !data.nft) {
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }, _this);
  }

  if (((_data$pricing$reserve = data.pricing.reserve) === null || _data$pricing$reserve === void 0 ? void 0 : _data$pricing$reserve.status) === "Active" || ((_data$pricing$reserve2 = data.pricing.reserve) === null || _data$pricing$reserve2 === void 0 ? void 0 : _data$pricing$reserve2.status) === "Pending") {
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
      className: "button",
      onClick: function onClick() {
        var _data$pricing$reserve3;

        var reserveId = (_data$pricing$reserve3 = data.pricing.reserve) === null || _data$pricing$reserve3 === void 0 ? void 0 : _data$pricing$reserve3.id;

        if (reserveId) {
          openManageAuction(parseInt(reserveId, 10));
        }
      },
      children: "Manage"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this);
  }

  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
    onClick: function onClick() {
      openListAuction(data.nft.contract.address, data.nft.tokenId);
    },
    className: "button",
    children: "List"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, _this);
};

_s(ListItemComponent, "GHmUj3w5WrAmelzJm7rIDbJq5UY=", false, function () {
  return [_zoralabs_manage_auction_hooks__WEBPACK_IMPORTED_MODULE_2__.useManageAuction];
});

_c = ListItemComponent;

var ConnectWallet = function ConnectWallet() {
  _s2();

  var _useWalletButton = (0,_zoralabs_simple_wallet_provider__WEBPACK_IMPORTED_MODULE_5__.useWalletButton)(),
      buttonAction = _useWalletButton.buttonAction,
      actionText = _useWalletButton.actionText,
      connectedInfo = _useWalletButton.connectedInfo;

  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h1", {
      children: "".concat(connectedInfo === undefined ? "To List your NFT Connect your wallet!" : connectedInfo)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: "flex",
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
        className: "button mb-4",
        onClick: function onClick() {
          return buttonAction();
        },
        children: actionText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_UNSD__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, _this);
};

_s2(ConnectWallet, "zRyLhMQzPiaootH3YSz024vpa8w=", false, function () {
  return [_zoralabs_simple_wallet_provider__WEBPACK_IMPORTED_MODULE_5__.useWalletButton];
});

_c2 = ConnectWallet;

var RenderOwnedList = function RenderOwnedList(_ref) {
  _s3();

  var account = _ref.account;

  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_7__.default)("/api/ownedItems?owner=".concat(account), function (url) {
    return fetch(url).then(function (res) {
      return res.json();
    });
  }),
      data = _useSWR.data,
      error = _useSWR.error;

  if (!data) {
    // loading
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 12
    }, _this);
  }

  if (error) {
    // error
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 12
    }, _this);
  }

  if (data.tokens.length === 0) {
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: "owned-list-no-tokens",
      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("h2", {
        children: "We couldn\u2019t find any NFTs you own \uD83D\uDE22"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
        children: "Make sure you\u2019ve connected the correct wallet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this);
  }

  return data.tokens.map(function (token) {
    var tokenInfo = _zoralabs_nft_hooks__WEBPACK_IMPORTED_MODULE_4__.FetchStaticData.getIndexerServerTokenInfo(token);
    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_3__.NFTPreview, {
      id: tokenInfo.tokenId,
      contract: tokenInfo.tokenContract,
      initialData: token,
      useBetaIndexer: true,
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: "owned-list-item",
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_3__.PreviewComponents.MediaThumbnail, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: "list-component-wrapper",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ListItemComponent, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this)
    }, "".concat(tokenInfo.tokenContract, "-").concat(tokenInfo.tokenId), false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this);
  });
};

_s3(RenderOwnedList, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_7__.default];
});

_c3 = RenderOwnedList;

var MediaThumbnailPreview = function MediaThumbnailPreview(_ref2) {
  var tokenContract = _ref2.tokenContract,
      tokenId = _ref2.tokenId;
  return (// TODO(iain): Fix indexer in this use case
    (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_3__.NFTPreview, {
      id: tokenId,
      contract: tokenContract,
      useBetaIndexer: true,
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: "owned-list-item",
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_zoralabs_nft_components__WEBPACK_IMPORTED_MODULE_3__.PreviewComponents.MediaThumbnail, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 9
        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: "list-component-wrapper",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ListItemComponent, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }, _this)
  );
};

_c4 = MediaThumbnailPreview;
function List() {
  _s4();

  var _useWeb3Wallet = (0,_zoralabs_simple_wallet_provider__WEBPACK_IMPORTED_MODULE_5__.useWeb3Wallet)(),
      active = _useWeb3Wallet.active,
      account = _useWeb3Wallet.account;

  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_head__WEBPACK_IMPORTED_MODULE_9__.default, {
      title: "List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_zoralabs_manage_auction_hooks__WEBPACK_IMPORTED_MODULE_2__.AuctionManager, {
      renderMedia: MediaThumbnailPreview,
      strings: {
        LIST_MEDIA_HEADER: "List your NFT",
        LIST_MEDIA_DESCRIPTION: "Set the reserve price to list your NFT on ".concat(_utils_env_vars__WEBPACK_IMPORTED_MODULE_8__.APP_TITLE)
      },
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ListWrapper, {
        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ConnectWallet, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this), account && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: "owned-list",
          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(RenderOwnedList, {
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

_s4(List, "eOq6IOh341XtE2AWHSP+SePK5PM=", false, function () {
  return [_zoralabs_simple_wallet_provider__WEBPACK_IMPORTED_MODULE_5__.useWeb3Wallet];
});

_c5 = List;

var ListWrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)(_styles_components__WEBPACK_IMPORTED_MODULE_10__.PageWrapper,  false ? 0 : {
  target: "elwabre0",
  label: "ListWrapper"
})( false ? 0 : {
  name: "17vfm80",
  styles: "max-width:var(--content-width-lg);.owned-list{padding-top:var(--space-md);display:flex;flex-wrap:wrap;justify-content:center;}.owned-list-no-tokens{text-align:center;padding-top:var(--space-sm);}.list-component-wrapper{padding:var(--base-unit) 0;border-top:var(--border-light);}.thumbnail-manage-button{margin:0 auto var(--space-sm)!important;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjMVxcRHJhZ1ZlcnNlXFxwYWdlc1xcbGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUx1QyIsImZpbGUiOiJEOlxcYzFcXERyYWdWZXJzZVxccGFnZXNcXGxpc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBVTlNEIGZyb20gXCIuLi9jb21wb25lbnRzL1VOU0RcIjtcclxuaW1wb3J0IHtcclxuICBBdWN0aW9uTWFuYWdlcixcclxuICB1c2VNYW5hZ2VBdWN0aW9uLFxyXG59IGZyb20gXCJAem9yYWxhYnMvbWFuYWdlLWF1Y3Rpb24taG9va3NcIjtcclxuaW1wb3J0IHtcclxuICBORlREYXRhQ29udGV4dCxcclxuICBORlRQcmV2aWV3LFxyXG4gIFByZXZpZXdDb21wb25lbnRzLFxyXG59IGZyb20gXCJAem9yYWxhYnMvbmZ0LWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgRmV0Y2hTdGF0aWNEYXRhIH0gZnJvbSBcIkB6b3JhbGFicy9uZnQtaG9va3NcIjtcclxuaW1wb3J0IHtcclxuICB1c2VXYWxsZXRCdXR0b24sXHJcbiAgdXNlV2ViM1dhbGxldCxcclxufSBmcm9tIFwiQHpvcmFsYWJzL3NpbXBsZS13YWxsZXQtcHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB7IEFQUF9USVRMRSB9IGZyb20gXCIuLi91dGlscy9lbnYtdmFyc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XHJcbmltcG9ydCB7IFBhZ2VXcmFwcGVyIH0gZnJvbSBcIi4vLi4vc3R5bGVzL2NvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IExpc3RJdGVtQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG5mdDogeyBkYXRhIH0sXHJcbiAgfSA9IHVzZUNvbnRleHQoTkZURGF0YUNvbnRleHQpO1xyXG5cclxuICBjb25zdCB7IG9wZW5NYW5hZ2VBdWN0aW9uLCBvcGVuTGlzdEF1Y3Rpb24gfSA9IHVzZU1hbmFnZUF1Y3Rpb24oKTtcclxuXHJcbiAgaWYgKCFkYXRhIHx8ICFkYXRhLm5mdCkge1xyXG4gICAgcmV0dXJuIDxGcmFnbWVudCAvPjtcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIGRhdGEucHJpY2luZy5yZXNlcnZlPy5zdGF0dXMgPT09IFwiQWN0aXZlXCIgfHxcclxuICAgIGRhdGEucHJpY2luZy5yZXNlcnZlPy5zdGF0dXMgPT09IFwiUGVuZGluZ1wiXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNlcnZlSWQgPSBkYXRhLnByaWNpbmcucmVzZXJ2ZT8uaWQ7XHJcbiAgICAgICAgICBpZiAocmVzZXJ2ZUlkKSB7XHJcbiAgICAgICAgICAgIG9wZW5NYW5hZ2VBdWN0aW9uKHBhcnNlSW50KHJlc2VydmVJZCwgMTApKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgTWFuYWdlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBvcGVuTGlzdEF1Y3Rpb24oZGF0YS5uZnQuY29udHJhY3QuYWRkcmVzcywgZGF0YS5uZnQudG9rZW5JZCk7XHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICA+XHJcbiAgICAgIExpc3RcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDb25uZWN0V2FsbGV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYnV0dG9uQWN0aW9uLCBhY3Rpb25UZXh0LCBjb25uZWN0ZWRJbmZvIH0gPSB1c2VXYWxsZXRCdXR0b24oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT57YCR7XHJcbiAgICAgICAgY29ubmVjdGVkSW5mbyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IFwiVG8gTGlzdCB5b3VyIE5GVCBDb25uZWN0IHlvdXIgd2FsbGV0IVwiXHJcbiAgICAgICAgICA6IGNvbm5lY3RlZEluZm9cclxuICAgICAgICB9YH08L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIG1iLTRcIiBvbkNsaWNrPXsoKSA9PiBidXR0b25BY3Rpb24oKX0+XHJcbiAgICAgICAge2FjdGlvblRleHR9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8VU5TRC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJlbmRlck93bmVkTGlzdCA9ICh7IGFjY291bnQgfTogeyBhY2NvdW50OiBzdHJpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGAvYXBpL293bmVkSXRlbXM/b3duZXI9JHthY2NvdW50fWAsXHJcbiAgICAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICk7XHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgLy8gbG9hZGluZ1xyXG4gICAgcmV0dXJuIDxGcmFnbWVudCAvPjtcclxuICB9XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICAvLyBlcnJvclxyXG4gICAgcmV0dXJuIDxGcmFnbWVudCAvPjtcclxuICB9XHJcblxyXG4gIGlmIChkYXRhLnRva2Vucy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZWQtbGlzdC1uby10b2tlbnNcIj5cclxuICAgICAgICA8aDI+V2UgY291bGRu4oCZdCBmaW5kIGFueSBORlRzIHlvdSBvd24g8J+YojwvaDI+XHJcbiAgICAgICAgPHA+TWFrZSBzdXJlIHlvdeKAmXZlIGNvbm5lY3RlZCB0aGUgY29ycmVjdCB3YWxsZXQ8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhLnRva2Vucy5tYXAoKHRva2VuOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHRva2VuSW5mbyA9IEZldGNoU3RhdGljRGF0YS5nZXRJbmRleGVyU2VydmVyVG9rZW5JbmZvKHRva2VuKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxORlRQcmV2aWV3XHJcbiAgICAgICAgaWQ9e3Rva2VuSW5mby50b2tlbklkfVxyXG4gICAgICAgIGNvbnRyYWN0PXt0b2tlbkluZm8udG9rZW5Db250cmFjdH1cclxuICAgICAgICBpbml0aWFsRGF0YT17dG9rZW59XHJcbiAgICAgICAgdXNlQmV0YUluZGV4ZXI9e3RydWV9XHJcbiAgICAgICAga2V5PXtgJHt0b2tlbkluZm8udG9rZW5Db250cmFjdH0tJHt0b2tlbkluZm8udG9rZW5JZH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lZC1saXN0LWl0ZW1cIj5cclxuICAgICAgICAgIDxQcmV2aWV3Q29tcG9uZW50cy5NZWRpYVRodW1ibmFpbCAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbXBvbmVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTkZUUHJldmlldz5cclxuICAgICk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBNZWRpYVRodW1ibmFpbFByZXZpZXcgPSAoe1xyXG4gIHRva2VuQ29udHJhY3QsXHJcbiAgdG9rZW5JZCxcclxufToge1xyXG4gIHRva2VuQ29udHJhY3Q6IHN0cmluZztcclxuICB0b2tlbklkOiBzdHJpbmc7XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgLy8gVE9ETyhpYWluKTogRml4IGluZGV4ZXIgaW4gdGhpcyB1c2UgY2FzZVxyXG4gICAgPE5GVFByZXZpZXdcclxuICAgICAgaWQ9e3Rva2VuSWR9XHJcbiAgICAgIGNvbnRyYWN0PXt0b2tlbkNvbnRyYWN0fVxyXG4gICAgICB1c2VCZXRhSW5kZXhlcj17dHJ1ZX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lZC1saXN0LWl0ZW1cIj5cclxuICAgICAgICA8UHJldmlld0NvbXBvbmVudHMuTWVkaWFUaHVtYm5haWwgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtY29tcG9uZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxMaXN0SXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTkZUUHJldmlldz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCgpIHtcclxuICBjb25zdCB7IGFjdGl2ZSwgYWNjb3VudCB9ID0gdXNlV2ViM1dhbGxldCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZCB0aXRsZT1cIkxpc3RcIiAvPlxyXG4gICAgICA8QXVjdGlvbk1hbmFnZXJcclxuICAgICAgICByZW5kZXJNZWRpYT17TWVkaWFUaHVtYm5haWxQcmV2aWV3fVxyXG4gICAgICAgIHN0cmluZ3M9e3tcclxuICAgICAgICAgIExJU1RfTUVESUFfSEVBREVSOiBcIkxpc3QgeW91ciBORlRcIixcclxuICAgICAgICAgIExJU1RfTUVESUFfREVTQ1JJUFRJT046IGBTZXQgdGhlIHJlc2VydmUgcHJpY2UgdG8gbGlzdCB5b3VyIE5GVCBvbiAke0FQUF9USVRMRX1gLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdFdyYXBwZXI+XHJcbiAgICAgICAgICA8Q29ubmVjdFdhbGxldCAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7YWNjb3VudCAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVkLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8UmVuZGVyT3duZWRMaXN0IGFjY291bnQ9e2FjY291bnR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvTGlzdFdyYXBwZXI+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvQXVjdGlvbk1hbmFnZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBMaXN0V3JhcHBlciA9IHN0eWxlZChQYWdlV3JhcHBlcilgXHJcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoLWxnKTtcclxuICAub3duZWQtbGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2UtbWQpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAub3duZWQtbGlzdC1uby10b2tlbnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLXNtKTtcclxuICB9XHJcbiAgLmxpc3QtY29tcG9uZW50LXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogdmFyKC0tYmFzZS11bml0KSAwO1xyXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tYm9yZGVyLWxpZ2h0KTtcclxuICB9XHJcbiAgLnRodW1ibmFpbC1tYW5hZ2UtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIHZhcigtLXNwYWNlLXNtKSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ListItemComponent");
$RefreshReg$(_c2, "ConnectWallet");
$RefreshReg$(_c3, "RenderOwnedList");
$RefreshReg$(_c4, "MediaThumbnailPreview");
$RefreshReg$(_c5, "List");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdC50c3giXSwibmFtZXMiOlsiTGlzdEl0ZW1Db21wb25lbnQiLCJ1c2VDb250ZXh0IiwiTkZURGF0YUNvbnRleHQiLCJkYXRhIiwibmZ0IiwidXNlTWFuYWdlQXVjdGlvbiIsIm9wZW5NYW5hZ2VBdWN0aW9uIiwib3Blbkxpc3RBdWN0aW9uIiwicHJpY2luZyIsInJlc2VydmUiLCJzdGF0dXMiLCJyZXNlcnZlSWQiLCJpZCIsInBhcnNlSW50IiwiY29udHJhY3QiLCJhZGRyZXNzIiwidG9rZW5JZCIsIkNvbm5lY3RXYWxsZXQiLCJ1c2VXYWxsZXRCdXR0b24iLCJidXR0b25BY3Rpb24iLCJhY3Rpb25UZXh0IiwiY29ubmVjdGVkSW5mbyIsInVuZGVmaW5lZCIsIlJlbmRlck93bmVkTGlzdCIsImFjY291bnQiLCJ1c2VTV1IiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyb3IiLCJ0b2tlbnMiLCJsZW5ndGgiLCJtYXAiLCJ0b2tlbiIsInRva2VuSW5mbyIsIkZldGNoU3RhdGljRGF0YSIsInRva2VuQ29udHJhY3QiLCJNZWRpYVRodW1ibmFpbFByZXZpZXciLCJMaXN0IiwidXNlV2ViM1dhbGxldCIsImFjdGl2ZSIsIkxJU1RfTUVESUFfSEVBREVSIiwiTElTVF9NRURJQV9ERVNDUklQVElPTiIsIkFQUF9USVRMRSIsIkxpc3RXcmFwcGVyIiwiUGFnZVdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQUE7O0FBQUEsb0JBRzFCQyxpREFBVSxDQUFDQyxvRUFBRCxDQUhnQjtBQUFBLE1BRXJCQyxJQUZxQixlQUU1QkMsR0FGNEIsQ0FFckJELElB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QUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQXVCRDs7SUF6QnVCZ0IsSTtVQUNNQywyRTs7O01BRE5ELEk7O0FBMkJ4QixJQUFNTSxXQUFXLEdBQUcsMkVBQU9DLDREQUFQO0FBQUE7QUFBQTtBQUFBLEVBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpc3QuMWRlMGFlZWE5MDM0NWJiMWI5MGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgVU5TRCBmcm9tIFwiLi4vY29tcG9uZW50cy9VTlNEXCI7XHJcbmltcG9ydCB7XHJcbiAgQXVjdGlvbk1hbmFnZXIsXHJcbiAgdXNlTWFuYWdlQXVjdGlvbixcclxufSBmcm9tIFwiQHpvcmFsYWJzL21hbmFnZS1hdWN0aW9uLWhvb2tzXCI7XHJcbmltcG9ydCB7XHJcbiAgTkZURGF0YUNvbnRleHQsXHJcbiAgTkZUUHJldmlldyxcclxuICBQcmV2aWV3Q29tcG9uZW50cyxcclxufSBmcm9tIFwiQHpvcmFsYWJzL25mdC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEZldGNoU3RhdGljRGF0YSB9IGZyb20gXCJAem9yYWxhYnMvbmZ0LWhvb2tzXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlV2FsbGV0QnV0dG9uLFxyXG4gIHVzZVdlYjNXYWxsZXQsXHJcbn0gZnJvbSBcIkB6b3JhbGFicy9zaW1wbGUtd2FsbGV0LXByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgeyBBUFBfVElUTEUgfSBmcm9tIFwiLi4vdXRpbHMvZW52LXZhcnNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZFwiO1xyXG5pbXBvcnQgeyBQYWdlV3JhcHBlciB9IGZyb20gXCIuLy4uL3N0eWxlcy9jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBMaXN0SXRlbUNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBuZnQ6IHsgZGF0YSB9LFxyXG4gIH0gPSB1c2VDb250ZXh0KE5GVERhdGFDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgeyBvcGVuTWFuYWdlQXVjdGlvbiwgb3Blbkxpc3RBdWN0aW9uIH0gPSB1c2VNYW5hZ2VBdWN0aW9uKCk7XHJcblxyXG4gIGlmICghZGF0YSB8fCAhZGF0YS5uZnQpIHtcclxuICAgIHJldHVybiA8RnJhZ21lbnQgLz47XHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICBkYXRhLnByaWNpbmcucmVzZXJ2ZT8uc3RhdHVzID09PSBcIkFjdGl2ZVwiIHx8XHJcbiAgICBkYXRhLnByaWNpbmcucmVzZXJ2ZT8uc3RhdHVzID09PSBcIlBlbmRpbmdcIlxyXG4gICkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzZXJ2ZUlkID0gZGF0YS5wcmljaW5nLnJlc2VydmU/LmlkO1xyXG4gICAgICAgICAgaWYgKHJlc2VydmVJZCkge1xyXG4gICAgICAgICAgICBvcGVuTWFuYWdlQXVjdGlvbihwYXJzZUludChyZXNlcnZlSWQsIDEwKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIE1hbmFnZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgb3Blbkxpc3RBdWN0aW9uKGRhdGEubmZ0LmNvbnRyYWN0LmFkZHJlc3MsIGRhdGEubmZ0LnRva2VuSWQpO1xyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgPlxyXG4gICAgICBMaXN0XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ29ubmVjdFdhbGxldCA9ICgpID0+IHtcclxuICBjb25zdCB7IGJ1dHRvbkFjdGlvbiwgYWN0aW9uVGV4dCwgY29ubmVjdGVkSW5mbyB9ID0gdXNlV2FsbGV0QnV0dG9uKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+e2Ake1xyXG4gICAgICAgIGNvbm5lY3RlZEluZm8gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBcIlRvIExpc3QgeW91ciBORlQgQ29ubmVjdCB5b3VyIHdhbGxldCFcIlxyXG4gICAgICAgICAgOiBjb25uZWN0ZWRJbmZvXHJcbiAgICAgICAgfWB9PC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcblxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBtYi00XCIgb25DbGljaz17KCkgPT4gYnV0dG9uQWN0aW9uKCl9PlxyXG4gICAgICAgIHthY3Rpb25UZXh0fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPFVOU0QvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSZW5kZXJPd25lZExpc3QgPSAoeyBhY2NvdW50IH06IHsgYWNjb3VudDogc3RyaW5nIH0pID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBgL2FwaS9vd25lZEl0ZW1zP293bmVyPSR7YWNjb3VudH1gLFxyXG4gICAgKHVybDogc3RyaW5nKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICApO1xyXG5cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIC8vIGxvYWRpbmdcclxuICAgIHJldHVybiA8RnJhZ21lbnQgLz47XHJcbiAgfVxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgLy8gZXJyb3JcclxuICAgIHJldHVybiA8RnJhZ21lbnQgLz47XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YS50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bmVkLWxpc3Qtbm8tdG9rZW5zXCI+XHJcbiAgICAgICAgPGgyPldlIGNvdWxkbuKAmXQgZmluZCBhbnkgTkZUcyB5b3Ugb3duIPCfmKI8L2gyPlxyXG4gICAgICAgIDxwPk1ha2Ugc3VyZSB5b3XigJl2ZSBjb25uZWN0ZWQgdGhlIGNvcnJlY3Qgd2FsbGV0PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0YS50b2tlbnMubWFwKCh0b2tlbjogYW55KSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbkluZm8gPSBGZXRjaFN0YXRpY0RhdGEuZ2V0SW5kZXhlclNlcnZlclRva2VuSW5mbyh0b2tlbik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TkZUUHJldmlld1xyXG4gICAgICAgIGlkPXt0b2tlbkluZm8udG9rZW5JZH1cclxuICAgICAgICBjb250cmFjdD17dG9rZW5JbmZvLnRva2VuQ29udHJhY3R9XHJcbiAgICAgICAgaW5pdGlhbERhdGE9e3Rva2VufVxyXG4gICAgICAgIHVzZUJldGFJbmRleGVyPXt0cnVlfVxyXG4gICAgICAgIGtleT17YCR7dG9rZW5JbmZvLnRva2VuQ29udHJhY3R9LSR7dG9rZW5JbmZvLnRva2VuSWR9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZWQtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICA8UHJldmlld0NvbXBvbmVudHMuTWVkaWFUaHVtYm5haWwgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb21wb25lbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05GVFByZXZpZXc+XHJcbiAgICApO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgTWVkaWFUaHVtYm5haWxQcmV2aWV3ID0gKHtcclxuICB0b2tlbkNvbnRyYWN0LFxyXG4gIHRva2VuSWQsXHJcbn06IHtcclxuICB0b2tlbkNvbnRyYWN0OiBzdHJpbmc7XHJcbiAgdG9rZW5JZDogc3RyaW5nO1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIFRPRE8oaWFpbik6IEZpeCBpbmRleGVyIGluIHRoaXMgdXNlIGNhc2VcclxuICAgIDxORlRQcmV2aWV3XHJcbiAgICAgIGlkPXt0b2tlbklkfVxyXG4gICAgICBjb250cmFjdD17dG9rZW5Db250cmFjdH1cclxuICAgICAgdXNlQmV0YUluZGV4ZXI9e3RydWV9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3duZWQtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgPFByZXZpZXdDb21wb25lbnRzLk1lZGlhVGh1bWJuYWlsIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWNvbXBvbmVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L05GVFByZXZpZXc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoKSB7XHJcbiAgY29uc3QgeyBhY3RpdmUsIGFjY291bnQgfSA9IHVzZVdlYjNXYWxsZXQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQgdGl0bGU9XCJMaXN0XCIgLz5cclxuICAgICAgPEF1Y3Rpb25NYW5hZ2VyXHJcbiAgICAgICAgcmVuZGVyTWVkaWE9e01lZGlhVGh1bWJuYWlsUHJldmlld31cclxuICAgICAgICBzdHJpbmdzPXt7XHJcbiAgICAgICAgICBMSVNUX01FRElBX0hFQURFUjogXCJMaXN0IHlvdXIgTkZUXCIsXHJcbiAgICAgICAgICBMSVNUX01FRElBX0RFU0NSSVBUSU9OOiBgU2V0IHRoZSByZXNlcnZlIHByaWNlIHRvIGxpc3QgeW91ciBORlQgb24gJHtBUFBfVElUTEV9YCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3RXcmFwcGVyPlxyXG4gICAgICAgICAgPENvbm5lY3RXYWxsZXQgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2FjY291bnQgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd25lZC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgPFJlbmRlck93bmVkTGlzdCBhY2NvdW50PXthY2NvdW50fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L0xpc3RXcmFwcGVyPlxyXG4gICAgICAgIFxyXG4gICAgICA8L0F1Y3Rpb25NYW5hZ2VyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTGlzdFdyYXBwZXIgPSBzdHlsZWQoUGFnZVdyYXBwZXIpYFxyXG4gIG1heC13aWR0aDogdmFyKC0tY29udGVudC13aWR0aC1sZyk7XHJcbiAgLm93bmVkLWxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLW1kKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLm93bmVkLWxpc3Qtbm8tdG9rZW5zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjZS1zbSk7XHJcbiAgfVxyXG4gIC5saXN0LWNvbXBvbmVudC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IHZhcigtLWJhc2UtdW5pdCkgMDtcclxuICAgIGJvcmRlci10b3A6IHZhcigtLWJvcmRlci1saWdodCk7XHJcbiAgfVxyXG4gIC50aHVtYm5haWwtbWFuYWdlLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0byB2YXIoLS1zcGFjZS1zbSkhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==