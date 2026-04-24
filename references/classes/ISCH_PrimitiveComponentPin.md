# ISCH\_PrimitiveComponentPin class

器件引脚图元

## Signature

```typescript
declare class ISCH_PrimitiveComponentPin extends ISCH_PrimitivePin 
```
**Extends:** [ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

## Remarks

器件引脚图元是一个特殊的图元，它指的是在原理图画布上关联到符号的引脚

器件引脚图元仅可更改 `pinNumber`<!-- -->、`noConnected` 属性，其它所有属性均为只读， 并且你只能通过 [器件类的 getAllPinsByPrimitiveId 方法](./SCH_PrimitiveComponent.md) 或  获取到器件引脚图元


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

[primitiveType](./ISCH_PrimitiveComponentPin.md)


</td><td>

`protected`

`readonly`


</td><td>

[ESCH\_PrimitiveType.COMPONENT\_PIN](../enums/ESCH_PrimitiveType.md)


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

[getState\_NoConnected()](./ISCH_PrimitiveComponentPin.md)


</td><td>


</td><td>

获取属性状态：是否存在非连接标识


</td></tr>
<tr><td>

[setState\_NoConnected(noConnected)](./ISCH_PrimitiveComponentPin.md)


</td><td>


</td><td>

设置属性状态：是否存在非连接标识


</td></tr>
</tbody></table>

---

## 属性详情

### primitivetype

# ISCH\_PrimitiveComponentPin.primitiveType property

图元类型

## Signature

```typescript
protected readonly primitiveType: ESCH_PrimitiveType.COMPONENT_PIN;
```


---

## 方法详情

### getstate_noconnected

# ISCH\_PrimitiveComponentPin.getState\_NoConnected() method

获取属性状态：是否存在非连接标识

## Signature

```typescript
getState_NoConnected(): boolean;
```


## Returns

boolean

是否存在非连接标识

### setstate_noconnected

# ISCH\_PrimitiveComponentPin.setState\_NoConnected() method

设置属性状态：是否存在非连接标识

## Signature

```typescript
setState_NoConnected(noConnected: boolean): ISCH_PrimitiveComponentPin;
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


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)

器件引脚图元对象
