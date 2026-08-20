# DMT\_Schematic class

Document tree / Schematic management class

## Signature

```typescript
export class DMT_Schematic 
```

## Remarks

Operations related to schematic management in the currently open project

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[copySchematic(schematicUuid, boardName)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Copy Schematic


</td></tr>
<tr><td>

[copySchematicPage(schematicPageUuid, schematicUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Copy Schematic sheet


</td></tr>
<tr><td>

[createSchematic(boardName)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Create Schematic


</td></tr>
<tr><td>

[createSchematicPage(schematicUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Create Schematic sheet


</td></tr>
<tr><td>

[deleteSchematic(schematicUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Delete Schematic


</td></tr>
<tr><td>

[deleteSchematicPage(schematicPageUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Delete Schematic sheet


</td></tr>
<tr><td>

[getAllSchematicPagesInfo()](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Get all in the project schematic sheet detailed properties of


</td></tr>
<tr><td>

[getAllSchematicsInfo()](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Get all in the project schematic detailed properties of


</td></tr>
<tr><td>

[getCurrentSchematicAllSchematicPagesInfo()](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Get the detailed properties of all schematic sheets in the current schematic


</td></tr>
<tr><td>

[getCurrentSchematicInfo()](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Get detailed properties of Current schematic


</td></tr>
<tr><td>

[getCurrentSchematicPageInfo()](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Get detailed properties of Current schematic sheet


</td></tr>
<tr><td>

[getSchematicInfo(schematicUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Get detailed properties of Schematic


</td></tr>
<tr><td>

[getSchematicPageInfo(schematicPageUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Get detailed properties of Schematic sheet


</td></tr>
<tr><td>

[modifySchematicName(schematicUuid, schematicName)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Modify Schematic name


</td></tr>
<tr><td>

[modifySchematicPageName(schematicPageUuid, schematicPageName)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Modify Schematic sheet name


</td></tr>
<tr><td>

[modifySchematicPageTitleBlock(showTitleBlock, titleBlockData)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Modify the title block of a schematic sheet


</td></tr>
<tr><td>

[reorderSchematicPages(schematicUuid, schematicPageItemsArray)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** Reorder schematic sheets


</td></tr>
</tbody></table>

---

## 方法详情

### copyschematic

# DMT\_Schematic.copySchematic() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Copy Schematic

## Signature

```typescript
public copySchematic(schematicUuid: string, boardName?: string): Promise<string | undefined>;
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

schematicUuid


</td><td>

string


</td><td>

Source schematic UUID


</td></tr>
<tr><td>

boardName


</td><td>

string


</td><td>

_(Optional)_ Name of the board the new schematic belongs to. If not specified, it is a free schematic


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

New schematic UUID. If it is `undefined`<!-- -->, the copy failed

## Remarks

If the schematic is already associated with a reuse block (a reuse block symbol with the same name exists in the project library), copying the schematic will also create a new reuse block symbol

## Example


```javascript
// 1. 创建专用源原理图（自带图页 p1），等 1.5s 同步
const sourceUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));

// 2. 复制源原理图，返回副本 UUID
const copiedUuid = await eda.dmt_Schematic.copySchematic(sourceUuid);
await new Promise(r => setTimeout(r, 1500));

// 3. 回读副本，确认名称与图页被完整复制
const copyInfo = await eda.dmt_Schematic.getSchematicInfo(copiedUuid);
console.log('copiedUuid:', copiedUuid);
console.log('copyName:', copyInfo?.name);
console.log('copyPages:', (copyInfo?.page || []).map(p => p.name).join(', '));

// 4. 清理本例创建的两个原理图（先删副本再删源），保持工程整洁
await new Promise(r => setTimeout(r, 1000));
const deletedCopy = await eda.dmt_Schematic.deleteSchematic(copiedUuid);
console.log('deleted:', deletedCopy);
await new Promise(r => setTimeout(r, 1000));
const deletedSource = await eda.dmt_Schematic.deleteSchematic(sourceUuid);
console.log('deleted:', deletedSource);
```

### copyschematicpage

# DMT\_Schematic.copySchematicPage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Copy Schematic sheet

## Signature

```typescript
public copySchematicPage(schematicPageUuid: string, schematicUuid?: string): Promise<string | undefined>;
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

schematicPageUuid


</td><td>

string


</td><td>

Source schematic sheet UUID


</td></tr>
<tr><td>

schematicUuid


</td><td>

string


</td><td>

_(Optional)_ Target schematic UUID. If not specified, it is the current schematic


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

New schematic sheet UUID. If it is `undefined`<!-- -->, the copy failed

## Example


```javascript
// 1. 创建专用测试原理图（自带图页 p1 作为复制源），等 1.5s 同步
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
const sourcePageUuid = info.page[0].uuid;

// 2. 复制该图页，目标显式指定为同一原理图，返回新图页 UUID
const copiedUuid = await eda.dmt_Schematic.copySchematicPage(sourcePageUuid, schematicUuid);
await new Promise(r => setTimeout(r, 1500));

// 3. 回读副本图页，确认名称与归属
const copyPage = await eda.dmt_Schematic.getSchematicPageInfo(copiedUuid);
console.log('copiedUuid:', copiedUuid);
console.log('copyPageName:', copyPage?.name);
console.log('belongsToSchematic:', copyPage?.parentSchematicUuid === schematicUuid);

// 4. 清理本例创建的原理图（副本图页随之删除）
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### createschematic

# DMT\_Schematic.createSchematic() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Schematic

## Signature

```typescript
public createSchematic(boardName?: string): Promise<string | undefined>;
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

boardName


</td><td>

string


</td><td>

_(Optional)_ Name of the board it belongs to. If not specified, it is a free schematic


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

Schematic UUID, if it is `undefined` creation fails

## Example


```javascript
// 1. 创建原理图（不指定 boardName，得到游离原理图），返回新原理图 UUID
const schematicUuid = await eda.dmt_Schematic.createSchematic();
console.log('schematicUuid:', schematicUuid);

// 2. 等 1.5s 让原理图在工作区落地，回读确认（自带图页 p1）
await new Promise(r => setTimeout(r, 1500));
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
console.log('name:', info?.name);
console.log('pages:', (info?.page || []).map(p => p.name).join(', '));
console.log('parentBoardName:', info?.parentBoardName);

// 3. 删除本例创建的原理图，保持工程整洁
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### createschematicpage

# DMT\_Schematic.createSchematicPage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Schematic sheet

## Signature

```typescript
public createSchematicPage(schematicUuid: string): Promise<string | undefined>;
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

schematicUuid


</td><td>

string


</td><td>

UUID of the schematic it belongs to


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

Schematic sheet UUID, if it is `undefined` creation fails

## Example


```javascript
// 1. 创建专用测试原理图（自带图页 p1），等 1.5s 同步
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));

// 2. 在该原理图下创建新图页，返回图页 UUID
const pageUuid = await eda.dmt_Schematic.createSchematicPage(schematicUuid);
console.log('pageUuid:', pageUuid);

// 3. 等 1.5s 同步，回读图页属性，确认归属
await new Promise(r => setTimeout(r, 1500));
const pageInfo = await eda.dmt_Schematic.getSchematicPageInfo(pageUuid);
console.log('pageName:', pageInfo?.name);
console.log('belongsToSchematic:', pageInfo?.parentSchematicUuid === schematicUuid);

// 4. 清理本例创建的原理图（图页随原理图一起删除）
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### deleteschematic

# DMT\_Schematic.deleteSchematic() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Schematic

## Signature

```typescript
public deleteSchematic(schematicUuid: string): Promise<boolean>;
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

schematicUuid


</td><td>

string


</td><td>

Schematic UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

If the schematic is already associated with a reuse block (a reuse block symbol with the same name exists in the project library), deleting the schematic will also delete the associated PCB and reuse block symbol. If the reuse block symbol cannot be deleted, it will be skipped

## Example


```javascript
// 1. 创建专用测试原理图（避免误删工程里的现有原理图），等 1.5s 同步
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));

// 2. 删除该原理图
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);

// 3. 回读确认已删除（返回 undefined 说明原理图已不存在）
await new Promise(r => setTimeout(r, 1500));
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
console.log('info after delete:', info === undefined ? '已不存在' : info.name);
```

### deleteschematicpage

# DMT\_Schematic.deleteSchematicPage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Schematic sheet

## Signature

```typescript
public deleteSchematicPage(schematicPageUuid: string): Promise<boolean>;
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

schematicPageUuid


</td><td>

string


</td><td>

Schematic sheet UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Example


```javascript
// 1. 创建专用测试原理图（自带图页 p1），等 1.5s 同步
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));

// 2. 再追加一个测试图页 p2 作为删除目标
const pageUuid = await eda.dmt_Schematic.createSchematicPage(schematicUuid);
await new Promise(r => setTimeout(r, 1500));

// 3. 删除测试图页 p2（只删这一页，原理图保留）
const deleted = await eda.dmt_Schematic.deleteSchematicPage(pageUuid);
console.log('deleted:', deleted);

// 4. 回读确认：图页已不存在，原理图回到只剩 p1
await new Promise(r => setTimeout(r, 1500));
const pageInfo = await eda.dmt_Schematic.getSchematicPageInfo(pageUuid);
console.log('page after delete:', pageInfo === undefined ? '已不存在' : pageInfo.name);
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
console.log('remaining pages:', (info?.page || []).map(p => p.name).join(', '));

// 5. 清理测试原理图
await new Promise(r => setTimeout(r, 1000));
const deletedSch = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deletedSch);
```

### getallschematicpagesinfo

# DMT\_Schematic.getAllSchematicPagesInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all in the project schematic sheet detailed properties of

## Signature

```typescript
public getAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;
```


## Returns

Promise&lt;Array&lt;[IDMT\_SchematicPageItem](../interfaces/IDMT_SchematicPageItem.md)<!-- -->&gt;&gt;

Array of detailed properties of all schematic sheets

## Example


```javascript
// 1. 创建测试原理图并追加一页（共 2 页），保证列表里有新近创建的页
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_Schematic.createSchematicPage(schematicUuid);
await new Promise(r => setTimeout(r, 1500));

// 2. 获取工程内所有图页的详细属性
const pages = await eda.dmt_Schematic.getAllSchematicPagesInfo();

// 3. 输出每页名称、UUID 与所属原理图，确认测试页在列
pages.slice(0, 10).forEach((p, i) => {
  console.log(`page[${i}]:`, p.name, p.uuid, 'parent:', p.parentSchematicUuid);
});
console.log('total:', pages.length);
console.log('testPagesIncluded:', pages.filter(p => p.parentSchematicUuid === schematicUuid).length === 2);

// 4. 清理测试原理图
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### getallschematicsinfo

# DMT\_Schematic.getAllSchematicsInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all in the project schematic detailed properties of

## Signature

```typescript
public getAllSchematicsInfo(): Promise<Array<IDMT_SchematicItem>>;
```


## Returns

Promise&lt;Array&lt;[IDMT\_SchematicItem](../interfaces/IDMT_SchematicItem.md)<!-- -->&gt;&gt;

Array of detailed properties of all schematics

## Example


```javascript
// 1. 创建一个测试原理图并等 1.5s 同步，保证列表里有新近创建的对象
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));

// 2. 获取所有原理图的详细属性
const schematics = await eda.dmt_Schematic.getAllSchematicsInfo();

// 3. 输出每个原理图的名称、UUID 与图页数，确认测试原理图在列
schematics.slice(0, 10).forEach((s, i) => {
  console.log(`schematic[${i}]:`, s.name, s.uuid, 'pages:', (s.page || []).length, 'board:', s.parentBoardName ?? '游离');
});
console.log('total:', schematics.length);
console.log('testSchematicIncluded:', schematics.some(s => s.uuid === schematicUuid));

// 4. 清理测试原理图
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### getcurrentschematicallschematicpagesinfo

# DMT\_Schematic.getCurrentSchematicAllSchematicPagesInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the detailed properties of all schematic sheets in the current schematic

## Signature

```typescript
public getCurrentSchematicAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;
```


## Returns

Promise&lt;Array&lt;[IDMT\_SchematicPageItem](../interfaces/IDMT_SchematicPageItem.md)<!-- -->&gt;&gt;

Array of detailed properties of all schematic sheets

## Example


```javascript
// 1. 创建专用测试原理图（自带图页 p1）并追加一页
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_Schematic.createSchematicPage(schematicUuid);
await new Promise(r => setTimeout(r, 1500));

// 2. 打开测试原理图的自带图页 p1，把焦点切到该原理图上
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
await eda.dmt_EditorControl.openDocument(info.page[0].uuid);
await new Promise(r => setTimeout(r, 1000));

// 3. 获取当前原理图内所有图页的详细属性
const pages = await eda.dmt_Schematic.getCurrentSchematicAllSchematicPagesInfo();

// 4. 输出每页名称与 UUID，确认全部归属当前原理图
pages.forEach((p, i) => {
  console.log(`page[${i}]:`, p.name, p.uuid);
});
console.log('total:', pages.length);
console.log('allBelongToCurrent:', pages.every(p => p.parentSchematicUuid === schematicUuid));

// 5. 清理测试原理图（处于打开状态也可以直接删除）
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### getcurrentschematicinfo

# DMT\_Schematic.getCurrentSchematicInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get detailed properties of Current schematic

## Signature

```typescript
public getCurrentSchematicInfo(): Promise<IDMT_SchematicItem | undefined>;
```


## Returns

Promise&lt;[IDMT\_SchematicItem](../interfaces/IDMT_SchematicItem.md) \| undefined&gt;

Schematic detailed properties of; if it is `undefined`<!-- -->, the retrieval failed

## Remarks

It will get the detailed properties of the schematic associated with the currently open schematic sheet that has the last input focus

## Example


```javascript
// 1. 创建专用测试原理图（自带图页 p1），打开该页让焦点落到测试原理图上
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
await eda.dmt_EditorControl.openDocument(info.page[0].uuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 获取当前焦点原理图的详细属性
const current = await eda.dmt_Schematic.getCurrentSchematicInfo();

// 3. 输出原理图的名称、UUID 与图页，确认正是测试原理图
console.log('name:', current?.name);
console.log('schematicUuid:', current?.uuid);
console.log('pages:', (current?.page || []).map(p => p.name).join(', '));
console.log('isFocusedSchematic:', current?.uuid === schematicUuid);

// 4. 清理测试原理图（处于打开状态也可以直接删除）
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### getcurrentschematicpageinfo

# DMT\_Schematic.getCurrentSchematicPageInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get detailed properties of Current schematic sheet

## Signature

```typescript
public getCurrentSchematicPageInfo(): Promise<IDMT_SchematicPageItem | undefined>;
```


## Returns

Promise&lt;[IDMT\_SchematicPageItem](../interfaces/IDMT_SchematicPageItem.md) \| undefined&gt;

Schematic sheet detailed properties of; if it is `undefined`<!-- -->, the retrieval failed

## Remarks

It will get the detailed properties of the currently open schematic sheet that has the last input focus

## Example


```javascript
// 1. 创建专用测试原理图（自带图页 p1）并打开该页，让焦点落到测试页上
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
const pageUuid = info.page[0].uuid;
await eda.dmt_EditorControl.openDocument(pageUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 获取当前焦点图页的详细属性
const currentPage = await eda.dmt_Schematic.getCurrentSchematicPageInfo();

// 3. 输出图页名称、UUID、所属原理图与明细表开关，确认正是测试页
console.log('name:', currentPage?.name);
console.log('pageUuid:', currentPage?.uuid);
console.log('parentSchematicUuid:', currentPage?.parentSchematicUuid);
console.log('showTitleBlock:', currentPage?.showTitleBlock);
console.log('isFocusedPage:', currentPage?.uuid === pageUuid);

// 4. 清理测试原理图（处于打开状态也可以直接删除）
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### getschematicinfo

# DMT\_Schematic.getSchematicInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get detailed properties of Schematic

## Signature

```typescript
public getSchematicInfo(schematicUuid: string): Promise<IDMT_SchematicItem | undefined>;
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

schematicUuid


</td><td>

string


</td><td>

Schematic UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IDMT\_SchematicItem](../interfaces/IDMT_SchematicItem.md) \| undefined&gt;

Schematic detailed properties of; if it is `undefined`<!-- -->, the retrieval failed

## Example


```javascript
// 1. 创建测试原理图并等 1.5s 同步
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));

// 2. 按 UUID 查询原理图详细属性
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);

// 3. 输出属性
console.log('name:', info?.name);
console.log('itemType:', info?.itemType);
console.log('parentProjectUuid:', info?.parentProjectUuid);
console.log('pages:', (info?.page || []).map(p => p.name).join(', '));

// 4. 清理测试原理图
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### getschematicpageinfo

# DMT\_Schematic.getSchematicPageInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get detailed properties of Schematic sheet

## Signature

```typescript
public getSchematicPageInfo(schematicPageUuid: string): Promise<IDMT_SchematicPageItem | undefined>;
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

schematicPageUuid


</td><td>

string


</td><td>

Schematic sheet UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IDMT\_SchematicPageItem](../interfaces/IDMT_SchematicPageItem.md) \| undefined&gt;

Schematic sheet detailed properties of; if it is `undefined`<!-- -->, the retrieval failed

## Example


```javascript
// 1. 创建测试原理图（自带图页 p1）并等 1.5s 同步
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
const pageUuid = info.page[0].uuid;

// 2. 按 UUID 查询图页详细属性
const pageInfo = await eda.dmt_Schematic.getSchematicPageInfo(pageUuid);

// 3. 输出属性
console.log('name:', pageInfo?.name);
console.log('itemType:', pageInfo?.itemType);
console.log('parentSchematicUuid:', pageInfo?.parentSchematicUuid);
console.log('showTitleBlock:', pageInfo?.showTitleBlock);
console.log('titleBlockFields:', Object.keys(pageInfo?.titleBlockData || {}).length);

// 4. 清理测试原理图
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### modifyschematicname

# DMT\_Schematic.modifySchematicName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Schematic name

## Signature

```typescript
public modifySchematicName(schematicUuid: string, schematicName: string): Promise<boolean>;
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

schematicUuid


</td><td>

string


</td><td>

Schematic UUID


</td></tr>
<tr><td>

schematicName


</td><td>

string


</td><td>

Schematic name


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether Modify Successful

## Remarks

If the schematic is already associated with a reuse block (a reuse block symbol with the same name exists in the project library), modifying the name will also modify the reuse block symbol name and the associated PCB name

## Example


```javascript
// 1. 创建专用测试原理图（自带图页 p1）并等 1.5s 同步
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));

// 2. 打开自带图页 p1（改名只对已打开的原理图生效）
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
await eda.dmt_EditorControl.openDocument(info.page[0].uuid);
await new Promise(r => setTimeout(r, 1000));

// 3. 修改原理图名称（只对本例创建的测试原理图改名）
const newName = '嘉立创示例_原理图新名称';
const renamed = await eda.dmt_Schematic.modifySchematicName(schematicUuid, newName);
console.log('renamed:', renamed);

// 4. 等 1.5s 让改名同步，回读验证（英文名可能被归一化为小写，按不区分大小写比较）
await new Promise(r => setTimeout(r, 1500));
const after = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
console.log('renamedTo:', after?.name);
console.log('renameVerified:', (after?.name ?? '').toLowerCase() === newName.toLowerCase());

// 5. 清理测试原理图，保持工程整洁
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### modifyschematicpagename

# DMT\_Schematic.modifySchematicPageName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Schematic sheet name

## Signature

```typescript
public modifySchematicPageName(schematicPageUuid: string, schematicPageName: string): Promise<boolean>;
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

schematicPageUuid


</td><td>

string


</td><td>

Schematic sheet UUID


</td></tr>
<tr><td>

schematicPageName


</td><td>

string


</td><td>

Schematic sheet name


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether Modify Successful

## Example


```javascript
// 1. 创建专用测试原理图（自带图页 p1 作为改名目标）并等 1.5s 同步
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
const pageUuid = info.page[0].uuid;

// 2. 修改图页名称（只对本例创建的测试图页改名）
const newName = '嘉立创示例_电源页';
const renamed = await eda.dmt_Schematic.modifySchematicPageName(pageUuid, newName);
console.log('renamed:', renamed);

// 3. 等 1.5s 让改名同步，回读验证（英文名可能被归一化为小写，按不区分大小写比较）
await new Promise(r => setTimeout(r, 1500));
const after = await eda.dmt_Schematic.getSchematicPageInfo(pageUuid);
console.log('renamedTo:', after?.name);
console.log('renameVerified:', (after?.name ?? '').toLowerCase() === newName.toLowerCase());

// 4. 清理测试原理图，保持工程整洁
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### modifyschematicpagetitleblock

# DMT\_Schematic.modifySchematicPageTitleBlock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify the title block of a schematic sheet

## Signature

```typescript
public modifySchematicPageTitleBlock(showTitleBlock?: boolean, titleBlockData?: Record<string, { showTitle?: undefined | false | true; showValue?: undefined | false | true; value?: any }>): Promise<boolean>;
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

showTitleBlock


</td><td>

boolean


</td><td>

_(Optional)_ Whether to show the title block. If undefined, the current state will be kept


</td></tr>
<tr><td>

titleBlockData


</td><td>

Record&lt;string, { showTitle?: undefined \| false \| true; showValue?: undefined \| false \| true; value?: any }&gt;


</td><td>

_(Optional)_ The title block items to be modified and their modified values


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the modification was successful. If `showTitleBlock` and `titleBlockData` are not passed in, `false` will be returned. Note that if unrecognized title block items exist but the program does not report an error, `true` will be returned because the unrecognized items are ignored

## Remarks

`titleBlockData` only needs to pass in any title block items to be modified as `key`<!-- -->, along with the values to modify them to. Any unrecognized title block items will be ignored, and any unpassed items and values will remain in their default state

## Example


```javascript
// 1. 创建专用测试原理图并打开自带图页 p1，让焦点落到目标页上
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const info = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
const pageUuid = info.page[0].uuid;
await eda.dmt_EditorControl.openDocument(pageUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 修改明细表：显示明细表，并把"公司"改为示例值（三个字段缺一不可）
const modified = await eda.dmt_Schematic.modifySchematicPageTitleBlock(true, {
  Company: { showTitle: true, showValue: true, value: '嘉立创示例科技' },
});
console.log('modified:', modified);

// 3. 等 1.5s 同步，回读验证明细项已更新
await new Promise(r => setTimeout(r, 1500));
const after = await eda.dmt_Schematic.getSchematicPageInfo(pageUuid);
console.log('showTitleBlock:', after?.showTitleBlock);
console.log('company:', after?.titleBlockData?.Company?.value);
console.log('modifyVerified:', after?.titleBlockData?.Company?.value === '嘉立创示例科技');

// 4. 清理测试原理图，保持工程整洁
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```

### reorderschematicpages

# DMT\_Schematic.reorderSchematicPages() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reorder schematic sheets

## Signature

```typescript
public reorderSchematicPages(schematicUuid: string, schematicPageItemsArray: Array<IDMT_SchematicPageItem>): Promise<boolean>;
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

schematicUuid


</td><td>

string


</td><td>

The UUID of the schematic associated with the sheets being sorted


</td></tr>
<tr><td>

schematicPageItemsArray


</td><td>

Array&lt;[IDMT\_SchematicPageItem](../interfaces/IDMT_SchematicPageItem.md)<!-- -->&gt;


</td><td>

Array of all schematic sheet properties


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Sorting whether the operation is successful

## Remarks

Here, the array of source schematic sheet properties needs to be obtained through [DMT\_Schematic.getAllSchematicPagesInfo()](./DMT_Schematic.md) or other upstream methods. After sorting the array, pass it in

## Example


```javascript
// 1. 创建专用测试原理图（自带图页 p1）并再追加两页，凑出可排序的页序列
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_Schematic.createSchematicPage(schematicUuid);
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_Schematic.createSchematicPage(schematicUuid);
await new Promise(r => setTimeout(r, 1500));

// 2. 从上游接口取得该原理图的全部图页，输出当前顺序
const allPages = await eda.dmt_Schematic.getAllSchematicPagesInfo();
const myPages = allPages.filter(p => p.parentSchematicUuid === schematicUuid);
console.log('orderBefore:', myPages.map(p => p.name).join(' -> '));

// 3. 反转页序列后传入，执行重排
const reversed = [...myPages].reverse();
const reorderOk = await eda.dmt_Schematic.reorderSchematicPages(schematicUuid, reversed);
console.log('reorderOk:', reorderOk);

// 4. 等 1.5s 同步，回读当前页顺序
await new Promise(r => setTimeout(r, 1500));
const after = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
console.log('orderAfter:', (after?.page || []).map(p => p.name).join(' -> '));

// 5. 清理测试原理图，保持工程整洁
await new Promise(r => setTimeout(r, 1000));
const deleted = await eda.dmt_Schematic.deleteSchematic(schematicUuid);
console.log('deleted:', deleted);
```
