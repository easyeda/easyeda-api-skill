# BoardProps interface

分组面板：带标题的可折叠/分组容器

## Signature

```typescript
export interface BoardProps 
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

[bgColor?](./BoardProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Background color. Accepts any CSS color value


</td></tr>
<tr><td>

[children?](./BoardProps.md)


</td><td>


</td><td>

any


</td><td>

_(Optional)_ Panel content child nodes


</td></tr>
<tr><td>

[onClick?](./BoardProps.md)


</td><td>


</td><td>

() =&gt; void


</td><td>

_(Optional)_ 点击面板时触发


</td></tr>
<tr><td>

[padding?](./BoardProps.md)


</td><td>


</td><td>

number\[\]


</td><td>

_(Optional)_ Padding (CSS shorthand array)


</td></tr>
<tr><td>

[title](./BoardProps.md)


</td><td>


</td><td>

string


</td><td>

Title text ( required)


</td></tr>
</tbody></table>

---

## 属性详情

### bgcolor

# BoardProps.bgColor property

Background color. Accepts any CSS color value

## Signature

```typescript
bgColor?: string;
```

### children

# BoardProps.children property

Panel content child nodes

## Signature

```typescript
children?: any;
```

### onclick

# BoardProps.onClick property

点击面板时触发

## Signature

```typescript
onClick?: () => void;
```

### padding

# BoardProps.padding property

Padding (CSS shorthand array)

## Signature

```typescript
padding?: number[];
```

### title

# BoardProps.title property

Title text ( required)

## Signature

```typescript
title: string;
```
