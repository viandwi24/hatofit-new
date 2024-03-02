import { _ as __nuxt_component_2 } from './nuxt-img-ITPZ6UDr.mjs';
import { _ as __nuxt_component_4 } from './Dropdown-B_my3cre.mjs';
import { a as __nuxt_component_2$1 } from './Button-yd_RrKli.mjs';
import { x as xe, I as Ie, y as ye, S as Se, g as ge } from './tabs-UgIEhoWJ.mjs';
import { _ as __nuxt_component_0 } from './Card-Ncqk5vdy.mjs';
import __nuxt_component_1 from './Icon-WPIsUTag.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'requrl';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import 'tailwind-merge';
import './nuxt-link-1FC4dAQ4.mjs';
import './Avatar-8SGDvSnm.mjs';
import './selectMenu-b22BRv44.mjs';
import './_plugin-vue_export-helper-yVxbj29m.mjs';
import './usePopper-mt32Bdxz.mjs';
import './micro-task-lHIuwgs5.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-1UftMXvm.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_2;
      const _component_UDropdown = __nuxt_component_4;
      const _component_UButton = __nuxt_component_2$1;
      const _component_HeadlessTabGroup = xe;
      const _component_HeadlessTabList = Ie;
      const _component_HeadlessTab = ye;
      const _component_HeadlessTabPanels = Se;
      const _component_HeadlessTabPanel = ge;
      const _component_UCard = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="h-[200px] rounded-xl flex flex-col justify-end bg-gray-200 dark:bg-gray-800 relative overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/scene/risen-wang-20jX9b35r_M-unsplash.jpg",
        alt: "Company Image",
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "blur(2px) brightness(0.7)"
        }
      }, null, _parent));
      _push(`<div class="absolute z-10 top-0 right-0 m-4">`);
      _push(ssrRenderComponent(_component_UDropdown, { items: [
        [
          { label: "Out from company", icon: "i-heroicons-arrow-left-start-on-rectangle-20-solid" }
        ]
      ] }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-heroicons-cog",
              variant: "ghost"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "i-heroicons-cog",
                variant: "ghost"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="z-10 bg-gradient-to-t from-black to-transparent p-4"><div class="text-2xl font-bold">Company Name</div><div>company address</div></div></div>`);
      _push(ssrRenderComponent(_component_HeadlessTabGroup, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HeadlessTabList, { class: "border-b-2 w-auto border-gray-500/20 rounded" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(["Home", "My Exercises", "Information"], (item, i) => {
                    _push3(ssrRenderComponent(_component_HeadlessTab, { as: "template" }, {
                      default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<button class="${ssrRenderClass({
                            "px-2 py-2 text-sm ": true,
                            "rounded bg-gray-300/50 dark:bg-gray-700/50 font-bold": selected,
                            "": !selected
                          })}"${_scopeId3}>${ssrInterpolate(item)}</button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: {
                                "px-2 py-2 text-sm ": true,
                                "rounded bg-gray-300/50 dark:bg-gray-700/50 font-bold": selected,
                                "": !selected
                              }
                            }, toDisplayString(item), 3)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(["Home", "My Exercises", "Information"], (item, i) => {
                      return createVNode(_component_HeadlessTab, { as: "template" }, {
                        default: withCtx(({ selected }) => [
                          createVNode("button", {
                            class: {
                              "px-2 py-2 text-sm ": true,
                              "rounded bg-gray-300/50 dark:bg-gray-700/50 font-bold": selected,
                              "": !selected
                            }
                          }, toDisplayString(item), 3)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HeadlessTabPanels, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_HeadlessTabPanel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div class="font-semibold mb-4"${_scopeId3}>Your Result on this Company Today</div><div class="w-full grid grid-cols-3 gap-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UCard, { class: "relative border-b border-orange-500" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "lets-icons:calories-light",
                                class: "text-6xl absolute right-0 top-0 mt-6 mr-4 text-orange-500"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="font-bold text-3xl"${_scopeId4}>1 Cal</div><div class="ml-1 text-gray-600 dark:text-gray-300"${_scopeId4}>Calories Burn</div>`);
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "lets-icons:calories-light",
                                  class: "text-6xl absolute right-0 top-0 mt-6 mr-4 text-orange-500"
                                }),
                                createVNode("div", { class: "font-bold text-3xl" }, "1 Cal"),
                                createVNode("div", { class: "ml-1 text-gray-600 dark:text-gray-300" }, "Calories Burn")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UCard, { class: "relative border-b border-green-500" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "healthicons:body-outline",
                                class: "text-6xl absolute right-0 top-0 mt-6 mr-4 text-green-500"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="font-bold text-3xl"${_scopeId4}>19.03</div><div class="ml-1 text-gray-600 dark:text-gray-300"${_scopeId4}>BMI</div>`);
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "healthicons:body-outline",
                                  class: "text-6xl absolute right-0 top-0 mt-6 mr-4 text-green-500"
                                }),
                                createVNode("div", { class: "font-bold text-3xl" }, "19.03"),
                                createVNode("div", { class: "ml-1 text-gray-600 dark:text-gray-300" }, "BMI")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", { class: "font-semibold mb-4" }, "Your Result on this Company Today"),
                            createVNode("div", { class: "w-full grid grid-cols-3 gap-4" }, [
                              createVNode(_component_UCard, { class: "relative border-b border-orange-500" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lets-icons:calories-light",
                                    class: "text-6xl absolute right-0 top-0 mt-6 mr-4 text-orange-500"
                                  }),
                                  createVNode("div", { class: "font-bold text-3xl" }, "1 Cal"),
                                  createVNode("div", { class: "ml-1 text-gray-600 dark:text-gray-300" }, "Calories Burn")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UCard, { class: "relative border-b border-green-500" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "healthicons:body-outline",
                                    class: "text-6xl absolute right-0 top-0 mt-6 mr-4 text-green-500"
                                  }),
                                  createVNode("div", { class: "font-bold text-3xl" }, "19.03"),
                                  createVNode("div", { class: "ml-1 text-gray-600 dark:text-gray-300" }, "BMI")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_HeadlessTabPanel, null, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", { class: "font-semibold mb-4" }, "Your Result on this Company Today"),
                          createVNode("div", { class: "w-full grid grid-cols-3 gap-4" }, [
                            createVNode(_component_UCard, { class: "relative border-b border-orange-500" }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "lets-icons:calories-light",
                                  class: "text-6xl absolute right-0 top-0 mt-6 mr-4 text-orange-500"
                                }),
                                createVNode("div", { class: "font-bold text-3xl" }, "1 Cal"),
                                createVNode("div", { class: "ml-1 text-gray-600 dark:text-gray-300" }, "Calories Burn")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UCard, { class: "relative border-b border-green-500" }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "healthicons:body-outline",
                                  class: "text-6xl absolute right-0 top-0 mt-6 mr-4 text-green-500"
                                }),
                                createVNode("div", { class: "font-bold text-3xl" }, "19.03"),
                                createVNode("div", { class: "ml-1 text-gray-600 dark:text-gray-300" }, "BMI")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HeadlessTabList, { class: "border-b-2 w-auto border-gray-500/20 rounded" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(["Home", "My Exercises", "Information"], (item, i) => {
                    return createVNode(_component_HeadlessTab, { as: "template" }, {
                      default: withCtx(({ selected }) => [
                        createVNode("button", {
                          class: {
                            "px-2 py-2 text-sm ": true,
                            "rounded bg-gray-300/50 dark:bg-gray-700/50 font-bold": selected,
                            "": !selected
                          }
                        }, toDisplayString(item), 3)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode(_component_HeadlessTabPanels, null, {
                default: withCtx(() => [
                  createVNode(_component_HeadlessTabPanel, null, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("div", { class: "font-semibold mb-4" }, "Your Result on this Company Today"),
                        createVNode("div", { class: "w-full grid grid-cols-3 gap-4" }, [
                          createVNode(_component_UCard, { class: "relative border-b border-orange-500" }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "lets-icons:calories-light",
                                class: "text-6xl absolute right-0 top-0 mt-6 mr-4 text-orange-500"
                              }),
                              createVNode("div", { class: "font-bold text-3xl" }, "1 Cal"),
                              createVNode("div", { class: "ml-1 text-gray-600 dark:text-gray-300" }, "Calories Burn")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UCard, { class: "relative border-b border-green-500" }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "healthicons:body-outline",
                                class: "text-6xl absolute right-0 top-0 mt-6 mr-4 text-green-500"
                              }),
                              createVNode("div", { class: "font-bold text-3xl" }, "19.03"),
                              createVNode("div", { class: "ml-1 text-gray-600 dark:text-gray-300" }, "BMI")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.bak/user/company/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-sfnbDOqR.mjs.map
