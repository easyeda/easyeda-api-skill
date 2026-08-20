# IPCB\_AutoRoutingResult interface

Auto routing result

## Signature

```typescript
export interface IPCB_AutoRoutingResult 
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

[duration](./IPCB_AutoRoutingResult.md)


</td><td>


</td><td>

number


</td><td>

Auto routing duration (milliseconds)


</td></tr>
<tr><td>

[failedNets](./IPCB_AutoRoutingResult.md)


</td><td>


</td><td>

Array&lt;string&gt;


</td><td>

List of net names that failed to be routed


</td></tr>
<tr><td>

[success](./IPCB_AutoRoutingResult.md)


</td><td>


</td><td>

boolean


</td><td>

Whether auto routing started successfully


</td></tr>
<tr><td>

[successNetsCount](./IPCB_AutoRoutingResult.md)


</td><td>


</td><td>

number


</td><td>

Number of nets that were routed successfully


</td></tr>
<tr><td>

[totalNetsCount](./IPCB_AutoRoutingResult.md)


</td><td>


</td><td>

number


</td><td>

Total number of nets participating in auto routing


</td></tr>
</tbody></table>

---

## 属性详情

### duration

# IPCB\_AutoRoutingResult.duration property

Auto routing duration (milliseconds)

## Signature

```typescript
duration: number;
```

### failednets

# IPCB\_AutoRoutingResult.failedNets property

List of net names that failed to be routed

## Signature

```typescript
failedNets: Array<string>;
```

### success

# IPCB\_AutoRoutingResult.success property

Whether auto routing started successfully

## Signature

```typescript
success: boolean;
```

### successnetscount

# IPCB\_AutoRoutingResult.successNetsCount property

Number of nets that were routed successfully

## Signature

```typescript
successNetsCount: number;
```

### totalnetscount

# IPCB\_AutoRoutingResult.totalNetsCount property

Total number of nets participating in auto routing

## Signature

```typescript
totalNetsCount: number;
```
