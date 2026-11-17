# ILIB\_SymbolGeometry interface

符号几何

## Signature

```typescript
interface ILIB_SymbolGeometry
```

## Remarks

供外部布局器在写入原理图前完成定位、避让与压线检查，避免「先画再截图检查」的往返

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

[bodyBBox](./ILIB_SymbolGeometry.md)

</td><td>

</td><td>

[ISCH\_DocumentBBox](./ISCH_DocumentBBox.md)

</td><td>

本体包围盒

</td></tr>
<tr><td>

[fullBBox](./ILIB_SymbolGeometry.md)

</td><td>

</td><td>

[ISCH\_DocumentBBox](./ISCH_DocumentBBox.md)

</td><td>

整体包围盒

</td></tr>
<tr><td>

[pins](./ILIB_SymbolGeometry.md)

</td><td>

</td><td>

Array&lt;[ILIB\_SymbolPinGeometry](./ILIB_SymbolPinGeometry.md)<!-- -->&gt;

</td><td>

引脚几何列表

</td></tr>
<tr><td>

[subPartName?](./ILIB_SymbolGeometry.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 子部件名称（多子部件符号为对应部件，单子部件符号省略）

</td></tr>
<tr><td>

[textAnchors](./ILIB_SymbolGeometry.md)

</td><td>

</td><td>

Array&lt;[ILIB\_SymbolTextAnchor](./ILIB_SymbolTextAnchor.md)<!-- -->&gt;

</td><td>

文本锚点列表

</td></tr>
<tr><td>

[uuid](./ILIB_SymbolGeometry.md)

</td><td>

</td><td>

string

</td><td>

符号 UUID

</td></tr>
</tbody></table>

---

## 属性详情

### bodybbox

# ILIB\_SymbolGeometry.bodyBBox property

本体包围盒

## Signature

```typescript
bodyBBox: ISCH_DocumentBBox;
```

## Remarks

仅覆盖符号图形，不含引脚伸出部分，用于判断导线是否穿过符号本体

### fullbbox

# ILIB\_SymbolGeometry.fullBBox property

整体包围盒

## Signature

```typescript
fullBBox: ISCH_DocumentBBox;
```

## Remarks

覆盖图形与全部引脚，用于布局占位与符号之间的避让计算

### pins

# ILIB\_SymbolGeometry.pins property

引脚几何列表

## Signature

```typescript
pins: Array<ILIB_SymbolPinGeometry>;
```

### subpartname

# ILIB\_SymbolGeometry.subPartName property

子部件名称（多子部件符号为对应部件，单子部件符号省略）

## Signature

```typescript
subPartName?: string;
```

### textanchors

# ILIB\_SymbolGeometry.textAnchors property

文本锚点列表

## Signature

```typescript
textAnchors: Array<ILIB_SymbolTextAnchor>;
```

## Remarks

用于在布局阶段判断位号 / 值文本是否压住导线；未定义文本样式的符号可能为空数组

### uuid

# ILIB\_SymbolGeometry.uuid property

符号 UUID

## Signature

```typescript
uuid: string;
```
