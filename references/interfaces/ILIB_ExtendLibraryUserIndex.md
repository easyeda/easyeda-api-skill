# ILIB\_ExtendLibraryUserIndex interface

外部库用户索引

## 签名

```typescript
interface ILIB_ExtendLibraryUserIndex 
```

## 备注

支持外部库使用名称或关联的嘉立创 EDA 系统内用户 UUID 作为用户的唯一 ID 索引

如若希望关联嘉立创 EDA 的用户，请传入该用户的 UUID，将会自动读取用户的名称（如若用户存在）

如若仅希望显示用户名称，可以传入 `name` 字段

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

[name?](./ILIB_ExtendLibraryUserIndex.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 用户名称


</td></tr>
<tr><td>

[uuid?](./ILIB_ExtendLibraryUserIndex.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 嘉立创 EDA 系统内的用户 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### name

# ILIB\_ExtendLibraryUserIndex.name property

用户名称

## 签名

```typescript
name?: string;
```

### uuid

# ILIB\_ExtendLibraryUserIndex.uuid property

嘉立创 EDA 系统内的用户 UUID

## 签名

```typescript
uuid?: string;
```
