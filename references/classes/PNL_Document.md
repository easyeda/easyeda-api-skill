# PNL\_Document class

面板 / 文档操作类

## 签名

```typescript
declare class PNL_Document 
```

## 备注

对设计文档总体进行的操作

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


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

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

保存文档

## 签名

```typescript
save(): Promise<boolean>;
```


## 返回值

Promise&lt;boolean&gt;

保存操作是否成功，保存失败、上传失败等错误均返回 `false`
