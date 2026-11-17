# ISCH\_SourcePrimitiveComponentAddOptions interface

器件放置选项

## Signature

```typescript
interface ISCH_SourcePrimitiveComponentAddOptions extends ISCH_SourceIdentity
```
**Extends:** [ISCH\_SourceIdentity](./ISCH_SourceIdentity.md)

## Remarks

`x` / `y` 是器件锚点，不是外形中心，也不含引脚长度与引线； 放置前应先用 [LIB\_Symbol.getGeometry()](../classes/LIB_Symbol.md) 读取符号外形包围盒与引脚连接点相对坐标， 再据此计算锚点、避让与引出线方向

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

[designator?](./ISCH_SourcePrimitiveComponentAddOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 位号，省略则由内部按现有规则分配

</td></tr>
<tr><td>

[libraryUuid](./ISCH_SourcePrimitiveComponentAddOptions.md)

</td><td>

</td><td>

string

</td><td>

器件所属库 UUID

</td></tr>
<tr><td>

[mirror?](./ISCH_SourcePrimitiveComponentAddOptions.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否镜像，缺省为 `false`

</td></tr>
<tr><td>

[name](./ISCH_SourcePrimitiveComponentAddOptions.md)

</td><td>

</td><td>

string

</td><td>

器件名称，在库内唯一

</td></tr>
<tr><td>

[properties?](./ISCH_SourcePrimitiveComponentAddOptions.md)

</td><td>

</td><td>

\{ \[key: string\]: string \}

</td><td>

_(Optional)_ 业务属性键值表，整表覆盖式写入

</td></tr>
<tr><td>

[rotation?](./ISCH_SourcePrimitiveComponentAddOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 旋转角度，缺省为 `0`

</td></tr>
<tr><td>

[subPartName?](./ISCH_SourcePrimitiveComponentAddOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 多 Part 器件的部件标识

</td></tr>
<tr><td>

[x](./ISCH_SourcePrimitiveComponentAddOptions.md)

</td><td>

</td><td>

number

</td><td>

器件锚点 X 坐标

</td></tr>
<tr><td>

[y](./ISCH_SourcePrimitiveComponentAddOptions.md)

</td><td>

</td><td>

number

</td><td>

器件锚点 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### designator

# ISCH\_SourcePrimitiveComponentAddOptions.designator property

位号，省略则由内部按现有规则分配

## Signature

```typescript
designator?: string;
```

### libraryuuid

# ISCH\_SourcePrimitiveComponentAddOptions.libraryUuid property

器件所属库 UUID

## Signature

```typescript
libraryUuid: string;
```

### mirror

# ISCH\_SourcePrimitiveComponentAddOptions.mirror property

是否镜像，缺省为 `false`

## Signature

```typescript
mirror?: boolean;
```

### name

# ISCH\_SourcePrimitiveComponentAddOptions.name property

器件名称，在库内唯一

## Signature

```typescript
name: string;
```

### properties

# ISCH\_SourcePrimitiveComponentAddOptions.properties property

业务属性键值表，整表覆盖式写入

## Signature

```typescript
properties?: { [key: string]: string };
```

### rotation

# ISCH\_SourcePrimitiveComponentAddOptions.rotation property

旋转角度，缺省为 `0`

## Signature

```typescript
rotation?: number;
```

### subpartname

# ISCH\_SourcePrimitiveComponentAddOptions.subPartName property

多 Part 器件的部件标识

## Signature

```typescript
subPartName?: string;
```

### x

# ISCH\_SourcePrimitiveComponentAddOptions.x property

器件锚点 X 坐标

## Signature

```typescript
x: number;
```

### y

# ISCH\_SourcePrimitiveComponentAddOptions.y property

器件锚点 Y 坐标

## Signature

```typescript
y: number;
```
