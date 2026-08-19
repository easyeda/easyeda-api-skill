# ScrollerProps interface

滚动组件：虚拟滚动列表，仅渲染可见行

## Signature

```typescript
export interface ScrollerProps 
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

[buffer?](./ScrollerProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 额外缓冲渲染的行数


</td></tr>
<tr><td>

[children?](./ScrollerProps.md)


</td><td>


</td><td>

any


</td><td>

_(Optional)_ 子节点


</td></tr>
<tr><td>

[itemCount](./ScrollerProps.md)


</td><td>


</td><td>

number


</td><td>

总行数（必填）


</td></tr>
<tr><td>

[itemHeight](./ScrollerProps.md)


</td><td>


</td><td>

number


</td><td>

每行高度（像素，必填）


</td></tr>
<tr><td>

[onVisibleRowsChange?](./ScrollerProps.md)


</td><td>


</td><td>

(visibleRows: { index: number; slotName: string }\[\]) =&gt; void


</td><td>

_(Optional)_ 可见行变化时触发，参数为可见行索引与对应插槽名列表


</td></tr>
</tbody></table>

---

## 属性详情

### buffer

# ScrollerProps.buffer property

额外缓冲渲染的行数

## Signature

```typescript
buffer?: number;
```

### children

# ScrollerProps.children property

子节点

## Signature

```typescript
children?: any;
```

### itemcount

# ScrollerProps.itemCount property

总行数（必填）

## Signature

```typescript
itemCount: number;
```

### itemheight

# ScrollerProps.itemHeight property

每行高度（像素，必填）

## Signature

```typescript
itemHeight: number;
```

### onvisiblerowschange

# ScrollerProps.onVisibleRowsChange property

可见行变化时触发，参数为可见行索引与对应插槽名列表

## Signature

```typescript
onVisibleRowsChange?: (visibleRows: { index: number; slotName: string }[]) => void;
```
