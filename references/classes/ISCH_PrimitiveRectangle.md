# ISCH\_PrimitiveRectangle class

Rectangle primitive

## Signature

```typescript
class ISCH_PrimitiveRectangle implements ISCH_Primitive
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

[done()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_Color()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: border color

</td></tr>
<tr><td>

[getState\_CornerRadius()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: corner radius

</td></tr>
<tr><td>

[getState\_FillColor()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: fill color

</td></tr>
<tr><td>

[getState\_FillStyle()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: fill style

</td></tr>
<tr><td>

[getState\_Height()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: height

</td></tr>
<tr><td>

[getState\_LineType()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: line type

</td></tr>
<tr><td>

[getState\_LineWidth()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: Line width

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_Rotation()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: rotation angle

</td></tr>
<tr><td>

[getState\_TopLeftX()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: top-left point X

</td></tr>
<tr><td>

[getState\_TopLeftY()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: top-left point Y

</td></tr>
<tr><td>

[getState\_Width()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Get the property state: width

</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_Color(color)](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: border color

</td></tr>
<tr><td>

[setState\_CornerRadius(cornerRadius)](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: corner radius

</td></tr>
<tr><td>

[setState\_FillColor(fillColor)](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: fill color

</td></tr>
<tr><td>

[setState\_FillStyle(fillStyle)](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: fill style

</td></tr>
<tr><td>

[setState\_Height(height)](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: height

</td></tr>
<tr><td>

[setState\_LineType(lineType)](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: line type

</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Line width

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: rotation angle

</td></tr>
<tr><td>

[setState\_TopLeftX(topLeftX)](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: top-left point X

</td></tr>
<tr><td>

[setState\_TopLeftY(topLeftY)](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: top-left point Y

</td></tr>
<tr><td>

[setState\_Width(width)](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: width

</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveRectangle.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveRectangle.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<ISCH_PrimitiveRectangle>;
```

## Returns

Promise&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)<!-- -->&gt;

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个 200×100 的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100);

// 3. 切换异步模式，累计两处修改（尺寸扩大 + 改边框颜色）
const asyncRect = rect.toAsync();
asyncRect.setState_Width(300);
asyncRect.setState_Color('#00AA00');

// 4. 一次性提交到画布
await asyncRect.done();

// 5. 从画布重新读取，确认两处修改都已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('width:', 200, '→', refetched.getState_Width());
console.log('color:', '#00AA00', '→', refetched.getState_Color());
```

### getstate_color

# ISCH\_PrimitiveRectangle.getState\_Color() method

Get the property state: border color

## Signature

```typescript
function getState_Color(): string | null;
```

## Returns

string \| null

Border color

## Example

```javascript
// 1. 创建一个红色边框的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100, 0, 0, '#FF0000');

// 2. 读取边框颜色
const color = rect.getState_Color();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('color:', color);
```

### getstate_cornerradius

# ISCH\_PrimitiveRectangle.getState\_CornerRadius() method

Get the property state: corner radius

## Signature

```typescript
function getState_CornerRadius(): number;
```

## Returns

number

Corner radius

## Example

```javascript
// 1. 创建一个圆角半径 10 的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100, 10);

// 2. 读取圆角半径
const cornerRadius = rect.getState_CornerRadius();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('cornerRadius:', cornerRadius);
```

### getstate_fillcolor

# ISCH\_PrimitiveRectangle.getState\_FillColor() method

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
// 1. 创建一个黄色填充的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100, 0, 0, null, '#FFFF00');

// 2. 读取填充颜色
const fillColor = rect.getState_FillColor();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('fillColor:', fillColor);
```

### getstate_fillstyle

# ISCH\_PrimitiveRectangle.getState\_FillStyle() method

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
// 1. 创建一个网格填充的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100, 0, 0, null, null, null, null, 'Grid');

// 2. 读取填充样式
const fillStyle = rect.getState_FillStyle();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('fillStyle:', fillStyle);
```

### getstate_height

# ISCH\_PrimitiveRectangle.getState\_Height() method

Get the property state: height

## Signature

```typescript
function getState_Height(): number;
```

## Returns

number

Height

## Example

```javascript
// 1. 创建一个 200×100 的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100);

// 2. 读取矩形的高
const height = rect.getState_Height();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('height:', height);
```

### getstate_linetype

# ISCH\_PrimitiveRectangle.getState\_LineType() method

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
// 1. 创建一个虚线边框的测试矩形（末参 1 = 虚线，SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100, 0, 0, '#FF0000', null, 6, 1);

// 2. 读取线型
const lineType = rect.getState_LineType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('lineType:', lineType);
```

### getstate_linewidth

# ISCH\_PrimitiveRectangle.getState\_LineWidth() method

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
// 1. 创建一个线宽 6 的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100, 0, 0, '#FF0000', null, 6);

// 2. 读取边框线宽
const lineWidth = rect.getState_LineWidth();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('lineWidth:', lineWidth);
```

### getstate_primitiveid

# ISCH\_PrimitiveRectangle.getState\_PrimitiveId() method

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
// 1. 创建一个测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100);

// 2. 读取图元 ID
const primitiveId = rect.getState_PrimitiveId();

// 3. 用 ID 从画布重取矩形，验证 ID 有效
const refetched = await eda.sch_PrimitiveRectangle.get(primitiveId);

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
console.log('refetched width:', refetched.getState_Width());
```

### getstate_primitivetype

# ISCH\_PrimitiveRectangle.getState\_PrimitiveType() method

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
// 1. 创建一个测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100);

// 2. 读取图元类型
const primitiveType = rect.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### getstate_rotation

# ISCH\_PrimitiveRectangle.getState\_Rotation() method

Get the property state: rotation angle

## Signature

```typescript
function getState_Rotation(): number;
```

## Returns

number

Rotation angle

## Example

```javascript
// 1. 创建一个旋转 45° 的测试矩形（第 6 参是旋转角，SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100, 0, 45);

// 2. 读取旋转角度
const rotation = rect.getState_Rotation();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('rotation:', rotation);
```

### getstate_topleftx

# ISCH\_PrimitiveRectangle.getState\_TopLeftX() method

Get the property state: top-left point X

## Signature

```typescript
function getState_TopLeftX(): number;
```

## Returns

number

Top-left point X

## Example

```javascript
// 1. 创建一个左上角在 (400, 300) 的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100);

// 2. 读取左上角 X 坐标
const topLeftX = rect.getState_TopLeftX();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('topLeftX:', topLeftX);
```

### getstate_toplefty

# ISCH\_PrimitiveRectangle.getState\_TopLeftY() method

Get the property state: top-left point Y

## Signature

```typescript
function getState_TopLeftY(): number;
```

## Returns

number

Top-left point Y

## Example

```javascript
// 1. 创建一个左上角在 (400, 300) 的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100);

// 2. 读取左上角 Y 坐标
const topLeftY = rect.getState_TopLeftY();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('topLeftY:', topLeftY);
```

### getstate_width

# ISCH\_PrimitiveRectangle.getState\_Width() method

Get the property state: width

## Signature

```typescript
function getState_Width(): number;
```

## Returns

number

Width

## Example

```javascript
// 1. 创建一个 200×100 的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100);

// 2. 读取矩形的宽
const width = rect.getState_Width();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('width:', width);
```

### isasync

# ISCH\_PrimitiveRectangle.isAsync() method

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
// 1. 创建一个测试矩形，创建后默认处于异步模式
const rect = await eda.sch_PrimitiveRectangle.create(400, 300, 200, 100);
const asyncOnCreate = rect.isAsync();

// 2. 切换到同步模式再查询一次，对比两种模式
rect.toSync();
const asyncAfterToSync = rect.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveRectangle.delete([rect.getState_PrimitiveId()]);

console.log('isAsync on create:', asyncOnCreate);
console.log('isAsync after toSync:', asyncAfterToSync);
```

### reset

# ISCH\_PrimitiveRectangle.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<ISCH_PrimitiveRectangle>;
```

## Returns

Promise&lt;[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)<!-- -->&gt;

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个线宽 6 的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100, 0, 0, '#FF0000', null, 6);

// 3. 切换异步模式，累计一处未提交的线宽修改（6 → 99）
const asyncRect = rect.toAsync();
asyncRect.setState_LineWidth(99);

// 4. 重置：丢弃未提交的修改，回到画布当前状态
await asyncRect.reset();

// 5. 从画布重新读取，线宽仍是 6（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('lineWidth after reset:', refetched.getState_LineWidth());
```

### setstate_color

# ISCH\_PrimitiveRectangle.setState\_Color() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: border color

## Signature

```typescript
function setState_Color(color: string | null): ISCH_PrimitiveRectangle;
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

Border color

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个红色边框的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100, 0, 0, '#FF0000');

// 3. 切换异步模式，把边框换成绿色
const asyncRect = rect.toAsync();
asyncRect.setState_Color('#00AA00');
await asyncRect.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('color:', '#FF0000', '→', refetched.getState_Color());
```

### setstate_cornerradius

# ISCH\_PrimitiveRectangle.setState\_CornerRadius() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: corner radius

## Signature

```typescript
function setState_CornerRadius(cornerRadius: number): ISCH_PrimitiveRectangle;
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

cornerRadius

</td><td>

number

</td><td>

Corner radius

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个直角测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100);

// 3. 切换异步模式，把圆角半径调到 20
const asyncRect = rect.toAsync();
asyncRect.setState_CornerRadius(20);
await asyncRect.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('cornerRadius:', 0, '→', refetched.getState_CornerRadius());
```

### setstate_fillcolor

# ISCH\_PrimitiveRectangle.setState\_FillColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: fill color

## Signature

```typescript
function setState_FillColor(fillColor: string | null): ISCH_PrimitiveRectangle;
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

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个无填充的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100);

// 3. 切换异步模式，设置浅黄填充
const asyncRect = rect.toAsync();
asyncRect.setState_FillColor('#FFEC8B');
await asyncRect.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('fillColor:', null, '→', refetched.getState_FillColor());
```

### setstate_fillstyle

# ISCH\_PrimitiveRectangle.setState\_FillStyle() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: fill style

## Signature

```typescript
function setState_FillStyle(fillStyle: ESCH_PrimitiveFillStyle | null): ISCH_PrimitiveRectangle;
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

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个无填充的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100);

// 3. 切换异步模式，设置网格填充样式
const asyncRect = rect.toAsync();
asyncRect.setState_FillStyle('Grid');
await asyncRect.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('fillStyle:', null, '→', refetched.getState_FillStyle());
```

### setstate_height

# ISCH\_PrimitiveRectangle.setState\_Height() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: height

## Signature

```typescript
function setState_Height(height: number): ISCH_PrimitiveRectangle;
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

height

</td><td>

number

</td><td>

Height

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个 200×100 的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100);

// 3. 切换异步模式，把高扩大到 150
const asyncRect = rect.toAsync();
asyncRect.setState_Height(150);
await asyncRect.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('height:', 100, '→', refetched.getState_Height());
```

### setstate_linetype

# ISCH\_PrimitiveRectangle.setState\_LineType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: line type

## Signature

```typescript
function setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveRectangle;
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

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个实线边框的测试矩形（末参 0 = 实线，SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100, 0, 0, '#FF0000', null, 6, 0);

// 3. 切换异步模式，把线型改为虚线（1）
const asyncRect = rect.toAsync();
asyncRect.setState_LineType(1);
await asyncRect.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('lineType:', 0, '→', refetched.getState_LineType());
```

### setstate_linewidth

# ISCH\_PrimitiveRectangle.setState\_LineWidth() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Line width

## Signature

```typescript
function setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveRectangle;
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

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个线宽 6 的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100, 0, 0, '#FF0000', null, 6);

// 3. 切换异步模式，把线宽加粗到 15
const asyncRect = rect.toAsync();
asyncRect.setState_LineWidth(15);
await asyncRect.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('lineWidth:', 6, '→', refetched.getState_LineWidth());
```

### setstate_rotation

# ISCH\_PrimitiveRectangle.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: rotation angle

## Signature

```typescript
function setState_Rotation(rotation: number): ISCH_PrimitiveRectangle;
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

rotation

</td><td>

number

</td><td>

Rotation angle

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个未旋转的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100);

// 3. 切换异步模式，提交旋转 30°
const asyncRect = rect.toAsync();
asyncRect.setState_Rotation(30);
await asyncRect.done();

// 4. 从画布重新读取：形状已旋转（左上角坐标变化），角度读数仍为 0
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('rotation:', 0, '→', refetched.getState_Rotation());
console.log('topLeft moved by rotate:', x, '→', refetched.getState_TopLeftX());
```

### setstate_topleftx

# ISCH\_PrimitiveRectangle.setState\_TopLeftX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: top-left point X

## Signature

```typescript
function setState_TopLeftX(topLeftX: number): ISCH_PrimitiveRectangle;
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

topLeftX

</td><td>

number

</td><td>

Top-left point X

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100);

// 3. 切换异步模式，把左上角 X 移到 x + 300
const asyncRect = rect.toAsync();
asyncRect.setState_TopLeftX(x + 300);
await asyncRect.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('topLeftX:', x, '→', refetched.getState_TopLeftX());
```

### setstate_toplefty

# ISCH\_PrimitiveRectangle.setState\_TopLeftY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: top-left point Y

## Signature

```typescript
function setState_TopLeftY(topLeftY: number): ISCH_PrimitiveRectangle;
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

topLeftY

</td><td>

number

</td><td>

Top-left point Y

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100);

// 3. 切换异步模式，把左上角 Y 移到 y + 200
const asyncRect = rect.toAsync();
asyncRect.setState_TopLeftY(y + 200);
await asyncRect.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('topLeftY:', y, '→', refetched.getState_TopLeftY());
```

### setstate_width

# ISCH\_PrimitiveRectangle.setState\_Width() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: width

## Signature

```typescript
function setState_Width(width: number): ISCH_PrimitiveRectangle;
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

width

</td><td>

number

</td><td>

Width

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个 200×100 的测试矩形（SCH 坐标单位 10mil）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100);

// 3. 切换异步模式，把宽扩大到 300
const asyncRect = rect.toAsync();
asyncRect.setState_Width(300);
await asyncRect.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('width:', 200, '→', refetched.getState_Width());
```

### toasync

# ISCH\_PrimitiveRectangle.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): ISCH_PrimitiveRectangle;
```

## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试矩形（创建后默认处于异步模式）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100);

// 3. 先切换到同步模式，再转回异步模式，确认可来回切换
rect.toSync();
const asyncRect = rect.toAsync();

// 4. 异步模式下批量修改尺寸，一次提交
asyncRect.setState_Width(300);
asyncRect.setState_Height(150);
await asyncRect.done();

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('isAsync after toAsync:', rect.isAsync());
console.log('width:', 200, '→', refetched.getState_Width());
console.log('height:', 100, '→', refetched.getState_Height());
```

### tosync

# ISCH\_PrimitiveRectangle.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): ISCH_PrimitiveRectangle;
```

## Returns

[ISCH\_PrimitiveRectangle](./ISCH_PrimitiveRectangle.md)

Rectangle primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试矩形重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 创建一个测试矩形（创建后默认处于异步模式）
const rect = await eda.sch_PrimitiveRectangle.create(x, y, 200, 100);

// 3. 转换为同步图元
const syncRect = rect.toSync();

// 4. 同步模式下把宽扩大到 300，立即生效，无需 done()
syncRect.setState_Width(300);

// 5. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitiveRectangle.get(rect.getState_PrimitiveId());

console.log('isAsync after toSync:', rect.isAsync());
console.log('width:', 200, '→', refetched.getState_Width());
```
