# ESYS\_ApiErrorCode enum

扩展 API 错误码

## Signature

```typescript
enum ESYS_ApiErrorCode
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

CONFLICT

</td><td>

`'CONFLICT'`

</td><td>

状态冲突，与当前已有状态互斥

</td></tr>
<tr><td>

DOCUMENT\_NOT\_ACTIVE

</td><td>

`'DOCUMENT_NOT_ACTIVE'`

</td><td>

当前文档未激活，或文档类型与接口不匹配

</td></tr>
<tr><td>

DOCUMENT\_NOT\_READY

</td><td>

`'DOCUMENT_NOT_READY'`

</td><td>

文档加载中或未就绪

</td></tr>
<tr><td>

GROUP\_NOT\_FOUND

</td><td>

`'GROUP_NOT_FOUND'`

</td><td>

目标命令组不存在

</td></tr>
<tr><td>

INCOMPLETE\_RESULT

</td><td>

`'INCOMPLETE_RESULT'`

</td><td>

结果不完整，调用方必须按「未通过」处理

</td></tr>
<tr><td>

INTERNAL\_ERROR

</td><td>

`'INTERNAL_ERROR'`

</td><td>

未分类的内部异常

</td></tr>
<tr><td>

INVALID\_PARAM

</td><td>

`'INVALID_PARAM'`

</td><td>

参数缺失或非法

</td></tr>
<tr><td>

NOT\_FOUND

</td><td>

`'NOT_FOUND'`

</td><td>

目标对象或结果不存在

</td></tr>
<tr><td>

NOTHING\_TO\_REDO

</td><td>

`'NOTHING_TO_REDO'`

</td><td>

无可重做的内容

</td></tr>
<tr><td>

NOTHING\_TO\_UNDO

</td><td>

`'NOTHING_TO_UNDO'`

</td><td>

无可撤销的内容

</td></tr>
<tr><td>

UNSUPPORTED

</td><td>

`'UNSUPPORTED'`

</td><td>

当前版本不支持该接口，或接口尚未实现

</td></tr>
</tbody></table>

## Remarks

用于精确判别接口失败原因