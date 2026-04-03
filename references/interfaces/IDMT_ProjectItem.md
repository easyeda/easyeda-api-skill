# IDMT\_ProjectItem interface

工程属性

## 签名

```typescript
interface IDMT_ProjectItem extends IDMT_BriefProjectItem 
```
**扩展自：**[IDMT\_BriefProjectItem](./IDMT_BriefProjectItem.md)

## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[collaborationMode?](./IDMT_ProjectItem.md)


</td><td>


</td><td>

[EDMT\_ProjectCollaborationMode](../enums/EDMT_ProjectCollaborationMode.md)


</td><td>

_（可选）_ 工程协作模式


</td></tr>
<tr><td>

[data](./IDMT_ProjectItem.md)


</td><td>


</td><td>

Array&lt;[IDMT\_BoardItem](./IDMT_BoardItem.md) \| [IDMT\_SchematicItem](./IDMT_SchematicItem.md) \| [IDMT\_PcbItem](./IDMT_PcbItem.md) \| [IDMT\_PanelItem](./IDMT_PanelItem.md)<!-- -->&gt;


</td><td>

工程内文档数据


</td></tr>
<tr><td>

[description?](./IDMT_ProjectItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 描述


</td></tr>
<tr><td>

[name](./IDMT_ProjectItem.md)


</td><td>


</td><td>

string


</td><td>

工程链接名称


</td></tr>
</tbody></table>

---

## 属性详情

### collaborationmode

# IDMT\_ProjectItem.collaborationMode property

工程协作模式

## 签名

```typescript
collaborationMode?: EDMT_ProjectCollaborationMode;
```

### data

# IDMT\_ProjectItem.data property

工程内文档数据

## 签名

```typescript
data: Array<IDMT_BoardItem | IDMT_SchematicItem | IDMT_PcbItem | IDMT_PanelItem>;
```

### description

# IDMT\_ProjectItem.description property

描述

## 签名

```typescript
description?: string;
```

### name

# IDMT\_ProjectItem.name property

工程链接名称

## 签名

```typescript
name: string;
```
