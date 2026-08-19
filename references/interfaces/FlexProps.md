# FlexProps interface

布局容器：灵活的 Flex 布局容器

## Signature

```typescript
export interface FlexProps extends StyleProps 
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

[alignX?](./FlexProps.md)


</td><td>


</td><td>

'start' \| 'center' \| 'end'


</td><td>

_(Optional)_ 主轴对齐方式（水平）


</td></tr>
<tr><td>

[alignY?](./FlexProps.md)


</td><td>


</td><td>

'start' \| 'center' \| 'end' \| 'stretch'


</td><td>

_(Optional)_ 交叉轴对齐方式（垂直）


</td></tr>
<tr><td>

[children?](./FlexProps.md)


</td><td>


</td><td>

any


</td><td>

_(Optional)_ 子节点


</td></tr>
<tr><td>

[classes?](./FlexProps.md)


</td><td>


</td><td>

string\[\]


</td><td>

_(Optional)_ 附加的样式 class 名列表


</td></tr>
<tr><td>

[direction?](./FlexProps.md)


</td><td>


</td><td>

'column' \| 'column-reverse' \| 'row' \| 'row-reverse'


</td><td>

_(Optional)_ 主轴方向：row 水平 / column 垂直（含反向）


</td></tr>
<tr><td>

[gap?](./FlexProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 子元素间距（像素）


</td></tr>
<tr><td>

[onClick?](./FlexProps.md)


</td><td>


</td><td>

() =&gt; void


</td><td>

_(Optional)_ 点击容器时触发


</td></tr>
</tbody></table>

---

## 属性详情

### alignx

# FlexProps.alignX property

主轴对齐方式（水平）

## Signature

```typescript
alignX?: 'start' | 'center' | 'end';
```

### aligny

# FlexProps.alignY property

交叉轴对齐方式（垂直）

## Signature

```typescript
alignY?: 'start' | 'center' | 'end' | 'stretch';
```

### children

# FlexProps.children property

子节点

## Signature

```typescript
children?: any;
```

### classes

# FlexProps.classes property

附加的样式 class 名列表

## Signature

```typescript
classes?: string[];
```

### direction

# FlexProps.direction property

主轴方向：row 水平 / column 垂直（含反向）

## Signature

```typescript
direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
```

### gap

# FlexProps.gap property

子元素间距（像素）

## Signature

```typescript
gap?: number;
```

### onclick

# FlexProps.onClick property

点击容器时触发

## Signature

```typescript
onClick?: () => void;
```
