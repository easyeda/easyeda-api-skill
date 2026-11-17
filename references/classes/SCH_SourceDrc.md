# SCH\_SourceDrc class

原理图 &amp; 符号 / 源数据 DRC 类

## Signature

```typescript
class SCH_SourceDrc
```

## Remarks

提供源数据层的业务规则检查，判定阈值属内部逻辑，不进参数、不返回差值

\*\*当前为占位实现\*\*：所有方法均返回 [NOT\_IMPLEMENTED](../enums/ESCH_SourceErrorCode.md)<!-- -->； 方法 JSDoc 中列出的业务错误码是未来实现目标，当前不会返回

本类接口是强制异步落盘的：调用返回并不表示数据已落盘生效， 紧接着调用其它接口（尤其是读取类）可能拿到尚未更新的数据