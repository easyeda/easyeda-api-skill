# 封装体系

PCB 的封装采用 Master/Instance 模式，通过覆盖规则去描述封装，以最低冗余的方式去描述

## COMPONENT 器件实例

实例里只存在属性，同 `Key` 属性将以实例的代替 `FOOTPRINT` 的

```json
{ "type": "COMPONENT", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.22,
  "layerId":1,
  "positionX":150,
  "positionY":200,
  "angle":45,
  "attrs":{ "3D Model": "uuid", "3D Model Transform": "20,10,0,0,15,45,0,0,20" },
}|
```

1. type 实例 `COMPONENT`
2. id 图元编号, 文档内唯一
3. ticket 逻辑时钟
4. partitionId 所属分区编号，为 null 表示无分区，封装忽略该字段
5. groupId 分组编号：0 不分组，非 0 为组标志，相同组标志的为一组
6. locked 是否锁定
7. zIndex Z 轴高度
8. layerId 层（只有顶层底层）
9. positionX 位置 X
10. positionY 位置 Y
11. angle 旋转角度
12. attrs 自定义属性
    - 固定 `3D Model` 为 3D 模型的 uuid，此 uuid 代表 components 表中 doctype = 16 的一条记录
    - 固定 `3D Model Transform` 为 3D 模型变换参数

```json
["ATTR", "e102", 0, "e8", 1, "Designator", "U1", 0, 1, "宋体", 50, 10, 0, 0, 0, 1, 2, 15, 1, 1]
```

```json
["ATTR", "e103", 0, "e8", 1, "Footprint", "footprint-uuid", 0, 1, "宋体", 50, 10, 0, 0, 0, 1, 2, 15, 1, 1]
```

```json
["ATTR", "e104", 0, "e8", 1, "Device", "device-uuid", 0, 1, "宋体", 50, 10, 0, 0, 0, 1, 2, 15, 1, 1]
```

#### 焊盘实例网络映射 `PAD_NET`

```json
{ "type": "PAD_NET", "id":"COMPONENT_UUID", "ticket": 1 }||
{
  "padNum":"a1",
  "padNet":"GND",
  "padId":"e125",
}|
```

1. type 焊盘实例网络映射 `PAD_NET`
2. id 所属器件实例编号
3. ticket 逻辑时钟
4. padNum 焊盘编号
5. padNet 网络名
6. padId 封装内焊盘 ID（可选）

#### 复用图块信息 `REUSE_BLOCK`

```json
{ "type": "REUSE_BLOCK", "id":"COMPONENT_UUID", "ticket": 1 }||
{
  "groupId":"$1e16",
  "channelId":"$2e5_$4e3",
}|
```

1. type 复用图块信息 `REUSE_BLOCK`
2. id 所属器件实例编号
3. groupId 分组 ID
4. channelId 通道 ID

#### 3D Model Transform 的特殊说明

```json
{ "type": "COMPONENT", "id":"UUID", "ticket": 1 }||
{
  "partitionId":null,
  "groupId":0,
  "locked":1,
  "zIndex":0.22,
  "layerId":1,
  "positionX":150,
  "positionY":200,
  "angle":45,
  "attrs":{ "3D Model": "uuid", "3D Model Transform": "20,10,0,0,15,45,0,0,20" },
}|
```

在器件中，固定 `3D Model Transform` 为 3D 模型为匹配此器件【在顶层】【坐标 0,0】【旋转角度 0】时所需要的变换参数

其参数为

1. sizeX：X 轴尺寸
2. sizeY：Y 轴尺寸
3. sizeZ：Z 轴尺寸，这里有个兼容性处理，如果为 0，则自动适应高度
4. rotZ：绕 Z 轴旋转角度
5. rotX：绕 X 轴旋转角度
6. rotY：绕 Y 轴旋转角度
7. offX：X 轴偏移量
8. offY：Y 轴偏移量
9. offZ：Z 轴偏移量

通过 3D 模型变换参数，生成 3D 模型变换矩阵的算法如下

```python
cx = 3D 模型 X 轴中点
cy = 3D 模型 Y 轴中点
bz = 3D 模型 最低 Z 值

wx = 3D 模型 X 轴宽度
wy = 3D 模型 Y 轴宽度
wz = 3D 模型 Z 轴宽度

ORIGIN = translate(-cx, -cy, -bz)
SCALE = scale(sizeX / wx, sizeY / wy, sizeZ / wz)
ROT = rotateZXY(rotZ, rotX, rotY)
OFFSET = translate(offX, offY, offZ)

MATRIX = OFFSET X ROT X SCALE X ORIGIN
```
