# ISCH\_PrimitiveArc class

Arc primitive

## Signature

```typescript
class ISCH_PrimitiveArc implements ISCH_Primitive
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

[done()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_Color()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: color

</td></tr>
<tr><td>

[getState\_EndX()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: end point X

</td></tr>
<tr><td>

[getState\_EndY()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: end point Y

</td></tr>
<tr><td>

[getState\_FillColor()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: fill color

</td></tr>
<tr><td>

[getState\_LineType()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: line type

</td></tr>
<tr><td>

[getState\_LineWidth()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_ReferenceX()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: reference point X

</td></tr>
<tr><td>

[getState\_ReferenceY()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: reference point Y

</td></tr>
<tr><td>

[getState\_StartX()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: start point X

</td></tr>
<tr><td>

[getState\_StartY()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Get the property state: start point Y

</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_Color(color)](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: color

</td></tr>
<tr><td>

[setState\_EndX(endX)](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: end point X

</td></tr>
<tr><td>

[setState\_EndY(endY)](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: end point Y

</td></tr>
<tr><td>

[setState\_FillColor(fillColor)](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: fill color

</td></tr>
<tr><td>

[setState\_LineType(lineType)](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: line type

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[setState\_ReferenceX(referenceX)](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: reference point X

</td></tr>
<tr><td>

[setState\_ReferenceY(referenceY)](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: reference point Y

</td></tr>
<tr><td>

[setState\_StartX(startX)](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: start point X

</td></tr>
<tr><td>

[setState\_StartY(startY)](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: start point Y

</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveArc.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveArc.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<ISCH_PrimitiveArc>;
```

## Returns

Promise&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)<!-- -->&gt;

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段测试圆弧：起点 (x,y)、参考点 (x+100,y+100)、终点 (x+200,y)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);

// 3. 切换异步模式，累计两处修改（终点右移 + 改颜色）
const asyncArc = arc.toAsync();
asyncArc.setState_EndX(x + 300);
asyncArc.setState_Color('#00AA00');

// 4. 一次性提交到画布
await asyncArc.done();

// 5. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('endX:', x + 200, '→', refetched.getState_EndX());
console.log('color:', '#00AA00', '→', refetched.getState_Color());
```

### getstate_color

# ISCH\_PrimitiveArc.getState\_Color() method

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
// 1. 创建一段红色测试圆弧（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, '#FF0000', null, 6, 1);

// 2. 读取圆弧颜色
const color = arc.getState_Color();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('color:', color);
```

### getstate_endx

# ISCH\_PrimitiveArc.getState\_EndX() method

Get the property state: end point X

## Signature

```typescript
function getState_EndX(): number;
```

## Returns

number

End point X

## Example

```javascript
// 1. 创建一段测试圆弧，终点 (600, 300)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, null, 6, 1);

// 2. 读取终止点 X
const endX = arc.getState_EndX();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('endX:', endX);
```

### getstate_endy

# ISCH\_PrimitiveArc.getState\_EndY() method

Get the property state: end point Y

## Signature

```typescript
function getState_EndY(): number;
```

## Returns

number

End point Y

## Example

```javascript
// 1. 创建一段测试圆弧，终点 (600, 300)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, null, 6, 1);

// 2. 读取终止点 Y
const endY = arc.getState_EndY();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('endY:', endY);
```

### getstate_fillcolor

# ISCH\_PrimitiveArc.getState\_FillColor() method

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
// 1. 创建一段带填充色的测试圆弧（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, '#DDEEFF', 6, 1);

// 2. 读取填充颜色
const fillColor = arc.getState_FillColor();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('fillColor:', fillColor);
```

### getstate_linetype

# ISCH\_PrimitiveArc.getState\_LineType() method

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
// 1. 创建一段虚线（DASHED=1）测试圆弧（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, null, 6, 1);

// 2. 读取线型
const lineType = arc.getState_LineType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('lineType:', lineType);
```

### getstate_linewidth

# ISCH\_PrimitiveArc.getState\_LineWidth() method

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
// 1. 创建一段线宽 6 的测试圆弧（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, null, 6, 1);

// 2. 读取线宽
const lineWidth = arc.getState_LineWidth();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_primitiveid

# ISCH\_PrimitiveArc.getState\_PrimitiveId() method

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
// 1. 创建一段测试圆弧（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, null, 6, 1);

// 2. 读取图元 ID
const primitiveId = arc.getState_PrimitiveId();

// 3. 用该 ID 反查同一图元，验证 ID 有效（查询类案例不留测试对象）
const refetched = await eda.sch_PrimitiveArc.get(primitiveId);
await eda.sch_PrimitiveArc.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
console.log('refetch matched:', refetched.getState_PrimitiveId() === primitiveId);
```

### getstate_primitivetype

# ISCH\_PrimitiveArc.getState\_PrimitiveType() method

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
// 1. 创建一段测试圆弧（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, null, 6, 1);

// 2. 读取图元类型
const primitiveType = arc.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### getstate_referencex

# ISCH\_PrimitiveArc.getState\_ReferenceX() method

Get the property state: reference point X

## Signature

```typescript
function getState_ReferenceX(): number;
```

## Returns

number

Reference point X

## Example

```javascript
// 1. 创建一段测试圆弧，参考点 (500, 400)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, null, 6, 1);

// 2. 读取参考点 X
const referenceX = arc.getState_ReferenceX();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('referenceX:', referenceX);
```

### getstate_referencey

# ISCH\_PrimitiveArc.getState\_ReferenceY() method

Get the property state: reference point Y

## Signature

```typescript
function getState_ReferenceY(): number;
```

## Returns

number

Reference point Y

## Example

```javascript
// 1. 创建一段测试圆弧，参考点 (500, 400)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, null, 6, 1);

// 2. 读取参考点 Y
const referenceY = arc.getState_ReferenceY();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('referenceY:', referenceY);
```

### getstate_startx

# ISCH\_PrimitiveArc.getState\_StartX() method

Get the property state: start point X

## Signature

```typescript
function getState_StartX(): number;
```

## Returns

number

Start point X

## Example

```javascript
// 1. 创建一段测试圆弧，起点 (400, 300)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, null, 6, 1);

// 2. 读取起始点 X
const startX = arc.getState_StartX();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('startX:', startX);
```

### getstate_starty

# ISCH\_PrimitiveArc.getState\_StartY() method

Get the property state: start point Y

## Signature

```typescript
function getState_StartY(): number;
```

## Returns

number

Start point Y

## Example

```javascript
// 1. 创建一段测试圆弧，起点 (400, 300)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, null, 6, 1);

// 2. 读取起始点 Y
const startY = arc.getState_StartY();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('startY:', startY);
```

### isasync

# ISCH\_PrimitiveArc.isAsync() method

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
// 1. 创建一段测试圆弧，创建后默认处于异步模式
const arc = await eda.sch_PrimitiveArc.create(400, 300, 500, 400, 600, 300, null, null, 6, 1);
const asyncOnCreate = arc.isAsync();

// 2. 切换到同步模式再查询一次，对比两种模式
arc.toSync();
const asyncAfterToSync = arc.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveArc.delete([arc.getState_PrimitiveId()]);

console.log('isAsync on create:', asyncOnCreate);
console.log('isAsync after toSync:', asyncAfterToSync);
```

### reset

# ISCH\_PrimitiveArc.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<ISCH_PrimitiveArc>;
```

## Returns

Promise&lt;[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)<!-- -->&gt;

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段线宽 6 的测试圆弧（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);

// 3. 切换异步模式，累计一处未提交的线宽修改（6 → 99）
const asyncArc = arc.toAsync();
asyncArc.setState_LineWidth(99);

// 4. 重置：丢弃未提交的修改，回到画布当前状态
await asyncArc.reset();

// 5. 从画布重新读取，线宽仍是 6（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('lineWidth after reset:', refetched.getState_LineWidth());
```

### setstate_color

# ISCH\_PrimitiveArc.setState\_Color() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: color

## Signature

```typescript
function setState_Color(color: string | null): ISCH_PrimitiveArc;
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

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段红色测试圆弧（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, '#FF0000', null, 6, 1);

// 3. 读取修改前的颜色
const before = arc.getState_Color();

// 4. 切换异步模式并改为绿色
const asyncArc = arc.toAsync();
asyncArc.setState_Color('#00AA00');
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('color:', before, '→', refetched.getState_Color());
```

### setstate_endx

# ISCH\_PrimitiveArc.setState\_EndX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: end point X

## Signature

```typescript
function setState_EndX(endX: number): ISCH_PrimitiveArc;
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

endX

</td><td>

number

</td><td>

End point X

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段测试圆弧，终点 (x+200, y)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);

// 3. 读取修改前的终点 X
const before = arc.getState_EndX();

// 4. 切换异步模式并将终点 X 右移 100（SCH 单位，约 25.4mm）
const asyncArc = arc.toAsync();
asyncArc.setState_EndX(x + 300);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('endX:', before, '→', refetched.getState_EndX());
```

### setstate_endy

# ISCH\_PrimitiveArc.setState\_EndY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: end point Y

## Signature

```typescript
function setState_EndY(endY: number): ISCH_PrimitiveArc;
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

endY

</td><td>

number

</td><td>

End point Y

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段测试圆弧，终点 (x+200, y)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);

// 3. 读取修改前的终点 Y
const before = arc.getState_EndY();

// 4. 切换异步模式并将终点 Y 下移 80（SCH 单位，约 20.3mm）
const asyncArc = arc.toAsync();
asyncArc.setState_EndY(y + 80);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('endY:', before, '→', refetched.getState_EndY());
```

### setstate_fillcolor

# ISCH\_PrimitiveArc.setState\_FillColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: fill color

## Signature

```typescript
function setState_FillColor(fillColor: string | null): ISCH_PrimitiveArc;
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

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段带浅蓝填充的测试圆弧（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, '#DDEEFF', 6, 1);

// 3. 读取修改前的填充颜色
const before = arc.getState_FillColor();

// 4. 切换异步模式并改为浅黄填充
const asyncArc = arc.toAsync();
asyncArc.setState_FillColor('#FFE9A0');
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('fillColor:', before, '→', refetched.getState_FillColor());
```

### setstate_linetype

# ISCH\_PrimitiveArc.setState\_LineType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: line type

## Signature

```typescript
function setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveArc;
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

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段虚线（DASHED=1）测试圆弧（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);

// 3. 读取修改前的线型
const before = arc.getState_LineType();

// 4. 切换异步模式并改为点线（DOTTED=2）
const asyncArc = arc.toAsync();
asyncArc.setState_LineType(2);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('lineType:', before, '→', refetched.getState_LineType());
```

### setstate_linewidth

# ISCH\_PrimitiveArc.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveArc;
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

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段线宽 6 的测试圆弧（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);

// 3. 读取修改前的线宽
const before = arc.getState_LineWidth();

// 4. 切换异步模式并加粗到 12
const asyncArc = arc.toAsync();
asyncArc.setState_LineWidth(12);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('lineWidth:', before, '→', refetched.getState_LineWidth());
```

### setstate_referencex

# ISCH\_PrimitiveArc.setState\_ReferenceX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: reference point X

## Signature

```typescript
function setState_ReferenceX(referenceX: number): ISCH_PrimitiveArc;
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

referenceX

</td><td>

number

</td><td>

Reference point X

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段测试圆弧，参考点 (x+100, y+100)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);

// 3. 读取修改前的参考点 X
const before = arc.getState_ReferenceX();

// 4. 切换异步模式并将参考点 X 右移 60，弧的弯曲程度随之变化
const asyncArc = arc.toAsync();
asyncArc.setState_ReferenceX(x + 160);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('referenceX:', before, '→', refetched.getState_ReferenceX());
```

### setstate_referencey

# ISCH\_PrimitiveArc.setState\_ReferenceY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: reference point Y

## Signature

```typescript
function setState_ReferenceY(referenceY: number): ISCH_PrimitiveArc;
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

referenceY

</td><td>

number

</td><td>

Reference point Y

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段测试圆弧，参考点 (x+100, y+100)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);

// 3. 读取修改前的参考点 Y
const before = arc.getState_ReferenceY();

// 4. 切换异步模式并将参考点 Y 下移 60，弧的开口方向随之变化
const asyncArc = arc.toAsync();
asyncArc.setState_ReferenceY(y + 160);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('referenceY:', before, '→', refetched.getState_ReferenceY());
```

### setstate_startx

# ISCH\_PrimitiveArc.setState\_StartX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: start point X

## Signature

```typescript
function setState_StartX(startX: number): ISCH_PrimitiveArc;
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

startX

</td><td>

number

</td><td>

Start point X

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段测试圆弧，起点 (x, y)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);

// 3. 读取修改前的起点 X
const before = arc.getState_StartX();

// 4. 切换异步模式并将起点 X 左移 60
const asyncArc = arc.toAsync();
asyncArc.setState_StartX(x - 60);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('startX:', before, '→', refetched.getState_StartX());
```

### setstate_starty

# ISCH\_PrimitiveArc.setState\_StartY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: start point Y

## Signature

```typescript
function setState_StartY(startY: number): ISCH_PrimitiveArc;
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

startY

</td><td>

number

</td><td>

Start point Y

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段测试圆弧，起点 (x, y)（SCH 坐标单位 10mil）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);

// 3. 读取修改前的起点 Y
const before = arc.getState_StartY();

// 4. 切换异步模式并将起点 Y 上移 60
const asyncArc = arc.toAsync();
asyncArc.setState_StartY(y - 60);
await asyncArc.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('startY:', before, '→', refetched.getState_StartY());
```

### toasync

# ISCH\_PrimitiveArc.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): ISCH_PrimitiveArc;
```

## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段测试圆弧，切换到同步模式，让模式变化可观察
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);
arc.toSync();

// 3. 转换为异步图元
const asyncArc = arc.toAsync();

// 4. 异步模式下累计修改并提交
asyncArc.setState_LineWidth(12);
await asyncArc.done();

// 5. 从画布重新读取，确认提交生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('isAsync after toAsync:', arc.isAsync());
console.log('lineWidth:', 6, '→', refetched.getState_LineWidth());
```

### tosync

# ISCH\_PrimitiveArc.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): ISCH_PrimitiveArc;
```

## Returns

[ISCH\_PrimitiveArc](./ISCH_PrimitiveArc.md)

Arc primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆弧重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一段测试圆弧（创建后默认处于异步模式）
const arc = await eda.sch_PrimitiveArc.create(x, y, x + 100, y + 100, x + 200, y, null, null, 6, 1);

// 3. 转换为同步图元
const syncArc = arc.toSync();

// 4. 同步模式下修改终点 X，立即生效，无需 done()
syncArc.setState_EndX(x + 300);

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveArc.get(arc.getState_PrimitiveId());

console.log('isAsync after toSync:', arc.isAsync());
console.log('endX:', x + 200, '→', refetched.getState_EndX());
```
