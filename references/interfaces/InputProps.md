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

_(Optional)_ 是否显示清除按钮


</td></tr>
<tr><td>

[clickBtn?](./InputProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否显示点击按钮


</td></tr>
<tr><td>

[disabled?](./InputProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否禁用输入


</td></tr>
<tr><td>

[dropDownList?](./InputProps.md)


</td><td>


</td><td>

[ListChildren](./ListChildren.md)<!-- -->\[\]


</td><td>

_(Optional)_ 下拉列表数据，提供时输入框可下拉选择


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

_(Optional)_ 附加到 input 元素的其他属性（键值对字符串）


</td></tr>
<tr><td>

[placeholder?](./InputProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 占位提示文本


</td></tr>
<tr><td>

[preText?](./InputProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 前缀文本


</td></tr>
<tr><td>

[readonly?](./InputProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否只读


</td></tr>
<tr><td>

[searchBtn?](./InputProps.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 是否显示搜索按钮


</td></tr>
<tr><td>

[testVal?](./InputProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 测试用校验值


</td></tr>
<tr><td>

[type](./InputProps.md)


</td><td>


</td><td>

'text' \| 'telephone' \| 'number' \| 'password' \| 'color' \| 'email'


</td><td>

输入框类型（必填）


</td></tr>
<tr><td>

[value?](./InputProps.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 当前输入值


</td></tr>
</tbody></table>

---

## 属性详情

### clearbtn

# InputProps.clearBtn property

是否显示清除按钮

## Signature

```typescript
clearBtn?: boolean;
```

### clickbtn

# InputProps.clickBtn property

是否显示点击按钮

## Signature

```typescript
clickBtn?: boolean;
```

### disabled

# InputProps.disabled property

是否禁用输入

## Signature

```typescript
disabled?: boolean;
```

### dropdownlist

# InputProps.dropDownList property

下拉列表数据，提供时输入框可下拉选择

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

附加到 input 元素的其他属性（键值对字符串）

## Signature

```typescript
otherAttr?: { [key: string]: string };
```

### placeholder

# InputProps.placeholder property

占位提示文本

## Signature

```typescript
placeholder?: string;
```

### pretext

# InputProps.preText property

前缀文本

## Signature

```typescript
preText?: string;
```

### readonly

# InputProps.readonly property

是否只读

## Signature

```typescript
readonly?: boolean;
```

### searchbtn

# InputProps.searchBtn property

是否显示搜索按钮

## Signature

```typescript
searchBtn?: boolean;
```

### testval

# InputProps.testVal property

测试用校验值

## Signature

```typescript
testVal?: string;
```

### type

# InputProps.type property

输入框类型（必填）

## Signature

```typescript
type: 'text' | 'telephone' | 'number' | 'password' | 'color' | 'email';
```

### value

# InputProps.value property

当前输入值

## Signature

```typescript
value?: string;
```
