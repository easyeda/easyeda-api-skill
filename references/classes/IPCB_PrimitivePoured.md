# IPCB\_PrimitivePoured class

覆铜填充图元

## 签名

```typescript
declare class IPCB_PrimitivePoured implements IPCB_Primitive 
```
**实现自：**[IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

## 备注


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

添加：阻焊区域

## 签名

```typescript
addSolderMaskFill(pourFillId: IPCB_PrimitivePouredPourFill['id']): Promise<IPCB_PrimitiveFill | undefined>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

pourFillId


</td><td>

[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\]


</td><td>


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

阻焊区域填充图元对象，无法转换或 ID 错误将返回 `undefined`

### converttofill

# IPCB\_PrimitivePoured.convertToFill() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

转换到：填充图元

## 签名

```typescript
convertToFill(pourFillId: IPCB_PrimitivePouredPourFill['id']): Promise<IPCB_PrimitiveFill | undefined>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

pourFillId


</td><td>

[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\]


</td><td>


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IPCB\_PrimitiveFill](./IPCB_PrimitiveFill.md) \| undefined&gt;

填充图元对象，无法转换或 ID 错误将返回 `undefined`

### deletepourfills

# IPCB\_PrimitivePoured.deletePourFills() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除覆铜填充区域

## 签名

```typescript
deletePourFills(pourFillIds: IPCB_PrimitivePouredPourFill['id'] | Array<IPCB_PrimitivePouredPourFill['id']>): Promise<boolean>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

pourFillIds


</td><td>

[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\] \| Array&lt;[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->\['id'\]&gt;


</td><td>

覆铜填充区域 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

### getstate_pourfills

# IPCB\_PrimitivePoured.getState\_PourFills() method

获取属性状态：覆铜填充区域

## 签名

```typescript
getState_PourFills(): Array<IPCB_PrimitivePouredPourFill>;
```


## 返回值

Array&lt;[IPCB\_PrimitivePouredPourFill](../interfaces/IPCB_PrimitivePouredPourFill.md)<!-- -->&gt;

覆铜填充区域

### getstate_pourprimitiveid

# IPCB\_PrimitivePoured.getState\_PourPrimitiveId() method

获取属性状态：覆铜边框图元 ID

## 签名

```typescript
getState_PourPrimitiveId(): string;
```


## 返回值

string

覆铜边框图元 ID

### getstate_primitiveid

# IPCB\_PrimitivePoured.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivetype

# IPCB\_PrimitivePoured.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## 返回值

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型
