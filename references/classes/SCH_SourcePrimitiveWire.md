# SCH\_SourcePrimitiveWire class

原理图 &amp; 符号 / 源数据导线类

## Signature

```typescript
class SCH_SourcePrimitiveWire
```

## Remarks

直接操作工程源数据的导线接口，按数据标识寻址，不依赖当前打开的图页

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

[add(options)](./SCH_SourcePrimitiveWire.md)

</td><td>

</td><td>

创建导线

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

</td></tr>
<tr><td>

[remove(options)](./SCH_SourcePrimitiveWire.md)

</td><td>

</td><td>

删除导线

</td></tr>
<tr><td>

[removePinWires(options)](./SCH_SourcePrimitiveWire.md)

</td><td>

</td><td>

删除指定引脚上的走线

</td></tr>
</tbody></table>

---

## 方法详情

### add

# SCH\_SourcePrimitiveWire.add() method

创建导线

 cli - 本接口直接操作工程源数据，无需前端已打开对应图页

## Signature

```typescript
function add(
	options: ISCH_SourcePrimitiveWireAddOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveWireAddResult>>;
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

[ISCH\_SourcePrimitiveWireAddOptions](../interfaces/ISCH_SourcePrimitiveWireAddOptions.md)

</td><td>

导线创建选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveWireAddResult](../interfaces/ISCH_SourcePrimitiveWireAddResult.md)<!-- -->&gt;&gt;

导线图元 ID 与网络名称，失败时通过 `error.code` 返回错误码

## Remarks

调用方无需给出最小线段划分（但需要连接的引脚或连接点必须作为端点），内部自动融合、合并

\*\*端点处理\*\*：需要连接的引脚或连接点必须作为传入折线的端点

若连接点落在某段导线中部，调用方必须先在该点拆成两段再传入，不应依赖接口自动打断

\*\*交叉与连通\*\*：导线交叉处默认不连通，以允许导线交叉而不相连

需要连通时必须在交叉点显式拆段并形成共享端点

\*\*本接口不是「往页面追加几条线」，而是一次连通分量规范化\*\*：新线段并入其所在连通分量后，选一个导线组作宿主， 其余组的线段改挂宿主、属性克隆过去、整组删除，最后把网络名落到宿主上。由此产生三项与直觉不同的行为：

- \*\*返回值可能是既有组\*\*： 是\*\*宿主组\*\* ID。 新线并入既有导线时返回那个既有组 ID，而不是新 ID（T 型并入即如此）。 - \*\*一个连通网络只会剩一个导线组\*\*：因此 [remove](./SCH_SourcePrimitiveWire.md) 该 ID 等价于删掉整个连通网络。 - \*\*网络标签会被吸收\*\*：`_NETLABEL_` 形式的网络标签原子在 add 路径上被删除，其名字并入宿主的网络名，原标签不再保留。

\*\*连通判据（决定哪些线会被并到一起）\*\*

- 一段的\*\*端点落在另一段上\*\*（端点重合、T 型、长段中段被端点命中）⇒ 连通；只靠一个器件引脚相连的 两条导线也属同一分量； - 两条正交线段的\*\*中段十字交叉不算连通\*\*——页面上看着相交，电气上不通。要让两者相连，必须让端点落在 对方线段上，或通过同一个器件引脚； - \*\*共线重叠段会被合并成一条\*\*。当两条属于\*\*不同网络\*\*的走线发生几何重叠（典型场景：相邻器件引脚引出线 在同一区段内重叠）时，本次调用同样会把它们并进同一分量，从而把两个网络短接，而返回值仍为 `ok: true`<!-- -->。 多网络模式下不会因此报错，只有单网络模式才可能因名字冲突返回 [NET\_CONFLICT](../enums/ESCH_SourceErrorCode.md)<!-- -->。\*\*布局侧必须自行避免不同网络的走线几何重叠\*\* （缩短引出线段、同列符号统一单侧出线），不能依赖接口事后报错来兜底。

\*\*网络名的四个来源与落名\*\*

1. 落在分量上的网络标签（`_NETLABEL_`<!-- -->）； 2. 连到分量上的特殊符号（网络标识 / 网络端口 / 跨页连接符）的 `Name`<!-- -->，取不到时回退 `Global Net Name`<!-- -->； 3. 分量内既有导线组的网络名； 4. 本次入参 [net](../interfaces/ISCH_SourcePrimitiveWireAddOptions.md)<!-- -->。

[net](../interfaces/ISCH_SourcePrimitiveWireAddOptions.md) 只是\*\*追加一个候选名\*\*，不是强制改名：多网络模式下与既有名字并存 （得到多个网络名）；单网络模式下与既有名字不同则返回 NET\_CONFLICT。返回值的 [net](../interfaces/ISCH_SourcePrimitiveWireAddResult.md) 是最终网络名的\*\*第一项\*\*，因此不保证等于入参 `net` （并入已有网络 `A` 时传 `net: 'X'`<!-- -->，返回 `'A'`<!-- -->）。网络名落在分量包围盒中心投影到宿主线段上的最近点， 竖线段的网络名旋转 90°。

\*\*冲突与拒绝（均为整次零改动）\*\*

- 冲突集合取上述四个来源的去重并集（\*\*含\*\*特殊符号名），由工程配置 `wireMultipleNet` 决定处置 （读不到按 `true`<!-- -->）：`true` 时多名字并存；`false` 时冲突 ⇒ [NET\_CONFLICT](../enums/ESCH_SourceErrorCode.md)<!-- -->； - 分量内任一 `NO_CONNECT` 标记落在分量几何上 ⇒ [NO\_CONNECT\_BLOCKED](../enums/ESCH_SourceErrorCode.md)<!-- -->； - 几何非法（斜线段、合并后不连通、总线分支剩余长度不足 10）⇒ [WIRE\_GEOMETRY\_INVALID](../enums/ESCH_SourceErrorCode.md)<!-- -->。

\*\*总线分支\*\*：新线段端点落在总线线段上且与总线正交时，新线段从总线端点起被截短 10 作为分支长度； 剩余长度小于 10 判为几何非法（不是跳过）。

\*\*性能\*\*：每次调用都会对整页建连通图、再改写本次涉及的分量。页面导线规模大时应尽量一次给足折线点， 避免逐段调用。

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83

### remove

# SCH\_SourcePrimitiveWire.remove() method

删除导线

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

目标标识与导线图元 ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveResult](../interfaces/ISCH_SourcePrimitiveResult.md)<!-- -->&gt;&gt;

导线图元 ID，失败时通过 `error.code` 返回错误码

## Remarks

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83  cli - 本接口直接操作工程源数据，无需前端已打开对应图页

### removepinwires

# SCH\_SourcePrimitiveWire.removePinWires() method

删除指定引脚上的走线

## Signature

```typescript
function removePinWires(
	options: ISCH_SourcePrimitiveWireRemovePinWiresOptions,
): Promise<TSCH_SourceResult<ISCH_SourcePrimitiveWireRemovePinWiresResult>>;
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

[ISCH\_SourcePrimitiveWireRemovePinWiresOptions](../interfaces/ISCH_SourcePrimitiveWireRemovePinWiresOptions.md)

</td><td>

引脚走线删除选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;[ISCH\_SourcePrimitiveWireRemovePinWiresResult](../interfaces/ISCH_SourcePrimitiveWireRemovePinWiresResult.md)<!-- -->&gt;&gt;

引脚 ID 与删除的走线数量，失败时通过 `error.code` 返回错误码

## Remarks

\*\*写入异步生效\*\*：本接口返回 `ok` 仅表示已写入 Source 数据；网表 / DRC / 区域查询等接口异步刷新， 通常需等待约 1 秒才能读到本次改动；写后立即验证请使用 Source 的 `get` / `getGeometry`<!-- -->， 或等待约 1 秒后重试；不要把紧随其后的旧快照当成写入失败 ADD since EDA v4.1.83  cli - 本接口直接操作工程源数据，无需前端已打开对应图页
