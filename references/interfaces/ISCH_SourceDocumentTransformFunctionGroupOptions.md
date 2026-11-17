# ISCH\_SourceDocumentTransformFunctionGroupOptions interface

功能分组转换选项

## Signature

```typescript
interface ISCH_SourceDocumentTransformFunctionGroupOptions extends ISCH_SourceIdentity
```
**Extends:** [ISCH\_SourceIdentity](./ISCH_SourceIdentity.md)

## Remarks

`dx` / `dy` / `rotation` 均可选，至少给出其一；旋转以分组包围盒中心为基准

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

[dx?](./ISCH_SourceDocumentTransformFunctionGroupOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ X 方向平移量

</td></tr>
<tr><td>

[dy?](./ISCH_SourceDocumentTransformFunctionGroupOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ Y 方向平移量

</td></tr>
<tr><td>

[groupId](./ISCH_SourceDocumentTransformFunctionGroupOptions.md)

</td><td>

</td><td>

string

</td><td>

功能分组编号

</td></tr>
<tr><td>

[rotation?](./ISCH_SourceDocumentTransformFunctionGroupOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 旋转角度，必须为 `90` 的整数倍，否则返回 [PARAM\_INVALID](../enums/ESCH_SourceErrorCode.md)

</td></tr>
</tbody></table>

---

## 属性详情

### dx

# ISCH\_SourceDocumentTransformFunctionGroupOptions.dx property

X 方向平移量

## Signature

```typescript
dx?: number;
```

### dy

# ISCH\_SourceDocumentTransformFunctionGroupOptions.dy property

Y 方向平移量

## Signature

```typescript
dy?: number;
```

### groupid

# ISCH\_SourceDocumentTransformFunctionGroupOptions.groupId property

功能分组编号

## Signature

```typescript
groupId: string;
```

### rotation

# ISCH\_SourceDocumentTransformFunctionGroupOptions.rotation property

旋转角度，必须为 `90` 的整数倍，否则返回 [PARAM\_INVALID](../enums/ESCH_SourceErrorCode.md)

## Signature

```typescript
rotation?: number;
```
