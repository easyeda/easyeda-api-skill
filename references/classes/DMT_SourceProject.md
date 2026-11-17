# DMT\_SourceProject class

文档树 / 源数据工程类

## Signature

```typescript
class DMT_SourceProject
```

## Remarks

按数据标识直接操作工程源数据，虚拟打开工程后即可针对其下具体文档进行操作，不依赖前端是否已打开该工程

\*\*当前为占位实现\*\*：所有方法均返回 [NOT\_IMPLEMENTED](../enums/ESCH_SourceErrorCode.md)<!-- -->； 方法 JSDoc 中列出的业务错误码是未来实现目标，当前不会返回

本类接口是强制异步落盘的：调用返回并不表示数据已落盘生效， 紧接着调用其它接口（尤其是读取类）可能拿到尚未更新的数据