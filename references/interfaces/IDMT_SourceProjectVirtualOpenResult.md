# IDMT\_SourceProjectVirtualOpenResult interface

虚拟打开工程结果

## Signature

```typescript
interface IDMT_SourceProjectVirtualOpenResult
```

## Remarks

`projectId` 为工程的定位标识：在线模式下即入参 `projectId`<!-- -->； 客户端半离线 / 全离线模式下由内部为打开的本地工程注册一个虚拟 UUID，后续针对该工程的操作均以此 UUID 定位

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

[documentTree](./IDMT_SourceProjectVirtualOpenResult.md)

</td><td>

</td><td>

[TDMT\_SourceProjectDocumentTree](../types/TDMT_SourceProjectDocumentTree.md)

</td><td>

工程文档树

</td></tr>
<tr><td>

[projectId](./IDMT_SourceProjectVirtualOpenResult.md)

</td><td>

</td><td>

string

</td><td>

工程 UUID（客户端半离线 / 全离线模式下的本地工程由此获得注册的 UUID）

</td></tr>
</tbody></table>

---

## 属性详情

### documenttree

# IDMT\_SourceProjectVirtualOpenResult.documentTree property

工程文档树

## Signature

```typescript
documentTree: TDMT_SourceProjectDocumentTree;
```

### projectid

# IDMT\_SourceProjectVirtualOpenResult.projectId property

工程 UUID（客户端半离线 / 全离线模式下的本地工程由此获得注册的 UUID）

## Signature

```typescript
projectId: string;
```
