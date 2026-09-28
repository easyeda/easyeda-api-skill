# ISYS\_ExternalApiHelp interface

扩展注入的上层接口 Help 元数据

## Signature

```typescript
interface ISYS_ExternalApiHelp
```

## Remarks

注册 external 接口时可附带本元数据，供 Help 框架渐进式披露； AI 可通过 `eda.sys_Help.help('external', namespace, apiName)` 查询

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

[description?](./ISYS_ExternalApiHelp.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 详细说明

</td></tr>
<tr><td>

[example?](./ISYS_ExternalApiHelp.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 使用示例

</td></tr>
<tr><td>

[params?](./ISYS_ExternalApiHelp.md)

</td><td>

</td><td>

Array&lt;{ name: string; type?: string; description?: string; required?: boolean }&gt;

</td><td>

_(Optional)_ 入参说明

</td></tr>
<tr><td>

[returns?](./ISYS_ExternalApiHelp.md)

</td><td>

</td><td>

\{ type?: string; description?: string \}

</td><td>

_(Optional)_ 返回值说明

</td></tr>
<tr><td>

[title?](./ISYS_ExternalApiHelp.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 接口标题

</td></tr>
</tbody></table>

---

## 属性详情

### description

# ISYS\_ExternalApiHelp.description property

详细说明

## Signature

```typescript
description?: string;
```

### example

# ISYS\_ExternalApiHelp.example property

使用示例

## Signature

```typescript
example?: string;
```

### params

# ISYS\_ExternalApiHelp.params property

入参说明

## Signature

```typescript
params?: Array<{ name: string; type?: string; description?: string; required?: boolean }>;
```

### returns

# ISYS\_ExternalApiHelp.returns property

返回值说明

## Signature

```typescript
returns?: { type?: string; description?: string };
```

### title

# ISYS\_ExternalApiHelp.title property

接口标题

## Signature

```typescript
title?: string;
```
