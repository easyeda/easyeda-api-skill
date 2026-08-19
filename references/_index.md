# EasyEDA Pro API 文档索引

> 此文档由构建脚本自动生成，供 AI 编程工具使用。
> 全局变量 `eda` 是 EDA 类的实例，所有 API 通过 `eda.xxx` 调用。

## 快速导航

- [classes/](classes/) - 类文档（包含全部方法和属性）
- [enums/](enums/) - 枚举文档
- [interfaces/](interfaces/) - 接口文档（包含全部属性）
- [types/](types/) - 类型别名文档

## API 访问方式

所有 API 通过全局变量 `eda` 访问，例如：
- `eda.dmt_Board.createBoard()` — 文档树 / 板子管理
- `eda.pcb_PrimitiveLine.create()` — PCB 直线图元创建
- `eda.sys_WebSocket.register()` — WebSocket 连接注册
- `eda.sch_PrimitiveComponent.create()` — 原理图器件创建

---

# 类 (Classes)

| 类名 | 描述 | 备注 |
|------|------|------|
| [DMT_Board](classes/DMT_Board.md) | 文档树 / 板子管理类 |  |
| [DMT_EditorControl](classes/DMT_EditorControl.md) | 文档树 / 编辑器控制类 |  |
| [DMT_Event](classes/DMT_Event.md) | 文档树 / 事件类 |  |
| [DMT_Folder](classes/DMT_Folder.md) | 文档树 / 文件夹类 |  |
| [DMT_Panel](classes/DMT_Panel.md) | 文档树 / 面板管理类 |  |
| [DMT_Pcb](classes/DMT_Pcb.md) | 文档树 / PCB 管理类 |  |
| [DMT_Project](classes/DMT_Project.md) | 文档树 / 工程管理类 |  |
| [DMT_Schematic](classes/DMT_Schematic.md) | 文档树 / 原理图管理类 |  |
| [DMT_SelectControl](classes/DMT_SelectControl.md) | 文档树 / 选择控制类 |  |
| [DMT_Team](classes/DMT_Team.md) | 文档树 / 团队类 |  |
| [DMT_Workspace](classes/DMT_Workspace.md) | 文档树 / 工作区类 |  |
| [EDA](classes/EDA.md) | 嘉立创 EDA 专业版用户 API 接口 |  |
| [IPCB_ComplexPolygon](classes/IPCB_ComplexPolygon.md) | 复杂多边形 |  |
| [IPCB_Polygon](classes/IPCB_Polygon.md) | 单多边形 |  |
| [IPCB_PrimitiveArc](classes/IPCB_PrimitiveArc.md) | 圆弧线图元 |  |
| [IPCB_PrimitiveAttribute](classes/IPCB_PrimitiveAttribute.md) | 属性图元 |  |
| [IPCB_PrimitiveComponent](classes/IPCB_PrimitiveComponent.md) | 器件图元 |  |
| [IPCB_PrimitiveComponentPad](classes/IPCB_PrimitiveComponentPad.md) | 器件焊盘图元 |  |
| [IPCB_PrimitiveDimension](classes/IPCB_PrimitiveDimension.md) | 尺寸标注图元 |  |
| [IPCB_PrimitiveFill](classes/IPCB_PrimitiveFill.md) | 填充图元 |  |
| [IPCB_PrimitiveImage](classes/IPCB_PrimitiveImage.md) | 图像图元 |  |
| [IPCB_PrimitiveLine](classes/IPCB_PrimitiveLine.md) | 直线图元 |  |
| [IPCB_PrimitiveObject](classes/IPCB_PrimitiveObject.md) | 二进制内嵌对象图元 |  |
| [IPCB_PrimitivePad](classes/IPCB_PrimitivePad.md) | 焊盘图元 |  |
| [IPCB_PrimitivePolyline](classes/IPCB_PrimitivePolyline.md) | 折线图元 |  |
| [IPCB_PrimitivePour](classes/IPCB_PrimitivePour.md) | 覆铜边框图元 |  |
| [IPCB_PrimitivePoured](classes/IPCB_PrimitivePoured.md) | 覆铜填充图元 |  |
| [IPCB_PrimitiveRegion](classes/IPCB_PrimitiveRegion.md) | 区域图元 |  |
| [IPCB_PrimitiveString](classes/IPCB_PrimitiveString.md) | 文本图元 |  |
| [IPCB_PrimitiveVia](classes/IPCB_PrimitiveVia.md) | 过孔图元 |  |
| [ISCH_PrimitiveArc](classes/ISCH_PrimitiveArc.md) | 圆弧图元 |  |
| [ISCH_PrimitiveAttribute](classes/ISCH_PrimitiveAttribute.md) | 属性图元 |  |
| [ISCH_PrimitiveBus](classes/ISCH_PrimitiveBus.md) | 总线图元 |  |
| [ISCH_PrimitiveCbbSymbolComponent](classes/ISCH_PrimitiveCbbSymbolComponent.md) | 复用模块符号图元 |  |
| [ISCH_PrimitiveCircle](classes/ISCH_PrimitiveCircle.md) | 圆图元 |  |
| [ISCH_PrimitiveComponent](classes/ISCH_PrimitiveComponent.md) | 器件图元 |  |
| [ISCH_PrimitiveComponentPin](classes/ISCH_PrimitiveComponentPin.md) | 器件引脚图元 |  |
| [ISCH_PrimitiveObject](classes/ISCH_PrimitiveObject.md) | 二进制内嵌对象图元 |  |
| [ISCH_PrimitivePin](classes/ISCH_PrimitivePin.md) | 引脚图元 |  |
| [ISCH_PrimitivePolygon](classes/ISCH_PrimitivePolygon.md) | 多边形（折线）图元 |  |
| [ISCH_PrimitiveRectangle](classes/ISCH_PrimitiveRectangle.md) | 矩形图元 |  |
| [ISCH_PrimitiveText](classes/ISCH_PrimitiveText.md) | 文本图元 |  |
| [ISCH_PrimitiveWire](classes/ISCH_PrimitiveWire.md) | 导线图元 |  |
| [LIB_3DModel](classes/LIB_3DModel.md) | 综合库 / 3D 模型类 |  |
| [LIB_Cbb](classes/LIB_Cbb.md) | 综合库 / 复用模块类 |  |
| [LIB_Classification](classes/LIB_Classification.md) | 综合库 / 库分类索引类 |  |
| [LIB_Device](classes/LIB_Device.md) | 综合库 / 器件类 |  |
| [LIB_Footprint](classes/LIB_Footprint.md) | 综合库 / 封装类 |  |
| [LIB_LibrariesList](classes/LIB_LibrariesList.md) | 综合库 / 库列表类 |  |
| [LIB_PanelLibrary](classes/LIB_PanelLibrary.md) | 综合库 / 面板库类 |  |
| [LIB_SelectControl](classes/LIB_SelectControl.md) | 综合库 / 选择控制类 |  |
| [LIB_SimulationModel](classes/LIB_SimulationModel.md) | 综合库 / 仿真模型类 |  |
| [LIB_Symbol](classes/LIB_Symbol.md) | 综合库 / 符号类 |  |
| [PCB_Document](classes/PCB_Document.md) | PCB &amp; 封装 / 文档操作类 |  |
| [PCB_Drc](classes/PCB_Drc.md) | PCB &amp; 封装 / 设计规则检查（DRC）类 |  |
| [PCB_Event](classes/PCB_Event.md) | PCB &amp; 封装 / 事件类 |  |
| [PCB_Layer](classes/PCB_Layer.md) | PCB &amp; 封装 / 图层操作类 |  |
| [PCB_ManufactureData](classes/PCB_ManufactureData.md) | PCB &amp; 封装 / 生产资料类 |  |
| [PCB_MathPolygon](classes/PCB_MathPolygon.md) | PCB &amp; 封装 / 多边形数学类 |  |
| [PCB_Net](classes/PCB_Net.md) | PCB &amp; 封装 / 网络类 |  |
| [PCB_Primitive](classes/PCB_Primitive.md) | PCB &amp; 封装 / 图元类 |  |
| [PCB_PrimitiveArc](classes/PCB_PrimitiveArc.md) | PCB &amp; 封装 / 圆弧线图元类 |  |
| [PCB_PrimitiveAttribute](classes/PCB_PrimitiveAttribute.md) | PCB &amp; 封装 / 属性图元类 |  |
| [PCB_PrimitiveComponent](classes/PCB_PrimitiveComponent.md) | PCB &amp; 封装 / 器件图元类 |  |
| [PCB_PrimitiveDimension](classes/PCB_PrimitiveDimension.md) | PCB &amp; 封装 / 尺寸标注图元类 |  |
| [PCB_PrimitiveFill](classes/PCB_PrimitiveFill.md) | PCB &amp; 封装 / 填充图元类 |  |
| [PCB_PrimitiveImage](classes/PCB_PrimitiveImage.md) | PCB &amp; 封装 / 图像图元类 |  |
| [PCB_PrimitiveLine](classes/PCB_PrimitiveLine.md) | PCB &amp; 封装 / 直线图元类 |  |
| [PCB_PrimitiveObject](classes/PCB_PrimitiveObject.md) | PCB &amp; 封装 / 二进制内嵌对象图元类 |  |
| [PCB_PrimitivePad](classes/PCB_PrimitivePad.md) | PCB &amp; 封装 / 焊盘图元类 |  |
| [PCB_PrimitivePolyline](classes/PCB_PrimitivePolyline.md) | PCB &amp; 封装 / 折线图元类 |  |
| [PCB_PrimitivePour](classes/PCB_PrimitivePour.md) | PCB &amp; 封装 / 覆铜边框图元类 |  |
| [PCB_PrimitivePoured](classes/PCB_PrimitivePoured.md) | PCB &amp; 封装 / 覆铜填充图元类 |  |
| [PCB_PrimitiveRegion](classes/PCB_PrimitiveRegion.md) | PCB &amp; 封装 / 禁止区域和约束区域图元类 |  |
| [PCB_PrimitiveString](classes/PCB_PrimitiveString.md) | PCB &amp; 封装 / 文本图元类 |  |
| [PCB_PrimitiveVia](classes/PCB_PrimitiveVia.md) | PCB &amp; 封装 / 过孔图元类 |  |
| [PCB_RayTracerEngine](classes/PCB_RayTracerEngine.md) | PCB &amp; 封装 / 光线追踪引擎类 |  |
| [PCB_SelectControl](classes/PCB_SelectControl.md) | PCB &amp; 封装 / 选择控制类 |  |
| [PNL_Document](classes/PNL_Document.md) | 面板 / 文档操作类 |  |
| [SCH_Document](classes/SCH_Document.md) | 原理图 &amp; 符号 / 文档操作类 |  |
| [SCH_Drc](classes/SCH_Drc.md) | 原理图 &amp; 符号 / 设计规则检查（DRC）类 |  |
| [SCH_Event](classes/SCH_Event.md) | 原理图 &amp; 符号 / 事件类 |  |
| [SCH_ManufactureData](classes/SCH_ManufactureData.md) | 原理图 &amp; 符号 / 生产资料类 |  |
| [SCH_Net](classes/SCH_Net.md) | 原理图 &amp; 符号 / 网络类 |  |
| [SCH_Netlist](classes/SCH_Netlist.md) | 原理图 &amp; 符号 / 网表类 |  |
| [SCH_Primitive](classes/SCH_Primitive.md) | 原理图 &amp; 符号 / 图元类 |  |
| [SCH_PrimitiveArc](classes/SCH_PrimitiveArc.md) | 原理图 &amp; 符号 / 圆弧图元类 |  |
| [SCH_PrimitiveAttribute](classes/SCH_PrimitiveAttribute.md) | 原理图 &amp; 符号 / 属性图元类 |  |
| [SCH_PrimitiveBus](classes/SCH_PrimitiveBus.md) | 原理图 &amp; 符号 / 总线图元类 |  |
| [SCH_PrimitiveCircle](classes/SCH_PrimitiveCircle.md) | 原理图 &amp; 符号 / 圆图元类 |  |
| [SCH_PrimitiveComponent](classes/SCH_PrimitiveComponent.md) | 原理图 &amp; 符号 / 器件图元类 |  |
| [SCH_PrimitiveObject](classes/SCH_PrimitiveObject.md) | 原理图 &amp; 符号 / 二进制内嵌对象图元类 |  |
| [SCH_PrimitivePin](classes/SCH_PrimitivePin.md) | 原理图 &amp; 符号 / 引脚图元类 |  |
| [SCH_PrimitivePolygon](classes/SCH_PrimitivePolygon.md) | 原理图 &amp; 符号 / 多边形（折线）图元类 |  |
| [SCH_PrimitiveRectangle](classes/SCH_PrimitiveRectangle.md) | 原理图 &amp; 符号 / 矩形图元类 |  |
| [SCH_PrimitiveText](classes/SCH_PrimitiveText.md) | 原理图 &amp; 符号 / 文本图元类 |  |
| [SCH_PrimitiveWire](classes/SCH_PrimitiveWire.md) | 原理图 &amp; 符号 / 导线图元类 |  |
| [SCH_SelectControl](classes/SCH_SelectControl.md) | 原理图 &amp; 符号 / 选择控制类 |  |
| [SCH_SimulationEngine](classes/SCH_SimulationEngine.md) | 原理图 &amp; 符号 / 仿真引擎类 |  |
| [SCH_Utils](classes/SCH_Utils.md) | 原理图 &amp; 符号 / 工具类 |  |
| [SYS_ClientUrl](classes/SYS_ClientUrl.md) | 系统 / 外部请求类 |  |
| [SYS_Dialog](classes/SYS_Dialog.md) | 系统 / 对话框类 |  |
| [SYS_Environment](classes/SYS_Environment.md) | 系统 / 运行环境类 |  |
| [SYS_FileManager](classes/SYS_FileManager.md) | 系统 / 文件管理类 |  |
| [SYS_FileSystem](classes/SYS_FileSystem.md) | 系统 / 文件系统交互类 |  |
| [SYS_FontManager](classes/SYS_FontManager.md) | 系统 / 字体管理类 |  |
| [SYS_FormatConversion](classes/SYS_FormatConversion.md) | 系统 / 格式转换（Chameleon）类 |  |
| [SYS_HeaderMenu](classes/SYS_HeaderMenu.md) | 系统 / 顶部菜单类 |  |
| [SYS_I18n](classes/SYS_I18n.md) | 系统 / 多语言类 |  |
| [SYS_IFrame](classes/SYS_IFrame.md) | 系统 / 内联框架窗口类 |  |
| [SYS_LoadingAndProgressBar](classes/SYS_LoadingAndProgressBar.md) | 系统 / 加载与进度条类 |  |
| [SYS_Log](classes/SYS_Log.md) | 系统 / 日志类 |  |
| [SYS_Math](classes/SYS_Math.md) | 系统 / 数学计算类 |  |
| [SYS_Message](classes/SYS_Message.md) | 系统 / 消息通知类 |  |
| [SYS_MessageBox](classes/SYS_MessageBox.md) | 系统 / 消息框类 |  |
| [SYS_MessageBus](classes/SYS_MessageBus.md) | 系统 / 消息总线类 |  |
| [SYS_PanelControl](classes/SYS_PanelControl.md) | 系统 / 面板控制类 |  |
| [SYS_RightClickMenu](classes/SYS_RightClickMenu.md) | 系统 / 右键菜单类 |  |
| [SYS_Setting](classes/SYS_Setting.md) | 系统 / 设置类 |  |
| [SYS_ShortcutKey](classes/SYS_ShortcutKey.md) | 系统 / 快捷键类 |  |
| [SYS_Storage](classes/SYS_Storage.md) | 系统 / 存储类 |  |
| [SYS_Timer](classes/SYS_Timer.md) | 系统 / 定时器类 |  |
| [SYS_ToastMessage](classes/SYS_ToastMessage.md) | 系统 / 吐司消息类 |  |
| [SYS_Tool](classes/SYS_Tool.md) | 系统 / 工具类 |  |
| [SYS_Unit](classes/SYS_Unit.md) | 系统 / 单位类 |  |
| [SYS_WebSocket](classes/SYS_WebSocket.md) | 系统 / WebSocket 类 |  |
| [SYS_Window](classes/SYS_Window.md) | 系统 / 窗口类 |  |


---

# 枚举 (Enumerations)

| 枚举名 | 描述 | 备注 |
|--------|------|------|
| [EDMT_EditorDocumentType](enums/EDMT_EditorDocumentType.md) | 编辑器文档类型 |  |
| [EDMT_EditorSplitScreenDirection](enums/EDMT_EditorSplitScreenDirection.md) | 编辑器分屏方向 |  |
| [EDMT_EditorTabEventType](enums/EDMT_EditorTabEventType.md) | 编辑器标签页事件类型 |  |
| [EDMT_IndicatorMarkerType](enums/EDMT_IndicatorMarkerType.md) | 指示标记类型 |  |
| [EDMT_ItemType](enums/EDMT_ItemType.md) | 文档树项目类型 |  |
| [EDMT_ProjectCollaborationMode](enums/EDMT_ProjectCollaborationMode.md) | 工程协作模式 |  |
| [ELIB_DeviceJlcLibraryCategory](enums/ELIB_DeviceJlcLibraryCategory.md) | 嘉立创贴片库类别 |  |
| [ELIB_LibraryType](enums/ELIB_LibraryType.md) | 综合库库类型 |  |
| [ELIB_PreviewType](enums/ELIB_PreviewType.md) | 预览视图类型 |  |
| [ELIB_SimulationModelType](enums/ELIB_SimulationModelType.md) | 仿真模型类型 |  |
| [ELIB_SymbolType](enums/ELIB_SymbolType.md) | 符号类型 |  |
| [EPCB_AutoRoutingCornerStyle](enums/EPCB_AutoRoutingCornerStyle.md) | 自动布线拐角风格 |  |
| [EPCB_AutoRoutingExistingPrimitiveMode](enums/EPCB_AutoRoutingExistingPrimitiveMode.md) | 自动布线对已有导线/过孔的处理方式 |  |
| [EPCB_AutoRoutingOptimization](enums/EPCB_AutoRoutingOptimization.md) | 自动布线效果优先级 |  |
| [EPCB_DocumentCanvasUpdateCalculationActiveStatus](enums/EPCB_DocumentCanvasUpdateCalculationActiveStatus.md) | 画布更新计算功能状态 |  |
| [EPCB_DocumentRatlineCalculatingActiveStatus](enums/EPCB_DocumentRatlineCalculatingActiveStatus.md) | 文档飞线计算功能状态 |  |
| [EPCB_InactiveLayerDisplayMode](enums/EPCB_InactiveLayerDisplayMode.md) | 非激活层展示模式 |  |
| [EPCB_LayerColorConfiguration](enums/EPCB_LayerColorConfiguration.md) | 图层颜色配置 |  |
| [EPCB_LayerId](enums/EPCB_LayerId.md) | 图层 ID |  |
| [EPCB_LayerStatus](enums/EPCB_LayerStatus.md) | 层状态 |  |
| [EPCB_LayerType](enums/EPCB_LayerType.md) | 图层类型 |  |
| [EPCB_MouseEventType](enums/EPCB_MouseEventType.md) | 鼠标事件类型 |  |
| [EPCB_NetEventType](enums/EPCB_NetEventType.md) | 网络事件类型 |  |
| [EPCB_PcbPlateType](enums/EPCB_PcbPlateType.md) | PCB 板材类型 |  |
| [EPCB_PdfOutputMethod](enums/EPCB_PdfOutputMethod.md) | PDF 输出方式 |  |
| [EPCB_PrimitiveArcInteractiveMode](enums/EPCB_PrimitiveArcInteractiveMode.md) | 圆弧交互模式 |  |
| [EPCB_PrimitiveDimensionType](enums/EPCB_PrimitiveDimensionType.md) | 尺寸标注类型 |  |
| [EPCB_PrimitiveEventType](enums/EPCB_PrimitiveEventType.md) | 图元事件类型 |  |
| [EPCB_PrimitiveFillMode](enums/EPCB_PrimitiveFillMode.md) | 填充图元填充模式 |  |
| [EPCB_PrimitivePadHeatWeldingConnectionMethod](enums/EPCB_PrimitivePadHeatWeldingConnectionMethod.md) | 焊盘热焊连接方式 |  |
| [EPCB_PrimitivePadHoleType](enums/EPCB_PrimitivePadHoleType.md) | 焊盘钻孔类型 |  |
| [EPCB_PrimitivePadShapeType](enums/EPCB_PrimitivePadShapeType.md) | 焊盘外形种类 |  |
| [EPCB_PrimitivePadType](enums/EPCB_PrimitivePadType.md) | 焊盘类型 |  |
| [EPCB_PrimitivePourFillMethod](enums/EPCB_PrimitivePourFillMethod.md) | 覆铜填充方法 |  |
| [EPCB_PrimitiveRegionRuleType](enums/EPCB_PrimitiveRegionRuleType.md) | 区域图元区域规则类型 |  |
| [EPCB_PrimitiveStringAlignMode](enums/EPCB_PrimitiveStringAlignMode.md) | 文本对齐模式 |  |
| [EPCB_PrimitiveType](enums/EPCB_PrimitiveType.md) | 图元类型 |  |
| [EPCB_PrimitiveViaType](enums/EPCB_PrimitiveViaType.md) | 过孔类型 |  |
| [ESCH_DynamicSimulationEnginePullEventType](enums/ESCH_DynamicSimulationEnginePullEventType.md) | 动态仿真引擎拉取事件类型 |  |
| [ESCH_DynamicSimulationEnginePushEventType](enums/ESCH_DynamicSimulationEnginePushEventType.md) | 动态仿真引擎推送事件类型 |  |
| [ESCH_ExportDocumentFileType](enums/ESCH_ExportDocumentFileType.md) | 导出文档文件类型 |  |
| [ESCH_MouseEventType](enums/ESCH_MouseEventType.md) | 鼠标事件类型 |  |
| [ESCH_PrimitiveComponentType](enums/ESCH_PrimitiveComponentType.md) | 器件类型 |  |
| [ESCH_PrimitiveEventType](enums/ESCH_PrimitiveEventType.md) | 图元事件类型 |  |
| [ESCH_PrimitiveFillStyle](enums/ESCH_PrimitiveFillStyle.md) | 填充样式 |  |
| [ESCH_PrimitiveLineType](enums/ESCH_PrimitiveLineType.md) | 线型 |  |
| [ESCH_PrimitivePinShape](enums/ESCH_PrimitivePinShape.md) | 引脚形状 |  |
| [ESCH_PrimitivePinType](enums/ESCH_PrimitivePinType.md) | 引脚类型 |  |
| [ESCH_PrimitiveTextAlignMode](enums/ESCH_PrimitiveTextAlignMode.md) | 文本对齐模式 |  |
| [ESCH_PrimitiveType](enums/ESCH_PrimitiveType.md) | 图元类型 |  |
| [ESCH_SimulationNetlistType](enums/ESCH_SimulationNetlistType.md) | 仿真网表类型 |  |
| [ESCH_SpiceSimulationEnginePullEventType](enums/ESCH_SpiceSimulationEnginePullEventType.md) | Spice 仿真引擎拉取事件类型 |  |
| [ESCH_SpiceSimulationEnginePushEventType](enums/ESCH_SpiceSimulationEnginePushEventType.md) | Spice 仿真引擎推送事件类型 |  |
| [ESYS_BottomPanelTab](enums/ESYS_BottomPanelTab.md) | 底部面板标签页 |  |
| [ESYS_HeaderMenuEnvironment](enums/ESYS_HeaderMenuEnvironment.md) | 顶部菜单环境 |  |
| [ESYS_ImportProjectBoardOutlineSource](enums/ESYS_ImportProjectBoardOutlineSource.md) | 导入工程板边框来源 |  |
| [ESYS_ImportProjectImportOption](enums/ESYS_ImportProjectImportOption.md) | 导入工程导入选项 |  |
| [ESYS_ImportProjectSchematicObjectStyle](enums/ESYS_ImportProjectSchematicObjectStyle.md) | 导入工程原理图图元样式 |  |
| [ESYS_ImportProjectViaSolderMaskExpansion](enums/ESYS_ImportProjectViaSolderMaskExpansion.md) | 导入工程过孔阻焊扩展 |  |
| [ESYS_LeftPanelTab](enums/ESYS_LeftPanelTab.md) | 左侧面板标签页 |  |
| [ESYS_LogType](enums/ESYS_LogType.md) | 日志类型 |  |
| [ESYS_NetlistType](enums/ESYS_NetlistType.md) | 网表类型 |  |
| [ESYS_RightPanelTab](enums/ESYS_RightPanelTab.md) | 右侧面板标签页 |  |
| [ESYS_ShortcutKeyEffectiveEditorRange](enums/ESYS_ShortcutKeyEffectiveEditorRange.md) | 快捷键生效页面范围 |  |
| [ESYS_ShortcutKeyEffectiveEditorScene](enums/ESYS_ShortcutKeyEffectiveEditorScene.md) | 快捷键生效场景范围 |  |
| [ESYS_StartPageQuickStartItem](enums/ESYS_StartPageQuickStartItem.md) | 开始页快速启动项 |  |
| [ESYS_Theme](enums/ESYS_Theme.md) | 主题 |  |
| [ESYS_ToastMessageType](enums/ESYS_ToastMessageType.md) | 吐司消息类型 |  |
| [ESYS_Unit](enums/ESYS_Unit.md) | 单位 |  |
| [ESYS_WindowEventType](enums/ESYS_WindowEventType.md) | 窗口事件类型 |  |
| [ESYS_WindowOpenTarget](enums/ESYS_WindowOpenTarget.md) | 打开窗口上下文目标 |  |
| [NetportDeviceName](enums/NetportDeviceName.md) | 网络端口符号对应的器件名称 |  |
| [SchToolBarDeviceName](enums/SchToolBarDeviceName.md) | 悬浮框特殊符号对应的器件名称 |  |
| [createDesignPortal()](enums/createDesignPortal().md) | 创建一个组件化弹出窗口的通信入口（客户端 API）。  扩展可在任意环境（iframe / worker / Main）调用，返回一个 IDesignPortal 对象， 所有通信（发消息 + 收事件）均封装在对象内部，扩展无需感知 bus。  扩展结合 lc-editor-design-react 的 VirtualRender / 虚拟机组件使用：  ```tsx const portal = eda.sys_Dialog.createDesignPortal(); const root = new VirtualRender(); root.render(   <PortalContext.Provider value={portal}>     <MyDialog />   </PortalContext.Provider> ); ``` |  |
| [registerDesignPortalHost()](enums/registerDesignPortalHost().md) | 注册组件化弹出窗口服务端（仅在 Main 环境调用一次）。  监听客户端（iframe / worker / Main）经 bus 发来的 create/update/detach 消息， 驱动 Main 端的 EditorDesignPortal 实际渲染组件，并将组件事件回传给客户端。 |  |


---

# 接口 (Interfaces)

| 接口名 | 描述 | 备注 |
|--------|------|------|
| [BoardProps](interfaces/BoardProps.md) | 分组面板：带标题的可折叠/分组容器 |  |
| [ButtonProps](interfaces/ButtonProps.md) | 按钮组件：可点击触发的操作按钮 |  |
| [CheckBoxProps](interfaces/CheckBoxProps.md) | 复选框组件：可勾选的状态控件 |  |
| [ComponentPropsMap](interfaces/ComponentPropsMap.md) | 组件名 → Props 类型映射 作为 createComponent 泛型约束的唯一来源 |  |
| [DialogProps](interfaces/DialogProps.md) | 对话框组件：带标题栏、可拖拽缩放的组合弹窗 |  |
| [FlexItemProps](interfaces/FlexItemProps.md) | Flex 子项：Flex 布局中的单个子元素 |  |
| [FlexProps](interfaces/FlexProps.md) | 布局容器：灵活的 Flex 布局容器 |  |
| [GridItemProps](interfaces/GridItemProps.md) | Grid 子项：网格中的单个子元素 |  |
| [GridProps](interfaces/GridProps.md) | 布局容器：固定列数的网格布局容器 |  |
| [IconProps](interfaces/IconProps.md) | 图标配置：通过 URL 或 CSS class 指定图标 |  |
| [IDesignPortal](interfaces/IDesignPortal.md) | 组件树操作契约。 |  |
| [IDMT_BoardItem](interfaces/IDMT_BoardItem.md) | 板子属性 |  |
| [IDMT_BriefProjectItem](interfaces/IDMT_BriefProjectItem.md) | 简略工程属性 |  |
| [IDMT_EditorDocumentItem](interfaces/IDMT_EditorDocumentItem.md) | 编辑器文档对象 |  |
| [IDMT_EditorSplitScreenItem](interfaces/IDMT_EditorSplitScreenItem.md) | 编辑器分屏属性 |  |
| [IDMT_EditorTabItem](interfaces/IDMT_EditorTabItem.md) | 编辑器标签页 |  |
| [IDMT_FolderItem](interfaces/IDMT_FolderItem.md) | 文件夹属性 |  |
| [IDMT_IndicatorMarkerShape](interfaces/IDMT_IndicatorMarkerShape.md) | 指示标记外形 |  |
| [IDMT_PanelItem](interfaces/IDMT_PanelItem.md) | 面板属性 |  |
| [IDMT_PcbItem](interfaces/IDMT_PcbItem.md) | PCB 属性 |  |
| [IDMT_ProjectItem](interfaces/IDMT_ProjectItem.md) | 工程属性 |  |
| [IDMT_SchematicItem](interfaces/IDMT_SchematicItem.md) | 原理图属性 |  |
| [IDMT_SchematicPageItem](interfaces/IDMT_SchematicPageItem.md) | 原理图图页属性 |  |
| [IDMT_TeamItem](interfaces/IDMT_TeamItem.md) | 团队属性 |  |
| [IDMT_WorkspaceItem](interfaces/IDMT_WorkspaceItem.md) | 工作区属性 |  |
| [ILIB_3DModelItem](interfaces/ILIB_3DModelItem.md) | 3D 模型属性 |  |
| [ILIB_3DModelSearchItem](interfaces/ILIB_3DModelSearchItem.md) | 搜索到的 3D 模型属性 |  |
| [ILIB_CbbItem](interfaces/ILIB_CbbItem.md) | 复用模块属性 |  |
| [ILIB_CbbSearchItem](interfaces/ILIB_CbbSearchItem.md) | 搜索到的复用模块属性 |  |
| [ILIB_ClassificationIndex](interfaces/ILIB_ClassificationIndex.md) | 分类索引 |  |
| [ILIB_DeviceAssociationItem](interfaces/ILIB_DeviceAssociationItem.md) | 器件关联符号、封装属性 |  |
| [ILIB_DeviceExtendPropertyItem](interfaces/ILIB_DeviceExtendPropertyItem.md) | 器件扩展属性 |  |
| [ILIB_DeviceItem](interfaces/ILIB_DeviceItem.md) | 器件属性 |  |
| [ILIB_DevicePropertiesForSearch](interfaces/ILIB_DevicePropertiesForSearch.md) | 可用于精确搜索的器件参数 |  |
| [ILIB_DeviceSearchItem](interfaces/ILIB_DeviceSearchItem.md) | 搜索到的器件属性 |  |
| [ILIB_ExtendLibrary3DModelFunctions](interfaces/ILIB_ExtendLibrary3DModelFunctions.md) | 外部库 3D 模型方法 |  |
| [ILIB_ExtendLibraryCbbFunctions](interfaces/ILIB_ExtendLibraryCbbFunctions.md) | 外部库复用模块方法 |  |
| [ILIB_ExtendLibraryClassificationIndex](interfaces/ILIB_ExtendLibraryClassificationIndex.md) | 外部库分类索引 |  |
| [ILIB_ExtendLibraryDeviceFunctions](interfaces/ILIB_ExtendLibraryDeviceFunctions.md) | 外部库器件方法 |  |
| [ILIB_ExtendLibraryFootprintFunctions](interfaces/ILIB_ExtendLibraryFootprintFunctions.md) | 外部库封装方法 |  |
| [ILIB_ExtendLibraryFunctions](interfaces/ILIB_ExtendLibraryFunctions.md) | 外部库方法 |  |
| [ILIB_ExtendLibraryItem](interfaces/ILIB_ExtendLibraryItem.md) | 外部库元素 |  |
| [ILIB_ExtendLibraryItemIndex](interfaces/ILIB_ExtendLibraryItemIndex.md) | 外部库元素索引 |  |
| [ILIB_ExtendLibrarySearchProperty](interfaces/ILIB_ExtendLibrarySearchProperty.md) | 外部库搜索参数 |  |
| [ILIB_ExtendLibrarySearchResult](interfaces/ILIB_ExtendLibrarySearchResult.md) | 外部库搜索结果 |  |
| [ILIB_ExtendLibrarySearchResultDataLine](interfaces/ILIB_ExtendLibrarySearchResultDataLine.md) | 外部库搜索结果数据行 |  |
| [ILIB_ExtendLibrarySymbolFunctions](interfaces/ILIB_ExtendLibrarySymbolFunctions.md) | 外部库符号方法 |  |
| [ILIB_ExtendLibraryUserIndex](interfaces/ILIB_ExtendLibraryUserIndex.md) | 外部库用户索引 |  |
| [ILIB_FootprintItem](interfaces/ILIB_FootprintItem.md) | 封装属性 |  |
| [ILIB_FootprintPropertiesForSearch](interfaces/ILIB_FootprintPropertiesForSearch.md) | 可用于精确搜索的封装参数 |  |
| [ILIB_FootprintSearchItem](interfaces/ILIB_FootprintSearchItem.md) | 搜索到的封装属性 |  |
| [ILIB_LibraryInfo](interfaces/ILIB_LibraryInfo.md) | 库信息 |  |
| [ILIB_LibraryItem](interfaces/ILIB_LibraryItem.md) | 库属性 |  |
| [ILIB_PanelLibraryItem](interfaces/ILIB_PanelLibraryItem.md) | 面板库属性 |  |
| [ILIB_PanelLibrarySearchItem](interfaces/ILIB_PanelLibrarySearchItem.md) | 搜索到的面板库属性 |  |
| [ILIB_SimulationModelItem](interfaces/ILIB_SimulationModelItem.md) | 仿真模型属性 |  |
| [ILIB_SimulationModelSearchItem](interfaces/ILIB_SimulationModelSearchItem.md) | 搜索到的仿真模型属性 |  |
| [ILIB_SymbolItem](interfaces/ILIB_SymbolItem.md) | 符号属性 |  |
| [ILIB_SymbolPropertiesForSearch](interfaces/ILIB_SymbolPropertiesForSearch.md) | 可用于精确搜索的符号参数 |  |
| [ILIB_SymbolSearchItem](interfaces/ILIB_SymbolSearchItem.md) | 搜索到的符号属性 |  |
| [ImageProps](interfaces/ImageProps.md) | 图片组件：展示单张图片 |  |
| [InputProps](interfaces/InputProps.md) | 输入框组件：支持下拉、搜索、清除、前后缀等多种形态 |  |
| [IPCB_AutoLayoutResult](interfaces/IPCB_AutoLayoutResult.md) | 自动布局结果 |  |
| [IPCB_AutoRoutingProps](interfaces/IPCB_AutoRoutingProps.md) | 自动布线入参 |  |
| [IPCB_AutoRoutingResult](interfaces/IPCB_AutoRoutingResult.md) | 自动布线结果 |  |
| [IPCB_BomPropertiesTableColumns](interfaces/IPCB_BomPropertiesTableColumns.md) | BOM 列的属性及排序规则 |  |
| [IPCB_DifferentialPairItem](interfaces/IPCB_DifferentialPairItem.md) | 差分对属性 |  |
| [IPCB_DiscretizedPoint](interfaces/IPCB_DiscretizedPoint.md) | 离散化点 |  |
| [IPCB_DiscretizeOptions](interfaces/IPCB_DiscretizeOptions.md) | 离散化选项 |  |
| [IPCB_EqualLengthNetGroupItem](interfaces/IPCB_EqualLengthNetGroupItem.md) | 等长网络组属性 |  |
| [IPCB_LayerItem](interfaces/IPCB_LayerItem.md) | 图层属性 |  |
| [IPCB_NetClassItem](interfaces/IPCB_NetClassItem.md) | 网络类属性 |  |
| [IPCB_NetInfo](interfaces/IPCB_NetInfo.md) | 网络属性 |  |
| [IPCB_PadPairGroupItem](interfaces/IPCB_PadPairGroupItem.md) | 焊盘对组属性 |  |
| [IPCB_PadPairMinWireLengthItem](interfaces/IPCB_PadPairMinWireLengthItem.md) | 焊盘对最短导线长度属性 |  |
| [IPCB_PhysicalStackingConfiguration](interfaces/IPCB_PhysicalStackingConfiguration.md) | 物理叠层配置 |  |
| [IPCB_Primitive](interfaces/IPCB_Primitive.md) | PCB 图元 |  |
| [IPCB_PrimitiveAPI](interfaces/IPCB_PrimitiveAPI.md) | PCB 图元接口 |  |
| [IPCB_PrimitivePadHeatWelding](interfaces/IPCB_PrimitivePadHeatWelding.md) | 焊盘热焊优化参数 |  |
| [IPCB_PrimitivePouredPourFill](interfaces/IPCB_PrimitivePouredPourFill.md) | 覆铜填充区域 |  |
| [IPCB_PrimitiveSolderMaskAndPasteMaskExpansion](interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) | 阻焊/助焊扩展 |  |
| [IPCB_SubstratePhysicalProperties](interfaces/IPCB_SubstratePhysicalProperties.md) | 基板物理属性 |  |
| [IRawNet](interfaces/IRawNet.md) | 原始数据 - net |  |
| [IRawPureSchematic](interfaces/IRawPureSchematic.md) | 原始数据 - pureSchematic |  |
| [IRawSchematic](interfaces/IRawSchematic.md) | 原始数据 - schematic |  |
| [IRawWire](interfaces/IRawWire.md) | 原始数据 - wire |  |
| [ISCH_DrcError](interfaces/ISCH_DrcError.md) | DRC 错误条目 |  |
| [ISCH_DrcErrorPrimitive](interfaces/ISCH_DrcErrorPrimitive.md) | DRC 错误涉及的图元 |  |
| [ISCH_NetInfo](interfaces/ISCH_NetInfo.md) | 网络属性 |  |
| [ISCH_Primitive](interfaces/ISCH_Primitive.md) | 原理图图元 |  |
| [ISCH_PrimitiveAPI](interfaces/ISCH_PrimitiveAPI.md) | 原理图图元接口 |  |
| [ISCH_ProjectNetInfo](interfaces/ISCH_ProjectNetInfo.md) | 工程网络属性 |  |
| [ISCH_WireInfo](interfaces/ISCH_WireInfo.md) | 导线属性 |  |
| [ISYS_FileSystemFileList](interfaces/ISYS_FileSystemFileList.md) | 文件系统文件路径 |  |
| [ISYS_HeaderMenus](interfaces/ISYS_HeaderMenus.md) | 顶部菜单项 |  |
| [ISYS_HeaderMenuSub1MenuItem](interfaces/ISYS_HeaderMenuSub1MenuItem.md) | 顶部二级菜单项 |  |
| [ISYS_HeaderMenuSub2MenuItem](interfaces/ISYS_HeaderMenuSub2MenuItem.md) | 顶部三级菜单项 |  |
| [ISYS_HeaderMenuTopMenuItem](interfaces/ISYS_HeaderMenuTopMenuItem.md) | 顶部一级菜单项 |  |
| [ISYS_LogLine](interfaces/ISYS_LogLine.md) | 日志行 |  |
| [ISYS_MathBBox](interfaces/ISYS_MathBBox.md) | BBox（最小外接矩形） |  |
| [ISYS_MathPoint](interfaces/ISYS_MathPoint.md) | 离散点 |  |
| [ISYS_MathPolygonWithHoles](interfaces/ISYS_MathPolygonWithHoles.md) | 带孔洞的多边形 |  |
| [ISYS_MessageBusTask](interfaces/ISYS_MessageBusTask.md) | 消息总线任务 |  |
| [ISYS_MultilingualLanguagesData](interfaces/ISYS_MultilingualLanguagesData.md) | 多语言数据 |  |
| [ISYS_PcbComparisonResponse](interfaces/ISYS_PcbComparisonResponse.md) | PCB 对比响应 |  |
| [ISYS_RightClickMenuItem](interfaces/ISYS_RightClickMenuItem.md) | 右键菜单项 |  |
| [ISYS_ShortcutKeyData](interfaces/ISYS_ShortcutKeyData.md) | 快捷键数据 |  |
| [ISYS_ShortcutKeyDataWithCallFn](interfaces/ISYS_ShortcutKeyDataWithCallFn.md) | 包含 CallFn 的快捷键数据 |  |
| [ISYS_ShortcutKeyDataWithUserDefinedShortcutKey](interfaces/ISYS_ShortcutKeyDataWithUserDefinedShortcutKey.md) | 包含 userDefinedShortcutKey 的快捷键数据 |  |
| [ISYS_WindowEventListenerRemovableObject](interfaces/ISYS_WindowEventListenerRemovableObject.md) | 窗口事件监听可移除对象 |  |
| [ListChildren](interfaces/ListChildren.md) | 列表项：支持多级嵌套分组 |  |
| [ListProps](interfaces/ListProps.md) | 列表组件：支持多级嵌套、图标、展开的列表 |  |
| [ModalProps](interfaces/ModalProps.md) | 模态弹窗：可拖拽、可调整大小的顶层弹窗 |  |
| [RadioGroupProps](interfaces/RadioGroupProps.md) | 单选组组件：一组互斥的单选选项 |  |
| [RadioItem](interfaces/RadioItem.md) | 单选组中的单个选项 |  |
| [ScrollerProps](interfaces/ScrollerProps.md) | 滚动组件：虚拟滚动列表，仅渲染可见行 |  |
| [SelectListItem](interfaces/SelectListItem.md) | 下拉选项：支持多级嵌套分组 |  |
| [SelectProps](interfaces/SelectProps.md) | 下拉选择器：基于输入框的下拉选择控件 |  |
| [SlotProps](interfaces/SlotProps.md) | 插槽组件：为父组件提供具名内容占位 |  |
| [StyleProps](interfaces/StyleProps.md) | 通用样式属性：可被布局容器等组件继承的样式集合 |  |
| [TextAreaProps](interfaces/TextAreaProps.md) | 多行文本输入组件 |  |
| [TextProps](interfaces/TextProps.md) | 文本组件：静态文本展示 |  |


---

# 类型别名 (Type Aliases)

| 类型名 | 描述 | 备注 |
|--------|------|------|
| [ISYS_LanguageKeyValuePairs](types/ISYS_LanguageKeyValuePairs.md) | 语言数据键值对 |  |
| [TPCB_LayersInTheSelectable](types/TPCB_LayersInTheSelectable.md) | 可选中图层 |  |
| [TPCB_LayersOfComponent](types/TPCB_LayersOfComponent.md) | 器件所属层 |  |
| [TPCB_LayersOfCopper](types/TPCB_LayersOfCopper.md) | 铜箔所属层 |  |
| [TPCB_LayersOfCustom](types/TPCB_LayersOfCustom.md) | 自定义层 |  |
| [TPCB_LayersOfDimension](types/TPCB_LayersOfDimension.md) | 尺寸标注所属层 |  |
| [TPCB_LayersOfFill](types/TPCB_LayersOfFill.md) | 填充所属层 |  |
| [TPCB_LayersOfImage](types/TPCB_LayersOfImage.md) | 复杂多边形图（SVG 图像、文本）所属层 |  |
| [TPCB_LayersOfInner](types/TPCB_LayersOfInner.md) | 内层 |  |
| [TPCB_LayersOfLine](types/TPCB_LayersOfLine.md) | 线所属层 |  |
| [TPCB_LayersOfObject](types/TPCB_LayersOfObject.md) | 二进制内嵌对象所属层 |  |
| [TPCB_LayersOfPad](types/TPCB_LayersOfPad.md) | 焊盘所属层 |  |
| [TPCB_LayersOfRegion](types/TPCB_LayersOfRegion.md) | 区域所属层 |  |
| [TPCB_LayerTypesOfInnerLayer](types/TPCB_LayerTypesOfInnerLayer.md) | 内层允许设置的图层类型 |  |
| [TPCB_NumberOfCopperLayers](types/TPCB_NumberOfCopperLayers.md) | 铜箔层数 |  |
| [TPCB_PolygonSourceArray](types/TPCB_PolygonSourceArray.md) | 单多边形源数组 |  |
| [TPCB_PrimitiveDimensionCoordinateSet](types/TPCB_PrimitiveDimensionCoordinateSet.md) | 尺寸标注坐标集 |  |
| [TPCB_PrimitivePadHole](types/TPCB_PrimitivePadHole.md) | 焊盘钻孔 |  |
| [TPCB_PrimitivePadShape](types/TPCB_PrimitivePadShape.md) | 焊盘外形 |  |
| [TPCB_PrimitiveSpecialPadShape](types/TPCB_PrimitiveSpecialPadShape.md) | 特殊焊盘外形 |  |
| [TSYS_MathPolygonGroup](types/TSYS_MathPolygonGroup.md) | 多边形组 |  |
| [TSYS_MathPolygonInput](types/TSYS_MathPolygonInput.md) | 多边形输入类型 |  |
| [TSYS_PcbComparisonErrorCode](types/TSYS_PcbComparisonErrorCode.md) | PCB 对比失败错误码 |  |
| [TSYS_ShortcutKeys](types/TSYS_ShortcutKeys.md) | 快捷键按键 |  |

