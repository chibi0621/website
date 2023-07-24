import { createApp } from 'vue';
import { createPopper } from '@popperjs/core';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
  date,
};
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.component('LoadingPlugin', Loading);
app.component('ForM', Form);
app.component('FielD', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(createPopper);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
