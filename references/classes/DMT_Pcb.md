# DMT\_Pcb class

Document tree / PCB management class

## Signature

```typescript
class DMT_Pcb
```

## Remarks

Operations related to PCB management in the currently open project

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[copyPcb(pcbUuid, boardName)](./DMT_Pcb.md)

</td><td>

</td><td>

Copy PCB

</td></tr>
<tr><td>

[createPcb(boardName)](./DMT_Pcb.md)

</td><td>

</td><td>

Create PCB

</td></tr>
<tr><td>

[deletePcb(pcbUuid)](./DMT_Pcb.md)

</td><td>

</td><td>

Delete PCB

</td></tr>
<tr><td>

[getAllPcbsInfo()](./DMT_Pcb.md)

</td><td>

</td><td>

Get all in the project PCB detailed properties of

</td></tr>
<tr><td>

[getCurrentPcbInfo()](./DMT_Pcb.md)

</td><td>

</td><td>

Get detailed properties of Current PCB

</td></tr>
<tr><td>

[getPcbInfo(pcbUuid)](./DMT_Pcb.md)

</td><td>

</td><td>

Get detailed properties of PCB

</td></tr>
<tr><td>

[modifyPcbName(pcbUuid, pcbName)](./DMT_Pcb.md)

</td><td>

</td><td>

Modify PCB name

</td></tr>
</tbody></table>

---

## 方法详情

### copypcb

# DMT\_Pcb.copyPcb() method

Copy PCB

## Signature

```typescript
function copyPcb(pcbUuid: string, boardName?: string): Promise<string | undefined>;
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

pcbUuid

</td><td>

string

</td><td>

Source PCB UUID

</td></tr>
<tr><td>

boardName

</td><td>

string

</td><td>

_(Optional)_ Name of the board the new PCB belongs to. If not specified, it is a free PCB

</td></tr>
</tbody></table>

## Returns

Promise&lt;string \| undefined&gt;

New PCB UUID. If it is `undefined`<!-- -->, the copy failed

## Remarks

Even if the PCB here is already associated with a reuse block (a reuse block symbol with the same name exists in the project library), no new reuse block symbol will be created. This operation logic is consistent with the current editor front end

## Example

```javascript
// 1. 创建一个专用源 PCB 并等 1.5s 同步（复制前源 PCB 必须已在工作区落地）
const sourceUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));

// 2. 复制源 PCB，返回副本 UUID
const copiedUuid = await eda.dmt_Pcb.copyPcb(sourceUuid);
await new Promise(r => setTimeout(r, 1500));

// 3. 回读副本，确认名称与归属
const copyInfo = await eda.dmt_Pcb.getPcbInfo(copiedUuid);
console.log('copiedUuid:', copiedUuid);
console.log('copyName:', copyInfo?.name);
console.log('copyParentBoardName:', copyInfo?.parentBoardName);

// 4. 清理本例创建的两块 PCB（先删副本再删源），保持工程整洁
const deletedCopy = await eda.dmt_Pcb.deletePcb(copiedUuid);
console.log('deleted:', deletedCopy);
const deletedSource = await eda.dmt_Pcb.deletePcb(sourceUuid);
console.log('deleted:', deletedSource);
```

### createpcb

# DMT\_Pcb.createPcb() method

Create PCB

## Signature

```typescript
function createPcb(boardName?: string): Promise<string | undefined>;
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

_(Optional)_ Name of the board it belongs to. If not specified, it is a free PCB

</td></tr>
</tbody></table>

## Returns

Promise&lt;string \| undefined&gt;

PCB UUID, if it is `undefined` creation fails

## Example

```javascript
// 1. 创建 PCB（不指定 boardName，得到游离 PCB），返回新 PCB UUID
const pcbUuid = await eda.dmt_Pcb.createPcb();
console.log('pcbUuid:', pcbUuid);

// 2. 等 1.5s 让 PCB 在工作区落地，回读确认
await new Promise(r => setTimeout(r, 1500));
const pcbInfo = await eda.dmt_Pcb.getPcbInfo(pcbUuid);
console.log('name:', pcbInfo?.name);
console.log('parentBoardName:', pcbInfo?.parentBoardName);

// 3. 删除本例创建的 PCB，保持工程整洁
const deleted = await eda.dmt_Pcb.deletePcb(pcbUuid);
console.log('deleted:', deleted);
```

### deletepcb

# DMT\_Pcb.deletePcb() method

Delete PCB

## Signature

```typescript
function deletePcb(pcbUuid: string): Promise<boolean>;
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

pcbUuid

</td><td>

string

</td><td>

PCB UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

If the PCB is already associated with a reuse block (a reuse block symbol with the same name exists in the project library), deleting the PCB will also delete the associated schematic and reuse block symbol. If the reuse block symbol cannot be deleted, it will be skipped

## Example

```javascript
// 1. 创建专用测试 PCB（避免误删工程里的现有 PCB），等 1.5s 同步
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));

// 2. 删除该 PCB
const deleted = await eda.dmt_Pcb.deletePcb(pcbUuid);
console.log('deleted:', deleted);

// 3. 回读确认已删除（返回 undefined 说明 PCB 已不存在）
const info = await eda.dmt_Pcb.getPcbInfo(pcbUuid);
console.log('info after delete:', info === undefined ? '已不存在' : info.name);
```

### getallpcbsinfo

# DMT\_Pcb.getAllPcbsInfo() method

Get all in the project PCB detailed properties of

## Signature

```typescript
function getAllPcbsInfo(): Promise<Array<IDMT_PcbItem>>;
```

## Returns

Promise&lt;Array&lt;[IDMT\_PcbItem](../interfaces/IDMT_PcbItem.md)<!-- -->&gt;&gt;

Array of detailed properties of all PCBs

## Example

```javascript
// 1. 创建一个测试 PCB 并等 1.5s 同步，保证列表里有新近创建的对象
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));

// 2. 获取所有 PCB 的详细属性
const pcbs = await eda.dmt_Pcb.getAllPcbsInfo();

// 3. 输出每块 PCB 的名称与 UUID，确认测试 PCB 在列
pcbs.forEach((p, i) => {
	console.log(`pcb[${i}]:`, p.name, p.uuid);
});
console.log('total:', pcbs.length);
console.log('test pcb included:', pcbs.some(p => p.uuid === pcbUuid));

// 4. 清理测试 PCB（查询类案例不留测试对象）
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### getcurrentpcbinfo

# DMT\_Pcb.getCurrentPcbInfo() method

Get detailed properties of Current PCB

## Signature

```typescript
function getCurrentPcbInfo(): Promise<IDMT_PcbItem | undefined>;
```

## Returns

Promise&lt;[IDMT\_PcbItem](../interfaces/IDMT_PcbItem.md) \| undefined&gt;

PCB detailed properties of; if it is `undefined`<!-- -->, the retrieval failed

## Remarks

It will get the detailed properties of the currently open PCB that has the last input focus

## Example

```javascript
// 1. 创建测试 PCB 并打开它，让焦点落到 PCB 文档上（原理图焦点下返回 undefined）
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 获取当前焦点 PCB 的详细属性
const pcb = await eda.dmt_Pcb.getCurrentPcbInfo();

// 3. 输出 PCB 的名称、UUID 与所属工程
console.log('name:', pcb?.name);
console.log('pcbUuid:', pcb?.uuid);
console.log('parentProjectUuid:', pcb?.parentProjectUuid);

// 4. 清理测试 PCB（PCB 处于打开状态也可以直接删除）
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### getpcbinfo

# DMT\_Pcb.getPcbInfo() method

Get detailed properties of PCB

## Signature

```typescript
function getPcbInfo(pcbUuid: string): Promise<IDMT_PcbItem | undefined>;
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

pcbUuid

</td><td>

string

</td><td>

PCB UUID

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IDMT\_PcbItem](../interfaces/IDMT_PcbItem.md) \| undefined&gt;

PCB detailed properties of; if it is `undefined`<!-- -->, the retrieval failed

## Example

```javascript
// 1. 创建测试 PCB 并等 1.5s 同步
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));

// 2. 按 UUID 查询 PCB 详细属性
const pcbInfo = await eda.dmt_Pcb.getPcbInfo(pcbUuid);

// 3. 输出属性
console.log('name:', pcbInfo?.name);
console.log('itemType:', pcbInfo?.itemType);
console.log('parentBoardName:', pcbInfo?.parentBoardName);
console.log('parentProjectUuid:', pcbInfo?.parentProjectUuid);

// 4. 清理测试 PCB（查询类案例不留测试对象）
await eda.dmt_Pcb.deletePcb(pcbUuid);
```

### modifypcbname

# DMT\_Pcb.modifyPcbName() method

Modify PCB name

## Signature

```typescript
function modifyPcbName(pcbUuid: string, pcbName: string): Promise<boolean>;
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

pcbUuid

</td><td>

string

</td><td>

PCB UUID

</td></tr>
<tr><td>

pcbName

</td><td>

string

</td><td>

PCB name

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

Whether Modify Successful

## Remarks

If the PCB is already associated with a reuse block (a reuse block symbol with the same name exists in the project library), modifying the name will also modify the reuse block symbol name and the associated schematic name

## Example

```javascript
// 1. 创建专用测试 PCB 并等 1.5s 同步
const pcbUuid = await eda.dmt_Pcb.createPcb();
await new Promise(r => setTimeout(r, 1500));

// 2. 打开测试 PCB（改名只对已打开的 PCB 生效）
await eda.dmt_EditorControl.openDocument(pcbUuid);
await new Promise(r => setTimeout(r, 1000));

// 3. 修改 PCB 名称
const newName = '嘉立创示例_PCB新名称';
const renamed = await eda.dmt_Pcb.modifyPcbName(pcbUuid, newName);
console.log('renamed:', renamed);

// 4. 等 1s 让改名同步，回读验证（英文名可能被归一化为小写，按不区分大小写比较）
await new Promise(r => setTimeout(r, 1000));
const info = await eda.dmt_Pcb.getPcbInfo(pcbUuid);
console.log('renamedTo:', info?.name);
console.log('renameVerified:', (info?.name ?? '').toLowerCase() === newName.toLowerCase());

// 5. 清理测试 PCB，保持工程整洁
await eda.dmt_Pcb.deletePcb(pcbUuid);
```
