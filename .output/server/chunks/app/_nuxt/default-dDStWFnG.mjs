import { _ as _sfc_main$1 } from './DefaultPage-LzR7S962.mjs';
import { withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './Container-fiqteY-J.mjs';
import './nuxt-link-l5vQ35gn.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'requrl';
import 'node:fs';
import 'node:url';
import 'ipx';
import './nuxt-img-W6WFka4o.mjs';
import './Button-kAcpi0J0.mjs';
import './Icon-wPOwyXQ9.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-1UftMXvm.mjs';
import 'tailwind-merge';
import './selectMenu-YFOg1enb.mjs';
import './Dropdown-7SK4kIQ5.mjs';
import './Avatar-tswZooNR.mjs';
import './usePopper-Q71pE1n8.mjs';
import './ButtonColorMode-OZnQ_7Ik.mjs';
import './SelectMenu-EZqWnZTs.mjs';
import '@vueuse/core';
import './useFormGroup-UEyTjmzX.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseLayoutDefaultPage = _sfc_main$1;
  _push(ssrRenderComponent(_component_BaseLayoutDefaultPage, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-dDStWFnG.mjs.map
