import { _ as _sfc_main$1 } from './Dashboard-jz8v-1IH.mjs';
import { _ as __nuxt_component_1 } from './BannerCard-BVyvcBH3.mjs';
import { a as __nuxt_component_2 } from './Button-yd_RrKli.mjs';
import { e as useRoute } from '../server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import './DefaultPage-VQkPjya0.mjs';
import './Container-doYokmre.mjs';
import 'tailwind-merge';
import './selectMenu-b22BRv44.mjs';
import './_plugin-vue_export-helper-yVxbj29m.mjs';
import './nuxt-link-1FC4dAQ4.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'requrl';
import 'node:fs';
import 'node:url';
import 'ipx';
import './nuxt-img-ITPZ6UDr.mjs';
import './Dropdown-B_my3cre.mjs';
import './Avatar-8SGDvSnm.mjs';
import './usePopper-mt32Bdxz.mjs';
import './ButtonColorMode-buZmX-V5.mjs';
import './SelectMenu-gUBA7puh.mjs';
import '@vueuse/core';
import './useFormGroup-UEyTjmzX.mjs';
import './micro-task-lHIuwgs5.mjs';
import './Icon-WPIsUTag.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-1UftMXvm.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard-company-manage",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const prefix = computed(() => `/dashboard/company/${route.params.companyId}/manage`);
    const links = computed(() => [
      [
        {
          label: "Home",
          icon: "i-heroicons-command-line",
          to: `${prefix.value}`
        }
      ],
      [
        {
          label: "Exercises",
          icon: "i-material-symbols-light-exercise-outline",
          to: `${prefix.value}/exercise`
        },
        {
          label: "Programs",
          icon: "i-heroicons-calendar",
          to: `${prefix.value}/program`
        }
      ],
      [
        {
          label: "Members",
          icon: "i-heroicons-user-group",
          to: `${prefix.value}/member`
        },
        {
          label: "Setting",
          icon: "i-heroicons-user",
          to: `${prefix.value}/setting`
        }
      ]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseLayoutDashboard = _sfc_main$1;
      const _component_DashboardCompanyBannerCard = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2;
      _push(ssrRenderComponent(_component_BaseLayoutDashboard, mergeProps({ links: unref(links) }, _attrs), {
        "dashboard-header": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DashboardCompanyBannerCard, { class: "mb-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="absolute z-10 top-0 left-0 m-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    icon: "i-heroicons-arrow-left",
                    label: "Back",
                    variant: "solid",
                    to: `/dashboard/company/${_ctx.$route.params.companyId}`
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "absolute z-10 top-0 left-0 m-4" }, [
                      createVNode(_component_UButton, {
                        icon: "i-heroicons-arrow-left",
                        label: "Back",
                        variant: "solid",
                        to: `/dashboard/company/${_ctx.$route.params.companyId}`
                      }, null, 8, ["to"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DashboardCompanyBannerCard, { class: "mb-8" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "absolute z-10 top-0 left-0 m-4" }, [
                    createVNode(_component_UButton, {
                      icon: "i-heroicons-arrow-left",
                      label: "Back",
                      variant: "solid",
                      to: `/dashboard/company/${_ctx.$route.params.companyId}`
                    }, null, 8, ["to"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard-company-manage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-company-manage-hFFwz7-C.mjs.map
