# ELIB\_ProjectLibraryUpdateMode enum

工程库更新方式

## Signature

```typescript
enum ELIB_ProjectLibraryUpdateMode
```

## Enumeration Members

<table><thead><tr><th>

Member

</th><th>

Value

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

NAME

</td><td>

`'name'`

</td><td>

按名称匹配：类型一致且名称完全一致，在优先库路径中按顺序检索，取首个命中项更新

</td></tr>
<tr><td>

SOURCE

</td><td>

`'source'`

</td><td>

按来源匹配：沿用工程库对象自身记录的来源库（对象 UUID + 库路径）更新

</td></tr>
</tbody></table>