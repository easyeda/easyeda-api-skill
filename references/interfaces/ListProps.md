# ListProps interface

列表组件：支持多级嵌套、图标、展开的列表

## Signature

```typescript
export interface ListProps 
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

[border?](./ListProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether to show the border


</td></tr>
<tr><td>

[expandEnable?](./ListProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether nested child items are allowed to expand


</td></tr>
<tr><td>

[itemHeight?](./ListProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ List item height (pixels)


</td></tr>
<tr><td>

[list](./ListProps.md)


</td><td>


</td><td>

[ListChildren](./ListChildren.md)<!-- -->\[\]


</td><td>

List data ( required)


</td></tr>
<tr><td>

[onItemClick?](./ListProps.md)


</td><td>


</td><td>

(id: string, item: [ListChildren](./ListChildren.md)<!-- -->) =&gt; void


</td><td>

_(Optional)_ 点击列表项时触发，参数为 id 与列表项


</td></tr>
<tr><td>

[onItemContextmenu?](./ListProps.md)


</td><td>


</td><td>

(id: string) =&gt; void


</td><td>

_(Optional)_ 右键点击列表项时触发，参数为 id


</td></tr>
<tr><td>

[onItemDblclick?](./ListProps.md)


</td><td>


</td><td>

(id: string) =&gt; void


</td><td>

_(Optional)_ 双击列表项时触发，参数为 id


</td></tr>
</tbody></table>

---

## 属性详情

### border

# ListProps.border property

Whether to show the border

## Signature

```typescript
border?: boolean;
```

### expandenable

# ListProps.expandEnable property

Whether nested child items are allowed to expand

## Signature

```typescript
expandEnable?: boolean;
```

### itemheight

# ListProps.itemHeight property

List item height (pixels)

## Signature

```typescript
itemHeight?: number;
```

### list

# ListProps.list property

List data ( required)

## Signature

```typescript
list: ListChildren[];
```

### onitemclick

# ListProps.onItemClick property

点击列表项时触发，参数为 id 与列表项

## Signature

```typescript
onItemClick?: (id: string, item: ListChildren) => void;
```

### onitemcontextmenu

# ListProps.onItemContextmenu property

右键点击列表项时触发，参数为 id

## Signature

```typescript
onItemContextmenu?: (id: string) => void;
```

### onitemdblclick

# ListProps.onItemDblclick property

双击列表项时触发，参数为 id

## Signature

```typescript
onItemDblclick?: (id: string) => void;
```
