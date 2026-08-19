# RadioGroupProps interface

单选组组件：一组互斥的单选选项

## Signature

```typescript
export interface RadioGroupProps 
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

[gap?](./RadioGroupProps.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 选项间距（像素）


</td></tr>
<tr><td>

[group](./RadioGroupProps.md)


</td><td>


</td><td>

[RadioItem](./RadioItem.md)<!-- -->\[\]


</td><td>

选项列表（必填）


</td></tr>
<tr><td>

[lineBreak?](./RadioGroupProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否换行排列


</td></tr>
<tr><td>

[onChange?](./RadioGroupProps.md)


</td><td>


</td><td>

(value: string) =&gt; void


</td><td>

_(Optional)_ 选中值变化时触发，参数为选中项的值


</td></tr>
<tr><td>

[onlyChangeByBox?](./RadioGroupProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否仅通过点击单选框本身来改变状态


</td></tr>
<tr><td>

[selectedValue?](./RadioGroupProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 当前选中的值


</td></tr>
</tbody></table>

---

## 属性详情

### gap

# RadioGroupProps.gap property

选项间距（像素）

## Signature

```typescript
gap?: number;
```

### group

# RadioGroupProps.group property

选项列表（必填）

## Signature

```typescript
group: RadioItem[];
```

### linebreak

# RadioGroupProps.lineBreak property

是否换行排列

## Signature

```typescript
lineBreak?: boolean;
```

### onchange

# RadioGroupProps.onChange property

选中值变化时触发，参数为选中项的值

## Signature

```typescript
onChange?: (value: string) => void;
```

### onlychangebybox

# RadioGroupProps.onlyChangeByBox property

是否仅通过点击单选框本身来改变状态

## Signature

```typescript
onlyChangeByBox?: boolean;
```

### selectedvalue

# RadioGroupProps.selectedValue property

当前选中的值

## Signature

```typescript
selectedValue?: string;
```
