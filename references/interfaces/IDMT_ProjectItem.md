# IDMT\_ProjectItem interface

Project property

## Signature

```typescript
export interface IDMT_ProjectItem extends IDMT_BriefProjectItem 
```
**Extends:** [IDMT\_BriefProjectItem](./IDMT_BriefProjectItem.md)

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

[collaborationMode?](./IDMT_ProjectItem.md)


</td><td>


</td><td>

[EDMT\_ProjectCollaborationMode](../enums/EDMT_ProjectCollaborationMode.md)


</td><td>

_(Optional)_ Project collaboration mode


</td></tr>
<tr><td>

[data](./IDMT_ProjectItem.md)


</td><td>


</td><td>

Array&lt;[IDMT\_BoardItem](./IDMT_BoardItem.md) \| [IDMT\_SchematicItem](./IDMT_SchematicItem.md) \| [IDMT\_PcbItem](./IDMT_PcbItem.md) \| [IDMT\_PanelItem](./IDMT_PanelItem.md)<!-- -->&gt;


</td><td>

Project in document data


</td></tr>
<tr><td>

[description?](./IDMT_ProjectItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Description


</td></tr>
<tr><td>

[name](./IDMT_ProjectItem.md)


</td><td>


</td><td>

string


</td><td>

Project link name


</td></tr>
</tbody></table>

---

## 属性详情

### collaborationmode

# IDMT\_ProjectItem.collaborationMode property

Project collaboration mode

## Signature

```typescript
collaborationMode?: EDMT_ProjectCollaborationMode;
```

### data

# IDMT\_ProjectItem.data property

Project in document data

## Signature

```typescript
data: Array<IDMT_BoardItem | IDMT_SchematicItem | IDMT_PcbItem | IDMT_PanelItem>;
```

### description

# IDMT\_ProjectItem.description property

Description

## Signature

```typescript
description?: string;
```

### name

# IDMT\_ProjectItem.name property

Project link name

## Signature

```typescript
name: string;
```
