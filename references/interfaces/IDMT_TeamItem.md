# IDMT\_TeamItem interface

团队属性

## 签名

```typescript
interface IDMT_TeamItem 
```

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

## 签名

```typescript
identity: number;
```

### itemtype

# IDMT\_TeamItem.itemType property

项目类型

## 签名

```typescript
readonly itemType: EDMT_ItemType.TEAM;
```

### name

# IDMT\_TeamItem.name property

团队名称

## 签名

```typescript
name: string;
```

### uuid

# IDMT\_TeamItem.uuid property

团队 UUID

## 签名

```typescript
uuid: string;
```
