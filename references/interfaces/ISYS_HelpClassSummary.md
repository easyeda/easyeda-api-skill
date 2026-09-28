# ISYS\_HelpClassSummary interface

由 help 查询返回的类摘要

## Signature

```typescript
interface ISYS_HelpClassSummary
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

[deprecated?](./ISYS_HelpClassSummary.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 类废弃说明

</td></tr>
<tr><td>

[methods](./ISYS_HelpClassSummary.md)

</td><td>

</td><td>

Array&lt;string \| { name: string; comment?: string }&gt;

</td><td>

方法列表

</td></tr>
<tr><td>

[remarks?](./ISYS_HelpClassSummary.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 类说明

</td></tr>
<tr><td>

[title?](./ISYS_HelpClassSummary.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 类标题

</td></tr>
<tr><td>

[titles?](./ISYS_HelpClassSummary.md)

</td><td>

</td><td>

Record&lt;string, string \| undefined&gt;

</td><td>

_(Optional)_ 各接口标题（external 场景，键为接口名）

</td></tr>
</tbody></table>

---

## 属性详情

### deprecated

# ISYS\_HelpClassSummary.deprecated property

类废弃说明

## Signature

```typescript
deprecated?: string;
```

### remarks

# ISYS\_HelpClassSummary.remarks property

类说明

## Signature

```typescript
remarks?: string;
```

### title

# ISYS\_HelpClassSummary.title property

类标题

## Signature

```typescript
title?: string;
```

### titles

# ISYS\_HelpClassSummary.titles property

各接口标题（external 场景，键为接口名）

## Signature

```typescript
titles?: Record<string, string | undefined>;
```


---

## 方法详情

### methods

# ISYS\_HelpClassSummary.methods property

方法列表

## Signature

```typescript
methods: Array<string | { name: string; comment?: string }>;
```

## Remarks

类场景为方法条目 `{ name, comment }`<!-- -->；external 场景为接口名 `string`<!-- -->（无注释结构）
