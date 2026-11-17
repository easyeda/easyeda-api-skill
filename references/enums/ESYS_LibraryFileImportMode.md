# ESYS\_LibraryFileImportMode enum

库文件导入方式

## Signature

```typescript
enum ESYS_LibraryFileImportMode
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

CREATE

</td><td>

`'create'`

</td><td>

新建库：目标位置原先没有同名库，本次导入新建了一个库

</td></tr>
<tr><td>

OVERWRITE

</td><td>

`'overwrite'`

</td><td>

覆盖库：目标位置已存在同名库，本次导入覆盖了该库的原有内容

</td></tr>
</tbody></table>