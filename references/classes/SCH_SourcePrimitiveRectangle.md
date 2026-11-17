# SCH\_SourcePrimitiveRectangle class

原理图 &amp; 符号 / 源数据矩形类

## Signature

```typescript
class SCH_SourcePrimitiveRectangle
```

## Remarks

直接操作工程源数据的矩形接口，按数据标识寻址，不依赖当前打开的图页

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

[add(options)](./SCH_SourcePrimitiveRectangle.md)

</td><td>

</td><td>

创建矩形

</td></tr>
<tr><td>

[remove(options)](./SCH_SourcePrimitiveRectangle.md)

</td><td>

</td><td>

删除矩形

</td></tr>
</tbody></table>

---

## 方法详情

### add

# SCH\_SourcePrimitiveRectangle.add() method

创建矩形

## Signature

```typescript
function add(
	options: ISCH_SourcePrimitiveRectangleAddOptions,
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

[ISCH\_SourcePrimitiveRectangleAddOptions](../interfaces/ISCH_SourcePrimitiveRectangleAddOptions.md)

</td><td>

矩形创建选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveResult](../interfaces/ISCH_SourcePrimitiveResult.md)<!-- -->&gt;&gt;

矩形图元 ID，失败时通过 `error.code` 返回错误码

## Remarks

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83  cli - 本接口直接操作工程源数据，无需前端已打开对应图页

### remove

# SCH\_SourcePrimitiveRectangle.remove() method

删除矩形

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

目标标识与矩形图元 ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveResult](../interfaces/ISCH_SourcePrimitiveResult.md)<!-- -->&gt;&gt;

矩形图元 ID，失败时通过 `error.code` 返回错误码

## Remarks

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83  cli - 本接口直接操作工程源数据，无需前端已打开对应图页
