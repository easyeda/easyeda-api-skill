# ISCH\_SourceNetConnectionsResult interface

网络连接关系

## Signature

```typescript
interface ISCH_SourceNetConnectionsResult
```

## Remarks

元素未接入任何网络时返回 `net` 为 `null` 与空 `connections`<!-- -->，不是错误

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

[connections](./ISCH_SourceNetConnectionsResult.md)

</td><td>

</td><td>

Array&lt;[ISCH\_SourceNetConnection](./ISCH_SourceNetConnection.md)<!-- -->&gt;

</td><td>

连接点列表

</td></tr>
<tr><td>

[net](./ISCH_SourceNetConnectionsResult.md)

</td><td>

</td><td>

string \| null

</td><td>

网络名称，未接入网络时为 `null`

</td></tr>
</tbody></table>

---

## 属性详情

### connections

# ISCH\_SourceNetConnectionsResult.connections property

连接点列表

## Signature

```typescript
connections: Array<ISCH_SourceNetConnection>;
```

### net

# ISCH\_SourceNetConnectionsResult.net property

网络名称，未接入网络时为 `null`

## Signature

```typescript
net: string | null;
```
