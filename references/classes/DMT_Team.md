# DMT\_Team class

Document tree / Team class

## Signature

```typescript
class DMT_Team
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

[getAllInvolvedTeamInfo()](./DMT_Team.md)

</td><td>

</td><td>

Get the detailed properties of all involved teams

</td></tr>
<tr><td>

[getAllTeamsInfo()](./DMT_Team.md)

</td><td>

</td><td>

Get the detailed properties of all direct teams

</td></tr>
<tr><td>

[getCurrentTeamInfo()](./DMT_Team.md)

</td><td>

</td><td>

Get the detailed properties of the current team

</td></tr>
</tbody></table>

---

## 方法详情

### getallinvolvedteaminfo

# DMT\_Team.getAllInvolvedTeamInfo() method

Get the detailed properties of all involved teams

## Signature

```typescript
function getAllInvolvedTeamInfo(): Promise<Array<IDMT_TeamItem>>;
```

## Returns

Promise&lt;Array&lt;[IDMT\_TeamItem](../interfaces/IDMT_TeamItem.md)<!-- -->&gt;&gt;

Detailed properties of all involved teams

## Example

```javascript
// 1. 尝试获取所有参与的团队（当前版本会触发内部缺陷）
let teams;
try {
	teams = await eda.dmt_Team.getAllInvolvedTeamInfo();
}
catch (e) {
	console.log('说明：当前版本触发内部缺陷，改用 getAllTeamsInfo 替代：', e.message);

	// 2. 替代方案：获取所有直接团队
	teams = await eda.dmt_Team.getAllTeamsInfo();
}

// 3. 输出团队数量与每个团队的属性
console.log('团队数量：', teams.length);
teams.forEach((team, i) => {
	console.log(`团队${i + 1}：`, team.name, 'uuid:', team.uuid);
});
```

### getallteamsinfo

# DMT\_Team.getAllTeamsInfo() method

Get the detailed properties of all direct teams

## Signature

```typescript
function getAllTeamsInfo(): Promise<Array<IDMT_TeamItem>>;
```

## Returns

Promise&lt;Array&lt;[IDMT\_TeamItem](../interfaces/IDMT_TeamItem.md)<!-- -->&gt;&gt;

Detailed properties of all teams

## Remarks

A personal space is essentially a team named \*\*Personal\*\*

## Example

```javascript
// 1. 获取所有直接团队
const teams = await eda.dmt_Team.getAllTeamsInfo();

// 2. 输出团队数量与每个团队的属性（name/uuid/identity/itemType）
console.log('团队数量：', teams.length);
teams.forEach((team, i) => {
	console.log(`团队${i + 1}：`, team.name, 'uuid:', team.uuid, '身份 ID：', team.identity);
});
```

### getcurrentteaminfo

# DMT\_Team.getCurrentTeamInfo() method

Get the detailed properties of the current team

## Signature

```typescript
function getCurrentTeamInfo(): Promise<IDMT_TeamItem | undefined>;
```

## Returns

Promise&lt;[IDMT\_TeamItem](../interfaces/IDMT_TeamItem.md) \| undefined&gt;

Detailed properties of the team. If it is `undefined`<!-- -->, the retrieval failed

## Remarks

It will get the detailed properties of the team that the project belongs to, associated with the currently open schematic, PCB, or panel that has the last input focus

## Example

```javascript
// 1. 获取当前团队属性
const team = await eda.dmt_Team.getCurrentTeamInfo();

// 2. 输出当前团队属性（uuid 常用作后续 DMT_Folder/Project API 的 teamUuid 参数）
console.log('当前团队名称：', team?.name);
console.log('当前团队 uuid：', team?.uuid);
console.log('当前团队身份 ID：', team?.identity);
```
