# ISCH\_SourcePrimitiveWireRemovePinWiresOptions interface

引脚走线删除选项

## Signature

```typescript
interface ISCH_SourcePrimitiveWireRemovePinWiresOptions extends ISCH_SourcePrimitiveIdOptions
```
**Extends:** [ISCH\_SourcePrimitiveIdOptions](./ISCH_SourcePrimitiveIdOptions.md)

## Remarks

`pinId` 形如 `<器件图元 ID>-<模板引脚 ID>`<!-- -->，须由同一器件构成：前缀必须等于本选项的 [primitiveId](./ISCH_SourcePrimitiveIdOptions.md)<!-- -->，否则返回 [PIN\_NOT\_FOUND](../enums/ESCH_SourceErrorCode.md)<!-- -->；模板引脚 ID 解析失败同样返回该错误码

该 `pinId` 可直接取 [SCH\_SourcePrimitiveComponent.get()](../classes/SCH_SourcePrimitiveComponent.md) 返回值中 [pins](./ISCH_SourcePrimitiveComponentDetail.md) 的 [pinId](./ISCH_SourcePrimitiveComponentPinItem.md)<!-- -->， 两者编码一致，无需手工拼接

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

[pinId](./ISCH_SourcePrimitiveWireRemovePinWiresOptions.md)

</td><td>

</td><td>

string

</td><td>

引脚 ID

</td></tr>
</tbody></table>

---

## 属性详情

### pinid

# ISCH\_SourcePrimitiveWireRemovePinWiresOptions.pinId property

引脚 ID

## Signature

```typescript
pinId: string;
```

## Remarks

形如 `<器件图元 ID>-<模板引脚 ID>`<!-- -->，直接取自 `component.get` 的 `pins[].pinId`
