# IDMT\_BriefProjectItem interface

简略工程属性

## Signature

```typescript
interface IDMT_BriefProjectItem 
```

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

[folderUuid?](./IDMT_BriefProjectItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 所属文件夹 UUID


</td></tr>
<tr><td>

[friendlyName](./IDMT_BriefProjectItem.md)


</td><td>


</td><td>

string


</td><td>

工程友好名称


</td></tr>
<tr><td>

[itemType](./IDMT_BriefProjectItem.md)


</td><td>

`readonly`


</td><td>

[EDMT\_ItemType.PROJECT](../enums/EDMT_ItemType.md) \| [EDMT\_ItemType.CBB\_PROJECT](../enums/EDMT_ItemType.md)


</td><td>

项目类型


</td></tr>
<tr><td>

[teamUuid](./IDMT_BriefProjectItem.md)


</td><td>


</td><td>

string


</td><td>

所属团队 UUID


</td></tr>
<tr><td>

[uuid](./IDMT_BriefProjectItem.md)


</td><td>


</td><td>

string


</td><td>

工程 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### folderuuid

# IDMT\_BriefProjectItem.folderUuid property

所属文件夹 UUID

## Signature

```typescript
folderUuid?: string;
```

### friendlyname

# IDMT\_BriefProjectItem.friendlyName property

工程友好名称

## Signature

```typescript
friendlyName: string;
```

### itemtype

# IDMT\_BriefProjectItem.itemType property

项目类型

## Signature

```typescript
readonly itemType: EDMT_ItemType.PROJECT | EDMT_ItemType.CBB_PROJECT;
```

### teamuuid

# IDMT\_BriefProjectItem.teamUuid property

所属团队 UUID

## Signature

```typescript
teamUuid: string;
```

### uuid

# IDMT\_BriefProjectItem.uuid property

工程 UUID

## Signature

```typescript
uuid: string;
```
