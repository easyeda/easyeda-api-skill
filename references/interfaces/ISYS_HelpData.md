# ISYS\_HelpData interface

lc-build 生成的 API jsonSchema（d.ts 的 JSON 形态）

## Signature

```typescript
interface ISYS_HelpData
```

## Remarks

结构：`$defs.{类型名}.{...jsonSchema}`<!-- -->，类的方法位于 `properties` 下

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

[$defs?](./ISYS_HelpData.md)

</td><td>

</td><td>

Record&lt;string, any&gt;

</td><td>

_(Optional)_ 类型定义表：类型名 -<!-- -->&gt; 类型 schema

</td></tr>
<tr><td>

[$schema?](./ISYS_HelpData.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ JSON Schema 版本

</td></tr>
</tbody></table>

---

## 属性详情

### _defs

# ISYS\_HelpData.$defs property

类型定义表：类型名 -<!-- -->&gt; 类型 schema

## Signature

```typescript
$defs?: Record<string, any>;
```

### _schema

# ISYS\_HelpData.$schema property

JSON Schema 版本

## Signature

```typescript
$schema?: string;
```
