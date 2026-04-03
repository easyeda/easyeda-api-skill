# 调用扩展 API

## 调用方法

嘉立创 EDA 专业版扩展 API 模块下存在许多各司其职的类，所有的 **类**、**枚举**、**接口**、**类型别名** 默认都注册在 `EDA` 基类下，并已实例化为 [eda](../reference/pro-api.eda) 对象存在于每一个扩展运行时的根作用域中，你可以直接通过 `eda` 对象访问到它。

所有的扩展运行时都会获得一个独立的 `eda` 对象，它不与其他扩展共用。你可以在 [调试模式](#进入调试模式) 下在扩展内（或 [独立脚本](#使用独立脚本功能调试) 内）使用以下代码在控制台输出该对象：

```javascript
console.log('[DEBUG] eda:', eda);
```

标准的扩展 API 调用需要拼接 **eda** + **类实例对象名** + **方法名 / 变量名**。系统内实例化的类对应的对象名称为下划线前三个字母小写的形式，例如：

| 类名             | 类实例对象名     |
| ---------------- | ---------------- |
| SYS_I18n         | sys_I18n         |
| SYS_ToastMessage | sys_ToastMessage |

如下示例为调用 `SYS_I18n` 类下的 `text` 方法和 `SYS_ToastMessage` 类下的 `showMessage` 方法：

```typescript {2}
// 注意 sys_I18n 的 sys 为小写，这是因为我们调用的时候需要使用对象名称
eda.sys_ToastMessage.showMessage(eda.sys_I18n.text('Done'), ESYS_ToastMessageType.INFO);

const t = eda.sys_I18n.text; // 将 eda.sys_I18n.text 方法赋值给 t
eda.sys_ToastMessage.showMessage(t('Done'), ESYS_ToastMessageType.INFO); // 这将会与第 2 行得到完全相同的结果
```

## 调试方法

### 进入调试模式

你可以在嘉立创 EDA 专业版编辑器的 URL 内添加 `cll=debug` 参数以进入调试模式：

```diff
- https://pro.lceda.cn/editor
+ https://pro.lceda.cn/editor?cll=debug
```

然后使用快捷键 <kbd>F12</kbd> 打开开发人员工具(v2.2.38.3后需要快速按三次F12)，切换到控制台，即可输出调试信息。

::: tip

如果你使用的是客户端，可以使用快捷键 <kbd>F12</kbd> 打开开发人员工具，并在控制台内输入：

```javascript
window.location.href = 'https://client/editor?cll=debug';
```

即可进入调试模式。

:::

### 使用独立脚本功能调试

在使用扩展 API 接口时，你需要在更改后先行编译，并将编译结果上传到嘉立创 EDA 后才能查看到运行效果。如果有一些逻辑希望拆分出来调试，可以尝试使用独立脚本功能。

#### V2 版本调试

入口：顶部菜单 - 设置 - 扩展 - 独立脚本

![](/storage/images/cn/api/guide/invoke-apis/invoke-apis_20250322_142536.jpg)

#### V3 版本调试

入口：顶部菜单 - 高级 - 运行脚本

![图 0](/storage/images/cn/api/guide/invoke-apis/invoke-apis_20260312_101848.png)

支持使用脚本管理器保存和快捷运行独立脚本。

![图 1](/storage/images/cn/api/guide/invoke-apis/invoke-apis_20260312_102007.png)

独立脚本在每次运行时都会获得唯一的、用后即抛的 `eda` 对象，你不用担心它会被前次的运行结果污染运行环境。但请注意，独立脚本内无法调用部分扩展 API 接口，例如 `SYS_IFrame` 等，这是因为它们使用到了扩展软件包或外部交互的特性。

独立脚本的保存功能会将数据存储在浏览器的 [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) 或 [IndexedDB](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) 内，一般情况下可以在本地持续保存，但请注意，这始终是不安全的，请自行备份你开发的独立脚本。
