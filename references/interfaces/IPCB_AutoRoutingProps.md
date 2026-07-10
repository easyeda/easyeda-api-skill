# IPCB\_AutoRoutingProps interface

自动布线入参

## Signature

```typescript
interface IPCB_AutoRoutingProps 
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

[cornerStyle?](./IPCB_AutoRoutingProps.md)


</td><td>


</td><td>

[EPCB\_AutoRoutingCornerStyle](../enums/EPCB_AutoRoutingCornerStyle.md)


</td><td>

_(Optional)_ 布线拐角风格


</td></tr>
<tr><td>

[existingPrimitiveMode?](./IPCB_AutoRoutingProps.md)


</td><td>


</td><td>

[EPCB\_AutoRoutingExistingPrimitiveMode](../enums/EPCB_AutoRoutingExistingPrimitiveMode.md)


</td><td>

_(Optional)_ 已有导线/过孔的处理方式


</td></tr>
<tr><td>

[ignoreNets?](./IPCB_AutoRoutingProps.md)


</td><td>


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ 忽略网络


</td></tr>
<tr><td>

[layers?](./IPCB_AutoRoutingProps.md)


</td><td>


</td><td>

Array&lt;[TPCB\_LayersOfCopper](../types/TPCB_LayersOfCopper.md)<!-- -->&gt;


</td><td>

_(Optional)_ 布线图层


</td></tr>
<tr><td>

[optimization?](./IPCB_AutoRoutingProps.md)


</td><td>


</td><td>

[EPCB\_AutoRoutingOptimization](../enums/EPCB_AutoRoutingOptimization.md)


</td><td>

_(Optional)_ 效果优先级


</td></tr>
<tr><td>

[RoutingNets?](./IPCB_AutoRoutingProps.md)


</td><td>


</td><td>

'selected' \| 'selectedComponents' \| Array&lt;string&gt;


</td><td>

_(Optional)_ 布线网络


</td></tr>
</tbody></table>

---

## 属性详情

### cornerstyle

# IPCB\_AutoRoutingProps.cornerStyle property

布线拐角风格

## Signature

```typescript
cornerStyle?: EPCB_AutoRoutingCornerStyle;
```

## Remarks

指定自动布线使用的拐角风格，默认为 45 度

### existingprimitivemode

# IPCB\_AutoRoutingProps.existingPrimitiveMode property

已有导线/过孔的处理方式

## Signature

```typescript
existingPrimitiveMode?: EPCB_AutoRoutingExistingPrimitiveMode;
```

## Remarks

指定对画布上已有导线和过孔的处理方式，默认为保留

### ignorenets

# IPCB\_AutoRoutingProps.ignoreNets property

忽略网络

## Signature

```typescript
ignoreNets?: Array<string>;
```

## Remarks

指定需要忽略（不参与自动布线）的网络名称数组；如不传入，则不忽略任何网络

### layers

# IPCB\_AutoRoutingProps.layers property

布线图层

## Signature

```typescript
layers?: Array<TPCB_LayersOfCopper>;
```

## Remarks

指定允许参与自动布线的图层 ID 数组；如不传入，则使用当前 PCB 的所有可用信号层

### optimization

# IPCB\_AutoRoutingProps.optimization property

效果优先级

## Signature

```typescript
optimization?: EPCB_AutoRoutingOptimization;
```

## Remarks

指定自动布线的优化目标，默认为布通率

### routingnets

# IPCB\_AutoRoutingProps.RoutingNets property

布线网络

## Signature

```typescript
RoutingNets?: 'selected' | 'selectedComponents' | Array<string>;
```

## Remarks

指定需要参与自动布线的网络名称数组；如不传入或传入空数组，则对所有未布线的网络进行自动布线
