# DMT\_Team class

文档树 / 团队类

## 签名

```typescript
declare class DMT_Team 
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

[getAllInvolvedTeamInfo()](./DMT_Team.md)


</td><td>


</td><td>

获取所有参与的团队的详细属性


</td></tr>
<tr><td>

[getAllTeamsInfo()](./DMT_Team.md)


</td><td>


</td><td>

获取所有直接团队的详细属性


</td></tr>
<tr><td>

[getCurrentTeamInfo()](./DMT_Team.md)


</td><td>


</td><td>

获取当前团队的详细属性


</td></tr>
</tbody></table>

---

## 方法详情

### getallinvolvedteaminfo

# DMT\_Team.getAllInvolvedTeamInfo() method

获取所有参与的团队的详细属性

## 签名

```typescript
getAllInvolvedTeamInfo(): Promise<Array<IDMT_TeamItem>>;
```


## 返回值

Promise&lt;Array&lt;[IDMT\_TeamItem](../interfaces/IDMT_TeamItem.md)<!-- -->&gt;&gt;

所有参与的团队的详细属性

### getallteamsinfo

# DMT\_Team.getAllTeamsInfo() method

获取所有直接团队的详细属性

## 签名

```typescript
getAllTeamsInfo(): Promise<Array<IDMT_TeamItem>>;
```


## 返回值

Promise&lt;Array&lt;[IDMT\_TeamItem](../interfaces/IDMT_TeamItem.md)<!-- -->&gt;&gt;

所有团队的详细属性

## 备注

个人本质上也是一个名为 \*\*个人\*\* 的团队

### getcurrentteaminfo

# DMT\_Team.getCurrentTeamInfo() method

获取当前团队的详细属性

## 签名

```typescript
getCurrentTeamInfo(): Promise<IDMT_TeamItem | undefined>;
```


## 返回值

Promise&lt;[IDMT\_TeamItem](../interfaces/IDMT_TeamItem.md) \| undefined&gt;

团队的详细属性，如若为 `undefined` 则获取失败

## 备注

将会获取当前打开且拥有最后输入焦点的原理图、PCB、面板所关联的工程的所属团队的详细属性
