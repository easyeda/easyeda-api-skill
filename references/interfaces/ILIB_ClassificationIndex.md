# ILIB\_ClassificationIndex interface

> Warning: This API is now obsolete.
>
> since EDA v3.2; dropped EDA v3.3

Classification index

## Signature

```typescript
export interface ILIB_ClassificationIndex 
```

## Remarks

This classification index is used to index the classifications in the specified library. The library UUID and library type are only used for identification purposes of this index, to prevent indexes in different libraries from referencing each other and causing errors

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

[libraryType](./ILIB_ClassificationIndex.md)


</td><td>


</td><td>

[ELIB\_LibraryType](../enums/ELIB_LibraryType.md)


</td><td>

Library type


</td></tr>
<tr><td>

[libraryUuid](./ILIB_ClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

Library UUID


</td></tr>
<tr><td>

[primaryClassificationUuid](./ILIB_ClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

Primary classification UUID


</td></tr>
<tr><td>

[secondaryClassificationUuid?](./ILIB_ClassificationIndex.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Secondary classification UUID


</td></tr>
</tbody></table>

---

## 属性详情

### librarytype

# ILIB\_ClassificationIndex.libraryType property

Library type

## Signature

```typescript
libraryType: ELIB_LibraryType;
```

### libraryuuid

# ILIB\_ClassificationIndex.libraryUuid property

Library UUID

## Signature

```typescript
libraryUuid: string;
```

### primaryclassificationuuid

# ILIB\_ClassificationIndex.primaryClassificationUuid property

Primary classification UUID

## Signature

```typescript
primaryClassificationUuid: string;
```

### secondaryclassificationuuid

# ILIB\_ClassificationIndex.secondaryClassificationUuid property

Secondary classification UUID

## Signature

```typescript
secondaryClassificationUuid?: string;
```
