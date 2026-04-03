# 内联框架支持

在一些应用场景下，扩展希望拥有完全自定义的窗口，它不局限于嘉立创 EDA 提供的弹窗和控件，此时我们提供了使用内联框架构建窗口的方式。

想要使用内联框架，你需要将所有文件保存在扩展的 `/iframe/` 目录中，并使用 [SYS_IFrame.openIFrame()](../reference/pro-api.sys_iframe.openiframe) 方法加载指定的 `html` 文件作为内联框架的内容。

```typescript
// 此处示例加载扩展 /iframe/ 目录下的 index.html 文件，窗口的高度和宽度均为 500px
eda.sys_IFrame.openIFrame('/iframe/index.html', 500, 500);
```

::: tip
文件不保存在 `/iframe/` 目录下也可以被加载和索引，但我们建议将 `/iframe/` 目录作为内联框架文件的存储目录，这样组织文件更加直观。

`htmlFileName` 参数所指代的 URI 从扩展包的根路径起始，你可以使用 `/` 或直接以 `iframe/` 文件夹名称起始。
:::

扩展 API 会自动读取指定的 `html` 文件及其关联的其他文件，但不会继续递归解析，这是我们的安全资源访问规则的限制。

如需在单个扩展内打开多个 IFrame 窗口，请为每个 IFrame 指定 ID。
