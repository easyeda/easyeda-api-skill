# ISYS\_HelpMethodDetail interface

Help 查询返回的方法详情

## Signature

```typescript
interface ISYS_HelpMethodDetail
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

[deprecated?](./ISYS_HelpMethodDetail.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 方法废弃说明

</td></tr>
<tr><td>

[example?](./ISYS_HelpMethodDetail.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 使用示例

</td></tr>
<tr><td>

[isAsync?](./ISYS_HelpMethodDetail.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 方法是否异步（返回 Promise，调用时需 `await`<!-- -->）

</td></tr>
<tr><td>

[params?](./ISYS_HelpMethodDetail.md)

</td><td>

</td><td>

Array&lt;{ name: string; type?: string; description?: string; required?: boolean; deprecated?: string; }&gt;

</td><td>

_(Optional)_ 入参列表

</td></tr>
<tr><td>

[remarks?](./ISYS_HelpMethodDetail.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 方法说明

</td></tr>
<tr><td>

[returns?](./ISYS_HelpMethodDetail.md)

</td><td>

</td><td>

\{ type?: string; description?: string \}

</td><td>

_(Optional)_ 返回值

</td></tr>
<tr><td>

[title?](./ISYS_HelpMethodDetail.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 方法标题

</td></tr>
</tbody></table>

---

## 方法详情

### deprecated

# ISYS\_HelpMethodDetail.deprecated property

方法废弃说明

## Signature

```typescript
deprecated?: string;
```

### example

# ISYS\_HelpMethodDetail.example property

使用示例

## Signature

```typescript
example?: string;
```

### isasync

# ISYS\_HelpMethodDetail.isAsync property

方法是否异步（返回 Promise，调用时需 `await`<!-- -->）

## Signature

```typescript
isAsync?: boolean;
```

### params

# ISYS\_HelpMethodDetail.params property

入参列表

## Signature

```typescript
params?: Array<{
		name: string;
		type?: string;
		description?: string;
		required?: boolean;
		deprecated?: string;
	}>;
```

### remarks

# ISYS\_HelpMethodDetail.remarks property

方法说明

## Signature

```typescript
remarks?: string;
```

### returns

# ISYS\_HelpMethodDetail.returns property

返回值

## Signature

```typescript
returns?: { type?: string; description?: string };
```

### title

# ISYS\_HelpMethodDetail.title property

方法标题

## Signature

```typescript
title?: string;
```
