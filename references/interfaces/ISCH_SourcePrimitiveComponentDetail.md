# ISCH\_SourcePrimitiveComponentDetail interface

器件详细属性

## Signature

```typescript
interface ISCH_SourcePrimitiveComponentDetail
```

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

[designator](./ISCH_SourcePrimitiveComponentDetail.md)

</td><td>

</td><td>

string

</td><td>

位号

</td></tr>
<tr><td>

[mirror](./ISCH_SourcePrimitiveComponentDetail.md)

</td><td>

</td><td>

boolean

</td><td>

是否镜像

</td></tr>
<tr><td>

[pins](./ISCH_SourcePrimitiveComponentDetail.md)

</td><td>

</td><td>

Array&lt;[ISCH\_SourcePrimitiveComponentPinItem](./ISCH_SourcePrimitiveComponentPinItem.md)<!-- -->&gt;

</td><td>

引脚属性列表

</td></tr>
<tr><td>

[primitiveId](./ISCH_SourcePrimitiveComponentDetail.md)

</td><td>

</td><td>

string

</td><td>

图元 ID

</td></tr>
<tr><td>

[properties](./ISCH_SourcePrimitiveComponentDetail.md)

</td><td>

</td><td>

\{ \[key: string\]: string \}

</td><td>

业务属性键值表

</td></tr>
<tr><td>

[rotation](./ISCH_SourcePrimitiveComponentDetail.md)

</td><td>

</td><td>

number

</td><td>

旋转角度

</td></tr>
<tr><td>

[subPartName](./ISCH_SourcePrimitiveComponentDetail.md)

</td><td>

</td><td>

string

</td><td>

多 Part 器件的部件标识

</td></tr>
<tr><td>

[x](./ISCH_SourcePrimitiveComponentDetail.md)

</td><td>

</td><td>

number

</td><td>

锚点 X 坐标

</td></tr>
<tr><td>

[y](./ISCH_SourcePrimitiveComponentDetail.md)

</td><td>

</td><td>

number

</td><td>

锚点 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### designator

# ISCH\_SourcePrimitiveComponentDetail.designator property

位号

## Signature

```typescript
designator: string;
```

### mirror

# ISCH\_SourcePrimitiveComponentDetail.mirror property

是否镜像

## Signature

```typescript
mirror: boolean;
```

### pins

# ISCH\_SourcePrimitiveComponentDetail.pins property

引脚属性列表

## Signature

```typescript
pins: Array<ISCH_SourcePrimitiveComponentPinItem>;
```

### primitiveid

# ISCH\_SourcePrimitiveComponentDetail.primitiveId property

图元 ID

## Signature

```typescript
primitiveId: string;
```

### properties

# ISCH\_SourcePrimitiveComponentDetail.properties property

业务属性键值表

## Signature

```typescript
properties: { [key: string]: string };
```

### rotation

# ISCH\_SourcePrimitiveComponentDetail.rotation property

旋转角度

## Signature

```typescript
rotation: number;
```

### subpartname

# ISCH\_SourcePrimitiveComponentDetail.subPartName property

多 Part 器件的部件标识

## Signature

```typescript
subPartName: string;
```

### x

# ISCH\_SourcePrimitiveComponentDetail.x property

锚点 X 坐标

## Signature

```typescript
x: number;
```

### y

# ISCH\_SourcePrimitiveComponentDetail.y property

锚点 Y 坐标

## Signature

```typescript
y: number;
```
