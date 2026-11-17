# ISCH\_SourcePrimitiveComponentUpdateAttributeOptions interface

器件属性显示与位置修改选项

## Signature

```typescript
interface ISCH_SourcePrimitiveComponentUpdateAttributeOptions extends ISCH_SourcePrimitiveIdOptions
```
**Extends:** [ISCH\_SourcePrimitiveIdOptions](./ISCH_SourcePrimitiveIdOptions.md)

## Remarks

以「父器件 ID + key」定位属性条目，不使用属性图元自身的图元 ID

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

[key](./ISCH_SourcePrimitiveComponentUpdateAttributeOptions.md)

</td><td>

</td><td>

string

</td><td>

属性键，如 `Designator` / `Value` / `Name`

</td></tr>
<tr><td>

[keyVisible?](./ISCH_SourcePrimitiveComponentUpdateAttributeOptions.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 属性键名是否显示

</td></tr>
<tr><td>

[rotation?](./ISCH_SourcePrimitiveComponentUpdateAttributeOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 属性自身旋转角度

</td></tr>
<tr><td>

[valueVisible?](./ISCH_SourcePrimitiveComponentUpdateAttributeOptions.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 属性值是否显示

</td></tr>
<tr><td>

[x?](./ISCH_SourcePrimitiveComponentUpdateAttributeOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 属性自身 X 坐标

</td></tr>
<tr><td>

[y?](./ISCH_SourcePrimitiveComponentUpdateAttributeOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 属性自身 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### key

# ISCH\_SourcePrimitiveComponentUpdateAttributeOptions.key property

属性键，如 `Designator` / `Value` / `Name`

## Signature

```typescript
key: string;
```

### keyvisible

# ISCH\_SourcePrimitiveComponentUpdateAttributeOptions.keyVisible property

属性键名是否显示

## Signature

```typescript
keyVisible?: boolean;
```

### rotation

# ISCH\_SourcePrimitiveComponentUpdateAttributeOptions.rotation property

属性自身旋转角度

## Signature

```typescript
rotation?: number;
```

### valuevisible

# ISCH\_SourcePrimitiveComponentUpdateAttributeOptions.valueVisible property

属性值是否显示

## Signature

```typescript
valueVisible?: boolean;
```

### x

# ISCH\_SourcePrimitiveComponentUpdateAttributeOptions.x property

属性自身 X 坐标

## Signature

```typescript
x?: number;
```

### y

# ISCH\_SourcePrimitiveComponentUpdateAttributeOptions.y property

属性自身 Y 坐标

## Signature

```typescript
y?: number;
```
