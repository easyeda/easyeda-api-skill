# ISCH\_PrimitivePolygon class

Polygon (polyline) primitive

## Signature

```typescript
class ISCH_PrimitivePolygon implements ISCH_Primitive
```
**Implements:** [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

## Remarks

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[done()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_Color()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

Get the property state: color

</td></tr>
<tr><td>

[getState\_FillColor()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

Get the property state: fill color

</td></tr>
<tr><td>

[getState\_Line()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

Get the property state: coordinate group

</td></tr>
<tr><td>

[getState\_LineType()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

Get the property state: line type

</td></tr>
<tr><td>

[getState\_LineWidth()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_Color(color)](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: color

</td></tr>
<tr><td>

[setState\_FillColor(fillColor)](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: fill color

</td></tr>
<tr><td>

[setState\_Line(line)](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: coordinate group

</td></tr>
<tr><td>

[setState\_LineType(lineType)](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: line type

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitivePolygon.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitivePolygon.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<ISCH_PrimitivePolygon>;
```

## Returns

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;

Polygon primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试多边形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const line = [x, y, x + 400, y, x + 400, y + 300, x, y + 300];

// 2. 创建一个测试多边形：4 顶点矩形、线宽 6（SCH 坐标单位 10mil）
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000', null, 6, 0);

// 3. 切换异步模式，累计两处修改（加粗边线 + 改颜色）
const asyncPolygon = polygon.toAsync();
asyncPolygon.setState_LineWidth(10);
asyncPolygon.setState_Color('#00AA00');

// 4. 一次性提交到画布
await asyncPolygon.done();

// 5. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const refetched = await eda.sch_PrimitivePolygon.get(polygon.getState_PrimitiveId());

console.log('lineWidth:', 6, '→', refetched.getState_LineWidth());
console.log('color:', '#00AA00', '→', refetched.getState_Color());
```

### getstate_color

# ISCH\_PrimitivePolygon.getState\_Color() method

Get the property state: color

## Signature

```typescript
function getState_Color(): string | null;
```

## Returns

string \| null

Color

## Example

```javascript
// 1. 创建一个红色轮廓的测试多边形（SCH 坐标单位 10mil）
const line = [400, 300, 800, 300, 800, 600, 400, 600];
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000');

// 2. 读取轮廓颜色
const color = polygon.getState_Color();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitivePolygon.delete([polygon.getState_PrimitiveId()]);

console.log('color:', color);
```

### getstate_fillcolor

# ISCH\_PrimitivePolygon.getState\_FillColor() method

Get the property state: fill color

## Signature

```typescript
function getState_FillColor(): string | null;
```

## Returns

string \| null

Fill color

## Example

```javascript
// 1. 创建一个黄色填充的测试多边形（SCH 坐标单位 10mil）
const line = [400, 300, 800, 300, 800, 600, 400, 600];
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000', '#FFFF00');

// 2. 读取填充颜色
const fillColor = polygon.getState_FillColor();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitivePolygon.delete([polygon.getState_PrimitiveId()]);

console.log('fillColor:', fillColor);
```

### getstate_line

# ISCH\_PrimitivePolygon.getState\_Line() method

Get the property state: coordinate group

## Signature

```typescript
function getState_Line(): Array<number>;
```

## Returns

Array&lt;number&gt;

Coordinate group

## Example

```javascript
// 1. 创建一个 4 顶点矩形测试多边形（SCH 坐标单位 10mil）
const line = [400, 300, 800, 300, 800, 600, 400, 600];
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000');

// 2. 读取顶点坐标组
const coords = polygon.getState_Line();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitivePolygon.delete([polygon.getState_PrimitiveId()]);

console.log('line:', JSON.stringify(coords));
```

### getstate_linetype

# ISCH\_PrimitivePolygon.getState\_LineType() method

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
// 1. 创建一个虚线边框的测试多边形（末参 1 = DASHED，SCH 坐标单位 10mil）
const line = [400, 300, 800, 300, 800, 600, 400, 600];
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000', null, 6, 1);

// 2. 读取线型
const lineType = polygon.getState_LineType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitivePolygon.delete([polygon.getState_PrimitiveId()]);

console.log('lineType:', lineType);
```

### getstate_linewidth

# ISCH\_PrimitivePolygon.getState\_LineWidth() method

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
// 1. 创建一个线宽 6 的测试多边形（SCH 坐标单位 10mil）
const line = [400, 300, 800, 300, 800, 600, 400, 600];
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000', null, 6, 0);

// 2. 读取线宽
const lineWidth = polygon.getState_LineWidth();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitivePolygon.delete([polygon.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_primitiveid

# ISCH\_PrimitivePolygon.getState\_PrimitiveId() method

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
// 1. 创建一个测试多边形：4 个顶点构成矩形（SCH 坐标单位 10mil，line 为 [x1,y1, x2,y2, x3,y3, x4,y4] 扁平数组）
const line = [400, 300, 800, 300, 800, 600, 400, 600];
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000');

// 2. 读取图元 ID
const primitiveId = polygon.getState_PrimitiveId();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitivePolygon.delete([polygon.getState_PrimitiveId()]);

console.log('primitiveId:', primitiveId);
```

### getstate_primitivetype

# ISCH\_PrimitivePolygon.getState\_PrimitiveType() method

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
// 1. 创建一个测试多边形（SCH 坐标单位 10mil）
const line = [400, 300, 800, 300, 800, 600, 400, 600];
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000');

// 2. 读取图元类型
const primitiveType = polygon.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitivePolygon.delete([polygon.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### isasync

# ISCH\_PrimitivePolygon.isAsync() method

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
// 1. 创建一个测试多边形，创建后默认处于异步模式（SCH 坐标单位 10mil）
const line = [400, 300, 800, 300, 800, 600, 400, 600];
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000');
const asyncOnCreate = polygon.isAsync();

// 2. 切换到同步模式再查询一次，对比两种模式
polygon.toSync();
const asyncAfterToSync = polygon.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitivePolygon.delete([polygon.getState_PrimitiveId()]);

console.log('isAsync on create:', asyncOnCreate);
console.log('isAsync after toSync:', asyncAfterToSync);
```

### reset

# ISCH\_PrimitivePolygon.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<ISCH_PrimitivePolygon>;
```

## Returns

Promise&lt;[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)<!-- -->&gt;

Polygon primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试多边形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const line = [x, y, x + 400, y, x + 400, y + 300, x, y + 300];

// 2. 创建一个线宽 6 的测试多边形（SCH 坐标单位 10mil）
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000', null, 6, 0);

// 3. 切换异步模式，累计一处未提交的线宽修改（6 → 99）
const asyncPolygon = polygon.toAsync();
asyncPolygon.setState_LineWidth(99);

// 4. 重置：丢弃未提交的修改，回到画布当前状态
await asyncPolygon.reset();

// 5. 从画布重新读取，线宽仍是 6（保留现场供观察）
const refetched = await eda.sch_PrimitivePolygon.get(polygon.getState_PrimitiveId());

console.log('lineWidth after reset:', refetched.getState_LineWidth());
```

### setstate_color

# ISCH\_PrimitivePolygon.setState\_Color() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: color

## Signature

```typescript
function setState_Color(color: string | null): ISCH_PrimitivePolygon;
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

Color

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

Polygon primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试多边形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const line = [x, y, x + 400, y, x + 400, y + 300, x, y + 300];

// 2. 创建一个红色轮廓的测试多边形（SCH 坐标单位 10mil）
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000');

// 3. 切换异步模式并改为绿色
const asyncPolygon = polygon.toAsync();
asyncPolygon.setState_Color('#00AA00');
await asyncPolygon.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitivePolygon.get(polygon.getState_PrimitiveId());

console.log('color:', '#FF0000', '→', refetched.getState_Color());
```

### setstate_fillcolor

# ISCH\_PrimitivePolygon.setState\_FillColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: fill color

## Signature

```typescript
function setState_FillColor(fillColor: string | null): ISCH_PrimitivePolygon;
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

fillColor

</td><td>

string \| null

</td><td>

Fill color

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

Polygon primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试多边形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const line = [x, y, x + 400, y, x + 400, y + 300, x, y + 300];

// 2. 创建一个黄色填充的测试多边形（SCH 坐标单位 10mil）
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000', '#FFFF00');

// 3. 切换异步模式并改为浅绿填充
const asyncPolygon = polygon.toAsync();
asyncPolygon.setState_FillColor('#AAFFAA');
await asyncPolygon.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitivePolygon.get(polygon.getState_PrimitiveId());

console.log('fillColor:', '#FFFF00', '→', refetched.getState_FillColor());
```

### setstate_line

# ISCH\_PrimitivePolygon.setState\_Line() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: coordinate group

## Signature

```typescript
function setState_Line(line: Array<number>): ISCH_PrimitivePolygon;
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

Array&lt;number&gt;

</td><td>

Coordinate group

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

Polygon primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试多边形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个 4 顶点矩形测试多边形（SCH 坐标单位 10mil）
const rect = [x, y, x + 400, y, x + 400, y + 300, x, y + 300];
const polygon = await eda.sch_PrimitivePolygon.create(rect, '#FF0000');

// 3. 切换异步模式，改为 3 顶点三角形
const asyncPolygon = polygon.toAsync();
asyncPolygon.setState_Line([x, y, x + 400, y, x + 200, y + 350]);
await asyncPolygon.done();

// 4. 从画布重新读取，确认形状已替换（保留现场供观察）
const refetched = await eda.sch_PrimitivePolygon.get(polygon.getState_PrimitiveId());

console.log('line:', JSON.stringify(rect), '→', JSON.stringify(refetched.getState_Line()));
```

### setstate_linetype

# ISCH\_PrimitivePolygon.setState\_LineType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: line type

## Signature

```typescript
function setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitivePolygon;
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

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

Polygon primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试多边形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const line = [x, y, x + 400, y, x + 400, y + 300, x, y + 300];

// 2. 创建一个实线边框的测试多边形（末参 0 = SOLID）
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000', null, 6, 0);

// 3. 切换异步模式并改为虚线（1 = DASHED）
const asyncPolygon = polygon.toAsync();
asyncPolygon.setState_LineType(1);
await asyncPolygon.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitivePolygon.get(polygon.getState_PrimitiveId());

console.log('lineType:', 0, '→', refetched.getState_LineType());
```

### setstate_linewidth

# ISCH\_PrimitivePolygon.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number | null): ISCH_PrimitivePolygon;
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

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

Polygon primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试多边形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const line = [x, y, x + 400, y, x + 400, y + 300, x, y + 300];

// 2. 创建一个线宽 6 的测试多边形（SCH 坐标单位 10mil）
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000', null, 6, 0);

// 3. 切换异步模式并加粗到 10
const asyncPolygon = polygon.toAsync();
asyncPolygon.setState_LineWidth(10);
await asyncPolygon.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitivePolygon.get(polygon.getState_PrimitiveId());

console.log('lineWidth:', 6, '→', refetched.getState_LineWidth());
```

### toasync

# ISCH\_PrimitivePolygon.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): ISCH_PrimitivePolygon;
```

## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

Polygon primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试多边形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const line = [x, y, x + 400, y, x + 400, y + 300, x, y + 300];

// 2. 创建一个测试多边形（创建后默认已处于异步模式）
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000');

// 3. 转换为异步图元，修改边线颜色后提交
const asyncPolygon = polygon.toAsync();
asyncPolygon.setState_Color('#00AA00');
await asyncPolygon.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitivePolygon.get(polygon.getState_PrimitiveId());

console.log('isAsync after toAsync:', polygon.isAsync());
console.log('color:', '#00AA00', '→', refetched.getState_Color());
```

### tosync

# ISCH\_PrimitivePolygon.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): ISCH_PrimitivePolygon;
```

## Returns

[ISCH\_PrimitivePolygon](./ISCH_PrimitivePolygon.md)

Polygon primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试多边形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const line = [x, y, x + 400, y, x + 400, y + 300, x, y + 300];

// 2. 创建一个测试多边形（创建后默认处于异步模式）
const polygon = await eda.sch_PrimitivePolygon.create(line, '#FF0000', null, 6, 0);

// 3. 转换为同步图元
const syncPolygon = polygon.toSync();

// 4. 同步模式下加粗边线，立即生效，无需 done()
syncPolygon.setState_LineWidth(15);

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitivePolygon.get(polygon.getState_PrimitiveId());

console.log('isAsync after toSync:', polygon.isAsync());
console.log('lineWidth:', 6, '→', refetched.getState_LineWidth());
```
