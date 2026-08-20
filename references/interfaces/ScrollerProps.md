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

_(Optional)_ Number of extra buffered rows to render


</td></tr>
<tr><td>

[children?](./ScrollerProps.md)


</td><td>


</td><td>

any


</td><td>

_(Optional)_ Child node


</td></tr>
<tr><td>

[itemCount](./ScrollerProps.md)


</td><td>


</td><td>

number


</td><td>

Total row count (required)


</td></tr>
<tr><td>

[itemHeight](./ScrollerProps.md)


</td><td>


</td><td>

number


</td><td>

Height of each row (pixels, required)


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

Number of extra buffered rows to render

## Signature

```typescript
buffer?: number;
```

### children

# ScrollerProps.children property

Child node

## Signature

```typescript
children?: any;
```

### itemcount

# ScrollerProps.itemCount property

Total row count (required)

## Signature

```typescript
itemCount: number;
```

### itemheight

# ScrollerProps.itemHeight property

Height of each row (pixels, required)

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
