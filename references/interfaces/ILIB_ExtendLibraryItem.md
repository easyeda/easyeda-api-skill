# ILIB\_ExtendLibraryItem interface

External library item

## Signature

```typescript
export interface ILIB_ExtendLibraryItem extends ILIB_ExtendLibraryItemIndex 
```
**Extends:** [ILIB\_ExtendLibraryItemIndex](./ILIB_ExtendLibraryItemIndex.md)

## Remarks

Here the `url` or `data` field needs to be passed. If both are passed, the data of `data` is used and the `url` field is ignored

If only the `url` field is passed in, a request will be made to it to try to obtain its library file

The data of `data` can be in Blob or DataURL format

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

[data?](./ILIB_ExtendLibraryItem.md)


</td><td>


</td><td>

string \| Blob


</td><td>

_(Optional)_ Library file data


</td></tr>
<tr><td>

[url?](./ILIB_ExtendLibraryItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Library file URL


</td></tr>
</tbody></table>

---

## 属性详情

### data

# ILIB\_ExtendLibraryItem.data property

Library file data

## Signature

```typescript
data?: string | Blob;
```

### url

# ILIB\_ExtendLibraryItem.url property

Library file URL

## Signature

```typescript
url?: string;
```
