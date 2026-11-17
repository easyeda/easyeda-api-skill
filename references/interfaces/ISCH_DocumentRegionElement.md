# ISCH\_DocumentRegionElement interface

区域查询结果条目

## Signature

```typescript
interface ISCH_DocumentRegionElement
```

## Remarks

只返回粗粒度业务属性，不含字体、颜色、线型；图形元素返回 [geometry](./ISCH_DocumentRegionGeometry.md)<!-- -->，文本元素返回 `text`<!-- -->。 `NetLabel` 的 [primitiveId](./ISCH_DocumentRegionElement.md) 可直接用于 `sch_SourcePrimitiveAttribute.updateNetLabel` / `removeNetLabel`<!-- -->； `NetFlag` 的 [primitiveId](./ISCH_DocumentRegionElement.md) 可直接用于 `sch_SourcePrimitiveComponent.removeNetFlag`<!-- -->。

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

[designator?](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 位号（仅器件元素携带）

</td></tr>
<tr><td>

[geometry?](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

[ISCH\_DocumentRegionGeometry](./ISCH_DocumentRegionGeometry.md)

</td><td>

_(Optional)_ 图形几何（仅矩形、圆形、圆弧、多边形元素携带）

</td></tr>
<tr><td>

[line?](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

Array&lt;Array&lt;number&gt;&gt;

</td><td>

_(Optional)_ 折线点序列（仅导线元素携带）

</td></tr>
<tr><td>

[mirror?](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否镜像（器件、网络符号携带）

</td></tr>
<tr><td>

[net?](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 网络名称（导线、网络标签、网络符号携带）

- 导线：工程 AST 的组级规范名（AST 未就绪时退回导线组保存的网络名），可能包含跨页前缀 / I/N 显示改写； - 网络标签：该标签自身的源码原值（保留 `~...~` 上划线标记），与所属导线的组级名可能不同； - 网络符号：`Name` 优先，空时回退 `Global Net Name`<!-- -->。

需要导线的组级规范名时，用挂在导线上的 NetLabel 的 `parentId` 关联对应的 `Wire` 条目。

</td></tr>
<tr><td>

[parentId?](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 父图元 ID（仅挂在导线 / 总线上的网络标签携带，值为所属导线组 ID；悬浮标签省略该字段）

</td></tr>
<tr><td>

[primitiveId](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

string

</td><td>

图元 ID

</td></tr>
<tr><td>

[rotation?](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 旋转角度（器件、网络符号、网络标签携带）

</td></tr>
<tr><td>

[text?](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 文本内容（文本、网络标签携带）

</td></tr>
<tr><td>

[type](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

[ESCH\_SourceElementType](../enums/ESCH_SourceElementType.md)

</td><td>

元素类型

</td></tr>
<tr><td>

[x?](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 锚点 X 坐标（器件、网络符号、网络标签携带）

</td></tr>
<tr><td>

[y?](./ISCH_DocumentRegionElement.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 锚点 Y 坐标（器件、网络符号、网络标签携带）

</td></tr>
</tbody></table>

---

## 属性详情

### designator

# ISCH\_DocumentRegionElement.designator property

位号（仅器件元素携带）

## Signature

```typescript
designator?: string;
```

### geometry

# ISCH\_DocumentRegionElement.geometry property

图形几何（仅矩形、圆形、圆弧、多边形元素携带）

## Signature

```typescript
geometry?: ISCH_DocumentRegionGeometry;
```

### line

# ISCH\_DocumentRegionElement.line property

折线点序列（仅导线元素携带）

## Signature

```typescript
line?: Array<Array<number>>;
```

### mirror

# ISCH\_DocumentRegionElement.mirror property

是否镜像（器件、网络符号携带）

## Signature

```typescript
mirror?: boolean;
```

### net

# ISCH\_DocumentRegionElement.net property

网络名称（导线、网络标签、网络符号携带）

- 导线：工程 AST 的组级规范名（AST 未就绪时退回导线组保存的网络名），可能包含跨页前缀 / I/N 显示改写； - 网络标签：该标签自身的源码原值（保留 `~...~` 上划线标记），与所属导线的组级名可能不同； - 网络符号：`Name` 优先，空时回退 `Global Net Name`<!-- -->。

需要导线的组级规范名时，用挂在导线上的 NetLabel 的 `parentId` 关联对应的 `Wire` 条目。

## Signature

```typescript
net?: string;
```

### parentid

# ISCH\_DocumentRegionElement.parentId property

父图元 ID（仅挂在导线 / 总线上的网络标签携带，值为所属导线组 ID；悬浮标签省略该字段）

## Signature

```typescript
parentId?: string;
```

### primitiveid

# ISCH\_DocumentRegionElement.primitiveId property

图元 ID

## Signature

```typescript
primitiveId: string;
```

### rotation

# ISCH\_DocumentRegionElement.rotation property

旋转角度（器件、网络符号、网络标签携带）

## Signature

```typescript
rotation?: number;
```

### text

# ISCH\_DocumentRegionElement.text property

文本内容（文本、网络标签携带）

## Signature

```typescript
text?: string;
```

### type

# ISCH\_DocumentRegionElement.type property

元素类型

## Signature

```typescript
type: ESCH_SourceElementType;
```

### x

# ISCH\_DocumentRegionElement.x property

锚点 X 坐标（器件、网络符号、网络标签携带）

## Signature

```typescript
x?: number;
```

### y

# ISCH\_DocumentRegionElement.y property

锚点 Y 坐标（器件、网络符号、网络标签携带）

## Signature

```typescript
y?: number;
```
