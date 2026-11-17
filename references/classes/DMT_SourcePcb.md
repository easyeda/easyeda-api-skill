# DMT\_SourcePcb class

文档树 / 源数据 PCB 类

## Signature

```typescript
class DMT_SourcePcb
```

## Remarks

按名称寻址操作工程源数据的 PCB，不依赖前端已打开的 PCB

\*\*当前为占位实现\*\*：所有方法均返回 [NOT\_IMPLEMENTED](../enums/ESCH_SourceErrorCode.md)<!-- -->； 方法 JSDoc 中列出的业务错误码是未来实现目标，当前不会返回

本类接口是强制异步落盘的：调用返回并不表示数据已落盘生效， 紧接着调用其它接口（尤其是读取类）可能拿到尚未更新的数据