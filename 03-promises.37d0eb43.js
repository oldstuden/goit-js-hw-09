!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("6JpON");function u(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o({pos:e,delay:n}):t({pos:e,delay:n})}),n)}))}var a={delay:document.querySelector("input[name = delay]"),step:document.querySelector("input[name = step]"),amound:document.querySelector("input[name = amount]")};document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(a.delay.value),o=Number(a.step.value),t=Number(a.amound.value),i=1;i<=t;i+=1)u(i,n).then((function(e){var n=e.pos,o=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o," ms"))})).catch((function(e){var n=e.pos,o=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o," ms"))})),n+=o}))}();
//# sourceMappingURL=03-promises.37d0eb43.js.map
