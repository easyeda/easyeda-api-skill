# ISCH\_PrimitiveComponent class

器件图元

## Signature

```typescript
declare class ISCH_PrimitiveComponent implements ISCH_Primitive 
```
**Implements:** [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

## Remarks


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

[async](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

boolean


</td><td>

异步


</td></tr>
<tr><td>

[designator?](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

string


</td><td>

_(Optional)_ Component 属性：位号


</td></tr>
<tr><td>

[mirror](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

boolean


</td><td>

是否镜像


</td></tr>
<tr><td>

[name?](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

string


</td><td>

_(Optional)_ Component 属性：名称


</td></tr>
<tr><td>

[otherProperty?](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

\{ \[key: string\]: string \| number \| boolean; \}


</td><td>

_(Optional)_ 其它参数


</td></tr>
<tr><td>

[primitiveId?](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

string


</td><td>

_(Optional)_ 图元 ID


</td></tr>
<tr><td>

[rotation](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

number


</td><td>

旋转角度


</td></tr>
<tr><td>

[x](./ISCH_PrimitiveComponent.md)


</td><td>

`protected`


</td><td>

number


</td><td>

坐标 X


</td></tr>
<tr><td>

[y](./ISCH_PrimitiveComponent.md)


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

[done()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_AddIntoBom()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：是否加入 BOM


</td></tr>
<tr><td>

[getState\_AddIntoPcb()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：是否转到 PCB


</td></tr>
<tr><td>

[getState\_Component()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：关联库器件


</td></tr>
<tr><td>

[getState\_ComponentType()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：器件类型


</td></tr>
<tr><td>

[getState\_Designator()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：位号


</td></tr>
<tr><td>

[getState\_Footprint()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：关联库封装


</td></tr>
<tr><td>

[getState\_Manufacturer()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：制造商


</td></tr>
<tr><td>

[getState\_ManufacturerId()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：制造商编号


</td></tr>
<tr><td>

[getState\_Mirror()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：是否镜像


</td></tr>
<tr><td>

[getState\_Name()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：名称


</td></tr>
<tr><td>

[getState\_Net()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：网络名称


</td></tr>
<tr><td>

[getState\_OtherProperty()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：其它参数


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_Rotation()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：旋转角度


</td></tr>
<tr><td>

[getState\_SubPartName()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：子部件名称


</td></tr>
<tr><td>

[getState\_Supplier()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：供应商


</td></tr>
<tr><td>

[getState\_SupplierId()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：供应商编号


</td></tr>
<tr><td>

[getState\_Symbol()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：关联库符号


</td></tr>
<tr><td>

[getState\_UniqueId()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：唯一 ID


</td></tr>
<tr><td>

[getState\_X()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：坐标 X


</td></tr>
<tr><td>

[getState\_Y()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

获取属性状态：坐标 Y


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_AddIntoBom(addIntoBom)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否加入 BOM


</td></tr>
<tr><td>

[setState\_AddIntoPcb(addIntoPcb)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否转到 PCB


</td></tr>
<tr><td>

[setState\_Designator(designator)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：位号


</td></tr>
<tr><td>

[setState\_Manufacturer(manufacturer)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：制造商


</td></tr>
<tr><td>

[setState\_ManufacturerId(manufacturerId)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：制造商编号


</td></tr>
<tr><td>

[setState\_Mirror(mirror)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否镜像


</td></tr>
<tr><td>

[setState\_Name(name)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：名称


</td></tr>
<tr><td>

[setState\_Net(net)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：网络名称


</td></tr>
<tr><td>

[setState\_OtherProperty(otherProperty)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：其它参数


</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：旋转角度


</td></tr>
<tr><td>

[setState\_Supplier(supplier)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：供应商


</td></tr>
<tr><td>

[setState\_SupplierId(supplierId)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：供应商编号


</td></tr>
<tr><td>

[setState\_UniqueId(uniqueId)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：唯一 ID


</td></tr>
<tr><td>

[setState\_X(x)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标 X


</td></tr>
<tr><td>

[setState\_Y(y)](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标 Y


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveComponent.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 属性详情

### async

# ISCH\_PrimitiveComponent.async property

异步

## Signature

```typescript
protected async: boolean;
```

### designator

# ISCH\_PrimitiveComponent.designator property

Component 属性：位号

## Signature

```typescript
protected designator?: string;
```

### mirror

# ISCH\_PrimitiveComponent.mirror property

是否镜像

## Signature

```typescript
protected mirror: boolean;
```

### name

# ISCH\_PrimitiveComponent.name property

Component 属性：名称

## Signature

```typescript
protected name?: string;
```

### otherproperty

# ISCH\_PrimitiveComponent.otherProperty property

其它参数

## Signature

```typescript
protected otherProperty?: {
        [key: string]: string | number | boolean;
    };
```

### primitiveid

# ISCH\_PrimitiveComponent.primitiveId property

图元 ID

## Signature

```typescript
protected primitiveId?: string;
```

### rotation

# ISCH\_PrimitiveComponent.rotation property

旋转角度

## Signature

```typescript
protected rotation: number;
```

### x

# ISCH\_PrimitiveComponent.x property

坐标 X

## Signature

```typescript
protected x: number;
```

### y

# ISCH\_PrimitiveComponent.y property

坐标 Y

## Signature

```typescript
protected y: number;
```


---

## 方法详情

### done

# ISCH\_PrimitiveComponent.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<ISCH_PrimitiveComponent>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)<!-- -->&gt;

器件图元对象

### getstate_addintobom

# ISCH\_PrimitiveComponent.getState\_AddIntoBom() method

获取属性状态：是否加入 BOM

## Signature

```typescript
getState_AddIntoBom(): boolean | undefined;
```


## Returns

boolean \| undefined

是否加入 BOM

### getstate_addintopcb

# ISCH\_PrimitiveComponent.getState\_AddIntoPcb() method

获取属性状态：是否转到 PCB

## Signature

```typescript
getState_AddIntoPcb(): boolean | undefined;
```


## Returns

boolean \| undefined

是否转到 PCB

### getstate_component

# ISCH\_PrimitiveComponent.getState\_Component() method

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

### getstate_componenttype

# ISCH\_PrimitiveComponent.getState\_ComponentType() method

获取属性状态：器件类型

## Signature

```typescript
getState_ComponentType(): ESCH_PrimitiveComponentType;
```


## Returns

ESCH\_PrimitiveComponentType

器件类型

### getstate_designator

# ISCH\_PrimitiveComponent.getState\_Designator() method

获取属性状态：位号

## Signature

```typescript
getState_Designator(): string | undefined;
```


## Returns

string \| undefined

位号

### getstate_footprint

# ISCH\_PrimitiveComponent.getState\_Footprint() method

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

### getstate_manufacturer

# ISCH\_PrimitiveComponent.getState\_Manufacturer() method

获取属性状态：制造商

## Signature

```typescript
getState_Manufacturer(): string | undefined;
```


## Returns

string \| undefined

制造商

### getstate_manufacturerid

# ISCH\_PrimitiveComponent.getState\_ManufacturerId() method

获取属性状态：制造商编号

## Signature

```typescript
getState_ManufacturerId(): string | undefined;
```


## Returns

string \| undefined

制造商编号

### getstate_mirror

# ISCH\_PrimitiveComponent.getState\_Mirror() method

获取属性状态：是否镜像

## Signature

```typescript
getState_Mirror(): boolean;
```


## Returns

boolean

是否镜像

### getstate_name

# ISCH\_PrimitiveComponent.getState\_Name() method

获取属性状态：名称

## Signature

```typescript
getState_Name(): string | undefined;
```


## Returns

string \| undefined

名称

### getstate_net

# ISCH\_PrimitiveComponent.getState\_Net() method

获取属性状态：网络名称

## Signature

```typescript
getState_Net(): string | undefined;
```


## Returns

string \| undefined

网络名称

### getstate_otherproperty

# ISCH\_PrimitiveComponent.getState\_OtherProperty() method

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

### getstate_primitiveid

# ISCH\_PrimitiveComponent.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivetype

# ISCH\_PrimitiveComponent.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): ESCH_PrimitiveType;
```


## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

图元类型

### getstate_rotation

# ISCH\_PrimitiveComponent.getState\_Rotation() method

获取属性状态：旋转角度

## Signature

```typescript
getState_Rotation(): number;
```


## Returns

number

旋转角度

### getstate_subpartname

# ISCH\_PrimitiveComponent.getState\_SubPartName() method

获取属性状态：子部件名称

## Signature

```typescript
getState_SubPartName(): string | undefined;
```


## Returns

string \| undefined

子部件名称

### getstate_supplier

# ISCH\_PrimitiveComponent.getState\_Supplier() method

获取属性状态：供应商

## Signature

```typescript
getState_Supplier(): string | undefined;
```


## Returns

string \| undefined

供应商

### getstate_supplierid

# ISCH\_PrimitiveComponent.getState\_SupplierId() method

获取属性状态：供应商编号

## Signature

```typescript
getState_SupplierId(): string | undefined;
```


## Returns

string \| undefined

供应商编号

### getstate_symbol

# ISCH\_PrimitiveComponent.getState\_Symbol() method

获取属性状态：关联库符号

## Signature

```typescript
getState_Symbol(): {
        libraryUuid: string;
        uuid: string;
        name?: string;
    } | undefined;
```


## Returns

{ libraryUuid: string; uuid: string; name?: string; } \| undefined

关联库符号

### getstate_uniqueid

# ISCH\_PrimitiveComponent.getState\_UniqueId() method

获取属性状态：唯一 ID

## Signature

```typescript
getState_UniqueId(): string | undefined;
```


## Returns

string \| undefined

唯一 ID

### getstate_x

# ISCH\_PrimitiveComponent.getState\_X() method

获取属性状态：坐标 X

## Signature

```typescript
getState_X(): number;
```


## Returns

number

坐标 X

### getstate_y

# ISCH\_PrimitiveComponent.getState\_Y() method

获取属性状态：坐标 Y

## Signature

```typescript
getState_Y(): number;
```


## Returns

number

坐标 Y

### isasync

# ISCH\_PrimitiveComponent.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# ISCH\_PrimitiveComponent.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<ISCH_PrimitiveComponent>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)<!-- -->&gt;

器件图元对象

### setstate_addintobom

# ISCH\_PrimitiveComponent.setState\_AddIntoBom() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否加入 BOM

## Signature

```typescript
setState_AddIntoBom(addIntoBom: boolean | undefined): ISCH_PrimitiveComponent;
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

boolean \| undefined


</td><td>

是否加入 BOM


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_addintopcb

# ISCH\_PrimitiveComponent.setState\_AddIntoPcb() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否转到 PCB

## Signature

```typescript
setState_AddIntoPcb(addIntoPcb: boolean | undefined): ISCH_PrimitiveComponent;
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

addIntoPcb


</td><td>

boolean \| undefined


</td><td>

是否转到 PCB


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_designator

# ISCH\_PrimitiveComponent.setState\_Designator() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：位号

## Signature

```typescript
setState_Designator(designator: string | undefined): ISCH_PrimitiveComponent;
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

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_manufacturer

# ISCH\_PrimitiveComponent.setState\_Manufacturer() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：制造商

## Signature

```typescript
setState_Manufacturer(manufacturer: string | undefined): ISCH_PrimitiveComponent;
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

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_manufacturerid

# ISCH\_PrimitiveComponent.setState\_ManufacturerId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：制造商编号

## Signature

```typescript
setState_ManufacturerId(manufacturerId: string | undefined): ISCH_PrimitiveComponent;
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

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_mirror

# ISCH\_PrimitiveComponent.setState\_Mirror() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否镜像

## Signature

```typescript
setState_Mirror(mirror: boolean): ISCH_PrimitiveComponent;
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

是否镜像


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_name

# ISCH\_PrimitiveComponent.setState\_Name() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：名称

## Signature

```typescript
setState_Name(name: string | undefined): ISCH_PrimitiveComponent;
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

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_net

# ISCH\_PrimitiveComponent.setState\_Net() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：网络名称

## Signature

```typescript
setState_Net(net: string | undefined): ISCH_PrimitiveComponent;
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

string \| undefined


</td><td>

网络名称


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_otherproperty

# ISCH\_PrimitiveComponent.setState\_OtherProperty() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：其它参数

## Signature

```typescript
setState_OtherProperty(otherProperty: {
        [key: string]: string | number | boolean;
    }): ISCH_PrimitiveComponent;
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

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_rotation

# ISCH\_PrimitiveComponent.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：旋转角度

## Signature

```typescript
setState_Rotation(rotation: number): ISCH_PrimitiveComponent;
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

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_supplier

# ISCH\_PrimitiveComponent.setState\_Supplier() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：供应商

## Signature

```typescript
setState_Supplier(supplier: string | undefined): ISCH_PrimitiveComponent;
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

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_supplierid

# ISCH\_PrimitiveComponent.setState\_SupplierId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：供应商编号

## Signature

```typescript
setState_SupplierId(supplierId: string | undefined): ISCH_PrimitiveComponent;
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

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_uniqueid

# ISCH\_PrimitiveComponent.setState\_UniqueId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：唯一 ID

## Signature

```typescript
setState_UniqueId(uniqueId: string | undefined): ISCH_PrimitiveComponent;
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

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_x

# ISCH\_PrimitiveComponent.setState\_X() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：坐标 X

## Signature

```typescript
setState_X(x: number): ISCH_PrimitiveComponent;
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

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### setstate_y

# ISCH\_PrimitiveComponent.setState\_Y() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：坐标 Y

## Signature

```typescript
setState_Y(y: number): ISCH_PrimitiveComponent;
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

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

器件图元对象

### toasync

# ISCH\_PrimitiveComponent.toAsync() method

将图元转换为异步图元

## Signature

```typescript
toAsync(): ISCH_PrimitiveComponent;
```


## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

圆弧线图元对象

### tosync

# ISCH\_PrimitiveComponent.toSync() method

将图元转换为同步图元

## Signature

```typescript
toSync(): ISCH_PrimitiveComponent;
```


## Returns

[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

圆弧线图元对象
