# ILIB\_ExtendLibraryItemIndex interface

External library item index

## Signature

```typescript
export interface ILIB_ExtendLibraryItemIndex 
```

## Remarks

Supports external libraries using a name or UUID as the unique ID index of the item

Under normal circumstances, each library is expected to have a UUID, but some systems may not have a UUID field (or a field that can serve a similar purpose) at development time

When only the `name` field is passed here, `name` will be used as the unique ID, and duplicate names are not allowed

If both the `uuid` and `name` fields are passed, only `uuid` cannot be duplicated

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

[name](./ILIB_ExtendLibraryItemIndex.md)


</td><td>


</td><td>

string


</td><td>

Library name


</td></tr>
<tr><td>

[uuid?](./ILIB_ExtendLibraryItemIndex.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Library UUID


</td></tr>
</tbody></table>

---

## 属性详情

### name

# ILIB\_ExtendLibraryItemIndex.name property

Library name

## Signature

```typescript
name: string;
```

### uuid

# ILIB\_ExtendLibraryItemIndex.uuid property

Library UUID

## Signature

```typescript
uuid?: string;
```
