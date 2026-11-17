# ISCH\_SourcePrimitiveComponentUpdateOptions interface

器件修改选项

## Signature

```typescript
interface ISCH_SourcePrimitiveComponentUpdateOptions extends ISCH_SourcePrimitiveIdOptions
```
**Extends:** [ISCH\_SourcePrimitiveIdOptions](./ISCH_SourcePrimitiveIdOptions.md)

## Remarks

除目标标识与 `primitiveId` 外，所有字段均可选，仅修改给出的字段

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

[designator?](./ISCH_SourcePrimitiveComponentUpdateOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 位号

</td></tr>
<tr><td>

[mirror?](./ISCH_SourcePrimitiveComponentUpdateOptions.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否镜像

</td></tr>
<tr><td>

[properties?](./ISCH_SourcePrimitiveComponentUpdateOptions.md)

</td><td>

</td><td>

\{ \[key: string\]: string \}

</td><td>

_(Optional)_ 业务属性键值表，按键增量覆盖

</td></tr>
<tr><td>

[rotation?](./ISCH_SourcePrimitiveComponentUpdateOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 旋转角度

</td></tr>
<tr><td>

[x?](./ISCH_SourcePrimitiveComponentUpdateOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 锚点 X 坐标

</td></tr>
<tr><td>

[y?](./ISCH_SourcePrimitiveComponentUpdateOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 锚点 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### designator

# ISCH\_SourcePrimitiveComponentUpdateOptions.designator property

位号

## Signature

```typescript
designator?: string;
```

### mirror

# ISCH\_SourcePrimitiveComponentUpdateOptions.mirror property

是否镜像

## Signature

```typescript
mirror?: boolean;
```

### properties

# ISCH\_SourcePrimitiveComponentUpdateOptions.properties property

业务属性键值表，按键增量覆盖

## Signature

```typescript
properties?: { [key: string]: string };
```

### rotation

# ISCH\_SourcePrimitiveComponentUpdateOptions.rotation property

旋转角度

## Signature

```typescript
rotation?: number;
```

### x

# ISCH\_SourcePrimitiveComponentUpdateOptions.x property

锚点 X 坐标

## Signature

```typescript
x?: number;
```

### y

# ISCH\_SourcePrimitiveComponentUpdateOptions.y property

锚点 Y 坐标

## Signature

```typescript
y?: number;
```
