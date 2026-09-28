# ISCH\_ExportPngResolution interface

原理图导出图片分辨率

## Signature

```typescript
interface ISCH_ExportPngResolution
```

## Remarks

仅 PNG 导出支持分辨率参数，用于按长宽分辨率导出高清图片：

- 支持只传入 `width` 或 `height` 中的任意一个，另一侧将按原始比例自动拉伸输出（保持长宽比例）； - `width` 与 `height` 均不传时，按当前一倍分辨率输出； - 单边最大支持 \*\*4096\*\*。

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

[height?](./ISCH_ExportPngResolution.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 输出图片高度（像素），最大 4096

</td></tr>
<tr><td>

[width?](./ISCH_ExportPngResolution.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 输出图片宽度（像素），最大 4096

</td></tr>
</tbody></table>

---

## 属性详情

### height

# ISCH\_ExportPngResolution.height property

输出图片高度（像素），最大 4096

## Signature

```typescript
height?: number;
```

### width

# ISCH\_ExportPngResolution.width property

输出图片宽度（像素），最大 4096

## Signature

```typescript
width?: number;
```
