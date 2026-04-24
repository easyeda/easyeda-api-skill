# LIB\_LibrariesList class

综合库 / 库列表类

## Signature

```typescript
declare class LIB_LibrariesList 
```

## Remarks

此处所有接口都基于编辑器当前工作区环境，如需切换到其他工作区，请使用 [DMT\_Workspace.toggleToWorkspace()](./DMT_Workspace.md) 接口切换工作区


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[getAllLibrariesList()](./LIB_LibrariesList.md)


</td><td>


</td><td>

获取所有库的列表


</td></tr>
<tr><td>

[getFavoriteLibraryUuid()](./LIB_LibrariesList.md)


</td><td>


</td><td>

获取收藏库的 UUID


</td></tr>
<tr><td>

[getPersonalLibraryUuid()](./LIB_LibrariesList.md)


</td><td>


</td><td>

获取个人库的 UUID


</td></tr>
<tr><td>

[getProjectLibraryUuid()](./LIB_LibrariesList.md)


</td><td>


</td><td>

获取工程库的 UUID


</td></tr>
<tr><td>

[getSystemLibraryUuid()](./LIB_LibrariesList.md)


</td><td>


</td><td>

获取系统库的 UUID


</td></tr>
</tbody></table>

---

## 方法详情

### getalllibrarieslist

# LIB\_LibrariesList.getAllLibrariesList() method

获取所有库的列表

## Signature

```typescript
getAllLibrariesList(): Promise<Array<ILIB_LibraryInfo>>;
```


## Returns

Promise&lt;Array&lt;[ILIB\_LibraryInfo](../interfaces/ILIB_LibraryInfo.md)<!-- -->&gt;&gt;

库信息列表

## Remarks

此处不会获取到系统库、个人库、工程库、收藏库的信息，如需获取它们的信息，请使用 [getSystemLibraryUuid](./LIB_LibrariesList.md)<!-- -->、[getPersonalLibraryUuid](./LIB_LibrariesList.md)<!-- -->、[getProjectLibraryUuid](./LIB_LibrariesList.md)<!-- -->、[getFavoriteLibraryUuid](./LIB_LibrariesList.md) 接口

### getfavoritelibraryuuid

# LIB\_LibrariesList.getFavoriteLibraryUuid() method

获取收藏库的 UUID

## Signature

```typescript
getFavoriteLibraryUuid(): Promise<string | undefined>;
```


## Returns

Promise&lt;string \| undefined&gt;

收藏库的 UUID

## Remarks

将会获取当前编辑器工作区下的收藏库的 UUID

### getpersonallibraryuuid

# LIB\_LibrariesList.getPersonalLibraryUuid() method

获取个人库的 UUID

## Signature

```typescript
getPersonalLibraryUuid(): Promise<string | undefined>;
```


## Returns

Promise&lt;string \| undefined&gt;

个人库的 UUID

## Remarks

将会获取当前编辑器工作区下的个人库的 UUID，在私有部署环境下不存在个人库，此接口将永远返回 `undefined`

### getprojectlibraryuuid

# LIB\_LibrariesList.getProjectLibraryUuid() method

获取工程库的 UUID

## Signature

```typescript
getProjectLibraryUuid(): Promise<string | undefined>;
```


## Returns

Promise&lt;string \| undefined&gt;

工程库的 UUID

## Remarks

在未打开工程的情况下调用将返回 `undefined`

### getsystemlibraryuuid

# LIB\_LibrariesList.getSystemLibraryUuid() method

获取系统库的 UUID

## Signature

```typescript
getSystemLibraryUuid(): Promise<string | undefined>;
```


## Returns

Promise&lt;string \| undefined&gt;

系统库的 UUID
