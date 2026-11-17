# IDMT\_SourceProjectVirtualOpenOptions interface

虚拟打开工程选项

## Signature

```typescript
interface IDMT_SourceProjectVirtualOpenOptions
```

## Remarks

虚拟打开绕过前端界面相关模块与校验，直接载入工程数据并返回其文档树，不切换当前工程； 虚拟打开的工程与前端打开的工程共享同一份工程数据，对其所做的修改最终同样落盘

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

[cPath?](./IDMT_SourceProjectVirtualOpenOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 本地工程路径，与 `projectId` 二选一；客户端半离线 / 全离线模式下使用

</td></tr>
<tr><td>

[projectId?](./IDMT_SourceProjectVirtualOpenOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 工程 UUID，与 `cPath` 二选一；在线模式下使用，客户端半离线 / 全离线模式下无 UUID 可省略

</td></tr>
</tbody></table>

---

## 属性详情

### cpath

# IDMT\_SourceProjectVirtualOpenOptions.cPath property

本地工程路径，与 `projectId` 二选一；客户端半离线 / 全离线模式下使用

## Signature

```typescript
cPath?: string;
```

### projectid

# IDMT\_SourceProjectVirtualOpenOptions.projectId property

工程 UUID，与 `cPath` 二选一；在线模式下使用，客户端半离线 / 全离线模式下无 UUID 可省略

## Signature

```typescript
projectId?: string;
```
