# IPCB\_PrimitiveObject class

Binary embedded object primitive

## Signature

```typescript
class IPCB_PrimitiveObject implements IPCB_Primitive
```
**Implements:** [IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

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

[done()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_BinaryData()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: binary data

</td></tr>
<tr><td>

[getState\_FileName()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: file name

</td></tr>
<tr><td>

[getState\_Height()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: height

</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: Layer

</td></tr>
<tr><td>

[getState\_Mirror()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: whether it is horizontally mirrored

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: whether it is locked

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_Rotation()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: rotation angle

</td></tr>
<tr><td>

[getState\_TopLeftX()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: top-left point X

</td></tr>
<tr><td>

[getState\_TopLeftY()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: top-left point Y

</td></tr>
<tr><td>

[getState\_Width()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Get the property state: width

</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_BinaryData(binaryData)](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Set the property state: binary data

</td></tr>
<tr><td>

[setState\_FileName(fileName)](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Set the property state: file name

</td></tr>
<tr><td>

[setState\_Height(height)](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Set the property state: height

</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Layer

</td></tr>
<tr><td>

[setState\_Mirror(mirror)](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Set the property state: whether it is horizontally mirrored

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether it is locked

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Set the property state: rotation angle

</td></tr>
<tr><td>

[setState\_TopLeftX(topLeftX)](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Set the property state: top-left point X

</td></tr>
<tr><td>

[setState\_TopLeftY(topLeftY)](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Set the property state: top-left point Y

</td></tr>
<tr><td>

[setState\_Width(width)](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Set the property state: width

</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveObject.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveObject.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<IPCB_PrimitiveObject>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)<!-- -->&gt;

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试图元重合
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';

// 2. 放置一个未旋转的内嵌图片
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);
const before = obj.getState_Rotation();

// 3. 异步模式下旋转 90 度（此时画布还没变）
const asyncObj = obj.toAsync();
asyncObj.setState_Rotation(90);
await asyncObj.done();

// 4. 从画布重新读取，确认修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('rotation:', before, '→', refetched.getState_Rotation());
```

### getstate_binarydata

# IPCB\_PrimitiveObject.getState\_BinaryData() method

Get the property state: binary data

## Signature

```typescript
function getState_BinaryData(): string;
```

## Returns

string

Binary data

## Remarks

The `binaryData` retrieved from the canvas may be a `hashId`<!-- -->, because our backend stores binary embedded object data in object storage,

The object storage uses `hashId` as the index. Fully retrieving the data will cause additional requests and consume performance

## Example

```javascript
// 1. 生成本次运行专用的坐标，在顶层丝印层放置一个 400 x 300 的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 读取内嵌的二进制数据
const binaryData = obj.getState_BinaryData();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('binaryData 长度：', binaryData.length);
console.log('binaryData 前缀：', binaryData.substring(0, 30));
```

### getstate_filename

# IPCB\_PrimitiveObject.getState\_FileName() method

Get the property state: file name

## Signature

```typescript
function getState_FileName(): string;
```

## Returns

string

File name

## Example

```javascript
// 1. 生成本次运行专用的坐标，在顶层丝印层放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'company-logo.png', false);

// 2. 读取图片文件名
const fileName = obj.getState_FileName();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('fileName:', fileName);
```

### getstate_height

# IPCB\_PrimitiveObject.getState\_Height() method

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
// 1. 生成本次运行专用的坐标，在顶层丝印层放置一个 400 x 300 的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 读取图片高度
const height = obj.getState_Height();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('height:', height);
```

### getstate_layer

# IPCB\_PrimitiveObject.getState\_Layer() method

Get the property state: Layer

## Signature

```typescript
function getState_Layer(): TPCB_LayersOfObject | undefined;
```

## Returns

[TPCB\_LayersOfObject](../types/TPCB_LayersOfObject.md) \| undefined

Layer

## Example

```javascript
// 1. 生成本次运行专用的坐标，在顶层丝印层放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 读取图片所在层（3=顶层丝印）
const layer = obj.getState_Layer();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('layer:', layer);
```

### getstate_mirror

# IPCB\_PrimitiveObject.getState\_Mirror() method

Get the property state: whether it is horizontally mirrored

## Signature

```typescript
function getState_Mirror(): boolean;
```

## Returns

boolean

Whether it is horizontally mirrored

## Example

```javascript
// 1. 生成本次运行专用的坐标，在顶层丝印层放置一个未镜像的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 查询是否水平镜像
const mirror = obj.getState_Mirror();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('mirror:', mirror);
```

### getstate_primitiveid

# IPCB\_PrimitiveObject.getState\_PrimitiveId() method

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
// 1. 生成本次运行专用的坐标，在顶层丝印层放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 读取图元 ID
const primitiveId = obj.getState_PrimitiveId();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
```

### getstate_primitivelock

# IPCB\_PrimitiveObject.getState\_PrimitiveLock() method

Get the property state: whether it is locked

## Signature

```typescript
function getState_PrimitiveLock(): boolean;
```

## Returns

boolean

Whether it is locked

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个未锁定的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 查询是否锁定
const primitiveLock = obj.getState_PrimitiveLock();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('primitiveLock:', primitiveLock);
```

### getstate_primitivetype

# IPCB\_PrimitiveObject.getState\_PrimitiveType() method

Get the property state: primitive type

## Signature

```typescript
function getState_PrimitiveType(): EPCB_PrimitiveType;
```

## Returns

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

Primitive type

## Example

```javascript
// 1. 生成本次运行专用的坐标，在顶层丝印层放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 读取图元类型（内嵌图片固定返回 'Object'）
const primitiveType = obj.getState_PrimitiveType();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### getstate_rotation

# IPCB\_PrimitiveObject.getState\_Rotation() method

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
// 1. 生成本次运行专用的坐标，放置一个未旋转的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 读取旋转角度
const rotation = obj.getState_Rotation();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('rotation:', rotation);
```

### getstate_topleftx

# IPCB\_PrimitiveObject.getState\_TopLeftX() method

Get the property state: top-left point X

## Signature

```typescript
function getState_TopLeftX(): number | undefined;
```

## Returns

number \| undefined

Top-left point X

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 读取左上角 X 坐标
const topLeftX = obj.getState_TopLeftX();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('topLeftX:', topLeftX);
```

### getstate_toplefty

# IPCB\_PrimitiveObject.getState\_TopLeftY() method

Get the property state: top-left point Y

## Signature

```typescript
function getState_TopLeftY(): number | undefined;
```

## Returns

number \| undefined

Top-left point Y

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 读取左上角 Y 坐标
const topLeftY = obj.getState_TopLeftY();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('topLeftY:', topLeftY);
```

### getstate_width

# IPCB\_PrimitiveObject.getState\_Width() method

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
// 1. 生成本次运行专用的坐标，在顶层丝印层放置一个 400 x 300 的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 读取图片宽度
const width = obj.getState_Width();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('width:', width);
```

### isasync

# IPCB\_PrimitiveObject.isAsync() method

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
// 1. 生成本次运行专用的坐标，放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 查询异步模式
const isAsync = obj.isAsync();

// 3. 清理测试图元（查询类案例不留测试对象）
await eda.pcb_PrimitiveObject.delete([obj.getState_PrimitiveId()]);

console.log('isAsync:', isAsync);
```

### reset

# IPCB\_PrimitiveObject.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<IPCB_PrimitiveObject>;
```

## Returns

Promise&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)<!-- -->&gt;

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个未旋转的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);
const before = obj.getState_Rotation();

// 2. 异步模式下把图片旋转 90 度，随后反悔
const asyncObj = obj.toAsync();
asyncObj.setState_Rotation(90);

// 3. reset 丢弃未提交的修改（保留现场供观察）
await asyncObj.reset();

// 4. 从画布重新读取，确认旋转没有变
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('rotation:', before, '→', refetched.getState_Rotation());
```

### setstate_binarydata

# IPCB\_PrimitiveObject.setState\_BinaryData() method

Set the property state: binary data

## Signature

```typescript
function setState_BinaryData(binaryData: string): IPCB_PrimitiveObject;
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

binaryData

</td><td>

string

</td><td>

Binary data

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Remarks

The `binaryData` re-retrieved from the canvas may be a `hashId`<!-- -->, because our backend stores binary embedded object data in object storage,

The object storage uses `hashId` as the index. Fully retrieving the data will cause additional requests and consume performance

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个 4x4 图片的内嵌对象
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const oldImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
// 8x8 纯色 PNG 的 data URI，作为替换用的新图
const newImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAEklEQVR4nGOQi7rzHx9mGBkKAFPclMHPGdtKAAAAAElFTkSuQmCC';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, oldImage, 400, 300, 0, false, 'demo.png', false);
const before = obj.getState_BinaryData().length;

// 2. 异步模式替换为新图片数据
const asyncObj = obj.toAsync();
asyncObj.setState_BinaryData(newImage);
await asyncObj.done();

// 3. 从画布重新读取，确认数据已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('binaryData 长度：', before, '→', refetched.getState_BinaryData().length);
```

### setstate_filename

# IPCB\_PrimitiveObject.setState\_FileName() method

Set the property state: file name

## Signature

```typescript
function setState_FileName(fileName: string): IPCB_PrimitiveObject;
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

fileName

</td><td>

string

</td><td>

File name

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'old-name.png', false);
const before = obj.getState_FileName();

// 2. 异步模式重命名文件
const asyncObj = obj.toAsync();
asyncObj.setState_FileName('company-logo.png');
await asyncObj.done();

// 3. 从画布重新读取，确认文件名已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('fileName:', before, '→', refetched.getState_FileName());
```

### setstate_height

# IPCB\_PrimitiveObject.setState\_Height() method

Set the property state: height

## Signature

```typescript
function setState_Height(height: number): IPCB_PrimitiveObject;
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

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个 400 x 300 的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);
const before = obj.getState_Height();

// 2. 异步模式把高度从 300 调到 450
const asyncObj = obj.toAsync();
asyncObj.setState_Height(450);
await asyncObj.done();

// 3. 从画布重新读取，确认高度已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('height:', before, '→', refetched.getState_Height());
```

### setstate_layer

# IPCB\_PrimitiveObject.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Layer

## Signature

```typescript
function setState_Layer(layer: TPCB_LayersOfObject): IPCB_PrimitiveObject;
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

layer

</td><td>

[TPCB\_LayersOfObject](../types/TPCB_LayersOfObject.md)

</td><td>

Layer

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，在顶层丝印层放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);
const before = obj.getState_Layer();

// 2. 异步模式把图片从顶层丝印（3）挪到底层丝印（4）
const asyncObj = obj.toAsync();
asyncObj.setState_Layer(4);
await asyncObj.done();

// 3. 从画布重新读取，确认层已切换（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('layer:', before, '→', refetched.getState_Layer());
```

### setstate_mirror

# IPCB\_PrimitiveObject.setState\_Mirror() method

Set the property state: whether it is horizontally mirrored

## Signature

```typescript
function setState_Mirror(mirror: boolean): IPCB_PrimitiveObject;
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

mirror

</td><td>

boolean

</td><td>

Whether it is horizontally mirrored

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，在底层丝印层（4）放置一个未镜像的图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(4, x, y, imageData, 400, 300, 0, false, 'demo.png', false);
const before = obj.getState_Mirror();

// 2. 异步模式打开水平镜像
const asyncObj = obj.toAsync();
asyncObj.setState_Mirror(true);
await asyncObj.done();

// 3. 从画布重新读取，确认镜像已开启（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('mirror:', before, '→', refetched.getState_Mirror());
```

### setstate_primitivelock

# IPCB\_PrimitiveObject.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is locked

## Signature

```typescript
function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveObject;
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

primitiveLock

</td><td>

boolean

</td><td>

Whether it is locked

</td></tr>
</tbody></table>

## Returns

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个未锁定的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);
const before = obj.getState_PrimitiveLock();

// 2. 异步模式锁定图元
const asyncObj = obj.toAsync();
asyncObj.setState_PrimitiveLock(true);
await asyncObj.done();

// 3. 从画布重新读取，确认已锁定（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('primitiveLock:', before, '→', refetched.getState_PrimitiveLock());
```

### setstate_rotation

# IPCB\_PrimitiveObject.setState\_Rotation() method

Set the property state: rotation angle

## Signature

```typescript
function setState_Rotation(rotation: number): IPCB_PrimitiveObject;
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

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个未旋转的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);
const before = obj.getState_Rotation();

// 2. 异步模式旋转 90 度
const asyncObj = obj.toAsync();
asyncObj.setState_Rotation(90);
await asyncObj.done();

// 3. 从画布重新读取，确认角度已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('rotation:', before, '→', refetched.getState_Rotation());
```

### setstate_topleftx

# IPCB\_PrimitiveObject.setState\_TopLeftX() method

Set the property state: top-left point X

## Signature

```typescript
function setState_TopLeftX(topLeftX: number): IPCB_PrimitiveObject;
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

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);
const before = obj.getState_TopLeftX();

// 2. 异步模式水平右移 500mil
const asyncObj = obj.toAsync();
asyncObj.setState_TopLeftX(before + 500);
await asyncObj.done();

// 3. 从画布重新读取，确认 X 已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('topLeftX:', before, '→', refetched.getState_TopLeftX());
```

### setstate_toplefty

# IPCB\_PrimitiveObject.setState\_TopLeftY() method

Set the property state: top-left point Y

## Signature

```typescript
function setState_TopLeftY(topLeftY: number): IPCB_PrimitiveObject;
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

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);
const before = obj.getState_TopLeftY();

// 2. 异步模式垂直上移 500mil
const asyncObj = obj.toAsync();
asyncObj.setState_TopLeftY(before - 500);
await asyncObj.done();

// 3. 从画布重新读取，确认 Y 已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('topLeftY:', before, '→', refetched.getState_TopLeftY());
```

### setstate_width

# IPCB\_PrimitiveObject.setState\_Width() method

Set the property state: width

## Signature

```typescript
function setState_Width(width: number): IPCB_PrimitiveObject;
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

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个 400 x 300 的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);
const before = obj.getState_Width();

// 2. 异步模式把宽度从 400 调到 600
const asyncObj = obj.toAsync();
asyncObj.setState_Width(600);
await asyncObj.done();

// 3. 从画布重新读取，确认宽度已更新（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('width:', before, '→', refetched.getState_Width());
```

### toasync

# IPCB\_PrimitiveObject.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): IPCB_PrimitiveObject;
```

## Returns

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个 400 x 300 的内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);

// 2. 切换异步模式后批量修改：放大到 600 x 450 并重命名
const asyncObj = obj.toAsync();
asyncObj.setState_Width(600);
asyncObj.setState_Height(450);
asyncObj.setState_FileName('logo-large.png');
await asyncObj.done();

// 3. 从画布重新读取，确认批量修改已生效（保留现场供观察）
const refetched = await eda.pcb_PrimitiveObject.get(obj.getState_PrimitiveId());

console.log('width:', refetched.getState_Width());
console.log('height:', refetched.getState_Height());
console.log('fileName:', refetched.getState_FileName());
```

### tosync

# IPCB\_PrimitiveObject.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): IPCB_PrimitiveObject;
```

## Returns

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

Binary embedded object primitive object

## Example

```javascript
// 1. 生成本次运行专用的坐标，放置一个内嵌图片
const x = 2000 + Math.floor(Math.random() * 100000);
const y = 2000 + Math.floor(Math.random() * 100000);
// 4x4 纯色 PNG 的 data URI（binaryData 必须是 data URI 格式，裸 base64 会创建失败）
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.pcb_PrimitiveObject.create(3, x, y, imageData, 400, 300, 0, false, 'demo.png', false);
const before = obj.isAsync();

// 2. 转换为同步图元（保留现场供观察）
const syncObj = obj.toSync();
const after = syncObj.isAsync();

// 3. 同步图元直接读取属性，无需提交
console.log('isAsync:', before, '→', after);
console.log('primitiveType:', syncObj.getState_PrimitiveType());
console.log('layer:', syncObj.getState_Layer());
```
