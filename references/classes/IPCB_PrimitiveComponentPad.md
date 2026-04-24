# IPCB\_PrimitiveComponentPad class

器件焊盘图元

## Signature

```typescript
declare class IPCB_PrimitiveComponentPad extends IPCB_PrimitivePad 
```
**Extends:** [IPCB\_PrimitivePad](./IPCB_PrimitivePad.md)

## Remarks

器件焊盘图元是一个特殊的图元，它指的是在 PCB 画布上关联到封装的焊盘

你只能通过 [器件类的 getAllPinsByPrimitiveId 方法](./PCB_PrimitiveComponent.md) 或 [器件图元的 getAllPads 方法](./IPCB_PrimitiveComponent.md) 获取到器件焊盘图元


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

[primitiveType](./IPCB_PrimitiveComponentPad.md)


</td><td>

`protected`

`readonly`


</td><td>

[EPCB\_PrimitiveType.COMPONENT\_PAD](../enums/EPCB_PrimitiveType.md)


</td><td>

图元类型


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

[done()](./IPCB_PrimitiveComponentPad.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getConnectedPrimitives(onlyCentreConnection)](./IPCB_PrimitiveComponentPad.md)


</td><td>


</td><td>

**_(BETA)_** 获取连接的图元


</td></tr>
<tr><td>

[getConnectedPrimitives(onlyCentreConnection)](./IPCB_PrimitiveComponentPad.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[getState\_ParentComponentPrimitiveId()](./IPCB_PrimitiveComponentPad.md)


</td><td>


</td><td>

获取属性状态：父器件图元 ID


</td></tr>
<tr><td>

[setState\_ParentComponentPrimitiveId()](./IPCB_PrimitiveComponentPad.md)


</td><td>


</td><td>

设置属性状态：父器件图元 ID


</td></tr>
</tbody></table>

---

## 属性详情

### primitivetype

# IPCB\_PrimitiveComponentPad.primitiveType property

图元类型

## Signature

```typescript
protected readonly primitiveType: EPCB_PrimitiveType.COMPONENT_PAD;
```


---

## 方法详情

### done

# IPCB\_PrimitiveComponentPad.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<IPCB_PrimitiveComponentPad>;
```


## Returns

Promise&lt;[IPCB\_PrimitiveComponentPad](./IPCB_PrimitiveComponentPad.md)<!-- -->&gt;

器件焊盘图元对象

### getconnectedprimitives

# IPCB\_PrimitiveComponentPad.getConnectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取连接的图元

## Signature

```typescript
getConnectedPrimitives(onlyCentreConnection: true): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;
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

onlyCentreConnection


</td><td>

true


</td><td>

是否仅中心连接，如若为 `true` 则仅获取中心连接的图元（直线、圆弧线、过孔），如若为 `false` 则获取所有接触的图元


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md)<!-- -->&gt;&gt;

## Remarks

本接口可以获取到与焊盘直接接触的图元

### getconnectedprimitives_1

# IPCB\_PrimitiveComponentPad.getConnectedPrimitives() method

## Signature

```typescript
getConnectedPrimitives(onlyCentreConnection: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia | IPCB_PrimitivePolyline | IPCB_PrimitiveFill>>;
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

onlyCentreConnection


</td><td>

false


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./IPCB_PrimitiveLine.md) \| [IPCB\_PrimitiveArc](./IPCB_PrimitiveArc.md) \| [IPCB\_PrimitiveVia](./IPCB_PrimitiveVia.md) \| [IPCB\_PrimitivePolyline](./IPCB_PrimitivePolyline.md) \| [IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md)<!-- -->&gt;&gt;

### getstate_parentcomponentprimitiveid

# IPCB\_PrimitiveComponentPad.getState\_ParentComponentPrimitiveId() method

获取属性状态：父器件图元 ID

## Signature

```typescript
getState_ParentComponentPrimitiveId(): string;
```


## Returns

string

父器件图元 ID

### setstate_parentcomponentprimitiveid

# IPCB\_PrimitiveComponentPad.setState\_ParentComponentPrimitiveId() method

设置属性状态：父器件图元 ID

## Signature

```typescript
setState_ParentComponentPrimitiveId(): IPCB_PrimitiveComponentPad;
```


## Returns

[IPCB\_PrimitiveComponentPad](./IPCB_PrimitiveComponentPad.md)

器件焊盘图元对象

## Remarks

本器件焊盘图元属性不支持修改，本接口调用将不会有任何效果
