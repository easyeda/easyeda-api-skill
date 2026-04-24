# PNL\_Document class

面板 / 文档操作类

## Signature

```typescript
declare class PNL_Document 
```

## Remarks

对设计文档总体进行的操作

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[save()](./PNL_Document.md)


</td><td>


</td><td>

**_(BETA)_** 保存文档


</td></tr>
</tbody></table>

---

## 方法详情

### save

# PNL\_Document.save() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

保存文档

## Signature

```typescript
save(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

保存操作是否成功，保存失败、上传失败等错误均返回 `false`
