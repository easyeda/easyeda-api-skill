# IDMT\_TeamItem interface

团队属性

## Signature

```typescript
interface IDMT_TeamItem 
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

当前用户在团队内的身份（权限组）ID


</td></tr>
<tr><td>

[itemType](./IDMT_TeamItem.md)


</td><td>

`readonly`


</td><td>

[EDMT\_ItemType.TEAM](../enums/EDMT_ItemType.md)


</td><td>

项目类型


</td></tr>
<tr><td>

[name](./IDMT_TeamItem.md)


</td><td>


</td><td>

string


</td><td>

团队名称


</td></tr>
<tr><td>

[uuid](./IDMT_TeamItem.md)


</td><td>


</td><td>

string


</td><td>

团队 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### identity

# IDMT\_TeamItem.identity property

当前用户在团队内的身份（权限组）ID

## Signature

```typescript
identity: number;
```

### itemtype

# IDMT\_TeamItem.itemType property

项目类型

## Signature

```typescript
readonly itemType: EDMT_ItemType.TEAM;
```

### name

# IDMT\_TeamItem.name property

团队名称

## Signature

```typescript
name: string;
```

### uuid

# IDMT\_TeamItem.uuid property

团队 UUID

## Signature

```typescript
uuid: string;
```
