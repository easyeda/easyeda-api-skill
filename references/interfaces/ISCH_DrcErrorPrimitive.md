# ISCH\_DrcErrorPrimitive interface

Primitive involved in a DRC error

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

_(Optional)_ Designator, e.g. `R1`


</td></tr>
<tr><td>

[name?](./ISCH_DrcErrorPrimitive.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Primitive name (pin number / net name / device name, depending on the rule)


</td></tr>
<tr><td>

[primitiveId](./ISCH_DrcErrorPrimitive.md)


</td><td>


</td><td>

string


</td><td>

Primitive ID (can be used for canvas jump positioning)


</td></tr>
<tr><td>

[sheet?](./ISCH_DrcErrorPrimitive.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Sheet ID it is on


</td></tr>
</tbody></table>

---

## 属性详情

### designator

# ISCH\_DrcErrorPrimitive.designator property

Designator, e.g. `R1`

## Signature

```typescript
designator?: string;
```

### name

# ISCH\_DrcErrorPrimitive.name property

Primitive name (pin number / net name / device name, depending on the rule)

## Signature

```typescript
name?: string;
```

### primitiveid

# ISCH\_DrcErrorPrimitive.primitiveId property

Primitive ID (can be used for canvas jump positioning)

## Signature

```typescript
primitiveId: string;
```

### sheet

# ISCH\_DrcErrorPrimitive.sheet property

Sheet ID it is on

## Signature

```typescript
sheet?: string;
```
