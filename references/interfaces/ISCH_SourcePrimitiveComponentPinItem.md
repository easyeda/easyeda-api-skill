# ISCH\_SourcePrimitiveComponentPinItem interface

器件引脚属性

## Signature

```typescript
interface ISCH_SourcePrimitiveComponentPinItem
```

## Remarks

[pinId](./ISCH_SourcePrimitiveComponentPinItem.md) 形如 `<器件图元 ID>-<模板引脚 ID>` （多 Part 器件的模板引脚 ID 中还带有 partId 段），可直接作为 [SCH\_SourcePrimitiveWire.removePinWires()](../classes/SCH_SourcePrimitiveWire.md) 的入参 `pinId` 使用

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

[pinId](./ISCH_SourcePrimitiveComponentPinItem.md)

</td><td>

</td><td>

string

</td><td>

引脚 ID

</td></tr>
<tr><td>

[pinName](./ISCH_SourcePrimitiveComponentPinItem.md)

</td><td>

</td><td>

string

</td><td>

引脚名

</td></tr>
<tr><td>

[pinNumber](./ISCH_SourcePrimitiveComponentPinItem.md)

</td><td>

</td><td>

string

</td><td>

引脚号

</td></tr>
<tr><td>

[x](./ISCH_SourcePrimitiveComponentPinItem.md)

</td><td>

</td><td>

number

</td><td>

引脚 X 坐标

</td></tr>
<tr><td>

[y](./ISCH_SourcePrimitiveComponentPinItem.md)

</td><td>

</td><td>

number

</td><td>

引脚 Y 坐标

</td></tr>
</tbody></table>

---

## 属性详情

### pinid

# ISCH\_SourcePrimitiveComponentPinItem.pinId property

引脚 ID

## Signature

```typescript
pinId: string;
```

## Remarks

形如 `<器件图元 ID>-<模板引脚 ID>`<!-- -->，属于该器件；可直接用于 [SCH\_SourcePrimitiveWire.removePinWires()](../classes/SCH_SourcePrimitiveWire.md)

### pinname

# ISCH\_SourcePrimitiveComponentPinItem.pinName property

引脚名

## Signature

```typescript
pinName: string;
```

### pinnumber

# ISCH\_SourcePrimitiveComponentPinItem.pinNumber property

引脚号

## Signature

```typescript
pinNumber: string;
```

### x

# ISCH\_SourcePrimitiveComponentPinItem.x property

引脚 X 坐标

## Signature

```typescript
x: number;
```

### y

# ISCH\_SourcePrimitiveComponentPinItem.y property

引脚 Y 坐标

## Signature

```typescript
y: number;
```
