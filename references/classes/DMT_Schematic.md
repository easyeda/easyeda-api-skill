# DMT\_Schematic class

文档树 / 原理图管理类

## Signature

```typescript
declare class DMT_Schematic 
```

## Remarks

在当前打开的工程内进行原理图管理的相关操作

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

**_(BETA)_** 复制原理图


</td></tr>
<tr><td>

[copySchematicPage(schematicPageUuid, schematicUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 复制原理图图页


</td></tr>
<tr><td>

[createSchematic(boardName)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 创建原理图


</td></tr>
<tr><td>

[createSchematicPage(schematicUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 创建原理图图页


</td></tr>
<tr><td>

[deleteSchematic(schematicUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 删除原理图


</td></tr>
<tr><td>

[deleteSchematicPage(schematicPageUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 删除原理图图页


</td></tr>
<tr><td>

[getAllSchematicPagesInfo()](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 获取工程内所有原理图图页的详细属性


</td></tr>
<tr><td>

[getAllSchematicsInfo()](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 获取工程内所有原理图的详细属性


</td></tr>
<tr><td>

[getCurrentSchematicAllSchematicPagesInfo()](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前原理图内所有原理图图页的详细属性


</td></tr>
<tr><td>

[getCurrentSchematicInfo()](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前原理图的详细属性


</td></tr>
<tr><td>

[getCurrentSchematicPageInfo()](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前原理图图页的详细属性


</td></tr>
<tr><td>

[getSchematicInfo(schematicUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 获取原理图的详细属性


</td></tr>
<tr><td>

[getSchematicPageInfo(schematicPageUuid)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 获取原理图图页的详细属性


</td></tr>
<tr><td>

[modifySchematicName(schematicUuid, schematicName)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 修改原理图名称


</td></tr>
<tr><td>

[modifySchematicPageName(schematicPageUuid, schematicPageName)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 修改原理图图页名称


</td></tr>
<tr><td>

[modifySchematicPageTitleBlock(showTitleBlock, titleBlockData)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 修改原理图图页明细表


</td></tr>
<tr><td>

[reorderSchematicPages(schematicUuid, schematicPageItemsArray)](./DMT_Schematic.md)


</td><td>


</td><td>

**_(BETA)_** 重新排序原理图图页


</td></tr>
</tbody></table>

---

## 方法详情

### copyschematic

# DMT\_Schematic.copySchematic() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

复制原理图

## Signature

```typescript
copySchematic(schematicUuid: string, boardName?: string): Promise<string | undefined>;
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

源原理图 UUID


</td></tr>
<tr><td>

boardName


</td><td>

string


</td><td>

_(Optional)_ 新原理图所属板子名称，如若不指定则为游离原理图


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

新原理图 UUID，如若为 `undefined` 则复制失败

## Remarks

如若原理图已关联复用模块（在工程库内存在同名的复用模块符号），则复制原理图时将同步新建复用模块符号

### copyschematicpage

# DMT\_Schematic.copySchematicPage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

复制原理图图页

## Signature

```typescript
copySchematicPage(schematicPageUuid: string, schematicUuid?: string): Promise<string | undefined>;
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

源原理图图页 UUID


</td></tr>
<tr><td>

schematicUuid


</td><td>

string


</td><td>

_(Optional)_ 目标原理图 UUID，如若不指定则为当前原理图


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

新原理图图页 UUID，如若为 `undefined` 则复制失败

### createschematic

# DMT\_Schematic.createSchematic() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建原理图

## Signature

```typescript
createSchematic(boardName?: string): Promise<string | undefined>;
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

_(Optional)_ 所属板子名称，如若不指定则为游离原理图


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

原理图 UUID，如若为 `undefined` 则创建失败

### createschematicpage

# DMT\_Schematic.createSchematicPage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建原理图图页

## Signature

```typescript
createSchematicPage(schematicUuid: string): Promise<string | undefined>;
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

所属原理图 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

原理图图页 UUID，如若为 `undefined` 则创建失败

### deleteschematic

# DMT\_Schematic.deleteSchematic() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除原理图

## Signature

```typescript
deleteSchematic(schematicUuid: string): Promise<boolean>;
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

原理图 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

如若原理图已关联复用模块（在工程库内存在同名的复用模块符号），则删除原理图时将同步删除关联的 PCB 和复用模块符号，复用模块符号不可删除则跳过

### deleteschematicpage

# DMT\_Schematic.deleteSchematicPage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

删除原理图图页

## Signature

```typescript
deleteSchematicPage(schematicPageUuid: string): Promise<boolean>;
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

原理图图页 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### getallschematicpagesinfo

# DMT\_Schematic.getAllSchematicPagesInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取工程内所有原理图图页的详细属性

## Signature

```typescript
getAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;
```


## Returns

Promise&lt;Array&lt;[IDMT\_SchematicPageItem](../interfaces/IDMT_SchematicPageItem.md)<!-- -->&gt;&gt;

所有原理图图页的详细属性的数组

### getallschematicsinfo

# DMT\_Schematic.getAllSchematicsInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取工程内所有原理图的详细属性

## Signature

```typescript
getAllSchematicsInfo(): Promise<Array<IDMT_SchematicItem>>;
```


## Returns

Promise&lt;Array&lt;[IDMT\_SchematicItem](../interfaces/IDMT_SchematicItem.md)<!-- -->&gt;&gt;

所有原理图的详细属性的数组

### getcurrentschematicallschematicpagesinfo

# DMT\_Schematic.getCurrentSchematicAllSchematicPagesInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前原理图内所有原理图图页的详细属性

## Signature

```typescript
getCurrentSchematicAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;
```


## Returns

Promise&lt;Array&lt;[IDMT\_SchematicPageItem](../interfaces/IDMT_SchematicPageItem.md)<!-- -->&gt;&gt;

所有原理图图页的详细属性的数组

### getcurrentschematicinfo

# DMT\_Schematic.getCurrentSchematicInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前原理图的详细属性

## Signature

```typescript
getCurrentSchematicInfo(): Promise<IDMT_SchematicItem | undefined>;
```


## Returns

Promise&lt;[IDMT\_SchematicItem](../interfaces/IDMT_SchematicItem.md) \| undefined&gt;

原理图的详细属性，如若为 `undefined` 则获取失败

## Remarks

将会获取当前打开且拥有最后输入焦点的原理图图页所关联的原理图的详细属性

### getcurrentschematicpageinfo

# DMT\_Schematic.getCurrentSchematicPageInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前原理图图页的详细属性

## Signature

```typescript
getCurrentSchematicPageInfo(): Promise<IDMT_SchematicPageItem | undefined>;
```


## Returns

Promise&lt;[IDMT\_SchematicPageItem](../interfaces/IDMT_SchematicPageItem.md) \| undefined&gt;

原理图图页的详细属性，如若为 `undefined` 则获取失败

## Remarks

将会获取当前打开且拥有最后输入焦点的原理图图页的详细属性

### getschematicinfo

# DMT\_Schematic.getSchematicInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取原理图的详细属性

## Signature

```typescript
getSchematicInfo(schematicUuid: string): Promise<IDMT_SchematicItem | undefined>;
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

原理图 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IDMT\_SchematicItem](../interfaces/IDMT_SchematicItem.md) \| undefined&gt;

原理图的详细属性，如若为 `undefined` 则获取失败

### getschematicpageinfo

# DMT\_Schematic.getSchematicPageInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取原理图图页的详细属性

## Signature

```typescript
getSchematicPageInfo(schematicPageUuid: string): Promise<IDMT_SchematicPageItem | undefined>;
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

原理图图页 UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IDMT\_SchematicPageItem](../interfaces/IDMT_SchematicPageItem.md) \| undefined&gt;

原理图图页的详细属性，如若为 `undefined` 则获取失败

### modifyschematicname

# DMT\_Schematic.modifySchematicName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改原理图名称

## Signature

```typescript
modifySchematicName(schematicUuid: string, schematicName: string): Promise<boolean>;
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

原理图 UUID


</td></tr>
<tr><td>

schematicName


</td><td>

string


</td><td>

原理图名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否修改成功

## Remarks

如若原理图已关联复用模块（在工程库内存在同名的复用模块符号），则修改名称时将同步修改复用模块符号名称与关联 PCB 名称

### modifyschematicpagename

# DMT\_Schematic.modifySchematicPageName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改原理图图页名称

## Signature

```typescript
modifySchematicPageName(schematicPageUuid: string, schematicPageName: string): Promise<boolean>;
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

原理图图页 UUID


</td></tr>
<tr><td>

schematicPageName


</td><td>

string


</td><td>

原理图图页名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否修改成功

### modifyschematicpagetitleblock

# DMT\_Schematic.modifySchematicPageTitleBlock() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改原理图图页明细表

## Signature

```typescript
modifySchematicPageTitleBlock(showTitleBlock?: boolean, titleBlockData?: {
        [key: string]: {
            showTitle?: boolean;
            showValue?: boolean;
            value?: any;
        };
    }): Promise<boolean>;
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

_(Optional)_ 是否显示明细表，不定义将保持当前状态


</td></tr>
<tr><td>

titleBlockData


</td><td>

\{ \[key: string\]: \{ showTitle?: boolean; showValue?: boolean; value?: any; \}; \}


</td><td>

_(Optional)_ 需要修改的明细项及其修改的值


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

修改操作是否成功，如若未传入 `showTitleBlock` 和 `titleBlockData` 将返回 `false`<!-- -->；请注意，如若存在无法识别的明细项但程序并未出错，将返回 `true` 的结果，因为无法识别的明细项被忽略

## Remarks

`titleBlockData` 仅需要传入任何需要修改的明细项作为 `key`<!-- -->，并传入其需要修改的值，任何无法识别的明细项将被忽略，任何未传入的项和值将保持默认状态

### reorderschematicpages

# DMT\_Schematic.reorderSchematicPages() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

重新排序原理图图页

## Signature

```typescript
reorderSchematicPages(schematicUuid: string, schematicPageItemsArray: Array<IDMT_SchematicPageItem>): Promise<boolean>;
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

执行排序的图页所关联的原理图 UUID


</td></tr>
<tr><td>

schematicPageItemsArray


</td><td>

Array&lt;[IDMT\_SchematicPageItem](../interfaces/IDMT_SchematicPageItem.md)<!-- -->&gt;


</td><td>

所有原理图图页属性的数组


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

排序操作是否成功

## Remarks

此处源原理图图页属性的数组需要通过 [DMT\_Schematic.getAllSchematicPagesInfo()](./DMT_Schematic.md) 或其它上游方法取得，完成数组排序后传入
