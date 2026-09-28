# EDMT\_ProjectFileFormat enum

工程文件格式

## Signature

```typescript
enum EDMT_ProjectFileFormat
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

EPRJ2

</td><td>

`'eprj2'`

</td><td>

eprj2（单文件数据库格式）

</td></tr>
<tr><td>

EPRJ3

</td><td>

`'eprj3'`

</td><td>

eprj3（文件夹 + 多文件格式）

</td></tr>
</tbody></table>

## Remarks

用于指定创建工程时的落盘文件格式：

- `EPRJ2`<!-- -->：单文件数据库格式（SQLite），兼容性好，但不便于 Git / 云存储同步 - `EPRJ3`<!-- -->：文件夹 + 多文件格式（JSON），便于 Git 管理与文件同步（Git friendly）

仅在客户端半离线 / 全离线模式创建工程时生效，在线环境由服务端创建，将忽略该参数