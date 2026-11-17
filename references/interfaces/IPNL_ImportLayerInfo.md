# IPNL\_ImportLayerInfo interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

DXF 文件里的图层信息

## Signature

```typescript
interface IPNL_ImportLayerInfo
```

## Remarks

从 DXF 解析出来的图层清单，用于决定每个图层映射到哪个面板工艺层

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

[dxfLayerName](./IPNL_ImportLayerInfo.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** DXF 文件里的图层名

</td></tr>
<tr><td>

[shapeCount](./IPNL_ImportLayerInfo.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 该图层下的图形数量

</td></tr>
</tbody></table>

---

## 属性详情

### dxflayername

# IPNL\_ImportLayerInfo.dxfLayerName property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

DXF 文件里的图层名

## Signature

```typescript
dxfLayerName: string;
```

### shapecount

# IPNL\_ImportLayerInfo.shapeCount property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该图层下的图形数量

## Signature

```typescript
shapeCount: number;
```
