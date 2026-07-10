# IPCB\_AutoRoutingResult interface

自动布线结果

## Signature

```typescript
interface IPCB_AutoRoutingResult 
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

自动布线耗时（毫秒）


</td></tr>
<tr><td>

[failedNets](./IPCB_AutoRoutingResult.md)


</td><td>


</td><td>

Array&lt;string&gt;


</td><td>

未能完成布线的网络名称列表


</td></tr>
<tr><td>

[success](./IPCB_AutoRoutingResult.md)


</td><td>


</td><td>

boolean


</td><td>

自动布线是否成功启动


</td></tr>
<tr><td>

[successNetsCount](./IPCB_AutoRoutingResult.md)


</td><td>


</td><td>

number


</td><td>

成功完成布线的网络数量


</td></tr>
<tr><td>

[totalNetsCount](./IPCB_AutoRoutingResult.md)


</td><td>


</td><td>

number


</td><td>

参与自动布线的网络总数


</td></tr>
</tbody></table>

---

## 属性详情

### duration

# IPCB\_AutoRoutingResult.duration property

自动布线耗时（毫秒）

## Signature

```typescript
duration: number;
```

### failednets

# IPCB\_AutoRoutingResult.failedNets property

未能完成布线的网络名称列表

## Signature

```typescript
failedNets: Array<string>;
```

### success

# IPCB\_AutoRoutingResult.success property

自动布线是否成功启动

## Signature

```typescript
success: boolean;
```

### successnetscount

# IPCB\_AutoRoutingResult.successNetsCount property

成功完成布线的网络数量

## Signature

```typescript
successNetsCount: number;
```

### totalnetscount

# IPCB\_AutoRoutingResult.totalNetsCount property

参与自动布线的网络总数

## Signature

```typescript
totalNetsCount: number;
```
