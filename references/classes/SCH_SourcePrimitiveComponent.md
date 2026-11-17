# SCH\_SourcePrimitiveComponent class

原理图 &amp; 符号 / 源数据器件类

## Signature

```typescript
class SCH_SourcePrimitiveComponent
```

## Remarks

直接操作工程源数据的器件接口，按数据标识寻址，不依赖当前打开的图页；入参仅保留业务必要属性

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

[add(options)](./SCH_SourcePrimitiveComponent.md)

</td><td>

</td><td>

放置器件

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页；放置前先用 LIB\_Symbol.getGeometry 取外形与引脚相对位置

</td></tr>
<tr><td>

[addNetFlag(options)](./SCH_SourcePrimitiveComponent.md)

</td><td>

</td><td>

放置网络符号

</td></tr>
<tr><td>

[get(options)](./SCH_SourcePrimitiveComponent.md)

</td><td>

</td><td>

获取器件详细属性

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

</td></tr>
<tr><td>

[remove(options)](./SCH_SourcePrimitiveComponent.md)

</td><td>

</td><td>

删除器件

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

</td></tr>
<tr><td>

[removeNetFlag(options)](./SCH_SourcePrimitiveComponent.md)

</td><td>

</td><td>

删除网络符号

</td></tr>
<tr><td>

[replace(options)](./SCH_SourcePrimitiveComponent.md)

</td><td>

</td><td>

替换器件

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

</td></tr>
<tr><td>

[update(options)](./SCH_SourcePrimitiveComponent.md)

</td><td>

</td><td>

修改器件

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

</td></tr>
<tr><td>

[updateAttribute(options)](./SCH_SourcePrimitiveComponent.md)

</td><td>

</td><td>

修改器件属性

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

</td></tr>
</tbody></table>

---

## 方法详情

### add

# SCH\_SourcePrimitiveComponent.add() method

放置器件

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页；放置前先用 LIB\_Symbol.getGeometry 取外形与引脚相对位置

## Signature

```typescript
function add(
	options: ISCH_SourcePrimitiveComponentAddOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveComponentAddResult>>;
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

[ISCH\_SourcePrimitiveComponentAddOptions](../interfaces/ISCH_SourcePrimitiveComponentAddOptions.md)

</td><td>

器件放置选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveComponentAddResult](../interfaces/ISCH_SourcePrimitiveComponentAddResult.md)<!-- -->&gt;&gt;

器件图元 ID 与位号，失败时通过 `error.code` 返回错误码

## Remarks

器件属性（位号、值、名称）的位置与姿态由内部按器件姿态自动计算，调用方无法指定；不触发渲染

\*\*放置前先取几何\*\*：`x` / `y` 是器件锚点，不等于外形中心，也不含引脚长度与引线。 建议先用 [LIB\_Symbol.getGeometry()](./LIB_Symbol.md)<!-- -->（传器件搜索结果的 `symbol.uuid` / `symbol.libraryUuid`<!-- -->，多子部件再传 `subPartName`<!-- -->） 读取外形包围盒、引脚连接点相对坐标与所在边，再计算锚点与引出线方向； 放置后可调用 [SCH\_SourcePin.getGeometry()](./SCH_SourcePin.md) 复核引脚绝对坐标与本体包围盒。

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83

### addnetflag

# SCH\_SourcePrimitiveComponent.addNetFlag() method

放置网络符号

## Signature

```typescript
function addNetFlag(
	options: ISCH_SourcePrimitiveComponentAddNetFlagOptions,
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

[ISCH\_SourcePrimitiveComponentAddNetFlagOptions](../interfaces/ISCH_SourcePrimitiveComponentAddNetFlagOptions.md)

</td><td>

网络符号放置选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveResult](../interfaces/ISCH_SourcePrimitiveResult.md)<!-- -->&gt;&gt;

网络符号图元 ID，失败时通过 `error.code` 返回错误码

## Remarks

\*\*方向约定\*\*：`rotation = 0` 时，电源符号（`POWER`<!-- -->，如 VCC）默认朝上、引脚在下方； 地符号（`GROUND` / `ANALOG_GROUND` / `PROTECT_GROUND`<!-- -->，如 GND）默认朝下、引脚在上方。 需要反向连接时显式设置 `rotation: 180`<!-- -->；贴靠器件引脚前可先用 [SCH\_SourcePin.getGeometry()](./SCH_SourcePin.md) 确认目标引脚所在边，避免符号本体压住器件或导线。

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83  cli - 本接口直接操作工程源数据，无需前端已打开对应图页

### get

# SCH\_SourcePrimitiveComponent.get() method

获取器件详细属性

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

## Signature

```typescript
function get(
	options: ISCH_SourcePrimitiveComponentGetOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveComponentDetail>>;
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

[ISCH\_SourcePrimitiveComponentGetOptions](../interfaces/ISCH_SourcePrimitiveComponentGetOptions.md)

</td><td>

器件查询选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveComponentDetail](../interfaces/ISCH_SourcePrimitiveComponentDetail.md)<!-- -->&gt;&gt;

器件详细属性，失败时通过 `error.code` 返回错误码

## Remarks

按 `designator` 查是业务寻址的便利入口，按 `primitiveId` 查是精确入口 ADD since EDA v4.1.83

### remove

# SCH\_SourcePrimitiveComponent.remove() method

删除器件

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

## Signature

```typescript
function remove(
	options: ISCH_SourcePrimitiveComponentRemoveOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveComponentRemoveResult>>;
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

[ISCH\_SourcePrimitiveComponentRemoveOptions](../interfaces/ISCH_SourcePrimitiveComponentRemoveOptions.md)

</td><td>

器件删除选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveComponentRemoveResult](../interfaces/ISCH_SourcePrimitiveComponentRemoveResult.md)<!-- -->&gt;&gt;

器件图元 ID 与连带删除的走线数量，失败时通过 `error.code` 返回错误码

## Remarks

连带删除时删到哪一类边界属内部策略，不进参数

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83

### removenetflag

# SCH\_SourcePrimitiveComponent.removeNetFlag() method

删除网络符号

## Signature

```typescript
function removeNetFlag(
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

目标标识与网络符号图元 ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveResult](../interfaces/ISCH_SourcePrimitiveResult.md)<!-- -->&gt;&gt;

网络符号图元 ID，失败时通过 `error.code` 返回错误码

## Remarks

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83  cli - 本接口直接操作工程源数据，无需前端已打开对应图页

### replace

# SCH\_SourcePrimitiveComponent.replace() method

替换器件

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

## Signature

```typescript
function replace(
	options: ISCH_SourcePrimitiveComponentReplaceOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveComponentAddResult>>;
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

[ISCH\_SourcePrimitiveComponentReplaceOptions](../interfaces/ISCH_SourcePrimitiveComponentReplaceOptions.md)

</td><td>

器件替换选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveComponentAddResult](../interfaces/ISCH_SourcePrimitiveComponentAddResult.md)<!-- -->&gt;&gt;

器件图元 ID 与位号，失败时通过 `error.code` 返回错误码

## Remarks

是否允许替换由内部容差判定；判定不通过时返回 [REPLACE\_REJECTED](../enums/ESCH_SourceErrorCode.md) 且完全不产生任何改动

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83

### update

# SCH\_SourcePrimitiveComponent.update() method

修改器件

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

## Signature

```typescript
function update(
	options: ISCH_SourcePrimitiveComponentUpdateOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveComponentAddResult>>;
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

[ISCH\_SourcePrimitiveComponentUpdateOptions](../interfaces/ISCH_SourcePrimitiveComponentUpdateOptions.md)

</td><td>

器件修改选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveComponentAddResult](../interfaces/ISCH_SourcePrimitiveComponentAddResult.md)<!-- -->&gt;&gt;

器件图元 ID 与位号，失败时通过 `error.code` 返回错误码

## Remarks

器件移动、旋转、镜像时其属性随之联动；修改位号将触发同页重名检查

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83

### updateattribute

# SCH\_SourcePrimitiveComponent.updateAttribute() method

修改器件属性

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

## Signature

```typescript
function updateAttribute(
	options: ISCH_SourcePrimitiveComponentUpdateAttributeOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveComponentUpdateAttributeResult>>;
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

[ISCH\_SourcePrimitiveComponentUpdateAttributeOptions](../interfaces/ISCH_SourcePrimitiveComponentUpdateAttributeOptions.md)

</td><td>

器件属性显示与位置修改选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveComponentUpdateAttributeResult](../interfaces/ISCH_SourcePrimitiveComponentUpdateAttributeResult.md)<!-- -->&gt;&gt;

器件图元 ID 与属性键，失败时通过 `error.code` 返回错误码

## Remarks

仅调整指定的这一条属性，不触发父器件重新自动排布

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83
