# SYS\_Setting class

系统 / 设置类

## Signature

```typescript
declare class SYS_Setting 
```

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[restoreDefault()](./SYS_Setting.md)


</td><td>


</td><td>

**_(BETA)_** 全局恢复默认设置


</td></tr>
</tbody></table>

---

## 方法详情

### restoredefault

# SYS\_Setting.restoreDefault() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

全局恢复默认设置

## Signature

```typescript
restoreDefault(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

将所有 EDA 设置恢复到默认状态，本操作将会丢失所有设置项，在调用时请特别注意
