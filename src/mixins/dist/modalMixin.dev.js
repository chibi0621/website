"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _modal = _interopRequireDefault(require("bootstrap/js/dist/modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  methods: {
    showModal: function showModal() {
      this.modal.show();
    },
    hideModal: function hideModal() {
      this.modal.hide();
    }
  },
  mounted: function mounted() {
    this.modal = new _modal["default"](this.$refs.modal);
    this.modal.show();
  }
};
exports["default"] = _default;