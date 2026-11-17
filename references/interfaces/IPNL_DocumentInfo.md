# IPNL\_DocumentInfo interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

面板文档头属性

## Signature

```typescript
interface IPNL_DocumentInfo
```

## Remarks

这一块板的产品参数：名称与标题、尺寸、材质与厚度、表面工艺、遮盖颜色、打印哪一面。 这些值直接决定生产出来长什么样，改之前先确认是不是在改成品参数。

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

[coverColor](./IPNL_DocumentInfo.md)

</td><td>

</td><td>

[EPNL\_CoverColor](../enums/EPNL_CoverColor.md)

</td><td>

**_(ALPHA)_** 遮盖颜色

</td></tr>
<tr><td>

[craft](./IPNL_DocumentInfo.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 表面工艺

</td></tr>
<tr><td>

[desc](./IPNL_DocumentInfo.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 描述

</td></tr>
<tr><td>

[docType](./IPNL_DocumentInfo.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 文档类型（面板 / 面板库）

</td></tr>
<tr><td>

[height](./IPNL_DocumentInfo.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 高度（带单位字符串，如 '579mm'）

</td></tr>
<tr><td>

[material](./IPNL_DocumentInfo.md)

</td><td>

</td><td>

[EPNL\_Material](../enums/EPNL_Material.md)

</td><td>

**_(ALPHA)_** 材质

</td></tr>
<tr><td>

[name](./IPNL_DocumentInfo.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 面板名称

</td></tr>
<tr><td>

[print](./IPNL_DocumentInfo.md)

</td><td>

</td><td>

[EPNL\_PrintSide](../enums/EPNL_PrintSide.md)

</td><td>

**_(ALPHA)_** 打印面

</td></tr>
<tr><td>

[thickness](./IPNL_DocumentInfo.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 厚度（带单位字符串，随材质取值不同）

</td></tr>
<tr><td>

[title](./IPNL_DocumentInfo.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 标题

</td></tr>
<tr><td>

[width](./IPNL_DocumentInfo.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** 宽度（带单位字符串，如 '393mm'）

</td></tr>
</tbody></table>

---

## 属性详情

### covercolor

# IPNL\_DocumentInfo.coverColor property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

遮盖颜色

## Signature

```typescript
coverColor: EPNL_CoverColor;
```

### craft

# IPNL\_DocumentInfo.craft property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

表面工艺

## Signature

```typescript
craft: string;
```

### desc

# IPNL\_DocumentInfo.desc property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

描述

## Signature

```typescript
desc: string;
```

### doctype

# IPNL\_DocumentInfo.docType property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

文档类型（面板 / 面板库）

## Signature

```typescript
docType: number;
```

### height

# IPNL\_DocumentInfo.height property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

高度（带单位字符串，如 '579mm'）

## Signature

```typescript
height: string;
```

### material

# IPNL\_DocumentInfo.material property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

材质

## Signature

```typescript
material: EPNL_Material;
```

### name

# IPNL\_DocumentInfo.name property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

面板名称

## Signature

```typescript
name: string;
```

### print

# IPNL\_DocumentInfo.print property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

打印面

## Signature

```typescript
print: EPNL_PrintSide;
```

### thickness

# IPNL\_DocumentInfo.thickness property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

厚度（带单位字符串，随材质取值不同）

## Signature

```typescript
thickness: string;
```

### title

# IPNL\_DocumentInfo.title property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

标题

## Signature

```typescript
title: string;
```

### width

# IPNL\_DocumentInfo.width property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

宽度（带单位字符串，如 '393mm'）

## Signature

```typescript
width: string;
```
