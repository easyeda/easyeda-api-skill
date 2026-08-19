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

_(Optional)_ 背景颜色，接受任意 CSS 颜色值


</td></tr>
<tr><td>

[children?](./BoardProps.md)


</td><td>


</td><td>

any


</td><td>

_(Optional)_ 面板内容子节点


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

_(Optional)_ 内边距（CSS 简写数组）


</td></tr>
<tr><td>

[title](./BoardProps.md)


</td><td>


</td><td>

string


</td><td>

标题文本（必填）


</td></tr>
</tbody></table>

---

## 属性详情

### bgcolor

# BoardProps.bgColor property

背景颜色，接受任意 CSS 颜色值

## Signature

```typescript
bgColor?: string;
```

### children

# BoardProps.children property

面板内容子节点

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

内边距（CSS 简写数组）

## Signature

```typescript
padding?: number[];
```

### title

# BoardProps.title property

标题文本（必填）

## Signature

```typescript
title: string;
```
