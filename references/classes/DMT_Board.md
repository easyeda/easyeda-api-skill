# DMT\_Board class

文档树 / 板子管理类

## Signature

```typescript
declare class DMT_Board 
```

## Remarks

在当前打开的工程内进行板子管理的相关操作

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[copyBoard(sourceBoardName)](./DMT_Board.md)


</td><td>


</td><td>

复制板子


</td></tr>
<tr><td>

[createBoard(schematicUuid, pcbUuid)](./DMT_Board.md)


</td><td>


</td><td>

**_(BETA)_** 创建板子


</td></tr>
<tr><td>

[deleteBoard(boardName)](./DMT_Board.md)


</td><td>


</td><td>

删除板子


</td></tr>
<tr><td>

[getAllBoardsInfo()](./DMT_Board.md)


</td><td>


</td><td>

获取工程内所有板子的详细属性


</td></tr>
<tr><td>

[getBoardInfo(boardName)](./DMT_Board.md)


</td><td>


</td><td>

获取板子的详细属性


</td></tr>
<tr><td>

[getCurrentBoardInfo()](./DMT_Board.md)


</td><td>


</td><td>

获取当前板子的详细属性


</td></tr>
<tr><td>

[modifyBoardName(originalBoardName, boardName)](./DMT_Board.md)


</td><td>


</td><td>

修改板子名称


</td></tr>
</tbody></table>

---

## 方法详情

### copyboard

# DMT\_Board.copyBoard() method

复制板子

## Signature

```typescript
copyBoard(sourceBoardName: string): Promise<string | undefined>;
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

sourceBoardName


</td><td>

string


</td><td>

源板子名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

新板子名称，如若为 `undefined` 则复制失败

### createboard

# DMT\_Board.createBoard() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建板子

## Signature

```typescript
createBoard(schematicUuid?: string, pcbUuid?: string): Promise<string | undefined>;
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

_(Optional)_ 关联原理图 UUID


</td></tr>
<tr><td>

pcbUuid


</td><td>

string


</td><td>

_(Optional)_ 关联 PCB UUID


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

板子名称，如若为 `undefined` 则创建失败

### deleteboard

# DMT\_Board.deleteBoard() method

删除板子

## Signature

```typescript
deleteBoard(boardName: string): Promise<boolean>;
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

板子名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

## Remarks

如若指定板子不存在，接口将返回 `false` 的结果，表示操作失败

### getallboardsinfo

# DMT\_Board.getAllBoardsInfo() method

获取工程内所有板子的详细属性

## Signature

```typescript
getAllBoardsInfo(): Promise<Array<IDMT_BoardItem>>;
```


## Returns

Promise&lt;Array&lt;[IDMT\_BoardItem](../interfaces/IDMT_BoardItem.md)<!-- -->&gt;&gt;

所有板子的详细属性的数组

### getboardinfo

# DMT\_Board.getBoardInfo() method

获取板子的详细属性

## Signature

```typescript
getBoardInfo(boardName: string): Promise<IDMT_BoardItem | undefined>;
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

板子名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;[IDMT\_BoardItem](../interfaces/IDMT_BoardItem.md) \| undefined&gt;

板子的详细属性，如若为 `undefined` 则获取失败

### getcurrentboardinfo

# DMT\_Board.getCurrentBoardInfo() method

获取当前板子的详细属性

## Signature

```typescript
getCurrentBoardInfo(): Promise<IDMT_BoardItem | undefined>;
```


## Returns

Promise&lt;[IDMT\_BoardItem](../interfaces/IDMT_BoardItem.md) \| undefined&gt;

板子的详细属性，如若为 `undefined` 则获取失败

## Remarks

将会获取当前打开且拥有最后输入焦点的原理图、PCB 所关联的板子的详细属性

### modifyboardname

# DMT\_Board.modifyBoardName() method

修改板子名称

## Signature

```typescript
modifyBoardName(originalBoardName: string, boardName: string): Promise<boolean>;
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

originalBoardName


</td><td>

string


</td><td>

原板子名称


</td></tr>
<tr><td>

boardName


</td><td>

string


</td><td>

新板子名称


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

是否修改成功
