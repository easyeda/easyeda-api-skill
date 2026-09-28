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
| [DMT_Board](classes/DMT_Board.md) | Document tree / Board management class |  |
| [DMT_EditorControl](classes/DMT_EditorControl.md) | Document tree / Editor control class |  |
| [DMT_Event](classes/DMT_Event.md) | Document tree / event class |  |
| [DMT_Folder](classes/DMT_Folder.md) | Document tree / Folder class |  |
| [DMT_Panel](classes/DMT_Panel.md) | Document tree / Panel management class |  |
| [DMT_Pcb](classes/DMT_Pcb.md) | Document tree / PCB management class |  |
| [DMT_Project](classes/DMT_Project.md) | Document tree / Project management class |  |
| [DMT_Schematic](classes/DMT_Schematic.md) | Document tree / Schematic management class |  |
| [DMT_SelectControl](classes/DMT_SelectControl.md) | Document tree / selection control class |  |
| [DMT_Team](classes/DMT_Team.md) | Document tree / Team class |  |
| [DMT_Workspace](classes/DMT_Workspace.md) | Document tree / Workspace class |  |
| [EDA](classes/EDA.md) | EasyEDA Pro user API interface |  |
| [IPCB_ComplexPolygon](classes/IPCB_ComplexPolygon.md) | Complex polygon |  |
| [IPCB_Polygon](classes/IPCB_Polygon.md) | Single polygon |  |
| [IPCB_PrimitiveArc](classes/IPCB_PrimitiveArc.md) | Arc line primitive |  |
| [IPCB_PrimitiveAttribute](classes/IPCB_PrimitiveAttribute.md) | Property primitive |  |
| [IPCB_PrimitiveComponent](classes/IPCB_PrimitiveComponent.md) | Device primitive |  |
| [IPCB_PrimitiveComponentPad](classes/IPCB_PrimitiveComponentPad.md) | Device pad primitive |  |
| [IPCB_PrimitiveDimension](classes/IPCB_PrimitiveDimension.md) | Dimension primitive |  |
| [IPCB_PrimitiveFill](classes/IPCB_PrimitiveFill.md) | Fill primitive |  |
| [IPCB_PrimitiveImage](classes/IPCB_PrimitiveImage.md) | Image primitive |  |
| [IPCB_PrimitiveLine](classes/IPCB_PrimitiveLine.md) | Line primitive |  |
| [IPCB_PrimitiveObject](classes/IPCB_PrimitiveObject.md) | Binary embedded object primitive |  |
| [IPCB_PrimitivePad](classes/IPCB_PrimitivePad.md) | Pad primitive |  |
| [IPCB_PrimitivePolyline](classes/IPCB_PrimitivePolyline.md) | Polyline primitive |  |
| [IPCB_PrimitivePour](classes/IPCB_PrimitivePour.md) | Copper border primitive |  |
| [IPCB_PrimitivePoured](classes/IPCB_PrimitivePoured.md) | Copper fill primitive |  |
| [IPCB_PrimitiveRegion](classes/IPCB_PrimitiveRegion.md) | Region primitive |  |
| [IPCB_PrimitiveString](classes/IPCB_PrimitiveString.md) | Text primitive |  |
| [IPCB_PrimitiveVia](classes/IPCB_PrimitiveVia.md) | Via primitive |  |
| [ISCH_PrimitiveArc](classes/ISCH_PrimitiveArc.md) | Arc primitive |  |
| [ISCH_PrimitiveAttribute](classes/ISCH_PrimitiveAttribute.md) | Property primitive |  |
| [ISCH_PrimitiveBus](classes/ISCH_PrimitiveBus.md) | Bus primitive |  |
| [ISCH_PrimitiveCbbSymbolComponent](classes/ISCH_PrimitiveCbbSymbolComponent.md) | Reuse block symbol primitive |  |
| [ISCH_PrimitiveCircle](classes/ISCH_PrimitiveCircle.md) | Circle primitive |  |
| [ISCH_PrimitiveComponent](classes/ISCH_PrimitiveComponent.md) | Device primitive |  |
| [ISCH_PrimitiveComponentPin](classes/ISCH_PrimitiveComponentPin.md) | Device pin primitive |  |
| [ISCH_PrimitiveObject](classes/ISCH_PrimitiveObject.md) | Binary embedded object primitive |  |
| [ISCH_PrimitivePin](classes/ISCH_PrimitivePin.md) | Pin primitive |  |
| [ISCH_PrimitivePolygon](classes/ISCH_PrimitivePolygon.md) | Polygon (polyline) primitive |  |
| [ISCH_PrimitiveRectangle](classes/ISCH_PrimitiveRectangle.md) | Rectangle primitive |  |
| [ISCH_PrimitiveText](classes/ISCH_PrimitiveText.md) | Text primitive |  |
| [ISCH_PrimitiveWire](classes/ISCH_PrimitiveWire.md) | Wire primitive |  |
| [LIB_3DModel](classes/LIB_3DModel.md) | Comprehensive library / 3D model class |  |
| [LIB_Cbb](classes/LIB_Cbb.md) | Comprehensive library / reuse block class |  |
| [LIB_Classification](classes/LIB_Classification.md) | Comprehensive library / library classification index class |  |
| [LIB_Device](classes/LIB_Device.md) | Comprehensive library / device class |  |
| [LIB_Footprint](classes/LIB_Footprint.md) | Comprehensive library / footprint class |  |
| [LIB_LibrariesList](classes/LIB_LibrariesList.md) | Comprehensive library / library list class |  |
| [LIB_PanelLibrary](classes/LIB_PanelLibrary.md) | Comprehensive library / panel library class |  |
| [LIB_SelectControl](classes/LIB_SelectControl.md) | Comprehensive library / selection control class |  |
| [LIB_SimulationModel](classes/LIB_SimulationModel.md) | Comprehensive library / simulation model class |  |
| [LIB_Symbol](classes/LIB_Symbol.md) | Comprehensive library / symbol class |  |
| [PCB_Document](classes/PCB_Document.md) | PCB &amp; footprint / document operation class |  |
| [PCB_Drc](classes/PCB_Drc.md) | PCB &amp; footprint / design rule check (DRC) class |  |
| [PCB_Event](classes/PCB_Event.md) | PCB &amp; footprint / event class |  |
| [PCB_ImageTool](classes/PCB_ImageTool.md) | PCB 图片工具类 |  |
| [PCB_Layer](classes/PCB_Layer.md) | PCB &amp; footprint / layer operation class |  |
| [PCB_ManufactureData](classes/PCB_ManufactureData.md) | PCB &amp; footprint / manufacture data class |  |
| [PCB_MathPolygon](classes/PCB_MathPolygon.md) | PCB &amp; footprint / polygon math class |  |
| [PCB_Net](classes/PCB_Net.md) | PCB &amp; footprint / net class |  |
| [PCB_Primitive](classes/PCB_Primitive.md) | PCB &amp; footprint / primitive class |  |
| [PCB_PrimitiveArc](classes/PCB_PrimitiveArc.md) | PCB &amp; footprint / arc line primitive class |  |
| [PCB_PrimitiveAttribute](classes/PCB_PrimitiveAttribute.md) | PCB &amp; footprint / property primitive class |  |
| [PCB_PrimitiveComponent](classes/PCB_PrimitiveComponent.md) | PCB &amp; footprint / device primitive class |  |
| [PCB_PrimitiveDimension](classes/PCB_PrimitiveDimension.md) | PCB &amp; footprint / dimension primitive class |  |
| [PCB_PrimitiveFill](classes/PCB_PrimitiveFill.md) | PCB &amp; footprint / fill primitive class |  |
| [PCB_PrimitiveImage](classes/PCB_PrimitiveImage.md) | PCB &amp; footprint / image primitive class |  |
| [PCB_PrimitiveLine](classes/PCB_PrimitiveLine.md) | PCB &amp; footprint / line primitive class |  |
| [PCB_PrimitiveObject](classes/PCB_PrimitiveObject.md) | PCB &amp; footprint / binary embedded object primitive class |  |
| [PCB_PrimitivePad](classes/PCB_PrimitivePad.md) | PCB &amp; footprint / pad primitive class |  |
| [PCB_PrimitivePolyline](classes/PCB_PrimitivePolyline.md) | PCB &amp; footprint / polyline primitive class |  |
| [PCB_PrimitivePour](classes/PCB_PrimitivePour.md) | PCB &amp; footprint / copper border primitive class |  |
| [PCB_PrimitivePoured](classes/PCB_PrimitivePoured.md) | PCB &amp; footprint / copper fill primitive class |  |
| [PCB_PrimitiveRegion](classes/PCB_PrimitiveRegion.md) | PCB &amp; footprint / forbidden region and constrained region primitive class |  |
| [PCB_PrimitiveString](classes/PCB_PrimitiveString.md) | PCB &amp; footprint / text primitive class |  |
| [PCB_PrimitiveVia](classes/PCB_PrimitiveVia.md) | PCB &amp; footprint / via primitive class |  |
| [PCB_RayTracerEngine](classes/PCB_RayTracerEngine.md) | PCB &amp; footprint / ray tracer engine class |  |
| [PCB_SelectControl](classes/PCB_SelectControl.md) | PCB &amp; footprint / selection control class |  |
| [PCB_Tool](classes/PCB_Tool.md) | PCB / 设计工具类 |  |
| [PNL_Document](classes/PNL_Document.md) | Panel / document operation class |  |
| [SCH_Document](classes/SCH_Document.md) | Schematic &amp; symbol / document operation class |  |
| [SCH_Drc](classes/SCH_Drc.md) | Schematic &amp; symbol / design rule check (DRC) class |  |
| [SCH_Event](classes/SCH_Event.md) | Schematic &amp; symbol / event class |  |
| [SCH_ManufactureData](classes/SCH_ManufactureData.md) | Schematic &amp; symbol / manufacture data class |  |
| [SCH_Net](classes/SCH_Net.md) | Schematic &amp; symbol / net class |  |
| [SCH_Netlist](classes/SCH_Netlist.md) | Schematic &amp; symbol / netlist class |  |
| [SCH_Primitive](classes/SCH_Primitive.md) | Schematic &amp; symbol / primitive class |  |
| [SCH_PrimitiveArc](classes/SCH_PrimitiveArc.md) | Schematic &amp; symbol / arc primitive class |  |
| [SCH_PrimitiveAttribute](classes/SCH_PrimitiveAttribute.md) | Schematic &amp; symbol / property primitive class |  |
| [SCH_PrimitiveBus](classes/SCH_PrimitiveBus.md) | Schematic &amp; symbol / bus primitive class |  |
| [SCH_PrimitiveCircle](classes/SCH_PrimitiveCircle.md) | Schematic &amp; symbol / circle primitive class |  |
| [SCH_PrimitiveComponent](classes/SCH_PrimitiveComponent.md) | Schematic &amp; symbol / device primitive class |  |
| [SCH_PrimitiveObject](classes/SCH_PrimitiveObject.md) | Schematic &amp; symbol / binary embedded object primitive class |  |
| [SCH_PrimitivePin](classes/SCH_PrimitivePin.md) | Schematic &amp; symbol / pin primitive class |  |
| [SCH_PrimitivePolygon](classes/SCH_PrimitivePolygon.md) | Schematic &amp; symbol / polygon (polyline) primitive class |  |
| [SCH_PrimitiveRectangle](classes/SCH_PrimitiveRectangle.md) | Schematic &amp; symbol / rectangle primitive class |  |
| [SCH_PrimitiveText](classes/SCH_PrimitiveText.md) | Schematic &amp; symbol / text primitive class |  |
| [SCH_PrimitiveWire](classes/SCH_PrimitiveWire.md) | Schematic &amp; symbol / wire primitive class |  |
| [SCH_SelectControl](classes/SCH_SelectControl.md) | Schematic &amp; symbol / selection control class |  |
| [SCH_SimulationEngine](classes/SCH_SimulationEngine.md) | Schematic &amp; symbol / simulation engine class |  |
| [SCH_Utils](classes/SCH_Utils.md) | Schematic &amp; symbol / utility class |  |
| [SYS_ClientUrl](classes/SYS_ClientUrl.md) | System / external request class |  |
| [SYS_Dialog](classes/SYS_Dialog.md) | System / dialog class |  |
| [SYS_Environment](classes/SYS_Environment.md) | System / runtime environment class |  |
| [SYS_ExternalApi](classes/SYS_ExternalApi.md) | 外部接口注入管理类 |  |
| [SYS_FileManager](classes/SYS_FileManager.md) | System / file manager class |  |
| [SYS_FileSystem](classes/SYS_FileSystem.md) | System / file system interaction class |  |
| [SYS_FontManager](classes/SYS_FontManager.md) | System / font manager class |  |
| [SYS_FormatConversion](classes/SYS_FormatConversion.md) | System / format conversion (Chameleon) class |  |
| [SYS_HeaderMenu](classes/SYS_HeaderMenu.md) | System / header menu class |  |
| [SYS_Help](classes/SYS_Help.md) | Help 渐进式披露类 |  |
| [SYS_I18n](classes/SYS_I18n.md) | System / multilingual class |  |
| [SYS_IFrame](classes/SYS_IFrame.md) | System / iframe window class |  |
| [SYS_LoadingAndProgressBar](classes/SYS_LoadingAndProgressBar.md) | System / loading and progress bar class |  |
| [SYS_Log](classes/SYS_Log.md) | System / log class |  |
| [SYS_Math](classes/SYS_Math.md) | System / math class |  |
| [SYS_Message](classes/SYS_Message.md) | System / message notification class |  |
| [SYS_MessageBox](classes/SYS_MessageBox.md) | System / message box class |  |
| [SYS_MessageBus](classes/SYS_MessageBus.md) | System / message bus class |  |
| [SYS_PanelControl](classes/SYS_PanelControl.md) | System / panel control class |  |
| [SYS_RightClickMenu](classes/SYS_RightClickMenu.md) | System / right-click menu class |  |
| [SYS_Setting](classes/SYS_Setting.md) | System / settings class |  |
| [SYS_ShortcutKey](classes/SYS_ShortcutKey.md) | System / shortcut key class |  |
| [SYS_Storage](classes/SYS_Storage.md) | System / storage class |  |
| [SYS_Timer](classes/SYS_Timer.md) | System / timer class |  |
| [SYS_ToastMessage](classes/SYS_ToastMessage.md) | System / toast message class |  |
| [SYS_Tool](classes/SYS_Tool.md) | System / tool class |  |
| [SYS_Unit](classes/SYS_Unit.md) | System / unit class |  |
| [SYS_WebSocket](classes/SYS_WebSocket.md) | System / WebSocket class |  |
| [SYS_Window](classes/SYS_Window.md) | System / window class |  |


---

# 枚举 (Enumerations)

| 枚举名 | 描述 | 备注 |
|--------|------|------|
| [EDMT_EditorDocumentType](enums/EDMT_EditorDocumentType.md) | Editor document type |  |
| [EDMT_EditorSplitScreenDirection](enums/EDMT_EditorSplitScreenDirection.md) | Editor split screen direction |  |
| [EDMT_EditorTabEventType](enums/EDMT_EditorTabEventType.md) | Editor tab event type |  |
| [EDMT_IndicatorMarkerType](enums/EDMT_IndicatorMarkerType.md) | Indicator marker type |  |
| [EDMT_ItemType](enums/EDMT_ItemType.md) | Document tree project type |  |
| [EDMT_ProjectCollaborationMode](enums/EDMT_ProjectCollaborationMode.md) | Project collaboration mode |  |
| [EDMT_ProjectFileFormat](enums/EDMT_ProjectFileFormat.md) | 工程文件格式 |  |
| [ELIB_DeviceJlcLibraryCategory](enums/ELIB_DeviceJlcLibraryCategory.md) | EasyEDA SMT library category |  |
| [ELIB_LibraryType](enums/ELIB_LibraryType.md) | Comprehensive library library type |  |
| [ELIB_PreviewType](enums/ELIB_PreviewType.md) | Preview view type |  |
| [ELIB_SimulationModelType](enums/ELIB_SimulationModelType.md) | Simulation model type |  |
| [ELIB_SymbolType](enums/ELIB_SymbolType.md) | Symbol type |  |
| [EPCB_AutoRoutingCornerStyle](enums/EPCB_AutoRoutingCornerStyle.md) | Auto routing corner style |  |
| [EPCB_AutoRoutingExistingPrimitiveMode](enums/EPCB_AutoRoutingExistingPrimitiveMode.md) | How auto routing handles existing wires/vias |  |
| [EPCB_AutoRoutingOptimization](enums/EPCB_AutoRoutingOptimization.md) | Auto routing optimization priority |  |
| [EPCB_DocumentCanvasUpdateCalculationActiveStatus](enums/EPCB_DocumentCanvasUpdateCalculationActiveStatus.md) | 画布更新计算功能状态 |  |
| [EPCB_DocumentRatlineCalculatingActiveStatus](enums/EPCB_DocumentRatlineCalculatingActiveStatus.md) | Document ratline calculation function status |  |
| [EPCB_InactiveLayerDisplayMode](enums/EPCB_InactiveLayerDisplayMode.md) | Inactive layer display mode |  |
| [EPCB_LayerColorConfiguration](enums/EPCB_LayerColorConfiguration.md) | Layer color configuration |  |
| [EPCB_LayerId](enums/EPCB_LayerId.md) | Layer ID |  |
| [EPCB_LayerStatus](enums/EPCB_LayerStatus.md) | Layer status |  |
| [EPCB_LayerType](enums/EPCB_LayerType.md) | Layer type |  |
| [EPCB_MouseEventType](enums/EPCB_MouseEventType.md) | Mouse event type |  |
| [EPCB_NetEventType](enums/EPCB_NetEventType.md) | Net event type |  |
| [EPCB_PcbPlateType](enums/EPCB_PcbPlateType.md) | PCB plate type |  |
| [EPCB_PdfOutputMethod](enums/EPCB_PdfOutputMethod.md) | PDF output method |  |
| [EPCB_PrimitiveArcInteractiveMode](enums/EPCB_PrimitiveArcInteractiveMode.md) | Arc interaction mode |  |
| [EPCB_PrimitiveDimensionType](enums/EPCB_PrimitiveDimensionType.md) | Dimension type |  |
| [EPCB_PrimitiveEventType](enums/EPCB_PrimitiveEventType.md) | Primitive event type |  |
| [EPCB_PrimitiveFillMode](enums/EPCB_PrimitiveFillMode.md) | Fill primitive fill mode |  |
| [EPCB_PrimitivePadHeatWeldingConnectionMethod](enums/EPCB_PrimitivePadHeatWeldingConnectionMethod.md) | Pad heat welding connection method |  |
| [EPCB_PrimitivePadHoleType](enums/EPCB_PrimitivePadHoleType.md) | Pad drilling type |  |
| [EPCB_PrimitivePadShapeType](enums/EPCB_PrimitivePadShapeType.md) | Pad shape type |  |
| [EPCB_PrimitivePadType](enums/EPCB_PrimitivePadType.md) | Pad type |  |
| [EPCB_PrimitivePourFillMethod](enums/EPCB_PrimitivePourFillMethod.md) | Copper fill method |  |
| [EPCB_PrimitiveRegionRuleType](enums/EPCB_PrimitiveRegionRuleType.md) | Region primitive region rule type |  |
| [EPCB_PrimitiveStringAlignMode](enums/EPCB_PrimitiveStringAlignMode.md) | Text alignment mode |  |
| [EPCB_PrimitiveType](enums/EPCB_PrimitiveType.md) | Primitive type |  |
| [EPCB_PrimitiveViaType](enums/EPCB_PrimitiveViaType.md) | Via type |  |
| [ESCH_DynamicSimulationEnginePullEventType](enums/ESCH_DynamicSimulationEnginePullEventType.md) | Dynamic simulation engine pull event type |  |
| [ESCH_DynamicSimulationEnginePushEventType](enums/ESCH_DynamicSimulationEnginePushEventType.md) | Dynamic simulation engine push event type |  |
| [ESCH_ExportDocumentFileType](enums/ESCH_ExportDocumentFileType.md) | Export document file type |  |
| [ESCH_MouseEventType](enums/ESCH_MouseEventType.md) | Mouse event type |  |
| [ESCH_PrimitiveComponentType](enums/ESCH_PrimitiveComponentType.md) | Device type |  |
| [ESCH_PrimitiveEventType](enums/ESCH_PrimitiveEventType.md) | Primitive event type |  |
| [ESCH_PrimitiveFillStyle](enums/ESCH_PrimitiveFillStyle.md) | Fill style |  |
| [ESCH_PrimitiveLineType](enums/ESCH_PrimitiveLineType.md) | Line type |  |
| [ESCH_PrimitivePinShape](enums/ESCH_PrimitivePinShape.md) | Pin shape |  |
| [ESCH_PrimitivePinType](enums/ESCH_PrimitivePinType.md) | Pin type |  |
| [ESCH_PrimitiveTextAlignMode](enums/ESCH_PrimitiveTextAlignMode.md) | Text alignment mode |  |
| [ESCH_PrimitiveType](enums/ESCH_PrimitiveType.md) | Primitive type |  |
| [ESCH_SimulationNetlistType](enums/ESCH_SimulationNetlistType.md) | Simulation netlist type |  |
| [ESCH_SpiceSimulationEnginePullEventType](enums/ESCH_SpiceSimulationEnginePullEventType.md) | Spice simulation engine pull event type |  |
| [ESCH_SpiceSimulationEnginePushEventType](enums/ESCH_SpiceSimulationEnginePushEventType.md) | Spice simulation engine push event type |  |
| [ESYS_BottomPanelTab](enums/ESYS_BottomPanelTab.md) | Bottom panel tab |  |
| [ESYS_HeaderMenuEnvironment](enums/ESYS_HeaderMenuEnvironment.md) | Header menu environment |  |
| [ESYS_ImportProjectBoardOutlineSource](enums/ESYS_ImportProjectBoardOutlineSource.md) | Import project board outline source |  |
| [ESYS_ImportProjectImportOption](enums/ESYS_ImportProjectImportOption.md) | Import project import option |  |
| [ESYS_ImportProjectSchematicObjectStyle](enums/ESYS_ImportProjectSchematicObjectStyle.md) | Import project schematic primitive style |  |
| [ESYS_ImportProjectViaSolderMaskExpansion](enums/ESYS_ImportProjectViaSolderMaskExpansion.md) | Import project via solder mask extension |  |
| [ESYS_LeftPanelTab](enums/ESYS_LeftPanelTab.md) | Left panel tab |  |
| [ESYS_LogType](enums/ESYS_LogType.md) | Log type |  |
| [ESYS_NetlistType](enums/ESYS_NetlistType.md) | Netlist type |  |
| [ESYS_PanelPosition](enums/ESYS_PanelPosition.md) | 面板标签页位置 |  |
| [ESYS_PanelTab](enums/ESYS_PanelTab.md) | 面板标签页（不区分标签页所处面板） |  |
| [ESYS_RightPanelTab](enums/ESYS_RightPanelTab.md) | Right panel tab |  |
| [ESYS_ShortcutKeyEffectiveEditorRange](enums/ESYS_ShortcutKeyEffectiveEditorRange.md) | 快捷键生效页面范围 |  |
| [ESYS_ShortcutKeyEffectiveEditorScene](enums/ESYS_ShortcutKeyEffectiveEditorScene.md) | Effective scene range of the shortcut key |  |
| [ESYS_StartPageQuickStartItem](enums/ESYS_StartPageQuickStartItem.md) | Start page quick start item |  |
| [ESYS_Theme](enums/ESYS_Theme.md) | Theme |  |
| [ESYS_ToastMessageType](enums/ESYS_ToastMessageType.md) | Toast message type |  |
| [ESYS_Unit](enums/ESYS_Unit.md) | Unit |  |
| [ESYS_WindowEventType](enums/ESYS_WindowEventType.md) | Window event type |  |
| [ESYS_WindowOpenTarget](enums/ESYS_WindowOpenTarget.md) | Open window context target |  |
| [NetportDeviceName](enums/NetportDeviceName.md) | 网络端口符号对应的器件名称 |  |
| [SchToolBarDeviceName](enums/SchToolBarDeviceName.md) | 悬浮框特殊符号对应的器件名称 |  |


---

# 接口 (Interfaces)

| 接口名 | 描述 | 备注 |
|--------|------|------|
| [BoardProps](interfaces/BoardProps.md) | 分组面板：带标题的可折叠/分组容器 |  |
| [BorderConfig](interfaces/BorderConfig.md) | 边框配置 |  |
| [ButtonProps](interfaces/ButtonProps.md) | 按钮组件：可点击触发的操作按钮 |  |
| [CellClickInfo](interfaces/CellClickInfo.md) | 单元格点击信息 |  |
| [CellCoord](interfaces/CellCoord.md) | 单元格坐标（rowKey + colKey 定位一个单元格） |  |
| [CheckboxEditConfig](interfaces/CheckboxEditConfig.md) |  |  |
| [CheckBoxProps](interfaces/CheckBoxProps.md) | 复选框组件：可勾选的状态控件 |  |
| [CheckChangeDetail](interfaces/CheckChangeDetail.md) | 勾选变更详情 |  |
| [ClipboardCellData](interfaces/ClipboardCellData.md) | 剪贴板单元格数据 |  |
| [ClipboardConfig](interfaces/ClipboardConfig.md) | 剪贴板配置 |  |
| [ColorPickerProps](interfaces/ColorPickerProps.md) | 颜色拾取组件：复用 Input color 类型，点击弹出内置固定色板，支持预览/应用/手输/清除/默认/关闭 |  |
| [ColumnDef](interfaces/ColumnDef.md) | 列定义 |  |
| [ColumnEditTrigger](interfaces/ColumnEditTrigger.md) | 编辑触发方式 |  |
| [ColumnGroupDef](interfaces/ColumnGroupDef.md) | 列分组：多级表头 |  |
| [ColumnResizeConfig](interfaces/ColumnResizeConfig.md) | 列宽拖拽配置 |  |
| [ComponentPropsMap](interfaces/ComponentPropsMap.md) | Component name → Props type mapping, serving as the sole source of the `createComponent` generic constraint |  |
| [CustomHeaderConfig](interfaces/CustomHeaderConfig.md) | 自定义表头配置（列可见性管理） |  |
| [DialogProps](interfaces/DialogProps.md) | 对话框组件：带标题栏、可拖拽缩放的组合弹窗 |  |
| [DragSortConfig](interfaces/DragSortConfig.md) | 拖拽排序配置 |  |
| [EditingConfig](interfaces/EditingConfig.md) | 编辑配置 |  |
| [FilteringConfig](interfaces/FilteringConfig.md) | 筛选配置 |  |
| [FixedColumnConfig](interfaces/FixedColumnConfig.md) | 固定列配置（也可通过 ColumnDef.fixed 逐列声明） |  |
| [FlexItemProps](interfaces/FlexItemProps.md) | Flex 子项：Flex 布局中的单个子元素 |  |
| [FlexProps](interfaces/FlexProps.md) | 布局容器：灵活的 Flex 布局容器 |  |
| [GridItemProps](interfaces/GridItemProps.md) | Grid 子项：网格中的单个子元素 |  |
| [GridProps](interfaces/GridProps.md) | 布局容器：固定列数的网格布局容器 |  |
| [IconProps](interfaces/IconProps.md) | 图标配置：通过 URL 或 CSS class 指定图标 |  |
| [IDesignPortal](interfaces/IDesignPortal.md) | Component tree operation contract. |  |
| [IDMT_BoardItem](interfaces/IDMT_BoardItem.md) | Board property |  |
| [IDMT_BriefProjectItem](interfaces/IDMT_BriefProjectItem.md) | Brief project properties |  |
| [IDMT_EditorDocumentItem](interfaces/IDMT_EditorDocumentItem.md) | Editor document object |  |
| [IDMT_EditorSplitScreenItem](interfaces/IDMT_EditorSplitScreenItem.md) | Editor split screen property |  |
| [IDMT_EditorTabItem](interfaces/IDMT_EditorTabItem.md) | Editor tab |  |
| [IDMT_FolderItem](interfaces/IDMT_FolderItem.md) | Folder property |  |
| [IDMT_IndicatorMarkerShape](interfaces/IDMT_IndicatorMarkerShape.md) | Indicator marker shape |  |
| [IDMT_PanelItem](interfaces/IDMT_PanelItem.md) | Panel property |  |
| [IDMT_PcbItem](interfaces/IDMT_PcbItem.md) | PCB property |  |
| [IDMT_ProjectItem](interfaces/IDMT_ProjectItem.md) | Project property |  |
| [IDMT_SchematicItem](interfaces/IDMT_SchematicItem.md) | Schematic property |  |
| [IDMT_SchematicPageItem](interfaces/IDMT_SchematicPageItem.md) | Schematic sheet property |  |
| [IDMT_TeamItem](interfaces/IDMT_TeamItem.md) | Team properties |  |
| [IDMT_WorkspaceItem](interfaces/IDMT_WorkspaceItem.md) | Workspace properties |  |
| [ILIB_3DModelItem](interfaces/ILIB_3DModelItem.md) | 3D model property |  |
| [ILIB_3DModelSearchItem](interfaces/ILIB_3DModelSearchItem.md) | Searched 3D model properties |  |
| [ILIB_CbbItem](interfaces/ILIB_CbbItem.md) | Reuse block property |  |
| [ILIB_CbbSearchItem](interfaces/ILIB_CbbSearchItem.md) | Searched reuse block properties |  |
| [ILIB_ClassificationIndex](interfaces/ILIB_ClassificationIndex.md) | Classification index |  |
| [ILIB_ClassificationNode](interfaces/ILIB_ClassificationNode.md) | **_(ALPHA)_** 分类树节点（分类无 UUID，以名称为唯一标识） |  |
| [ILIB_DeviceAssociationItem](interfaces/ILIB_DeviceAssociationItem.md) | Device associated symbol, footprint property |  |
| [ILIB_DeviceExtendPropertyItem](interfaces/ILIB_DeviceExtendPropertyItem.md) | Device extension property |  |
| [ILIB_DeviceItem](interfaces/ILIB_DeviceItem.md) | Device property |  |
| [ILIB_DevicePropertiesForSearch](interfaces/ILIB_DevicePropertiesForSearch.md) | Device parameters that can be used for precise search |  |
| [ILIB_DeviceSearchItem](interfaces/ILIB_DeviceSearchItem.md) | Searched device properties |  |
| [ILIB_ExtendLibrary3DModelFunctions](interfaces/ILIB_ExtendLibrary3DModelFunctions.md) | External library 3D model functions |  |
| [ILIB_ExtendLibraryCbbFunctions](interfaces/ILIB_ExtendLibraryCbbFunctions.md) | External library reuse block functions |  |
| [ILIB_ExtendLibraryClassificationIndex](interfaces/ILIB_ExtendLibraryClassificationIndex.md) | External library classification index |  |
| [ILIB_ExtendLibraryDeviceFunctions](interfaces/ILIB_ExtendLibraryDeviceFunctions.md) | External library device functions |  |
| [ILIB_ExtendLibraryFootprintFunctions](interfaces/ILIB_ExtendLibraryFootprintFunctions.md) | External library footprint functions |  |
| [ILIB_ExtendLibraryFunctions](interfaces/ILIB_ExtendLibraryFunctions.md) | External library functions |  |
| [ILIB_ExtendLibraryItem](interfaces/ILIB_ExtendLibraryItem.md) | External library item |  |
| [ILIB_ExtendLibraryItemIndex](interfaces/ILIB_ExtendLibraryItemIndex.md) | External library item index |  |
| [ILIB_ExtendLibrarySearchProperty](interfaces/ILIB_ExtendLibrarySearchProperty.md) | External library search property |  |
| [ILIB_ExtendLibrarySearchResult](interfaces/ILIB_ExtendLibrarySearchResult.md) | External library search result |  |
| [ILIB_ExtendLibrarySearchResultDataLine](interfaces/ILIB_ExtendLibrarySearchResultDataLine.md) | External library search result data line |  |
| [ILIB_ExtendLibrarySymbolFunctions](interfaces/ILIB_ExtendLibrarySymbolFunctions.md) | External library symbol functions |  |
| [ILIB_ExtendLibraryUserIndex](interfaces/ILIB_ExtendLibraryUserIndex.md) | External library user index |  |
| [ILIB_FootprintItem](interfaces/ILIB_FootprintItem.md) | Footprint property |  |
| [ILIB_FootprintPropertiesForSearch](interfaces/ILIB_FootprintPropertiesForSearch.md) | Footprint parameters that can be used for precise search |  |
| [ILIB_FootprintSearchItem](interfaces/ILIB_FootprintSearchItem.md) | Searched footprint properties |  |
| [ILIB_LibraryInfo](interfaces/ILIB_LibraryInfo.md) | Library information |  |
| [ILIB_LibraryItem](interfaces/ILIB_LibraryItem.md) | Library property |  |
| [ILIB_PanelLibraryItem](interfaces/ILIB_PanelLibraryItem.md) | Panel library property |  |
| [ILIB_PanelLibrarySearchItem](interfaces/ILIB_PanelLibrarySearchItem.md) | Searched panel library properties |  |
| [ILIB_SimulationModelItem](interfaces/ILIB_SimulationModelItem.md) | Simulation model properties |  |
| [ILIB_SimulationModelSearchItem](interfaces/ILIB_SimulationModelSearchItem.md) | Searched simulation model properties |  |
| [ILIB_SymbolItem](interfaces/ILIB_SymbolItem.md) | Symbol property |  |
| [ILIB_SymbolPropertiesForSearch](interfaces/ILIB_SymbolPropertiesForSearch.md) | Symbol parameters that can be used for precise search |  |
| [ILIB_SymbolSearchItem](interfaces/ILIB_SymbolSearchItem.md) | Searched symbol properties |  |
| [ImageProps](interfaces/ImageProps.md) | 图片组件：展示单张图片 |  |
| [InputEditConfig](interfaces/InputEditConfig.md) |  |  |
| [InputProps](interfaces/InputProps.md) | 输入框组件：支持下拉、搜索、清除、前后缀等多种形态 |  |
| [IPCB_AutoLayoutResult](interfaces/IPCB_AutoLayoutResult.md) | Auto layout result |  |
| [IPCB_AutoRoutingProps](interfaces/IPCB_AutoRoutingProps.md) | Auto routing props |  |
| [IPCB_AutoRoutingResult](interfaces/IPCB_AutoRoutingResult.md) | Auto routing result |  |
| [IPCB_BomPropertiesTableColumns](interfaces/IPCB_BomPropertiesTableColumns.md) | BOM column properties and sorting rules |  |
| [IPCB_DifferentialPairItem](interfaces/IPCB_DifferentialPairItem.md) | Differential pair properties |  |
| [IPCB_DiscretizedPoint](interfaces/IPCB_DiscretizedPoint.md) | Discretized point |  |
| [IPCB_DiscretizeOptions](interfaces/IPCB_DiscretizeOptions.md) | Discretization options |  |
| [IPCB_EqualLengthNetGroupItem](interfaces/IPCB_EqualLengthNetGroupItem.md) | Equal-length net group properties |  |
| [IPCB_LayerItem](interfaces/IPCB_LayerItem.md) | Layer properties |  |
| [IPCB_NetClassItem](interfaces/IPCB_NetClassItem.md) | Net class property |  |
| [IPCB_NetInfo](interfaces/IPCB_NetInfo.md) | Net property |  |
| [IPCB_PadPairGroupItem](interfaces/IPCB_PadPairGroupItem.md) | Pad pair group properties |  |
| [IPCB_PadPairMinWireLengthItem](interfaces/IPCB_PadPairMinWireLengthItem.md) | Pad pair minimum wire length properties |  |
| [IPCB_PhysicalStackingConfiguration](interfaces/IPCB_PhysicalStackingConfiguration.md) | 物理叠层配置 |  |
| [IPCB_Primitive](interfaces/IPCB_Primitive.md) | PCB primitive |  |
| [IPCB_PrimitiveAPI](interfaces/IPCB_PrimitiveAPI.md) | PCB primitive API |  |
| [IPCB_PrimitivePadHeatWelding](interfaces/IPCB_PrimitivePadHeatWelding.md) | Pad thermal relief optimization parameters |  |
| [IPCB_PrimitivePouredPourFill](interfaces/IPCB_PrimitivePouredPourFill.md) | Copper fill region |  |
| [IPCB_PrimitiveSolderMaskAndPasteMaskExpansion](interfaces/IPCB_PrimitiveSolderMaskAndPasteMaskExpansion.md) | Solder mask / paste mask expansion |  |
| [IPCB_SubstratePhysicalProperties](interfaces/IPCB_SubstratePhysicalProperties.md) | 基板物理属性 |  |
| [IRawNet](interfaces/IRawNet.md) | 原始数据 - net |  |
| [IRawPureSchematic](interfaces/IRawPureSchematic.md) | 原始数据 - pureSchematic |  |
| [IRawSchematic](interfaces/IRawSchematic.md) | 原始数据 - schematic |  |
| [IRawWire](interfaces/IRawWire.md) | 原始数据 - wire |  |
| [ISCH_DrcError](interfaces/ISCH_DrcError.md) | DRC 错误条目 |  |
| [ISCH_DrcErrorPrimitive](interfaces/ISCH_DrcErrorPrimitive.md) | DRC 错误涉及的图元 |  |
| [ISCH_ExportPngResolution](interfaces/ISCH_ExportPngResolution.md) | 原理图导出图片分辨率 |  |
| [ISCH_NetInfo](interfaces/ISCH_NetInfo.md) | Net property |  |
| [ISCH_Primitive](interfaces/ISCH_Primitive.md) | Schematic primitive |  |
| [ISCH_PrimitiveAPI](interfaces/ISCH_PrimitiveAPI.md) | Schematic primitive API |  |
| [ISCH_ProjectNetInfo](interfaces/ISCH_ProjectNetInfo.md) | Project net property |  |
| [ISCH_WireInfo](interfaces/ISCH_WireInfo.md) | Wire property |  |
| [ISYS_ComparisonResponse](interfaces/ISYS_ComparisonResponse.md) | 对比响应返回结果 |  |
| [ISYS_ExtensionExternalApiIndex](interfaces/ISYS_ExtensionExternalApiIndex.md) | external API 扁平索引（按命名空间分组） |  |
| [ISYS_ExtensionRegisteredExternalApis](interfaces/ISYS_ExtensionRegisteredExternalApis.md) | 扩展注入的上层接口注册表（按扩展分组） |  |
| [ISYS_ExternalApiHelp](interfaces/ISYS_ExternalApiHelp.md) | 扩展注入的上层接口 Help 元数据 |  |
| [ISYS_ExternalApiRegistration](interfaces/ISYS_ExternalApiRegistration.md) | 扩展注入的上层接口注册条目 |  |
| [ISYS_FileSystemFileList](interfaces/ISYS_FileSystemFileList.md) | File system file path |  |
| [ISYS_HeaderMenus](interfaces/ISYS_HeaderMenus.md) | Header menu item |  |
| [ISYS_HeaderMenuSub1MenuItem](interfaces/ISYS_HeaderMenuSub1MenuItem.md) | Top-level secondary menu item |  |
| [ISYS_HeaderMenuSub2MenuItem](interfaces/ISYS_HeaderMenuSub2MenuItem.md) | Top-level tertiary menu item |  |
| [ISYS_HeaderMenuTopMenuItem](interfaces/ISYS_HeaderMenuTopMenuItem.md) | Top-level primary menu item |  |
| [ISYS_HelpClassSummary](interfaces/ISYS_HelpClassSummary.md) | 由 help 查询返回的类摘要 |  |
| [ISYS_HelpData](interfaces/ISYS_HelpData.md) | lc-build 生成的 API jsonSchema（d.ts 的 JSON 形态） |  |
| [ISYS_HelpMethodDetail](interfaces/ISYS_HelpMethodDetail.md) | Help 查询返回的方法详情 |  |
| [ISYS_LogLine](interfaces/ISYS_LogLine.md) | Log line |  |
| [ISYS_MathBBox](interfaces/ISYS_MathBBox.md) | BBox (minimum bounding rectangle) |  |
| [ISYS_MathPoint](interfaces/ISYS_MathPoint.md) | Discrete points |  |
| [ISYS_MathPolygonWithHoles](interfaces/ISYS_MathPolygonWithHoles.md) | Polygon with holes |  |
| [ISYS_MessageBusTask](interfaces/ISYS_MessageBusTask.md) | Message bus task |  |
| [ISYS_MultilingualLanguagesData](interfaces/ISYS_MultilingualLanguagesData.md) | Multilingual data |  |
| [ISYS_RightClickMenuItem](interfaces/ISYS_RightClickMenuItem.md) | Right-click menu item |  |
| [ISYS_ShortcutKeyData](interfaces/ISYS_ShortcutKeyData.md) | 快捷键数据 |  |
| [ISYS_ShortcutKeyDataWithCallFn](interfaces/ISYS_ShortcutKeyDataWithCallFn.md) | 包含 CallFn 的快捷键数据 |  |
| [ISYS_ShortcutKeyDataWithUserDefinedShortcutKey](interfaces/ISYS_ShortcutKeyDataWithUserDefinedShortcutKey.md) | 包含 userDefinedShortcutKey 的快捷键数据 |  |
| [ISYS_WindowEventListenerRemovableObject](interfaces/ISYS_WindowEventListenerRemovableObject.md) | Window event listener can remove object |  |
| [KeyboardConfig](interfaces/KeyboardConfig.md) | 键盘导航配置 |  |
| [ListChildren](interfaces/ListChildren.md) | 列表项：支持多级嵌套分组 |  |
| [ListProps](interfaces/ListProps.md) | 列表组件：支持多级嵌套、图标、展开的列表 |  |
| [ModalProps](interfaces/ModalProps.md) | 模态弹窗：可拖拽、可调整大小的顶层弹窗 |  |
| [NumberEditConfig](interfaces/NumberEditConfig.md) |  |  |
| [RadioGroupProps](interfaces/RadioGroupProps.md) | 单选组组件：一组互斥的单选选项 |  |
| [RadioItem](interfaces/RadioItem.md) | 单选组中的单个选项 |  |
| [RichTableProps](interfaces/RichTableProps.md) | RichTable 组件属性 |  |
| [RowMetaConfig](interfaces/RowMetaConfig.md) | 行元数据配置，独立于业务数据（挂在 row.rowMeta 上） |  |
| [ScrollerProps](interfaces/ScrollerProps.md) | 滚动组件：虚拟滚动列表，仅渲染可见行 |  |
| [SelectEditConfig](interfaces/SelectEditConfig.md) |  |  |
| [SelectionConfig](interfaces/SelectionConfig.md) | 选择配置 |  |
| [SelectListItem](interfaces/SelectListItem.md) | 下拉选项：支持多级嵌套分组 |  |
| [SelectOption](interfaces/SelectOption.md) | 下拉选项 |  |
| [SelectProps](interfaces/SelectProps.md) | 下拉选择器：基于输入框的下拉选择控件 |  |
| [SliderProps](interfaces/SliderProps.md) | 滑杆组件：基于浏览器原生 range 输入 |  |
| [SlotProps](interfaces/SlotProps.md) | 插槽组件：为父组件提供具名内容占位 |  |
| [SortingConfig](interfaces/SortingConfig.md) | 排序配置 |  |
| [SortState](interfaces/SortState.md) | 排序状态 |  |
| [StyleProps](interfaces/StyleProps.md) | 通用样式属性：可被布局容器等组件继承的样式集合 |  |
| [TextareaEditConfig](interfaces/TextareaEditConfig.md) |  |  |
| [TextAreaProps](interfaces/TextAreaProps.md) | 多行文本输入组件 |  |
| [TextProps](interfaces/TextProps.md) | 文本组件：静态文本展示 |  |
| [ValidationRule](interfaces/ValidationRule.md) | 校验规则（声明式，纯数据，可序列化） |  |
| [VirtualScrollConfig](interfaces/VirtualScrollConfig.md) | 虚拟滚动配置 |  |


---

# 类型别名 (Type Aliases)

| 类型名 | 描述 | 备注 |
|--------|------|------|
| [Align](types/Align.md) | 对齐方式 |  |
| [CellContentType](types/CellContentType.md) | 剪贴板单元格内容类型（决定粘贴时的解析策略） |  |
| [ColumnDefOrGroup](types/ColumnDefOrGroup.md) | 列定义（支持普通列和列分组） |  |
| [ColumnEditConfig](types/ColumnEditConfig.md) | 五种编辑器类型配置 |  |
| [ColumnType](types/ColumnType.md) | 列数据类型，默认 'text'。决定默认排序类型（sortType）和筛选匹配模式（filterMatchMode） |  |
| [DataChangeType](types/DataChangeType.md) | 数据变更类型 |  |
| [FilterMatchMode](types/FilterMatchMode.md) | 筛选匹配模式 |  |
| [RichTableRow](types/RichTableRow.md) | 行数据：业务数据 + 行元数据（rowMeta） |  |
| [Serializable](types/Serializable.md) |  |  |
| [SerializablePrimitive](types/SerializablePrimitive.md) | 可序列化纯数据（可跨 BroadcastChannel 结构化克隆）。 编译期拒绝函数 / Date / React 元素等不可序列化值——slotProps 等跨广播字段必须用它。 |  |
| [SortOrder](types/SortOrder.md) | 排序方向 |  |
| [TPCB_LayersInTheSelectable](types/TPCB_LayersInTheSelectable.md) | Selectable layers |  |
| [TPCB_LayersOfComponent](types/TPCB_LayersOfComponent.md) | Layers of the device |  |
| [TPCB_LayersOfCopper](types/TPCB_LayersOfCopper.md) | Layers of copper |  |
| [TPCB_LayersOfCustom](types/TPCB_LayersOfCustom.md) | Custom layers |  |
| [TPCB_LayersOfDimension](types/TPCB_LayersOfDimension.md) | Layers of the dimension |  |
| [TPCB_LayersOfFill](types/TPCB_LayersOfFill.md) | Layers of the fill |  |
| [TPCB_LayersOfImage](types/TPCB_LayersOfImage.md) | Layers of complex polygon figures (SVG images, text) |  |
| [TPCB_LayersOfInner](types/TPCB_LayersOfInner.md) | Inner layers |  |
| [TPCB_LayersOfLine](types/TPCB_LayersOfLine.md) | Layers of the line |  |
| [TPCB_LayersOfObject](types/TPCB_LayersOfObject.md) | Layers of binary embedded objects |  |
| [TPCB_LayersOfPad](types/TPCB_LayersOfPad.md) | Layers of the pad |  |
| [TPCB_LayersOfRegion](types/TPCB_LayersOfRegion.md) | Layers of the region |  |
| [TPCB_LayerTypesOfInnerLayer](types/TPCB_LayerTypesOfInnerLayer.md) | Layer types allowed to be set for inner layers |  |
| [TPCB_NumberOfCopperLayers](types/TPCB_NumberOfCopperLayers.md) | 铜箔层数 |  |
| [TPCB_PolygonSourceArray](types/TPCB_PolygonSourceArray.md) | Single polygon source array |  |
| [TPCB_PrimitiveDimensionCoordinateSet](types/TPCB_PrimitiveDimensionCoordinateSet.md) | Dimension coordinate set |  |
| [TPCB_PrimitivePadHole](types/TPCB_PrimitivePadHole.md) | Pad drilling |  |
| [TPCB_PrimitivePadShape](types/TPCB_PrimitivePadShape.md) | Pad shape |  |
| [TPCB_PrimitiveSpecialPadShape](types/TPCB_PrimitiveSpecialPadShape.md) | Special pad shape |  |
| [TSYS_ComparisonErrorCode](types/TSYS_ComparisonErrorCode.md) | 对比失败错误码 |  |
| [TSYS_LanguageKeyValuePairs](types/TSYS_LanguageKeyValuePairs.md) | 语言数据键值对 |  |
| [TSYS_MathPolygonGroup](types/TSYS_MathPolygonGroup.md) | Polygon group |  |
| [TSYS_MathPolygonInput](types/TSYS_MathPolygonInput.md) | Polygon input type |  |
| [TSYS_ShortcutKeys](types/TSYS_ShortcutKeys.md) | Shortcut key |  |

