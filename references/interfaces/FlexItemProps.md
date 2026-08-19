# FlexItemProps interface

Flex 子项：Flex 布局中的单个子元素

## Signature

```typescript
export interface FlexItemProps extends StyleProps 
```
**Extends:** [StyleProps](./StyleProps.md)

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

[children?](./FlexItemProps.md)


</td><td>


</td><td>

any


</td><td>

_(Optional)_ 子节点


</td></tr>
<tr><td>

[flexRatio?](./FlexItemProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 弹性占比（flex 生长因子）


</td></tr>
<tr><td>

[onClick?](./FlexItemProps.md)


</td><td>


</td><td>

() =&gt; void


</td><td>

_(Optional)_ 点击子项时触发


</td></tr>
</tbody></table>

---

## 属性详情

### children

# FlexItemProps.children property

子节点

## Signature

```typescript
children?: any;
```

### flexratio

# FlexItemProps.flexRatio property

弹性占比（flex 生长因子）

## Signature

```typescript
flexRatio?: number;
```

### onclick

# FlexItemProps.onClick property

点击子项时触发

## Signature

```typescript
onClick?: () => void;
```
