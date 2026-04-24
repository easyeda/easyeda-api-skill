# IPCB\_PrimitiveComponent class

器件图元

## Signature

```typescript
declare class IPCB_PrimitiveComponent implements IPCB_Primitive 
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

[done()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getAllPins()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 获取器件关联的所有焊盘


</td></tr>
<tr><td>

[getState\_AddIntoBom()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：是否加入 BOM


</td></tr>
<tr><td>

[getState\_Component()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：关联库器件


</td></tr>
<tr><td>

[getState\_Designator()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：位号


</td></tr>
<tr><td>

[getState\_Footprint()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：关联库封装


</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：层


</td></tr>
<tr><td>

[getState\_Manufacturer()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：制造商


</td></tr>
<tr><td>

[getState\_ManufacturerId()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：制造商编号


</td></tr>
<tr><td>

[getState\_Model3D()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：关联库 3D 模型


</td></tr>
<tr><td>

[getState\_Name()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：名称


</td></tr>
<tr><td>

[getState\_OtherProperty()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：其它参数


</td></tr>
<tr><td>

[getState\_Pads()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：焊盘


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：是否锁定


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_Rotation()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：旋转角度


</td></tr>
<tr><td>

[getState\_Supplier()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：供应商


</td></tr>
<tr><td>

[getState\_SupplierId()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：供应商编号


</td></tr>
<tr><td>

[getState\_UniqueId()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：唯一 ID


</td></tr>
<tr><td>

[getState\_X()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：坐标 X


</td></tr>
<tr><td>

[getState\_Y()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：坐标 Y


</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_AddIntoBom(addIntoBom)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否加入 BOM


</td></tr>
<tr><td>

[setState\_Designator(designator)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：位号


</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：层


</td></tr>
<tr><td>

[setState\_Manufacturer(manufacturer)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：制造商


</td></tr>
<tr><td>

[setState\_ManufacturerId(manufacturerId)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：制造商编号


</td></tr>
<tr><td>

[setState\_Name(name)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：名称


</td></tr>
<tr><td>

[setState\_OtherProperty(otherProperty)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：其它参数


</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否锁定


</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：旋转角度


</td></tr>
<tr><td>

[setState\_Supplier(supplier)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：供应商


</td></tr>
<tr><td>

[setState\_SupplierId(supplierId)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：供应商编号


</td></tr>
<tr><td>

[setState\_UniqueId(uniqueId)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：唯一 ID


</td></tr>
<tr><td>

[setState\_X(x)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标 X


</td></tr>
<tr><td>

[setState\_Y(y)](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标 Y


</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveComponent.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveComponent.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<IPCB_PrimitiveComponent>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)<!-- -->&gt;

器件图元对象

### getallpins

# IPCB\_PrimitiveComponent.getAllPins() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取器件关联的所有焊盘

## Signature

```typescript
getAllPins(): Promise<Array<IPCB_PrimitiveComponentPad>>;
```


## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveComponentPad](./IPCB_PrimitiveComponentPad.md)<!-- -->&gt;&gt;

器件焊盘图元数组

### getstate_addintobom

# IPCB\_PrimitiveComponent.getState\_AddIntoBom() method

获取属性状态：是否加入 BOM

## Signature

```typescript
getState_AddIntoBom(): boolean;
```


## Returns

boolean

是否加入 BOM

### getstate_component

# IPCB\_PrimitiveComponent.getState\_Component() method

获取属性状态：关联库器件

## Signature

```typescript
getState_Component(): {
        libraryUuid: string;
        uuid: string;
        name?: string;
    } | undefined;
```


## Returns

{ libraryUuid: string; uuid: string; name?: string; } \| undefined

关联库器件

### getstate_designator

# IPCB\_PrimitiveComponent.getState\_Designator() method

获取属性状态：位号

## Signature

```typescript
getState_Designator(): string | undefined;
```


## Returns

string \| undefined

位号

### getstate_footprint

# IPCB\_PrimitiveComponent.getState\_Footprint() method

获取属性状态：关联库封装

## Signature

```typescript
getState_Footprint(): {
        libraryUuid: string;
        uuid: string;
        name?: string;
    } | undefined;
```


## Returns

{ libraryUuid: string; uuid: string; name?: string; } \| undefined

关联库封装

### getstate_layer

# IPCB\_PrimitiveComponent.getState\_Layer() method

获取属性状态：层

## Signature

```typescript
getState_Layer(): TPCB_LayersOfComponent;
```


## Returns

[TPCB\_LayersOfComponent](../types/TPCB_LayersOfComponent.md)

层

### getstate_manufacturer

# IPCB\_PrimitiveComponent.getState\_Manufacturer() method

获取属性状态：制造商

## Signature

```typescript
getState_Manufacturer(): string | undefined;
```


## Returns

string \| undefined

制造商

### getstate_manufacturerid

# IPCB\_PrimitiveComponent.getState\_ManufacturerId() method

获取属性状态：制造商编号

## Signature

```typescript
getState_ManufacturerId(): string | undefined;
```


## Returns

string \| undefined

制造商编号

### getstate_model3d

# IPCB\_PrimitiveComponent.getState\_Model3D() method

获取属性状态：关联库 3D 模型

## Signature

```typescript
getState_Model3D(): {
        libraryUuid: string;
        uuid: string;
        name?: string;
    } | undefined;
```


## Returns

{ libraryUuid: string; uuid: string; name?: string; } \| undefined

关联库 3D 模型

### getstate_name

# IPCB\_PrimitiveComponent.getState\_Name() method

获取属性状态：名称

## Signature

```typescript
getState_Name(): string | undefined;
```


## Returns

string \| undefined

名称

### getstate_otherproperty

# IPCB\_PrimitiveComponent.getState\_OtherProperty() method

获取属性状态：其它参数

## Signature

```typescript
getState_OtherProperty(): {
        [key: string]: string | number | boolean;
    } | undefined;
```


## Returns

{ \[key: string\]: string \| number \| boolean; } \| undefined

其它参数

### getstate_pads

# IPCB\_PrimitiveComponent.getState\_Pads() method

获取属性状态：焊盘

## Signature

```typescript
getState_Pads(): Array<{
        primitiveId: string;
        net: string;
        padNumber: string;
    }> | undefined;
```


## Returns

Array&lt;{ primitiveId: string; net: string; padNumber: string; }&gt; \| undefined

焊盘

### getstate_primitiveid

# IPCB\_PrimitiveComponent.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveComponent.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## Signature

```typescript
getState_PrimitiveLock(): boolean;
```


## Returns

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveComponent.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## Returns

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### getstate_rotation

# IPCB\_PrimitiveComponent.getState\_Rotation() method

获取属性状态：旋转角度

## Signature

```typescript
getState_Rotation(): number;
```


## Returns

number

旋转角度

### getstate_supplier

# IPCB\_PrimitiveComponent.getState\_Supplier() method

获取属性状态：供应商

## Signature

```typescript
getState_Supplier(): string | undefined;
```


## Returns

string \| undefined

供应商

### getstate_supplierid

# IPCB\_PrimitiveComponent.getState\_SupplierId() method

获取属性状态：供应商编号

## Signature

```typescript
getState_SupplierId(): string | undefined;
```


## Returns

string \| undefined

供应商编号

### getstate_uniqueid

# IPCB\_PrimitiveComponent.getState\_UniqueId() method

获取属性状态：唯一 ID

## Signature

```typescript
getState_UniqueId(): string | undefined;
```


## Returns

string \| undefined

唯一 ID

### getstate_x

# IPCB\_PrimitiveComponent.getState\_X() method

获取属性状态：坐标 X

## Signature

```typescript
getState_X(): number;
```


## Returns

number

坐标 X

### getstate_y

# IPCB\_PrimitiveComponent.getState\_Y() method

获取属性状态：坐标 Y

## Signature

```typescript
getState_Y(): number;
```


## Returns

number

坐标 Y

### isasync

# IPCB\_PrimitiveComponent.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveComponent.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<IPCB_PrimitiveComponent>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)<!-- -->&gt;

器件图元对象

### setstate_addintobom

# IPCB\_PrimitiveComponent.setState\_AddIntoBom() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否加入 BOM

## Signature

```typescript
setState_AddIntoBom(addIntoBom: boolean): IPCB_PrimitiveComponent;
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

addIntoBom


</td><td>

boolean


</td><td>

是否加入 BOM


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_designator

# IPCB\_PrimitiveComponent.setState\_Designator() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：位号

## Signature

```typescript
setState_Designator(designator: string | undefined): IPCB_PrimitiveComponent;
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

designator


</td><td>

string \| undefined


</td><td>

位号


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_layer

# IPCB\_PrimitiveComponent.setState\_Layer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：层

## Signature

```typescript
setState_Layer(layer: TPCB_LayersOfComponent): IPCB_PrimitiveComponent;
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

[TPCB\_LayersOfComponent](../types/TPCB_LayersOfComponent.md)


</td><td>

层


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_manufacturer

# IPCB\_PrimitiveComponent.setState\_Manufacturer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：制造商

## Signature

```typescript
setState_Manufacturer(manufacturer: string | undefined): IPCB_PrimitiveComponent;
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

manufacturer


</td><td>

string \| undefined


</td><td>

制造商


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_manufacturerid

# IPCB\_PrimitiveComponent.setState\_ManufacturerId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：制造商编号

## Signature

```typescript
setState_ManufacturerId(manufacturerId: string | undefined): IPCB_PrimitiveComponent;
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

manufacturerId


</td><td>

string \| undefined


</td><td>

制造商编号


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_name

# IPCB\_PrimitiveComponent.setState\_Name() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：名称

## Signature

```typescript
setState_Name(name: string | undefined): IPCB_PrimitiveComponent;
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

name


</td><td>

string \| undefined


</td><td>

名称


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_otherproperty

# IPCB\_PrimitiveComponent.setState\_OtherProperty() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：其它参数

## Signature

```typescript
setState_OtherProperty(otherProperty: {
        [key: string]: string | number | boolean;
    }): IPCB_PrimitiveComponent;
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

\{ \[key: string\]: string \| number \| boolean; \}


</td><td>

其它参数


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_primitivelock

# IPCB\_PrimitiveComponent.setState\_PrimitiveLock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否锁定

## Signature

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveComponent;
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

是否锁定


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_rotation

# IPCB\_PrimitiveComponent.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：旋转角度

## Signature

```typescript
setState_Rotation(rotation: number): IPCB_PrimitiveComponent;
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

旋转角度


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_supplier

# IPCB\_PrimitiveComponent.setState\_Supplier() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：供应商

## Signature

```typescript
setState_Supplier(supplier: string | undefined): IPCB_PrimitiveComponent;
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

supplier


</td><td>

string \| undefined


</td><td>

供应商


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_supplierid

# IPCB\_PrimitiveComponent.setState\_SupplierId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：供应商编号

## Signature

```typescript
setState_SupplierId(supplierId: string | undefined): IPCB_PrimitiveComponent;
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

supplierId


</td><td>

string \| undefined


</td><td>

供应商编号


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_uniqueid

# IPCB\_PrimitiveComponent.setState\_UniqueId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：唯一 ID

## Signature

```typescript
setState_UniqueId(uniqueId: string | undefined): IPCB_PrimitiveComponent;
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

uniqueId


</td><td>

string \| undefined


</td><td>

唯一 ID


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_x

# IPCB\_PrimitiveComponent.setState\_X() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：坐标 X

## Signature

```typescript
setState_X(x: number): IPCB_PrimitiveComponent;
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

坐标 X


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### setstate_y

# IPCB\_PrimitiveComponent.setState\_Y() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：坐标 Y

## Signature

```typescript
setState_Y(y: number): IPCB_PrimitiveComponent;
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

坐标 Y


</td></tr>
</tbody></table>



## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### toasync

# IPCB\_PrimitiveComponent.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): IPCB_PrimitiveComponent;
```


## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象

### tosync

# IPCB\_PrimitiveComponent.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): IPCB_PrimitiveComponent;
```


## Returns

[IPCB\_PrimitiveComponent](./IPCB_PrimitiveComponent.md)

器件图元对象
