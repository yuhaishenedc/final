// This file was procedurally generated from the following sources:
// - src/dynamic-import/ns-get-own-property-str-found-init.case
// - src/dynamic-import/namespace/await.template
/*---
description: Behavior of the [[GetOwnProperty]] internal method with a string argument describing an initialized binding (value from await resolving)
esid: sec-finishdynamicimport
features: [dynamic-import]
flags: [generated, async]
info: |
    Runtime Semantics: FinishDynamicImport ( referencingScriptOrModule, specifier, promiseCapability, completion )

        1. If completion is an abrupt completion, ...
        2. Otherwise,
            ...
            d. Let namespace be GetModuleNamespace(moduleRecord).
            e. If namespace is an abrupt completion, perform ! Call(promiseCapability.[[Reject]], undefined, « namespace.[[Value]] »).
            f. Otherwise, perform ! Call(promiseCapability.[[Resolve]], undefined, « namespace.[[Value]] »).

    Runtime Semantics: GetModuleNamespace ( module )

        ...
        3. Let namespace be module.[[Namespace]].
        4. If namespace is undefined, then
            a. Let exportedNames be ? module.GetExportedNames(« »).
            b. Let unambiguousNames be a new empty List.
            c. For each name that is an element of exportedNames, do
                i. Let resolution be ? module.ResolveExport(name, « »).
                ii. If resolution is a ResolvedBinding Record, append name to unambiguousNames.
            d. Set namespace to ModuleNamespaceCreate(module, unambiguousNames).
        5. Return namespace.

    ModuleNamespaceCreate ( module, exports )

        ...
        4. Let M be a newly created object.
        5. Set M's essential internal methods to the definitions specified in 9.4.6.
        7. Let sortedExports be a new List containing the same values as the list exports where the
        values are ordered as if an Array of the same values had been sorted using Array.prototype.sort
        using undefined as comparefn.
        8. Set M.[[Exports]] to sortedExports.
        9. Create own properties of M corresponding to the definitions in 26.3.
        10. Set module.[[Namespace]] to M.
        11. Return M.

    26.3 Module Namespace Objects

        A Module Namespace Object is a module namespace exotic object that provides runtime
        property-based access to a module's exported bindings. There is no constructor function for
        Module Namespace Objects. Instead, such an object is created for each module that is imported
        by an ImportDeclaration that includes a NameSpaceImport.

        In addition to the properties specified in 9.4.6 each Module Namespace Object has the
        following own property:

    26.3.1 @@toStringTag

        The initial value of the @@toStringTag property is the String value "Module".

        This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.

    Module Namespace Exotic Objects

        A module namespace object is an exotic object that exposes the bindings exported from an
        ECMAScript Module (See 15.2.3). There is a one-to-one correspondence between the String-keyed
        own properties of a module namespace exotic object and the binding names exported by the
        Module. The exported bindings include any bindings that are indirectly exported using export *
        export items. Each String-valued own property key is the StringValue of the corresponding
        exported binding name. These are the only String-keyed properties of a module namespace exotic
        object. Each such property has the attributes { [[Writable]]: true, [[Enumerable]]: true,
        [[Configurable]]: false }. Module namespace objects are not extensible.


    1. If Type(P) is Symbol, return OrdinaryGetOwnProperty(O, P).
    2. Let exports be the value of O's [[Exports]] internal slot.
    3. If P is not an element of exports, return undefined.
    4. Let value be ? O.[[Get]](P, O).
    5. Return PropertyDescriptor{[[Value]]: value, [[Writable]]: true,
       [[Enumerable]]: true, [[Configurable]]: false }.

---*/

async function fn() {
    const ns = await import('./module-code_FIXTURE.js');

    var desc;

    assert.sameValue(
      Object.prototype.hasOwnProperty.call(ns, 'local1'), true
    );
    desc = Object.getOwnPropertyDescriptor(ns, 'local1');
    assert.sameValue(desc.value, 'Test262');
    assert.sameValue(desc.enumerable, true, 'local1 enumerable');
    assert.sameValue(desc.writable, true, 'local1 writable');
    assert.sameValue(desc.configurable, false, 'local1 configurable');

    assert.sameValue(
      Object.prototype.hasOwnProperty.call(ns, 'renamed'), true
    );
    desc = Object.getOwnPropertyDescriptor(ns, 'renamed');
    assert.sameValue(desc.value, 'TC39');
    assert.sameValue(desc.enumerable, true, 'renamed enumerable');
    assert.sameValue(desc.writable, true, 'renamed writable');
    assert.sameValue(desc.configurable, false, 'renamed configurable');

    assert.sameValue(
      Object.prototype.hasOwnProperty.call(ns, 'indirect'), true
    );
    desc = Object.getOwnPropertyDescriptor(ns, 'indirect');
    assert.sameValue(desc.value, 'Test262');
    assert.sameValue(desc.enumerable, true, 'indirect enumerable');
    assert.sameValue(desc.writable, true, 'indirect writable');
    assert.sameValue(desc.configurable, false, 'indirect configurable');

    assert.sameValue(
      Object.prototype.hasOwnProperty.call(ns, 'default'), true
    );
    desc = Object.getOwnPropertyDescriptor(ns, 'default');
    assert.sameValue(desc.value, 42);
    assert.sameValue(desc.enumerable, true, 'default enumerable');
    assert.sameValue(desc.writable, true, 'default writable');
    assert.sameValue(desc.configurable, false, 'default configurable');
}

fn().then($DONE, $DONE).catch($DONE);
