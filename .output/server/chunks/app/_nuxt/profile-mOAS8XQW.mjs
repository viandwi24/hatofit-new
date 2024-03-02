import { _ as __nuxt_component_0 } from './Card-FdT8GQuI.mjs';
import { defineComponent, onUnmounted, ref, provide, useSSRContext, mergeProps, withCtx, createVNode, unref } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import { u as useId, _ as __nuxt_component_2, a as __nuxt_component_3 } from './Input-sJnCE4C6.mjs';
import { useEventBus } from '@vueuse/core';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_8 } from './SelectMenu-EZqWnZTs.mjs';
import { a as __nuxt_component_3$1 } from './Button-kAcpi0J0.mjs';
import 'tailwind-merge';
import './selectMenu-YFOg1enb.mjs';
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
import './useFormGroup-UEyTjmzX.mjs';
import './Avatar-tswZooNR.mjs';
import './usePopper-Q71pE1n8.mjs';
import './nuxt-link-l5vQ35gn.mjs';
import './Icon-wPOwyXQ9.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-1UftMXvm.mjs';

class FormException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, FormException.prototype);
  }
}
const _sfc_main$1 = defineComponent({
  props: {
    schema: {
      type: Object,
      default: void 0
    },
    state: {
      type: Object,
      required: true
    },
    validate: {
      type: Function,
      default: () => []
    },
    validateOn: {
      type: Array,
      default: () => ["blur", "input", "change", "submit"]
    }
  },
  emits: ["submit", "error"],
  setup(props, { expose, emit }) {
    const formId = useId("$Z55GngiEgp");
    const bus = useEventBus(`form-${formId}`);
    onUnmounted(() => {
      bus.reset();
    });
    const errors = ref([]);
    provide("form-errors", errors);
    provide("form-events", bus);
    const inputs = ref({});
    provide("form-inputs", inputs);
    async function getErrors() {
      let errs = await props.validate(props.state);
      if (props.schema) {
        if (isZodSchema(props.schema)) {
          errs = errs.concat(await getZodErrors(props.state, props.schema));
        } else if (isYupSchema(props.schema)) {
          errs = errs.concat(await getYupErrors(props.state, props.schema));
        } else if (isJoiSchema(props.schema)) {
          errs = errs.concat(await getJoiErrors(props.state, props.schema));
        } else if (isValibotSchema(props.schema)) {
          errs = errs.concat(await getValibotError(props.state, props.schema));
        } else {
          throw new Error("Form validation failed: Unsupported form schema");
        }
      }
      return errs;
    }
    async function validate(path, opts = { silent: false }) {
      let paths = path;
      if (path && !Array.isArray(path)) {
        paths = [path];
      }
      if (paths) {
        const otherErrors = errors.value.filter(
          (error) => !paths.includes(error.path)
        );
        const pathErrors = (await getErrors()).filter(
          (error) => paths.includes(error.path)
        );
        errors.value = otherErrors.concat(pathErrors);
      } else {
        errors.value = await getErrors();
      }
      if (!opts.silent && errors.value.length > 0) {
        throw new FormException(
          `Form validation failed: ${JSON.stringify(errors.value, null, 2)}`
        );
      }
      return props.state;
    }
    async function onSubmit(payload) {
      var _a;
      const event = payload;
      try {
        if ((_a = props.validateOn) == null ? void 0 : _a.includes("submit")) {
          await validate();
        }
        const submitEvent = {
          ...event,
          data: props.state
        };
        emit("submit", submitEvent);
      } catch (error) {
        if (!(error instanceof FormException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: errors.value.map((err) => ({
            ...err,
            id: inputs.value[err.path]
          }))
        };
        emit("error", errorEvent);
      }
    }
    expose({
      validate,
      errors,
      setErrors(errs, path) {
        errors.value = errs;
        if (path) {
          errors.value = errors.value.filter(
            (error) => error.path !== path
          ).concat(errs);
        } else {
          errors.value = errs;
        }
      },
      async submit() {
        await onSubmit(new Event("submit"));
      },
      getErrors(path) {
        if (path) {
          return errors.value.filter((err) => err.path === path);
        }
        return errors.value;
      },
      clear(path) {
        if (path) {
          errors.value = errors.value.filter((err) => err.path !== path);
        } else {
          errors.value = [];
        }
      }
    });
    return {
      onSubmit
    };
  }
});
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== void 0;
}
async function getYupErrors(state, schema) {
  try {
    await schema.validate(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isYupError(error)) {
      return error.inner.map((issue) => {
        var _a;
        return {
          path: (_a = issue.path) != null ? _a : "",
          message: issue.message
        };
      });
    } else {
      throw error;
    }
  }
}
function isZodSchema(schema) {
  return schema.parse !== void 0;
}
async function getZodErrors(state, schema) {
  const result = await schema.safeParseAsync(state);
  if (result.success === false) {
    return result.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message
    }));
  }
  return [];
}
function isJoiSchema(schema) {
  return schema.validateAsync !== void 0 && schema.id !== void 0;
}
function isJoiError(error) {
  return error.isJoi === true;
}
async function getJoiErrors(state, schema) {
  try {
    await schema.validateAsync(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isJoiError(error)) {
      return error.details.map((detail) => ({
        path: detail.path.join("."),
        message: detail.message
      }));
    } else {
      throw error;
    }
  }
}
function isValibotSchema(schema) {
  return schema._parse !== void 0;
}
async function getValibotError(state, schema) {
  const result = await schema._parse(state);
  if (result.issues) {
    return result.issues.map((issue) => {
      var _a;
      return {
        path: ((_a = issue.path) == null ? void 0 : _a.map((p) => p.key).join(".")) || "",
        message: issue.message
      };
    });
  }
  return [];
}
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</form>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const state = ref({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@mail.com",
      dateOfBirth: "",
      weight: 70,
      height: 50,
      gender: "male"
    });
    const changePasswordState = ref({
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0;
      const _component_UForm = __nuxt_component_1;
      const _component_UFormGroup = __nuxt_component_2;
      const _component_UInput = __nuxt_component_3;
      const _component_USelectMenu = __nuxt_component_8;
      const _component_UButton = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Profile</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Profile")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "solid",
              color: "primary",
              label: "Save"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end" }, [
                createVNode(_component_UButton, {
                  variant: "solid",
                  color: "primary",
                  label: "Save"
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              state: unref(state),
              class: "flex flex-col gap-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-4 flex-1 w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "First Name",
                    name: "firstName",
                    class: "flex-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).firstName,
                          "onUpdate:modelValue": ($event) => unref(state).firstName = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).firstName,
                            "onUpdate:modelValue": ($event) => unref(state).firstName = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Last Name",
                    name: "lastName",
                    class: "flex-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).lastName,
                          "onUpdate:modelValue": ($event) => unref(state).lastName = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).lastName,
                            "onUpdate:modelValue": ($event) => unref(state).lastName = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex gap-4 flex-1 w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Date of Birth",
                    name: "dateOfBirth",
                    class: "flex-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          type: "date",
                          modelValue: unref(state).dateOfBirth,
                          "onUpdate:modelValue": ($event) => unref(state).dateOfBirth = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            type: "date",
                            modelValue: unref(state).dateOfBirth,
                            "onUpdate:modelValue": ($event) => unref(state).dateOfBirth = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Gender",
                    name: "gender",
                    class: "flex-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_USelectMenu, {
                          modelValue: unref(state).gender,
                          "onUpdate:modelValue": ($event) => unref(state).gender = $event,
                          options: ["male", "female"]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(state).gender,
                            "onUpdate:modelValue": ($event) => unref(state).gender = $event,
                            options: ["male", "female"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex gap-4 flex-1 w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Weight",
                    name: "weight",
                    class: "flex-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          type: "number",
                          modelValue: unref(state).weight,
                          "onUpdate:modelValue": ($event) => unref(state).weight = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            type: "number",
                            modelValue: unref(state).weight,
                            "onUpdate:modelValue": ($event) => unref(state).weight = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Height",
                    name: "height",
                    class: "flex-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          type: "number",
                          modelValue: unref(state).height,
                          "onUpdate:modelValue": ($event) => unref(state).height = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            type: "number",
                            modelValue: unref(state).height,
                            "onUpdate:modelValue": ($event) => unref(state).height = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-4 flex-1 w-full" }, [
                      createVNode(_component_UFormGroup, {
                        label: "First Name",
                        name: "firstName",
                        class: "flex-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).firstName,
                            "onUpdate:modelValue": ($event) => unref(state).firstName = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Last Name",
                        name: "lastName",
                        class: "flex-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).lastName,
                            "onUpdate:modelValue": ($event) => unref(state).lastName = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex gap-4 flex-1 w-full" }, [
                      createVNode(_component_UFormGroup, {
                        label: "Date of Birth",
                        name: "dateOfBirth",
                        class: "flex-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "date",
                            modelValue: unref(state).dateOfBirth,
                            "onUpdate:modelValue": ($event) => unref(state).dateOfBirth = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Gender",
                        name: "gender",
                        class: "flex-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_USelectMenu, {
                            modelValue: unref(state).gender,
                            "onUpdate:modelValue": ($event) => unref(state).gender = $event,
                            options: ["male", "female"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex gap-4 flex-1 w-full" }, [
                      createVNode(_component_UFormGroup, {
                        label: "Weight",
                        name: "weight",
                        class: "flex-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "number",
                            modelValue: unref(state).weight,
                            "onUpdate:modelValue": ($event) => unref(state).weight = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Height",
                        name: "height",
                        class: "flex-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            type: "number",
                            modelValue: unref(state).height,
                            "onUpdate:modelValue": ($event) => unref(state).height = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UForm, {
                state: unref(state),
                class: "flex flex-col gap-4"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex gap-4 flex-1 w-full" }, [
                    createVNode(_component_UFormGroup, {
                      label: "First Name",
                      name: "firstName",
                      class: "flex-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).firstName,
                          "onUpdate:modelValue": ($event) => unref(state).firstName = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "Last Name",
                      name: "lastName",
                      class: "flex-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).lastName,
                          "onUpdate:modelValue": ($event) => unref(state).lastName = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex gap-4 flex-1 w-full" }, [
                    createVNode(_component_UFormGroup, {
                      label: "Date of Birth",
                      name: "dateOfBirth",
                      class: "flex-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          type: "date",
                          modelValue: unref(state).dateOfBirth,
                          "onUpdate:modelValue": ($event) => unref(state).dateOfBirth = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "Gender",
                      name: "gender",
                      class: "flex-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelectMenu, {
                          modelValue: unref(state).gender,
                          "onUpdate:modelValue": ($event) => unref(state).gender = $event,
                          options: ["male", "female"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex gap-4 flex-1 w-full" }, [
                    createVNode(_component_UFormGroup, {
                      label: "Weight",
                      name: "weight",
                      class: "flex-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          type: "number",
                          modelValue: unref(state).weight,
                          "onUpdate:modelValue": ($event) => unref(state).weight = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "Height",
                      name: "height",
                      class: "flex-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          type: "number",
                          modelValue: unref(state).height,
                          "onUpdate:modelValue": ($event) => unref(state).height = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["state"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex gap-4"><div class="flex-1">`);
      _push(ssrRenderComponent(_component_UCard, { class: "" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Change Email</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Change Email")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "solid",
              color: "primary",
              label: "Change Email"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end" }, [
                createVNode(_component_UButton, {
                  variant: "solid",
                  color: "primary",
                  label: "Change Email"
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              state: unref(state),
              class: "flex flex-col gap-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Email",
                    name: "email"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: unref(state).email,
                          "onUpdate:modelValue": ($event) => unref(state).email = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: unref(state).email,
                            "onUpdate:modelValue": ($event) => unref(state).email = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UFormGroup, {
                      label: "Email",
                      name: "email"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: unref(state).email,
                          "onUpdate:modelValue": ($event) => unref(state).email = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_UForm, {
                state: unref(state),
                class: "flex flex-col gap-4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UFormGroup, {
                    label: "Email",
                    name: "email"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: unref(state).email,
                        "onUpdate:modelValue": ($event) => unref(state).email = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["state"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "flex-1" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold"${_scopeId}>Change Password</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold" }, "Change Password")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "solid",
              color: "primary",
              label: "Change Email"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end" }, [
                createVNode(_component_UButton, {
                  variant: "solid",
                  color: "primary",
                  label: "Change Email"
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              state: unref(changePasswordState),
              class: "flex flex-col gap-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Old Password",
                    name: "oldPassword"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          type: "password",
                          modelValue: unref(changePasswordState).oldPassword,
                          "onUpdate:modelValue": ($event) => unref(changePasswordState).oldPassword = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            type: "password",
                            modelValue: unref(changePasswordState).oldPassword,
                            "onUpdate:modelValue": ($event) => unref(changePasswordState).oldPassword = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "New Password",
                    name: "newPassword"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          type: "password",
                          modelValue: unref(changePasswordState).newPassword,
                          "onUpdate:modelValue": ($event) => unref(changePasswordState).newPassword = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            type: "password",
                            modelValue: unref(changePasswordState).newPassword,
                            "onUpdate:modelValue": ($event) => unref(changePasswordState).newPassword = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormGroup, {
                    label: "Confirm Password",
                    name: "confirmPassword"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          type: "password",
                          modelValue: unref(changePasswordState).confirmPassword,
                          "onUpdate:modelValue": ($event) => unref(changePasswordState).confirmPassword = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            type: "password",
                            modelValue: unref(changePasswordState).confirmPassword,
                            "onUpdate:modelValue": ($event) => unref(changePasswordState).confirmPassword = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UFormGroup, {
                      label: "Old Password",
                      name: "oldPassword"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          type: "password",
                          modelValue: unref(changePasswordState).oldPassword,
                          "onUpdate:modelValue": ($event) => unref(changePasswordState).oldPassword = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "New Password",
                      name: "newPassword"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          type: "password",
                          modelValue: unref(changePasswordState).newPassword,
                          "onUpdate:modelValue": ($event) => unref(changePasswordState).newPassword = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormGroup, {
                      label: "Confirm Password",
                      name: "confirmPassword"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          type: "password",
                          modelValue: unref(changePasswordState).confirmPassword,
                          "onUpdate:modelValue": ($event) => unref(changePasswordState).confirmPassword = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_UForm, {
                state: unref(changePasswordState),
                class: "flex flex-col gap-4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UFormGroup, {
                    label: "Old Password",
                    name: "oldPassword"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        type: "password",
                        modelValue: unref(changePasswordState).oldPassword,
                        "onUpdate:modelValue": ($event) => unref(changePasswordState).oldPassword = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormGroup, {
                    label: "New Password",
                    name: "newPassword"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        type: "password",
                        modelValue: unref(changePasswordState).newPassword,
                        "onUpdate:modelValue": ($event) => unref(changePasswordState).newPassword = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormGroup, {
                    label: "Confirm Password",
                    name: "confirmPassword"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        type: "password",
                        modelValue: unref(changePasswordState).confirmPassword,
                        "onUpdate:modelValue": ($event) => unref(changePasswordState).confirmPassword = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["state"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-mOAS8XQW.mjs.map
