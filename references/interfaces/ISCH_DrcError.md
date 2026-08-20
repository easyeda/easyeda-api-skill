# ISCH\_DrcError interface

DRC error item

## Signature

```typescript
export interface ISCH_DrcError 
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

[net?](./ISCH_DrcError.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Involved net (if any)


</td></tr>
<tr><td>

[primitives](./ISCH_DrcError.md)


</td><td>


</td><td>

Array&lt;[ISCH\_DrcErrorPrimitive](./ISCH_DrcErrorPrimitive.md)<!-- -->&gt;


</td><td>

Involved primitives


</td></tr>
<tr><td>

[rule](./ISCH_DrcError.md)


</td><td>


</td><td>

string


</td><td>

Triggered rule key, e.g. `IN-IN`<!-- -->, `OUT-OUT`


</td></tr>
<tr><td>

[type](./ISCH_DrcError.md)


</td><td>


</td><td>

'fatalError' \| 'error' \| 'warn'


</td><td>

Error level


</td></tr>
</tbody></table>

---

## 属性详情

### net

# ISCH\_DrcError.net property

Involved net (if any)

## Signature

```typescript
net?: string;
```

### primitives

# ISCH\_DrcError.primitives property

Involved primitives

## Signature

```typescript
primitives: Array<ISCH_DrcErrorPrimitive>;
```

### rule

# ISCH\_DrcError.rule property

Triggered rule key, e.g. `IN-IN`<!-- -->, `OUT-OUT`

## Signature

```typescript
rule: string;
```

### type

# ISCH\_DrcError.type property

Error level

## Signature

```typescript
type: 'fatalError' | 'error' | 'warn';
```
