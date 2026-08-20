# IDMT\_EditorSplitScreenItem interface

Editor split screen property

## Signature

```typescript
export interface IDMT_EditorSplitScreenItem 
```

## Remarks

[tabs](./IDMT_EditorSplitScreenItem.md) and [children](./IDMT_EditorSplitScreenItem.md) do not exist at the same time. When [tabs](./IDMT_EditorSplitScreenItem.md) exists, it means there is no split screen, and [children](./IDMT_EditorSplitScreenItem.md) will be `undefined`

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

[children?](./IDMT_EditorSplitScreenItem.md)


</td><td>


</td><td>

Array&lt;[IDMT\_EditorSplitScreenItem](./IDMT_EditorSplitScreenItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Child split screens


</td></tr>
<tr><td>

[direction?](./IDMT_EditorSplitScreenItem.md)


</td><td>


</td><td>

[EDMT\_EditorSplitScreenDirection](../enums/EDMT_EditorSplitScreenDirection.md)


</td><td>

_(Optional)_ Split screen direction


</td></tr>
<tr><td>

[fatherId?](./IDMT_EditorSplitScreenItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Parent split screen ID


</td></tr>
<tr><td>

[id](./IDMT_EditorSplitScreenItem.md)


</td><td>


</td><td>

string


</td><td>

Split screen ID


</td></tr>
<tr><td>

[tabs?](./IDMT_EditorSplitScreenItem.md)


</td><td>


</td><td>

Array&lt;[IDMT\_EditorTabItem](./IDMT_EditorTabItem.md)<!-- -->&gt;


</td><td>

_(Optional)_ Split screen in tab


</td></tr>
</tbody></table>

---

## 属性详情

### children

# IDMT\_EditorSplitScreenItem.children property

Child split screens

## Signature

```typescript
children?: Array<IDMT_EditorSplitScreenItem>;
```

### direction

# IDMT\_EditorSplitScreenItem.direction property

Split screen direction

## Signature

```typescript
direction?: EDMT_EditorSplitScreenDirection;
```

### fatherid

# IDMT\_EditorSplitScreenItem.fatherId property

Parent split screen ID

## Signature

```typescript
fatherId?: string;
```

### id

# IDMT\_EditorSplitScreenItem.id property

Split screen ID

## Signature

```typescript
id: string;
```

### tabs

# IDMT\_EditorSplitScreenItem.tabs property

Split screen in tab

## Signature

```typescript
tabs?: Array<IDMT_EditorTabItem>;
```
