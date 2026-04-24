# IPCB\_PrimitivePoured class

覆铜填充图元

## Signature

```typescript
declare class IPCB_PrimitivePoured implements IPCB_Primitive 
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

[addSolderMaskFill(pourFillId)](./IPCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** 添加：阻焊区域


</td></tr>
<tr><td>

[convertToFill(pourFillId)](./IPCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** 转换到：填充图元


</td></tr>
<tr><td>

[deletePourFills(pourFillIds)](./IPCB_PrimitivePoured.md)


</td><td>


</td><td>

**_(BETA)_** 删除覆铜填充区域


</td></tr>
<tr><td>

[getState\_PourFills()](./IPCB_PrimitivePoured.md)


</td><td>


</td><td>

获取属性状态：覆铜填充区域


</td></tr>
<tr><td>

[getState\_PourPrimitiveId()](./IPCB_PrimitivePoured.md)


</td><td>


</td><td>

获取属性状态：覆铜边框图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitivePoured.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitivePoured.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
</tbody></table>

---

## 方法详情

### addsoldermaskfill

# IPCB\_PrimitivePoured.addSolderMaskFill() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

添加：阻焊区域

## Signature

```typescript
addSolderMaskFill(pourFillId: IPCB_PrimitivePouredPourFill['id']): Promise<IPCB_PrimitiveFill | undefined>;
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

pourFillId


</td><td>

[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\]


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

阻焊区域填充图元对象，无法转换或 ID 错误将返回 `undefined`

### converttofill

# IPCB\_PrimitivePoured.convertToFill() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

转换到：填充图元

## Signature

```typescript
convertToFill(pourFillId: IPCB_PrimitivePouredPourFill['id']): Promise<IPCB_PrimitiveFill | undefined>;
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

pourFillId


</td><td>

[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\]


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

填充图元对象，无法转换或 ID 错误将返回 `undefined`

### deletepourfills

# IPCB\_PrimitivePoured.deletePourFills() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除覆铜填充区域

## Signature

```typescript
deletePourFills(pourFillIds: IPCB_PrimitivePouredPourFill['id'] | Array<IPCB_PrimitivePouredPourFill['id']>): Promise<boolean>;
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

pourFillIds


</td><td>

[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\] \| Array&lt;[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\]&gt;


</td><td>

覆铜填充区域 ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

删除操作是否成功

### getstate_pourfills

# IPCB\_PrimitivePoured.getState\_PourFills() method

获取属性状态：覆铜填充区域

## Signature

```typescript
getState_PourFills(): Array<IPCB_PrimitivePouredPourFill>;
```


## Returns

Array&lt;[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->&gt;

覆铜填充区域

### getstate_pourprimitiveid

# IPCB\_PrimitivePoured.getState\_PourPrimitiveId() method

获取属性状态：覆铜边框图元 ID

## Signature

```typescript
getState_PourPrimitiveId(): string;
```


## Returns

string

覆铜边框图元 ID

### getstate_primitiveid

# IPCB\_PrimitivePoured.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivetype

# IPCB\_PrimitivePoured.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## Returns

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型
