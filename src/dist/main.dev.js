"use strict";

var _vue = require("vue");

var _core = require("@popperjs/core");

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _vueLoadingOverlay = _interopRequireDefault(require("vue-loading-overlay"));

require("vue-loading-overlay/dist/css/index.css");

require("bootstrap-icons/font/bootstrap-icons.css");

var _veeValidate = require("vee-validate");

var _rules = _interopRequireDefault(require("@vee-validate/rules"));

var _i18n = require("@vee-validate/i18n");

var _zh_TW = _interopRequireDefault(require("@vee-validate/i18n/dist/locale/zh_TW.json"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _filters = require("./methods/filters");

var _pushMessageState = _interopRequireDefault(require("./methods/pushMessageState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]);
app.config.globalProperties.$filters = {
  currency: _filters.currency,
  date: _filters.date
};
Object.keys(_rules["default"]).forEach(function (rule) {
  (0, _veeValidate.defineRule)(rule, _rules["default"][rule]);
});
(0, _veeValidate.configure)({
  generateMessage: (0, _i18n.localize)({
    zh_TW: _zh_TW["default"]
  }),
  validateOnInput: true
});
(0, _i18n.setLocale)('zh_TW');
app.config.globalProperties.$httpMessageState = _pushMessageState["default"];
app.component('LoadingPlugin', _vueLoadingOverlay["default"]);
app.component('ForM', _veeValidate.Form);
app.component('FielD', _veeValidate.Field);
app.component('ErrorMessage', _veeValidate.ErrorMessage);
app.use(_core.createPopper);
app.use(_vueAxios["default"], _axios["default"]);
app.use(_router["default"]);
app.mount('#app');