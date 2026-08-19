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

_(Optional)_ 是否显示边框


</td></tr>
<tr><td>

[expandEnable?](./ListProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否允许展开嵌套子项


</td></tr>
<tr><td>

[itemHeight?](./ListProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 列表项高度（像素）


</td></tr>
<tr><td>

[list](./ListProps.md)


</td><td>


</td><td>

[ListChildren](./ListChildren.md)<!-- -->\[\]


</td><td>

列表数据（必填）


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

是否显示边框

## Signature

```typescript
border?: boolean;
```

### expandenable

# ListProps.expandEnable property

是否允许展开嵌套子项

## Signature

```typescript
expandEnable?: boolean;
```

### itemheight

# ListProps.itemHeight property

列表项高度（像素）

## Signature

```typescript
itemHeight?: number;
```

### list

# ListProps.list property

列表数据（必填）

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
