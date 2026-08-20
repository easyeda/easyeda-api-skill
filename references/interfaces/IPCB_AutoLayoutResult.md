# IPCB\_AutoLayoutResult interface

Auto layout result

## Signature

```typescript
export interface IPCB_AutoLayoutResult 
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

[duration](./IPCB_AutoLayoutResult.md)


</td><td>


</td><td>

number


</td><td>

Auto layout duration (milliseconds)


</td></tr>
<tr><td>

[failedComponents](./IPCB_AutoLayoutResult.md)


</td><td>


</td><td>

Array&lt;string&gt;


</td><td>

List of device primitive IDs that failed to be laid out


</td></tr>
<tr><td>

[success](./IPCB_AutoLayoutResult.md)


</td><td>


</td><td>

boolean


</td><td>

Whether auto layout started successfully


</td></tr>
<tr><td>

[successComponentsCount](./IPCB_AutoLayoutResult.md)


</td><td>


</td><td>

number


</td><td>

Number of devices that were laid out successfully


</td></tr>
<tr><td>

[totalComponentsCount](./IPCB_AutoLayoutResult.md)


</td><td>


</td><td>

number


</td><td>

Total number of devices participating in auto layout


</td></tr>
</tbody></table>

---

## 属性详情

### duration

# IPCB\_AutoLayoutResult.duration property

Auto layout duration (milliseconds)

## Signature

```typescript
duration: number;
```

### failedcomponents

# IPCB\_AutoLayoutResult.failedComponents property

List of device primitive IDs that failed to be laid out

## Signature

```typescript
failedComponents: Array<string>;
```

### success

# IPCB\_AutoLayoutResult.success property

Whether auto layout started successfully

## Signature

```typescript
success: boolean;
```

### successcomponentscount

# IPCB\_AutoLayoutResult.successComponentsCount property

Number of devices that were laid out successfully

## Signature

```typescript
successComponentsCount: number;
```

### totalcomponentscount

# IPCB\_AutoLayoutResult.totalComponentsCount property

Total number of devices participating in auto layout

## Signature

```typescript
totalComponentsCount: number;
```
