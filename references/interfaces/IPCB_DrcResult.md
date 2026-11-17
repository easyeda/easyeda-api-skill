# IPCB\_DrcResult interface

DRC 结果

## Signature

```typescript
interface IPCB_DrcResult
```

## Properties

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[checkedAt?](./IPCB_DrcResult.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 最近一次检查时间戳

</td></tr>
<tr><td>

[failedItems](./IPCB_DrcResult.md)

</td><td>

</td><td>

number

</td><td>

检查失败的规则数量，大于 `0` 表示结果不完整

</td></tr>
<tr><td>

[groups?](./IPCB_DrcResult.md)

</td><td>

</td><td>

Array&lt;{ name: string; count: number }&gt;

</td><td>

_(Optional)_ 分组统计（仅 `checkDetailed({ includeGroups: true })` 返回）

</td></tr>
<tr><td>

[state](./IPCB_DrcResult.md)

</td><td>

</td><td>

'notChecked' \| 'checking' \| 'passed' \| 'failed' \| 'incomplete'

</td><td>

检查状态

</td></tr>
<tr><td>

[totalCount](./IPCB_DrcResult.md)

</td><td>

</td><td>

number

</td><td>

违规总数

</td></tr>
<tr><td>

[violations](./IPCB_DrcResult.md)

</td><td>

</td><td>

Array&lt;[IPCB\_DrcViolation](./IPCB_DrcViolation.md)<!-- -->&gt;

</td><td>

违规明细

</td></tr>
</tbody></table>

---

## 属性详情

### checkedat

# IPCB\_DrcResult.checkedAt property

最近一次检查时间戳

## Signature

```typescript
checkedAt?: number;
```

### faileditems

# IPCB\_DrcResult.failedItems property

检查失败的规则数量，大于 `0` 表示结果不完整

## Signature

```typescript
failedItems: number;
```

### groups

# IPCB\_DrcResult.groups property

分组统计（仅 `checkDetailed({ includeGroups: true })` 返回）

## Signature

```typescript
groups?: Array<{ name: string; count: number }>;
```

### state

# IPCB\_DrcResult.state property

检查状态

## Signature

```typescript
state: 'notChecked' | 'checking' | 'passed' | 'failed' | 'incomplete';
```

### totalcount

# IPCB\_DrcResult.totalCount property

违规总数

## Signature

```typescript
totalCount: number;
```

### violations

# IPCB\_DrcResult.violations property

违规明细

## Signature

```typescript
violations: Array<IPCB_DrcViolation>;
```
