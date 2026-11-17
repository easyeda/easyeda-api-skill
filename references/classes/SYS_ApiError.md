# SYS\_ApiError class

扩展 API 错误

## Signature

```typescript
class SYS_ApiError extends Error
```
**Extends:** Error

## Remarks

未实现、不支持或执行失败的接口统一抛出该错误，调用方可通过 `error instanceof SYS_ApiError && error.code === ESYS_ApiErrorCode.XXX` 精确判别

## Constructors

<table><thead><tr><th>

Constructor

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[(constructor)(code, message, details)](./SYS_ApiError.md)

</td><td>

</td><td>

创建扩展 API 错误

</td></tr>
</tbody></table>

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

[code](./SYS_ApiError.md)

</td><td>

`readonly`

</td><td>

[ESYS\_ApiErrorCode](../enums/ESYS_ApiErrorCode.md)

</td><td>

错误码

</td></tr>
<tr><td>

[details?](./SYS_ApiError.md)

</td><td>

`readonly`

</td><td>

Record&lt;string, unknown&gt;

</td><td>

_(Optional)_ 错误上下文，用于补充失败时的判定依据

</td></tr>
</tbody></table>

---

## 构造函数详情

### _constructor_

# SYS\_ApiError.(constructor)

创建扩展 API 错误

## Signature

```typescript
function constructor(code: ESYS_ApiErrorCode, message?: string, details?: Record<string, unknown>);
```

## Parameters

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

code

</td><td>

[ESYS\_ApiErrorCode](../enums/ESYS_ApiErrorCode.md)

</td><td>

错误码

</td></tr>
<tr><td>

message

</td><td>

string

</td><td>

_(Optional)_ 错误描述，默认与错误码一致

</td></tr>
<tr><td>

details

</td><td>

Record&lt;string, unknown&gt;

</td><td>

_(Optional)_ 错误上下文

</td></tr>
</tbody></table>


---

## 属性详情

### code

# SYS\_ApiError.code property

错误码

## Signature

```typescript
function readonly code: ESYS_ApiErrorCode;
```

### details

# SYS\_ApiError.details property

错误上下文，用于补充失败时的判定依据

## Signature

```typescript
function readonly details?: Record<string, unknown>;
```
