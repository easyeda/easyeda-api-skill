# ILIB\_FootprintGeometry interface

封装几何

## Signature

```typescript
interface ILIB_FootprintGeometry
```

## Remarks

供外部布局器在写入 PCB 前完成摆放、间距校验与自动布线前置计算， 避免逐个焊盘调用查询接口带来的往返开销

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

[bodyBBox](./ILIB_FootprintGeometry.md)

</td><td>

</td><td>

[IPCB\_DocumentBBox](./IPCB_DocumentBBox.md)

</td><td>

本体包围盒

</td></tr>
<tr><td>

[courtyardBBox?](./ILIB_FootprintGeometry.md)

</td><td>

</td><td>

[IPCB\_DocumentBBox](./IPCB_DocumentBBox.md)

</td><td>

_(Optional)_ 占位区域包围盒

</td></tr>
<tr><td>

[fullBBox](./ILIB_FootprintGeometry.md)

</td><td>

</td><td>

[IPCB\_DocumentBBox](./IPCB_DocumentBBox.md)

</td><td>

整体包围盒

</td></tr>
<tr><td>

[model3DBBox?](./ILIB_FootprintGeometry.md)

</td><td>

</td><td>

[IPCB\_DocumentBBox](./IPCB_DocumentBBox.md)

</td><td>

_(Optional)_ 3D 模型包围盒

</td></tr>
<tr><td>

[pads](./ILIB_FootprintGeometry.md)

</td><td>

</td><td>

Array&lt;[ILIB\_FootprintPadGeometry](./ILIB_FootprintPadGeometry.md)<!-- -->&gt;

</td><td>

焊盘几何列表

</td></tr>
<tr><td>

[uuid](./ILIB_FootprintGeometry.md)

</td><td>

</td><td>

string

</td><td>

封装 UUID

</td></tr>
</tbody></table>

---

## 属性详情

### bodybbox

# ILIB\_FootprintGeometry.bodyBBox property

本体包围盒

## Signature

```typescript
bodyBBox: IPCB_DocumentBBox;
```

## Remarks

仅覆盖丝印与图形，用于判断元件之间的视觉重叠

### courtyardbbox

# ILIB\_FootprintGeometry.courtyardBBox property

占位区域包围盒

## Signature

```typescript
courtyardBBox?: IPCB_DocumentBBox;
```

## Remarks

对应封装外形占位（Courtyard），用于最小间距校验；当前版本不返回该字段

### fullbbox

# ILIB\_FootprintGeometry.fullBBox property

整体包围盒

## Signature

```typescript
fullBBox: IPCB_DocumentBBox;
```

## Remarks

覆盖丝印、焊盘与 3D 轮廓，用于布局占位

### model3dbbox

# ILIB\_FootprintGeometry.model3DBBox property

3D 模型包围盒

## Signature

```typescript
model3DBBox?: IPCB_DocumentBBox;
```

## Remarks

用于 3D 场景中的空间占用估算；当前版本不返回该字段

### pads

# ILIB\_FootprintGeometry.pads property

焊盘几何列表

## Signature

```typescript
pads: Array<ILIB_FootprintPadGeometry>;
```

### uuid

# ILIB\_FootprintGeometry.uuid property

封装 UUID

## Signature

```typescript
uuid: string;
```
