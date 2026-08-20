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

_(Optional)_ Main axis alignment (horizontal)


</td></tr>
<tr><td>

[alignY?](./FlexProps.md)


</td><td>


</td><td>

'start' \| 'center' \| 'end' \| 'stretch'


</td><td>

_(Optional)_ Cross axis alignment (vertical)


</td></tr>
<tr><td>

[children?](./FlexProps.md)


</td><td>


</td><td>

any


</td><td>

_(Optional)_ Child node


</td></tr>
<tr><td>

[classes?](./FlexProps.md)


</td><td>


</td><td>

string\[\]


</td><td>

_(Optional)_ List of additional style class names


</td></tr>
<tr><td>

[direction?](./FlexProps.md)


</td><td>


</td><td>

'column' \| 'column-reverse' \| 'row' \| 'row-reverse'


</td><td>

_(Optional)_ Main axis direction: row (horizontal) / column (vertical, including reverse)


</td></tr>
<tr><td>

[gap?](./FlexProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Gap between child elements (pixels)


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

Main axis alignment (horizontal)

## Signature

```typescript
alignX?: 'start' | 'center' | 'end';
```

### aligny

# FlexProps.alignY property

Cross axis alignment (vertical)

## Signature

```typescript
alignY?: 'start' | 'center' | 'end' | 'stretch';
```

### children

# FlexProps.children property

Child node

## Signature

```typescript
children?: any;
```

### classes

# FlexProps.classes property

List of additional style class names

## Signature

```typescript
classes?: string[];
```

### direction

# FlexProps.direction property

Main axis direction: row (horizontal) / column (vertical, including reverse)

## Signature

```typescript
direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
```

### gap

# FlexProps.gap property

Gap between child elements (pixels)

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
