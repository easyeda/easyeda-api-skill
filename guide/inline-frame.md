# Inline Frame Support

In some application scenarios where extensions want to have fully customized windows that are not limited to the popups and controls provided by EasyEDA, we provide a way to build windows using inline frames.

To use inline frames, you need to save all files in the extension's `/iframe/` directory and use [SYS_IFrame.openIFrame()](../reference/pro-api.sys_iframe.openiframe) method to load the specified `html` file as the content of the inline frame.

```typescript
// This example loads the index.html file in the /iframe/ directory with a window of 500px in height and width
eda.sys_IFrame.openIFrame('/iframe/index.html', 500, 500);
```

::: tip
Files can be loaded and indexed without being stored in the `/iframe/` directory, but it is recommended that the `/iframe/` directory be used as the storage directory for inline frame files for a more intuitive organization of the files.

The URI referred to by the `htmlFileName` parameter starts at the root path of the extension package, you can use `/` or start directly with the `iframe/` folder name.
:::

The extension API will automatically read the specified `html` file and other files associated with it, but will not continue to recursively parse it, due to the limitations of our secure resource access rules.

To open multiple IFrame windows within a single extension, specify an ID for each IFrame.
