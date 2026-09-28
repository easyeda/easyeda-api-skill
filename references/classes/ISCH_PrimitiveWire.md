# ISCH\_PrimitiveWire class

Wire primitive

## Signature

```typescript
class ISCH_PrimitiveWire implements ISCH_Primitive
```
**Implements:** [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

## Remarks

Unresolved issues:

The `ISCH_PrimitiveWire.net` global net name property involves multi-sheet refresh, so the currently obtained value may be \*\*incorrect\*\*. When you try to set multiple names for a wire or bus (by placing multiple net labels), the obtained `net` property may not be the latest. You need to wait for the canvas event to asynchronously refresh the global nets before reading it again.

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[done()](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_Color()](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

Get the property state: bus color

</td></tr>
<tr><td>

[getState\_Line()](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

Get the property state: polyline coordinate group

</td></tr>
<tr><td>

[getState\_LineType()](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

Get the property state: line type

</td></tr>
<tr><td>

[getState\_LineWidth()](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_Net()](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

Get the property state: net name

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[setState\_Color(color)](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: wire color

</td></tr>
<tr><td>

[setState\_Line(line)](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: polyline coordinate group

</td></tr>
<tr><td>

[setState\_LineType(lineType)](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: line type

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[setState\_Net(net)](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: net name

</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveWire.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveWire.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<ISCH_PrimitiveWire>;
```

## Returns

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;

Wire primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试导线重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一条测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([x, y, x + 400, y], 'SIG_A');

// 3. 切换异步模式，累计两处修改（改网络 + 改颜色）
const asyncWire = wire.toAsync();
asyncWire.setState_Net('SIG_B');
asyncWire.setState_Color('#00AA00');

// 4. 一次性提交到画布
await asyncWire.done();

// 5. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveWire.get(wire.getState_PrimitiveId());

console.log('net:', 'SIG_A', '→', refetched.getState_Net());
console.log('color:', '#00AA00', '→', refetched.getState_Color());
```

### getstate_color

# ISCH\_PrimitiveWire.getState\_Color() method

Get the property state: bus color

## Signature

```typescript
function getState_Color(): string | null;
```

## Returns

string \| null

Bus color

## Example

```javascript
// 1. 创建一条红色测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([1000, 1000, 1400, 1000], null, '#FF0000', 6, 1);

// 2. 读取导线颜色
const color = wire.getState_Color();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveWire.delete([wire.getState_PrimitiveId()]);

console.log('color:', color);
```

### getstate_line

# ISCH\_PrimitiveWire.getState\_Line() method

Get the property state: polyline coordinate group

## Signature

```typescript
function getState_Line(): Array<number> | Array<Array<number>>;
```

## Returns

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;

Polyline coordinate group

## Example

```javascript
// 1. 创建一条水平测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([1000, 1000, 1400, 1000]);

// 2. 读取多段线坐标组（返回画布规格化后的坐标，段内端点顺序可能与创建时相反）
const line = wire.getState_Line();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveWire.delete([wire.getState_PrimitiveId()]);

console.log('line:', JSON.stringify(line));
```

### getstate_linetype

# ISCH\_PrimitiveWire.getState\_LineType() method

Get the property state: line type

## Signature

```typescript
function getState_LineType(): ESCH_PrimitiveLineType | null;
```

## Returns

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null

Line type

## Example

```javascript
// 1. 创建一条虚线（DASHED=1）测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([1000, 1000, 1400, 1000], null, null, null, 1);

// 2. 读取线型
const lineType = wire.getState_LineType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveWire.delete([wire.getState_PrimitiveId()]);

console.log('lineType:', lineType);
```

### getstate_linewidth

# ISCH\_PrimitiveWire.getState\_LineWidth() method

Get the property state: Line width

## Signature

```typescript
function getState_LineWidth(): number | null;
```

## Returns

number \| null

Line width

## Example

```javascript
// 1. 创建一条线宽 6 的测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([1000, 1000, 1400, 1000], null, null, 6, null);

// 2. 读取线宽
const lineWidth = wire.getState_LineWidth();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveWire.delete([wire.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_net

# ISCH\_PrimitiveWire.getState\_Net() method

Get the property state: net name

## Signature

```typescript
function getState_Net(): string;
```

## Returns

string

Net name

## Example

```javascript
// 1. 创建一条属于 SIG_A 网络的测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([1000, 1000, 1400, 1000], 'SIG_A');

// 2. 读取网络名称
const net = wire.getState_Net();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveWire.delete([wire.getState_PrimitiveId()]);

console.log('net:', net);
```

### getstate_primitiveid

# ISCH\_PrimitiveWire.getState\_PrimitiveId() method

Get the property state: primitive ID

## Signature

```typescript
function getState_PrimitiveId(): string;
```

## Returns

string

Primitive ID

## Example

```javascript
// 1. 创建一条测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([1000, 1000, 1400, 1000]);

// 2. 读取图元 ID
const primitiveId = wire.getState_PrimitiveId();

// 3. 用该 ID 反查同一图元，验证 ID 有效（查询类案例不留测试对象）
const refetched = await eda.sch_PrimitiveWire.get(primitiveId);
await eda.sch_PrimitiveWire.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
console.log('refetch matched:', refetched.getState_PrimitiveId() === primitiveId);
```

### getstate_primitivetype

# ISCH\_PrimitiveWire.getState\_PrimitiveType() method

Get the property state: primitive type

## Signature

```typescript
function getState_PrimitiveType(): ESCH_PrimitiveType;
```

## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

Primitive type

## Example

```javascript
// 1. 创建一条测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([1000, 1000, 1400, 1000]);

// 2. 读取图元类型
const primitiveType = wire.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveWire.delete([wire.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### isasync

# ISCH\_PrimitiveWire.isAsync() method

Query whether the primitive is an async primitive

## Signature

```typescript
function isAsync(): boolean;
```

## Returns

boolean

Whether Is async primitive

## Example

```javascript
// 1. 创建一条测试导线，创建后默认处于异步模式
const wire = await eda.sch_PrimitiveWire.create([1000, 1000, 1400, 1000]);
const asyncOnCreate = wire.isAsync();

// 2. 切换到同步模式再查询一次，对比两种模式
wire.toSync();
const asyncAfterToSync = wire.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveWire.delete([wire.getState_PrimitiveId()]);

console.log('isAsync on create:', asyncOnCreate);
console.log('isAsync after toSync:', asyncAfterToSync);
```

### setstate_color

# ISCH\_PrimitiveWire.setState\_Color() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: wire color

## Signature

```typescript
function setState_Color(color: string | null): ISCH_PrimitiveWire;
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

color

</td><td>

string \| null

</td><td>

Wire color

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

Wire primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试导线重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一条红色测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([x, y, x + 400, y], null, '#FF0000', 6, 1);

// 3. 读取修改前的颜色
const before = wire.getState_Color();

// 4. 切换异步模式并改为绿色
const asyncWire = wire.toAsync();
asyncWire.setState_Color('#00AA00');
await asyncWire.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveWire.get(wire.getState_PrimitiveId());

console.log('color:', before, '→', refetched.getState_Color());
```

### setstate_line

# ISCH\_PrimitiveWire.setState\_Line() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: polyline coordinate group

## Signature

```typescript
function setState_Line(line: Array<number> | Array<Array<number>>): ISCH_PrimitiveWire;
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

line

</td><td>

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;

</td><td>

Polyline coordinate group

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

Wire primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试导线重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一条水平单段测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([x, y, x + 400, y]);

// 3. 读取修改前的路径
const before = wire.getState_Line();

// 4. 切换异步模式并改为 L 形两段（先水平再垂直，段间共享端点）
const asyncWire = wire.toAsync();
asyncWire.setState_Line([x, y, x + 400, y, x + 400, y + 400]);
await asyncWire.done();

// 5. 从画布重新读取，确认路径已更新（返回画布规格化坐标，保留现场供观察）
const refetched = await eda.sch_PrimitiveWire.get(wire.getState_PrimitiveId());

console.log('line:', JSON.stringify(before), '→', JSON.stringify(refetched.getState_Line()));
```

### setstate_linetype

# ISCH\_PrimitiveWire.setState\_LineType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: line type

## Signature

```typescript
function setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveWire;
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

lineType

</td><td>

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null

</td><td>

Line type

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

Wire primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试导线重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一条虚线（DASHED=1）测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([x, y, x + 400, y], null, null, null, 1);

// 3. 读取修改前的线型
const before = wire.getState_LineType();

// 4. 切换异步模式并改为点线（DOTTED=2）
const asyncWire = wire.toAsync();
asyncWire.setState_LineType(2);
await asyncWire.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveWire.get(wire.getState_PrimitiveId());

console.log('lineType:', before, '→', refetched.getState_LineType());
```

### setstate_linewidth

# ISCH\_PrimitiveWire.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveWire;
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

lineWidth

</td><td>

number \| null

</td><td>

Line width

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

Wire primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试导线重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一条线宽 6 的测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([x, y, x + 400, y], null, null, 6, null);

// 3. 读取修改前的线宽
const before = wire.getState_LineWidth();

// 4. 切换异步模式并加粗到 10
const asyncWire = wire.toAsync();
asyncWire.setState_LineWidth(10);
await asyncWire.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveWire.get(wire.getState_PrimitiveId());

console.log('lineWidth:', before, '→', refetched.getState_LineWidth());
```

### setstate_net

# ISCH\_PrimitiveWire.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: net name

## Signature

```typescript
function setState_Net(net: string): ISCH_PrimitiveWire;
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

net

</td><td>

string

</td><td>

Net name

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

Wire primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试导线重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一条属于 SIG_A 网络的测试导线（SCH 坐标单位 10mil）
const wire = await eda.sch_PrimitiveWire.create([x, y, x + 400, y], 'SIG_A');

// 3. 读取修改前的网络名称
const before = wire.getState_Net();

// 4. 切换异步模式并改为 SIG_B
const asyncWire = wire.toAsync();
asyncWire.setState_Net('SIG_B');
await asyncWire.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveWire.get(wire.getState_PrimitiveId());

console.log('net:', before, '→', refetched.getState_Net());
```

### toasync

# ISCH\_PrimitiveWire.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): ISCH_PrimitiveWire;
```

## Returns

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

Wire primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试导线重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一条测试导线（创建后默认处于异步模式）
const wire = await eda.sch_PrimitiveWire.create([x, y, x + 400, y], null, null, 6, null);

// 3. 转换为异步图元
const asyncWire = wire.toAsync();

// 4. 异步模式下累计修改并提交
asyncWire.setState_LineWidth(10);
await asyncWire.done();

// 5. 从画布重新读取，确认提交生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveWire.get(wire.getState_PrimitiveId());

console.log('isAsync after toAsync:', wire.isAsync());
console.log('lineWidth:', 6, '→', refetched.getState_LineWidth());
```

### tosync

# ISCH\_PrimitiveWire.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): ISCH_PrimitiveWire;
```

## Returns

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

Wire primitive object

## Example

```javascript
// 1. 创建一条测试导线（创建后默认处于异步模式）
const wire = await eda.sch_PrimitiveWire.create([1000, 1000, 1400, 1000]);

// 2. 转换为同步图元，isAsync() 变为 false
const syncWire = wire.toSync();
const isAsyncAfterToSync = syncWire.isAsync();

// 3. 清理测试图元（本案例只演示模式转换，不修改画布）
await eda.sch_PrimitiveWire.delete([wire.getState_PrimitiveId()]);

console.log('isAsync after toSync:', isAsyncAfterToSync);
```
