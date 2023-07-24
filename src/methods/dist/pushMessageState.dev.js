"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = upadate;

var _emitter = _interopRequireDefault(require("@/methods/emitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function upadate(response) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '更新';

  if (response.data.success) {
    _emitter["default"].emit('push-message', {
      style: 'success',
      title: "".concat(title, "\u6210\u529F")
    });
  } else {
    var message = typeof response.data.message === 'string' ? [response.data.message] : response.data.message;

    _emitter["default"].emit('push-message', {
      style: 'danger',
      title: "".concat(title, "\u5931\u6557"),
      content: message.join('、')
    });
  }
}