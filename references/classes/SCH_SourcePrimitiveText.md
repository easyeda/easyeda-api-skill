# SCH\_SourcePrimitiveText class

原理图 &amp; 符号 / 源数据文本类

## Signature

```typescript
class SCH_SourcePrimitiveText
```

## Remarks

直接操作工程源数据的文本接口，按数据标识寻址，不依赖当前打开的图页

\*\*样式参数\*\*

- 本接口\*\*故意不提供\*\*字体、字号、颜色、对齐等样式参数 - Source API 以极简、可被 AI 稳定调用为设计目标，只保留定位文本所需的最小字段 - 文本样式由内部默认规则决定 - 需要精细排版时，使用旧图元 API 或编辑器界面

\*\*写入时序\*\*

本类接口是强制异步落盘的：调用返回并不表示数据已落盘生效，紧接着调用其它接口（尤其是读取类）可能拿到尚未更新的数据

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[add(options)](./SCH_SourcePrimitiveText.md)

</td><td>

</td><td>

创建文本

</td></tr>
<tr><td>

[remove(options)](./SCH_SourcePrimitiveText.md)

</td><td>

</td><td>

删除文本

</td></tr>
</tbody></table>

---

## 方法详情

### add

# SCH\_SourcePrimitiveText.add() method

创建文本

## Signature

```typescript
function add(
	options: ISCH_SourcePrimitiveTextAddOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveResult>>;
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

options

</td><td>

[ISCH\_SourcePrimitiveTextAddOptions](../interfaces/ISCH_SourcePrimitiveTextAddOptions.md)

</td><td>

文本创建选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveResult](../interfaces/ISCH_SourcePrimitiveResult.md)<!-- -->&gt;&gt;

文本图元 ID，失败时通过 `error.code` 返回错误码

## Remarks

\*\*样式参数设计\*\*

- 本接口\*\*故意不提供\*\*字体、字号、颜色、对齐等样式参数 - Source API 保持极简，以降低 AI / CLI 的参数选择与纠错成本 - 文本样式由内部按现有规则决定 - 需要精确控制样式时，使用旧图元 API [SCH\_PrimitiveText](./SCH_PrimitiveText.md) 或编辑器界面

\*\*写入异步生效\*\*

本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新，通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->，或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83  cli - 本接口直接操作工程源数据，无需前端已打开对应图页；Source 故意不提供样式参数，保持接口极简

### remove

# SCH\_SourcePrimitiveText.remove() method

删除文本

## Signature

```typescript
function remove(
	options: ISCH_SourcePrimitiveIdOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveResult>>;
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

options

</td><td>

[ISCH\_SourcePrimitiveIdOptions](../interfaces/ISCH_SourcePrimitiveIdOptions.md)

</td><td>

目标标识与文本图元 ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveResult](../interfaces/ISCH_SourcePrimitiveResult.md)<!-- -->&gt;&gt;

文本图元 ID，失败时通过 `error.code` 返回错误码

## Remarks

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83  cli - 本接口直接操作工程源数据，无需前端已打开对应图页
