# IDMT\_EditorSplitScreenItem interface

编辑器分屏属性

## 签名

```typescript
interface IDMT_EditorSplitScreenItem 
```

## 备注

[tabs](./IDMT_EditorSplitScreenItem.md) 和 [children](./IDMT_EditorSplitScreenItem.md) 并不同时存在，当 [tabs](./IDMT_EditorSplitScreenItem.md) 存在时，代表不存在分屏，[children](./IDMT_EditorSplitScreenItem.md) 将为 `undefined`

## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[children?](./IDMT_EditorSplitScreenItem.md)


</td><td>


</td><td>

Array&lt;[IDMT\_EditorSplitScreenItem](./IDMT_EditorSplitScreenItem.md)<!-- -->&gt;


</td><td>

_（可选）_ 子分屏


</td></tr>
<tr><td>

[direction?](./IDMT_EditorSplitScreenItem.md)


</td><td>


</td><td>

[EDMT\_EditorSplitScreenDirection](../enums/EDMT_EditorSplitScreenDirection.md)


</td><td>

_（可选）_ 分屏方向


</td></tr>
<tr><td>

[fatherId?](./IDMT_EditorSplitScreenItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 父级分屏 ID


</td></tr>
<tr><td>

[id](./IDMT_EditorSplitScreenItem.md)


</td><td>


</td><td>

string


</td><td>

分屏 ID


</td></tr>
<tr><td>

[tabs?](./IDMT_EditorSplitScreenItem.md)


</td><td>


</td><td>

Array&lt;[IDMT\_EditorTabItem](./IDMT_EditorTabItem.md)<!-- -->&gt;


</td><td>

_（可选）_ 分屏内标签页


</td></tr>
</tbody></table>

---

## 属性详情

### children

# IDMT\_EditorSplitScreenItem.children property

子分屏

## 签名

```typescript
children?: Array<IDMT_EditorSplitScreenItem>;
```

### direction

# IDMT\_EditorSplitScreenItem.direction property

分屏方向

## 签名

```typescript
direction?: EDMT_EditorSplitScreenDirection;
```

### fatherid

# IDMT\_EditorSplitScreenItem.fatherId property

父级分屏 ID

## 签名

```typescript
fatherId?: string;
```

### id

# IDMT\_EditorSplitScreenItem.id property

分屏 ID

## 签名

```typescript
id: string;
```

### tabs

# IDMT\_EditorSplitScreenItem.tabs property

分屏内标签页

## 签名

```typescript
tabs?: Array<IDMT_EditorTabItem>;
```
