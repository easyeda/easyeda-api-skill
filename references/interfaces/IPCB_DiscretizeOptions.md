# IPCB\_DiscretizeOptions interface

离散化选项

## Signature

```typescript
interface IPCB_DiscretizeOptions 
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

[step?](./IPCB_DiscretizeOptions.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ 离散步长，即相邻离散点之间的最大距离


</td></tr>
</tbody></table>

---

## 属性详情

### step

# IPCB\_DiscretizeOptions.step property

离散步长，即相邻离散点之间的最大距离

## Signature

```typescript
step?: number;
```

## Remarks

步长越小，离散点越密集，精度越高；步长单位与多边形坐标单位一致
