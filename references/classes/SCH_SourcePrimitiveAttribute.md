# SCH\_SourcePrimitiveAttribute class

原理图 &amp; 符号 / 源数据属性类

## Signature

```typescript
class SCH_SourcePrimitiveAttribute
```

## Remarks

直接操作工程源数据的属性接口，按数据标识寻址，不依赖当前打开的图页； 网络标签在源数据层归属本类，不在文本类下

本类接口是强制异步落盘的：调用返回并不表示数据已落盘生效， 紧接着调用其它接口（尤其是读取类）可能拿到尚未更新的数据

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[addNetLabel(options)](./SCH_SourcePrimitiveAttribute.md)

</td><td>

</td><td>

创建网络标签

</td></tr>
<tr><td>

[removeNetLabel(options)](./SCH_SourcePrimitiveAttribute.md)

</td><td>

</td><td>

删除网络标签

</td></tr>
<tr><td>

[updateNetLabel(options)](./SCH_SourcePrimitiveAttribute.md)

</td><td>

</td><td>

修改网络标签

</td></tr>
</tbody></table>

---

## 方法详情

### addnetlabel

# SCH\_SourcePrimitiveAttribute.addNetLabel() method

创建网络标签

## Signature

```typescript
function addNetLabel(
	options: ISCH_SourcePrimitiveAttributeAddNetLabelOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveAttributeNetLabelResult>>;
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

[ISCH\_SourcePrimitiveAttributeAddNetLabelOptions](../interfaces/ISCH_SourcePrimitiveAttributeAddNetLabelOptions.md)

</td><td>

网络标签创建选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveAttributeNetLabelResult](../interfaces/ISCH_SourcePrimitiveAttributeNetLabelResult.md)<!-- -->&gt;&gt;

网络标签图元 ID 与网络名称，失败时通过 `error.code` 返回错误码

## Remarks

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83  cli - 本接口直接操作工程源数据，无需前端已打开对应图页

### removenetlabel

# SCH\_SourcePrimitiveAttribute.removeNetLabel() method

删除网络标签

## Signature

```typescript
function removeNetLabel(
	options: ISCH_SourcePrimitiveAttributeUpdateNetLabelOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveAttributeNetLabelResult>>;
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

[ISCH\_SourcePrimitiveAttributeUpdateNetLabelOptions](../interfaces/ISCH_SourcePrimitiveAttributeUpdateNetLabelOptions.md)

</td><td>

网络标签修改选项（仅使用其目标标识与 `primitiveId`<!-- -->）

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveAttributeNetLabelResult](../interfaces/ISCH_SourcePrimitiveAttributeNetLabelResult.md)<!-- -->&gt;&gt;

网络标签图元 ID，失败时通过 `error.code` 返回错误码

## Remarks

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83  cli - 本接口直接操作工程源数据，无需前端已打开对应图页

### updatenetlabel

# SCH\_SourcePrimitiveAttribute.updateNetLabel() method

修改网络标签

## Signature

```typescript
function updateNetLabel(
	options: ISCH_SourcePrimitiveAttributeUpdateNetLabelOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveAttributeNetLabelResult>>;
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

[ISCH\_SourcePrimitiveAttributeUpdateNetLabelOptions](../interfaces/ISCH_SourcePrimitiveAttributeUpdateNetLabelOptions.md)

</td><td>

网络标签修改选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveAttributeNetLabelResult](../interfaces/ISCH_SourcePrimitiveAttributeNetLabelResult.md)<!-- -->&gt;&gt;

网络标签图元 ID 与网络名称，失败时通过 `error.code` 返回错误码

## Remarks

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83  cli - 本接口直接操作工程源数据，无需前端已打开对应图页
