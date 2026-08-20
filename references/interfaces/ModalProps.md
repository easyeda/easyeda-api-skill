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

_(Optional)_ Popup content child nodes


</td></tr>
<tr><td>

[height](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

Height ( pixels, required)


</td></tr>
<tr><td>

[hide?](./ModalProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether to hide the popup


</td></tr>
<tr><td>

[left](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

Position from the left (pixels, required)


</td></tr>
<tr><td>

[maxDragX?](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Maximum horizontal drag distance (pixels)


</td></tr>
<tr><td>

[maxDragY?](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Maximum vertical drag distance ( pixels)


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

_(Optional)_ Whether to show the mask layer


</td></tr>
<tr><td>

[resizeX?](./ModalProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether horizontal resizing is allowed


</td></tr>
<tr><td>

[resizeY?](./ModalProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether vertical resizing is allowed


</td></tr>
<tr><td>

[top](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

Position from the top (pixels, required)


</td></tr>
<tr><td>

[width](./ModalProps.md)


</td><td>


</td><td>

number


</td><td>

Width ( pixels, required)


</td></tr>
</tbody></table>

---

## 属性详情

### children

# ModalProps.children property

Popup content child nodes

## Signature

```typescript
children?: any;
```

### height

# ModalProps.height property

Height ( pixels, required)

## Signature

```typescript
height: number;
```

### hide

# ModalProps.hide property

Whether to hide the popup

## Signature

```typescript
hide?: boolean;
```

### left

# ModalProps.left property

Position from the left (pixels, required)

## Signature

```typescript
left: number;
```

### maxdragx

# ModalProps.maxDragX property

Maximum horizontal drag distance (pixels)

## Signature

```typescript
maxDragX?: number;
```

### maxdragy

# ModalProps.maxDragY property

Maximum vertical drag distance ( pixels)

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

Whether to show the mask layer

## Signature

```typescript
overlay?: boolean;
```

### resizex

# ModalProps.resizeX property

Whether horizontal resizing is allowed

## Signature

```typescript
resizeX?: boolean;
```

### resizey

# ModalProps.resizeY property

Whether vertical resizing is allowed

## Signature

```typescript
resizeY?: boolean;
```

### top

# ModalProps.top property

Position from the top (pixels, required)

## Signature

```typescript
top: number;
```

### width

# ModalProps.width property

Width ( pixels, required)

## Signature

```typescript
width: number;
```
