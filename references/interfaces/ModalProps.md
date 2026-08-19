# ModalProps interface

模态弹窗：可拖拽、可调整大小的顶层弹窗

## Signature

```typescript
export interface ModalProps 
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

[children?](./ModalProps.md)


</td><td>


</td><td>

any


</td><td>

_(Optional)_ 弹窗内容子节点


</td></tr>
<tr><td>

[height](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

高度（像素，必填）


</td></tr>
<tr><td>

[hide?](./ModalProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否隐藏弹窗


</td></tr>
<tr><td>

[left](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

距左侧位置（像素，必填）


</td></tr>
<tr><td>

[maxDragX?](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 最大水平拖拽距离（像素）


</td></tr>
<tr><td>

[maxDragY?](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 最大垂直拖拽距离（像素）


</td></tr>
<tr><td>

[onMoved?](./ModalProps.md)


</td><td>


</td><td>

(top: number, left: number) =&gt; void


</td><td>

_(Optional)_ 弹窗移动时触发，参数为新位置


</td></tr>
<tr><td>

[overlay?](./ModalProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否显示遮罩层


</td></tr>
<tr><td>

[resizeX?](./ModalProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否允许水平调整大小


</td></tr>
<tr><td>

[resizeY?](./ModalProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否允许垂直调整大小


</td></tr>
<tr><td>

[top](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

距顶部位置（像素，必填）


</td></tr>
<tr><td>

[width](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

宽度（像素，必填）


</td></tr>
</tbody></table>

---

## 属性详情

### children

# ModalProps.children property

弹窗内容子节点

## Signature

```typescript
children?: any;
```

### height

# ModalProps.height property

高度（像素，必填）

## Signature

```typescript
height: number;
```

### hide

# ModalProps.hide property

是否隐藏弹窗

## Signature

```typescript
hide?: boolean;
```

### left

# ModalProps.left property

距左侧位置（像素，必填）

## Signature

```typescript
left: number;
```

### maxdragx

# ModalProps.maxDragX property

最大水平拖拽距离（像素）

## Signature

```typescript
maxDragX?: number;
```

### maxdragy

# ModalProps.maxDragY property

最大垂直拖拽距离（像素）

## Signature

```typescript
maxDragY?: number;
```

### onmoved

# ModalProps.onMoved property

弹窗移动时触发，参数为新位置

## Signature

```typescript
onMoved?: (top: number, left: number) => void;
```

### overlay

# ModalProps.overlay property

是否显示遮罩层

## Signature

```typescript
overlay?: boolean;
```

### resizex

# ModalProps.resizeX property

是否允许水平调整大小

## Signature

```typescript
resizeX?: boolean;
```

### resizey

# ModalProps.resizeY property

是否允许垂直调整大小

## Signature

```typescript
resizeY?: boolean;
```

### top

# ModalProps.top property

距顶部位置（像素，必填）

## Signature

```typescript
top: number;
```

### width

# ModalProps.width property

宽度（像素，必填）

## Signature

```typescript
width: number;
```
