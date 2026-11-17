# IPCB\_FanoutOptions interface

扇出入参

## Signature

```typescript
interface IPCB_FanoutOptions
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

[bgaFanoutDirect?](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

'45' \| '90'

</td><td>

_(Optional)_ BGA 扇出角度，默认 `45`

</td></tr>
<tr><td>

[componentIds](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

参与扇出的器件 ID 数组

</td></tr>
<tr><td>

[fanoutOuter2Rows?](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否仅扇出外侧两排，默认 `false`

</td></tr>
<tr><td>

[fanoutType](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

[TPCB\_FanoutType](../types/TPCB_FanoutType.md)

</td><td>

扇出方式

</td></tr>
<tr><td>

[ignoreDRC?](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否忽略 DRC，默认 `false`

</td></tr>
<tr><td>

[includeNoNet?](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否包含无网络焊盘，默认 `false`

</td></tr>
<tr><td>

[minChannelSpace?](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 最小通道间距

</td></tr>
<tr><td>

[operationType?](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

'Add' \| 'Remove'

</td><td>

_(Optional)_ 扇出操作类型，默认 `Add`

</td></tr>
<tr><td>

[track?](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

{ widthRuleType: 'FollowRule' \| 'Custom'; width: number; }

</td><td>

_(Optional)_ 导线参数

</td></tr>
<tr><td>

[via?](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

{ type: 'Through' \| 'Blind'; blindName?: string; sizeType: 'FollowRule' \| 'Custom'; outsideDiameter?: number; insideDiameter?: number; }

</td><td>

_(Optional)_ 过孔参数

</td></tr>
<tr><td>

[viaPadSpacing?](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 过孔与焊盘间距

</td></tr>
<tr><td>

[viaPadSpacingType?](./IPCB_FanoutOptions.md)

</td><td>

</td><td>

'PadCenter' \| 'Custom'

</td><td>

_(Optional)_ 过孔与焊盘间距类型

</td></tr>
</tbody></table>

---

## 属性详情

### bgafanoutdirect

# IPCB\_FanoutOptions.bgaFanoutDirect property

BGA 扇出角度，默认 `45`

## Signature

```typescript
bgaFanoutDirect?: '45' | '90';
```

### componentids

# IPCB\_FanoutOptions.componentIds property

参与扇出的器件 ID 数组

## Signature

```typescript
componentIds: Array<string>;
```

### fanoutouter2rows

# IPCB\_FanoutOptions.fanoutOuter2Rows property

是否仅扇出外侧两排，默认 `false`

## Signature

```typescript
fanoutOuter2Rows?: boolean;
```

### fanouttype

# IPCB\_FanoutOptions.fanoutType property

扇出方式

## Signature

```typescript
fanoutType: TPCB_FanoutType;
```

### ignoredrc

# IPCB\_FanoutOptions.ignoreDRC property

是否忽略 DRC，默认 `false`

## Signature

```typescript
ignoreDRC?: boolean;
```

### includenonet

# IPCB\_FanoutOptions.includeNoNet property

是否包含无网络焊盘，默认 `false`

## Signature

```typescript
includeNoNet?: boolean;
```

### minchannelspace

# IPCB\_FanoutOptions.minChannelSpace property

最小通道间距

## Signature

```typescript
minChannelSpace?: number;
```

### operationtype

# IPCB\_FanoutOptions.operationType property

扇出操作类型，默认 `Add`

## Signature

```typescript
operationType?: 'Add' | 'Remove';
```

### track

# IPCB\_FanoutOptions.track property

导线参数

## Signature

```typescript
track?: {
		widthRuleType: 'FollowRule' | 'Custom';
		width: number;
	};
```

### via

# IPCB\_FanoutOptions.via property

过孔参数

## Signature

```typescript
via?: {
		type: 'Through' | 'Blind';
		blindName?: string;
		sizeType: 'FollowRule' | 'Custom';
		outsideDiameter?: number;
		insideDiameter?: number;
	};
```

### viapadspacing

# IPCB\_FanoutOptions.viaPadSpacing property

过孔与焊盘间距

## Signature

```typescript
viaPadSpacing?: number;
```

### viapadspacingtype

# IPCB\_FanoutOptions.viaPadSpacingType property

过孔与焊盘间距类型

## Signature

```typescript
viaPadSpacingType?: 'PadCenter' | 'Custom';
```
