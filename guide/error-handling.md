# 错误处理

## 全局禁用扩展和脚本系统

当遇到由扩展引发的异常导致你无法通过正常途径移除扩展（比如顶部菜单栏数据损坏或被遮罩，或卸载返回错误）时，你可以在嘉立创 EDA 专业版编辑器的 URL 内添加 `safetyMode=true` 参数以全局禁用扩展和脚本系统：

```diff
- https://pro.lceda.cn/editor
+ https://pro.lceda.cn/editor?safetyMode=true
```

::: tip

如果你使用的是客户端，可以按三次快捷键 <kbd>F12</kbd> 打开开发人员工具，并在控制台内输入：

```javascript
window.location.href = 'https://client/editor?safetyMode=true';
```

即可全局禁用扩展和脚本系统。

:::

::: tip

如果你希望同时进入调试模式，可以再添加 `cll=debug` 参数：

```diff
- https://pro.lceda.cn/editor?safetyMode=true
+ https://pro.lceda.cn/editor?safetyMode=true&cll=debug
```

:::

## 全局移除所有扩展

::: danger

**这是一个危险操作！** 你的所有已安装扩展和独立脚本将被移除且无法恢复，仅在确定是由扩展引发的严重错误且无法通过常规手段解决时，才应使用此方法。

:::

::: details 灭霸模式开关

```diff
- https://pro.lceda.cn/editor
+ https://pro.lceda.cn/editor?DANGEROUS_OPERATION_DeleteExtensionStorage=true
```

:::
