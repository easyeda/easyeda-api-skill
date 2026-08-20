# IDMT\_TeamItem interface

Team properties

## Signature

```typescript
export interface IDMT_TeamItem 
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

[identity](./IDMT_TeamItem.md)


</td><td>


</td><td>

number


</td><td>

ID of the current user's identity (permission group) in the team


</td></tr>
<tr><td>

[itemType](./IDMT_TeamItem.md)


</td><td>

`readonly`


</td><td>

[EDMT\_ItemType.TEAM](../enums/EDMT_ItemType.md)


</td><td>

Project type


</td></tr>
<tr><td>

[name](./IDMT_TeamItem.md)


</td><td>


</td><td>

string


</td><td>

Team name


</td></tr>
<tr><td>

[uuid](./IDMT_TeamItem.md)


</td><td>


</td><td>

string


</td><td>

Team UUID


</td></tr>
</tbody></table>

---

## 属性详情

### identity

# IDMT\_TeamItem.identity property

ID of the current user's identity (permission group) in the team

## Signature

```typescript
identity: number;
```

### itemtype

# IDMT\_TeamItem.itemType property

Project type

## Signature

```typescript
readonly itemType: EDMT_ItemType.TEAM;
```

### name

# IDMT\_TeamItem.name property

Team name

## Signature

```typescript
name: string;
```

### uuid

# IDMT\_TeamItem.uuid property

Team UUID

## Signature

```typescript
uuid: string;
```
