import {
  ComputedOptions,
  MethodOptions,
  EmitsOptions,
  ComponentOptionsBase,
  ComponentInjectOptions,
  SlotsType,
} from "vue";

export type ComponentPublicInstance<
  P = {}, // props type extracted from props option
  _B = {}, // raw bindings returned from setup()
  _D = {}, // return from data()
  _C extends ComputedOptions = {},
  _M extends MethodOptions = {},
  _E extends EmitsOptions = {},
  _PublicProps = P,
  _Defaults = {},
  _MakeDefaultsOptional extends boolean = false,
  _Options = ComponentOptionsBase<any, any, any, any, any, any, any, any, any>,
  _I extends ComponentInjectOptions = {},
  _S extends SlotsType = {}
> = {};
