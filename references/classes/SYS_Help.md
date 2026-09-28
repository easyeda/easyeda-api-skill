# SYS\_Help class

Help 渐进式披露类

## Signature

```typescript
class SYS_Help
```

## Remarks

用于渐进式披露外部 API（`eda`<!-- -->）、lc-protocol 格式类型（`format`<!-- -->）与扩展注入接口（`external`<!-- -->）的信息；

AI 可先获取 API 总览（各命名空间下全部类型条目 `{ name, comment }`<!-- -->）， 再按需查询单个命名空间、单个类 / 类型、单个方法的详细用法（入参、出参、返回值）， 无需翻阅大量外部文档

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[help(namespace, className, methodName)](./SYS_Help.md)

</td><td>

</td><td>

查询 Help 信息（渐进式）

</td></tr>
</tbody></table>

---

## 方法详情

### help

# SYS\_Help.help() method

查询 Help 信息（渐进式）

## Signature

```typescript
function help(
	namespace?: string,
	className?: string,
	methodName?: string,
): Promise<ISYS_HelpData | Record<string, any> | ISYS_HelpClassSummary | ISYS_HelpMethodDetail>;
```

## Parameters

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

namespace

</td><td>

string

</td><td>

_(Optional)_ 命名空间：`'eda'`<!-- -->（静态外部 API）、`'format'`<!-- -->（lc-protocol 格式类型）或 `'external'`<!-- -->（扩展注入接口），缺省返回总览

</td></tr>
<tr><td>

className

</td><td>

string

</td><td>

_(Optional)_ 类名 / 类型名 / 命名空间下的分组名（external 场景为注册时的 namespace）

</td></tr>
<tr><td>

methodName

</td><td>

string

</td><td>

_(Optional)_ 方法名 / 接口名

</td></tr>
</tbody></table>

## Returns

Promise&lt;[ISYS\_HelpData](../interfaces/ISYS_HelpData.md) \| Record&lt;string, any&gt; \| [ISYS\_HelpClassSummary](../interfaces/ISYS_HelpClassSummary.md) \| [ISYS\_HelpMethodDetail](../interfaces/ISYS_HelpMethodDetail.md)<!-- -->&gt;

渐进式查询结果： - 无参：返回总览 `{ eda: [{ name, comment } 全部类型条目], external: { namespace: { apiName: 标题 } } }`<!-- -->； - 仅 `namespace`<!-- -->（`'eda'` / `'format'`<!-- -->）：返回该命名空间下全部类型条目 `[{ name, comment }]`<!-- -->（类 / 枚举 / 接口 / 类型）； - `namespace` + `className`<!-- -->：类返回 `{ title, methods: [{ name, comment }] }` 方法摘要， 枚举 / 接口 / 类型返回类型详情（`{ name, comment, values }` 枚举值列表或 `{ name, comment, fields }` 字段列表）； - 三个参数齐全（`'eda'` 场景）：返回单方法的完整详情（入参、出参、返回值）； - `'format'` 场景：仅 `namespace` 返回类型条目列表，`namespace` + `className` 返回该类型的详情（无 `methodName` 层级）

## Example

```javascript
// 1. 总览
const overview = await eda.sys_Help.help();

// 2. 查看 eda 下 lib_Device 类的方法
const deviceMethods = await eda.sys_Help.help('eda', 'lib_Device');

// 3. 查看 create 方法的完整用法
const createDoc = await eda.sys_Help.help('eda', 'lib_Device', 'create');

// 4. 查看外部注入接口
const externalInfo = await eda.sys_Help.help('external', 'component', 'placeComponent');
```
