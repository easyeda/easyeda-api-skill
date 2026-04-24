# Error Handling

## Disable Extensions and Scripting Systems Globally

When you encounter an exception caused by an extension that prevents you from removing the extension through the normal route (such as corrupted or masked data in the top menu bar, or an uninstall returning an error), you can globally disable the extension and the scripting system by adding the `safetyMode=true` parameter within the URL of the EasyEDA Professional editor:

```diff
- https://pro.easyeda.com/editor
+ https://pro.easyeda.com/editor?safetyMode=true
```

::: tip

If you wish to enter debug mode at the same time, you can add the `cll=debug` parameter again:

```diff
- https://pro.easyeda.com/editor?safetyMode=true
+ https://pro.easyeda.com/editor?safetyMode=true&cll=debug
```

:::

## Remove All Extensions Globally

::: danger

**DANGEROUS!** All your installed extensions and standalone scripts will be removed and cannot be recovered. This method should only be used if a serious error is confirmed to be caused by an extension and cannot be resolved by conventional means.

:::

::: details Thanos mode switch

```diff
- https://pro.easyeda.com/editor
+ https://pro.easyeda.com/editor?DANGEROUS_OPERATION_DeleteExtensionStorage=true
```

:::
