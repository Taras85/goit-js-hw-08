!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,d=c||m||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return d.Date.now()};function y(e,t,n){var r,o,a,f,u,l,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=r,i=o;return r=o=void 0,s=t,f=e.apply(i,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-s>=a}function S(){var e=b();if(y(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-l);return m?p(n,a-(e-s)):n}(e))}function h(e){return u=void 0,d&&r?v(e):(r=o=void 0,f)}function w(){var e=b(),n=y(e);if(r=arguments,o=this,l=e,n){if(void 0===u)return function(e){return s=e,u=setTimeout(S,t),c?v(e):f}(l);if(m)return u=setTimeout(S,t),v(l)}return void 0===u&&(u=setTimeout(S,t)),f}return t=O(t)||0,j(n)&&(c=!!n.leading,a=(m="maxWait"in n)?g(O(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=l=o=u=void 0},w.flush=function(){return void 0===u?f:h(b())},w}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==o}(e))return r;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):f.test(e)?r:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};const S=document.querySelector(".feedback-form");S.addEventListener("submit",(function(e){if(e.preventDefault(),!S.elements.email.value||!S.elements.message.value)return alert("All fields are due buti orders! \n Всі поля повинні бути заповнені");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),S.reset(),localStorage.removeItem("feedback-form-state")})),S.addEventListener("input",e(t)((function(){const e={email:S.elements.email.value,message:S.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));let h=JSON.parse(localStorage.getItem("feedback-form-state"));null!==h&&(S.elements.email.value=h.email,S.elements.message.value=h.message)}();
//# sourceMappingURL=03-feedback.c34da327.js.map
