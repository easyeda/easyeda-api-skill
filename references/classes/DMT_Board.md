# DMT\_Board class

Document tree / Board management class

## Signature

```typescript
class DMT_Board
```

## Remarks

Operations related to board management in the currently open project

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

Copy Board

</td></tr>
<tr><td>

[createBoard(schematicUuid, pcbUuid)](./DMT_Board.md)

</td><td>

</td><td>

**_(BETA)_** Create Board

</td></tr>
<tr><td>

[deleteBoard(boardName)](./DMT_Board.md)

</td><td>

</td><td>

Delete Board

</td></tr>
<tr><td>

[getAllBoardsInfo()](./DMT_Board.md)

</td><td>

</td><td>

Get all in the project board detailed properties of

</td></tr>
<tr><td>

[getBoardInfo(boardName)](./DMT_Board.md)

</td><td>

</td><td>

Get detailed properties of Board

</td></tr>
<tr><td>

[getCurrentBoardInfo()](./DMT_Board.md)

</td><td>

</td><td>

Get detailed properties of Current board

</td></tr>
<tr><td>

[modifyBoardName(originalBoardName, boardName)](./DMT_Board.md)

</td><td>

</td><td>

Modify Board name

</td></tr>
</tbody></table>

---

## 方法详情

### copyboard

# DMT\_Board.copyBoard() method

Copy Board

## Signature

```typescript
function copyBoard(sourceBoardName: string): Promise<string | undefined>;
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

Source board name

</td></tr>
</tbody></table>

## Returns

Promise&lt;string \| undefined&gt;

New board name, if it is `undefined` the copy fails

## Example

```javascript
// 1. 取第一块板子的名称作为复制源
const boards = await eda.dmt_Board.getAllBoardsInfo();
const sourceName = boards[0].name;

// 2. 复制板子，返回新板子名称
const newBoardName = await eda.dmt_Board.copyBoard(sourceName);
console.log('source:', sourceName);
console.log('copy:', newBoardName);

// 3. 删除复制的板子，保持工程整洁
const deleted = await eda.dmt_Board.deleteBoard(newBoardName);
console.log('deleted:', deleted);
```

### createboard

# DMT\_Board.createBoard() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Board

## Signature

```typescript
function createBoard(schematicUuid?: string, pcbUuid?: string): Promise<string | undefined>;
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

_(Optional)_ Associated schematic UUID

</td></tr>
<tr><td>

pcbUuid

</td><td>

string

</td><td>

_(Optional)_ Associated PCB UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;string \| undefined&gt;

Board name, if it is `undefined` creation fails

## Example

```javascript
// 1. 无参调用，由系统自动创建一对原理图/PCB 文档并关联
const boardName = await eda.dmt_Board.createBoard();
console.log('create:', boardName);

// 2. 删除新板子（其关联文档是本例新建的，删除不影响其他板子），保持工程整洁
const deleted = await eda.dmt_Board.deleteBoard(boardName);
console.log('deleted:', deleted);
```

### deleteboard

# DMT\_Board.deleteBoard() method

Delete Board

## Signature

```typescript
function deleteBoard(boardName: string): Promise<boolean>;
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

Board name

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

If the specified board does not exist, the API will return `false`<!-- -->, indicating that the operation failed

## Example

```javascript
// 1. 复制一块板子作为删除目标，避免误删工程里有用的板子
const boards = await eda.dmt_Board.getAllBoardsInfo();
const tempName = await eda.dmt_Board.copyBoard(boards[0].name);
console.log('temp board:', tempName);

// 2. 删除该板子
const deleted = await eda.dmt_Board.deleteBoard(tempName);
console.log('deleted:', deleted);
```

### getallboardsinfo

# DMT\_Board.getAllBoardsInfo() method

Get all in the project board detailed properties of

## Signature

```typescript
function getAllBoardsInfo(): Promise<Array<IDMT_BoardItem>>;
```

## Returns

Promise&lt;Array&lt;[IDMT\_BoardItem](../interfaces/IDMT_BoardItem.md)<!-- -->&gt;&gt;

Array of detailed properties of all Board

## Example

```javascript
// 1. 获取工程内所有板子
const boards = await eda.dmt_Board.getAllBoardsInfo();

// 2. 输出每块板子的名称与下属文档
boards.forEach((board, i) => {
	console.log(`board[${i}]:`, board.name, 'schematic:', board.schematic?.uuid, 'pcb:', board.pcb?.uuid);
});

console.log('total:', boards.length);
```

### getboardinfo

# DMT\_Board.getBoardInfo() method

Get detailed properties of Board

## Signature

```typescript
function getBoardInfo(boardName: string): Promise<IDMT_BoardItem | undefined>;
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

Board name

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IDMT\_BoardItem](../interfaces/IDMT_BoardItem.md) \| undefined&gt;

Board detailed properties of; if it is `undefined`<!-- -->, the retrieval failed

## Example

```javascript
// 1. 先盘点所有板子，取第一块的名称作为查询目标
const boards = await eda.dmt_Board.getAllBoardsInfo();
const targetName = boards[0].name;

// 2. 按名称查询该板子的详细属性
const board = await eda.dmt_Board.getBoardInfo(targetName);

// 3. 输出板子属性
console.log('name:', board.name);
console.log('parentProjectUuid:', board.parentProjectUuid);
console.log('schematic:', board.schematic?.uuid);
console.log('pcb:', board.pcb?.uuid);
```

### getcurrentboardinfo

# DMT\_Board.getCurrentBoardInfo() method

Get detailed properties of Current board

## Signature

```typescript
function getCurrentBoardInfo(): Promise<IDMT_BoardItem | undefined>;
```

## Returns

Promise&lt;[IDMT\_BoardItem](../interfaces/IDMT_BoardItem.md) \| undefined&gt;

Board detailed properties of; if it is `undefined`<!-- -->, the retrieval failed

## Remarks

It will get the detailed properties of the board associated with the currently open schematic or PCB that has the last input focus

## Example

```javascript
// 1. 切换到第一块板子下属的 PCB 文档（工程里可能存在不属于任何板子的 PCB，不能直接取 getAllPcbsInfo()[0]）
const boards = await eda.dmt_Board.getAllBoardsInfo();
await eda.dmt_EditorControl.openDocument(boards[0].pcb.uuid);
await new Promise(r => setTimeout(r, 500));

// 2. 获取当前焦点对应的板子
const board = await eda.dmt_Board.getCurrentBoardInfo();

// 3. 输出板子属性
console.log('name:', board.name);
console.log('schematic:', board.schematic?.uuid);
console.log('pcb:', board.pcb?.uuid);
```

### modifyboardname

# DMT\_Board.modifyBoardName() method

Modify Board name

## Signature

```typescript
function modifyBoardName(originalBoardName: string, boardName: string): Promise<boolean>;
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

Original board name

</td></tr>
<tr><td>

boardName

</td><td>

string

</td><td>

New board name

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether Modify Successful

## Example

```javascript
// 1. 取第一块板子，记录原名称
const boards = await eda.dmt_Board.getAllBoardsInfo();
const originalName = boards[0].name;
const newName = `${originalName}_tmp`;

// 2. 改名并输出结果
const modified = await eda.dmt_Board.modifyBoardName(originalName, newName);
console.log('original:', originalName);
console.log('new:', newName);
console.log('modified:', modified);

// 3. 等待改名生效后改回原名称（改名是异步提交，紧跟的第二次改名会返回 false）
await new Promise(r => setTimeout(r, 1000));
const restored = await eda.dmt_Board.modifyBoardName(newName, originalName);
console.log('restored:', restored);
```
