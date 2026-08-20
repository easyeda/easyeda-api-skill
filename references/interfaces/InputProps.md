# InputProps interface

输入框组件：支持下拉、搜索、清除、前后缀等多种形态

## Signature

```typescript
export interface InputProps 
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

[clearBtn?](./InputProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether Show clear button


</td></tr>
<tr><td>

[clickBtn?](./InputProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether to show the click button


</td></tr>
<tr><td>

[disabled?](./InputProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether Disable input


</td></tr>
<tr><td>

[dropDownList?](./InputProps.md)


</td><td>


</td><td>

[ListChildren](./ListChildren.md)<!-- -->\[\]


</td><td>

_(Optional)_ Dropdown list data. When provided, the input box can select from a dropdown


</td></tr>
<tr><td>

[onAddClick?](./InputProps.md)


</td><td>


</td><td>

(data: string) =&gt; void


</td><td>

_(Optional)_ 点击添加按钮时触发，参数为当前输入值


</td></tr>
<tr><td>

[onBlur?](./InputProps.md)


</td><td>


</td><td>

(data: string) =&gt; void


</td><td>

_(Optional)_ 输入框失焦时触发，参数为当前输入值


</td></tr>
<tr><td>

[onChange?](./InputProps.md)


</td><td>


</td><td>

(data: string) =&gt; void


</td><td>

_(Optional)_ 输入内容变化时触发，参数为最新值


</td></tr>
<tr><td>

[onClick?](./InputProps.md)


</td><td>


</td><td>

() =&gt; void


</td><td>

_(Optional)_ 点击输入框时触发


</td></tr>
<tr><td>

[onFilterClick?](./InputProps.md)


</td><td>


</td><td>

(data: string) =&gt; void


</td><td>

_(Optional)_ 点击筛选按钮时触发，参数为当前输入值


</td></tr>
<tr><td>

[onSearchClick?](./InputProps.md)


</td><td>


</td><td>

(data: string) =&gt; void


</td><td>

_(Optional)_ 点击搜索按钮时触发，参数为当前输入值


</td></tr>
<tr><td>

[otherAttr?](./InputProps.md)


</td><td>


</td><td>

\{ \[key: string\]: string \}


</td><td>

_(Optional)_ Other attributes attached to the input element (key-value pair string)


</td></tr>
<tr><td>

[placeholder?](./InputProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Placeholder text


</td></tr>
<tr><td>

[preText?](./InputProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Prefix text


</td></tr>
<tr><td>

[readonly?](./InputProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is read-only


</td></tr>
<tr><td>

[searchBtn?](./InputProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether Show search button


</td></tr>
<tr><td>

[testVal?](./InputProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Validation value for testing


</td></tr>
<tr><td>

[type](./InputProps.md)


</td><td>


</td><td>

'text' \| 'telephone' \| 'number' \| 'password' \| 'color' \| 'email'


</td><td>

Input box type (required)


</td></tr>
<tr><td>

[value?](./InputProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Current input value


</td></tr>
</tbody></table>

---

## 属性详情

### clearbtn

# InputProps.clearBtn property

Whether Show clear button

## Signature

```typescript
clearBtn?: boolean;
```

### clickbtn

# InputProps.clickBtn property

Whether to show the click button

## Signature

```typescript
clickBtn?: boolean;
```

### disabled

# InputProps.disabled property

Whether Disable input

## Signature

```typescript
disabled?: boolean;
```

### dropdownlist

# InputProps.dropDownList property

Dropdown list data. When provided, the input box can select from a dropdown

## Signature

```typescript
dropDownList?: ListChildren[];
```

### onaddclick

# InputProps.onAddClick property

点击添加按钮时触发，参数为当前输入值

## Signature

```typescript
onAddClick?: (data: string) => void;
```

### onblur

# InputProps.onBlur property

输入框失焦时触发，参数为当前输入值

## Signature

```typescript
onBlur?: (data: string) => void;
```

### onchange

# InputProps.onChange property

输入内容变化时触发，参数为最新值

## Signature

```typescript
onChange?: (data: string) => void;
```

### onclick

# InputProps.onClick property

点击输入框时触发

## Signature

```typescript
onClick?: () => void;
```

### onfilterclick

# InputProps.onFilterClick property

点击筛选按钮时触发，参数为当前输入值

## Signature

```typescript
onFilterClick?: (data: string) => void;
```

### onsearchclick

# InputProps.onSearchClick property

点击搜索按钮时触发，参数为当前输入值

## Signature

```typescript
onSearchClick?: (data: string) => void;
```

### otherattr

# InputProps.otherAttr property

Other attributes attached to the input element (key-value pair string)

## Signature

```typescript
otherAttr?: { [key: string]: string };
```

### placeholder

# InputProps.placeholder property

Placeholder text

## Signature

```typescript
placeholder?: string;
```

### pretext

# InputProps.preText property

Prefix text

## Signature

```typescript
preText?: string;
```

### readonly

# InputProps.readonly property

Whether it is read-only

## Signature

```typescript
readonly?: boolean;
```

### searchbtn

# InputProps.searchBtn property

Whether Show search button

## Signature

```typescript
searchBtn?: boolean;
```

### testval

# InputProps.testVal property

Validation value for testing

## Signature

```typescript
testVal?: string;
```

### type

# InputProps.type property

Input box type (required)

## Signature

```typescript
type: 'text' | 'telephone' | 'number' | 'password' | 'color' | 'email';
```

### value

# InputProps.value property

Current input value

## Signature

```typescript
value?: string;
```
