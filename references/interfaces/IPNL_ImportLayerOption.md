# IPNL\_ImportLayerOption interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

DXF 导入的图层映射项

## Signature

```typescript
interface IPNL_ImportLayerOption
```

## Remarks

指定 DXF 里的某个图层落到哪个面板工艺层、是否可见；一行对应一个 DXF 图层

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

[dxfLayerName](./IPNL_ImportLayerOption.md)

</td><td>

</td><td>

string

</td><td>

**_(ALPHA)_** DXF 文件里的图层名，取自 DXF 本身

</td></tr>
<tr><td>

[layerId](./IPNL_ImportLayerOption.md)

</td><td>

</td><td>

[EPNL\_LayerId](../enums/EPNL_LayerId.md)

</td><td>

**_(ALPHA)_** 目标面板图层

</td></tr>
<tr><td>

[visible](./IPNL_ImportLayerOption.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可见

</td></tr>
</tbody></table>

---

## 属性详情

### dxflayername

# IPNL\_ImportLayerOption.dxfLayerName property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

DXF 文件里的图层名，取自 DXF 本身

## Signature

```typescript
dxfLayerName: string;
```

### layerid

# IPNL\_ImportLayerOption.layerId property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

目标面板图层

## Signature

```typescript
layerId: EPNL_LayerId;
```

### visible

# IPNL\_ImportLayerOption.visible property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可见

## Signature

```typescript
visible: boolean;
```
