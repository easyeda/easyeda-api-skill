# LIB\_Footprint class

Comprehensive library / footprint class

## Signature

```typescript
export class LIB_Footprint 
```

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[copy(footprintUuid, libraryUuid, targetLibraryUuid, targetClassification, newFootprintName)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** Copy Footprint


</td></tr>
<tr><td>

[create(libraryUuid, footprintName, classification, description)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** Create Footprint


</td></tr>
<tr><td>

[delete(footprintUuid, libraryUuid)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** Delete Footprint


</td></tr>
<tr><td>

[get(footprintUuid, libraryUuid)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** Get all properties of the footprint


</td></tr>
<tr><td>

[getRenderImage(source)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** Get the footprint render image


</td></tr>
<tr><td>

[modify(footprintUuid, libraryUuid, footprintName, classification, description)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** Modify Footprint


</td></tr>
<tr><td>

[openInEditor(footprintUuid, libraryUuid, splitScreenId)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** Open in the editor document


</td></tr>
<tr><td>

[search(key, libraryUuid, classification, itemsOfPage, page)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** Search footprint


</td></tr>
<tr><td>

[searchByProperties(properties, libraryUuid)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** Search footprints precisely by properties


</td></tr>
<tr><td>

[updateDocumentSource(footprintUuid, libraryUuid, documentSource)](./LIB_Footprint.md)


</td><td>


</td><td>

**_(BETA)_** Update the document source code of the footprint


</td></tr>
</tbody></table>

---

## 方法详情

### copy

# LIB\_Footprint.copy() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Copy Footprint

## Signature

```typescript
public copy(footprintUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newFootprintName?: string): Promise<string | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

footprintUuid


</td><td>

string


</td><td>

Footprint UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

targetLibraryUuid


</td><td>

string


</td><td>

Target library UUID


</td></tr>
<tr><td>

targetClassification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Classification in the target library


</td></tr>
<tr><td>

newFootprintName


</td><td>

string


</td><td>

_(Optional)_ New footprint name. If a footprint with the same name exists in the target library, the copy will fail


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

UUID of the new footprint in the target library

## Example


```javascript
// 1. 搜索系统库，取一个封装作为复制来源
const [source] = await eda.lib_Footprint.search('0402', undefined, undefined, 1, 1);

// 2. 获取个人库 UUID
const targetLibraryUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();

// 3. 从系统库复制到个人库，指定新名称避免同名冲突（分类传 [] = 不分类）
const newName = '嘉立创示例_封装副本_' + Date.now();
const copiedUuid = await eda.lib_Footprint.copy(
  source.uuid,
  source.libraryUuid,
  targetLibraryUuid,
  [],
  newName
);

// 创建类保留现场（副本留在个人库中供观察）

console.log('sourceUuid:', source.uuid);
console.log('copiedUuid:', copiedUuid);
console.log('newName:', newName);
```

### create

# LIB\_Footprint.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Footprint

## Signature

```typescript
public create(libraryUuid: string, footprintName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

libraryUuid


</td><td>

string


</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

footprintName


</td><td>

string


</td><td>

Footprint name


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Classification


</td></tr>
<tr><td>

description


</td><td>

string


</td><td>

_(Optional)_ Description


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

Footprint UUID

## Example


```javascript
// 1. 获取个人库 UUID
const libraryUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();

// 2. 创建封装（分类传 [] = 不分类）
const footprintName = '嘉立创示例_新封装_' + Date.now();
const footprintUuid = await eda.lib_Footprint.create(libraryUuid, footprintName, [], '示例封装描述');

// 创建类保留现场（新封装留在个人库中供观察）

console.log('footprintUuid:', footprintUuid);
console.log('footprintName:', footprintName);
```

### delete

# LIB\_Footprint.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Footprint

## Signature

```typescript
public delete(footprintUuid: string, libraryUuid: string): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

footprintUuid


</td><td>

string


</td><td>

Footprint UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example


```javascript
// 1. 获取个人库 UUID 并新建删除对象
const libraryUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const footprintUuid = await eda.lib_Footprint.create(
  libraryUuid,
  '嘉立创示例_待删除封装_' + Date.now(),
  []
);

// 2. 删除该封装
const deleted = await eda.lib_Footprint.delete(footprintUuid, libraryUuid);

console.log('footprintUuid:', footprintUuid);
console.log('deleted:', deleted);
```

### get

# LIB\_Footprint.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all properties of the footprint

## Signature

```typescript
public get(footprintUuid: string, libraryUuid?: string): Promise<ILIB_FootprintItem | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

footprintUuid


</td><td>

string


</td><td>

Footprint UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID, default is system library, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ILIB\_FootprintItem](../interfaces/ILIB_FootprintItem.md) \| undefined&gt;

Footprint property

### getrenderimage

# LIB\_Footprint.getRenderImage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the footprint render image

## Signature

```typescript
public getRenderImage(source: { footprintUuid: string; libraryUuid: string }): Promise<Blob | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

source


</td><td>

\{ footprintUuid: string; libraryUuid: string \}


</td><td>


</td></tr>
</tbody></table>



## Returns

Promise&lt;Blob \| undefined&gt;

Footprint render image

## Example


```javascript
// 1. 搜索系统库，取一个封装作为渲染来源
const [source] = await eda.lib_Footprint.search('0402', undefined, undefined, 1, 1);

// 2. 获取渲染图（PNG Blob）
const blob = await eda.lib_Footprint.getRenderImage({
  footprintUuid: source.uuid,
  libraryUuid: source.libraryUuid,
});

// 3. Blob 可转成 URL 直接展示：URL.createObjectURL(blob)
console.log('sourceName:', source.name);
console.log('imageSize:', blob.size);
console.log('imageType:', blob.type);
```

### modify

# LIB\_Footprint.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Footprint

## Signature

```typescript
public modify(footprintUuid: string, libraryUuid: string, footprintName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

footprintUuid


</td><td>

string


</td><td>

Footprint UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

footprintName


</td><td>

string


</td><td>

_(Optional)_ Footprint name


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt; \| null


</td><td>

_(Optional)_ Classification


</td></tr>
<tr><td>

description


</td><td>

string \| null


</td><td>

_(Optional)_ Description


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

If you want to clear certain properties, set their values to `null`

## Example


```javascript
// 1. 获取个人库 UUID 并新建修改对象
const libraryUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const footprintUuid = await eda.lib_Footprint.create(
  libraryUuid,
  '嘉立创示例_封装修改前_' + Date.now(),
  [],
  '修改前的描述'
);

// 2. 修改名称和描述（分类保持不变传 []）
const newName = '嘉立创示例_封装修改后_' + Date.now();
const modified = await eda.lib_Footprint.modify(footprintUuid, libraryUuid, newName, [], '修改后的描述');

// 修改类保留现场

console.log('footprintUuid:', footprintUuid);
console.log('modified:', modified);
console.log('newName:', newName);
```

### openineditor

# LIB\_Footprint.openInEditor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Open in the editor document

## Signature

```typescript
public openInEditor(footprintUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

footprintUuid


</td><td>

string


</td><td>

Footprint UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

splitScreenId


</td><td>

string


</td><td>

_(Optional)_ Split screen ID. If not filled in, it opens in the split screen with the last input focus by default. It can be obtained using the APIs in [DMT\_EditorControl](./DMT_EditorControl.md)


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

Tab ID, corresponding to [IDMT\_EditorTabItem.tabId](../interfaces/IDMT_EditorTabItem.md)<!-- -->. You can use [DMT\_EditorControl.getSplitScreenIdByTabId()](./DMT_EditorControl.md) to get the split screen ID

## Example


```javascript
// 1. 获取个人库 UUID 并新建封装
const libraryUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const footprintUuid = await eda.lib_Footprint.create(
  libraryUuid,
  '嘉立创示例_编辑封装_' + Date.now(),
  []
);

// 2. 在编辑器中打开该封装，返回标签页 ID（uuid@libraryUuid 格式）
const tabId = await eda.lib_Footprint.openInEditor(footprintUuid, libraryUuid);

// 打开后保留现场（编辑器停留在新封装页供观察；不需要时可传 tabId 给
// dmt_EditorControl.closeDocument 关闭）

console.log('footprintUuid:', footprintUuid);
console.log('tabId:', tabId);
```

### search

# LIB\_Footprint.search() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Search footprint

## Signature

```typescript
public search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_FootprintSearchItem>>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

key


</td><td>

string


</td><td>

Search keyword


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID, default is system library, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_(Optional)_ Classification, defaults to all


</td></tr>
<tr><td>

itemsOfPage


</td><td>

number


</td><td>

_(Optional)_ Number of search results per page


</td></tr>
<tr><td>

page


</td><td>

number


</td><td>

_(Optional)_ Page count


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ILIB\_FootprintSearchItem](../interfaces/ILIB_FootprintSearchItem.md)<!-- -->&gt;&gt;

List of searched footprint properties

## Example


```javascript
// 1. 按关键字搜索系统库中的封装，每页 5 条
const results = await eda.lib_Footprint.search('0402', undefined, undefined, 5, 1);

// 2. 输出搜索结果
console.log('count:', results.length);
results.forEach((item, i) => {
  console.log('[' + i + '] name:', item.name, 'uuid:', item.uuid, 'libraryUuid:', item.libraryUuid);
});
```

### searchbyproperties

# LIB\_Footprint.searchByProperties() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Search footprints precisely by properties

## Signature

```typescript
public searchByProperties(properties: ILIB_FootprintPropertiesForSearch, libraryUuid?: string): Promise<Array<ILIB_FootprintSearchItem>>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

properties


</td><td>

[ILIB\_FootprintPropertiesForSearch](../interfaces/ILIB_FootprintPropertiesForSearch.md)


</td><td>

Property


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_(Optional)_ Library UUID, default is system library, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ILIB\_FootprintSearchItem](../interfaces/ILIB_FootprintSearchItem.md)<!-- -->&gt;&gt;

List of searched footprint properties

## Example


```javascript
// 1. 按名称精确搜索（官方属性集合目前仅支持 name）
//    当前版本该接口不稳定：可能抛错，也可能正常返回 undefined，两种都要兼容
let results;
try {
  results = await eda.lib_Footprint.searchByProperties({ name: '0402' });
} catch (e) {
  console.log('当前版本按 name 搜索抛错:', e.message);
}
if (!Array.isArray(results)) results = [];

// 2. 输出搜索结果
console.log('count:', results.length);
results.forEach((item, i) => {
  console.log('[' + i + '] name:', item.name, 'uuid:', item.uuid, 'libraryUuid:', item.libraryUuid);
});
```

### updatedocumentsource

# LIB\_Footprint.updateDocumentSource() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Update the document source code of the footprint

## Signature

```typescript
public updateDocumentSource(footprintUuid: string, libraryUuid: string, documentSource: string): Promise<boolean | undefined>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

footprintUuid


</td><td>

string


</td><td>

Footprint UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

documentSource


</td><td>

string


</td><td>

Document source code


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean \| undefined&gt;

Whether the update is successful

## Example


```javascript
// 1. 获取个人库 UUID 并新建封装
const libraryUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const footprintUuid = await eda.lib_Footprint.create(
  libraryUuid,
  '嘉立创示例_源码封装_' + Date.now(),
  []
);

// 2. 在编辑器中打开封装，等待文档加载完成
const tabId = await eda.lib_Footprint.openInEditor(footprintUuid, libraryUuid);
await new Promise(r => setTimeout(r, 1500));

// 3. 读取当前打开封装的文档源码
const documentSource = await eda.sys_FileManager.getDocumentSource();

// 4. 把源码写回库中的封装（此处原样写回；实际使用时可先改写 documentSource）
const updated = await eda.lib_Footprint.updateDocumentSource(footprintUuid, libraryUuid, documentSource);

// 5. 关闭编辑器标签页（封装本体保留在库中）
await eda.dmt_EditorControl.closeDocument(tabId);

// 修改类保留现场

console.log('footprintUuid:', footprintUuid);
console.log('sourceLength:', documentSource.length);
console.log('updated:', updated);
```
