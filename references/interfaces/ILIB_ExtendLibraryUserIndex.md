# ILIB\_ExtendLibraryUserIndex interface

External library user index

## Signature

```typescript
export interface ILIB_ExtendLibraryUserIndex 
```

## Remarks

Supports external libraries using a name or the associated user UUID within the EasyEDA system as the unique ID index of the user

If you want to associate with an EasyEDA user, pass in the user's UUID. The user's name will be automatically read (if the user exists)

If you only want to display the user name, you can pass in the `name` field

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

[name?](./ILIB_ExtendLibraryUserIndex.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ User name


</td></tr>
<tr><td>

[uuid?](./ILIB_ExtendLibraryUserIndex.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ User UUID within the EasyEDA system


</td></tr>
</tbody></table>

---

## 属性详情

### name

# ILIB\_ExtendLibraryUserIndex.name property

User name

## Signature

```typescript
name?: string;
```

### uuid

# ILIB\_ExtendLibraryUserIndex.uuid property

User UUID within the EasyEDA system

## Signature

```typescript
uuid?: string;
```
