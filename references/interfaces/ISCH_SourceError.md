# ISCH\_SourceError interface

源数据接口错误信息

## Signature

```typescript
interface ISCH_SourceError
```

## Remarks

`message` 必须为业务明文，禁止出现 `undefined`<!-- -->、`null`<!-- -->、内部异常栈或空字符串

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

[code](./ISCH_SourceError.md)

</td><td>

</td><td>

[ESCH\_SourceErrorCode](../enums/ESCH_SourceErrorCode.md)

</td><td>

错误码

</td></tr>
<tr><td>

[message](./ISCH_SourceError.md)

</td><td>

</td><td>

string

</td><td>

错误描述

</td></tr>
</tbody></table>

---

## 属性详情

### code

# ISCH\_SourceError.code property

错误码

## Signature

```typescript
code: ESCH_SourceErrorCode;
```

### message

# ISCH\_SourceError.message property

错误描述

## Signature

```typescript
message: string;
```
