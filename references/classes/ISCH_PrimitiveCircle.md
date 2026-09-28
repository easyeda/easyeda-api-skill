# ISCH\_PrimitiveCircle class

Circle primitive

## Signature

```typescript
class ISCH_PrimitiveCircle implements ISCH_Primitive
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

[done()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_CenterX()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Get the property state: center of the circle X

</td></tr>
<tr><td>

[getState\_CenterY()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Get the property state: center of the circle Y

</td></tr>
<tr><td>

[getState\_Color()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Get the property state: color

</td></tr>
<tr><td>

[getState\_FillColor()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Get the property state: fill color

</td></tr>
<tr><td>

[getState\_FillStyle()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Get the property state: fill style

</td></tr>
<tr><td>

[getState\_LineType()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Get the property state: line type

</td></tr>
<tr><td>

[getState\_LineWidth()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_Radius()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Get the property state: radius

</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_CenterX(centerX)](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: center of the circle X

</td></tr>
<tr><td>

[setState\_CenterY(centerY)](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: center of the circle Y

</td></tr>
<tr><td>

[setState\_Color(color)](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: color

</td></tr>
<tr><td>

[setState\_FillColor(fillColor)](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: fill color

</td></tr>
<tr><td>

[setState\_FillStyle(fillStyle)](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: fill style

</td></tr>
<tr><td>

[setState\_LineType(lineType)](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: line type

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[setState\_Radius(radius)](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: radius

</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveCircle.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveCircle.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<ISCH_PrimitiveCircle>;
```

## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试圆，圆心 (x, y)、半径 150（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150);

// 3. 切换异步模式，累计两处修改（半径扩大 + 改颜色）
const asyncCircle = circle.toAsync();
asyncCircle.setState_Radius(250);
asyncCircle.setState_Color('#00AA00');

// 4. 一次性提交到画布
await asyncCircle.done();

// 5. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('radius:', 150, '→', refetched.getState_Radius());
console.log('color:', '#00AA00', '→', refetched.getState_Color());
```

### getstate_centerx

# ISCH\_PrimitiveCircle.getState\_CenterX() method

Get the property state: center of the circle X

## Signature

```typescript
function getState_CenterX(): number;
```

## Returns

number

Center of the circle X

## Example

```javascript
// 1. 创建一个测试圆，圆心 (400, 300)、半径 150（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(400, 300, 150);

// 2. 读取圆心 X
const centerX = circle.getState_CenterX();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveCircle.delete([circle.getState_PrimitiveId()]);

console.log('centerX:', centerX);
```

### getstate_centery

# ISCH\_PrimitiveCircle.getState\_CenterY() method

Get the property state: center of the circle Y

## Signature

```typescript
function getState_CenterY(): number;
```

## Returns

number

Center of the circle Y

## Example

```javascript
// 1. 创建一个测试圆，圆心 (400, 300)、半径 150（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(400, 300, 150);

// 2. 读取圆心 Y
const centerY = circle.getState_CenterY();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveCircle.delete([circle.getState_PrimitiveId()]);

console.log('centerY:', centerY);
```

### getstate_color

# ISCH\_PrimitiveCircle.getState\_Color() method

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
// 1. 创建一个红色轮廓的测试圆（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(400, 300, 150, '#FF0000');

// 2. 读取轮廓颜色
const color = circle.getState_Color();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveCircle.delete([circle.getState_PrimitiveId()]);

console.log('color:', color);
```

### getstate_fillcolor

# ISCH\_PrimitiveCircle.getState\_FillColor() method

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
// 1. 创建一个带填充色的测试圆：轮廓红、填充黄（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(400, 300, 150, '#FF0000', '#FFEC8B');

// 2. 读取填充颜色
const fillColor = circle.getState_FillColor();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveCircle.delete([circle.getState_PrimitiveId()]);

console.log('fillColor:', fillColor);
```

### getstate_fillstyle

# ISCH\_PrimitiveCircle.getState\_FillStyle() method

Get the property state: fill style

## Signature

```typescript
function getState_FillStyle(): ESCH_PrimitiveFillStyle | null;
```

## Returns

[ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null

Fill style

## Example

```javascript
// 1. 创建一个实心填充的测试圆（fillStyle 传字符串枚举，如 'Solid'）
const circle = await eda.sch_PrimitiveCircle.create(400, 300, 150, '#FF0000', '#FFEC8B', 6, 0, 'Solid');

// 2. 读取填充样式
const fillStyle = circle.getState_FillStyle();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveCircle.delete([circle.getState_PrimitiveId()]);

console.log('fillStyle:', fillStyle);
```

### getstate_linetype

# ISCH\_PrimitiveCircle.getState\_LineType() method

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
// 1. 创建一个虚线轮廓的测试圆（lineType 传数字枚举，1 = DASHED）
const circle = await eda.sch_PrimitiveCircle.create(400, 300, 150, '#FF0000', null, 6, 1);

// 2. 读取线型
const lineType = circle.getState_LineType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveCircle.delete([circle.getState_PrimitiveId()]);

console.log('lineType:', lineType);
```

### getstate_linewidth

# ISCH\_PrimitiveCircle.getState\_LineWidth() method

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
// 1. 创建一个线宽 6 的测试圆（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(400, 300, 150, '#FF0000', null, 6, 0);

// 2. 读取线宽
const lineWidth = circle.getState_LineWidth();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveCircle.delete([circle.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_primitiveid

# ISCH\_PrimitiveCircle.getState\_PrimitiveId() method

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
// 1. 创建一个测试圆（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(400, 300, 150);

// 2. 读取图元 ID
const primitiveId = circle.getState_PrimitiveId();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveCircle.delete([circle.getState_PrimitiveId()]);

console.log('primitiveId:', primitiveId);
```

### getstate_primitivetype

# ISCH\_PrimitiveCircle.getState\_PrimitiveType() method

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
// 1. 创建一个测试圆（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(400, 300, 150);

// 2. 读取图元类型
const primitiveType = circle.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveCircle.delete([circle.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### getstate_radius

# ISCH\_PrimitiveCircle.getState\_Radius() method

Get the property state: radius

## Signature

```typescript
function getState_Radius(): number;
```

## Returns

number

Radius

## Example

```javascript
// 1. 创建一个半径 150 的测试圆（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(400, 300, 150);

// 2. 读取半径
const radius = circle.getState_Radius();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveCircle.delete([circle.getState_PrimitiveId()]);

console.log('radius:', radius);
```

### isasync

# ISCH\_PrimitiveCircle.isAsync() method

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
// 1. 创建一个测试圆，创建后默认处于异步模式
const circle = await eda.sch_PrimitiveCircle.create(400, 300, 150);
const asyncOnCreate = circle.isAsync();

// 2. 切换到同步模式再查询一次，对比两种模式
circle.toSync();
const asyncAfterToSync = circle.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveCircle.delete([circle.getState_PrimitiveId()]);

console.log('isAsync on create:', asyncOnCreate);
console.log('isAsync after toSync:', asyncAfterToSync);
```

### reset

# ISCH\_PrimitiveCircle.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<ISCH_PrimitiveCircle>;
```

## Returns

Promise&lt;[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)<!-- -->&gt;

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个线宽 6 的测试圆（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150, '#FF0000', null, 6, 0);

// 3. 切换异步模式，累计一处未提交的线宽修改（6 → 99）
const asyncCircle = circle.toAsync();
asyncCircle.setState_LineWidth(99);

// 4. 重置：丢弃未提交的修改，回到画布当前状态
await asyncCircle.reset();

// 5. 从画布重新读取，线宽仍是 6（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('lineWidth after reset:', refetched.getState_LineWidth());
```

### setstate_centerx

# ISCH\_PrimitiveCircle.setState\_CenterX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: center of the circle X

## Signature

```typescript
function setState_CenterX(centerX: number): ISCH_PrimitiveCircle;
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

centerX

</td><td>

number

</td><td>

Center of the circle X

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试圆，圆心 (x, y)、半径 150（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150);

// 3. 切换异步模式并把圆心右移 200
const asyncCircle = circle.toAsync();
asyncCircle.setState_CenterX(x + 200);
await asyncCircle.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('centerX:', x, '→', refetched.getState_CenterX());
```

### setstate_centery

# ISCH\_PrimitiveCircle.setState\_CenterY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: center of the circle Y

## Signature

```typescript
function setState_CenterY(centerY: number): ISCH_PrimitiveCircle;
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

centerY

</td><td>

number

</td><td>

Center of the circle Y

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试圆，圆心 (x, y)、半径 150（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150);

// 3. 切换异步模式并把圆心上移 200
const asyncCircle = circle.toAsync();
asyncCircle.setState_CenterY(y + 200);
await asyncCircle.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('centerY:', y, '→', refetched.getState_CenterY());
```

### setstate_color

# ISCH\_PrimitiveCircle.setState\_Color() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: color

## Signature

```typescript
function setState_Color(color: string | null): ISCH_PrimitiveCircle;
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

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个红色轮廓的测试圆（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150, '#FF0000');

// 3. 切换异步模式并改为绿色
const asyncCircle = circle.toAsync();
asyncCircle.setState_Color('#00AA00');
await asyncCircle.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('color:', '#FF0000', '→', refetched.getState_Color());
```

### setstate_fillcolor

# ISCH\_PrimitiveCircle.setState\_FillColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: fill color

## Signature

```typescript
function setState_FillColor(fillColor: string | null): ISCH_PrimitiveCircle;
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

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个黄色填充的测试圆（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150, '#FF0000', '#FFEC8B');

// 3. 切换异步模式并改为浅蓝填充
const asyncCircle = circle.toAsync();
asyncCircle.setState_FillColor('#A0D8EF');
await asyncCircle.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('fillColor:', '#FFEC8B', '→', refetched.getState_FillColor());
```

### setstate_fillstyle

# ISCH\_PrimitiveCircle.setState\_FillStyle() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: fill style

## Signature

```typescript
function setState_FillStyle(fillStyle: ESCH_PrimitiveFillStyle | null): ISCH_PrimitiveCircle;
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

fillStyle

</td><td>

[ESCH\_PrimitiveFillStyle](../enums/ESCH_PrimitiveFillStyle.md) \| null

</td><td>

Fill style

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个实心填充的测试圆（fillStyle 传字符串枚举 'Solid'）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150, '#FF0000', '#FFEC8B', 6, 0, 'Solid');

// 3. 切换异步模式并改为网格填充
const asyncCircle = circle.toAsync();
asyncCircle.setState_FillStyle('Grid');
await asyncCircle.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('fillStyle:', 'Solid', '→', refetched.getState_FillStyle());
```

### setstate_linetype

# ISCH\_PrimitiveCircle.setState\_LineType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: line type

## Signature

```typescript
function setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveCircle;
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

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个实线轮廓的测试圆（lineType 0 = SOLID）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150, '#FF0000', null, 6, 0);

// 3. 切换异步模式并改为虚线
const asyncCircle = circle.toAsync();
asyncCircle.setState_LineType(1);
await asyncCircle.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('lineType:', 0, '→', refetched.getState_LineType());
```

### setstate_linewidth

# ISCH\_PrimitiveCircle.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveCircle;
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

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个线宽 6 的测试圆（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150, '#FF0000', null, 6, 0);

// 3. 切换异步模式并把线宽加粗到 10
const asyncCircle = circle.toAsync();
asyncCircle.setState_LineWidth(10);
await asyncCircle.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('lineWidth:', 6, '→', refetched.getState_LineWidth());
```

### setstate_radius

# ISCH\_PrimitiveCircle.setState\_Radius() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: radius

## Signature

```typescript
function setState_Radius(radius: number): ISCH_PrimitiveCircle;
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

radius

</td><td>

number

</td><td>

Radius

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个半径 150 的测试圆（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150);

// 3. 切换异步模式并把半径扩大到 250
const asyncCircle = circle.toAsync();
asyncCircle.setState_Radius(250);
await asyncCircle.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('radius:', 150, '→', refetched.getState_Radius());
```

### toasync

# ISCH\_PrimitiveCircle.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): ISCH_PrimitiveCircle;
```

## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试圆（SCH 坐标单位 10mil）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150);

// 3. 先切换到同步模式，再切回异步模式
circle.toSync();
const asyncCircle = circle.toAsync();

// 4. 异步模式下修改半径，调用 done() 提交到画布
asyncCircle.setState_Radius(250);
await asyncCircle.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('isAsync after toAsync:', circle.isAsync());
console.log('radius:', 150, '→', refetched.getState_Radius());
```

### tosync

# ISCH\_PrimitiveCircle.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): ISCH_PrimitiveCircle;
```

## Returns

[ISCH\_PrimitiveCircle](./ISCH_PrimitiveCircle.md)

Circle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试圆重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试圆（创建后默认处于异步模式）
const circle = await eda.sch_PrimitiveCircle.create(x, y, 150);

// 3. 转换为同步图元
const syncCircle = circle.toSync();

// 4. 同步模式下扩大半径，立即生效，无需 done()
syncCircle.setState_Radius(250);

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveCircle.get(circle.getState_PrimitiveId());

console.log('isAsync after toSync:', circle.isAsync());
console.log('radius:', 150, '→', refetched.getState_Radius());
```
