# ISCH\_DocumentRenderRegionOptions interface

区域渲染选项

## Signature

```typescript
interface ISCH_DocumentRenderRegionOptions extends ISCH_SourceIdentity
```
**Extends:** [ISCH\_SourceIdentity](./ISCH_SourceIdentity.md)

## Remarks

不写盘、不含路径参数，落盘由调用方自行组合 [文件系统接口](../classes/SYS_FileSystem.md)<!-- -->； 返回的 `value` 为 `File` 对象，不能穿过 JSON 边界，只能在同一进程内直接调用

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

[format?](./ISCH_DocumentRenderRegionOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 输出格式，支持 `png` / `svg`

</td></tr>
<tr><td>

[region](./ISCH_DocumentRenderRegionOptions.md)

</td><td>

</td><td>

[ISCH\_SourceRegion](./ISCH_SourceRegion.md)

</td><td>

渲染区域

</td></tr>
<tr><td>

[width?](./ISCH_DocumentRenderRegionOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 渲染宽度，省略时由内部按区域尺寸决定分辨率

</td></tr>
</tbody></table>

---

## 属性详情

### format

# ISCH\_DocumentRenderRegionOptions.format property

输出格式，支持 `png` / `svg`

## Signature

```typescript
format?: string;
```

### region

# ISCH\_DocumentRenderRegionOptions.region property

渲染区域

## Signature

```typescript
region: ISCH_SourceRegion;
```

### width

# ISCH\_DocumentRenderRegionOptions.width property

渲染宽度，省略时由内部按区域尺寸决定分辨率

## Signature

```typescript
width?: number;
```
