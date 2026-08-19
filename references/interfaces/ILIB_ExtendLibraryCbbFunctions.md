# ILIB\_ExtendLibraryCbbFunctions interface

外部库复用模块方法

## Signature

```typescript
export interface ILIB_ExtendLibraryCbbFunctions extends ILIB_ExtendLibraryFunctions 
```
**Extends:** [ILIB\_ExtendLibraryFunctions](./ILIB_ExtendLibraryFunctions.md)

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

[getList](./ILIB_ExtendLibraryCbbFunctions.md)


</td><td>


</td><td>

(props: any) =&gt; Promise&lt;[ILIB\_ExtendLibrarySearchResult](./ILIB_ExtendLibrarySearchResult.md)<!-- -->&lt;[ILIB\_ExtendLibraryItem](./ILIB_ExtendLibraryItem.md) &amp; [ILIB\_ExtendLibrarySearchResultDataLine](./ILIB_ExtendLibrarySearchResultDataLine.md) &amp; { schematics?: undefined \| ({ uuid: string; name: string; updateTime: string; description?: undefined \| string })\[\]; pcbs?: undefined \| ({ uuid: string; name: string; updateTime: number; thumb?: undefined \| string; createTime?: undefined \| number; creator?: undefined \| [ILIB\_ExtendLibraryUserIndex](./ILIB_ExtendLibraryUserIndex.md)<!-- -->; modifier?: undefined \| [ILIB\_ExtendLibraryUserIndex](./ILIB_ExtendLibraryUserIndex.md)<!-- -->; description?: undefined \| string })\[\]; boards?: undefined \| { pcbUuid: string; schUuid: string; name: string }\[\]; sheets?: undefined \| ({ uuid: string; name: string; belongSchematicUuid: string; updateTime: number; thumb?: undefined \| string; createTime?: undefined \| number; creator?: undefined \| [ILIB\_ExtendLibraryUserIndex](./ILIB_ExtendLibraryUserIndex.md)<!-- -->; modifier?: undefined \| [ILIB\_ExtendLibraryUserIndex](./ILIB_ExtendLibraryUserIndex.md)<!-- -->; description?: undefined \| string })\[\] }&gt;&gt;


</td><td>


</td></tr>
</tbody></table>

---

## 属性详情

### getlist

# ILIB\_ExtendLibraryCbbFunctions.getList property

## Signature

```typescript
getList: (props: any) => Promise<ILIB_ExtendLibrarySearchResult<ILIB_ExtendLibraryItem & ILIB_ExtendLibrarySearchResultDataLine & { schematics?: undefined | ({ uuid: string; name: string; updateTime: string; description?: undefined | string })[]; pcbs?: undefined | ({ uuid: string; name: string; updateTime: number; thumb?: undefined | string; createTime?: undefined | number; creator?: undefined | ILIB_ExtendLibraryUserIndex; modifier?: undefined | ILIB_ExtendLibraryUserIndex; description?: undefined | string })[]; boards?: undefined | { pcbUuid: string; schUuid: string; name: string }[]; sheets?: undefined | ({ uuid: string; name: string; belongSchematicUuid: string; updateTime: number; thumb?: undefined | string; createTime?: undefined | number; creator?: undefined | ILIB_ExtendLibraryUserIndex; modifier?: undefined | ILIB_ExtendLibraryUserIndex; description?: undefined | string })[] }>>;
```
