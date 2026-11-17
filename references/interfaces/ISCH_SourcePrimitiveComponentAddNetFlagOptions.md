# ISCH\_SourcePrimitiveComponentAddNetFlagOptions interface

网络符号放置选项

## Signature

```typescript
interface ISCH_SourcePrimitiveComponentAddNetFlagOptions extends ISCH_SourceIdentity
```
**Extends:** [ISCH\_SourceIdentity](./ISCH_SourceIdentity.md)

## Remarks

`rotation = 0` 时，电源符号朝上（引脚在下方），地符号朝下（引脚在上方）

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

[mirror?](./ISCH_SourcePrimitiveComponentAddNetFlagOptions.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否镜像，缺省为 `false`

</td></tr>
<tr><td>

[net](./ISCH_SourcePrimitiveComponentAddNetFlagOptions.md)

</td><td>

</td><td>

string

</td><td>

网络名称

</td></tr>
<tr><td>

[rotation?](./ISCH_SourcePrimitiveComponentAddNetFlagOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 旋转角度，缺省为 `0`<!-- -->（电源符号朝上、引脚在下；地符号朝下、引脚在上）

</td></tr>
<tr><td>

[type](./ISCH_SourcePrimitiveComponentAddNetFlagOptions.md)

</td><td>

</td><td>

[ESCH\_SourcePrimitiveComponentNetFlagType](../enums/ESCH_SourcePrimitiveComponentNetFlagType.md)

</td><td>

网络符号类型

</td></tr>
<tr><td>

[x](./ISCH_SourcePrimitiveComponentAddNetFlagOptions.md)

</td><td>

</td><td>

number

</td><td>

符号锚点 X 坐标

</td></tr>
<tr><td>

[y](./ISCH_SourcePrimitiveComponentAddNetFlagOptions.md)

</td><td>

</td><td>

number

</td><td>

符号锚点 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### mirror

# ISCH\_SourcePrimitiveComponentAddNetFlagOptions.mirror property

是否镜像，缺省为 `false`

## Signature

```typescript
mirror?: boolean;
```

### net

# ISCH\_SourcePrimitiveComponentAddNetFlagOptions.net property

网络名称

## Signature

```typescript
net: string;
```

### rotation

# ISCH\_SourcePrimitiveComponentAddNetFlagOptions.rotation property

旋转角度，缺省为 `0`<!-- -->（电源符号朝上、引脚在下；地符号朝下、引脚在上）

## Signature

```typescript
rotation?: number;
```

### type

# ISCH\_SourcePrimitiveComponentAddNetFlagOptions.type property

网络符号类型

## Signature

```typescript
type: ESCH_SourcePrimitiveComponentNetFlagType;
```

### x

# ISCH\_SourcePrimitiveComponentAddNetFlagOptions.x property

符号锚点 X 坐标

## Signature

```typescript
x: number;
```

### y

# ISCH\_SourcePrimitiveComponentAddNetFlagOptions.y property

符号锚点 Y 坐标

## Signature

```typescript
y: number;
```
