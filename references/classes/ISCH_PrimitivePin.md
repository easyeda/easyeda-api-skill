# ISCH\_PrimitivePin class

Pin primitive

## Signature

```typescript
class ISCH_PrimitivePin implements ISCH_Primitive
```
**Implements:** [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

## Remarks

Pin primitives are only available in the symbol editor. In a schematic sheet, the pin associated with a symbol is called [a device pin primitive](./ISCH_PrimitiveComponentPin.md)

## Properties

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[async](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

boolean

</td><td>

异步

</td></tr>
<tr><td>

[noConnected?](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

boolean

</td><td>

_(Optional)_ 是否存在非连接标识

</td></tr>
<tr><td>

[otherProperty?](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

Record&lt;string, string \| number \| boolean&gt;

</td><td>

_(Optional)_ 其它参数

</td></tr>
<tr><td>

[pinColor](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

string \| null

</td><td>

引脚颜色

</td></tr>
<tr><td>

[pinLength](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

number

</td><td>

引脚长度

</td></tr>
<tr><td>

[pinName](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

string

</td><td>

引脚名称

</td></tr>
<tr><td>

[pinNumber](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

string

</td><td>

引脚编号

</td></tr>
<tr><td>

[pinShape](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

[ESCH\_PrimitivePinShape](../enums/ESCH_PrimitivePinShape.md)

</td><td>

引脚形状

</td></tr>
<tr><td>

[pinType](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

[ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)

</td><td>

引脚类型

</td></tr>
<tr><td>

[primitiveId?](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

string

</td><td>

_(Optional)_ 图元 ID

</td></tr>
<tr><td>

[primitiveType](./ISCH_PrimitivePin.md)

</td><td>

`protected`

`readonly`

</td><td>

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

</td><td>

图元类型

</td></tr>
<tr><td>

[rotation](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

number

</td><td>

旋转角度

</td></tr>
<tr><td>

[x](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

number

</td><td>

坐标 X

</td></tr>
<tr><td>

[y](./ISCH_PrimitivePin.md)

</td><td>

`protected`

</td><td>

number

</td><td>

坐标 Y

</td></tr>
</tbody></table>

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[done()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas

</td></tr>
<tr><td>

[getState\_NoConnected()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: whether there is a no-connect flag

</td></tr>
<tr><td>

[getState\_OtherProperty()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: other parameters

</td></tr>
<tr><td>

[getState\_PinColor()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: pin color

</td></tr>
<tr><td>

[getState\_PinLength()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: pin length

</td></tr>
<tr><td>

[getState\_PinName()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: pin name

</td></tr>
<tr><td>

[getState\_PinNumber()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: pin number

</td></tr>
<tr><td>

[getState\_PinShape()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: pin shape

</td></tr>
<tr><td>

[getState\_pinType()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: pin type

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: primitive ID

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: primitive type

</td></tr>
<tr><td>

[getState\_Rotation()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: rotation angle

</td></tr>
<tr><td>

[getState\_X()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: X coordinate

</td></tr>
<tr><td>

[getState\_Y()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Get the property state: Y coordinate

</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Query whether the primitive is an async primitive

</td></tr>
<tr><td>

[reset()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state

</td></tr>
<tr><td>

[setState\_NoConnected(noConnected)](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: whether there is a no-connect flag

</td></tr>
<tr><td>

[setState\_OtherProperty(otherProperty)](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: other parameters

</td></tr>
<tr><td>

[setState\_PinColor(pinColor)](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: pin color

</td></tr>
<tr><td>

[setState\_PinLength(pinLength)](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: pin length

</td></tr>
<tr><td>

[setState\_PinName(pinName)](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: pin name

</td></tr>
<tr><td>

[setState\_PinNumber(pinNumber)](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: pin number

</td></tr>
<tr><td>

[setState\_PinShape(pinShape)](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: pin shape

</td></tr>
<tr><td>

[setState\_PinType(pinType)](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: pin type

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: rotation angle

</td></tr>
<tr><td>

[setState\_X(x)](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: X coordinate

</td></tr>
<tr><td>

[setState\_Y(y)](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

**_(BETA)_** Set the property state: Y coordinate

</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Convert Primitive to Async primitive

</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitivePin.md)

</td><td>

</td><td>

Convert Primitive to Sync primitive

</td></tr>
</tbody></table>

---

## 属性详情

### async

# ISCH\_PrimitivePin.async property

异步

## Signature

```typescript
function async: boolean;
```

### noconnected

# ISCH\_PrimitivePin.noConnected property

是否存在非连接标识

## Signature

```typescript
function noConnected?: boolean;
```

### otherproperty

# ISCH\_PrimitivePin.otherProperty property

其它参数

## Signature

```typescript
function otherProperty?: Record<string, string | number | boolean>;
```

### pincolor

# ISCH\_PrimitivePin.pinColor property

引脚颜色

## Signature

```typescript
function pinColor: string | null;
```

### pinlength

# ISCH\_PrimitivePin.pinLength property

引脚长度

## Signature

```typescript
function pinLength: number;
```

### pinname

# ISCH\_PrimitivePin.pinName property

引脚名称

## Signature

```typescript
function pinName: string;
```

### pinnumber

# ISCH\_PrimitivePin.pinNumber property

引脚编号

## Signature

```typescript
function pinNumber: string;
```

### pinshape

# ISCH\_PrimitivePin.pinShape property

引脚形状

## Signature

```typescript
function pinShape: ESCH_PrimitivePinShape;
```

### pintype

# ISCH\_PrimitivePin.pinType property

引脚类型

## Signature

```typescript
function pinType: ESCH_PrimitivePinType;
```

### primitiveid

# ISCH\_PrimitivePin.primitiveId property

图元 ID

## Signature

```typescript
function primitiveId?: string;
```

### primitivetype

# ISCH\_PrimitivePin.primitiveType property

图元类型

## Signature

```typescript
function readonly primitiveType: ESCH_PrimitiveType;
```

### rotation

# ISCH\_PrimitivePin.rotation property

旋转角度

## Signature

```typescript
function rotation: number;
```

### x

# ISCH\_PrimitivePin.x property

坐标 X

## Signature

```typescript
function x: number;
```

### y

# ISCH\_PrimitivePin.y property

坐标 Y

## Signature

```typescript
function y: number;
```


---

## 方法详情

### done

# ISCH\_PrimitivePin.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
function done(): Promise<ISCH_PrimitivePin>;
```

## Returns

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)<!-- -->&gt;

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');

// 3. 异步模式下连续修改编号和名称（此时画布尚未变化）
const asyncPin = pin.toAsync();
asyncPin.setState_PinNumber('A1');
asyncPin.setState_PinName('SYS_CLK');

// 4. done() 一次性提交两处修改
const applied = await asyncPin.done();

// 5. 从画布重新取引脚，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('applied number:', refetched.getState_PinNumber());
console.log('applied name:', refetched.getState_PinName());
console.log('done returns same primitive:', applied.getState_PrimitiveId() === pin.getState_PrimitiveId());
```

### getstate_noconnected

# ISCH\_PrimitivePin.getState\_NoConnected() method

Get the property state: whether there is a no-connect flag

## Signature

```typescript
function getState_NoConnected(): boolean | undefined;
```

## Returns

boolean \| undefined

Whether there is a no-connect flag

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'NC', 0, 10, null, 'None', 'Passive');

// 2. 从画布重新取引脚实例后读取非连接标识（新引脚默认 false）
const fresh = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());
const noConnected = fresh.getState_NoConnected();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('noConnected:', noConnected);
```

### getstate_otherproperty

# ISCH\_PrimitivePin.getState\_OtherProperty() method

Get the property state: other parameters

## Signature

```typescript
function getState_OtherProperty(): Record<string, string | number | boolean> | undefined;
```

## Returns

Record&lt;string, string \| number \| boolean&gt; \| undefined

Other parameters

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 10, null, 'None', 'IN');

// 2. 从画布重新取引脚实例后读取其它参数
const fresh = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());
const otherProperty = fresh.getState_OtherProperty();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('otherProperty:', otherProperty);
```

### getstate_pincolor

# ISCH\_PrimitivePin.getState\_PinColor() method

Get the property state: pin color

## Signature

```typescript
function getState_PinColor(): string | null;
```

## Returns

string \| null

Pin color

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚，指定颜色 #0000FF
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 10, '#0000FF', 'None', 'IN');

// 2. 读取引脚颜色
const pinColor = pin.getState_PinColor();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('pinColor:', pinColor);
```

### getstate_pinlength

# ISCH\_PrimitivePin.getState\_PinLength() method

Get the property state: pin length

## Signature

```typescript
function getState_PinLength(): number;
```

## Returns

number

Pin length

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚，引脚长度 20
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 20, null, 'None', 'IN');

// 2. 读取引脚长度
const pinLength = pin.getState_PinLength();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('pinLength:', pinLength);
```

### getstate_pinname

# ISCH\_PrimitivePin.getState\_PinName() method

Get the property state: pin name

## Signature

```typescript
function getState_PinName(): string;
```

## Returns

string

Pin name

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚，名称为 CLK
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 10, null, 'None', 'IN');

// 2. 读取引脚名称
const pinName = pin.getState_PinName();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('pinName:', pinName);
```

### getstate_pinnumber

# ISCH\_PrimitivePin.getState\_PinNumber() method

Get the property state: pin number

## Signature

```typescript
function getState_PinNumber(): string;
```

## Returns

string

Pin number

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚，编号为 1
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 10, null, 'None', 'IN');

// 2. 读取引脚编号
const pinNumber = pin.getState_PinNumber();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('pinNumber:', pinNumber);
```

### getstate_pinshape

# ISCH\_PrimitivePin.getState\_PinShape() method

Get the property state: pin shape

## Signature

```typescript
function getState_PinShape(): ESCH_PrimitivePinShape;
```

## Returns

[ESCH\_PrimitivePinShape](../enums/ESCH_PrimitivePinShape.md)

Pin shape

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚，形状为 Clock（时钟标记）
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 10, null, 'Clock', 'IN');

// 2. 读取引脚形状
const pinShape = pin.getState_PinShape();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('pinShape:', pinShape);
```

### getstate_pintype

# ISCH\_PrimitivePin.getState\_pinType() method

Get the property state: pin type

## Signature

```typescript
function getState_pinType(): ESCH_PrimitivePinType;
```

## Returns

[ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)

Pin type

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚，电气类型为 IN
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 10, null, 'None', 'IN');

// 2. 读取引脚电气类型（方法名小写 p 开头，签名如此）
const pinType = pin.getState_pinType();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('pinType:', pinType);
```

### getstate_primitiveid

# ISCH\_PrimitivePin.getState\_PrimitiveId() method

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
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 10, null, 'None', 'IN');

// 2. 读取图元 ID
const primitiveId = pin.getState_PrimitiveId();

// 3. 用该 ID 从画布重新取回引脚，验证 ID 有效
const refetched = await eda.sch_PrimitivePin.get(primitiveId);

// 4. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([primitiveId]);

console.log('primitiveId:', primitiveId);
console.log('refetched number:', refetched.getState_PinNumber());
```

### getstate_primitivetype

# ISCH\_PrimitivePin.getState\_PrimitiveType() method

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
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 10, null, 'None', 'IN');

// 2. 读取图元类型
const primitiveType = pin.getState_PrimitiveType();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('primitiveType:', primitiveType);
```

### getstate_rotation

# ISCH\_PrimitivePin.getState\_Rotation() method

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
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚，旋转 90 度（朝上）
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 90, 10, null, 'None', 'IN');

// 2. 读取旋转角度
const rotation = pin.getState_Rotation();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('rotation:', rotation);
```

### getstate_x

# ISCH\_PrimitivePin.getState\_X() method

Get the property state: X coordinate

## Signature

```typescript
function getState_X(): number;
```

## Returns

number

X coordinate

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚（X = 400，约 101.6mm）
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 10, null, 'None', 'IN');

// 2. 读取引脚坐标 X
const x = pin.getState_X();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('x:', x);
```

### getstate_y

# ISCH\_PrimitivePin.getState\_Y() method

Get the property state: Y coordinate

## Signature

```typescript
function getState_Y(): number;
```

## Returns

number

Y coordinate

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚（Y = 300，约 76.2mm）
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 10, null, 'None', 'IN');

// 2. 读取引脚坐标 Y
const y = pin.getState_Y();

// 3. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('y:', y);
```

### isasync

# ISCH\_PrimitivePin.isAsync() method

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
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 在符号画布上创建一个测试引脚（默认异步模式）
const pin = await eda.sch_PrimitivePin.create(400, 300, '1', 'CLK', 0, 10, null, 'None', 'IN');
const asyncByDefault = pin.isAsync();

// 2. 转同步后再查，模式变为 false
const syncPin = pin.toSync();
const afterToSync = syncPin.isAsync();

// 3. 再转回异步，模式恢复 true
const asyncAgain = syncPin.toAsync();
const afterToAsync = asyncAgain.isAsync();

// 4. 清理测试引脚（查询类需要清理）
await eda.sch_PrimitivePin.delete([pin.getState_PrimitiveId()]);

console.log('asyncByDefault:', asyncByDefault);
console.log('afterToSync:', afterToSync);
console.log('afterToAsync:', afterToAsync);
```

### reset

# ISCH\_PrimitivePin.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
function reset(): Promise<ISCH_PrimitivePin>;
```

## Returns

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)<!-- -->&gt;

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚，名称为 CLK
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');

// 3. 异步模式下把名称改成错误值
const asyncPin = pin.toAsync();
asyncPin.setState_PinName('WRONG_NAME');

// 4. reset() 丢弃未提交的修改
await asyncPin.reset();

// 5. 从画布重新取引脚，名称仍是原来的值（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('pinName after reset:', refetched.getState_PinName());
```

### setstate_noconnected

# ISCH\_PrimitivePin.setState\_NoConnected() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether there is a no-connect flag

## Signature

```typescript
function setState_NoConnected(noConnected: boolean): ISCH_PrimitivePin;
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

noConnected

</td><td>

boolean

</td><td>

Whether there is a no-connect flag

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚，默认无非连接标识
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'NC', 0, 10, null, 'None', 'Passive');
const before = pin.getState_NoConnected();

// 3. 切换异步模式，打上非连接标识后提交画布
const asyncPin = pin.toAsync();
asyncPin.setState_NoConnected(true);
await asyncPin.done();

// 4. 从画布重新取引脚，确认标识已更新（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('noConnected:', before, '→', refetched.getState_NoConnected());
```

### setstate_otherproperty

# ISCH\_PrimitivePin.setState\_OtherProperty() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: other parameters

## Signature

```typescript
function setState_OtherProperty(
	otherProperty: Record<string, string | number | boolean>,
): ISCH_PrimitivePin;
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

otherProperty

</td><td>

Record&lt;string, string \| number \| boolean&gt;

</td><td>

Other parameters

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const before = pin.getState_OtherProperty();

// 3. 切换异步模式，写入一个扩展键值后提交画布
const asyncPin = pin.toAsync();
asyncPin.setState_OtherProperty({ note: 'demo', level: 3 });
await asyncPin.done();

// 4. 从画布重新取引脚，查看其它参数（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('otherProperty:', before, '→', refetched.getState_OtherProperty());
```

### setstate_pincolor

# ISCH\_PrimitivePin.setState\_PinColor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: pin color

## Signature

```typescript
function setState_PinColor(pinColor: string | null): ISCH_PrimitivePin;
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

pinColor

</td><td>

string \| null

</td><td>

Pin color

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚，颜色 #0000FF
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, '#0000FF', 'None', 'IN');
const before = pin.getState_PinColor();

// 3. 切换异步模式，把颜色改成 #FF0000 后提交画布
const asyncPin = pin.toAsync();
asyncPin.setState_PinColor('#FF0000');
await asyncPin.done();

// 4. 从画布重新取引脚，确认颜色已更新（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('pinColor:', before, '→', refetched.getState_PinColor());
```

### setstate_pinlength

# ISCH\_PrimitivePin.setState\_PinLength() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: pin length

## Signature

```typescript
function setState_PinLength(pinLength: number): ISCH_PrimitivePin;
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

pinLength

</td><td>

number

</td><td>

Pin length

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚，引脚长度 10
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const before = pin.getState_PinLength();

// 3. 切换异步模式，把长度改成 20 后提交画布
const asyncPin = pin.toAsync();
asyncPin.setState_PinLength(20);
await asyncPin.done();

// 4. 从画布重新取引脚，确认长度已更新（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('pinLength:', before, '→', refetched.getState_PinLength());
```

### setstate_pinname

# ISCH\_PrimitivePin.setState\_PinName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: pin name

## Signature

```typescript
function setState_PinName(pinName: string): ISCH_PrimitivePin;
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

pinName

</td><td>

string

</td><td>

Pin name

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚，名称为 CLK
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const before = pin.getState_PinName();

// 3. 切换异步模式，把名称改成 SYS_CLK 后提交画布
const asyncPin = pin.toAsync();
asyncPin.setState_PinName('SYS_CLK');
await asyncPin.done();

// 4. 从画布重新取引脚，确认名称已更新（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('pinName:', before, '→', refetched.getState_PinName());
```

### setstate_pinnumber

# ISCH\_PrimitivePin.setState\_PinNumber() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: pin number

## Signature

```typescript
function setState_PinNumber(pinNumber: string): ISCH_PrimitivePin;
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

pinNumber

</td><td>

string

</td><td>

Pin number

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚，编号为 1
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const before = pin.getState_PinNumber();

// 3. 切换异步模式，把编号改成 A1 后提交画布
const asyncPin = pin.toAsync();
asyncPin.setState_PinNumber('A1');
await asyncPin.done();

// 4. 从画布重新取引脚，确认编号已更新（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('pinNumber:', before, '→', refetched.getState_PinNumber());
```

### setstate_pinshape

# ISCH\_PrimitivePin.setState\_PinShape() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: pin shape

## Signature

```typescript
function setState_PinShape(pinShape: ESCH_PrimitivePinShape): ISCH_PrimitivePin;
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

pinShape

</td><td>

[ESCH\_PrimitivePinShape](../enums/ESCH_PrimitivePinShape.md)

</td><td>

Pin shape

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚，形状 None
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const before = pin.getState_PinShape();

// 3. 切换异步模式，把形状改成 Clock（时钟标记）后提交画布
const asyncPin = pin.toAsync();
asyncPin.setState_PinShape('Clock');
await asyncPin.done();

// 4. 从画布重新取引脚，确认形状已更新（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('pinShape:', before, '→', refetched.getState_PinShape());
```

### setstate_pintype

# ISCH\_PrimitivePin.setState\_PinType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: pin type

## Signature

```typescript
function setState_PinType(pinType: ESCH_PrimitivePinType): ISCH_PrimitivePin;
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

pinType

</td><td>

[ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)

</td><td>

Pin type

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚，电气类型 IN
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const before = pin.getState_pinType();

// 3. 切换异步模式，把类型改成 OUT 后提交画布
const asyncPin = pin.toAsync();
asyncPin.setState_PinType('OUT');
await asyncPin.done();

// 4. 从画布重新取引脚，确认类型已更新（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('pinType:', before, '→', refetched.getState_pinType());
```

### setstate_rotation

# ISCH\_PrimitivePin.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: rotation angle

## Signature

```typescript
function setState_Rotation(rotation: number): ISCH_PrimitivePin;
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

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚，旋转 0 度
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const before = pin.getState_Rotation();

// 3. 切换异步模式，把旋转角度改成 90（朝上）后提交画布
const asyncPin = pin.toAsync();
asyncPin.setState_Rotation(90);
await asyncPin.done();

// 4. 从画布重新取引脚，确认角度已更新（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('rotation:', before, '→', refetched.getState_Rotation());
```

### setstate_x

# ISCH\_PrimitivePin.setState\_X() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: X coordinate

## Signature

```typescript
function setState_X(x: number): ISCH_PrimitivePin;
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

x

</td><td>

number

</td><td>

X coordinate

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const before = pin.getState_X();

// 3. 切换异步模式，右移 200（约 50.8mm）后提交画布
const asyncPin = pin.toAsync();
asyncPin.setState_X(before + 200);
await asyncPin.done();

// 4. 从画布重新取引脚，确认坐标已更新（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('x:', before, '→', refetched.getState_X());
```

### setstate_y

# ISCH\_PrimitivePin.setState\_Y() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: Y coordinate

## Signature

```typescript
function setState_Y(y: number): ISCH_PrimitivePin;
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

y

</td><td>

number

</td><td>

Y coordinate

</td></tr>
</tbody></table>

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const before = pin.getState_Y();

// 3. 切换异步模式，上移 200（约 50.8mm）后提交画布
const asyncPin = pin.toAsync();
asyncPin.setState_Y(before + 200);
await asyncPin.done();

// 4. 从画布重新取引脚，确认坐标已更新（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('y:', before, '→', refetched.getState_Y());
```

### toasync

# ISCH\_PrimitivePin.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
function toAsync(): ISCH_PrimitivePin;
```

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚，并转入异步模式
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const asyncPin = pin.toAsync();
const isAsyncNow = asyncPin.isAsync();

// 3. 异步模式下修改编号，done() 提交画布
asyncPin.setState_PinNumber('B2');
await asyncPin.done();

// 4. 从画布重新取引脚，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('isAsync after toAsync:', isAsyncNow);
console.log('pinNumber:', refetched.getState_PinNumber());
```

### tosync

# ISCH\_PrimitivePin.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
function toSync(): ISCH_PrimitivePin;
```

## Returns

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

Pin primitive object

## Example

```javascript
// 0. 确保当前文档是符号编辑器：优先复用测试符号，没有则新建后打开
const libUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const found = await eda.lib_Symbol.search('嘉立创示例_Pin测试符号', libUuid);
const symUuid = found[0] ? found[0].uuid : await eda.lib_Symbol.create(libUuid, '嘉立创示例_Pin测试符号');
await eda.lib_Symbol.openInEditor(symUuid, libUuid);

// 1. 生成本次运行专用的坐标，避免与之前保留的测试引脚重合
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 在符号画布上创建一个测试引脚，并转入同步模式
const pin = await eda.sch_PrimitivePin.create(x, y, '1', 'CLK', 0, 10, null, 'None', 'IN');
const syncPin = pin.toSync();
const isAsyncNow = syncPin.isAsync();

// 3. 同步模式下改编号，立即生效，无需 done()
syncPin.setState_PinNumber('C3');

// 4. 从画布重新取引脚，确认修改已生效（保留现场供观察）
const refetched = await eda.sch_PrimitivePin.get(pin.getState_PrimitiveId());

console.log('isAsync after toSync:', isAsyncNow);
console.log('pinNumber:', refetched.getState_PinNumber());
```
