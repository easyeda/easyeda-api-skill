# IPCB\_DrcViolation interface

DRC 违规项

## Signature

```typescript
interface IPCB_DrcViolation extends IPCB_ViolationBase
```
**Extends:** [IPCB\_ViolationBase](./IPCB_ViolationBase.md)

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

[clearance?](./IPCB_DrcViolation.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 实际间距

</td></tr>
<tr><td>

[explanation](./IPCB_DrcViolation.md)

</td><td>

</td><td>

string

</td><td>

违规说明

</td></tr>
<tr><td>

[globalIndex](./IPCB_DrcViolation.md)

</td><td>

</td><td>

string

</td><td>

违规项 ID

</td></tr>
<tr><td>

[minDistance?](./IPCB_DrcViolation.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 最小间距

</td></tr>
</tbody></table>

---

## 属性详情

### clearance

# IPCB\_DrcViolation.clearance property

实际间距

## Signature

```typescript
clearance?: number;
```

### explanation

# IPCB\_DrcViolation.explanation property

违规说明

## Signature

```typescript
explanation: string;
```

### globalindex

# IPCB\_DrcViolation.globalIndex property

违规项 ID

## Signature

```typescript
globalIndex: string;
```

### mindistance

# IPCB\_DrcViolation.minDistance property

最小间距

## Signature

```typescript
minDistance?: number;
```
