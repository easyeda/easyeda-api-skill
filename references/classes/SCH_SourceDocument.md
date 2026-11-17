# SCH\_SourceDocument class

原理图 &amp; 符号 / 源数据文档类

## Signature

```typescript
class SCH_SourceDocument
```

## Remarks

直接操作工程源数据的图页级接口，按数据标识寻址，不依赖当前打开的图页

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

[getFunctionGroups(options)](./SCH_SourceDocument.md)

</td><td>

</td><td>

获取功能分组

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

</td></tr>
<tr><td>

[removeFunctionGroup(options)](./SCH_SourceDocument.md)

</td><td>

</td><td>

删除功能分组

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

</td></tr>
<tr><td>

[transformFunctionGroup(options)](./SCH_SourceDocument.md)

</td><td>

</td><td>

平移与旋转功能分组

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

</td></tr>
</tbody></table>

---

## 方法详情

### getfunctiongroups

# SCH\_SourceDocument.getFunctionGroups() method

获取功能分组

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

## Signature

```typescript
function getFunctionGroups(
	options: ISCH_SourceIdentity,
): Promise<TSCH_SourceResult<Array<ISCH_SourceDocumentFunctionGroup>>>;
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

[ISCH\_SourceIdentity](../interfaces/ISCH_SourceIdentity.md)

</td><td>

目标标识

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;Array&lt;[ISCH\_SourceDocumentFunctionGroup](../interfaces/ISCH_SourceDocumentFunctionGroup.md)<!-- -->&gt;&gt;&gt;

功能分组列表，失败时通过 `error.code` 返回错误码

## Remarks

功能分组是本套接口内部算法产出的派生视图，不写回工程数据；返回不定长集合 ADD since EDA v4.1.83

### removefunctiongroup

# SCH\_SourceDocument.removeFunctionGroup() method

删除功能分组

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

## Signature

```typescript
function removeFunctionGroup(
	options: ISCH_SourceDocumentRemoveFunctionGroupOptions,
): Promise<TSCH_SourceResult<ISCH_SourceDocumentRemoveFunctionGroupResult>>;
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

[ISCH\_SourceDocumentRemoveFunctionGroupOptions](../interfaces/ISCH_SourceDocumentRemoveFunctionGroupOptions.md)

</td><td>

功能分组删除选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourceDocumentRemoveFunctionGroupResult](../interfaces/ISCH_SourceDocumentRemoveFunctionGroupResult.md)<!-- -->&gt;&gt;

功能分组编号、删除的成员数量与连带删除的走线数量，失败时通过 `error.code` 返回错误码

## Remarks

分组编号失效时返回 [GROUP\_NOT\_FOUND](../enums/ESCH_SourceErrorCode.md) 且不产生任何改动

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83

### transformfunctiongroup

# SCH\_SourceDocument.transformFunctionGroup() method

平移与旋转功能分组

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

## Signature

```typescript
function transformFunctionGroup(
	options: ISCH_SourceDocumentTransformFunctionGroupOptions,
): Promise<TSCH_SourceResult<ISCH_SourceDocumentTransformFunctionGroupResult>>;
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

[ISCH\_SourceDocumentTransformFunctionGroupOptions](../interfaces/ISCH_SourceDocumentTransformFunctionGroupOptions.md)

</td><td>

功能分组转换选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourceDocumentTransformFunctionGroupResult](../interfaces/ISCH_SourceDocumentTransformFunctionGroupResult.md)<!-- -->&gt;&gt;

功能分组编号与移动的成员数量，失败时通过 `error.code` 返回错误码

## Remarks

分组编号失效时返回 [GROUP\_NOT\_FOUND](../enums/ESCH_SourceErrorCode.md) 且不产生任何改动

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83
