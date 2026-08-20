# IDMT\_BriefProjectItem interface

Brief project properties

## Signature

```typescript
export interface IDMT_BriefProjectItem 
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

_(Optional)_ UUID of the folder it belongs to


</td></tr>
<tr><td>

[friendlyName](./IDMT_BriefProjectItem.md)


</td><td>


</td><td>

string


</td><td>

Project friendly name


</td></tr>
<tr><td>

[itemType](./IDMT_BriefProjectItem.md)


</td><td>

`readonly`


</td><td>

[EDMT\_ItemType.PROJECT](../enums/EDMT_ItemType.md) \| [EDMT\_ItemType.CBB\_PROJECT](../enums/EDMT_ItemType.md)


</td><td>

Project type


</td></tr>
<tr><td>

[teamUuid](./IDMT_BriefProjectItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the team it belongs to


</td></tr>
<tr><td>

[uuid](./IDMT_BriefProjectItem.md)


</td><td>


</td><td>

string


</td><td>

Project UUID


</td></tr>
</tbody></table>

---

## 属性详情

### folderuuid

# IDMT\_BriefProjectItem.folderUuid property

UUID of the folder it belongs to

## Signature

```typescript
folderUuid?: string;
```

### friendlyname

# IDMT\_BriefProjectItem.friendlyName property

Project friendly name

## Signature

```typescript
friendlyName: string;
```

### itemtype

# IDMT\_BriefProjectItem.itemType property

Project type

## Signature

```typescript
readonly itemType: EDMT_ItemType.PROJECT | EDMT_ItemType.CBB_PROJECT;
```

### teamuuid

# IDMT\_BriefProjectItem.teamUuid property

UUID of the team it belongs to

## Signature

```typescript
teamUuid: string;
```

### uuid

# IDMT\_BriefProjectItem.uuid property

Project UUID

## Signature

```typescript
uuid: string;
```
