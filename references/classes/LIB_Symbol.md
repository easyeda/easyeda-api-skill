# LIB\_Symbol class

综合库 / 符号类

## 签名

```typescript
declare class LIB_Symbol 
```

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[copy(symbolUuid, libraryUuid, targetLibraryUuid, targetClassification, newSymbolName)](./LIB_Symbol.md)


</td><td>


</td><td>

**_(BETA)_** 复制符号


</td></tr>
<tr><td>

[create(libraryUuid, symbolName, classification, symbolType, description)](./LIB_Symbol.md)


</td><td>


</td><td>

**_(BETA)_** 创建符号


</td></tr>
<tr><td>

[delete(symbolUuid, libraryUuid)](./LIB_Symbol.md)


</td><td>


</td><td>

**_(BETA)_** 删除符号


</td></tr>
<tr><td>

[get(symbolUuid, libraryUuid)](./LIB_Symbol.md)


</td><td>


</td><td>

**_(BETA)_** 获取符号的所有属性


</td></tr>
<tr><td>

[modify(symbolUuid, libraryUuid, symbolName, classification, description)](./LIB_Symbol.md)


</td><td>


</td><td>

**_(BETA)_** 修改符号


</td></tr>
<tr><td>

[openInEditor(symbolUuid, libraryUuid, splitScreenId)](./LIB_Symbol.md)


</td><td>


</td><td>

**_(BETA)_** 在编辑器打开文档


</td></tr>
<tr><td>

[search(key, libraryUuid, classification, symbolType, itemsOfPage, page)](./LIB_Symbol.md)


</td><td>


</td><td>

**_(BETA)_** 搜索符号


</td></tr>
<tr><td>

[updateDocumentSource(symbolUuid, libraryUuid, documentSource)](./LIB_Symbol.md)


</td><td>


</td><td>

**_(BETA)_** 更新符号的文档源码


</td></tr>
</tbody></table>

---

## 方法详情

### copy

# LIB\_Symbol.copy() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

复制符号

## 签名

```typescript
copy(symbolUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newSymbolName?: string): Promise<string | undefined>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

symbolUuid


</td><td>

string


</td><td>

符号 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

targetLibraryUuid


</td><td>

string


</td><td>

目标库 UUID


</td></tr>
<tr><td>

targetClassification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_（可选）_ 目标库内的分类


</td></tr>
<tr><td>

newSymbolName


</td><td>

string


</td><td>

_（可选）_ 新符号名称，如若目标库内存在重名符号将导致复制失败


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

目标库内新符号的 UUID

### create

# LIB\_Symbol.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建符号

## 签名

```typescript
create(libraryUuid: string, symbolName: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, description?: string): Promise<string | undefined>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

symbolName


</td><td>

string


</td><td>

符号名称


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_（可选）_ 分类


</td></tr>
<tr><td>

symbolType


</td><td>

[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)


</td><td>

_（可选）_ 符号类型


</td></tr>
<tr><td>

description


</td><td>

string


</td><td>

_（可选）_ 描述


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

符号 UUID

### delete

# LIB\_Symbol.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除符号

## 签名

```typescript
delete(symbolUuid: string, libraryUuid: string): Promise<boolean>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

symbolUuid


</td><td>

string


</td><td>

符号 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

### get

# LIB\_Symbol.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取符号的所有属性

## 签名

```typescript
get(symbolUuid: string, libraryUuid?: string): Promise<ILIB_SymbolItem | undefined>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

symbolUuid


</td><td>

string


</td><td>

符号 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_（可选）_ 库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[ILIB\_SymbolItem](../interfaces/ILIB_SymbolItem.md) \| undefined&gt;

符号属性

### modify

# LIB\_Symbol.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改符号

## 签名

```typescript
modify(symbolUuid: string, libraryUuid: string, symbolName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

symbolUuid


</td><td>

string


</td><td>

符号 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

symbolName


</td><td>

string


</td><td>

_（可选）_ 符号名称


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt; \| null


</td><td>

_（可选）_ 分类


</td></tr>
<tr><td>

description


</td><td>

string \| null


</td><td>

_（可选）_ 描述


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

如希望清除某些属性，则将其的值设置为 `null`

### openineditor

# LIB\_Symbol.openInEditor() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

在编辑器打开文档

## 签名

```typescript
openInEditor(symbolUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

symbolUuid


</td><td>

string


</td><td>

符号 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

splitScreenId


</td><td>

string


</td><td>

_（可选）_ 分屏 ID，不填写则默认在最后输入焦点的分屏内打开，可以使用 [DMT\_EditorControl](./DMT_EditorControl.md) 内的接口获取


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

标签页 ID，对应 [IDMT\_EditorTabItem.tabId](../interfaces/IDMT_EditorTabItem.md)<!-- -->，可使用 [DMT\_EditorControl.getSplitScreenIdByTabId()](./DMT_EditorControl.md) 获取到分屏 ID

### search

# LIB\_Symbol.search() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

搜索符号

## 签名

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_SymbolSearchItem>>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

key


</td><td>

string


</td><td>

搜索关键字


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

_（可选）_ 库 UUID，默认为系统库，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

classification


</td><td>

[ILIB\_ClassificationIndex](../interfaces/ILIB_ClassificationIndex.md) \| Array&lt;string&gt;


</td><td>

_（可选）_ 分类，默认为全部


</td></tr>
<tr><td>

symbolType


</td><td>

[ELIB\_SymbolType](../enums/ELIB_SymbolType.md)


</td><td>

_（可选）_ 符号类型，默认为全部


</td></tr>
<tr><td>

itemsOfPage


</td><td>

number


</td><td>

_（可选）_ 一页搜索结果的数量


</td></tr>
<tr><td>

page


</td><td>

number


</td><td>

_（可选）_ 页数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ILIB\_SymbolSearchItem](../interfaces/ILIB_SymbolSearchItem.md)<!-- -->&gt;&gt;

搜索到的符号属性列表

### updatedocumentsource

# LIB\_Symbol.updateDocumentSource() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

更新符号的文档源码

## 签名

```typescript
updateDocumentSource(symbolUuid: string, libraryUuid: string, documentSource: string): Promise<boolean | undefined>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

symbolUuid


</td><td>

string


</td><td>

符号 UUID


</td></tr>
<tr><td>

libraryUuid


</td><td>

string


</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./LIB_LibrariesList.md) 内的接口获取


</td></tr>
<tr><td>

documentSource


</td><td>

string


</td><td>

文档源码


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean \| undefined&gt;

是否更新成功
