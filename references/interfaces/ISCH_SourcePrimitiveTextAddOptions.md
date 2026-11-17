# ISCH\_SourcePrimitiveTextAddOptions interface

文本创建选项

## Signature

```typescript
interface ISCH_SourcePrimitiveTextAddOptions extends ISCH_SourceIdentity
```
**Extends:** [ISCH\_SourceIdentity](./ISCH_SourceIdentity.md)

## Remarks

字体、字号、对齐方式与颜色等样式参数\*\*故意不提供\*\*：

- Source 接口面向 AI / CLI，保持极简参数集以降低调用与纠错成本 - 文本样式由内部按现有规则决定 - 需要精确控制样式时，使用旧图元 API [SCH\_PrimitiveText](../classes/SCH_PrimitiveText.md) 或编辑器界面

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

[rotation?](./ISCH_SourcePrimitiveTextAddOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 旋转角度，缺省为 `0`

</td></tr>
<tr><td>

[text](./ISCH_SourcePrimitiveTextAddOptions.md)

</td><td>

</td><td>

string

</td><td>

文本内容

</td></tr>
<tr><td>

[x](./ISCH_SourcePrimitiveTextAddOptions.md)

</td><td>

</td><td>

number

</td><td>

文本锚点 X 坐标

</td></tr>
<tr><td>

[y](./ISCH_SourcePrimitiveTextAddOptions.md)

</td><td>

</td><td>

number

</td><td>

文本锚点 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### rotation

# ISCH\_SourcePrimitiveTextAddOptions.rotation property

旋转角度，缺省为 `0`

## Signature

```typescript
rotation?: number;
```

### text

# ISCH\_SourcePrimitiveTextAddOptions.text property

文本内容

## Signature

```typescript
text: string;
```

### x

# ISCH\_SourcePrimitiveTextAddOptions.x property

文本锚点 X 坐标

## Signature

```typescript
x: number;
```

### y

# ISCH\_SourcePrimitiveTextAddOptions.y property

文本锚点 Y 坐标

## Signature

```typescript
y: number;
```
