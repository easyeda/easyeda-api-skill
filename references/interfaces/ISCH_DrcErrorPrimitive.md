# ISCH\_DrcErrorPrimitive interface

DRC 错误涉及的图元

## Signature

```typescript
export interface ISCH_DrcErrorPrimitive 
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

[designator?](./ISCH_DrcErrorPrimitive.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 位号，如 `R1`


</td></tr>
<tr><td>

[name?](./ISCH_DrcErrorPrimitive.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 图元名字（引脚号 / 网络名 / 器件名，依规则而定）


</td></tr>
<tr><td>

[primitiveId](./ISCH_DrcErrorPrimitive.md)


</td><td>


</td><td>

string


</td><td>

图元 ID（可用于画布跳转定位）


</td></tr>
<tr><td>

[sheet?](./ISCH_DrcErrorPrimitive.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 所在图页 ID


</td></tr>
</tbody></table>

---

## 属性详情

### designator

# ISCH\_DrcErrorPrimitive.designator property

位号，如 `R1`

## Signature

```typescript
designator?: string;
```

### name

# ISCH\_DrcErrorPrimitive.name property

图元名字（引脚号 / 网络名 / 器件名，依规则而定）

## Signature

```typescript
name?: string;
```

### primitiveid

# ISCH\_DrcErrorPrimitive.primitiveId property

图元 ID（可用于画布跳转定位）

## Signature

```typescript
primitiveId: string;
```

### sheet

# ISCH\_DrcErrorPrimitive.sheet property

所在图页 ID

## Signature

```typescript
sheet?: string;
```
