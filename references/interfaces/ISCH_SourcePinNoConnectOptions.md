# ISCH\_SourcePinNoConnectOptions interface

设置引脚 No-Connect 属性选项

## Signature

```typescript
interface ISCH_SourcePinNoConnectOptions extends ISCH_SourceIdentity
```
**Extends:** [ISCH\_SourceIdentity](./ISCH_SourceIdentity.md)

## Remarks

No-Connect 是引脚自身的属性，不是独立图元

本接口用于创建或取消该属性

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

[noConnect?](./ISCH_SourcePinNoConnectOptions.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否设置非连接标记；缺省为 `true`

</td></tr>
<tr><td>

[pinId](./ISCH_SourcePinNoConnectOptions.md)

</td><td>

</td><td>

string

</td><td>

引脚 ID

</td></tr>
<tr><td>

[primitiveId](./ISCH_SourcePinNoConnectOptions.md)

</td><td>

</td><td>

string

</td><td>

器件图元 ID

</td></tr>
</tbody></table>

---

## 属性详情

### noconnect

# ISCH\_SourcePinNoConnectOptions.noConnect property

是否设置非连接标记；缺省为 `true`

## Signature

```typescript
noConnect?: boolean;
```

### pinid

# ISCH\_SourcePinNoConnectOptions.pinId property

引脚 ID

## Signature

```typescript
pinId: string;
```

## Remarks

格式为 `<器件图元 ID>-<模组内引脚 ID>`<!-- -->，直接使用 [SCH\_SourcePrimitiveComponent.get()](../classes/SCH_SourcePrimitiveComponent.md) 返回的 `pins[].pinId`

### primitiveid

# ISCH\_SourcePinNoConnectOptions.primitiveId property

器件图元 ID

## Signature

```typescript
primitiveId: string;
```

## Remarks

用于兼容旧数据与辅助定位

`pinId` 已包含器件图元 ID，但部分历史 Source 数据与后端路径仍需 `primitiveId` 完成器件归属校验与回退查找

新调用方应从器件查询结果同时传入二者，并保证 `primitiveId` 与 `pinId` 前缀一致
