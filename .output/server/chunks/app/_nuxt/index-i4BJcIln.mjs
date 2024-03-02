import { _ as __nuxt_component_2 } from './nuxt-img-W6WFka4o.mjs';
import { _ as __nuxt_component_4 } from './Dropdown-7SK4kIQ5.mjs';
import { a as __nuxt_component_3 } from './Button-kAcpi0J0.mjs';
import { defineComponent, ref, h, computed, provide, onMounted, watch, watchEffect, Fragment, onUnmounted, inject, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, renderList, useSSRContext } from 'vue';
import { f, a as a$1, O, o as o$1, H as H$1, T as T$1, t as t$1, b, N as N$1, u as u$2, c as o$2, d as T, e as t, m, P, g as N } from './usePopper-Q71pE1n8.mjs';
import { _ as __nuxt_component_0 } from './Card-FdT8GQuI.mjs';
import __nuxt_component_1 from './Icon-wPOwyXQ9.mjs';
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
import './nuxt-link-l5vQ35gn.mjs';
import './Avatar-tswZooNR.mjs';
import './selectMenu-YFOg1enb.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-1UftMXvm.mjs';

let d = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t2) {
  let n = ref(true);
  return () => n.value ? h(f, { as: "button", type: "button", features: a$1.Focusable, onFocus(o2) {
    o2.preventDefault();
    let e, a2 = 50;
    function r() {
      var u2;
      if (a2-- <= 0) {
        e && cancelAnimationFrame(e);
        return;
      }
      if ((u2 = t2.onFocus) != null && u2.call(t2)) {
        n.value = false, cancelAnimationFrame(e);
        return;
      }
      e = requestAnimationFrame(r);
    }
    e = requestAnimationFrame(r);
  } }) : null;
} });
var te = ((i) => (i[i.Forwards = 0] = "Forwards", i[i.Backwards = 1] = "Backwards", i))(te || {}), le = ((s) => (s[s.Less = -1] = "Less", s[s.Equal = 0] = "Equal", s[s.Greater = 1] = "Greater", s))(le || {});
let U = Symbol("TabsContext");
function k(a2) {
  let v = inject(U, null);
  if (v === null) {
    let i = new Error(`<${a2} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i, k), i;
  }
  return v;
}
let j = Symbol("TabsSSRContext"), xe = defineComponent({ name: "TabGroup", emits: { change: (a2) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a2, { slots: v, attrs: i, emit: s }) {
  var P2;
  let l = ref((P2 = a2.selectedIndex) != null ? P2 : a2.defaultIndex), n = ref([]), o$12 = ref([]), h$1 = computed(() => a2.selectedIndex !== null), b2 = computed(() => h$1.value ? a2.selectedIndex : l.value);
  function m2(t2) {
    var S;
    let e = O(r.tabs.value, o$1), u$1 = O(r.panels.value, o$1), f2 = e.filter((p) => {
      var g;
      return !((g = o$1(p)) != null && g.hasAttribute("disabled"));
    });
    if (t2 < 0 || t2 > e.length - 1) {
      let p = u$2(l.value === null ? 0 : Math.sign(t2 - l.value), { [-1]: () => 1, [0]: () => u$2(Math.sign(t2), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 }), g = u$2(p, { [0]: () => e.indexOf(f2[0]), [1]: () => e.indexOf(f2[f2.length - 1]) });
      g !== -1 && (l.value = g), r.tabs.value = e, r.panels.value = u$1;
    } else {
      let p = e.slice(0, t2), G = [...e.slice(t2), ...p].find((W) => f2.includes(W));
      if (!G)
        return;
      let B = (S = e.indexOf(G)) != null ? S : r.selectedIndex.value;
      B === -1 && (B = r.selectedIndex.value), l.value = B, r.tabs.value = e, r.panels.value = u$1;
    }
  }
  let r = { selectedIndex: computed(() => {
    var t2, e;
    return (e = (t2 = l.value) != null ? t2 : a2.defaultIndex) != null ? e : null;
  }), orientation: computed(() => a2.vertical ? "vertical" : "horizontal"), activation: computed(() => a2.manual ? "manual" : "auto"), tabs: n, panels: o$12, setSelectedIndex(t2) {
    b2.value !== t2 && s("change", t2), h$1.value || m2(t2);
  }, registerTab(t2) {
    var f2;
    if (n.value.includes(t2))
      return;
    let e = n.value[l.value];
    n.value.push(t2), n.value = O(n.value, o$1);
    let u2 = (f2 = n.value.indexOf(e)) != null ? f2 : l.value;
    u2 !== -1 && (l.value = u2);
  }, unregisterTab(t2) {
    let e = n.value.indexOf(t2);
    e !== -1 && n.value.splice(e, 1);
  }, registerPanel(t2) {
    o$12.value.includes(t2) || (o$12.value.push(t2), o$12.value = O(o$12.value, o$1));
  }, unregisterPanel(t2) {
    let e = o$12.value.indexOf(t2);
    e !== -1 && o$12.value.splice(e, 1);
  } };
  provide(U, r);
  let w = ref({ tabs: [], panels: [] }), y = ref(false);
  onMounted(() => {
    y.value = true;
  }), provide(j, computed(() => y.value ? null : w.value));
  let E = computed(() => a2.selectedIndex);
  return onMounted(() => {
    watch([E], () => {
      var t2;
      return m2((t2 = a2.selectedIndex) != null ? t2 : a2.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!h$1.value || b2.value == null || r.tabs.value.length <= 0)
      return;
    let t2 = O(r.tabs.value, o$1);
    t2.some((u2, f2) => o$1(r.tabs.value[f2]) !== o$1(u2)) && r.setSelectedIndex(t2.findIndex((u2) => o$1(u2) === o$1(r.tabs.value[b2.value])));
  }), () => {
    let t2 = { selectedIndex: l.value };
    return h(Fragment, [n.value.length <= 0 && h(d, { onFocus: () => {
      for (let e of n.value) {
        let u2 = o$1(e);
        if ((u2 == null ? void 0 : u2.tabIndex) === 0)
          return u2.focus(), true;
      }
      return false;
    } }), H$1({ theirProps: { ...i, ...T$1(a2, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t2, slots: v, attrs: i, name: "TabGroup" })]);
  };
} }), Ie = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { attrs: v, slots: i }) {
  let s = k("TabList");
  return () => {
    let l = { selectedIndex: s.selectedIndex.value }, n = { role: "tablist", "aria-orientation": s.orientation.value };
    return H$1({ ourProps: n, theirProps: a2, slot: l, attrs: v, slots: i, name: "TabList" });
  };
} }), ye = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-tabs-tab-${t$1()}` } }, setup(a2, { attrs: v, slots: i, expose: s }) {
  let l = k("Tab"), n = ref(null);
  s({ el: n, $el: n }), onMounted(() => l.registerTab(n)), onUnmounted(() => l.unregisterTab(n));
  let o$2$1 = inject(j), h2 = computed(() => {
    if (o$2$1.value) {
      let e = o$2$1.value.tabs.indexOf(a2.id);
      return e === -1 ? o$2$1.value.tabs.push(a2.id) - 1 : e;
    }
    return -1;
  }), b$1 = computed(() => {
    let e = l.tabs.value.indexOf(n);
    return e === -1 ? h2.value : e;
  }), m$1 = computed(() => b$1.value === l.selectedIndex.value);
  function r(e) {
    var f2;
    let u2 = e();
    if (u2 === T.Success && l.activation.value === "auto") {
      let S = (f2 = m(n)) == null ? void 0 : f2.activeElement, p = l.tabs.value.findIndex((g) => o$1(g) === S);
      p !== -1 && l.setSelectedIndex(p);
    }
    return u2;
  }
  function w(e) {
    let u$1 = l.tabs.value.map((S) => o$1(S)).filter(Boolean);
    if (e.key === o$2.Space || e.key === o$2.Enter) {
      e.preventDefault(), e.stopPropagation(), l.setSelectedIndex(b$1.value);
      return;
    }
    switch (e.key) {
      case o$2.Home:
      case o$2.PageUp:
        return e.preventDefault(), e.stopPropagation(), r(() => P(u$1, N.First));
      case o$2.End:
      case o$2.PageDown:
        return e.preventDefault(), e.stopPropagation(), r(() => P(u$1, N.Last));
    }
    if (r(() => u$2(l.orientation.value, { vertical() {
      return e.key === o$2.ArrowUp ? P(u$1, N.Previous | N.WrapAround) : e.key === o$2.ArrowDown ? P(u$1, N.Next | N.WrapAround) : T.Error;
    }, horizontal() {
      return e.key === o$2.ArrowLeft ? P(u$1, N.Previous | N.WrapAround) : e.key === o$2.ArrowRight ? P(u$1, N.Next | N.WrapAround) : T.Error;
    } })) === T.Success)
      return e.preventDefault();
  }
  let y = ref(false);
  function E() {
    var e;
    y.value || (y.value = true, !a2.disabled && ((e = o$1(n)) == null || e.focus({ preventScroll: true }), l.setSelectedIndex(b$1.value), t(() => {
      y.value = false;
    })));
  }
  function P$1(e) {
    e.preventDefault();
  }
  let t2 = b(computed(() => ({ as: a2.as, type: v.type })), n);
  return () => {
    var p;
    let e = { selected: m$1.value }, { id: u2, ...f2 } = a2, S = { ref: n, onKeydown: w, onMousedown: P$1, onClick: E, id: u2, role: "tab", type: t2.value, "aria-controls": (p = o$1(l.panels.value[b$1.value])) == null ? void 0 : p.id, "aria-selected": m$1.value, tabIndex: m$1.value ? 0 : -1, disabled: a2.disabled ? true : void 0 };
    return H$1({ ourProps: S, theirProps: f2, slot: e, attrs: v, slots: i, name: "Tab" });
  };
} }), Se = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { slots: v, attrs: i }) {
  let s = k("TabPanels");
  return () => {
    let l = { selectedIndex: s.selectedIndex.value };
    return H$1({ theirProps: a2, ourProps: {}, slot: l, attrs: i, slots: v, name: "TabPanels" });
  };
} }), ge = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-tabs-panel-${t$1()}` }, tabIndex: { type: Number, default: 0 } }, setup(a2, { attrs: v, slots: i, expose: s }) {
  let l = k("TabPanel"), n = ref(null);
  s({ el: n, $el: n }), onMounted(() => l.registerPanel(n)), onUnmounted(() => l.unregisterPanel(n));
  let o$12 = inject(j), h$1 = computed(() => {
    if (o$12.value) {
      let r = o$12.value.panels.indexOf(a2.id);
      return r === -1 ? o$12.value.panels.push(a2.id) - 1 : r;
    }
    return -1;
  }), b2 = computed(() => {
    let r = l.panels.value.indexOf(n);
    return r === -1 ? h$1.value : r;
  }), m2 = computed(() => b2.value === l.selectedIndex.value);
  return () => {
    var t2;
    let r = { selected: m2.value }, { id: w, tabIndex: y, ...E } = a2, P2 = { ref: n, id: w, role: "tabpanel", "aria-labelledby": (t2 = o$1(l.tabs.value[b2.value])) == null ? void 0 : t2.id, tabIndex: m2.value ? y : -1 };
    return !m2.value && a2.unmount && !a2.static ? h(f, { as: "span", ...P2 }) : H$1({ ourProps: P2, theirProps: E, slot: r, attrs: v, slots: i, features: N$1.Static | N$1.RenderStrategy, visible: m2.value, name: "TabPanel" });
  };
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_2;
      const _component_UDropdown = __nuxt_component_4;
      const _component_UButton = __nuxt_component_3;
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/company/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-i4BJcIln.mjs.map
