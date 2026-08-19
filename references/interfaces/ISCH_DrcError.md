# ISCH\_DrcError interface

DRC 错误条目

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

_(Optional)_ 涉及网络（若有）


</td></tr>
<tr><td>

[primitives](./ISCH_DrcError.md)


</td><td>


</td><td>

Array&lt;[ISCH\_DrcErrorPrimitive](./ISCH_DrcErrorPrimitive.md)<!-- -->&gt;


</td><td>

涉及的图元


</td></tr>
<tr><td>

[rule](./ISCH_DrcError.md)


</td><td>


</td><td>

string


</td><td>

触发规则 key，如 `IN-IN`<!-- -->、`OUT-OUT`


</td></tr>
<tr><td>

[type](./ISCH_DrcError.md)


</td><td>


</td><td>

'fatalError' \| 'error' \| 'warn'


</td><td>

错误级别


</td></tr>
</tbody></table>

---

## 属性详情

### net

# ISCH\_DrcError.net property

涉及网络（若有）

## Signature

```typescript
net?: string;
```

### primitives

# ISCH\_DrcError.primitives property

涉及的图元

## Signature

```typescript
primitives: Array<ISCH_DrcErrorPrimitive>;
```

### rule

# ISCH\_DrcError.rule property

触发规则 key，如 `IN-IN`<!-- -->、`OUT-OUT`

## Signature

```typescript
rule: string;
```

### type

# ISCH\_DrcError.type property

错误级别

## Signature

```typescript
type: 'fatalError' | 'error' | 'warn';
```
