# LIB\_Cbb class

Comprehensive library / reuse block class

## Signature

```typescript
export class LIB_Cbb 
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

[copy(cbbUuid, libraryUuid, targetLibraryUuid, targetClassification, newCbbName)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** Copy Reuse block


</td></tr>
<tr><td>

[create(libraryUuid, cbbName, classification, description)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** Create Reuse block


</td></tr>
<tr><td>

[delete(cbbUuid, libraryUuid)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** Delete Reuse block


</td></tr>
<tr><td>

[get(cbbUuid, libraryUuid)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** Get all properties of the reuse block


</td></tr>
<tr><td>

[modify(cbbUuid, libraryUuid, cbbName, classification, description)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** Modify Reuse block


</td></tr>
<tr><td>

[openProjectInEditor(cbbUuid, libraryUuid)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** Open in the editor reuse block project


</td></tr>
<tr><td>

[openSymbolInEditor(cbbUuid, libraryUuid, splitScreenId)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** Open in the editor reuse block symbol


</td></tr>
<tr><td>

[search(key, libraryUuid, classification, itemsOfPage, page)](./LIB_Cbb.md)


</td><td>


</td><td>

**_(BETA)_** Search reuse block


</td></tr>
</tbody></table>

---

## 方法详情

### copy

# LIB\_Cbb.copy() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Copy Reuse block

## Signature

```typescript
public copy(cbbUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newCbbName?: string): Promise<string | undefined>;
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

cbbUuid


</td><td>

string


</td><td>

Reuse block UUID


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

newCbbName


</td><td>

string


</td><td>

_(Optional)_ New reuse block name. If a reuse block with the same name exists in the target library, the copy will fail


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

UUID of the new reuse block in the target library

## Example


```javascript
// 1. 获取系统库与个人库 UUID
const systemLib = await eda.lib_LibrariesList.getSystemLibraryUuid();
const personalLib = await eda.lib_LibrariesList.getPersonalLibraryUuid();

// 2. 从系统库找一个复用模块作为复制来源
const results = await eda.lib_Cbb.search('', systemLib, undefined, 1);
const source = results[0];

// 3. 复制到个人库，指定新名称避免同名冲突（分类传 [] = 不分类）
const newName = '嘉立创示例_复制_' + Date.now();
const copiedUuid = await eda.lib_Cbb.copy(source.uuid, systemLib, personalLib, [], newName);

// 创建类保留现场（复制品留在个人库中供观察）

console.log('source:', source.name, source.uuid);
console.log('copiedUuid:', copiedUuid);
console.log('newName:', newName);
```

### create

# LIB\_Cbb.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Reuse block

## Signature

```typescript
public create(libraryUuid: string, cbbName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;
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

cbbName


</td><td>

string


</td><td>

Reuse block name


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

Reuse block UUID

## Example


```javascript
// 1. 获取个人库 UUID
const libraryUuid = await eda.lib_LibrariesList.getPersonalLibraryUuid();

// 2. 在个人库创建复用模块（分类传空数组 = 不分类）
const cbbName = '嘉立创示例_新建模块_' + Date.now();
const cbbUuid = await eda.lib_Cbb.create(libraryUuid, cbbName, [], '示例描述');

// 创建类保留现场

console.log('libraryUuid:', libraryUuid);
console.log('cbbName:', cbbName);
console.log('cbbUuid:', cbbUuid);
```

### delete

# LIB\_Cbb.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Reuse block

## Signature

```typescript
public delete(cbbUuid: string, libraryUuid: string): Promise<boolean>;
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

cbbUuid


</td><td>

string


</td><td>

Reuse block UUID


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
// 1. 获取系统库与个人库 UUID
const systemLib = await eda.lib_LibrariesList.getSystemLibraryUuid();
const personalLib = await eda.lib_LibrariesList.getPersonalLibraryUuid();

// 2. 复制一个系统库模块到个人库作为删除对象
const results = await eda.lib_Cbb.search('', systemLib, undefined, 1);
const source = results[0];
const cbbUuid = await eda.lib_Cbb.copy(source.uuid, systemLib, personalLib, [], '嘉立创示例_删除_' + Date.now());

// 3. 删除复制品
const deleted = await eda.lib_Cbb.delete(cbbUuid, personalLib);

console.log('cbbUuid:', cbbUuid);
console.log('deleted:', deleted);
```

### get

# LIB\_Cbb.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all properties of the reuse block

## Signature

```typescript
public get(cbbUuid: string, libraryUuid?: string): Promise<ILIB_CbbItem | undefined>;
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

cbbUuid


</td><td>

string


</td><td>

Reuse block UUID


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

Promise&lt;[ILIB\_CbbItem](../interfaces/ILIB_CbbItem.md) \| undefined&gt;

Reuse block property

### modify

# LIB\_Cbb.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Reuse block

## Signature

```typescript
public modify(cbbUuid: string, libraryUuid: string, cbbName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;
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

cbbUuid


</td><td>

string


</td><td>

Reuse block UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

Library UUID, you can use [LIB\_LibrariesList](./LIB_LibrariesList.md) APIs in


</td></tr>
<tr><td>

cbbName


</td><td>

string


</td><td>

_(Optional)_ Reuse block name


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
// 1. 获取系统库与个人库 UUID
const systemLib = await eda.lib_LibrariesList.getSystemLibraryUuid();
const personalLib = await eda.lib_LibrariesList.getPersonalLibraryUuid();

// 2. 复制一个系统库模块到个人库作为修改对象
const results = await eda.lib_Cbb.search('', systemLib, undefined, 1);
const source = results[0];
const cbbUuid = await eda.lib_Cbb.copy(source.uuid, systemLib, personalLib, [], '嘉立创示例_修改_' + Date.now());

// 3. 修改名称和描述（分类保持不变传 []）
const newName = '嘉立创示例_重命名_' + Date.now();
const modified = await eda.lib_Cbb.modify(cbbUuid, personalLib, newName, [], '修改后的描述');

// 修改类保留现场

console.log('cbbUuid:', cbbUuid);
console.log('modified:', modified);
console.log('newName:', newName);
```

### openprojectineditor

# LIB\_Cbb.openProjectInEditor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Open in the editor reuse block project

## Signature

```typescript
public openProjectInEditor(cbbUuid: string, libraryUuid: string): Promise<boolean>;
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

cbbUuid


</td><td>

string


</td><td>

Reuse block UUID


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

## Remarks

This operation will open the module project in the EDA front end. If another project was previously opened with unsaved changes, executing this operation will directly lose all unsaved data

## Example


```javascript
// 1. 记录当前工程，便于演示结束后恢复
const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();

// 2. 复制一个系统库模块到个人库作为打开对象
const systemLib = await eda.lib_LibrariesList.getSystemLibraryUuid();
const personalLib = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const results = await eda.lib_Cbb.search('', systemLib, undefined, 1);
const source = results[0];
const cbbUuid = await eda.lib_Cbb.copy(source.uuid, systemLib, personalLib, [], '嘉立创示例_打开工程_' + Date.now());

// 3. 在编辑器打开模块工程
const opened = await eda.lib_Cbb.openProjectInEditor(cbbUuid, personalLib);

// 4. 恢复原来打开的工程
await new Promise((r) => setTimeout(r, 1000));
await eda.dmt_Project.openProject(projectInfo.uuid);

console.log('source:', source.name, source.uuid);
console.log('opened:', opened);
console.log('restored:', projectInfo.uuid);
```

### opensymbolineditor

# LIB\_Cbb.openSymbolInEditor() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Open in the editor reuse block symbol

## Signature

```typescript
public openSymbolInEditor(cbbUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;
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

cbbUuid


</td><td>

string


</td><td>

Reuse block UUID


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
// 1. 记录当前工程，便于演示结束后恢复
const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();

// 2. 复制一个系统库模块到个人库作为演示对象
const systemLib = await eda.lib_LibrariesList.getSystemLibraryUuid();
const personalLib = await eda.lib_LibrariesList.getPersonalLibraryUuid();
const results = await eda.lib_Cbb.search('', systemLib, undefined, 1);
const source = results[0];
const cbbUuid = await eda.lib_Cbb.copy(source.uuid, systemLib, personalLib, [], '嘉立创示例_打开符号_' + Date.now());

// 3. 先打开模块工程（openSymbolInEditor 的前置条件）
await eda.lib_Cbb.openProjectInEditor(cbbUuid, personalLib);
await new Promise((r) => setTimeout(r, 1000));

// 4. 在编辑器打开模块符号，返回标签页 ID
const tabId = await eda.lib_Cbb.openSymbolInEditor(cbbUuid, personalLib);

// 5. 恢复原来打开的工程
await eda.dmt_Project.openProject(projectInfo.uuid);

console.log('source:', source.name, source.uuid);
console.log('tabId:', tabId);
```

### search

# LIB\_Cbb.search() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Search reuse block

## Signature

```typescript
public search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_CbbSearchItem>>;
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

Promise&lt;Array&lt;[ILIB\_CbbSearchItem](../interfaces/ILIB_CbbSearchItem.md)<!-- -->&gt;&gt;

List of searched reuse block properties

## Example


```javascript
// 1. 空关键字列出系统库全部复用模块，每页 5 条
const results = await eda.lib_Cbb.search('', undefined, undefined, 5);

// 2. 输出搜索结果
console.log('count:', results.length);
results.forEach((item, i) => {
  console.log('[' + i + '] name:', item.name, 'uuid:', item.uuid);
});
```
