define(['dart_sdk', 'packages/reflectable/capability', 'packages/reflected_mustache/mustache', 'packages/reflectable/mirrors'], function(dart_sdk, capability, mustache, mirrors) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const reflectable = capability.reflectable;
  const src__reflectable_builder_based = capability.src__reflectable_builder_based;
  const mustache$ = mustache.mustache;
  const mirrors$ = mirrors.mirrors;
  const _root = Object.create(null);
  const main$46reflectable = Object.create(_root);
  const main = Object.create(_root);
  const $toString = dartx.toString;
  const $noSuchMethod = dartx.noSuchMethod;
  const $hashCode = dartx.hashCode;
  const $runtimeType = dartx.runtimeType;
  const $trim = dartx.trim;
  const $append = dartx.append;
  const $classes = dartx.classes;
  let LinkedMapOfReflectable$ReflectorData = () => (LinkedMapOfReflectable$ReflectorData = dart.constFn(_js_helper.LinkedMap$(reflectable.Reflectable, src__reflectable_builder_based.ReflectorData)))();
  let VoidToObject = () => (VoidToObject = dart.constFn(dart.fnType(core.Object, [])))();
  let IdentityMapOfString$VoidToObject = () => (IdentityMapOfString$VoidToObject = dart.constFn(_js_helper.IdentityMap$(core.String, VoidToObject())))();
  let ObjectToObject = () => (ObjectToObject = dart.constFn(dart.fnType(core.Object, [core.Object])))();
  let IdentityMapOfString$ObjectToObject = () => (IdentityMapOfString$ObjectToObject = dart.constFn(_js_helper.IdentityMap$(core.String, ObjectToObject())))();
  let IdentityMapOfString$Function = () => (IdentityMapOfString$Function = dart.constFn(_js_helper.IdentityMap$(core.String, core.Function)))();
  let dynamicAnddynamicToVersion = () => (dynamicAnddynamicToVersion = dart.constFn(dart.fnType(main.Version, [dart.dynamic, dart.dynamic])))();
  let dynamicToFn = () => (dynamicToFn = dart.constFn(dart.fnType(dynamicAnddynamicToVersion(), [dart.dynamic])))();
  let dynamicAnddynamicAnddynamicToDartLang = () => (dynamicAnddynamicAnddynamicToDartLang = dart.constFn(dart.fnType(main.DartLang, [dart.dynamic, dart.dynamic, dart.dynamic])))();
  let dynamicToFn$ = () => (dynamicToFn$ = dart.constFn(dart.fnType(dynamicAnddynamicAnddynamicToDartLang(), [dart.dynamic])))();
  let JSArrayOfTypeMirror = () => (JSArrayOfTypeMirror = dart.constFn(_interceptors.JSArray$(mirrors$.TypeMirror)))();
  let JSArrayOfDeclarationMirror = () => (JSArrayOfDeclarationMirror = dart.constFn(_interceptors.JSArray$(mirrors$.DeclarationMirror)))();
  let JSArrayOfParameterMirror = () => (JSArrayOfParameterMirror = dart.constFn(_interceptors.JSArray$(mirrors$.ParameterMirror)))();
  let JSArrayOfType = () => (JSArrayOfType = dart.constFn(_interceptors.JSArray$(core.Type)))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let dynamicToFn$0 = () => (dynamicToFn$0 = dart.constFn(dart.fnType(dynamicTobool(), [dart.dynamic])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let dynamicToint = () => (dynamicToint = dart.constFn(dart.fnType(core.int, [dart.dynamic])))();
  let ObjectAndObjectToObject = () => (ObjectAndObjectToObject = dart.constFn(dart.fnType(core.Object, [core.Object, core.Object])))();
  let IdentityMapOfString$ObjectAndObjectToObject = () => (IdentityMapOfString$ObjectAndObjectToObject = dart.constFn(_js_helper.IdentityMap$(core.String, ObjectAndObjectToObject())))();
  let JSArrayOfList = () => (JSArrayOfList = dart.constFn(_interceptors.JSArray$(core.List)))();
  let MapOfSymbol$String = () => (MapOfSymbol$String = dart.constFn(core.Map$(core.Symbol, core.String)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  dart.defineLazy(main$46reflectable, {
    /*main$46reflectable._data*/get _data() {
      return new (LinkedMapOfReflectable$ReflectorData()).from([dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), new src__reflectable_builder_based.ReflectorData.new(JSArrayOfTypeMirror().of([new src__reflectable_builder_based.NonGenericClassMirrorImpl.new("Version", ".Version", 7, 0, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), dart.constList([0, 1, 7], core.int), dart.constList([8, 9, 10, 11, 12, 5, 6], core.int), dart.constList([], core.int), -1, new (IdentityMapOfString$VoidToObject()).new(), new (IdentityMapOfString$ObjectToObject()).new(), new (IdentityMapOfString$Function()).from(["", dart.lazyFn(b => dart.fn((major, minor) => dart.dtest(b) ? new main.Version.new(core.int._check(major), core.int._check(minor)) : null, dynamicAnddynamicToVersion()), dynamicToFn)]), -1, -1, dart.constList([-1], core.int), null, null), new src__reflectable_builder_based.NonGenericClassMirrorImpl.new("DartLang", ".DartLang", 7, 1, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), dart.constList([2, 3, 4, 16], core.int), dart.constList([8, 9, 10, 11, 12, 13, 14, 15], core.int), dart.constList([], core.int), -1, new (IdentityMapOfString$VoidToObject()).new(), new (IdentityMapOfString$ObjectToObject()).new(), new (IdentityMapOfString$Function()).from(["", dart.lazyFn(b => dart.fn((name, version, message) => dart.dtest(b) ? new main.DartLang.new(core.String._check(name), main.Version._check(version), core.String._check(message)) : null, dynamicAnddynamicAnddynamicToDartLang()), dynamicToFn$)]), -1, -1, dart.constList([-1], core.int), null, null)]), JSArrayOfDeclarationMirror().of([new src__reflectable_builder_based.VariableMirrorImpl.new("major", 33797, 0, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), -1, 2, 2, null, null), new src__reflectable_builder_based.VariableMirrorImpl.new("minor", 33797, 0, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), -1, 2, 2, null, null), new src__reflectable_builder_based.VariableMirrorImpl.new("name", 33797, 1, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), -1, 3, 3, null, null), new src__reflectable_builder_based.VariableMirrorImpl.new("version", 33797, 1, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), 0, 0, 0, null, null), new src__reflectable_builder_based.VariableMirrorImpl.new("message", 33797, 1, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), -1, 3, 3, null, null), new src__reflectable_builder_based.ImplicitGetterMirrorImpl.new(dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), 0, 2, 2, 5), new src__reflectable_builder_based.ImplicitGetterMirrorImpl.new(dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), 1, 2, 2, 6), new src__reflectable_builder_based.MethodMirrorImpl.new("", 0, 0, -1, 0, 0, null, dart.constList([0, 1], core.int), dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), null), new src__reflectable_builder_based.MethodMirrorImpl.new("==", 131074, null, -1, 4, 4, null, dart.constList([2], core.int), dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), null), new src__reflectable_builder_based.MethodMirrorImpl.new("toString", 131074, null, -1, 3, 3, null, dart.constList([], core.int), dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), null), new src__reflectable_builder_based.MethodMirrorImpl.new("noSuchMethod", 65538, null, null, null, null, null, dart.constList([3], core.int), dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), null), new src__reflectable_builder_based.MethodMirrorImpl.new("hashCode", 131075, null, -1, 2, 2, null, dart.constList([], core.int), dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), null), new src__reflectable_builder_based.MethodMirrorImpl.new("runtimeType", 131075, null, -1, 5, 5, null, dart.constList([], core.int), dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), null), new src__reflectable_builder_based.ImplicitGetterMirrorImpl.new(dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), 2, 3, 3, 13), new src__reflectable_builder_based.ImplicitGetterMirrorImpl.new(dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), 3, 0, 0, 14), new src__reflectable_builder_based.ImplicitGetterMirrorImpl.new(dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), 4, 3, 3, 15), new src__reflectable_builder_based.MethodMirrorImpl.new("", 0, 1, -1, 1, 1, null, dart.constList([4, 5, 6], core.int), dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), null)]), JSArrayOfParameterMirror().of([new src__reflectable_builder_based.ParameterMirrorImpl.new("major", 32774, 7, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), -1, 2, 2, null, null, null, null), new src__reflectable_builder_based.ParameterMirrorImpl.new("minor", 32774, 7, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), -1, 2, 2, null, null, null, null), new src__reflectable_builder_based.ParameterMirrorImpl.new("other", 16390, 8, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), null, null, null, null, null, null, null), new src__reflectable_builder_based.ParameterMirrorImpl.new("invocation", 32774, 10, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), -1, 6, 6, null, null, null, null), new src__reflectable_builder_based.ParameterMirrorImpl.new("name", 32774, 16, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), -1, 3, 3, null, null, null, null), new src__reflectable_builder_based.ParameterMirrorImpl.new("version", 32774, 16, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), 0, 0, 0, null, null, null, null), new src__reflectable_builder_based.ParameterMirrorImpl.new("message", 32774, 16, dart.const(new mustache$.MustacheMirrorsUsedAnnotation.new()), -1, 3, 3, null, null, null, null)]), JSArrayOfType().of([dart.wrapType(main.Version), dart.wrapType(main.DartLang), dart.wrapType(core.int), dart.wrapType(core.String), dart.wrapType(core.bool), dart.wrapType(core.Type), dart.wrapType(core.Invocation)]), 2, new (IdentityMapOfString$ObjectToObject()).from(["==", dart.fn(instance => dart.fn(x => dart.equals(instance, x), dynamicTobool()), dynamicToFn$0()), "toString", dart.fn(instance => dart.bind(instance, $toString), dynamicTodynamic()), "noSuchMethod", dart.fn(instance => dart.bind(instance, $noSuchMethod), dynamicTodynamic()), "hashCode", dart.fn(instance => dart.hashCode(instance), dynamicToint()), "runtimeType", dart.fn(instance => dart.runtimeType(instance), dynamicTodynamic()), "major", dart.fn(instance => dart.dload(instance, 'major'), dynamicTodynamic()), "minor", dart.fn(instance => dart.dload(instance, 'minor'), dynamicTodynamic()), "name", dart.fn(instance => dart.dload(instance, 'name'), dynamicTodynamic()), "version", dart.fn(instance => dart.dload(instance, 'version'), dynamicTodynamic()), "message", dart.fn(instance => dart.dload(instance, 'message'), dynamicTodynamic())]), new (IdentityMapOfString$ObjectAndObjectToObject()).new(), null, JSArrayOfList().of([]))]);
    },
    /*main$46reflectable._memberSymbolMap*/get _memberSymbolMap() {
      return null;
    }
  });
  main$46reflectable.initializeReflectable = function() {
    src__reflectable_builder_based.data = main$46reflectable._data;
    src__reflectable_builder_based.memberSymbolMap = MapOfSymbol$String()._check(main$46reflectable._memberSymbolMap);
  };
  main.Version = class Version extends core.Object {
    get major() {
      return this[major$];
    }
    set major(value) {
      super.major = value;
    }
    get minor() {
      return this[minor$];
    }
    set minor(value) {
      super.minor = value;
    }
  };
  (main.Version.new = function(major, minor) {
    this[major$] = major;
    this[minor$] = minor;
  }).prototype = main.Version.prototype;
  dart.addTypeTests(main.Version);
  const major$ = Symbol("Version.major");
  const minor$ = Symbol("Version.minor");
  dart.setFieldSignature(main.Version, () => ({
    __proto__: dart.getFields(main.Version.__proto__),
    major: dart.finalFieldType(core.int),
    minor: dart.finalFieldType(core.int)
  }));
  main.DartLang = class DartLang extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get version() {
      return this[version$];
    }
    set version(value) {
      super.version = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
  };
  (main.DartLang.new = function(name, version, message) {
    this[name$] = name;
    this[version$] = version;
    this[message$] = message;
  }).prototype = main.DartLang.prototype;
  dart.addTypeTests(main.DartLang);
  const name$ = Symbol("DartLang.name");
  const version$ = Symbol("DartLang.version");
  const message$ = Symbol("DartLang.message");
  dart.setFieldSignature(main.DartLang, () => ({
    __proto__: dart.getFields(main.DartLang.__proto__),
    name: dart.finalFieldType(core.String),
    version: dart.finalFieldType(main.Version),
    message: dart.finalFieldType(core.String)
  }));
  main.main = function() {
    main$46reflectable.initializeReflectable();
    let template = mustache$.Template.new("            <div>\n            Language: {{name}}<br>\n            Version: {{version.major}}.{{version.minor}}<br>\n            Comment: {{message}}\n            </div>\n        "[$trim](), {lenient: false, htmlEscapeValues: false});
    let language = new main.DartLang.new("Dart", new main.Version.new(1, 13), "Your Dart app is running.");
    let content = template.renderString(language);
    let child = html.Element.html(content);
    html.querySelector("#content")[$append](child);
    html.querySelector("body")[$classes].removeWhere(dart.fn(selector => selector === "loading", StringTobool()));
  };
  dart.trackLibraries("web/main.ddc", {
    "main.reflectable.dart": main$46reflectable,
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.reflectable.dart","main.dart"],"names":[],"mappings":"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","file":"main.ddc.js"}');
  // Exports:
  return {
    main$46reflectable: main$46reflectable,
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
