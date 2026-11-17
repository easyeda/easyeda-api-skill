# SCH\_SourcePin class

原理图 &amp; 符号 / 源数据引脚类

## Signature

```typescript
class SCH_SourcePin
```

## Remarks

提供源数据层的引脚几何查询与引脚属性设置，按数据标识寻址，不依赖当前打开的图页

本类接口是强制异步落盘的：调用返回并不表示数据已落盘生效， 紧接着调用其它接口（尤其是读取类）可能拿到尚未更新的数据

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[getGeometry(options)](./SCH_SourcePin.md)

</td><td>

</td><td>

**_(BETA)_** 获取器件的引脚几何信息

 cli - 一次调用拿到全部引脚的连接点、所在边、方向与本体包围盒，可直接据此生成引出线

</td></tr>
</tbody></table>

---

## 方法详情

### getgeometry

# SCH\_SourcePin.getGeometry() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取器件的引脚几何信息

 cli - 一次调用拿到全部引脚的连接点、所在边、方向与本体包围盒，可直接据此生成引出线

## Signature

```typescript
function getGeometry(
	options: ISCH_SourcePinGetGeometryOptions,
): Promise<TSCH_SourceResult<Array<ISCH_SourcePinGeometryItem>>>;
```

## Parameters

<table><thead><tr><th>

Parameter

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

options

</td><td>

[ISCH\_SourcePinGetGeometryOptions](../interfaces/ISCH_SourcePinGetGeometryOptions.md)

</td><td>

引脚几何查询选项

</td></tr>
</tbody></table>

## Returns

Promise&lt;[TSCH\_SourceResult](../types/TSCH_SourceResult.md)<!-- -->&lt;Array&lt;[ISCH\_SourcePinGeometryItem](../interfaces/ISCH_SourcePinGeometryItem.md)<!-- -->&gt;&gt;&gt;

引脚几何信息列表，失败时通过 `error.code` 返回错误码

## Remarks

返回该器件\*\*全部引脚\*\*的几何信息，顺序与符号模板中的引脚定义顺序一致

与 [SCH\_SourcePrimitiveComponent.get()](./SCH_SourcePrimitiveComponent.md) 返回的 `pins` 相比，本接口额外给出调用方最需要自行推导的几项内容：

- [side](../interfaces/ISCH_SourcePinGeometryItem.md)<!-- -->：引脚从本体哪一侧引出，直接决定引出线朝向 - [length](../interfaces/ISCH_SourcePinGeometryItem.md)<!-- -->：引脚长度，用于计算本体边缘与连接点的间距 - [direction](../interfaces/ISCH_SourcePinGeometryItem.md)<!-- -->：引脚电气方向 - [bodyBBox](../interfaces/ISCH_SourcePinGeometryItem.md)<!-- -->：引脚所属部件的本体包围盒，已包含该器件的旋转与镜像

按 `side` 生成引出线可避免相邻引脚走线几何重叠而被源数据层合并为同一网络， 相关风险见 [SCH\_SourcePrimitiveWire.add()](./SCH_SourcePrimitiveWire.md)

器件不存在时返回 [PRIMITIVE\_NOT\_FOUND](../enums/ESCH_SourceErrorCode.md)<!-- -->； 目标图元存在但不是器件时返回 [PRIMITIVE\_TYPE\_MISMATCH](../enums/ESCH_SourceErrorCode.md)<!-- -->； 器件未绑定符号或符号缺少本体包围盒时返回空列表 ADD since EDA v4.1.91
