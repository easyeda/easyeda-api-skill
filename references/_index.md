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
| [DMT_Board](classes/DMT_Board.md) | 文档树 / 板子管理类 | 在当前打开的工程内进行板子管理的相关操作 |
| [DMT_EditorControl](classes/DMT_EditorControl.md) | 文档树 / 编辑器控制类 | 此处编辑器控制基于当前已打开的工程设计下的图页，其它任何 `documentUuid` 都将被认为是不存在的文档页 |
| [DMT_Folder](classes/DMT_Folder.md) | 文档树 / 文件夹类 |  |
| [DMT_Panel](classes/DMT_Panel.md) | 文档树 / 面板管理类 | 在当前打开的工程内进行面板管理的相关操作 |
| [DMT_Pcb](classes/DMT_Pcb.md) | 文档树 / PCB 管理类 | 在当前打开的工程内进行 PCB 管理的相关操作 |
| [DMT_Project](classes/DMT_Project.md) | 文档树 / 工程管理类 |  |
| [DMT_Schematic](classes/DMT_Schematic.md) | 文档树 / 原理图管理类 | 在当前打开的工程内进行原理图管理的相关操作 |
| [DMT_SelectControl](classes/DMT_SelectControl.md) | 文档树 / 选择控制类 | 在文档树内进行选择焦点的查询、控制 |
| [DMT_Team](classes/DMT_Team.md) | 文档树 / 团队类 |  |
| [DMT_Workspace](classes/DMT_Workspace.md) | 文档树 / 工作区类 |  |
| [EDA](classes/EDA.md) | 嘉立创 EDA 专业版用户 API 接口 |  |
| [IPCB_ComplexPolygon](classes/IPCB_ComplexPolygon.md) | 复杂多边形 | 复杂多边形可以包含多个单多边形，通过 [fill-rule](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule) 将其组合，以实现多边形的布尔运算。 目前嘉立创 EDA 专业版固定使用 [nonzero](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule#nonzero) 这个 fill-rule。 |
| [IPCB_Polygon](classes/IPCB_Polygon.md) | 单多边形 |  |
| [IPCB_PrimitiveArc](classes/IPCB_PrimitiveArc.md) | 圆弧线图元 | 直线和圆弧线均为导线，对应画布的线条走线和圆弧走线 |
| [IPCB_PrimitiveAttribute](classes/IPCB_PrimitiveAttribute.md) | 属性图元 |  |
| [IPCB_PrimitiveComponent](classes/IPCB_PrimitiveComponent.md) | 器件图元 |  |
| [IPCB_PrimitiveComponentPad](classes/IPCB_PrimitiveComponentPad.md) | 器件焊盘图元 | 器件焊盘图元是一个特殊的图元，它指的是在 PCB 画布上关联到封装的焊盘  你只能通过 [器件类的 getAllPinsByPrimitiveId 方法](./pro-api.pcb_primitivecomponent.getallpinsbyprimitiveid.md) 或 [器件图元的 getAllPads 方法](./pro-api.ipcb_primitivecomponent.getallpins.md) 获取到器件焊盘图元 |
| [IPCB_PrimitiveDimension](classes/IPCB_PrimitiveDimension.md) | 尺寸标注图元 |  |
| [IPCB_PrimitiveFill](classes/IPCB_PrimitiveFill.md) | 填充图元 |  |
| [IPCB_PrimitiveImage](classes/IPCB_PrimitiveImage.md) | 图像图元 |  |
| [IPCB_PrimitiveLine](classes/IPCB_PrimitiveLine.md) | 直线图元 | 直线和圆弧线均为导线，对应画布的线条走线和圆弧走线 |
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
| [ISCH_PrimitiveComponentPin](classes/ISCH_PrimitiveComponentPin.md) | 器件引脚图元 | 器件引脚图元是一个特殊的图元，它指的是在原理图画布上关联到符号的引脚  器件引脚图元仅可更改 `pinNumber`<!-- -->、`noConnected` 属性，其它所有属性均为只读， 并且你只能通过 [器件类的 getAllPinsByPrimitiveId 方法](./pro-api.sch_primitivecomponent.getallpinsbyprimitiveid.md) 或  获取到器件引脚图元 |
| [ISCH_PrimitivePin](classes/ISCH_PrimitivePin.md) | 引脚图元 | 引脚图元仅符号编辑器可用，在原理图图页内，关联到符号的引脚被称为 [器件引脚图元](./pro-api.isch_primitivecomponentpin.md) |
| [ISCH_PrimitivePolygon](classes/ISCH_PrimitivePolygon.md) | 多边形（折线）图元 |  |
| [ISCH_PrimitiveRectangle](classes/ISCH_PrimitiveRectangle.md) | 矩形图元 |  |
| [ISCH_PrimitiveText](classes/ISCH_PrimitiveText.md) | 文本图元 |  |
| [ISCH_PrimitiveWire](classes/ISCH_PrimitiveWire.md) | 导线图元 |  |
| [LIB_3DModel](classes/LIB_3DModel.md) | 综合库 / 3D 模型类 |  |
| [LIB_Cbb](classes/LIB_Cbb.md) | 综合库 / 复用模块类 |  |
| [LIB_Classification](classes/LIB_Classification.md) | 综合库 / 库分类索引类 |  |
| [LIB_Device](classes/LIB_Device.md) | 综合库 / 器件类 |  |
| [LIB_Footprint](classes/LIB_Footprint.md) | 综合库 / 封装类 |  |
| [LIB_LibrariesList](classes/LIB_LibrariesList.md) | 综合库 / 库列表类 | 此处所有接口都基于编辑器当前工作区环境，如需切换到其他工作区，请使用 [DMT\_Workspace.toggleToWorkspace()](./pro-api.dmt_workspace.toggletoworkspace.md) 接口切换工作区 |
| [LIB_PanelLibrary](classes/LIB_PanelLibrary.md) | 综合库 / 面板库类 |  |
| [LIB_SelectControl](classes/LIB_SelectControl.md) | 综合库 / 选择控制类 |  |
| [LIB_Symbol](classes/LIB_Symbol.md) | 综合库 / 符号类 |  |
| [PCB_Document](classes/PCB_Document.md) | PCB &amp; 封装 / 文档操作类 | 对设计文档总体进行的操作 |
| [PCB_Drc](classes/PCB_Drc.md) | PCB &amp; 封装 / 设计规则检查（DRC）类 | 检查、设定 DRC 规则 |
| [PCB_Event](classes/PCB_Event.md) | PCB &amp; 封装 / 事件类 | 注册事件回调 |
| [PCB_Layer](classes/PCB_Layer.md) | PCB &amp; 封装 / 图层操作类 |  |
| [PCB_ManufactureData](classes/PCB_ManufactureData.md) | PCB &amp; 封装 / 生产资料类 | 获取当前 PCB 的生产资料文件及快捷下单 |
| [PCB_MathPolygon](classes/PCB_MathPolygon.md) | PCB &amp; 封装 / 多边形数学类 |  |
| [PCB_Net](classes/PCB_Net.md) | PCB &amp; 封装 / 网络类 |  |
| [PCB_Primitive](classes/PCB_Primitive.md) | PCB &amp; 封装 / 图元类 | 图元的统一操作 |
| [PCB_PrimitiveArc](classes/PCB_PrimitiveArc.md) | PCB &amp; 封装 / 圆弧线图元类 | 直线和圆弧线均为导线，对应画布的线条走线和圆弧走线 |
| [PCB_PrimitiveAttribute](classes/PCB_PrimitiveAttribute.md) | PCB &amp; 封装 / 属性图元类 |  |
| [PCB_PrimitiveComponent](classes/PCB_PrimitiveComponent.md) | PCB &amp; 封装 / 器件图元类 |  |
| [PCB_PrimitiveDimension](classes/PCB_PrimitiveDimension.md) | PCB &amp; 封装 / 尺寸标注图元类 |  |
| [PCB_PrimitiveFill](classes/PCB_PrimitiveFill.md) | PCB &amp; 封装 / 填充图元类 |  |
| [PCB_PrimitiveImage](classes/PCB_PrimitiveImage.md) | PCB &amp; 封装 / 图像图元类 |  |
| [PCB_PrimitiveLine](classes/PCB_PrimitiveLine.md) | PCB &amp; 封装 / 直线图元类 | 直线和圆弧线均为导线，对应画布的线条走线和圆弧走线 |
| [PCB_PrimitiveObject](classes/PCB_PrimitiveObject.md) | PCB &amp; 封装 / 二进制内嵌对象图元类 | 彩色丝印图像属于二进制内嵌对象，需要使用二进制内嵌对象的方法创建和修改 |
| [PCB_PrimitivePad](classes/PCB_PrimitivePad.md) | PCB &amp; 封装 / 焊盘图元类 |  |
| [PCB_PrimitivePolyline](classes/PCB_PrimitivePolyline.md) | PCB &amp; 封装 / 折线图元类 |  |
| [PCB_PrimitivePour](classes/PCB_PrimitivePour.md) | PCB &amp; 封装 / 覆铜边框图元类 |  |
| [PCB_PrimitivePoured](classes/PCB_PrimitivePoured.md) | PCB &amp; 封装 / 覆铜填充图元类 |  |
| [PCB_PrimitiveRegion](classes/PCB_PrimitiveRegion.md) | PCB &amp; 封装 / 禁止区域和约束区域图元类 |  |
| [PCB_PrimitiveString](classes/PCB_PrimitiveString.md) | PCB &amp; 封装 / 文本图元类 |  |
| [PCB_PrimitiveVia](classes/PCB_PrimitiveVia.md) | PCB &amp; 封装 / 过孔图元类 |  |
| [PCB_SelectControl](classes/PCB_SelectControl.md) | PCB &amp; 封装 / 选择控制类 | 获取或操作选择的元素 |
| [PNL_Document](classes/PNL_Document.md) | 面板 / 文档操作类 | 对设计文档总体进行的操作 |
| [SCH_Document](classes/SCH_Document.md) | 原理图 &amp; 符号 / 文档操作类 | 对设计文档总体进行的操作 |
| [SCH_Drc](classes/SCH_Drc.md) | 原理图 &amp; 符号 / 设计规则检查（DRC）类 | 检查、设定 DRC 规则 |
| [SCH_Event](classes/SCH_Event.md) | 原理图 &amp; 符号 / 事件类 | 注册事件回调 |
| [SCH_ManufactureData](classes/SCH_ManufactureData.md) | 原理图 &amp; 符号 / 生产资料类 | 获取当前原理图图页的生产资料文件及快捷下单 |
| [SCH_Netlist](classes/SCH_Netlist.md) | 原理图 &amp; 符号 / 网表类 | 获取、更新网表 |
| [SCH_Primitive](classes/SCH_Primitive.md) | 原理图 &amp; 符号 / 图元类 | 图元的统一操作 |
| [SCH_PrimitiveArc](classes/SCH_PrimitiveArc.md) | 原理图 &amp; 符号 / 圆弧图元类 |  |
| [SCH_PrimitiveAttribute](classes/SCH_PrimitiveAttribute.md) | 原理图 &amp; 符号 / 属性图元类 |  |
| [SCH_PrimitiveBus](classes/SCH_PrimitiveBus.md) | 原理图 &amp; 符号 / 总线图元类 |  |
| [SCH_PrimitiveCircle](classes/SCH_PrimitiveCircle.md) | 原理图 &amp; 符号 / 圆图元类 |  |
| [SCH_PrimitiveComponent](classes/SCH_PrimitiveComponent.md) | 原理图 &amp; 符号 / 器件图元类 |  |
| [SCH_PrimitivePin](classes/SCH_PrimitivePin.md) | 原理图 &amp; 符号 / 引脚图元类 | 引脚图元仅符号编辑器可用，在原理图图页内，关联到符号的引脚被称为 [器件引脚图元](./pro-api.isch_primitivecomponentpin.md) |
| [SCH_PrimitivePolygon](classes/SCH_PrimitivePolygon.md) | 原理图 &amp; 符号 / 多边形（折线）图元类 |  |
| [SCH_PrimitiveRectangle](classes/SCH_PrimitiveRectangle.md) | 原理图 &amp; 符号 / 矩形图元类 |  |
| [SCH_PrimitiveText](classes/SCH_PrimitiveText.md) | 原理图 &amp; 符号 / 文本图元类 |  |
| [SCH_PrimitiveWire](classes/SCH_PrimitiveWire.md) | 原理图 &amp; 符号 / 导线图元类 |  |
| [SCH_SelectControl](classes/SCH_SelectControl.md) | 原理图 &amp; 符号 / 选择控制类 | 获取或操作选择的元素 |
| [SCH_SimulationEngine](classes/SCH_SimulationEngine.md) | 原理图 &amp; 符号 / 仿真引擎类 | 控制仿真引擎的对接和交互 |
| [SCH_Utils](classes/SCH_Utils.md) | 原理图 &amp; 符号 / 工具类 |  |
| [SYS_ClientUrl](classes/SYS_ClientUrl.md) | 系统 / 外部请求类 | 向外部服务器发起安全的 cURL 请求 |
| [SYS_Dialog](classes/SYS_Dialog.md) | 系统 / 对话框类 | 生成对话框窗口 |
| [SYS_Environment](classes/SYS_Environment.md) | 系统 / 运行环境类 | 获取嘉立创 EDA 专业版运行环境参数 |
| [SYS_FileManager](classes/SYS_FileManager.md) | 系统 / 文件管理类 |  |
| [SYS_FileSystem](classes/SYS_FileSystem.md) | 系统 / 文件系统交互类 |  |
| [SYS_FontManager](classes/SYS_FontManager.md) | 系统 / 字体管理类 | 配置嘉立创 EDA 专业版允许调用的系统字体列表 |
| [SYS_FormatConversion](classes/SYS_FormatConversion.md) | 系统 / 格式转换（Chameleon）类 | 与其它板级 EDA 软件进行交叉文件格式转换 |
| [SYS_HeaderMenu](classes/SYS_HeaderMenu.md) | 系统 / 顶部菜单类 |  |
| [SYS_I18n](classes/SYS_I18n.md) | 系统 / 多语言类 | 使用多语言系统展示多语言文本 |
| [SYS_IFrame](classes/SYS_IFrame.md) | 系统 / 内联框架窗口类 |  |
| [SYS_LoadingAndProgressBar](classes/SYS_LoadingAndProgressBar.md) | 系统 / 加载与进度条类 |  |
| [SYS_Log](classes/SYS_Log.md) | 系统 / 日志类 |  |
| [SYS_Message](classes/SYS_Message.md) | 系统 / 消息通知类 | 生成各种对用户的非侵入式提醒 |
| [SYS_MessageBox](classes/SYS_MessageBox.md) | 系统 / 消息框类 | 生成消息提示框 |
| [SYS_MessageBus](classes/SYS_MessageBus.md) | 系统 / 消息总线类 |  |
| [SYS_PanelControl](classes/SYS_PanelControl.md) | 系统 / 面板控制类 |  |
| [SYS_RightClickMenu](classes/SYS_RightClickMenu.md) | 系统 / 右键菜单类 |  |
| [SYS_Setting](classes/SYS_Setting.md) | 系统 / 设置类 |  |
| [SYS_ShortcutKey](classes/SYS_ShortcutKey.md) | 系统 / 快捷键类 | 注册与管理系统快捷键 |
| [SYS_Storage](classes/SYS_Storage.md) | 系统 / 存储类 | 可以进行扩展的用户配置存储、浏览器本地存储的操作接口 |
| [SYS_Timer](classes/SYS_Timer.md) | 系统 / 定时器类 | 设置定时器 |
| [SYS_ToastMessage](classes/SYS_ToastMessage.md) | 系统 / 吐司消息类 | 在屏幕的边缘弹出简短的消息提醒，会在一定时间后自动消除 |
| [SYS_Tool](classes/SYS_Tool.md) | 系统 / 工具类 |  |
| [SYS_Unit](classes/SYS_Unit.md) | 系统 / 单位类 | 控制系统数据单位与单位转换基础函数，当前系统数据单位跨度等效为 `mil` |
| [SYS_WebSocket](classes/SYS_WebSocket.md) | 系统 / WebSocket 类 | 与 WebSocket 服务器交互 |
| [SYS_Window](classes/SYS_Window.md) | 系统 / 窗口类 | 为了保证安全性，仅提供有限的窗口跳转与监听支持，更多操作请使用内联框架窗口 [SYS\_IFrame](./pro-api.sys_iframe.md) |


---

# 枚举 (Enumerations)

| 枚举名 | 描述 | 备注 |
|--------|------|------|
| [EDMT_EditorDocumentType](enums/EDMT_EditorDocumentType.md) | 编辑器文档类型 |  |
| [EDMT_EditorSplitScreenDirection](enums/EDMT_EditorSplitScreenDirection.md) | 编辑器分屏方向 |  |
| [EDMT_IndicatorMarkerType](enums/EDMT_IndicatorMarkerType.md) | 指示标记类型 |  |
| [EDMT_ItemType](enums/EDMT_ItemType.md) | 文档树项目类型 |  |
| [EDMT_ProjectCollaborationMode](enums/EDMT_ProjectCollaborationMode.md) | 工程协作模式 |  |
| [ELIB_DeviceJlcLibraryCategory](enums/ELIB_DeviceJlcLibraryCategory.md) | 嘉立创贴片库类别 |  |
| [ELIB_LibraryType](enums/ELIB_LibraryType.md) | 综合库库类型 |  |
| [ELIB_PreviewType](enums/ELIB_PreviewType.md) | 预览视图类型 |  |
| [ELIB_SymbolType](enums/ELIB_SymbolType.md) | 符号类型 |  |
| [EPCB_DocumentRatlineCalculatingActiveStatus](enums/EPCB_DocumentRatlineCalculatingActiveStatus.md) | 文档飞线计算功能状态 |  |
| [EPCB_InactiveLayerDisplayMode](enums/EPCB_InactiveLayerDisplayMode.md) | 非激活层展示模式 |  |
| [EPCB_LayerColorConfiguration](enums/EPCB_LayerColorConfiguration.md) | 图层颜色配置 |  |
| [EPCB_LayerId](enums/EPCB_LayerId.md) | 图层 ID |  |
| [EPCB_LayerStatus](enums/EPCB_LayerStatus.md) | 层状态 |  |
| [EPCB_LayerType](enums/EPCB_LayerType.md) | 图层类型 |  |
| [EPCB_PcbPlateType](enums/EPCB_PcbPlateType.md) | PCB 板材类型 |  |
| [EPCB_PdfOutputMethod](enums/EPCB_PdfOutputMethod.md) | PDF 输出方式 |  |
| [EPCB_PrimitiveArcInteractiveMode](enums/EPCB_PrimitiveArcInteractiveMode.md) | 圆弧交互模式 |  |
| [EPCB_PrimitiveDimensionType](enums/EPCB_PrimitiveDimensionType.md) | 尺寸标注类型 |  |
| [EPCB_PrimitiveFillMode](enums/EPCB_PrimitiveFillMode.md) | 填充图元填充模式 | 网格填充和内电层填充为预留配置 |
| [EPCB_PrimitivePadHeatWeldingConnectionMethod](enums/EPCB_PrimitivePadHeatWeldingConnectionMethod.md) | 焊盘热焊连接方式 |  |
| [EPCB_PrimitivePadHoleType](enums/EPCB_PrimitivePadHoleType.md) | 焊盘钻孔类型 |  |
| [EPCB_PrimitivePadShapeType](enums/EPCB_PrimitivePadShapeType.md) | 焊盘外形种类 |  |
| [EPCB_PrimitivePadType](enums/EPCB_PrimitivePadType.md) | 焊盘类型 |  |
| [EPCB_PrimitivePourFillMethod](enums/EPCB_PrimitivePourFillMethod.md) | 覆铜填充方法 |  |
| [EPCB_PrimitiveRegionRuleType](enums/EPCB_PrimitiveRegionRuleType.md) | 区域图元区域规则类型 | [FOLLOW\_REGION\_RULE](./pro-api.epcb_primitiveregionruletype.md) 即为约束区域 |
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
| [ESCH_ShapeType](enums/ESCH_ShapeType.md) | 图元类型 |  |
| [ESCH_SimulationNetlistType](enums/ESCH_SimulationNetlistType.md) | 仿真网表类型 |  |
| [ESCH_SpiceSimulationEnginePullEventType](enums/ESCH_SpiceSimulationEnginePullEventType.md) | Spice 仿真引擎拉取事件类型 |  |
| [ESCH_SpiceSimulationEnginePushEventType](enums/ESCH_SpiceSimulationEnginePushEventType.md) | Spice 仿真引擎推送事件类型 |  |
| [ESYS_BottomPanelTab](enums/ESYS_BottomPanelTab.md) | 底部面板标签页 |  |
| [ESYS_HeaderMenuEnvironment](enums/ESYS_HeaderMenuEnvironment.md) | 顶部菜单环境 |  |
| [ESYS_ImportProjectBoardOutlineSource](enums/ESYS_ImportProjectBoardOutlineSource.md) | 导入工程板边框来源 | 仅 `fileType` 为 `Altium Designer` 或 `Protel` 时才可以指定该属性，否则将被忽略 |
| [ESYS_ImportProjectImportOption](enums/ESYS_ImportProjectImportOption.md) | 导入工程导入选项 |  |
| [ESYS_ImportProjectSchematicObjectStyle](enums/ESYS_ImportProjectSchematicObjectStyle.md) | 导入工程原理图图元样式 |  |
| [ESYS_ImportProjectViaSolderMaskExpansion](enums/ESYS_ImportProjectViaSolderMaskExpansion.md) | 导入工程过孔阻焊扩展 | 仅 `fileType` 为 `Altium Designer` 或 `Protel` 时才可以指定该属性，否则将被忽略 |
| [ESYS_LeftPanelTab](enums/ESYS_LeftPanelTab.md) | 左侧面板标签页 |  |
| [ESYS_LogType](enums/ESYS_LogType.md) | 日志类型 |  |
| [ESYS_NetlistType](enums/ESYS_NetlistType.md) | 网表类型 |  |
| [ESYS_RightPanelTab](enums/ESYS_RightPanelTab.md) | 右侧面板标签页 |  |
| [ESYS_ShortcutKeyEffectiveEditorDocumentType](enums/ESYS_ShortcutKeyEffectiveEditorDocumentType.md) | 快捷键生效页面范围 |  |
| [ESYS_ShortcutKeyEffectiveEditorScene](enums/ESYS_ShortcutKeyEffectiveEditorScene.md) | 快捷键生效场景范围 |  |
| [ESYS_Theme](enums/ESYS_Theme.md) | 主题 |  |
| [ESYS_ToastMessageType](enums/ESYS_ToastMessageType.md) | 吐司消息类型 |  |
| [ESYS_Unit](enums/ESYS_Unit.md) | 单位 |  |
| [ESYS_WindowEventType](enums/ESYS_WindowEventType.md) | 窗口事件类型 |  |
| [ESYS_WindowOpenTarget](enums/ESYS_WindowOpenTarget.md) | 打开窗口上下文目标 |  |


---

# 接口 (Interfaces)

| 接口名 | 描述 | 备注 |
|--------|------|------|
| [IDMT_BoardItem](interfaces/IDMT_BoardItem.md) | 板子属性 |  |
| [IDMT_BriefProjectItem](interfaces/IDMT_BriefProjectItem.md) | 简略工程属性 |  |
| [IDMT_EditorDocumentItem](interfaces/IDMT_EditorDocumentItem.md) | 编辑器文档对象 |  |
| [IDMT_EditorSplitScreenItem](interfaces/IDMT_EditorSplitScreenItem.md) | 编辑器分屏属性 | [tabs](./pro-api.idmt_editorsplitscreenitem.tabs.md) 和 [children](./pro-api.idmt_editorsplitscreenitem.children.md) 并不同时存在，当 [tabs](./pro-api.idmt_editorsplitscreenitem.tabs.md) 存在时，代表不存在分屏，[children](./pro-api.idmt_editorsplitscreenitem.children.md) 将为 `undefined` |
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
| [ILIB_ClassificationIndex](interfaces/ILIB_ClassificationIndex.md) | 分类索引 | 本分类索引用于索引指定库内的分类，其中库 UUID 和库类型仅作针对于本索引的识别用途，防止将不同库内的索引互相引用从而引发错误 |
| [ILIB_DeviceAssociationItem](interfaces/ILIB_DeviceAssociationItem.md) | 器件关联符号、封装属性 |  |
| [ILIB_DeviceExtendPropertyItem](interfaces/ILIB_DeviceExtendPropertyItem.md) | 器件扩展属性 |  |
| [ILIB_DeviceItem](interfaces/ILIB_DeviceItem.md) | 器件属性 |  |
| [ILIB_DeviceSearchItem](interfaces/ILIB_DeviceSearchItem.md) | 搜索到的器件属性 |  |
| [ILIB_ExtendLibrary3DModelFunctions](interfaces/ILIB_ExtendLibrary3DModelFunctions.md) | 外部库 3D 模型方法 |  |
| [ILIB_ExtendLibraryCbbFunctions](interfaces/ILIB_ExtendLibraryCbbFunctions.md) | 外部库复用模块方法 |  |
| [ILIB_ExtendLibraryClassificationIndex](interfaces/ILIB_ExtendLibraryClassificationIndex.md) | 外部库分类索引 | 支持外部库使用名称或 UUID 作为分类的唯一 ID 索引 |
| [ILIB_ExtendLibraryDeviceFunctions](interfaces/ILIB_ExtendLibraryDeviceFunctions.md) | 外部库器件方法 |  |
| [ILIB_ExtendLibraryFootprintFunctions](interfaces/ILIB_ExtendLibraryFootprintFunctions.md) | 外部库封装方法 |  |
| [ILIB_ExtendLibraryFunctions](interfaces/ILIB_ExtendLibraryFunctions.md) | 外部库方法 |  |
| [ILIB_ExtendLibraryItem](interfaces/ILIB_ExtendLibraryItem.md) | 外部库元素 | 此处需要传递 `url` 或 `data` 字段，如若同时传入，则取 `data` 的数据，忽略 `url` 字段  如若仅传入 `url` 字段，将会对其发起请求并尝试获取其库文件  `data` 的数据可为 Blob 格式或 DataURL 格式 |
| [ILIB_ExtendLibraryItemIndex](interfaces/ILIB_ExtendLibraryItemIndex.md) | 外部库元素索引 | 支持外部库使用名称或 UUID 作为元素的唯一 ID 索引  正常情况下，希望每个库都拥有 UUID，但可能部分系统开发时不存在 UUID 字段（或可以做类似用途的字段）  此处仅传入 `name` 字段时，将把 `name` 做唯一 ID 用途，不可有重名的数据  如若传入 `uuid` 和 `name` 字段，则只有 `uuid` 不可重复 |
| [ILIB_ExtendLibrarySearchProperty](interfaces/ILIB_ExtendLibrarySearchProperty.md) | 外部库搜索参数 |  |
| [ILIB_ExtendLibrarySearchResult](interfaces/ILIB_ExtendLibrarySearchResult.md) | 外部库搜索结果 |  |
| [ILIB_ExtendLibrarySearchResultDataLine](interfaces/ILIB_ExtendLibrarySearchResultDataLine.md) | 外部库搜索结果数据行 |  |
| [ILIB_ExtendLibrarySymbolFunctions](interfaces/ILIB_ExtendLibrarySymbolFunctions.md) | 外部库符号方法 |  |
| [ILIB_ExtendLibraryUserIndex](interfaces/ILIB_ExtendLibraryUserIndex.md) | 外部库用户索引 | 支持外部库使用名称或关联的嘉立创 EDA 系统内用户 UUID 作为用户的唯一 ID 索引  如若希望关联嘉立创 EDA 的用户，请传入该用户的 UUID，将会自动读取用户的名称（如若用户存在）  如若仅希望显示用户名称，可以传入 `name` 字段 |
| [ILIB_FootprintItem](interfaces/ILIB_FootprintItem.md) | 封装属性 |  |
| [ILIB_FootprintSearchItem](interfaces/ILIB_FootprintSearchItem.md) | 搜索到的封装属性 |  |
| [ILIB_LibraryInfo](interfaces/ILIB_LibraryInfo.md) | 库信息 | 包含库的名称以及它的 UUID |
| [ILIB_LibraryItem](interfaces/ILIB_LibraryItem.md) | 库属性 |  |
| [ILIB_PanelLibraryItem](interfaces/ILIB_PanelLibraryItem.md) | 面板库属性 |  |
| [ILIB_PanelLibrarySearchItem](interfaces/ILIB_PanelLibrarySearchItem.md) | 搜索到的面板库属性 |  |
| [ILIB_SymbolItem](interfaces/ILIB_SymbolItem.md) | 符号属性 |  |
| [ILIB_SymbolSearchItem](interfaces/ILIB_SymbolSearchItem.md) | 搜索到的符号属性 |  |
| [IPCB_BomPropertiesTableColumns](interfaces/IPCB_BomPropertiesTableColumns.md) | BOM 列的属性及排序规则 |  |
| [IPCB_DifferentialPairItem](interfaces/IPCB_DifferentialPairItem.md) | 差分对属性 |  |
| [IPCB_EqualLengthNetGroupItem](interfaces/IPCB_EqualLengthNetGroupItem.md) | 等长网络组属性 |  |
| [IPCB_LayerItem](interfaces/IPCB_LayerItem.md) | 图层属性 |  |
| [IPCB_NetClassItem](interfaces/IPCB_NetClassItem.md) | 网络类属性 |  |
| [IPCB_NetInfo](interfaces/IPCB_NetInfo.md) | 网络属性 |  |
| [IPCB_PadPairGroupItem](interfaces/IPCB_PadPairGroupItem.md) | 焊盘对组属性 |  |
| [IPCB_PadPairMinWireLengthItem](interfaces/IPCB_PadPairMinWireLengthItem.md) | 焊盘对最短导线长度属性 |  |
| [IPCB_Primitive](interfaces/IPCB_Primitive.md) | PCB 图元 |  |
| [IPCB_PrimitiveAPI](interfaces/IPCB_PrimitiveAPI.md) | PCB 图元接口 |  |
| [IPCB_PrimitivePouredPourFill](interfaces/IPCB_PrimitivePouredPourFill.md) | 覆铜填充区域 |  |
| [IPCB_PrimitiveSolderMaskAndPasteMaskExpansion](interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) | 阻焊/助焊扩展 | 本参数设置包含以下三类情况：  1. 当图元为顶层/底层贴片焊盘时，允许设置对应层的阻焊/助焊扩展，其余设置不生效  2. 当图元为通孔焊盘时，允许设置顶层/底层的阻焊扩展，助焊扩展的设置不生效  3. 当图元为过孔时，允许设置顶层/底层的阻焊扩展，助焊扩展的设置不生效，如若为盲孔，则视其暴露层生效其阻焊扩展设置  助焊扩展在一般情况下仅用于钢网生产等特定用途，不了解其作用请安心地忽略其参数设置 |
| [ISCH_Primitive](interfaces/ISCH_Primitive.md) | 原理图图元 |  |
| [ISCH_PrimitiveAPI](interfaces/ISCH_PrimitiveAPI.md) | 原理图图元接口 |  |
| [ISYS_FileSystemFileList](interfaces/ISYS_FileSystemFileList.md) | 文件系统文件路径 |  |
| [ISYS_HeaderMenus](interfaces/ISYS_HeaderMenus.md) | 顶部菜单项 |  |
| [ISYS_HeaderMenuSub1MenuItem](interfaces/ISYS_HeaderMenuSub1MenuItem.md) | 顶部二级菜单项 |  |
| [ISYS_HeaderMenuSub2MenuItem](interfaces/ISYS_HeaderMenuSub2MenuItem.md) | 顶部三级菜单项 |  |
| [ISYS_HeaderMenuTopMenuItem](interfaces/ISYS_HeaderMenuTopMenuItem.md) | 顶部一级菜单项 |  |
| [ISYS_LanguageKeyValuePairs](interfaces/ISYS_LanguageKeyValuePairs.md) | 语言数据键值对 | 单一语言的数据 |
| [ISYS_LogLine](interfaces/ISYS_LogLine.md) | 日志行 |  |
| [ISYS_MessageBusTask](interfaces/ISYS_MessageBusTask.md) | 消息总线任务 |  |
| [ISYS_MultilingualLanguagesData](interfaces/ISYS_MultilingualLanguagesData.md) | 多语言数据 | 包含同一命名空间下的多种语言的数据 |
| [ISYS_ReactComponentizationDialogInterface](interfaces/ISYS_ReactComponentizationDialogInterface.md) | **_(ALPHA)_** React 组件化弹出窗口接口 |  |
| [ISYS_RightClickMenuItem](interfaces/ISYS_RightClickMenuItem.md) | 右键菜单项 |  |
| [ISYS_WindowEventListenerRemovableObject](interfaces/ISYS_WindowEventListenerRemovableObject.md) | 窗口事件监听可移除对象 | 本对象从 [addEventListener](./pro-api.sys_window.addeventlistener.md) 获取，并可用于移除创建的事件监听，仅需将其传入 [removeEventListener](./pro-api.sys_window.removeeventlistener.md) |


---

# 类型别名 (Type Aliases)

| 类型名 | 描述 | 备注 |
|--------|------|------|
| [TPCB_LayersInTheSelectable](types/TPCB_LayersInTheSelectable.md) | 可选中图层 | 此处为所有在编辑器图层菜单中可以选中并设置可见性的图层 |
| [TPCB_LayersOfComponent](types/TPCB_LayersOfComponent.md) | 器件所属层 |  |
| [TPCB_LayersOfCopper](types/TPCB_LayersOfCopper.md) | 铜箔所属层 | 此处为方便单层铜箔层设计，不包含 [EPCB\_LayerId.MULTI](./pro-api.epcb_layerid.md) |
| [TPCB_LayersOfCustom](types/TPCB_LayersOfCustom.md) | 自定义层 |  |
| [TPCB_LayersOfDimension](types/TPCB_LayersOfDimension.md) | 尺寸标注所属层 |  |
| [TPCB_LayersOfFill](types/TPCB_LayersOfFill.md) | 填充所属层 | 填充所属层为 [EPCB\_LayerId.MULTI](./pro-api.epcb_layerid.md) 时代表挖槽区域 |
| [TPCB_LayersOfImage](types/TPCB_LayersOfImage.md) | 复杂多边形图（SVG 图像、文本）所属层 |  |
| [TPCB_LayersOfInner](types/TPCB_LayersOfInner.md) | 内层 |  |
| [TPCB_LayersOfLine](types/TPCB_LayersOfLine.md) | 线所属层 |  |
| [TPCB_LayersOfObject](types/TPCB_LayersOfObject.md) | 二进制内嵌对象所属层 |  |
| [TPCB_LayersOfPad](types/TPCB_LayersOfPad.md) | 焊盘所属层 |  |
| [TPCB_LayersOfRegion](types/TPCB_LayersOfRegion.md) | 区域所属层 |  |
| [TPCB_LayerTypesOfInnerLayer](types/TPCB_LayerTypesOfInnerLayer.md) | 内层允许设置的图层类型 |  |
| [TPCB_PolygonSourceArray](types/TPCB_PolygonSourceArray.md) | 单多边形源数组 | 单多边形为首尾重合的一条不间断的线所描述的区域，如果首尾不重合将会自动重合。  单多边形的数据格式举例：  `[300, 200, 'L', 400, 200, 'ARC', 400, 220, 15, 'C', 200, 500, 400, 300, 100, 100]`  `['R', 100, 200, 300, 300, 0, 0]`  `['CIRCLE', 100, 200, 5]`  单多边形的数据由以下几种模式组合而成：  ① L 直线模式  `x1 y1 L x2 y3 x3 y3 ...`  - `{number}` `x` - 直线点的 X 坐标  - `{number}` `y` - 直线点的 Y 坐标  ② ARC/CARC 圆弧模式  `ARC` 为两点交互，`CARC` 为中心圆弧交互  `startX startY ARC arcAngle endX endY`  `startX startY CARC arcAngle endX endY`  - `{number}` `startX` - 起始 X  - `{number}` `startY` - 起始 Y  - `{number}` `arcAngle` - 圆弧角（负值为顺时针旋转；角度制）  - `{number}` `endX` - 终止 X  - `{number}` `endY` - 终止 Y  ③ C 三阶贝塞尔模式  `x1 y1 C x2 y2 x3 y3 x4 y4 ...`  - `{number}` `x` - 控制点 X  - `{number}` `y` - 控制点 Y  ④ R 矩形模式  `R x y width height rot round`  - `{number}` `x` - 左上点 X  - `{number}` `y` - 左上点 Y  - `{number}` `width` - 宽  - `{number}` `height` - 高  - `{number}` `rotation` - 旋转角度  - `{number}` `round` - 圆角半径  ⑤ CIRCLE 圆形模式  `CIRCLE cx cy radius`  - `{number}` `cx` - 中心点 X  - `{number}` `xy` - 中心点 Y  - `{number}` `radius` - 半径 |
| [TPCB_PrimitiveDimensionCoordinateSet](types/TPCB_PrimitiveDimensionCoordinateSet.md) | 尺寸标注坐标集 | 尺寸标注坐标集存在以下三种 [尺寸标注类型](./pro-api.epcb_primitivedimensiontype.md)<!-- -->：  ① 半径标注  `[x1, y1, x2, y2, x3, y3]`  - `{number}` `x1` - 圆、圆弧上的端点 X  - `{number}` `y1` - 圆、圆弧上的端点 Y  - `{number}` `x2` - 标注线尾部的端点 X  - `{number}` `y2` - 标注线尾部的端点 Y  - `{number}` `x3` - 标注文字的左下端点 X  - `{number}` `y3` - 标注文字的左下端点 Y  ② 长度标注  `[x1, y1, x2, y2, x3, y3, x4, y4]`  - `{number}` `x1` - 第一测量端点 X  - `{number}` `y1` - 第一测量端点 Y  - `{number}` `x2` - 第一标注箭头端点 X  - `{number}` `y2` - 第一标注箭头端点 Y  - `{number}` `x3` - 第二标注箭头端点 X  - `{number}` `y3` - 第二标注箭头端点 Y  - `{number}` `x4` - 第二测量端点 X  - `{number}` `y4` - 第二测量端点 Y  ③ 角度标注  `[x1, y1, x2, y2, x3, y3]`  - `{number}` `x1` - 第一边端点 X  - `{number}` `y1` - 第一边端点 Y  - `{number}` `x2` - 角度中心 X  - `{number}` `y2` - 角度中心 Y  - `{number}` `x3` - 第二边端点 X  - `{number}` `y3` - 第二边端点 Y |
| [TPCB_PrimitivePadHole](types/TPCB_PrimitivePadHole.md) | 焊盘钻孔 | 焊盘钻孔当前存在以下两种 [类型](./pro-api.epcb_primitivepadholetype.md)<!-- -->：  ① 圆形  `[EPCB_PrimitivePadHoleType.ROUND, diameter]`  - `{number}` `diameter` - 直径  ② 插槽  `[EPCB_PrimitivePadHoleType.SLOT, diameter, length]`  - `{number}` `length` - 长度，长度不能小于直径,长度小于直径的话长度的值跟随直径  - `{number}` `diameter` - 直径 |
| [TPCB_PrimitivePadShape](types/TPCB_PrimitivePadShape.md) | 焊盘外形 | 焊盘当前存在以下四种 [外形种类](./pro-api.epcb_primitivepadshapetype.md)<!-- -->：  ① 圆形  `[EPCB_PrimitivePadShapeType.ELLIPSE, width, height]`  - `{number}` `width` - 宽  - `{number}` `height` - 高  ② 矩形  `[EPCB_PrimitivePadShapeType.RECTANGLE, width, height, round]`  - `{number}` `width` - 宽  - `{number}` `height` - 高  - `{number}` `round` - 圆角半径  ③ 正多边形  `[EPCB_PrimitivePadShapeType.REGULAR_POLYGON, diameter, numberOfSides]`  - `{number}` `diameter` - 直径  - `{number}` `numberOfSides` - 边数（＞ 2）  ④ 折线复杂多边形  `[EPCB_PrimitivePadShapeType.POLYLINE_COMPLEX_POLYGON, complexPolygon]`  - `{TPCB_PolygonSourceArray \| Array<TPCB_PolygonSourceArray>}` `complexPolygon` - 复杂多边形源数组，可以使用 [IPCB\_ComplexPolygon.getSource()](./pro-api.ipcb_complexpolygon.getsource.md) 获取 |
| [TPCB_PrimitiveSpecialPadShape](types/TPCB_PrimitiveSpecialPadShape.md) | 特殊焊盘外形 | `Array<[startLayer, endLayer, TPCB_PrimitivePadShape]>`  - `{number}` `startLayer` - 起始层  - `{number}` `endLayer` - 结束层 |
| [TSYS_ShortcutKeys](types/TSYS_ShortcutKeys.md) | 快捷键按键 |  |

