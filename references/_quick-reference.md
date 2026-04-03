# EasyEDA API 快速参考

> 此文件提供所有类及其方法/属性的签名一览，便于 AI 快速查找。
> 详细参数和返回值请查看 docs/classes/<ClassName>.md

## 全局入口

```typescript
declare const eda: EDA;
```

EDA 类的属性即为各模块的入口，如 `eda.dmt_Board`, `eda.pcb_PrimitiveLine` 等。

---

## DMT_Board

文档树 / 板子管理类

> 在当前打开的工程内进行板子管理的相关操作

```typescript
declare class DMT_Board
```

- **copyboard**: `copyBoard(sourceBoardName: string): Promise<string | undefined>;`
- **createboard**: `createBoard(schematicUuid?: string, pcbUuid?: string): Promise<string | undefined>;`
- **deleteboard**: `deleteBoard(boardName: string): Promise<boolean>;`
- **getallboardsinfo**: `getAllBoardsInfo(): Promise<Array<IDMT_BoardItem>>;`
- **getboardinfo**: `getBoardInfo(boardName: string): Promise<IDMT_BoardItem | undefined>;`
- **getcurrentboardinfo**: `getCurrentBoardInfo(): Promise<IDMT_BoardItem | undefined>;`
- **modifyboardname**: `modifyBoardName(originalBoardName: string, boardName: string): Promise<boolean>;`

---

## DMT_EditorControl

文档树 / 编辑器控制类

> 此处编辑器控制基于当前已打开的工程设计下的图页，其它任何 `documentUuid` 都将被认为是不存在的文档页

```typescript
declare class DMT_EditorControl
```

- **activatedocument**: `activateDocument(tabId: string): Promise<boolean>;`
- **activatesplitscreen**: `activateSplitScreen(splitScreenId: string): Promise<boolean>;`
- **closedocument**: `closeDocument(tabId: string): Promise<boolean>;`
- **createsplitscreen**: `createSplitScreen(splitScreenType: EDMT_EditorSplitScreenDirection, tabId: string): Promise<{         sourceSplitScreenId: string;         newSplitScreenId: string;     } | undefined>;`
- **generateindicatormarkers**: `generateIndicatorMarkers(markers: Array<IDMT_IndicatorMarkerShape>, color?: {         r: number;         g: number;         b: number;         alpha: number;     }, lineWidth?: number, zoom?: boolean, tabId?: string): Promise<boolean>;`
- **getcurrentrenderedareaimage**: `getCurrentRenderedAreaImage(tabId?: string): Promise<Blob | undefined>;`
- **getsplitscreenidbytabid**: `getSplitScreenIdByTabId(tabId: string): Promise<string | undefined>;`
- **getsplitscreentree**: `getSplitScreenTree(): Promise<IDMT_EditorSplitScreenItem | undefined>;`
- **gettabsbysplitscreenid**: `getTabsBySplitScreenId(splitScreenId: string): Promise<Array<IDMT_EditorTabItem>>;`
- **mergealldocumentfromsplitscreen**: `mergeAllDocumentFromSplitScreen(): Promise<boolean>;`
- **movedocumenttosplitscreen**: `moveDocumentToSplitScreen(tabId: string, splitScreenId: string): Promise<boolean>;`
- **opendocument**: `openDocument(documentUuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **openlibrarydocument**: `openLibraryDocument(libraryUuid: string, libraryType: ELIB_LibraryType.SYMBOL | ELIB_LibraryType.FOOTPRINT, uuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **removeindicatormarkers**: `removeIndicatorMarkers(tabId?: string): Promise<boolean>;`
- **tilealldocumenttosplitscreen**: `tileAllDocumentToSplitScreen(): Promise<boolean>;`
- **zoomto**: `zoomTo(x?: number, y?: number, scaleRatio?: number, tabId?: string): Promise<{         left: number;         right: number;         top: number;         bottom: number;     } | false>;`
- **zoomtoallprimitives**: `zoomToAllPrimitives(tabId?: string): Promise<{         left: number;         right: number;         top: number;         bottom: number;     } | false>;`
- **zoomtoregion**: `zoomToRegion(left: number, right: number, top: number, bottom: number, tabId?: string): Promise<boolean>;`
- **zoomtoselectedprimitives**: `zoomToSelectedPrimitives(tabId?: string): Promise<{         left: number;         right: number;         top: number;         bottom: number;     } | false>;`

---

## DMT_Folder

文档树 / 文件夹类

```typescript
declare class DMT_Folder
```

- **createfolder**: `createFolder(folderName: string, teamUuid: string, parentFolderUuid?: string, description?: string): Promise<string | undefined>;`
- **deletefolder**: `deleteFolder(teamUuid: string, folderUuid: string): Promise<boolean>;`
- **getallfoldersuuid**: `getAllFoldersUuid(teamUuid: string): Promise<Array<string>>;`
- **getfolderinfo**: `getFolderInfo(teamUuid: string, folderUuid: string): Promise<IDMT_FolderItem | undefined>;`
- **modifyfolderdescription**: `modifyFolderDescription(teamUuid: string, folderUuid: string, description?: string): Promise<boolean>;`
- **modifyfoldername**: `modifyFolderName(teamUuid: string, folderUuid: string, folderName: string): Promise<boolean>;`
- **movefoldertofolder**: `moveFolderToFolder(teamUuid: string, folderUuid: string, parentFolderUuid?: string): Promise<boolean>;`

---

## DMT_Panel

文档树 / 面板管理类

> 在当前打开的工程内进行面板管理的相关操作

```typescript
declare class DMT_Panel
```

- **copypanel**: `copyPanel(panelUuid: string): Promise<string | undefined>;`
- **createpanel**: `createPanel(): Promise<string | undefined>;`
- **deletepanel**: `deletePanel(panelUuid: string): Promise<boolean>;`
- **getallpanelsinfo**: `getAllPanelsInfo(): Promise<Array<IDMT_PanelItem>>;`
- **getcurrentpanelinfo**: `getCurrentPanelInfo(): Promise<IDMT_PanelItem | undefined>;`
- **getpanelinfo**: `getPanelInfo(panelUuid: string): Promise<IDMT_PanelItem | undefined>;`
- **modifypanelname**: `modifyPanelName(panelUuid: string, panelName: string): Promise<boolean>;`

---

## DMT_Pcb

文档树 / PCB 管理类

> 在当前打开的工程内进行 PCB 管理的相关操作

```typescript
declare class DMT_Pcb
```

- **copypcb**: `copyPcb(pcbUuid: string, boardName?: string): Promise<string | undefined>;`
- **createpcb**: `createPcb(boardName?: string): Promise<string | undefined>;`
- **deletepcb**: `deletePcb(pcbUuid: string): Promise<boolean>;`
- **getallpcbsinfo**: `getAllPcbsInfo(): Promise<Array<IDMT_PcbItem>>;`
- **getcurrentpcbinfo**: `getCurrentPcbInfo(): Promise<IDMT_PcbItem | undefined>;`
- **getpcbinfo**: `getPcbInfo(pcbUuid: string): Promise<IDMT_PcbItem | undefined>;`
- **modifypcbname**: `modifyPcbName(pcbUuid: string, pcbName: string): Promise<boolean>;`

---

## DMT_Project

文档树 / 工程管理类

```typescript
declare class DMT_Project
```

- **createproject**: `createProject(projectFriendlyName: string, projectName?: string, teamUuid?: string, folderUuid?: string, description?: string, collaborationMode?: EDMT_ProjectCollaborationMode): Promise<string | undefined>;`
- **getallprojectsuuid**: `getAllProjectsUuid(teamUuid?: string, folderUuid?: string, workspaceUuid?: string): Promise<Array<string>>;`
- **getcurrentprojectinfo**: `getCurrentProjectInfo(): Promise<IDMT_ProjectItem | undefined>;`
- **getprojectinfo**: `getProjectInfo(projectUuid: string): Promise<IDMT_BriefProjectItem | undefined>;`
- **moveprojecttofolder**: `moveProjectToFolder(projectUuid: string, folderUuid?: string): Promise<boolean>;`
- **openproject**: `openProject(projectUuid: string): Promise<boolean>;`

---

## DMT_Schematic

文档树 / 原理图管理类

> 在当前打开的工程内进行原理图管理的相关操作

```typescript
declare class DMT_Schematic
```

- **copyschematic**: `copySchematic(schematicUuid: string, boardName?: string): Promise<string | undefined>;`
- **copyschematicpage**: `copySchematicPage(schematicPageUuid: string, schematicUuid?: string): Promise<string | undefined>;`
- **createschematic**: `createSchematic(boardName?: string): Promise<string | undefined>;`
- **createschematicpage**: `createSchematicPage(schematicUuid: string): Promise<string | undefined>;`
- **deleteschematic**: `deleteSchematic(schematicUuid: string): Promise<boolean>;`
- **deleteschematicpage**: `deleteSchematicPage(schematicPageUuid: string): Promise<boolean>;`
- **getallschematicpagesinfo**: `getAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;`
- **getallschematicsinfo**: `getAllSchematicsInfo(): Promise<Array<IDMT_SchematicItem>>;`
- **getcurrentschematicallschematicpagesinfo**: `getCurrentSchematicAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;`
- **getcurrentschematicinfo**: `getCurrentSchematicInfo(): Promise<IDMT_SchematicItem | undefined>;`
- **getcurrentschematicpageinfo**: `getCurrentSchematicPageInfo(): Promise<IDMT_SchematicPageItem | undefined>;`
- **getschematicinfo**: `getSchematicInfo(schematicUuid: string): Promise<IDMT_SchematicItem | undefined>;`
- **getschematicpageinfo**: `getSchematicPageInfo(schematicPageUuid: string): Promise<IDMT_SchematicPageItem | undefined>;`
- **modifyschematicname**: `modifySchematicName(schematicUuid: string, schematicName: string): Promise<boolean>;`
- **modifyschematicpagename**: `modifySchematicPageName(schematicPageUuid: string, schematicPageName: string): Promise<boolean>;`
- **modifyschematicpagetitleblock**: `modifySchematicPageTitleBlock(showTitleBlock?: boolean, titleBlockData?: {         [key: string]: {             showTitle?: boolean;             showValue?: boolean;             value?: any;         };     }): Promise<boolean>;`
- **reorderschematicpages**: `reorderSchematicPages(schematicUuid: string, schematicPageItemsArray: Array<IDMT_SchematicPageItem>): Promise<boolean>;`

---

## DMT_SelectControl

文档树 / 选择控制类

> 在文档树内进行选择焦点的查询、控制

```typescript
declare class DMT_SelectControl
```

- **getcurrentdocumentinfo**: `getCurrentDocumentInfo(): Promise<IDMT_EditorDocumentItem | undefined>;`

---

## DMT_Team

文档树 / 团队类

```typescript
declare class DMT_Team
```

- **getallinvolvedteaminfo**: `getAllInvolvedTeamInfo(): Promise<Array<IDMT_TeamItem>>;`
- **getallteamsinfo**: `getAllTeamsInfo(): Promise<Array<IDMT_TeamItem>>;`
- **getcurrentteaminfo**: `getCurrentTeamInfo(): Promise<IDMT_TeamItem | undefined>;`

---

## DMT_Workspace

文档树 / 工作区类

```typescript
declare class DMT_Workspace
```

- **getallworkspacesinfo**: `getAllWorkspacesInfo(): Promise<Array<IDMT_WorkspaceItem>>;`
- **getcurrentworkspaceinfo**: `getCurrentWorkspaceInfo(): Promise<IDMT_WorkspaceItem | undefined>;`
- **toggletoworkspace**: `toggleToWorkspace(workspaceUuid?: string): Promise<boolean>;`

---

## EDA

嘉立创 EDA 专业版用户 API 接口

```typescript
eda: EDA
```

- **dmt_board**: `dmt_Board: DMT_Board;`
- **dmt_editorcontrol**: `dmt_EditorControl: DMT_EditorControl;`
- **dmt_folder**: `dmt_Folder: DMT_Folder;`
- **dmt_panel**: `dmt_Panel: DMT_Panel;`
- **dmt_pcb**: `dmt_Pcb: DMT_Pcb;`
- **dmt_project**: `dmt_Project: DMT_Project;`
- **dmt_schematic**: `dmt_Schematic: DMT_Schematic;`
- **dmt_selectcontrol**: `dmt_SelectControl: DMT_SelectControl;`
- **dmt_team**: `dmt_Team: DMT_Team;`
- **dmt_workspace**: `dmt_Workspace: DMT_Workspace;`
- **lib_3dmodel**: `lib_3DModel: LIB_3DModel;`
- **lib_cbb**: `lib_Cbb: LIB_Cbb;`
- **lib_classification**: `lib_Classification: LIB_Classification;`
- **lib_device**: `lib_Device: LIB_Device;`
- **lib_footprint**: `lib_Footprint: LIB_Footprint;`
- **lib_librarieslist**: `lib_LibrariesList: LIB_LibrariesList;`
- **lib_panellibrary**: `lib_PanelLibrary: LIB_PanelLibrary;`
- **lib_selectcontrol**: `lib_SelectControl: LIB_SelectControl;`
- **lib_symbol**: `lib_Symbol: LIB_Symbol;`
- **pcb_document**: `pcb_Document: PCB_Document;`
- **pcb_drc**: `pcb_Drc: PCB_Drc;`
- **pcb_event**: `pcb_Event: PCB_Event;`
- **pcb_layer**: `pcb_Layer: PCB_Layer;`
- **pcb_manufacturedata**: `pcb_ManufactureData: PCB_ManufactureData;`
- **pcb_mathpolygon**: `pcb_MathPolygon: PCB_MathPolygon;`
- **pcb_net**: `pcb_Net: PCB_Net;`
- **pcb_primitive**: `pcb_Primitive: PCB_Primitive;`
- **pcb_primitivearc**: `pcb_PrimitiveArc: PCB_PrimitiveArc;`
- **pcb_primitiveattribute**: `pcb_PrimitiveAttribute: PCB_PrimitiveAttribute;`
- **pcb_primitivecomponent**: `pcb_PrimitiveComponent: PCB_PrimitiveComponent;`
- **pcb_primitivedimension**: `pcb_PrimitiveDimension: PCB_PrimitiveDimension;`
- **pcb_primitivefill**: `pcb_PrimitiveFill: PCB_PrimitiveFill;`
- **pcb_primitiveimage**: `pcb_PrimitiveImage: PCB_PrimitiveImage;`
- **pcb_primitiveline**: `pcb_PrimitiveLine: PCB_PrimitiveLine;`
- **pcb_primitiveobject**: `pcb_PrimitiveObject: PCB_PrimitiveObject;`
- **pcb_primitivepad**: `pcb_PrimitivePad: PCB_PrimitivePad;`
- **pcb_primitivepolyline**: `pcb_PrimitivePolyline: PCB_PrimitivePolyline;`
- **pcb_primitivepour**: `pcb_PrimitivePour: PCB_PrimitivePour;`
- **pcb_primitivepoured**: `pcb_PrimitivePoured: PCB_PrimitivePoured;`
- **pcb_primitiveregion**: `pcb_PrimitiveRegion: PCB_PrimitiveRegion;`
- **pcb_primitivestring**: `pcb_PrimitiveString: PCB_PrimitiveString;`
- **pcb_primitivevia**: `pcb_PrimitiveVia: PCB_PrimitiveVia;`
- **pcb_selectcontrol**: `pcb_SelectControl: PCB_SelectControl;`
- **pnl_document**: `pnl_Document: PNL_Document;`
- **sch_document**: `sch_Document: SCH_Document;`
- **sch_drc**: `sch_Drc: SCH_Drc;`
- **sch_event**: `sch_Event: SCH_Event;`
- **sch_manufacturedata**: `sch_ManufactureData: SCH_ManufactureData;`
- **sch_netlist**: `sch_Netlist: SCH_Netlist;`
- **sch_primitive**: `sch_Primitive: SCH_Primitive;`
- **sch_primitivearc**: `sch_PrimitiveArc: SCH_PrimitiveArc;`
- **sch_primitiveattribute**: `sch_PrimitiveAttribute: SCH_PrimitiveAttribute;`
- **sch_primitivebus**: `sch_PrimitiveBus: SCH_PrimitiveBus;`
- **sch_primitivecircle**: `sch_PrimitiveCircle: SCH_PrimitiveCircle;`
- **sch_primitivecomponent**: `sch_PrimitiveComponent: SCH_PrimitiveComponent | SCH_PrimitiveComponent3;`
- **sch_primitivepin**: `sch_PrimitivePin: SCH_PrimitivePin;`
- **sch_primitivepolygon**: `sch_PrimitivePolygon: SCH_PrimitivePolygon;`
- **sch_primitiverectangle**: `sch_PrimitiveRectangle: SCH_PrimitiveRectangle;`
- **sch_primitivetext**: `sch_PrimitiveText: SCH_PrimitiveText;`
- **sch_primitivewire**: `sch_PrimitiveWire: SCH_PrimitiveWire;`
- **sch_selectcontrol**: `sch_SelectControl: SCH_SelectControl;`
- **sch_simulationengine**: `sch_SimulationEngine: SCH_SimulationEngine;`
- **sch_utils**: `sch_Utils: SCH_Utils;`
- **sys_clienturl**: `sys_ClientUrl: SYS_ClientUrl;`
- **sys_dialog**: `sys_Dialog: SYS_Dialog;`
- **sys_environment**: `sys_Environment: SYS_Environment;`
- **sys_filemanager**: `sys_FileManager: SYS_FileManager;`
- **sys_filesystem**: `sys_FileSystem: SYS_FileSystem;`
- **sys_fontmanager**: `sys_FontManager: SYS_FontManager;`
- **sys_formatconversion**: `sys_FormatConversion: SYS_FormatConversion;`
- **sys_headermenu**: `sys_HeaderMenu: SYS_HeaderMenu;`
- **sys_i18n**: `sys_I18n: SYS_I18n;`
- **sys_iframe**: `sys_IFrame: SYS_IFrame;`
- **sys_loadingandprogressbar**: `sys_LoadingAndProgressBar: SYS_LoadingAndProgressBar;`
- **sys_log**: `sys_Log: SYS_Log;`
- **sys_message**: `sys_Message: SYS_Message;`
- **sys_messagebox**: `sys_MessageBox: SYS_MessageBox;`
- **sys_messagebus**: `sys_MessageBus: SYS_MessageBus;`
- **sys_panelcontrol**: `sys_PanelControl: SYS_PanelControl;`
- **sys_rightclickmenu**: `sys_RightClickMenu: SYS_RightClickMenu;`
- **sys_setting**: `sys_Setting: SYS_Setting;`
- **sys_shortcutkey**: `sys_ShortcutKey: SYS_ShortcutKey;`
- **sys_storage**: `sys_Storage: SYS_Storage;`
- **sys_timer**: `sys_Timer: SYS_Timer;`
- **sys_toastmessage**: `sys_ToastMessage: SYS_ToastMessage;`
- **sys_tool**: `sys_Tool: SYS_Tool;`
- **sys_unit**: `sys_Unit: SYS_Unit;`
- **sys_websocket**: `sys_WebSocket: SYS_WebSocket;`
- **sys_window**: `sys_Window: SYS_Window;`

---

## IPCB_ComplexPolygon

复杂多边形

> 复杂多边形可以包含多个单多边形，通过 [fill-rule](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule) 将其组合，以实现多边形的布尔运算。 目前嘉立创 EDA 专业版固定使用 [nonzero](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule#nonzero) 这个 fill-rule。

```typescript
declare class IPCB_ComplexPolygon
```

- **addsource**: `addSource(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon;`
- **getsource**: `getSource(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;`
- **getsourcestrictcomplex**: `getSourceStrictComplex(): Array<TPCB_PolygonSourceArray>;`

---

## IPCB_Polygon

单多边形

```typescript
declare class IPCB_Polygon
```

- **getsource**: `getSource(): TPCB_PolygonSourceArray;`

---

## IPCB_PrimitiveArc

圆弧线图元

> 直线和圆弧线均为导线，对应画布的线条走线和圆弧走线

```typescript
declare class IPCB_PrimitiveArc implements IPCB_Primitive
```

- **done**: `done(): Promise<IPCB_PrimitiveArc>;`
- **getadjacentprimitives**: `getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc>>;`
- **getentiretrack**: `getEntireTrack(includeVias: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;`
- **getentiretrack_1**: `getEntireTrack(includeVias: true): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;`
- **getstate_arcangle**: `getState_ArcAngle(): number;`
- **getstate_endx**: `getState_EndX(): number;`
- **getstate_endy**: `getState_EndY(): number;`
- **getstate_interactivemode**: `getState_InteractiveMode(): EPCB_PrimitiveArcInteractiveMode;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfLine;`
- **getstate_linewidth**: `getState_LineWidth(): number;`
- **getstate_net**: `getState_Net(): string;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_startx**: `getState_StartX(): number;`
- **getstate_starty**: `getState_StartY(): number;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<IPCB_PrimitiveArc>;`
- **setstate_arcangle**: `setState_ArcAngle(arcAngle: number): IPCB_PrimitiveArc;`
- **setstate_endx**: `setState_EndX(endX: number): IPCB_PrimitiveArc;`
- **setstate_endy**: `setState_EndY(endY: number): IPCB_PrimitiveArc;`
- **setstate_interactivemode**: `setState_InteractiveMode(interactiveMode: EPCB_PrimitiveArcInteractiveMode): IPCB_PrimitiveArc;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitiveArc;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number): IPCB_PrimitiveArc;`
- **setstate_net**: `setState_Net(net: string): IPCB_PrimitiveArc;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveArc;`
- **setstate_startx**: `setState_StartX(startX: number): IPCB_PrimitiveArc;`
- **setstate_starty**: `setState_StartY(startY: number): IPCB_PrimitiveArc;`
- **toasync**: `toAsync(): IPCB_PrimitiveArc;`
- **tosync**: `toSync(): IPCB_PrimitiveArc;`

---

## IPCB_PrimitiveAttribute

属性图元

```typescript
declare class IPCB_PrimitiveAttribute implements IPCB_Primitive
```

- **_constructor_**: `constructor(layer: TPCB_LayersOfImage, x: number | null, y: number | null, key: string, value: string, keyVisible: boolean, valueVisible: boolean, fontFamily: string, fontSize: number, lineWidth: number, alignMode: EPCB_PrimitiveStringAlignMode, rotation: number, reverse: boolean, expansion: number, mirror: boolean, primitiveLock: boolean, primitiveId: string, parentPrimitiveId: string);`
- **getstate_alignmode**: `getState_AlignMode(): EPCB_PrimitiveStringAlignMode;`
- **getstate_expansion**: `getState_Expansion(): number;`
- **getstate_fontfamily**: `getState_FontFamily(): string;`
- **getstate_fontsize**: `getState_FontSize(): number;`
- **getstate_key**: `getState_Key(): string;`
- **getstate_keyvisible**: `getState_KeyVisible(): boolean;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfImage;`
- **getstate_linewidth**: `getState_LineWidth(): number;`
- **getstate_mirror**: `getState_Mirror(): boolean;`
- **getstate_parentprimitiveid**: `getState_ParentPrimitiveId(): string;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_reverse**: `getState_Reverse(): boolean;`
- **getstate_rotation**: `getState_Rotation(): number;`
- **getstate_value**: `getState_Value(): string;`
- **getstate_valuevisible**: `getState_ValueVisible(): boolean;`
- **getstate_x**: `getState_X(): number | null;`
- **getstate_y**: `getState_Y(): number | null;`
- **isasync**: `isAsync(): boolean;`
- **setstate_alignmode**: `setState_AlignMode(alignMode: EPCB_PrimitiveStringAlignMode): IPCB_PrimitiveAttribute;`
- **setstate_expansion**: `setState_Expansion(expansion: number): IPCB_PrimitiveAttribute;`
- **setstate_fontfamily**: `setState_FontFamily(fontFamily: string): IPCB_PrimitiveAttribute;`
- **setstate_fontsize**: `setState_FontSize(fontSize: number): IPCB_PrimitiveAttribute;`
- **setstate_key**: `setState_Key(key: string): IPCB_PrimitiveAttribute;`
- **setstate_keyvisible**: `setState_KeyVisible(keyVisible: boolean): IPCB_PrimitiveAttribute;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfImage): IPCB_PrimitiveAttribute;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number): IPCB_PrimitiveAttribute;`
- **setstate_mirror**: `setState_Mirror(mirror: boolean): IPCB_PrimitiveAttribute;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveAttribute;`
- **setstate_reverse**: `setState_Reverse(reverse: boolean): IPCB_PrimitiveAttribute;`
- **setstate_rotation**: `setState_Rotation(rotation: number): IPCB_PrimitiveAttribute;`
- **setstate_value**: `setState_Value(value: string): IPCB_PrimitiveAttribute;`
- **setstate_valuevisible**: `setState_ValueVisible(valueVisible: boolean): IPCB_PrimitiveAttribute;`
- **setstate_x**: `setState_X(x: number): IPCB_PrimitiveAttribute;`
- **setstate_y**: `setState_Y(y: number): IPCB_PrimitiveAttribute;`
- **toasync**: `toAsync(): IPCB_PrimitiveAttribute;`
- **tosync**: `toSync(): IPCB_PrimitiveAttribute;`

---

## IPCB_PrimitiveComponent

器件图元

```typescript
declare class IPCB_PrimitiveComponent implements IPCB_Primitive
```

- **done**: `done(): Promise<IPCB_PrimitiveComponent>;`
- **getallpins**: `getAllPins(): Promise<Array<IPCB_PrimitiveComponentPad>>;`
- **getstate_addintobom**: `getState_AddIntoBom(): boolean;`
- **getstate_component**: `getState_Component(): {         libraryUuid: string;         uuid: string;     };`
- **getstate_designator**: `getState_Designator(): string | undefined;`
- **getstate_footprint**: `getState_Footprint(): {         libraryUuid: string;         uuid: string;     } | undefined;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfComponent;`
- **getstate_manufacturer**: `getState_Manufacturer(): string | undefined;`
- **getstate_manufacturerid**: `getState_ManufacturerId(): string | undefined;`
- **getstate_model3d**: `getState_Model3D(): {         libraryUuid: string;         uuid: string;     } | undefined;`
- **getstate_name**: `getState_Name(): string | undefined;`
- **getstate_otherproperty**: `getState_OtherProperty(): {         [key: string]: string | number | boolean;     } | undefined;`
- **getstate_pads**: `getState_Pads(): Array<{         primitiveId: string;         net: string;         padNumber: string;     }> | undefined;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `getState_Rotation(): number;`
- **getstate_supplier**: `getState_Supplier(): string | undefined;`
- **getstate_supplierid**: `getState_SupplierId(): string | undefined;`
- **getstate_uniqueid**: `getState_UniqueId(): string | undefined;`
- **getstate_x**: `getState_X(): number;`
- **getstate_y**: `getState_Y(): number;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<IPCB_PrimitiveComponent>;`
- **setstate_addintobom**: `setState_AddIntoBom(addIntoBom: boolean): IPCB_PrimitiveComponent;`
- **setstate_designator**: `setState_Designator(designator: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfComponent): IPCB_PrimitiveComponent;`
- **setstate_manufacturer**: `setState_Manufacturer(manufacturer: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_manufacturerid**: `setState_ManufacturerId(manufacturerId: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_name**: `setState_Name(name: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_otherproperty**: `setState_OtherProperty(otherProperty: {         [key: string]: string | number | boolean;     }): IPCB_PrimitiveComponent;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveComponent;`
- **setstate_rotation**: `setState_Rotation(rotation: number): IPCB_PrimitiveComponent;`
- **setstate_supplier**: `setState_Supplier(supplier: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_supplierid**: `setState_SupplierId(supplierId: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_uniqueid**: `setState_UniqueId(uniqueId: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_x**: `setState_X(x: number): IPCB_PrimitiveComponent;`
- **setstate_y**: `setState_Y(y: number): IPCB_PrimitiveComponent;`
- **toasync**: `toAsync(): IPCB_PrimitiveComponent;`
- **tosync**: `toSync(): IPCB_PrimitiveComponent;`

---

## IPCB_PrimitiveComponentPad

器件焊盘图元

> 器件焊盘图元是一个特殊的图元，它指的是在 PCB 画布上关联到封装的焊盘 你只能通过 [器件类的 getAllPinsByPrimitiveId 方法](./pro-api.pcb_primitivecomponent.getallpinsbyprimitiveid.md) 或 [器件图元的 getAllPads 方法](./pro-api.ipcb_primitivecomponent.getallpins.md) 获取到器件焊盘图元

```typescript
declare class IPCB_PrimitiveComponentPad extends IPCB_PrimitivePad
```

- **done**: `done(): Promise<IPCB_PrimitiveComponentPad>;`
- **getconnectedprimitives**: `getConnectedPrimitives(onlyCentreConnection: true): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;`
- **getconnectedprimitives_1**: `getConnectedPrimitives(onlyCentreConnection: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia | IPCB_PrimitivePolyline | IPCB_PrimitiveFill>>;`
- **getstate_parentcomponentprimitiveid**: `getState_ParentComponentPrimitiveId(): string;`
- **primitivetype**: `protected readonly primitiveType: EPCB_PrimitiveType.COMPONENT_PAD;`
- **setstate_parentcomponentprimitiveid**: `setState_ParentComponentPrimitiveId(): IPCB_PrimitiveComponentPad;`

---

## IPCB_PrimitiveDimension

尺寸标注图元

```typescript
declare class IPCB_PrimitiveDimension implements IPCB_Primitive
```

- **done**: `done(): Promise<IPCB_PrimitiveDimension>;`
- **getstate_coordinateset**: `getState_CoordinateSet(): TPCB_PrimitiveDimensionCoordinateSet;`
- **getstate_dimensiontype**: `getState_DimensionType(): EPCB_PrimitiveDimensionType;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfDimension;`
- **getstate_linewidth**: `getState_LineWidth(): number;`
- **getstate_precision**: `getState_Precision(): number;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_textfollow**: `getState_TextFollow(): 0 | 1;`
- **getstate_unit**: `getState_Unit(): ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<IPCB_PrimitiveDimension>;`
- **setstate_coordinateset**: `setState_CoordinateSet(coordinateSet: TPCB_PrimitiveDimensionCoordinateSet): IPCB_PrimitiveDimension;`
- **setstate_dimensiontype**: `setState_DimensionType(dimensionType: EPCB_PrimitiveDimensionType): IPCB_PrimitiveDimension;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfDimension): IPCB_PrimitiveDimension;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number): IPCB_PrimitiveDimension;`
- **setstate_precision**: `setState_Precision(precision: number): IPCB_PrimitiveDimension;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveDimension;`
- **setstate_unit**: `setState_Unit(unit: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL): IPCB_PrimitiveDimension;`
- **toasync**: `toAsync(): IPCB_PrimitiveDimension;`
- **tosync**: `toSync(): IPCB_PrimitiveDimension;`

---

## IPCB_PrimitiveFill

填充图元

```typescript
declare class IPCB_PrimitiveFill implements IPCB_Primitive
```

- **converttopolyline**: `convertToPolyline(): Promise<IPCB_PrimitivePolyline>;`
- **converttopour**: `convertToPour(): Promise<IPCB_PrimitivePour>;`
- **converttoregion**: `convertToRegion(): Promise<IPCB_PrimitiveRegion>;`
- **done**: `done(): Promise<IPCB_PrimitiveFill>;`
- **getstate_complexpolygon**: `getState_ComplexPolygon(): IPCB_Polygon;`
- **getstate_fillmode**: `getState_FillMode(): EPCB_PrimitiveFillMode | undefined;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfFill;`
- **getstate_linewidth**: `getState_LineWidth(): number;`
- **getstate_net**: `getState_Net(): string | undefined;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<IPCB_PrimitiveFill>;`
- **setstate_complexpolygon**: `setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitiveFill;`
- **setstate_fillmode**: `setState_FillMode(fillMode: EPCB_PrimitiveFillMode): IPCB_PrimitiveFill;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfFill): IPCB_PrimitiveFill;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number): IPCB_PrimitiveFill;`
- **setstate_net**: `setState_Net(net: string): IPCB_PrimitiveFill;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveFill;`
- **toasync**: `toAsync(): IPCB_PrimitiveFill;`
- **tosync**: `toSync(): IPCB_PrimitiveFill;`

---

## IPCB_PrimitiveImage

图像图元

```typescript
declare class IPCB_PrimitiveImage implements IPCB_Primitive
```

- **done**: `done(): Promise<IPCB_PrimitiveImage>;`
- **getstate_complexpolygon**: `getState_ComplexPolygon(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;`
- **getstate_height**: `getState_Height(): number;`
- **getstate_horizonmirror**: `getState_HorizonMirror(): boolean;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfImage;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `getState_Rotation(): number;`
- **getstate_width**: `getState_Width(): number;`
- **getstate_x**: `getState_X(): number;`
- **getstate_y**: `getState_Y(): number;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<IPCB_PrimitiveImage>;`
- **setstate_height**: `setState_Height(height: number): IPCB_PrimitiveImage;`
- **setstate_horizonmirror**: `setState_HorizonMirror(horizonMirror: boolean): IPCB_PrimitiveImage;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfImage): IPCB_PrimitiveImage;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveImage;`
- **setstate_rotation**: `setState_Rotation(rotation: number): IPCB_PrimitiveImage;`
- **setstate_width**: `setState_Width(width: number): IPCB_PrimitiveImage;`
- **setstate_x**: `setState_X(x: number): IPCB_PrimitiveImage;`
- **setstate_y**: `setState_Y(y: number): IPCB_PrimitiveImage;`
- **toasync**: `toAsync(): IPCB_PrimitiveImage;`
- **tosync**: `toSync(): IPCB_PrimitiveImage;`

---

## IPCB_PrimitiveLine

直线图元

> 直线和圆弧线均为导线，对应画布的线条走线和圆弧走线

```typescript
declare class IPCB_PrimitiveLine implements IPCB_Primitive
```

- **done**: `done(): Promise<IPCB_PrimitiveLine>;`
- **getadjacentprimitives**: `getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc>>;`
- **getentiretrack**: `getEntireTrack(includeVias: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;`
- **getentiretrack_1**: `getEntireTrack(includeVias: true): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;`
- **getstate_endx**: `getState_EndX(): number;`
- **getstate_endy**: `getState_EndY(): number;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfLine;`
- **getstate_linewidth**: `getState_LineWidth(): number;`
- **getstate_net**: `getState_Net(): string;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_startx**: `getState_StartX(): number;`
- **getstate_starty**: `getState_StartY(): number;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<IPCB_PrimitiveLine>;`
- **setstate_endx**: `setState_EndX(endX: number): IPCB_PrimitiveLine;`
- **setstate_endy**: `setState_EndY(endY: number): IPCB_PrimitiveLine;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitiveLine;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number): IPCB_PrimitiveLine;`
- **setstate_net**: `setState_Net(net: string): IPCB_PrimitiveLine;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveLine;`
- **setstate_startx**: `setState_StartX(startX: number): IPCB_PrimitiveLine;`
- **setstate_starty**: `setState_StartY(startY: number): IPCB_PrimitiveLine;`
- **toasync**: `toAsync(): IPCB_PrimitiveLine;`
- **tosync**: `toSync(): IPCB_PrimitiveLine;`

---

## IPCB_PrimitiveObject

二进制内嵌对象图元

```typescript
declare class IPCB_PrimitiveObject implements IPCB_Primitive
```

- **done**: `done(): Promise<IPCB_PrimitiveObject>;`
- **getstate_binarydata**: `getState_BinaryData(): string;`
- **getstate_filename**: `getState_FileName(): string;`
- **getstate_height**: `getState_Height(): number;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfObject | undefined;`
- **getstate_mirror**: `getState_Mirror(): boolean;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `getState_Rotation(): number;`
- **getstate_topleftx**: `getState_TopLeftX(): number | undefined;`
- **getstate_toplefty**: `getState_TopLeftY(): number | undefined;`
- **getstate_width**: `getState_Width(): number;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<IPCB_PrimitiveObject>;`
- **setstate_binarydata**: `setState_BinaryData(binaryData: string): IPCB_PrimitiveObject;`
- **setstate_filename**: `setState_FileName(fileName: string): IPCB_PrimitiveObject;`
- **setstate_height**: `setState_Height(height: number): IPCB_PrimitiveObject;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfObject): IPCB_PrimitiveObject;`
- **setstate_mirror**: `setState_Mirror(mirror: boolean): IPCB_PrimitiveObject;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveObject;`
- **setstate_rotation**: `setState_Rotation(rotation: number): IPCB_PrimitiveObject;`
- **setstate_topleftx**: `setState_TopLeftX(topLeftX: number): IPCB_PrimitiveObject;`
- **setstate_toplefty**: `setState_TopLeftY(topLeftY: number): IPCB_PrimitiveObject;`
- **setstate_width**: `setState_Width(width: number): IPCB_PrimitiveObject;`
- **toasync**: `toAsync(): IPCB_PrimitiveObject;`
- **tosync**: `toSync(): IPCB_PrimitiveObject;`

---

## IPCB_PrimitivePad

焊盘图元

```typescript
declare class IPCB_PrimitivePad implements IPCB_Primitive
```

- **async**: `protected async: boolean;`
- **create**: `create(): Promise<IPCB_PrimitivePad>;`
- **done**: `done(): Promise<IPCB_PrimitivePad>;`
- **getstate_heatwelding**: `getState_HeatWelding(): IPCB_PrimitivePadHeatWelding | null;`
- **getstate_hole**: `getState_Hole(): TPCB_PrimitivePadHole | null;`
- **getstate_holeoffsetx**: `getState_HoleOffsetX(): number;`
- **getstate_holeoffsety**: `getState_HoleOffsetY(): number;`
- **getstate_holerotation**: `getState_HoleRotation(): number;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfPad;`
- **getstate_metallization**: `getState_Metallization(): boolean;`
- **getstate_net**: `getState_Net(): string | undefined;`
- **getstate_pad**: `getState_Pad(): TPCB_PrimitivePadShape | undefined;`
- **getstate_padnumber**: `getState_PadNumber(): string;`
- **getstate_padtype**: `getState_PadType(): EPCB_PrimitivePadType;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `getState_Rotation(): number;`
- **getstate_soldermaskandpastemaskexpansion**: `getState_SolderMaskAndPasteMaskExpansion(): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;`
- **getstate_specialpad**: `getState_SpecialPad(): TPCB_PrimitiveSpecialPadShape | undefined;`
- **getstate_x**: `getState_X(): number;`
- **getstate_y**: `getState_Y(): number;`
- **heatwelding**: `protected heatWelding: IPCB_PrimitivePadHeatWelding | null;`
- **hole**: `protected hole: TPCB_PrimitivePadHole | null;`
- **holeoffsetx**: `protected holeOffsetX: number;`
- **holeoffsety**: `protected holeOffsetY: number;`
- **holerotation**: `protected holeRotation: number;`
- **isasync**: `isAsync(): boolean;`
- **layer**: `protected layer: TPCB_LayersOfPad;`
- **metallization**: `protected metallization: boolean;`
- **net**: `protected net?: string;`
- **pad**: `protected pad?: TPCB_PrimitivePadShape;`
- **padnumber**: `protected padNumber: string;`
- **padtype**: `protected padType: EPCB_PrimitivePadType;`
- **primitiveid**: `protected primitiveId?: string;`
- **primitivelock**: `protected primitiveLock: boolean;`
- **primitivetype**: `protected readonly primitiveType: EPCB_PrimitiveType;`
- **reset**: `reset(): Promise<IPCB_PrimitivePad>;`
- **rotation**: `protected rotation: number;`
- **setstate_heatwelding**: `setState_HeatWelding(heatWelding: IPCB_PrimitivePadHeatWelding | null): IPCB_PrimitivePad;`
- **setstate_hole**: `setState_Hole(hole: TPCB_PrimitivePadHole): IPCB_PrimitivePad;`
- **setstate_holeoffsetx**: `setState_HoleOffsetX(holeOffsetX: number): IPCB_PrimitivePad;`
- **setstate_holeoffsety**: `setState_HoleOffsetY(holeOffsetY: number): IPCB_PrimitivePad;`
- **setstate_holerotation**: `setState_HoleRotation(holeRotation: number): IPCB_PrimitivePad;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfPad): IPCB_PrimitivePad;`
- **setstate_metallization**: `setState_Metallization(metallization: boolean): IPCB_PrimitivePad;`
- **setstate_net**: `setState_Net(net?: string): IPCB_PrimitivePad;`
- **setstate_pad**: `setState_Pad(pad: TPCB_PrimitivePadShape): IPCB_PrimitivePad;`
- **setstate_padnumber**: `setState_PadNumber(padNumber: string): IPCB_PrimitivePad;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePad;`
- **setstate_rotation**: `setState_Rotation(rotation: number): IPCB_PrimitivePad;`
- **setstate_soldermaskandpastemaskexpansion**: `setState_SolderMaskAndPasteMaskExpansion(solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null): IPCB_PrimitivePad;`
- **setstate_specialpad**: `setState_SpecialPad(specialPad: TPCB_PrimitiveSpecialPadShape): IPCB_PrimitivePad;`
- **setstate_x**: `setState_X(x: number): IPCB_PrimitivePad;`
- **setstate_y**: `setState_Y(y: number): IPCB_PrimitivePad;`
- **soldermaskandpastemaskexpansion**: `protected solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;`
- **specialpad**: `protected specialPad?: TPCB_PrimitiveSpecialPadShape;`
- **toasync**: `toAsync(): IPCB_PrimitivePad;`
- **tosync**: `toSync(): IPCB_PrimitivePad;`
- **x**: `protected x: number;`
- **y**: `protected y: number;`

---

## IPCB_PrimitivePolyline

折线图元

```typescript
declare class IPCB_PrimitivePolyline implements IPCB_Primitive
```

- **converttofill**: `convertToFill(): Promise<IPCB_PrimitiveFill>;`
- **converttopour**: `convertToPour(): Promise<IPCB_PrimitivePour>;`
- **converttoregion**: `convertToRegion(): Promise<IPCB_PrimitiveRegion>;`
- **done**: `done(): Promise<IPCB_PrimitivePolyline>;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfLine;`
- **getstate_linewidth**: `getState_LineWidth(): number;`
- **getstate_net**: `getState_Net(): string;`
- **getstate_polygon**: `getState_Polygon(): IPCB_Polygon;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<IPCB_PrimitivePolyline>;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitivePolyline;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number): IPCB_PrimitivePolyline;`
- **setstate_net**: `setState_Net(net: string): IPCB_PrimitivePolyline;`
- **setstate_polygon**: `setState_Polygon(polygon: IPCB_Polygon): IPCB_PrimitivePolyline;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePolyline;`
- **toasync**: `toAsync(): IPCB_PrimitivePolyline;`
- **tosync**: `toSync(): IPCB_PrimitivePolyline;`

---

## IPCB_PrimitivePour

覆铜边框图元

```typescript
declare class IPCB_PrimitivePour implements IPCB_Primitive
```

- **converttofill**: `convertToFill(): Promise<IPCB_PrimitiveFill>;`
- **converttopolyline**: `convertToPolyline(): Promise<IPCB_PrimitivePolyline>;`
- **converttoregion**: `convertToRegion(): Promise<IPCB_PrimitiveRegion>;`
- **done**: `done(): Promise<IPCB_PrimitivePour>;`
- **getstate_complexpolygon**: `getState_ComplexPolygon(): IPCB_Polygon;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfCopper;`
- **getstate_linewidth**: `getState_LineWidth(): number;`
- **getstate_net**: `getState_Net(): string;`
- **getstate_pourfillmethod**: `getState_PourFillMethod(): any;`
- **getstate_pourname**: `getState_PourName(): string;`
- **getstate_pourpriority**: `getState_PourPriority(): number;`
- **getstate_preservesilos**: `getState_PreserveSilos(): boolean;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<IPCB_PrimitivePour>;`
- **setstate_complexpolygon**: `setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitivePour;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfCopper): IPCB_PrimitivePour;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number): IPCB_PrimitivePour;`
- **setstate_net**: `setState_Net(net: string): IPCB_PrimitivePour;`
- **setstate_pourfillmethod**: `setState_PourFillMethod(pourFillMethod: EPCB_PrimitivePourFillMethod): IPCB_PrimitivePour;`
- **setstate_pourname**: `setState_PourName(pourName: string): IPCB_PrimitivePour;`
- **setstate_pourpriority**: `setState_PourPriority(pourPriority: number): IPCB_PrimitivePour;`
- **setstate_preservesilos**: `setState_PreserveSilos(preserveSilos: boolean): IPCB_PrimitivePour;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePour;`
- **toasync**: `toAsync(): IPCB_PrimitivePour;`
- **tosync**: `toSync(): IPCB_PrimitivePour;`

---

## IPCB_PrimitivePoured

覆铜填充图元

```typescript
declare class IPCB_PrimitivePoured implements IPCB_Primitive
```

- **addsoldermaskfill**: `addSolderMaskFill(pourFillId: IPCB_PrimitivePouredPourFill['id']): Promise<IPCB_PrimitiveFill | undefined>;`
- **converttofill**: `convertToFill(pourFillId: IPCB_PrimitivePouredPourFill['id']): Promise<IPCB_PrimitiveFill | undefined>;`
- **deletepourfills**: `deletePourFills(pourFillIds: IPCB_PrimitivePouredPourFill['id'] | Array<IPCB_PrimitivePouredPourFill['id']>): Promise<boolean>;`
- **getstate_pourfills**: `getState_PourFills(): Array<IPCB_PrimitivePouredPourFill>;`
- **getstate_pourprimitiveid**: `getState_PourPrimitiveId(): string;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`

---

## IPCB_PrimitiveRegion

区域图元

```typescript
declare class IPCB_PrimitiveRegion implements IPCB_Primitive
```

- **converttofill**: `convertToFill(): Promise<IPCB_PrimitiveFill>;`
- **converttopolyline**: `convertToPolyline(): Promise<IPCB_PrimitivePolyline>;`
- **converttopour**: `convertToPour(): Promise<IPCB_PrimitivePour>;`
- **done**: `done(): Promise<IPCB_PrimitiveRegion>;`
- **getstate_complexpolygon**: `getState_ComplexPolygon(): IPCB_Polygon;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfRegion;`
- **getstate_linewidth**: `getState_LineWidth(): number;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_regionname**: `getState_RegionName(): string | undefined;`
- **getstate_ruletype**: `getState_RuleType(): Array<EPCB_PrimitiveRegionRuleType>;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<IPCB_PrimitiveRegion>;`
- **setstate_complexpolygon**: `setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitiveRegion;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfRegion): IPCB_PrimitiveRegion;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number): IPCB_PrimitiveRegion;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveRegion;`
- **setstate_regionname**: `setState_RegionName(regionName?: string): IPCB_PrimitiveRegion;`
- **setstate_ruletype**: `setState_RuleType(ruleType: Array<EPCB_PrimitiveRegionRuleType>): IPCB_PrimitiveRegion;`
- **toasync**: `toAsync(): IPCB_PrimitiveRegion;`
- **tosync**: `toSync(): IPCB_PrimitiveRegion;`

---

## IPCB_PrimitiveString

文本图元

```typescript
declare class IPCB_PrimitiveString implements IPCB_Primitive
```

- **_constructor_**: `constructor(layer: TPCB_LayersOfImage, x: number, y: number, text: string, fontFamily?: string, fontSize?: number, lineWidth?: number, alignMode?: EPCB_PrimitiveStringAlignMode, rotation?: number, reverse?: boolean, expansion?: number, mirror?: boolean, primitiveLock?: boolean, primitiveId?: string);`
- **getstate_alignmode**: `getState_AlignMode(): EPCB_PrimitiveStringAlignMode;`
- **getstate_expansion**: `getState_Expansion(): number;`
- **getstate_fontfamily**: `getState_FontFamily(): string;`
- **getstate_fontsize**: `getState_FontSize(): number;`
- **getstate_layer**: `getState_Layer(): TPCB_LayersOfImage;`
- **getstate_linewidth**: `getState_LineWidth(): number;`
- **getstate_mirror**: `getState_Mirror(): boolean;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_reverse**: `getState_Reverse(): boolean;`
- **getstate_rotation**: `getState_Rotation(): number;`
- **getstate_text**: `getState_Text(): string;`
- **getstate_x**: `getState_X(): number;`
- **getstate_y**: `getState_Y(): number;`
- **isasync**: `isAsync(): boolean;`
- **setstate_alignmode**: `setState_AlignMode(alignMode: EPCB_PrimitiveStringAlignMode): IPCB_PrimitiveString;`
- **setstate_expansion**: `setState_Expansion(expansion: number): IPCB_PrimitiveString;`
- **setstate_fontfamily**: `setState_FontFamily(fontFamily: string): IPCB_PrimitiveString;`
- **setstate_fontsize**: `setState_FontSize(fontSize: number): IPCB_PrimitiveString;`
- **setstate_layer**: `setState_Layer(layer: TPCB_LayersOfImage): IPCB_PrimitiveString;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number): IPCB_PrimitiveString;`
- **setstate_mirror**: `setState_Mirror(mirror: boolean): IPCB_PrimitiveString;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveString;`
- **setstate_reverse**: `setState_Reverse(reverse: boolean): IPCB_PrimitiveString;`
- **setstate_rotation**: `setState_Rotation(rotation: number): IPCB_PrimitiveString;`
- **setstate_text**: `setState_Text(text: string): IPCB_PrimitiveString;`
- **setstate_x**: `setState_X(x: number): IPCB_PrimitiveString;`
- **setstate_y**: `setState_Y(y: number): IPCB_PrimitiveString;`
- **toasync**: `toAsync(): IPCB_PrimitiveString;`
- **tosync**: `toSync(): IPCB_PrimitiveString;`

---

## IPCB_PrimitiveVia

过孔图元

```typescript
declare class IPCB_PrimitiveVia implements IPCB_Primitive
```

- **done**: `done(): Promise<IPCB_PrimitiveVia>;`
- **getadjacentprimitives**: `getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;`
- **getstate_designruleblindvianame**: `getState_DesignRuleBlindViaName(): string | null;`
- **getstate_diameter**: `getState_Diameter(): number;`
- **getstate_holediameter**: `getState_HoleDiameter(): number;`
- **getstate_net**: `getState_Net(): string;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_soldermaskexpansion**: `getState_SolderMaskExpansion(): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;`
- **getstate_viatype**: `getState_ViaType(): EPCB_PrimitiveViaType;`
- **getstate_x**: `getState_X(): number;`
- **getstate_y**: `getState_Y(): number;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<IPCB_PrimitiveVia>;`
- **setstate_designruleblindvianame**: `setState_DesignRuleBlindViaName(designRuleBlindViaName: string | null): IPCB_PrimitiveVia;`
- **setstate_diameter**: `setState_Diameter(diameter: number): IPCB_PrimitiveVia;`
- **setstate_holediameter**: `setState_HoleDiameter(holeDiameter: number): IPCB_PrimitiveVia;`
- **setstate_net**: `setState_Net(net: string): IPCB_PrimitiveVia;`
- **setstate_primitivelock**: `setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveVia;`
- **setstate_soldermaskexpansion**: `setState_SolderMaskExpansion(solderMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null): IPCB_PrimitiveVia;`
- **setstate_viatype**: `setState_ViaType(viaType: EPCB_PrimitiveViaType): IPCB_PrimitiveVia;`
- **setstate_x**: `setState_X(x: number): IPCB_PrimitiveVia;`
- **setstate_y**: `setState_Y(y: number): IPCB_PrimitiveVia;`
- **toasync**: `toAsync(): IPCB_PrimitiveVia;`
- **tosync**: `toSync(): IPCB_PrimitiveVia;`

---

## ISCH_PrimitiveArc

圆弧图元

```typescript
declare class ISCH_PrimitiveArc implements ISCH_Primitive
```

- **done**: `done(): Promise<ISCH_PrimitiveArc>;`
- **getstate_color**: `getState_Color(): string | null;`
- **getstate_endx**: `getState_EndX(): number;`
- **getstate_endy**: `getState_EndY(): number;`
- **getstate_fillcolor**: `getState_FillColor(): string | null;`
- **getstate_linetype**: `getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_referencex**: `getState_ReferenceX(): number;`
- **getstate_referencey**: `getState_ReferenceY(): number;`
- **getstate_startx**: `getState_StartX(): number;`
- **getstate_starty**: `getState_StartY(): number;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<ISCH_PrimitiveArc>;`
- **setstate_color**: `setState_Color(color: string | null): ISCH_PrimitiveArc;`
- **setstate_endx**: `setState_EndX(endX: number): ISCH_PrimitiveArc;`
- **setstate_endy**: `setState_EndY(endY: number): ISCH_PrimitiveArc;`
- **setstate_fillcolor**: `setState_FillColor(fillColor: string | null): ISCH_PrimitiveArc;`
- **setstate_linetype**: `setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveArc;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveArc;`
- **setstate_referencex**: `setState_ReferenceX(referenceX: number): ISCH_PrimitiveArc;`
- **setstate_referencey**: `setState_ReferenceY(referenceY: number): ISCH_PrimitiveArc;`
- **setstate_startx**: `setState_StartX(startX: number): ISCH_PrimitiveArc;`
- **setstate_starty**: `setState_StartY(startY: number): ISCH_PrimitiveArc;`
- **toasync**: `toAsync(): ISCH_PrimitiveArc;`
- **tosync**: `toSync(): ISCH_PrimitiveArc;`

---

## ISCH_PrimitiveAttribute

属性图元

```typescript
declare class ISCH_PrimitiveAttribute implements ISCH_Primitive
```

- **done**: `done(): Promise<ISCH_PrimitiveAttribute>;`
- **getstate_alignmode**: `getState_AlignMode(): ESCH_PrimitiveTextAlignMode | null;`
- **getstate_bold**: `getState_Bold(): boolean | null;`
- **getstate_color**: `getState_Color(): string | null;`
- **getstate_fillcolor**: `getState_FillColor(): string | null;`
- **getstate_fontname**: `getState_FontName(): string | null;`
- **getstate_fontsize**: `getState_FontSize(): number | null;`
- **getstate_italic**: `getState_Italic(): boolean | null;`
- **getstate_key**: `getState_Key(): string;`
- **getstate_keyvisible**: `getState_KeyVisible(): boolean | null;`
- **getstate_parentprimitiveid**: `getState_ParentPrimitiveId(): string;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `getState_Rotation(): number | null;`
- **getstate_underline**: `getState_UnderLine(): boolean | null;`
- **getstate_value**: `getState_Value(): string;`
- **getstate_valuevisible**: `getState_ValueVisible(): boolean | null;`
- **getstate_x**: `getState_X(): number | null;`
- **getstate_y**: `getState_Y(): number | null;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<ISCH_PrimitiveAttribute>;`
- **setstate_alignmode**: `setState_AlignMode(alignMode: ESCH_PrimitiveTextAlignMode | null): ISCH_PrimitiveAttribute;`
- **setstate_bold**: `setState_Bold(bold: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_color**: `setState_Color(color: string | null): ISCH_PrimitiveAttribute;`
- **setstate_fillcolor**: `setState_FillColor(fillColor: string | null): ISCH_PrimitiveAttribute;`
- **setstate_fontname**: `setState_FontName(fontName: string | null): ISCH_PrimitiveAttribute;`
- **setstate_fontsize**: `setState_FontSize(fontSize: number | null): ISCH_PrimitiveAttribute;`
- **setstate_italic**: `setState_Italic(italic: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_key**: `setState_Key(key: string): ISCH_PrimitiveAttribute;`
- **setstate_keyvisible**: `setState_KeyVisible(keyVisible: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_rotation**: `setState_Rotation(rotation: number | null): ISCH_PrimitiveAttribute;`
- **setstate_underline**: `setState_UnderLine(underLine: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_value**: `setState_Value(value: string): ISCH_PrimitiveAttribute;`
- **setstate_valuevisible**: `setState_ValueVisible(valueVisible: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_x**: `setState_X(x: number | null): ISCH_PrimitiveAttribute;`
- **setstate_y**: `setState_Y(y: number | null): ISCH_PrimitiveAttribute;`
- **toasync**: `toAsync(): ISCH_PrimitiveAttribute;`
- **tosync**: `toSync(): ISCH_PrimitiveAttribute;`

---

## ISCH_PrimitiveBus

总线图元

```typescript
declare class ISCH_PrimitiveBus implements ISCH_Primitive
```

- **done**: `done(): Promise<ISCH_PrimitiveBus>;`
- **getstate_busname**: `getState_BusName(): string;`
- **getstate_color**: `getState_Color(): string | null;`
- **getstate_line**: `getState_Line(): Array<number> | Array<Array<number>>;`
- **getstate_linetype**: `getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `getState_PrimitiveType(): ESCH_PrimitiveType;`
- **isasync**: `isAsync(): boolean;`
- **setstate_busname**: `setState_BusName(busName: string): ISCH_PrimitiveBus;`
- **setstate_color**: `setState_Color(color: string | null): ISCH_PrimitiveBus;`
- **setstate_line**: `setState_Line(line: Array<number> | Array<Array<number>>): ISCH_PrimitiveBus;`
- **setstate_linetype**: `setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveBus;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveBus;`
- **toasync**: `toAsync(): ISCH_PrimitiveBus;`
- **tosync**: `toSync(): ISCH_PrimitiveBus;`

---

## ISCH_PrimitiveCbbSymbolComponent

复用模块符号图元

```typescript
declare class ISCH_PrimitiveCbbSymbolComponent extends ISCH_PrimitiveComponent
```

- **getstate_cbb**: `getState_Cbb(): {         libraryUuid: string;         uuid: string;     };`
- **getstate_cbbsymbol**: `getState_CbbSymbol(): {         libraryUuid: string;         cbbUuid: string;         uuid: string;         name?: string;     };`

---

## ISCH_PrimitiveCircle

圆图元

```typescript
declare class ISCH_PrimitiveCircle implements ISCH_Primitive
```

- **done**: `done(): ISCH_PrimitiveCircle;`
- **getstate_centerx**: `getState_CenterX(): number;`
- **getstate_centery**: `getState_CenterY(): number;`
- **getstate_color**: `getState_Color(): string | null;`
- **getstate_fillcolor**: `getState_FillColor(): string | null;`
- **getstate_fillstyle**: `getState_FillStyle(): ESCH_PrimitiveFillStyle | null;`
- **getstate_linetype**: `getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_radius**: `getState_Radius(): number;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<ISCH_PrimitiveCircle>;`
- **setstate_centerx**: `setState_CenterX(centerX: number): ISCH_PrimitiveCircle;`
- **setstate_centery**: `setState_CenterY(centerY: number): ISCH_PrimitiveCircle;`
- **setstate_color**: `setState_Color(color: string | null): ISCH_PrimitiveCircle;`
- **setstate_fillcolor**: `setState_FillColor(fillColor: string | null): ISCH_PrimitiveCircle;`
- **setstate_fillstyle**: `setState_FillStyle(fillStyle: ESCH_PrimitiveFillStyle | null): ISCH_PrimitiveCircle;`
- **setstate_linetype**: `setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveCircle;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveCircle;`
- **setstate_radius**: `setState_Radius(radius: number): ISCH_PrimitiveCircle;`
- **toasync**: `toAsync(): ISCH_PrimitiveCircle;`
- **tosync**: `toSync(): ISCH_PrimitiveCircle;`

---

## ISCH_PrimitiveComponent

器件图元

```typescript
declare class ISCH_PrimitiveComponent implements ISCH_Primitive
```

- **async**: `protected async: boolean;`
- **designator**: `protected designator?: string;`
- **done**: `done(): Promise<ISCH_PrimitiveComponent>;`
- **getstate_addintobom**: `getState_AddIntoBom(): boolean | undefined;`
- **getstate_addintopcb**: `getState_AddIntoPcb(): boolean | undefined;`
- **getstate_component**: `getState_Component(): {         libraryUuid: string;         uuid: string;     };`
- **getstate_componenttype**: `getState_ComponentType(): ESCH_PrimitiveComponentType;`
- **getstate_designator**: `getState_Designator(): string | undefined;`
- **getstate_footprint**: `getState_Footprint(): {         libraryUuid: string;         uuid: string;     } | undefined;`
- **getstate_manufacturer**: `getState_Manufacturer(): string | undefined;`
- **getstate_manufacturerid**: `getState_ManufacturerId(): string | undefined;`
- **getstate_mirror**: `getState_Mirror(): boolean;`
- **getstate_name**: `getState_Name(): string | undefined;`
- **getstate_net**: `getState_Net(): string | undefined;`
- **getstate_otherproperty**: `getState_OtherProperty(): {         [key: string]: string | number | boolean;     } | undefined;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `getState_Rotation(): number;`
- **getstate_subpartname**: `getState_SubPartName(): string | undefined;`
- **getstate_supplier**: `getState_Supplier(): string | undefined;`
- **getstate_supplierid**: `getState_SupplierId(): string | undefined;`
- **getstate_symbol**: `getState_Symbol(): {         libraryUuid: string;         uuid: string;     } | undefined;`
- **getstate_uniqueid**: `getState_UniqueId(): string | undefined;`
- **getstate_x**: `getState_X(): number;`
- **getstate_y**: `getState_Y(): number;`
- **isasync**: `isAsync(): boolean;`
- **mirror**: `protected mirror: boolean;`
- **name**: `protected name?: string;`
- **otherproperty**: `protected otherProperty?: {         [key: string]: string | number | boolean;     };`
- **primitiveid**: `protected primitiveId?: string;`
- **reset**: `reset(): Promise<ISCH_PrimitiveComponent>;`
- **rotation**: `protected rotation: number;`
- **setstate_addintobom**: `setState_AddIntoBom(addIntoBom: boolean | undefined): ISCH_PrimitiveComponent;`
- **setstate_addintopcb**: `setState_AddIntoPcb(addIntoPcb: boolean | undefined): ISCH_PrimitiveComponent;`
- **setstate_designator**: `setState_Designator(designator: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_manufacturer**: `setState_Manufacturer(manufacturer: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_manufacturerid**: `setState_ManufacturerId(manufacturerId: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_mirror**: `setState_Mirror(mirror: boolean): ISCH_PrimitiveComponent;`
- **setstate_name**: `setState_Name(name: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_net**: `setState_Net(net: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_otherproperty**: `setState_OtherProperty(otherProperty: {         [key: string]: string | number | boolean;     }): ISCH_PrimitiveComponent;`
- **setstate_rotation**: `setState_Rotation(rotation: number): ISCH_PrimitiveComponent;`
- **setstate_supplier**: `setState_Supplier(supplier: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_supplierid**: `setState_SupplierId(supplierId: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_uniqueid**: `setState_UniqueId(uniqueId: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_x**: `setState_X(x: number): ISCH_PrimitiveComponent;`
- **setstate_y**: `setState_Y(y: number): ISCH_PrimitiveComponent;`
- **toasync**: `toAsync(): ISCH_PrimitiveComponent;`
- **tosync**: `toSync(): ISCH_PrimitiveComponent;`
- **x**: `protected x: number;`
- **y**: `protected y: number;`

---

## ISCH_PrimitiveComponentPin

器件引脚图元

> 器件引脚图元是一个特殊的图元，它指的是在原理图画布上关联到符号的引脚 器件引脚图元仅可更改 `pinNumber`、`noConnected` 属性，其它所有属性均为只读， 并且你只能通过 [器件类的 getAllPinsByPrimitiveId 方法](./pro-api.sch_primitivecomponent.getallpinsbyprimitiveid.md) 或 获取到器件引脚图元

```typescript
declare class ISCH_PrimitiveComponentPin extends ISCH_PrimitivePin
```

- **getstate_noconnected**: `getState_NoConnected(): boolean;`
- **primitivetype**: `protected readonly primitiveType: ESCH_PrimitiveType.COMPONENT_PIN;`
- **setstate_noconnected**: `setState_NoConnected(noConnected: boolean): ISCH_PrimitiveComponentPin;`

---

## ISCH_PrimitivePin

引脚图元

> 引脚图元仅符号编辑器可用，在原理图图页内，关联到符号的引脚被称为 [器件引脚图元](./pro-api.isch_primitivecomponentpin.md)

```typescript
declare class ISCH_PrimitivePin implements ISCH_Primitive
```

- **async**: `protected async: boolean;`
- **done**: `done(): Promise<ISCH_PrimitivePin>;`
- **getstate_otherproperty**: `getState_OtherProperty(): {         [key: string]: string | number | boolean;     } | undefined;`
- **getstate_pincolor**: `getState_PinColor(): string | null;`
- **getstate_pinlength**: `getState_PinLength(): number;`
- **getstate_pinname**: `getState_PinName(): string;`
- **getstate_pinnumber**: `getState_PinNumber(): string;`
- **getstate_pinshape**: `getState_PinShape(): ESCH_PrimitivePinShape;`
- **getstate_pintype**: `getState_pinType(): ESCH_PrimitivePinType;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `getState_Rotation(): number;`
- **getstate_x**: `getState_X(): number;`
- **getstate_y**: `getState_Y(): number;`
- **isasync**: `isAsync(): boolean;`
- **pincolor**: `protected pinColor: string | null;`
- **pinlength**: `protected pinLength: number;`
- **pinname**: `protected pinName: string;`
- **pinnumber**: `protected pinNumber: string;`
- **pinshape**: `protected pinShape: ESCH_PrimitivePinShape;`
- **pintype**: `protected pinType: ESCH_PrimitivePinType;`
- **primitiveid**: `protected primitiveId?: string;`
- **primitivetype**: `protected readonly primitiveType: ESCH_PrimitiveType;`
- **reset**: `reset(): Promise<ISCH_PrimitivePin>;`
- **rotation**: `protected rotation: number;`
- **setstate_otherproperty**: `setState_OtherProperty(otherProperty: {         [key: string]: string | number | boolean;     }): ISCH_PrimitivePin;`
- **setstate_pincolor**: `setState_PinColor(pinColor: string | null): ISCH_PrimitivePin;`
- **setstate_pinlength**: `setState_PinLength(pinLength: number): ISCH_PrimitivePin;`
- **setstate_pinname**: `setState_PinName(pinName: string): ISCH_PrimitivePin;`
- **setstate_pinnumber**: `setState_PinNumber(pinNumber: string): ISCH_PrimitivePin;`
- **setstate_pinshape**: `setState_PinShape(pinShape: ESCH_PrimitivePinShape): ISCH_PrimitivePin;`
- **setstate_pintype**: `setState_PinType(pinType: ESCH_PrimitivePinType): ISCH_PrimitivePin;`
- **setstate_rotation**: `setState_Rotation(rotation: number): ISCH_PrimitivePin;`
- **setstate_x**: `setState_X(x: number): ISCH_PrimitivePin;`
- **setstate_y**: `setState_Y(y: number): ISCH_PrimitivePin;`
- **toasync**: `toAsync(): ISCH_PrimitivePin;`
- **tosync**: `toSync(): ISCH_PrimitivePin;`
- **x**: `protected x: number;`
- **y**: `protected y: number;`

---

## ISCH_PrimitivePolygon

多边形（折线）图元

```typescript
declare class ISCH_PrimitivePolygon implements ISCH_Primitive
```

- **done**: `done(): ISCH_PrimitivePolygon;`
- **getstate_color**: `getState_Color(): string | null;`
- **getstate_fillcolor**: `getState_FillColor(): string | null;`
- **getstate_line**: `getState_Line(): Array<number>;`
- **getstate_linetype**: `getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `getState_PrimitiveType(): ESCH_PrimitiveType;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<ISCH_PrimitivePolygon>;`
- **setstate_color**: `setState_Color(color: string | null): ISCH_PrimitivePolygon;`
- **setstate_fillcolor**: `setState_FillColor(fillColor: string | null): ISCH_PrimitivePolygon;`
- **setstate_line**: `setState_Line(line: Array<number>): ISCH_PrimitivePolygon;`
- **setstate_linetype**: `setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitivePolygon;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number | null): ISCH_PrimitivePolygon;`
- **toasync**: `toAsync(): ISCH_PrimitivePolygon;`
- **tosync**: `toSync(): ISCH_PrimitivePolygon;`

---

## ISCH_PrimitiveRectangle

矩形图元

```typescript
declare class ISCH_PrimitiveRectangle implements ISCH_Primitive
```

- **done**: `done(): ISCH_PrimitiveRectangle;`
- **getstate_color**: `getState_Color(): string | null;`
- **getstate_cornerradius**: `getState_CornerRadius(): number;`
- **getstate_fillcolor**: `getState_FillColor(): string | null;`
- **getstate_fillstyle**: `getState_FillStyle(): ESCH_PrimitiveFillStyle | null;`
- **getstate_height**: `getState_Height(): number;`
- **getstate_linetype**: `getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `getState_Rotation(): number;`
- **getstate_topleftx**: `getState_TopLeftX(): number;`
- **getstate_toplefty**: `getState_TopLeftY(): number;`
- **getstate_width**: `getState_Width(): number;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<ISCH_PrimitiveRectangle>;`
- **setstate_color**: `setState_Color(color: string | null): ISCH_PrimitiveRectangle;`
- **setstate_cornerradius**: `setState_CornerRadius(cornerRadius: number): ISCH_PrimitiveRectangle;`
- **setstate_fillcolor**: `setState_FillColor(fillColor: string | null): ISCH_PrimitiveRectangle;`
- **setstate_fillstyle**: `setState_FillStyle(fillStyle: ESCH_PrimitiveFillStyle | null): ISCH_PrimitiveRectangle;`
- **setstate_height**: `setState_Height(height: number): ISCH_PrimitiveRectangle;`
- **setstate_linetype**: `setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveRectangle;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveRectangle;`
- **setstate_rotation**: `setState_Rotation(rotation: number): ISCH_PrimitiveRectangle;`
- **setstate_topleftx**: `setState_TopLeftX(topLeftX: number): ISCH_PrimitiveRectangle;`
- **setstate_toplefty**: `setState_TopLeftY(topLeftY: number): ISCH_PrimitiveRectangle;`
- **setstate_width**: `setState_Width(width: number): ISCH_PrimitiveRectangle;`
- **toasync**: `toAsync(): ISCH_PrimitiveRectangle;`
- **tosync**: `toSync(): ISCH_PrimitiveRectangle;`

---

## ISCH_PrimitiveText

文本图元

```typescript
declare class ISCH_PrimitiveText implements ISCH_Primitive
```

- **done**: `done(): Promise<ISCH_PrimitiveText>;`
- **getstate_alignmode**: `getState_AlignMode(): ESCH_PrimitiveTextAlignMode;`
- **getstate_bold**: `getState_Bold(): boolean;`
- **getstate_content**: `getState_Content(): string;`
- **getstate_fontname**: `getState_FontName(): string | null;`
- **getstate_fontsize**: `getState_FontSize(): number | null;`
- **getstate_italic**: `getState_Italic(): boolean;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `getState_Rotation(): number;`
- **getstate_textcolor**: `getState_TextColor(): string | null;`
- **getstate_underline**: `getState_UnderLine(): boolean;`
- **getstate_x**: `getState_X(): number;`
- **getstate_y**: `getState_Y(): number;`
- **isasync**: `isAsync(): boolean;`
- **reset**: `reset(): Promise<ISCH_PrimitiveText>;`
- **setstate_alignmode**: `setState_AlignMode(alignMode: ESCH_PrimitiveTextAlignMode): ISCH_PrimitiveText;`
- **setstate_bold**: `setState_Bold(bold: boolean): ISCH_PrimitiveText;`
- **setstate_content**: `setState_Content(content: string): ISCH_PrimitiveText;`
- **setstate_fontname**: `setState_FontName(fontName: string | null): ISCH_PrimitiveText;`
- **setstate_fontsize**: `setState_FontSize(fontSize: number | null): ISCH_PrimitiveText;`
- **setstate_italic**: `setState_Italic(italic: boolean): ISCH_PrimitiveText;`
- **setstate_rotation**: `setState_Rotation(rotation: number): ISCH_PrimitiveText;`
- **setstate_textcolor**: `setState_TextColor(textColor: string | null): ISCH_PrimitiveText;`
- **setstate_underline**: `setState_UnderLine(underLine: boolean): ISCH_PrimitiveText;`
- **setstate_x**: `setState_X(x: number): ISCH_PrimitiveText;`
- **setstate_y**: `setState_Y(y: number): ISCH_PrimitiveText;`
- **toasync**: `toAsync(): ISCH_PrimitiveText;`
- **tosync**: `toSync(): ISCH_PrimitiveText;`

---

## ISCH_PrimitiveWire

导线图元

```typescript
declare class ISCH_PrimitiveWire implements ISCH_Primitive
```

- **done**: `done(): Promise<ISCH_PrimitiveWire>;`
- **getstate_color**: `getState_Color(): string | null;`
- **getstate_line**: `getState_Line(): Array<number> | Array<Array<number>>;`
- **getstate_linetype**: `getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `getState_LineWidth(): number | null;`
- **getstate_net**: `getState_Net(): string;`
- **getstate_primitiveid**: `getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `getState_PrimitiveType(): ESCH_PrimitiveType;`
- **isasync**: `isAsync(): boolean;`
- **setstate_color**: `setState_Color(color: string | null): ISCH_PrimitiveWire;`
- **setstate_line**: `setState_Line(line: Array<number> | Array<Array<number>>): ISCH_PrimitiveWire;`
- **setstate_linetype**: `setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveWire;`
- **setstate_linewidth**: `setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveWire;`
- **setstate_net**: `setState_Net(net: string): ISCH_PrimitiveWire;`
- **toasync**: `toAsync(): ISCH_PrimitiveWire;`
- **tosync**: `toSync(): ISCH_PrimitiveWire;`

---

## LIB_3DModel

综合库 / 3D 模型类

```typescript
declare class LIB_3DModel
```

- **copy**: `copy(modelUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newModelName?: string): Promise<string | undefined>;`
- **create**: `create(libraryUuid: string, modelFile: Blob, classification?: ILIB_ClassificationIndex | Array<string>, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.METER | ESYS_Unit.MIL | ESYS_Unit.INCH): Promise<string[] | undefined>;`
- **delete**: `delete(modelUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `get(modelUuid: string, libraryUuid?: string): Promise<ILIB_3DModelItem | undefined>;`
- **modify**: `modify(modelUuid: string, libraryUuid: string, modelName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;`
- **search**: `search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_3DModelSearchItem>>;`

---

## LIB_Cbb

综合库 / 复用模块类

```typescript
declare class LIB_Cbb
```

- **copy**: `copy(cbbUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newCbbName?: string): Promise<string | undefined>;`
- **create**: `create(libraryUuid: string, cbbName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;`
- **delete**: `delete(cbbUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `get(cbbUuid: string, libraryUuid?: string): Promise<ILIB_CbbItem | undefined>;`
- **modify**: `modify(cbbUuid: string, libraryUuid: string, cbbName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;`
- **openprojectineditor**: `openProjectInEditor(cbbUuid: string, libraryUuid: string): Promise<boolean>;`
- **opensymbolineditor**: `openSymbolInEditor(cbbUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **search**: `search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_CbbSearchItem>>;`

---

## LIB_Classification

综合库 / 库分类索引类

```typescript
declare class LIB_Classification
```

- **createprimary**: `createPrimary(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;`
- **createsecondary**: `createSecondary(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;`
- **deletebyindex**: `deleteByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<boolean>;`
- **deletebyuuid**: `deleteByUuid(libraryUuid: string, classificationUuid: string): Promise<boolean>;`
- **getallclassificationtree**: `getAllClassificationTree(libraryUuid: string, libraryType: ELIB_LibraryType): Promise<Array<{         name: string;         uuid: string;         children?: Array<{             name: string;             uuid: string;         }> | undefined;     }>>;`
- **getindexbyname**: `getIndexByName(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string, secondaryClassificationName?: string): Promise<ILIB_ClassificationIndex | undefined>;`
- **getnamebyindex**: `getNameByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<{         primaryClassificationName: string;         secondaryClassificationName?: string | undefined;     } | undefined>;`
- **getnamebyuuid**: `getNameByUuid(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationUuid?: string): Promise<{         primaryClassificationName: string;         secondaryClassificationName?: string | undefined;     } | undefined>;`

---

## LIB_Device

综合库 / 器件类

```typescript
declare class LIB_Device
```

- **copy**: `copy(deviceUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newDeviceName?: string): Promise<string | undefined>;`
- **create**: *(签名过长，请查看详细文档)*
- **delete**: `delete(deviceUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `get(deviceUuid: string, libraryUuid?: string): Promise<ILIB_DeviceItem | undefined>;`
- **getbylcscids**: `getByLcscIds<T extends boolean>(lcscIds: string, libraryUuid?: string, allowMultiMatch?: T): Promise<T extends true ? ILIB_DeviceSearchItem | undefined : Array<ILIB_DeviceSearchItem>>;`
- **getbylcscids_1**: `getByLcscIds(lcscIds: Array<string>, libraryUuid?: string, allowMultiMatch?: boolean): Promise<Array<ILIB_DeviceSearchItem>>;`
- **modify**: *(签名过长，请查看详细文档)*
- **search**: `search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_DeviceSearchItem>>;`

---

## LIB_Footprint

综合库 / 封装类

```typescript
declare class LIB_Footprint
```

- **copy**: `copy(footprintUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newFootprintName?: string): Promise<string | undefined>;`
- **create**: `create(libraryUuid: string, footprintName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;`
- **delete**: `delete(footprintUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `get(footprintUuid: string, libraryUuid?: string): Promise<ILIB_FootprintItem | undefined>;`
- **modify**: `modify(footprintUuid: string, libraryUuid: string, footprintName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;`
- **openineditor**: `openInEditor(footprintUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **search**: `search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_FootprintSearchItem>>;`
- **updatedocumentsource**: `updateDocumentSource(footprintUuid: string, libraryUuid: string, documentSource: string): Promise<boolean | undefined>;`

---

## LIB_LibrariesList

综合库 / 库列表类

> 此处所有接口都基于编辑器当前工作区环境，如需切换到其他工作区，请使用 [DMT\_Workspace.toggleToWorkspace()](./pro-api.dmt_workspace.toggletoworkspace.md) 接口切换工作区

```typescript
declare class LIB_LibrariesList
```

- **getalllibrarieslist**: `getAllLibrariesList(): Promise<Array<ILIB_LibraryInfo>>;`
- **getfavoritelibraryuuid**: `getFavoriteLibraryUuid(): Promise<string | undefined>;`
- **getpersonallibraryuuid**: `getPersonalLibraryUuid(): Promise<string | undefined>;`
- **getprojectlibraryuuid**: `getProjectLibraryUuid(): Promise<string | undefined>;`
- **getsystemlibraryuuid**: `getSystemLibraryUuid(): Promise<string | undefined>;`

---

## LIB_PanelLibrary

综合库 / 面板库类

```typescript
declare class LIB_PanelLibrary
```

- **copy**: `copy(panelLibraryUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newPanelLibraryName?: string): Promise<string | undefined>;`
- **create**: `create(libraryUuid: string, panelLibraryName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;`
- **delete**: `delete(panelLibraryUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `get(panelLibraryUuid: string, libraryUuid?: string): Promise<ILIB_PanelLibraryItem | undefined>;`
- **modify**: `modify(panelLibraryUuid: string, libraryUuid: string, panelLibraryName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;`
- **openineditor**: `openInEditor(panelLibraryUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **search**: `search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_PanelLibrarySearchItem>>;`

---

## LIB_SelectControl

综合库 / 选择控制类

```typescript
declare class LIB_SelectControl
```

- **getselectedlibraryrowinfo**: `getSelectedLibraryRowInfo(): Promise<ILIB_LibraryItem | undefined>;`

---

## LIB_Symbol

综合库 / 符号类

```typescript
declare class LIB_Symbol
```

- **copy**: `copy(symbolUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newSymbolName?: string): Promise<string | undefined>;`
- **create**: `create(libraryUuid: string, symbolName: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, description?: string): Promise<string | undefined>;`
- **delete**: `delete(symbolUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `get(symbolUuid: string, libraryUuid?: string): Promise<ILIB_SymbolItem | undefined>;`
- **modify**: `modify(symbolUuid: string, libraryUuid: string, symbolName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;`
- **openineditor**: `openInEditor(symbolUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **search**: `search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_SymbolSearchItem>>;`
- **updatedocumentsource**: `updateDocumentSource(symbolUuid: string, libraryUuid: string, documentSource: string): Promise<boolean | undefined>;`

---

## PCB_Document

PCB &amp; 封装 / 文档操作类

> 对设计文档总体进行的操作

```typescript
declare class PCB_Document
```

- **convertcanvasorigintodataorigin**: `convertCanvasOriginToDataOrigin(x: number, y: number): Promise<{         x: number;         y: number;     }>;`
- **convertdataorigintocanvasorigin**: `convertDataOriginToCanvasOrigin(x: number, y: number): Promise<{         x: number;         y: number;     }>;`
- **getcalculatingratlinestatus**: `getCalculatingRatlineStatus(): Promise<EPCB_DocumentRatlineCalculatingActiveStatus>;`
- **getcanvasorigin**: `getCanvasOrigin(): Promise<{         offsetX: number;         offsetY: number;     }>;`
- **getcurrentfilterconfiguration**: `getCurrentFilterConfiguration(): Promise<{         [key: string]: any;     } | undefined>;`
- **getprimitiveatpoint**: `getPrimitiveAtPoint(x: number, y: number): Promise<IPCB_Primitive | undefined>;`
- **getprimitivesinregion**: `getPrimitivesInRegion(left: number, right: number, top: number, bottom: number, leftToRight?: boolean): Promise<Array<IPCB_Primitive>>;`
- **importautolayoutjsonfile**: `importAutoLayoutJsonFile(autoLayoutFile: File): Promise<boolean>;`
- **importautoroutejsonfile**: `importAutoRouteJsonFile(autoRouteFile: File): Promise<boolean>;`
- **importautoroutesesfile**: `importAutoRouteSesFile(autoRouteFile: File): Promise<boolean>;`
- **importchanges**: `importChanges(uuid?: string): Promise<boolean>;`
- **navigatetocoordinates**: `navigateToCoordinates(x: number, y: number): Promise<boolean>;`
- **navigatetoregion**: `navigateToRegion(left: number, right: number, top: number, bottom: number): Promise<boolean>;`
- **save**: `save(uuid: string): Promise<boolean>;`
- **setcanvasorigin**: `setCanvasOrigin(offsetX: number, offsetY: number): Promise<boolean>;`
- **startcalculatingratline**: `startCalculatingRatline(): Promise<boolean>;`
- **stopcalculatingratline**: `stopCalculatingRatline(): Promise<boolean>;`
- **zoomtoboardoutline**: `zoomToBoardOutline(): Promise<boolean>;`

---

## PCB_Drc

PCB &amp; 封装 / 设计规则检查（DRC）类

> 检查、设定 DRC 规则

```typescript
declare class PCB_Drc
```

- **addnettoequallengthnetgroup**: `addNetToEqualLengthNetGroup(equalLengthNetGroupName: string, net: string | Array<string>): Promise<boolean>;`
- **addnettonetclass**: `addNetToNetClass(netClassName: string, net: string | Array<string>): Promise<boolean>;`
- **addpadpairtopadpairgroup**: `addPadPairToPadPairGroup(padPairGroupName: string, padPair: [string, string] | Array<[string, string]>): Promise<boolean>;`
- **check**: `check(strict: boolean, userInterface: boolean, includeVerboseError: false): Promise<boolean>;`
- **check_1**: `check(strict: boolean, userInterface: boolean, includeVerboseError: true): Promise<Array<any>>;`
- **createdifferentialpair**: `createDifferentialPair(differentialPairName: string, positiveNet: string, negativeNet: string): Promise<boolean>;`
- **createequallengthnetgroup**: `createEqualLengthNetGroup(equalLengthNetGroupName: string, nets: Array<string>, color: IPCB_EqualLengthNetGroupItem['color']): Promise<boolean>;`
- **createnetclass**: `createNetClass(netClassName: string, nets: Array<string>, color: IPCB_EqualLengthNetGroupItem['color']): Promise<boolean>;`
- **createpadpairgroup**: `createPadPairGroup(padPairGroupName: string, padPairs: Array<[string, string]>): Promise<boolean>;`
- **deletedifferentialpair**: `deleteDifferentialPair(differentialPairName: string): Promise<boolean>;`
- **deleteequallengthnetgroup**: `deleteEqualLengthNetGroup(equalLengthNetGroupName: string): Promise<boolean>;`
- **deletenetclass**: `deleteNetClass(netClassName: string): Promise<boolean>;`
- **deletepadpairgroup**: `deletePadPairGroup(padPairGroupName: string): Promise<boolean>;`
- **deleteruleconfiguration**: `deleteRuleConfiguration(configurationName: string): Promise<boolean>;`
- **getalldifferentialpairs**: `getAllDifferentialPairs(): Promise<Array<IPCB_DifferentialPairItem> | {         [key: string]: any;     }>;`
- **getallequallengthnetgroups**: `getAllEqualLengthNetGroups(): Promise<Array<IPCB_EqualLengthNetGroupItem>>;`
- **getallnetclasses**: `getAllNetClasses(): Promise<Array<IPCB_NetClassItem>>;`
- **getallpadpairgroups**: `getAllPadPairGroups(): Promise<Array<IPCB_PadPairGroupItem>>;`
- **getallruleconfigurations**: `getAllRuleConfigurations(includeSystem?: boolean): Promise<Array<{         [key: string]: any;     }>>;`
- **getcurrentruleconfiguration**: `getCurrentRuleConfiguration(): Promise<{         [key: string]: any;     } | undefined>;`
- **getcurrentruleconfigurationname**: `getCurrentRuleConfigurationName(): Promise<string | undefined>;`
- **getdefaultruleconfigurationname**: `getDefaultRuleConfigurationName(): Promise<string | undefined>;`
- **getnetbynetrules**: `getNetByNetRules(): Promise<{         [key: string]: any;     }>;`
- **getnetrules**: `getNetRules(): Promise<Array<{         [key: string]: any;     }>>;`
- **getpadpairgroupminwirelength**: `getPadPairGroupMinWireLength(padPairGroupName: string): Promise<Array<IPCB_PadPairMinWireLengthItem>>;`
- **getregionrules**: `getRegionRules(): Promise<Array<{         [key: string]: any;     }>>;`
- **getruleconfiguration**: `getRuleConfiguration(configurationName: string): Promise<{         [key: string]: any;     } | undefined>;`
- **modifydifferentialpairname**: `modifyDifferentialPairName(originalDifferentialPairName: string, differentialPairName: string): Promise<boolean>;`
- **modifydifferentialpairnegativenet**: `modifyDifferentialPairNegativeNet(differentialPairName: string, negativeNet: string): Promise<boolean>;`
- **modifydifferentialpairpositivenet**: `modifyDifferentialPairPositiveNet(differentialPairName: string, positiveNet: string): Promise<boolean>;`
- **modifyequallengthnetgroupname**: `modifyEqualLengthNetGroupName(originalEqualLengthNetGroupName: string, equalLengthNetGroupName: string): Promise<boolean>;`
- **modifynetclassname**: `modifyNetClassName(originalNetClassName: string, netClassName: string): Promise<boolean>;`
- **modifypadpairgroupname**: `modifyPadPairGroupName(originalPadPairGroupName: string, padPairGroupName: string): Promise<boolean>;`
- **overwritecurrentruleconfiguration**: `overwriteCurrentRuleConfiguration(ruleConfiguration: {         [key: string]: any;     }): Promise<boolean>;`
- **overwritenetbynetrules**: `overwriteNetByNetRules(netByNetRules: {         [key: string]: any;     }): Promise<boolean>;`
- **overwritenetrules**: `overwriteNetRules(netRules: Array<{         [key: string]: any;     }>): Promise<boolean>;`
- **overwriteregionrules**: `overwriteRegionRules(regionRules: Array<{         [key: string]: any;     }>): Promise<boolean>;`
- **removenetfromequallengthnetgroup**: `removeNetFromEqualLengthNetGroup(equalLengthNetGroupName: string, net: string | Array<string>): Promise<boolean>;`
- **removenetfromnetclass**: `removeNetFromNetClass(netClassName: string, net: string | Array<string>): Promise<boolean>;`
- **removepadpairfrompadpairgroup**: `removePadPairFromPadPairGroup(padPairGroupName: string, padPair: [string, string] | Array<[string, string]>): Promise<boolean>;`
- **renameruleconfiguration**: `renameRuleConfiguration(originalConfigurationName: string, configurationName: string): Promise<boolean>;`
- **saveruleconfiguration**: `saveRuleConfiguration(ruleConfiguration: {         [key: string]: any;     }, configurationName: string, allowOverwrite?: boolean): Promise<boolean>;`
- **setasdefaultruleconfiguration**: `setAsDefaultRuleConfiguration(configurationName: string): Promise<boolean>;`

---

## PCB_Event

PCB &amp; 封装 / 事件类

> 注册事件回调

```typescript
declare class PCB_Event
```

- **addcrossprobeselecteventlistener**: `addCrossProbeSelectEventListener(id: string, callFn: (props: any) => void | Promise<void>): void;`
- **addmouseeventlistener**: `addMouseEventListener(id: string, eventType: 'all' | EPCB_MouseEventType, callFn: (eventType: EPCB_MouseEventType, props: [         {             primitiveId: string;             primitiveType: EPCB_PrimitiveType;             net?: string;             designator?: string;             parentComponentPrimitiveId?: string;             parentComponentDesignator?: string;         }     ]) => void | Promise<void>, onlyOnce?: boolean): void;`
- **addneteventlistener**: `addNetEventListener(id: string, eventType: 'all' | EPCB_NetEventType, callFn: (eventType: EPCB_NetEventType, props: [{         net: string;     }]) => void | Promise<void>, onlyOnce?: boolean): void;`
- **addprimitiveeventlistener**: `addPrimitiveEventListener(id: string, eventType: 'all' | EPCB_PrimitiveEventType, callFn: (eventType: EPCB_PrimitiveEventType, props: [         {             primitiveId: string;             primitiveType: EPCB_PrimitiveType;             net?: string;             designator?: string;             parentComponentPrimitiveId?: string;             parentComponentDesignator?: string;         }     ]) => void | Promise<void>, onlyOnce?: boolean): void;`
- **iseventlisteneralreadyexist**: `isEventListenerAlreadyExist(id: string): boolean;`
- **removeeventlistener**: `removeEventListener(id: string): boolean;`

---

## PCB_Layer

PCB &amp; 封装 / 图层操作类

```typescript
declare class PCB_Layer
```

- **addcustomlayer**: `addCustomLayer(): Promise<TPCB_LayersOfCustom | undefined>;`
- **getalllayers**: `getAllLayers(): Promise<Array<IPCB_LayerItem>>;`
- **locklayer**: `lockLayer(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>): Promise<boolean>;`
- **modifylayer**: `modifyLayer(layer: TPCB_LayersInTheSelectable, property: {         name?: string;         type?: TPCB_LayerTypesOfInnerLayer;         color?: string;         transparency?: number;     }): Promise<boolean>;`
- **removelayer**: `removeLayer(layer: TPCB_LayersOfCustom): Promise<boolean>;`
- **selectlayer**: `selectLayer(layer: TPCB_LayersInTheSelectable): Promise<boolean>;`
- **setinactivelayerdisplaymode**: `setInactiveLayerDisplayMode(displayMode?: EPCB_InactiveLayerDisplayMode): Promise<boolean>;`
- **setinactivelayertransparency**: `setInactiveLayerTransparency(transparency: number): Promise<boolean>;`
- **setlayercolorconfiguration**: `setLayerColorConfiguration(colorConfiguration: EPCB_LayerColorConfiguration): Promise<boolean>;`
- **setlayerinvisible**: `setLayerInvisible(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, setOtherLayerVisible?: boolean): Promise<boolean>;`
- **setlayervisible**: `setLayerVisible(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, setOtherLayerInvisible?: boolean): Promise<boolean>;`
- **setpcbtype**: `setPcbType(pcbType: EPCB_PcbPlateType): Promise<boolean>;`
- **setthenumberofcopperlayers**: `setTheNumberOfCopperLayers(numberOfLayers: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32): Promise<boolean>;`
- **unlocklayer**: `unlockLayer(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>): Promise<boolean>;`

---

## PCB_ManufactureData

PCB &amp; 封装 / 生产资料类

> 获取当前 PCB 的生产资料文件及快捷下单

```typescript
declare class PCB_ManufactureData
```

- **deletebomtemplate**: `deleteBomTemplate(template: string): Promise<boolean>;`
- **get3dfile**: `get3DFile(fileName?: string, fileType?: 'step' | 'obj', element?: Array<'Component Model' | 'Via' | 'Silkscreen' | 'Wire In Signal Layer'>, modelMode?: 'Outfit' | 'Parts', autoGenerateModels?: boolean): Promise<File | undefined>;`
- **get3dshellfile**: `get3DShellFile(fileName?: string, fileType?: 'stl' | 'step' | 'obj'): Promise<File | undefined>;`
- **getaltiumdesignerfile**: `getAltiumDesignerFile(fileName?: string): Promise<File | undefined>;`
- **getautolayoutjsonfile**: `getAutoLayoutJsonFile(fileName?: string): Promise<File | undefined>;`
- **getautoroutejsonfile**: `getAutoRouteJsonFile(fileName?: string): Promise<File | undefined>;`
- **getbomfile**: `getBomFile(fileName?: string, fileType?: 'xlsx' | 'csv', template?: string, filterOptions?: Array<{         property: string;         includeValue: boolean | string;     }>, statistics?: Array<string>, property?: Array<string>, columns?: Array<IPCB_BomPropertiesTableColumns>): Promise<File | undefined>;`
- **getbomtemplatefile**: `getBomTemplateFile(template: string): Promise<File | undefined>;`
- **getbomtemplates**: `getBomTemplates(): Promise<Array<string>>;`
- **getdsnfile**: `getDsnFile(fileName?: string): Promise<File | undefined>;`
- **getdxffile**: `getDxfFile(fileName?: string, layers?: Array<{         layerId: number;         mirror: boolean;     }>, objects?: Array<string>): Promise<File | undefined>;`
- **getflyingprobetestfile**: `getFlyingProbeTestFile(fileName?: string): Promise<File | undefined>;`
- **getgerberfile**: *(签名过长，请查看详细文档)*
- **getidxfile**: `getIdxFile(fileName?: string): Promise<File | undefined>;`
- **getipcd356afile**: `getIpcD356AFile(fileName?: string): Promise<File | undefined>;`
- **getmanufacturedata**: `getManufactureData(): Promise<File | undefined>;`
- **getnetlistfile**: `getNetlistFile(fileName?: string, netlistType?: ESYS_NetlistType): Promise<File | undefined>;`
- **getopendatabasedoubleplusfile**: `getOpenDatabaseDoublePlusFile(fileName?: string, unit?: ESYS_Unit.INCH, otherData?: {         metallizedDrilledHoles?: boolean;         nonMetallizedDrilledHoles?: boolean;         drillTable?: boolean;         flyingProbeTestFile?: boolean;     }, layers?: Array<{         layerId: number;         mirror: boolean;     }>, objects?: Array<{         objectName: string;     }>): Promise<File | undefined>;`
- **getpadsfile**: `getPadsFile(fileName?: string): Promise<File | undefined>;`
- **getpcbinfofile**: `getPcbInfoFile(fileName?: string): Promise<File | undefined>;`
- **getpdffile**: *(签名过长，请查看详细文档)*
- **getpickandplacefile**: `getPickAndPlaceFile(fileName?: string, fileType?: 'xlsx' | 'csv', unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.MIL): Promise<File | undefined>;`
- **gettestpointfile**: `getTestPointFile(fileName?: string, fileType?: 'xlsx' | 'csv'): Promise<File | undefined>;`
- **place3dshellorder**: `place3DShellOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placecomponentsorder**: `placeComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placepcborder**: `placePcbOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placesmtcomponentsorder**: `placeSmtComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **uploadbomtemplatefile**: `uploadBomTemplateFile(templateFile: File, template?: string): Promise<string | undefined>;`

---

## PCB_MathPolygon

PCB &amp; 封装 / 多边形数学类

```typescript
declare class PCB_MathPolygon
```

- **calculatebboxheight**: `calculateBBoxHeight(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>): number;`
- **calculatebboxwidth**: `calculateBBoxWidth(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>): number;`
- **convertimagetocomplexpolygon**: `convertImageToComplexPolygon(imageBlob: Blob, imageWidth: number, imageHeight: number, tolerance?: number, simplification?: number, smoothing?: number, despeckling?: number, whiteAsBackgroundColor?: boolean, inversion?: boolean): Promise<IPCB_ComplexPolygon | undefined>;`
- **createcomplexpolygon**: `createComplexPolygon(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon | undefined;`
- **createpolygon**: `createPolygon(polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined;`
- **splitpolygon**: `splitPolygon(...complexPolygons: Array<IPCB_ComplexPolygon>): Array<IPCB_Polygon>;`

---

## PCB_Net

PCB &amp; 封装 / 网络类

```typescript
declare class PCB_Net
```

- **getallnetname**: `getAllNetName(): Promise<Array<string>>;`
- **getallnetsname**: `getAllNetsName(): Promise<Array<string>>;`
- **getallprimitivesbynet**: `getAllPrimitivesByNet(net: string, primitiveTypes?: Array<EPCB_PrimitiveType>): Promise<Array<IPCB_Primitive>>;`
- **getnetlength**: `getNetLength(net: string): Promise<number | undefined>;`
- **getnetlist**: `getNetlist(type?: ESYS_NetlistType): Promise<string>;`
- **highlightnet**: `highlightNet(net: string): Promise<boolean>;`
- **selectnet**: `selectNet(net: string): Promise<boolean>;`
- **setnetlist**: `setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<boolean>;`
- **unhighlightnet**: `unhighlightNet(net: string): Promise<boolean>;`

---

## PCB_Primitive

PCB &amp; 封装 / 图元类

> 图元的统一操作

```typescript
declare class PCB_Primitive
```

- **getprimitivesbbox**: `getPrimitivesBBox(primitiveIds: Array<string | IPCB_Primitive>): Promise<{         minX: number;         minY: number;         maxX: number;         maxY: number;     } | undefined>;`

---

## PCB_PrimitiveArc

PCB &amp; 封装 / 圆弧线图元类

> 直线和圆弧线均为导线，对应画布的线条走线和圆弧走线

```typescript
declare class PCB_PrimitiveArc implements IPCB_PrimitiveAPI
```

- **create**: `create(net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, arcAngle: number, lineWidth?: number, interactiveMode?: EPCB_PrimitiveArcInteractiveMode, primitiveLock?: boolean): Promise<IPCB_PrimitiveArc | undefined>;`
- **delete**: `delete(primitiveIds: string | IPCB_PrimitiveArc | Array<string> | Array<IPCB_PrimitiveArc>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitiveArc | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveArc>>;`
- **getall**: `getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveArc>>;`
- **getallprimitiveid**: `getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | IPCB_PrimitiveArc, property: {         net?: string;         layer?: TPCB_LayersOfLine;         startX?: number;         startY?: number;         endX?: number;         endY?: number;         arcAngle?: number;         lineWidth?: number;         interactiveMode?: EPCB_PrimitiveArcInteractiveMode;         primitiveLock?: boolean;     }): Promise<IPCB_PrimitiveArc | undefined>;`

---

## PCB_PrimitiveAttribute

PCB &amp; 封装 / 属性图元类

```typescript
declare class PCB_PrimitiveAttribute implements IPCB_PrimitiveAPI
```


---

## PCB_PrimitiveComponent

PCB &amp; 封装 / 器件图元类

```typescript
declare class PCB_PrimitiveComponent implements IPCB_PrimitiveAPI
```

- **create**: `create(component: {         libraryUuid: string;         uuid: string;     } | ILIB_DeviceItem, layer: TPCB_LayersOfComponent, x: number, y: number, rotation?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveComponent | undefined>;`
- **delete**: `delete(primitiveIds: string | IPCB_PrimitiveComponent | Array<string> | Array<IPCB_PrimitiveComponent>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitiveComponent | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveComponent>>;`
- **getall**: `getAll(layer?: TPCB_LayersOfComponent, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveComponent>>;`
- **getallpinsbyprimitiveid**: `getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<IPCB_PrimitiveComponentPad> | undefined>;`
- **getallprimitiveid**: `getAllPrimitiveId(layer?: TPCB_LayersOfComponent, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitiveDimension

PCB &amp; 封装 / 尺寸标注图元类

```typescript
declare class PCB_PrimitiveDimension implements IPCB_PrimitiveAPI
```

- **create**: `create(dimensionType: EPCB_PrimitiveDimensionType, coordinateSet: TPCB_PrimitiveDimensionCoordinateSet, layer?: TPCB_LayersOfDimension, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL, lineWidth?: number, precision?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveDimension | undefined>;`
- **delete**: `delete(primitiveIds: string | IPCB_PrimitiveDimension | Array<string> | Array<IPCB_PrimitiveDimension>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitiveDimension | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveDimension>>;`
- **getall**: `getAll(layer?: TPCB_LayersOfDimension, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveDimension>>;`
- **getallprimitiveid**: `getAllPrimitiveId(layer?: TPCB_LayersOfDimension, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | IPCB_PrimitiveDimension, property: {         dimensionType?: EPCB_PrimitiveDimensionType;         coordinateSet?: TPCB_PrimitiveDimensionCoordinateSet;         layer?: TPCB_LayersOfDimension;         unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL;         lineWidth?: number;         precision?: number;         primitiveLock?: boolean;     }): Promise<IPCB_PrimitiveDimension | undefined>;`

---

## PCB_PrimitiveFill

PCB &amp; 封装 / 填充图元类

```typescript
declare class PCB_PrimitiveFill implements IPCB_PrimitiveAPI
```

- **create**: `create(layer: TPCB_LayersOfFill, complexPolygon: IPCB_Polygon, net?: string, fillMode?: EPCB_PrimitiveFillMode, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveFill | undefined>;`
- **delete**: `delete(primitiveIds: string | IPCB_PrimitiveFill | Array<string> | Array<IPCB_PrimitiveFill>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitiveFill | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveFill>>;`
- **getall**: `getAll(layer?: TPCB_LayersOfFill, net?: string, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveFill>>;`
- **getallprimitiveid**: `getAllPrimitiveId(layer?: TPCB_LayersOfFill, net?: string, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | IPCB_PrimitiveFill, property: {         layer?: TPCB_LayersOfFill;         complexPolygon?: IPCB_Polygon;         net?: string;         fillMode?: EPCB_PrimitiveFillMode;         lineWidth?: number;         primitiveLock?: boolean;     }): Promise<IPCB_PrimitiveFill | undefined>;`

---

## PCB_PrimitiveImage

PCB &amp; 封装 / 图像图元类

```typescript
declare class PCB_PrimitiveImage implements IPCB_PrimitiveAPI
```

- **create**: `create(x: number, y: number, complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon, layer: TPCB_LayersOfImage, width?: number, height?: number, rotation?: number, horizonMirror?: boolean, primitiveLock?: boolean): Promise<IPCB_PrimitiveImage | undefined>;`
- **delete**: `delete(primitiveIds: string | IPCB_PrimitiveImage | Array<string> | Array<IPCB_PrimitiveImage>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitiveImage | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveImage>>;`
- **getall**: `getAll(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveImage>>;`
- **getallprimitiveid**: `getAllPrimitiveId(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | IPCB_PrimitiveImage, property: {         x?: number;         y?: number;         layer?: TPCB_LayersOfImage;         width?: number;         height?: number;         rotation?: number;         horizonMirror?: boolean;         primitiveLock?: boolean;     }): Promise<IPCB_PrimitiveImage | undefined>;`

---

## PCB_PrimitiveLine

PCB &amp; 封装 / 直线图元类

> 直线和圆弧线均为导线，对应画布的线条走线和圆弧走线

```typescript
declare class PCB_PrimitiveLine implements IPCB_PrimitiveAPI
```

- **create**: `create(net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveLine | undefined>;`
- **delete**: `delete(primitiveIds: string | IPCB_PrimitiveLine | Array<string> | Array<IPCB_PrimitiveLine>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitiveLine | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveLine>>;`
- **getall**: `getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveLine>>;`
- **getallprimitiveid**: `getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | IPCB_PrimitiveLine, property: {         net?: string;         layer?: TPCB_LayersOfLine;         startX?: number;         startY?: number;         endX?: number;         endY?: number;         lineWidth?: number;         primitiveLock?: boolean;     }): Promise<IPCB_PrimitiveLine | undefined>;`

---

## PCB_PrimitiveObject

PCB &amp; 封装 / 二进制内嵌对象图元类

> 彩色丝印图像属于二进制内嵌对象，需要使用二进制内嵌对象的方法创建和修改

```typescript
declare class PCB_PrimitiveObject implements IPCB_PrimitiveAPI
```

- **create**: `create(layer: TPCB_LayersOfObject, topLeftX: number, topLeftY: number, binaryData: string, width: number, height: number, rotation?: number, mirror?: boolean, fileName?: string, primitiveLock?: boolean): Promise<IPCB_PrimitiveObject | undefined>;`
- **delete**: `delete(primitiveIds: string | IPCB_PrimitiveObject | Array<string> | Array<IPCB_PrimitiveObject>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitiveObject | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveObject>>;`
- **getall**: `getAll(layer?: TPCB_LayersOfObject, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveObject>>;`
- **getallprimitiveid**: `getAllPrimitiveId(layer?: TPCB_LayersOfObject, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | IPCB_PrimitiveObject, property: {         layer?: TPCB_LayersOfObject;         topLeftX?: number;         topLeftY?: number;         binaryData?: string;         width?: number;         height?: number;         rotation?: number;         mirror?: boolean;         fileName?: string;         primitiveLock?: boolean;     }): Promise<IPCB_PrimitiveObject | undefined>;`

---

## PCB_PrimitivePad

PCB &amp; 封装 / 焊盘图元类

```typescript
declare class PCB_PrimitivePad implements IPCB_PrimitiveAPI
```

- **create**: *(签名过长，请查看详细文档)*
- **delete**: `delete(primitiveIds: string | IPCB_PrimitivePad | Array<string> | Array<IPCB_PrimitivePad>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitivePad | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePad>>;`
- **getall**: `getAll(layer?: TPCB_LayersOfPad, net?: string, primitiveLock?: boolean, padType?: EPCB_PrimitivePadType): Promise<Array<IPCB_PrimitivePad>>;`
- **getallprimitiveid**: `getAllPrimitiveId(layer?: TPCB_LayersOfPad, net?: string, primitiveLock?: boolean, padType?: EPCB_PrimitivePadType): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitivePolyline

PCB &amp; 封装 / 折线图元类

```typescript
declare class PCB_PrimitivePolyline implements IPCB_PrimitiveAPI
```

- **create**: `create(net: string, layer: TPCB_LayersOfLine, polygon: IPCB_Polygon, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePolyline | undefined>;`
- **delete**: `delete(primitiveIds: string | IPCB_PrimitivePolyline | Array<string> | Array<IPCB_PrimitivePolyline>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitivePolyline | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePolyline>>;`
- **getall**: `getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitivePolyline>>;`
- **getallprimitiveid**: `getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | IPCB_PrimitivePolyline, property: {         net?: string;         layer?: TPCB_LayersOfLine;         polygon?: IPCB_Polygon;         lineWidth?: number;         primitiveLock?: boolean;     }): Promise<IPCB_PrimitivePolyline | undefined>;`

---

## PCB_PrimitivePour

PCB &amp; 封装 / 覆铜边框图元类

```typescript
declare class PCB_PrimitivePour implements IPCB_PrimitiveAPI
```

- **create**: `create(net: string, layer: TPCB_LayersOfCopper, complexPolygon: IPCB_Polygon, pourFillMethod?: EPCB_PrimitivePourFillMethod, preserveSilos?: boolean, pourName?: string, pourPriority?: number, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePour | undefined>;`
- **delete**: `delete(primitiveIds: string | IPCB_PrimitivePour | Array<string> | Array<IPCB_PrimitivePour>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitivePour | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePour>>;`
- **getall**: `getAll(net?: string, layer?: TPCB_LayersOfCopper, primitiveLock?: boolean): Promise<Array<IPCB_PrimitivePour>>;`
- **getallprimitiveid**: `getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfCopper, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | IPCB_PrimitivePour, property: {         net?: string;         layer?: TPCB_LayersOfCopper;         complexPolygon?: IPCB_Polygon;         pourFillMethod?: EPCB_PrimitivePourFillMethod;         preserveSilos?: boolean;         pourName?: string;         pourPriority?: number;         lineWidth?: number;         primitiveLock?: boolean;     }): Promise<IPCB_PrimitivePour | undefined>;`

---

## PCB_PrimitivePoured

PCB &amp; 封装 / 覆铜填充图元类

```typescript
declare class PCB_PrimitivePoured implements IPCB_PrimitiveAPI
```

- **delete**: `delete(primitiveIds: string | IPCB_PrimitivePoured | Array<string> | Array<IPCB_PrimitivePoured>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitivePoured | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePoured>>;`
- **getall**: `getAll(): Promise<Array<IPCB_PrimitivePoured>>;`
- **getallprimitiveid**: `getAllPrimitiveId(): Promise<Array<string>>;`

---

## PCB_PrimitiveRegion

PCB &amp; 封装 / 禁止区域和约束区域图元类

```typescript
declare class PCB_PrimitiveRegion implements IPCB_PrimitiveAPI
```

- **create**: `create(layer: TPCB_LayersOfRegion, complexPolygon: IPCB_Polygon, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, regionName?: string, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveRegion | undefined>;`
- **delete**: `delete(primitiveIds: string | IPCB_PrimitiveRegion | Array<string> | Array<IPCB_PrimitiveRegion>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitiveRegion | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveRegion>>;`
- **getall**: `getAll(layer?: TPCB_LayersOfRegion, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveRegion>>;`
- **getallprimitiveid**: `getAllPrimitiveId(layer?: TPCB_LayersOfRegion, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | IPCB_PrimitiveRegion, property: {         layer?: TPCB_LayersOfRegion;         complexPolygon?: IPCB_Polygon;         ruleType?: Array<EPCB_PrimitiveRegionRuleType>;         regionName?: string;         lineWidth?: number;         primitiveLock?: boolean;     }): Promise<IPCB_PrimitiveRegion | undefined>;`

---

## PCB_PrimitiveString

PCB &amp; 封装 / 文本图元类

```typescript
declare class PCB_PrimitiveString implements IPCB_PrimitiveAPI
```


---

## PCB_PrimitiveVia

PCB &amp; 封装 / 过孔图元类

```typescript
declare class PCB_PrimitiveVia implements IPCB_PrimitiveAPI
```

- **create**: `create(net: string, x: number, y: number, holeDiameter: number, diameter: number, viaType?: EPCB_PrimitiveViaType, designRuleBlindViaName?: string | null, solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, primitiveLock?: boolean): Promise<IPCB_PrimitiveVia | undefined>;`
- **delete**: `delete(primitiveIds: string | IPCB_PrimitiveVia | Array<string> | Array<IPCB_PrimitiveVia>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<IPCB_PrimitiveVia | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveVia>>;`
- **getall**: `getAll(net?: string, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveVia>>;`
- **getallprimitiveid**: `getAllPrimitiveId(net?: string, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | IPCB_PrimitiveVia, property: {         net?: string;         x?: number;         y?: number;         holeDiameter?: number;         diameter?: number;         viaType?: EPCB_PrimitiveViaType;         designRuleBlindViaName?: string | null;         solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;         primitiveLock?: boolean;     }): Promise<IPCB_PrimitiveVia | undefined>;`

---

## PCB_SelectControl

PCB &amp; 封装 / 选择控制类

> 获取或操作选择的元素

```typescript
declare class PCB_SelectControl
```

- **clearselected**: `clearSelected(): Promise<boolean>;`
- **docrossprobeselect**: `doCrossProbeSelect(components?: Array<string>, pins?: Array<string>, nets?: Array<string>, highlight?: boolean, select?: boolean): Promise<boolean>;`
- **doselectprimitives**: `doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;`
- **getallselectedprimitives**: `getAllSelectedPrimitives(): Promise<Array<IPCB_Primitive>>;`
- **getallselectedprimitives_primitiveid**: `getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;`
- **getcurrentmouseposition**: `getCurrentMousePosition(): Promise<{         x: number;         y: number;     } | undefined>;`
- **getselectedprimitives**: `getSelectedPrimitives(): Promise<Array<Object>>;`

---

## PNL_Document

面板 / 文档操作类

> 对设计文档总体进行的操作

```typescript
declare class PNL_Document
```

- **save**: `save(): Promise<boolean>;`

---

## SCH_Document

原理图 &amp; 符号 / 文档操作类

> 对设计文档总体进行的操作

```typescript
declare class SCH_Document
```

- **autolayout**: *(签名过长，请查看详细文档)*
- **autorouting**: *(签名过长，请查看详细文档)*
- **importchanges**: `importChanges(): Promise<boolean>;`
- **save**: `save(): Promise<boolean>;`

---

## SCH_Drc

原理图 &amp; 符号 / 设计规则检查（DRC）类

> 检查、设定 DRC 规则

```typescript
declare class SCH_Drc
```

- **check**: `check(strict: boolean, userInterface: boolean, includeVerboseError: false): Promise<boolean>;`
- **check_1**: `check(strict: boolean, userInterface: boolean, includeVerboseError: true): Promise<Array<any>>;`

---

## SCH_Event

原理图 &amp; 符号 / 事件类

> 注册事件回调

```typescript
declare class SCH_Event
```

- **addmouseeventlistener**: `addMouseEventListener(id: string, eventType: 'all' | ESCH_MouseEventType, callFn: (eventType: ESCH_MouseEventType) => void | Promise<void>, onlyOnce?: boolean): void;`
- **addprimitiveeventlistener**: `addPrimitiveEventListener(id: string, eventType: 'all' | ESCH_PrimitiveEventType, callFn: (eventType: ESCH_PrimitiveEventType, props: {         primitiveIds: Array<string>;     }) => void | Promise<void>, onlyOnce?: boolean): void;`
- **addsimulationenginepulleventlistener**: `addSimulationEnginePullEventListener(id: string, eventType: 'all', callFn: (eventType: ESCH_DynamicSimulationEnginePullEventType | ESCH_SpiceSimulationEnginePullEventType, props: {         [key: string]: any;     }) => void | Promise<void>): void;`
- **iseventlisteneralreadyexist**: `isEventListenerAlreadyExist(id: string): boolean;`
- **removeeventlistener**: `removeEventListener(id: string): boolean;`

---

## SCH_ManufactureData

原理图 &amp; 符号 / 生产资料类

> 获取当前原理图图页的生产资料文件及快捷下单

```typescript
declare class SCH_ManufactureData
```

- **getassemblyvariantsconfigs**: `getAssemblyVariantsConfigs(): Promise<Array<{         text: string;         value: string;     }>>;`
- **getbomfile**: `getBomFile(fileName?: string, fileType?: 'xlsx' | 'csv', template?: string, filterOptions?: Array<{         property: string;         includeValue: boolean | string;     }>, statistics?: Array<string>, property?: Array<string>, columns?: Array<IPCB_BomPropertiesTableColumns>, assemblyVariantsConfig?: {         text: string;         value: string;     }): Promise<File | undefined>;`
- **getexportdocumentfile**: *(签名过长，请查看详细文档)*
- **getnetlistfile**: `getNetlistFile(fileName?: string, netlistType?: ESYS_NetlistType): Promise<File | undefined>;`
- **getsimulationnetlistfile**: `getSimulationNetlistFile(fileName?: string, netlistType?: ESCH_SimulationNetlistType): Promise<File | undefined>;`
- **placecomponentsorder**: `placeComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placesmtcomponentsorder**: `placeSmtComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`

---

## SCH_Netlist

原理图 &amp; 符号 / 网表类

> 获取、更新网表

```typescript
declare class SCH_Netlist
```

- **getnetlist**: `getNetlist(type?: ESYS_NetlistType): Promise<string>;`
- **setnetlist**: `setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<void>;`

---

## SCH_Primitive

原理图 &amp; 符号 / 图元类

> 图元的统一操作

```typescript
declare class SCH_Primitive
```

- **getprimitivebyprimitiveid**: `getPrimitiveByPrimitiveId(id: string): Promise<ISCH_Primitive | undefined>;`
- **getprimitivesbbox**: `getPrimitivesBBox(primitiveIds: Array<string | ISCH_Primitive>): Promise<{         minX: number;         minY: number;         maxX: number;         maxY: number;     } | undefined>;`
- **getprimitivetypebyprimitiveid**: `getPrimitiveTypeByPrimitiveId(id: string): Promise<ESCH_PrimitiveType | undefined>;`

---

## SCH_PrimitiveArc

原理图 &amp; 符号 / 圆弧图元类

```typescript
declare class SCH_PrimitiveArc implements ISCH_PrimitiveAPI
```

- **create**: `create(startX: number, startY: number, referenceX: number, referenceY: number, endX: number, endY: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveArc | undefined>;`
- **delete**: `delete(primitiveIds: string | ISCH_PrimitiveArc | Array<string> | Array<ISCH_PrimitiveArc>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<ISCH_PrimitiveArc | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveArc>>;`
- **getall**: `getAll(): Promise<Array<ISCH_PrimitiveArc>>;`
- **getallprimitiveid**: `getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | ISCH_PrimitiveArc, property: {         startX?: number;         startY?: number;         referenceX?: number;         referenceY?: number;         endX?: number;         endY?: number;         color?: string | null;         fillColor?: string | null;         lineWidth?: number | null;         lineType?: ESCH_PrimitiveLineType | null;     }): Promise<ISCH_PrimitiveArc | undefined>;`

---

## SCH_PrimitiveAttribute

原理图 &amp; 符号 / 属性图元类

```typescript
declare class SCH_PrimitiveAttribute implements ISCH_PrimitiveAPI
```

- **get**: `get(primitiveIds: string): Promise<ISCH_PrimitiveAttribute | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveAttribute>>;`
- **getall**: `getAll(parentPrimitiveId?: string): Promise<Array<ISCH_PrimitiveAttribute>>;`
- **getallprimitiveid**: `getAllPrimitiveId(parentPrimitiveId?: string): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## SCH_PrimitiveBus

原理图 &amp; 符号 / 总线图元类

```typescript
declare class SCH_PrimitiveBus implements ISCH_PrimitiveAPI
```

- **create**: `create(busName: string, line: Array<number> | Array<Array<number>>, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveBus | undefined>;`
- **delete**: `delete(primitiveIds: string | ISCH_PrimitiveBus | Array<string> | Array<ISCH_PrimitiveBus>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<ISCH_PrimitiveBus | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveBus>>;`
- **getall**: `getAll(): Promise<Array<ISCH_PrimitiveBus>>;`
- **getallprimitiveid**: `getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | ISCH_PrimitiveBus, property: {         busName?: string;         line?: Array<number> | Array<Array<number>>;         color?: string | null;         lineWidth?: number | null;         lineType?: ESCH_PrimitiveLineType | null;     }): Promise<ISCH_PrimitiveBus | undefined>;`

---

## SCH_PrimitiveCircle

原理图 &amp; 符号 / 圆图元类

```typescript
declare class SCH_PrimitiveCircle implements ISCH_PrimitiveAPI
```

- **create**: `create(centerX: number, centerY: number, radius: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveCircle>;`
- **delete**: `delete(primitiveIds: string | ISCH_PrimitiveCircle | Array<string> | Array<ISCH_PrimitiveCircle>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<ISCH_PrimitiveCircle | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveCircle>>;`
- **getall**: `getAll(): Promise<Array<ISCH_PrimitiveCircle>>;`
- **getallprimitiveid**: `getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | ISCH_PrimitiveCircle, property: {         centerX?: number;         centerY?: number;         radius?: number;         color?: string | null;         fillColor?: string | null;         lineWidth?: number | null;         lineType?: ESCH_PrimitiveLineType | null;         fillStyle?: ESCH_PrimitiveFillStyle | null;     }): Promise<ISCH_PrimitiveCircle | undefined>;`

---

## SCH_PrimitiveComponent

原理图 &amp; 符号 / 器件图元类

```typescript
declare class SCH_PrimitiveComponent implements ISCH_PrimitiveAPI
```

- **create**: `create(component: {         libraryUuid: string;         uuid: string;     } | ILIB_DeviceItem | ILIB_DeviceSearchItem, x: number, y: number, subPartName?: string, rotation?: number, mirror?: boolean, addIntoBom?: boolean, addIntoPcb?: boolean): Promise<ISCH_PrimitiveComponent$1 | undefined>;`
- **createnetflag**: `createNetFlag(identification: 'Power' | 'Ground' | 'AnalogGround' | 'ProtectGround', net: string, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent$1 | undefined>;`
- **createnetport**: `createNetPort(direction: 'IN' | 'OUT' | 'BI', net: string, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent$1 | undefined>;`
- **createshortcircuitflag**: `createShortCircuitFlag(x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent$1 | undefined>;`
- **delete**: `delete(primitiveIds: string | ISCH_PrimitiveComponent$1 | Array<string> | Array<ISCH_PrimitiveComponent$1>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<ISCH_PrimitiveComponent$1 | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveComponent$1>>;`
- **getall**: `getAll(componentType?: ESCH_PrimitiveComponentType$1, allSchematicPages?: boolean): Promise<Array<ISCH_PrimitiveComponent$1>>;`
- **getallpinsbyprimitiveid**: `getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<ISCH_PrimitiveComponentPin> | undefined>;`
- **getallprimitiveid**: `getAllPrimitiveId(componentType?: ESCH_PrimitiveComponentType$1, allSchematicPages?: boolean): Promise<Array<string>>;`
- **getallpropertynames**: `getAllPropertyNames(): Promise<string[]>;`
- **modify**: *(签名过长，请查看详细文档)*
- **placecomponentwithmouse**: `placeComponentWithMouse(component: {         libraryUuid: string;         uuid: string;     } | ILIB_DeviceItem, subPartName?: string): Promise<boolean>;`
- **setnetflagcomponentuuid_analogground**: `setNetFlagComponentUuid_AnalogGround(component: {         libraryUuid: string;         uuid: string;     } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetflagcomponentuuid_ground**: `setNetFlagComponentUuid_Ground(component: {         libraryUuid: string;         uuid: string;     } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetflagcomponentuuid_power**: `setNetFlagComponentUuid_Power(component: {         libraryUuid: string;         uuid: string;     } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetflagcomponentuuid_protectground**: `setNetFlagComponentUuid_ProtectGround(component: {         libraryUuid: string;         uuid: string;     } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetportcomponentuuid_bi**: `setNetPortComponentUuid_BI(component: {         libraryUuid: string;         uuid: string;     } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetportcomponentuuid_in**: `setNetPortComponentUuid_IN(component: {         libraryUuid: string;         uuid: string;     } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetportcomponentuuid_out**: `setNetPortComponentUuid_OUT(component: {         libraryUuid: string;         uuid: string;     } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`

---

## SCH_PrimitivePin

原理图 &amp; 符号 / 引脚图元类

> 引脚图元仅符号编辑器可用，在原理图图页内，关联到符号的引脚被称为 [器件引脚图元](./pro-api.isch_primitivecomponentpin.md)

```typescript
declare class SCH_PrimitivePin implements ISCH_PrimitiveAPI
```

- **create**: `create(x: number, y: number, pinNumber: string, pinName?: string, rotation?: number, pinLength?: number, pinColor?: string | null, pinShape?: ESCH_PrimitivePinShape, pinType?: ESCH_PrimitivePinType): Promise<ISCH_PrimitivePin | undefined>;`
- **delete**: `delete(primitiveIds: string | ISCH_PrimitivePin | Array<string> | Array<ISCH_PrimitivePin>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin>>;`
- **getall**: `getAll(): Promise<Array<ISCH_PrimitivePin>>;`
- **getallprimitiveid**: `getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | ISCH_PrimitivePin | ISCH_PrimitiveComponentPin, property: {         x?: number;         y?: number;         pinNumber?: string;         pinName?: string;         rotation?: number;         pinLength?: number;         pinColor?: string | null;         pinShape?: ESCH_PrimitivePinShape;         pinType?: ESCH_PrimitivePinType;     }): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;`

---

## SCH_PrimitivePolygon

原理图 &amp; 符号 / 多边形（折线）图元类

```typescript
declare class SCH_PrimitivePolygon implements ISCH_PrimitiveAPI
```

- **create**: `create(line: Array<number>, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitivePolygon | undefined>;`
- **delete**: `delete(primitiveIds: string | ISCH_PrimitivePolygon | Array<string> | Array<ISCH_PrimitivePolygon>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<ISCH_PrimitivePolygon | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePolygon>>;`
- **getall**: `getAll(): Promise<Array<ISCH_PrimitivePolygon>>;`
- **getallprimitiveid**: `getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | ISCH_PrimitivePolygon, property: {         line?: Array<number>;         color?: string | null;         fillColor?: string | null;         lineWidth?: number | null;         lineType?: ESCH_PrimitiveLineType | null;     }): Promise<ISCH_PrimitivePolygon | undefined>;`

---

## SCH_PrimitiveRectangle

原理图 &amp; 符号 / 矩形图元类

```typescript
declare class SCH_PrimitiveRectangle implements ISCH_PrimitiveAPI
```

- **create**: `create(topLeftX: number, topLeftY: number, width: number, height: number, cornerRadius?: number, rotation?: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveRectangle | undefined>;`
- **delete**: `delete(primitiveIds: string | ISCH_PrimitiveRectangle | Array<string> | Array<ISCH_PrimitiveRectangle>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<ISCH_PrimitiveRectangle | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveRectangle>>;`
- **getall**: `getAll(): Promise<Array<ISCH_PrimitiveRectangle>>;`
- **getallprimitiveid**: `getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | ISCH_PrimitiveRectangle, property: {         topLeftX?: number;         topLeftY?: number;         width?: number;         height?: number;         cornerRadius?: number;         rotation?: number;         color?: string | null;         fillColor?: string | null;         lineWidth?: number | null;         lineType?: ESCH_PrimitiveLineType | null;         fillStyle?: ESCH_PrimitiveFillStyle | null;     }): Promise<ISCH_PrimitiveRectangle | undefined>;`

---

## SCH_PrimitiveText

原理图 &amp; 符号 / 文本图元类

```typescript
declare class SCH_PrimitiveText implements ISCH_PrimitiveAPI
```

- **create**: `create(x: number, y: number, content: string, rotation?: number, textColor?: string | null, fontName?: string | null, fontSize?: number | null, bold?: boolean, italic?: boolean, underLine?: boolean, alignMode?: ESCH_PrimitiveTextAlignMode): Promise<ISCH_PrimitiveText | undefined>;`
- **delete**: `delete(primitiveIds: string | ISCH_PrimitiveText | Array<string> | Array<ISCH_PrimitiveText>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<ISCH_PrimitiveText | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveText>>;`
- **getall**: `getAll(): Promise<Array<ISCH_PrimitiveText>>;`
- **getallprimitiveid**: `getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | ISCH_PrimitiveText, property: {         x?: number;         y?: number;         content?: string;         rotation?: number;         textColor?: string | null;         fontName?: string | null;         fontSize?: number | null;         bold?: boolean;         italic?: boolean;         underLine?: boolean;         alignMode?: ESCH_PrimitiveTextAlignMode;     }): Promise<ISCH_PrimitiveText | undefined>;`

---

## SCH_PrimitiveWire

原理图 &amp; 符号 / 导线图元类

```typescript
declare class SCH_PrimitiveWire implements ISCH_PrimitiveAPI
```

- **create**: `create(line: Array<number> | Array<Array<number>>, net?: string, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveWire | undefined>;`
- **delete**: `delete(primitiveIds: string | ISCH_PrimitiveWire | Array<string> | Array<ISCH_PrimitiveWire>): Promise<boolean>;`
- **get**: `get(primitiveIds: string): Promise<ISCH_PrimitiveWire | undefined>;`
- **get_1**: `get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveWire>>;`
- **getall**: `getAll(net?: string | Array<string>): Promise<Array<ISCH_PrimitiveWire>>;`
- **getallprimitiveid**: `getAllPrimitiveId(net?: string | Array<string>): Promise<Array<string>>;`
- **modify**: `modify(primitiveId: string | ISCH_PrimitiveWire, property: {         line?: Array<number> | Array<Array<number>>;         net?: string;         color?: string | null;         lineWidth?: number | null;         lineType?: ESCH_PrimitiveLineType | null;     }): Promise<ISCH_PrimitiveWire | undefined>;`

---

## SCH_SelectControl

原理图 &amp; 符号 / 选择控制类

> 获取或操作选择的元素

```typescript
declare class SCH_SelectControl
```

- **clearselected**: `clearSelected(): boolean;`
- **docrossprobeselect**: `doCrossProbeSelect(components?: Array<string>, pins?: Array<string>, nets?: Array<string>, highlight?: boolean, select?: boolean): boolean;`
- **doselectprimitives**: `doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;`
- **getallselectedprimitives**: `getAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;`
- **getallselectedprimitives_primitiveid**: `getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;`
- **getcurrentmouseposition**: `getCurrentMousePosition(): Promise<{         x: number;         y: number;     } | undefined>;`
- **getselectedprimitives**: `getSelectedPrimitives(): Promise<Array<Object>>;`
- **getselectedprimitives_primitiveid**: `getSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;`
- **refactorgetallselectedprimitives**: `refactorGetAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;`

---

## SCH_SimulationEngine

原理图 &amp; 符号 / 仿真引擎类

> 控制仿真引擎的对接和交互

```typescript
declare class SCH_SimulationEngine
```

- **pushdata**: `pushData(eventType: ESCH_DynamicSimulationEnginePushEventType | ESCH_SpiceSimulationEnginePushEventType, props: {         [key: string]: any;     }): void;`

---

## SCH_Utils

原理图 &amp; 符号 / 工具类

```typescript
declare class SCH_Utils
```


---

## SYS_ClientUrl

系统 / 外部请求类

> 向外部服务器发起安全的 cURL 请求

```typescript
declare class SYS_ClientUrl
```

- **request**: `request(url: string, method?: 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH', data?: string | Blob | FormData | URLSearchParams, options?: {         headers?: {             [header: string]: any;         };         integrity?: string;     }, succeedCallFn?: (data: Response) => void | Promise<void>): Promise<Response>;`

---

## SYS_Dialog

系统 / 对话框类

> 生成对话框窗口

```typescript
declare class SYS_Dialog
```

- **showconfirmationmessage**: `showConfirmationMessage(content: string, title?: string, mainButtonTitle?: string, buttonTitle?: string, callbackFn?: (mainButtonClicked: boolean) => void): void;`
- **showinformationmessage**: `showInformationMessage(content: string, title?: string, buttonTitle?: string): void;`
- **showinputdialog**: *(签名过长，请查看详细文档)*
- **showselectdialog**: `showSelectDialog(options: Array<string> | Array<{         value: string;         displayContent: string;     }>, beforeContent?: string, afterContent?: string, title?: string, defaultOption?: string, multiple?: false, callbackFn?: (value: string) => void | Promise<void>): void;`
- **showselectdialog_1**: `showSelectDialog(options: Array<string> | Array<{         value: string;         displayContent: string;     }>, beforeContent?: string, afterContent?: string, title?: string, defaultOption?: Array<string>, multiple?: true, callbackFn?: (value: Array<string>) => void | Promise<void>): void;`

---

## SYS_Environment

系统 / 运行环境类

> 获取嘉立创 EDA 专业版运行环境参数

```typescript
declare class SYS_Environment
```

- **geteditorcomplieddate**: `getEditorCompliedDate(): string;`
- **geteditorcurrentversion**: `getEditorCurrentVersion(): string;`
- **getuserinfo**: `getUserInfo(): {         username?: string;         nickname?: string;         avatar?: string;         uuid?: string;         customerCode?: string;     };`
- **isclient**: `isClient(): boolean;`
- **iseasyedaproedition**: `isEasyEDAProEdition(): boolean;`
- **ishalfofflinemode**: `isHalfOfflineMode(): boolean;`
- **isjlcedaproedition**: `isJLCEDAProEdition(): boolean;`
- **isofflinemode**: `isOfflineMode(): boolean;`
- **isonlinemode**: `isOnlineMode(): boolean;`
- **isproprivateedition**: `isProPrivateEdition(): boolean;`
- **isweb**: `isWeb(): boolean;`

---

## SYS_FileManager

系统 / 文件管理类

```typescript
declare class SYS_FileManager
```

- **extractlibinfo**: `extractLibInfo(data: File | Array<File>): Promise<any>;`
- **extractprojectinfo**: `extractProjectInfo(data: File): Promise<any>;`
- **getcbbfilebycbbuuid**: `getCbbFileByCbbUuid(cbbUuid: string, libraryUuid?: string, props?: {         fileName?: string;         password?: string;         fileType?: 'epro' | 'epro2';         templateSchematicUuid?: string;         templatePcbUuid?: string;     }): Promise<File | undefined>;`
- **getdevicefilebydeviceuuid**: `getDeviceFileByDeviceUuid(deviceUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;`
- **getdocumentfile**: `getDocumentFile(fileName?: string, password?: string, fileType?: 'epro' | 'epro2'): Promise<File | undefined>;`
- **getdocumentfootprintsources**: `getDocumentFootprintSources(): Promise<Array<{         footprintUuid: string;         documentSource: string;     }>>;`
- **getdocumentsource**: `getDocumentSource(): Promise<string | undefined>;`
- **getfootprintfilebyfootprintuuid**: `getFootprintFileByFootprintUuid(footprintUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;`
- **getpanellibraryfilebypanellibraryuuid**: `getPanelLibraryFileByPanelLibraryUuid(panelLibraryUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;`
- **getprojectfile**: `getProjectFile(fileName?: string, password?: string, fileType?: 'epro' | 'epro2'): Promise<File | undefined>;`
- **getprojectfilebyprojectuuid**: `getProjectFileByProjectUuid(projectUuid: string, fileName?: string, password?: string, fileType?: 'epro' | 'epro2'): Promise<File | undefined>;`
- **importprojectbyprojectfile**: *(签名过长，请查看详细文档)*
- **importprojectbyprojectfile_1**: *(签名过长，请查看详细文档)*
- **setdocumentsource**: `setDocumentSource(source: string): Promise<boolean>;`

---

## SYS_FileSystem

系统 / 文件系统交互类

```typescript
declare class SYS_FileSystem
```

- **deletefileinfilesystem**: `deleteFileInFileSystem(uri: string, force?: boolean): Promise<boolean>;`
- **getdocumentspath**: `getDocumentsPath(): Promise<string>;`
- **getedapath**: `getEdaPath(): Promise<string>;`
- **getextensionfile**: `getExtensionFile(uri: string): Promise<File | undefined>;`
- **getlibrariespaths**: `getLibrariesPaths(): Promise<Array<string>>;`
- **getprojectspaths**: `getProjectsPaths(): Promise<Array<string>>;`
- **listfilesoffilesystem**: `listFilesOfFileSystem(folderPath: string, recursive?: boolean): Promise<Array<ISYS_FileSystemFileList>>;`
- **openreadfiledialog**: `openReadFileDialog(filenameExtensions?: string | Array<string>, multiFiles?: true): Promise<Array<File> | undefined>;`
- **openreadfiledialog_1**: `openReadFileDialog(filenameExtensions?: string | Array<string>, multiFiles?: false): Promise<File | undefined>;`
- **readfilefromfilesystem**: `readFileFromFileSystem(uri: string): Promise<File | undefined>;`
- **savefile**: `saveFile(fileData: File | Blob, fileName?: string): Promise<void>;`
- **savefiletofilesystem**: `saveFileToFileSystem(uri: string, fileData: File | Blob, fileName?: string, force?: boolean): Promise<boolean>;`

---

## SYS_FontManager

系统 / 字体管理类

> 配置嘉立创 EDA 专业版允许调用的系统字体列表

```typescript
declare class SYS_FontManager
```

- **addfont**: `addFont(fontName: string): Promise<boolean>;`
- **deletefont**: `deleteFont(fontName: string): Promise<boolean>;`
- **getfontslist**: `getFontsList(): Promise<Array<string>>;`

---

## SYS_FormatConversion

系统 / 格式转换（Chameleon）类

> 与其它板级 EDA 软件进行交叉文件格式转换

```typescript
declare class SYS_FormatConversion
```

- **convertaltiumdesignerlibrariestoeasyedamultifiles**: `convertAltiumDesignerLibrariesToEasyEDAMultiFiles(file: File | Array<File>): Promise<Array<File>>;`
- **convertaltiumdesignerlibrariestoeasyedasinglefile**: `convertAltiumDesignerLibrariesToEasyEDASingleFile(file: File | Array<File>): Promise<File | undefined>;`

---

## SYS_HeaderMenu

系统 / 顶部菜单类

```typescript
declare class SYS_HeaderMenu
```

- **insertheadermenus**: `insertHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>;`
- **insertsystemheadermenuitem**: `insertSystemHeaderMenuItem(env: ESYS_HeaderMenuEnvironment, id: Array<string>, props: {         title: string;         registerFn?: string;         menuItems?: Array<ISYS_HeaderMenuSub1MenuItem | ISYS_HeaderMenuSub2MenuItem | null>;         insertDividerBefore?: boolean;         insertDividerAfter?: boolean;         insertBefore?: string;         crossDividerWhenInsert?: boolean;     }): Promise<string | undefined>;`
- **removeheadermenus**: `removeHeaderMenus(): void;`
- **removesystemheadermenuitem**: `removeSystemHeaderMenuItem(id: Array<string>, props?: {         removeTheBeforeDivider?: boolean;         removeTheAfterDivider?: boolean;     }): Promise<boolean>;`
- **replaceheadermenus**: `replaceHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>;`

---

## SYS_I18n

系统 / 多语言类

> 使用多语言系统展示多语言文本

```typescript
declare class SYS_I18n
```

- **addlanguagechangedeventlistener**: `addLanguageChangedEventListener(id: string, callFn: (newLanguage: string, lastLanguage: string) => void | Promise<void>, onlyOnce: boolean): void;`
- **getallsupportedlanguages**: `getAllSupportedLanguages(): Array<string>;`
- **getcurrentlanguage**: `getCurrentLanguage(): Promise<string>;`
- **importmultilingual**: `importMultilingual(language: string, source: ISYS_LanguageKeyValuePairs): boolean;`
- **importmultilinguallanguage**: `importMultilingualLanguage(namespace: string, language: string, source: ISYS_LanguageKeyValuePairs): boolean;`
- **importmultilingualnamespace**: `importMultilingualNamespace(namespace: string, source: ISYS_MultilingualLanguagesData): boolean;`
- **iseventlisteneralreadyexist**: `isEventListenerAlreadyExist(id: string): boolean;`
- **islanguagesupported**: `isLanguageSupported(language: string): boolean;`
- **removeeventlistener**: `removeEventListener(id: string): boolean;`
- **text**: `text(tag: string, namespace?: string, language?: string, ...args: Array<any>): string;`

---

## SYS_IFrame

系统 / 内联框架窗口类

```typescript
declare class SYS_IFrame
```

- **closeiframe**: `closeIFrame(id?: string): Promise<boolean>;`
- **hideiframe**: `hideIFrame(id?: string): Promise<boolean>;`
- **openiframe**: `openIFrame(htmlFileName: string, width?: number, height?: number, id?: string, props?: {         maximizeButton?: boolean;         minimizeButton?: boolean;         minimizeStyle?: 'collapsed' | 'constricted';         buttonCallbackFn?: (button: 'close' | 'minimize' | 'maximize') => void | Promise<void>;         onBeforeCloseCallFn?: () => boolean | undefined | Promise<boolean | undefined>;         grayscaleMask?: boolean;         title?: string;     }): Promise<boolean>;`
- **showiframe**: `showIFrame(id?: string): Promise<boolean>;`

---

## SYS_LoadingAndProgressBar

系统 / 加载与进度条类

```typescript
declare class SYS_LoadingAndProgressBar
```

- **destroyloading**: `destroyLoading(): void;`
- **destroyprogressbar**: `destroyProgressBar(): void;`
- **showloading**: `showLoading(): void;`
- **showprogressbar**: `showProgressBar(progress?: number, title?: string): void;`

---

## SYS_Log

系统 / 日志类

```typescript
declare class SYS_Log
```

- **add**: `add(message: string, type?: ESYS_LogType): void;`
- **clear**: `clear(): void;`
- **export**: `export(types?: ESYS_LogType | Array<ESYS_LogType>): void;`
- **find**: `find(message: string | Array<string | {         text: string;         attr?: {             id?: string;             path?: string;             sheet?: string;             pcbid?: string;             type?: string;         };     }>, types?: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>;`
- **sort**: `sort(types?: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>;`

---

## SYS_Message

系统 / 消息通知类

> 生成各种对用户的非侵入式提醒

```typescript
declare class SYS_Message
```

- **removefollowmousetip**: `removeFollowMouseTip(tip?: string): Promise<void>;`
- **showfollowmousetip**: `showFollowMouseTip(tip: string, msTimeout?: number): Promise<void>;`
- **showtoastmessage**: `showToastMessage(message: string, messageType?: ESYS_ToastMessageType, timer?: number, bottomPanel?: ESYS_BottomPanelTab, buttonTitle?: string, buttonCallbackFn?: string): void;`

---

## SYS_MessageBox

系统 / 消息框类

> 生成消息提示框

```typescript
declare class SYS_MessageBox
```

- **showconfirmationmessage**: `showConfirmationMessage(content: string, title?: string, mainButtonTitle?: string, buttonTitle?: string, callbackFn?: (mainButtonClicked: boolean) => void): void;`
- **showinformationmessage**: `showInformationMessage(content: string, title?: string, buttonTitle?: string): void;`

---

## SYS_MessageBus

系统 / 消息总线类

```typescript
declare class SYS_MessageBus
```

- **createprivatemessagebus**: `createPrivateMessageBus(): void;`
- **publish**: `publish(topic: string, message: any): void;`
- **publishpublic**: `publishPublic(topic: string, message: any): void;`
- **pull**: `pull(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **pullasync**: `pullAsync(topic: string): Promise<any>;`
- **pullasyncpublic**: `pullAsyncPublic(topic: string): Promise<any>;`
- **pullpublic**: `pullPublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **push**: `push(topic: string, message: any): void;`
- **pushpublic**: `pushPublic(topic: string, message: any): void;`
- **removeprivatemessagebus**: `removePrivateMessageBus(): void;`
- **rpccall**: `rpcCall(topic: string, message?: any, timeout?: number): Promise<any>;`
- **rpccallpublic**: `rpcCallPublic(topic: string, message?: any, timeout?: number): Promise<any>;`
- **rpcservice**: `rpcService(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void;`
- **rpcservicepublic**: `rpcServicePublic(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void;`
- **subscribe**: `subscribe(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **subscribeonce**: `subscribeOnce(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **subscribeoncepublic**: `subscribeOncePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **subscribepublic**: `subscribePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`

---

## SYS_PanelControl

系统 / 面板控制类

```typescript
declare class SYS_PanelControl
```

- **closebottompanel**: `closeBottomPanel(): void;`
- **closeleftpanel**: `closeLeftPanel(): void;`
- **closerightpanel**: `closeRightPanel(): void;`
- **isbottompanellocked**: `isBottomPanelLocked(): Promise<boolean>;`
- **isleftpanellocked**: `isLeftPanelLocked(): Promise<boolean>;`
- **isrightpanellocked**: `isRightPanelLocked(): Promise<boolean>;`
- **openbottompanel**: `openBottomPanel(tab?: ESYS_BottomPanelTab): void;`
- **openleftpanel**: `openLeftPanel(tab?: ESYS_LeftPanelTab): void;`
- **openrightpanel**: `openRightPanel(tab?: ESYS_RightPanelTab): void;`
- **togglebottompanellockstate**: `toggleBottomPanelLockState(state?: boolean): void;`
- **toggleleftpanellockstate**: `toggleLeftPanelLockState(state?: boolean): void;`
- **togglerightpanellockstate**: `toggleRightPanelLockState(state?: boolean): void;`

---

## SYS_RightClickMenu

系统 / 右键菜单类

```typescript
declare class SYS_RightClickMenu
```

- **changemenu**: `changeMenu(menuId: string, menuItems: Array<ISYS_RightClickMenuItem | null>): Promise<void>;`

---

## SYS_Setting

系统 / 设置类

```typescript
declare class SYS_Setting
```

- **restoredefault**: `restoreDefault(): Promise<boolean>;`

---

## SYS_ShortcutKey

系统 / 快捷键类

> 注册与管理系统快捷键

```typescript
declare class SYS_ShortcutKey
```

- **getshortcutkeys**: `getShortcutKeys(includeSystem?: boolean): Promise<Array<{         shortcutKey: TSYS_ShortcutKeys;         title: string;         documentType: Array<ESYS_ShortcutKeyEffectiveEditorDocumentType>;         scene: Array<ESYS_ShortcutKeyEffectiveEditorScene>;     }>>;`
- **registershortcutkey**: `registerShortcutKey(shortcutKey: TSYS_ShortcutKeys, title: string, callbackFn: (shortcutKey: TSYS_ShortcutKeys) => void | Promise<void>, documentType?: Array<ESYS_ShortcutKeyEffectiveEditorDocumentType>, scene?: Array<ESYS_ShortcutKeyEffectiveEditorScene>): Promise<boolean>;`
- **unregistershortcutkey**: `unregisterShortcutKey(shortcutKey: TSYS_ShortcutKeys): Promise<boolean>;`

---

## SYS_Storage

系统 / 存储类

> 可以进行扩展的用户配置存储、浏览器本地存储的操作接口

```typescript
declare class SYS_Storage
```

- **clearextensionalluserconfigs**: `clearExtensionAllUserConfigs(): Promise<boolean>;`
- **deleteextensionuserconfig**: `deleteExtensionUserConfig(key: string): Promise<boolean>;`
- **getextensionalluserconfigs**: `getExtensionAllUserConfigs(): {         [key: string]: any;     };`
- **getextensionuserconfig**: `getExtensionUserConfig(key: string): any | undefined;`
- **setextensionalluserconfigs**: `setExtensionAllUserConfigs(configs: {         [key: string]: any;     }): Promise<boolean>;`
- **setextensionuserconfig**: `setExtensionUserConfig(key: string, value: any): Promise<boolean>;`

---

## SYS_Timer

系统 / 定时器类

> 设置定时器

```typescript
declare class SYS_Timer
```

- **clearintervaltimer**: `clearIntervalTimer(id: string): boolean;`
- **cleartimeouttimer**: `clearTimeoutTimer(id: string): boolean;`
- **setintervaltimer**: `setIntervalTimer(id: string, timeout: number, callFn: (...args: any) => void, ...args: any): boolean;`
- **settimeouttimer**: `setTimeoutTimer(id: string, timeout: number, callFn: (...args: any) => void, ...args: any): boolean;`

---

## SYS_ToastMessage

系统 / 吐司消息类

> 在屏幕的边缘弹出简短的消息提醒，会在一定时间后自动消除

```typescript
declare class SYS_ToastMessage
```

- **showmessage**: `showMessage(message: string, messageType?: ESYS_ToastMessageType, timer?: number, bottomPanel?: ESYS_BottomPanelTab, buttonTitle?: string, buttonCallbackFn?: string): void;`

---

## SYS_Tool

系统 / 工具类

```typescript
declare class SYS_Tool
```

- **netlistcomparison**: `netlistComparison(netlist1: string | {         projectUuid: string;         documentUuid: string;     } | File, netlist2: string | {         projectUuid: string;         documentUuid: string;     } | File): Promise<Array<{         type: 'Net' | 'Component';         object: string;         netlist1Name: Array<string>;         netlist2Name: Array<string>;     }>>;`

---

## SYS_Unit

系统 / 单位类

> 控制系统数据单位与单位转换基础函数，当前系统数据单位跨度等效为 `mil`

```typescript
declare class SYS_Unit
```

- **getsystemdataunit**: `getSystemDataUnit(): ESYS_Unit.MIL;`
- **inchtomil**: `inchToMil(inch: number, numberOfDecimals?: number): number;`
- **inchtomm**: `inchToMm(inch: number, numberOfDecimals?: number): number;`
- **miltoinch**: `milToInch(mil: number, numberOfDecimals?: number): number;`
- **miltomm**: `milToMm(mil: number, numberOfDecimals?: number): number;`
- **mmtoinch**: `mmToInch(mm: number, numberOfDecimals?: number): number;`
- **mmtomil**: `mmToMil(mm: number, numberOfDecimals?: number): number;`

---

## SYS_WebSocket

系统 / WebSocket 类

> 与 WebSocket 服务器交互

```typescript
declare class SYS_WebSocket
```

- **close**: `close(id: string, code?: number, reason?: string, extensionUuid?: string): void;`
- **register**: `register(id: string, serviceUri: string, receiveMessageCallFn?: (event: MessageEvent<any>) => void | Promise<void>, connectedCallFn?: () => void | Promise<void>, protocols?: string | Array<string>): void;`
- **send**: `send(id: string, data: string | ArrayBuffer | Blob | ArrayBufferView, extensionUuid?: string): void;`

---

## SYS_Window

系统 / 窗口类

> 为了保证安全性，仅提供有限的窗口跳转与监听支持，更多操作请使用内联框架窗口 [SYS\_IFrame](./pro-api.sys_iframe.md)

```typescript
declare class SYS_Window
```

- **addeventlistener**: `addEventListener(type: ESYS_WindowEventType, listener: (ev: any) => any, options?: {         capture?: boolean;         once?: boolean;         passive?: boolean;         signal?: AbortSignal;     }): ISYS_WindowEventListenerRemovableObject | undefined;`
- **getcurrenttheme**: `getCurrentTheme(): Promise<ESYS_Theme>;`
- **geturlanchor**: `getUrlAnchor(): string;`
- **geturlparam**: `getUrlParam(key: string): string | null;`
- **open**: `open(url: string, target?: ESYS_WindowOpenTarget): void;`
- **openui**: `openUI(uiName: string, args?: {         [key: string]: any;     }): Promise<void>;`
- **removeeventlistener**: `removeEventListener(removableObject: ISYS_WindowEventListenerRemovableObject): void;`
- **urlpushstate**: `urlPushState(url: string): void;`
- **urlreplacestate**: `urlReplaceState(url: string): void;`

---

