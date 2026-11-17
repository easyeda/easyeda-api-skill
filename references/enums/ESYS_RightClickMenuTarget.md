# ESYS\_RightClickMenuTarget enum

系统 / 右键菜单目标位置

## Signature

```typescript
enum ESYS_RightClickMenuTarget
```

## Enumeration Members

<table><thead><tr><th>

Member

</th><th>

Value

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

BOTTOM\_PANEL\_3D\_MODEL\_LIST\_ITEM

</td><td>

`'bottomPanel3DModelListItem'`

</td><td>

底部菜单 - 3D 模型列表项目右击

</td></tr>
<tr><td>

BOTTOM\_PANEL\_CBB\_LIST\_ITEM

</td><td>

`'bottomPanelCbbListItem'`

</td><td>

底部菜单 - 复用模块列表项目右击

</td></tr>
<tr><td>

BOTTOM\_PANEL\_DEVICE\_LIST\_ITEM

</td><td>

`'bottomPanelDeviceListItem'`

</td><td>

底部菜单 - 器件列表项目右击

</td></tr>
<tr><td>

BOTTOM\_PANEL\_FOOTPRINT\_LIST\_ITEM

</td><td>

`'bottomPanelFootprintListItem'`

</td><td>

底部菜单 - 封装列表项目右击

</td></tr>
<tr><td>

BOTTOM\_PANEL\_PANEL\_LIBRARY\_LIST\_ITEM

</td><td>

`'bottomPanelPanelLibraryListItem'`

</td><td>

底部菜单 - 面板库列表项目右击

</td></tr>
<tr><td>

BOTTOM\_PANEL\_SIMULATION\_MODEL\_LIST\_ITEM

</td><td>

`'bottomPanelSimulationModelListItem'`

</td><td>

底部菜单 - 仿真模型列表项目右击

</td></tr>
<tr><td>

BOTTOM\_PANEL\_SYMBOL\_LIST\_ITEM

</td><td>

`'bottomPanelSymbolListItem'`

</td><td>

底部菜单 - 符号列表项目右击

</td></tr>
<tr><td>

LEFT\_TREE\_BLANK

</td><td>

`'leftTreeBlank'`

</td><td>

左侧工程树 - 空白区域右击（暂未开放：挂接建设中，六方法对该位置返回空/false）

</td></tr>
<tr><td>

LEFT\_TREE\_FOLDER

</td><td>

`'leftTreeFolder'`

</td><td>

左侧工程树 - 文件夹节点右击（暂未开放：挂接建设中，六方法对该位置返回空/false）

</td></tr>
<tr><td>

LEFT\_TREE\_PROJECT

</td><td>

`'leftTreeProject'`

</td><td>

左侧工程树 - 工程节点右击（暂未开放：挂接建设中，六方法对该位置返回空/false）

</td></tr>
</tbody></table>

## Remarks

用于指定要操作的是哪一个右键菜单

同一目标位置在界面上对应一类被右击的对象，例如底部菜单器件列表中的一条器件记录、左侧工程树中的一个工程节点

扩展只能操作本篇枚举列出的位置，其它位置不对外开放