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

```typescript
export class DMT_Board
```

- **copyboard**: `public copyBoard(sourceBoardName: string): Promise<string | undefined>;`
- **createboard**: `public createBoard(schematicUuid?: string, pcbUuid?: string): Promise<string | undefined>;`
- **deleteboard**: `public deleteBoard(boardName: string): Promise<boolean>;`
- **getallboardsinfo**: `public getAllBoardsInfo(): Promise<Array<IDMT_BoardItem>>;`
- **getboardinfo**: `public getBoardInfo(boardName: string): Promise<IDMT_BoardItem | undefined>;`
- **getcurrentboardinfo**: `public getCurrentBoardInfo(): Promise<IDMT_BoardItem | undefined>;`
- **modifyboardname**: `public modifyBoardName(originalBoardName: string, boardName: string): Promise<boolean>;`

---

## DMT_EditorControl

文档树 / 编辑器控制类

```typescript
export class DMT_EditorControl
```

- **activatedocument**: `public activateDocument(tabId: string): Promise<boolean>;`
- **activatesplitscreen**: `public activateSplitScreen(splitScreenId: string): Promise<boolean>;`
- **closedocument**: `public closeDocument(tabId: string): Promise<boolean>;`
- **createsplitscreen**: `public createSplitScreen(splitScreenType: EDMT_EditorSplitScreenDirection, tabId: string): Promise<{ sourceSplitScreenId: string; newSplitScreenId: string } | undefined>;`
- **generateindicatormarkers**: `public generateIndicatorMarkers(markers: Array<IDMT_IndicatorMarkerShape>, color?: { r: number; g: number; b: number; alpha: number }, lineWidth?: number, zoom?: boolean, tabId?: string): Promise<boolean>;`
- **getcurrentrenderedareaimage**: `public getCurrentRenderedAreaImage(tabId?: string): Promise<Blob | undefined>;`
- **getsplitscreenidbytabid**: `public getSplitScreenIdByTabId(tabId: string): Promise<string | undefined>;`
- **getsplitscreentree**: `public getSplitScreenTree(): Promise<IDMT_EditorSplitScreenItem | undefined>;`
- **gettabsbysplitscreenid**: `public getTabsBySplitScreenId(splitScreenId: string): Promise<Array<IDMT_EditorTabItem>>;`
- **mergealldocumentfromsplitscreen**: `public mergeAllDocumentFromSplitScreen(): Promise<boolean>;`
- **movedocumenttosplitscreen**: `public moveDocumentToSplitScreen(tabId: string, splitScreenId: string): Promise<boolean>;`
- **opendocument**: `public openDocument(documentUuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **openlibrarydocument**: `public openLibraryDocument(libraryUuid: string, libraryType: ELIB_LibraryType.SYMBOL | ELIB_LibraryType.FOOTPRINT, uuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **removeindicatormarkers**: `public removeIndicatorMarkers(tabId?: string): Promise<boolean>;`
- **tilealldocumenttosplitscreen**: `public tileAllDocumentToSplitScreen(): Promise<boolean>;`
- **zoomto**: `public zoomTo(x?: number, y?: number, scaleRatio?: number, tabId?: string): Promise<{ left: number; right: number; top: number; bottom: number } | false>;`
- **zoomtoallprimitives**: `public zoomToAllPrimitives(tabId?: string): Promise<{ left: number; right: number; top: number; bottom: number } | false>;`
- **zoomtoregion**: `public zoomToRegion(left: number, right: number, top: number, bottom: number, tabId?: string): Promise<boolean>;`
- **zoomtoselectedprimitives**: `public zoomToSelectedPrimitives(tabId?: string): Promise<{ left: number; right: number; top: number; bottom: number } | false>;`

---

## DMT_Event

文档树 / 事件类

```typescript
export class DMT_Event
```

- **addeditortabeventlistener**: `public addEditorTabEventListener(id: string, eventType: 'all' | EDMT_EditorTabEventType, callFn: (eventType: EDMT_EditorTabEventType, props: { documentType: EDMT_EditorDocumentType; title: string; tabId: string }) => void | Promise<void>, onlyOnce?: boolean): void;`
- **iseventlisteneralreadyexist**: `public isEventListenerAlreadyExist(id: string): boolean;`
- **removeeventlistener**: `public removeEventListener(id: string): boolean;`

---

## DMT_Folder

文档树 / 文件夹类

```typescript
export class DMT_Folder
```

- **createfolder**: `public createFolder(folderName: string, teamUuid: string, parentFolderUuid?: string, description?: string): Promise<string | undefined>;`
- **deletefolder**: `public deleteFolder(teamUuid: string, folderUuid: string): Promise<boolean>;`
- **getallfoldersuuid**: `public getAllFoldersUuid(teamUuid: string): Promise<Array<string>>;`
- **getfolderinfo**: `public getFolderInfo(teamUuid: string, folderUuid: string): Promise<IDMT_FolderItem | undefined>;`
- **modifyfolderdescription**: `public modifyFolderDescription(teamUuid: string, folderUuid: string, description?: string): Promise<boolean>;`
- **modifyfoldername**: `public modifyFolderName(teamUuid: string, folderUuid: string, folderName: string): Promise<boolean>;`
- **movefoldertofolder**: `public moveFolderToFolder(teamUuid: string, folderUuid: string, parentFolderUuid?: string): Promise<boolean>;`

---

## DMT_Panel

文档树 / 面板管理类

```typescript
export class DMT_Panel
```

- **copypanel**: `public copyPanel(panelUuid: string): Promise<string | undefined>;`
- **createpanel**: `public createPanel(): Promise<string | undefined>;`
- **deletepanel**: `public deletePanel(panelUuid: string): Promise<boolean>;`
- **getallpanelsinfo**: `public getAllPanelsInfo(): Promise<Array<IDMT_PanelItem>>;`
- **getcurrentpanelinfo**: `public getCurrentPanelInfo(): Promise<IDMT_PanelItem | undefined>;`
- **getpanelinfo**: `public getPanelInfo(panelUuid: string): Promise<IDMT_PanelItem | undefined>;`
- **modifypanelname**: `public modifyPanelName(panelUuid: string, panelName: string): Promise<boolean>;`

---

## DMT_Pcb

文档树 / PCB 管理类

```typescript
export class DMT_Pcb
```

- **copypcb**: `public copyPcb(pcbUuid: string, boardName?: string): Promise<string | undefined>;`
- **createpcb**: `public createPcb(boardName?: string): Promise<string | undefined>;`
- **deletepcb**: `public deletePcb(pcbUuid: string): Promise<boolean>;`
- **getallpcbsinfo**: `public getAllPcbsInfo(): Promise<Array<IDMT_PcbItem>>;`
- **getcurrentpcbinfo**: `public getCurrentPcbInfo(): Promise<IDMT_PcbItem | undefined>;`
- **getpcbinfo**: `public getPcbInfo(pcbUuid: string): Promise<IDMT_PcbItem | undefined>;`
- **modifypcbname**: `public modifyPcbName(pcbUuid: string, pcbName: string): Promise<boolean>;`

---

## DMT_Project

文档树 / 工程管理类

```typescript
export class DMT_Project
```

- **createproject**: `public createProject(projectFriendlyName: string, projectName?: string, teamUuid?: string, folderUuid?: string, description?: string, collaborationMode?: EDMT_ProjectCollaborationMode): Promise<string | undefined>;`
- **getallprojectsuuid**: `public getAllProjectsUuid(teamUuid?: string, folderUuid?: string, workspaceUuid?: string): Promise<Array<string>>;`
- **getcurrentprojectinfo**: `public getCurrentProjectInfo(): Promise<IDMT_ProjectItem | undefined>;`
- **getprojectinfo**: `public getProjectInfo(projectUuid: string): Promise<IDMT_BriefProjectItem | undefined>;`
- **moveprojecttofolder**: `public moveProjectToFolder(projectUuid: string, folderUuid?: string): Promise<boolean>;`
- **openproject**: `public openProject(projectUuid: string): Promise<boolean>;`

---

## DMT_Schematic

文档树 / 原理图管理类

```typescript
export class DMT_Schematic
```

- **copyschematic**: `public copySchematic(schematicUuid: string, boardName?: string): Promise<string | undefined>;`
- **copyschematicpage**: `public copySchematicPage(schematicPageUuid: string, schematicUuid?: string): Promise<string | undefined>;`
- **createschematic**: `public createSchematic(boardName?: string): Promise<string | undefined>;`
- **createschematicpage**: `public createSchematicPage(schematicUuid: string): Promise<string | undefined>;`
- **deleteschematic**: `public deleteSchematic(schematicUuid: string): Promise<boolean>;`
- **deleteschematicpage**: `public deleteSchematicPage(schematicPageUuid: string): Promise<boolean>;`
- **getallschematicpagesinfo**: `public getAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;`
- **getallschematicsinfo**: `public getAllSchematicsInfo(): Promise<Array<IDMT_SchematicItem>>;`
- **getcurrentschematicallschematicpagesinfo**: `public getCurrentSchematicAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;`
- **getcurrentschematicinfo**: `public getCurrentSchematicInfo(): Promise<IDMT_SchematicItem | undefined>;`
- **getcurrentschematicpageinfo**: `public getCurrentSchematicPageInfo(): Promise<IDMT_SchematicPageItem | undefined>;`
- **getschematicinfo**: `public getSchematicInfo(schematicUuid: string): Promise<IDMT_SchematicItem | undefined>;`
- **getschematicpageinfo**: `public getSchematicPageInfo(schematicPageUuid: string): Promise<IDMT_SchematicPageItem | undefined>;`
- **modifyschematicname**: `public modifySchematicName(schematicUuid: string, schematicName: string): Promise<boolean>;`
- **modifyschematicpagename**: `public modifySchematicPageName(schematicPageUuid: string, schematicPageName: string): Promise<boolean>;`
- **modifyschematicpagetitleblock**: `public modifySchematicPageTitleBlock(showTitleBlock?: boolean, titleBlockData?: Record<string, { showTitle?: undefined | false | true; showValue?: undefined | false | true; value?: any }>): Promise<boolean>;`
- **reorderschematicpages**: `public reorderSchematicPages(schematicUuid: string, schematicPageItemsArray: Array<IDMT_SchematicPageItem>): Promise<boolean>;`

---

## DMT_SelectControl

文档树 / 选择控制类

```typescript
export class DMT_SelectControl
```

- **getcurrentdocumentinfo**: `public getCurrentDocumentInfo(): Promise<IDMT_EditorDocumentItem | undefined>;`

---

## DMT_Team

文档树 / 团队类

```typescript
export class DMT_Team
```

- **getallinvolvedteaminfo**: `public getAllInvolvedTeamInfo(): Promise<Array<IDMT_TeamItem>>;`
- **getallteamsinfo**: `public getAllTeamsInfo(): Promise<Array<IDMT_TeamItem>>;`
- **getcurrentteaminfo**: `public getCurrentTeamInfo(): Promise<IDMT_TeamItem | undefined>;`

---

## DMT_Workspace

文档树 / 工作区类

```typescript
export class DMT_Workspace
```

- **getallworkspacesinfo**: `public getAllWorkspacesInfo(): Promise<Array<IDMT_WorkspaceItem>>;`
- **getcurrentworkspaceinfo**: `public getCurrentWorkspaceInfo(): Promise<IDMT_WorkspaceItem | undefined>;`
- **toggletoworkspace**: `public toggleToWorkspace(workspaceUuid?: string): Promise<boolean>;`

---

## EDA

嘉立创 EDA 专业版用户 API 接口

```typescript
eda: EDA
```

- **dmt_board**: `public dmt_Board: DMT_Board;`
- **dmt_editorcontrol**: `public dmt_EditorControl: DMT_EditorControl;`
- **dmt_event**: `public dmt_Event: DMT_Event;`
- **dmt_folder**: `public dmt_Folder: DMT_Folder;`
- **dmt_panel**: `public dmt_Panel: DMT_Panel;`
- **dmt_pcb**: `public dmt_Pcb: DMT_Pcb;`
- **dmt_project**: `public dmt_Project: DMT_Project;`
- **dmt_schematic**: `public dmt_Schematic: DMT_Schematic;`
- **dmt_selectcontrol**: `public dmt_SelectControl: DMT_SelectControl;`
- **dmt_team**: `public dmt_Team: DMT_Team;`
- **dmt_workspace**: `public dmt_Workspace: DMT_Workspace;`
- **lib_3dmodel**: `public lib_3DModel: LIB_3DModel;`
- **lib_cbb**: `public lib_Cbb: LIB_Cbb;`
- **lib_classification**: `public lib_Classification: LIB_Classification;`
- **lib_device**: `public lib_Device: LIB_Device;`
- **lib_footprint**: `public lib_Footprint: LIB_Footprint;`
- **lib_librarieslist**: `public lib_LibrariesList: LIB_LibrariesList;`
- **lib_panellibrary**: `public lib_PanelLibrary: LIB_PanelLibrary;`
- **lib_selectcontrol**: `public lib_SelectControl: LIB_SelectControl;`
- **lib_simulationmodel**: `public lib_SimulationModel: LIB_SimulationModel;`
- **lib_symbol**: `public lib_Symbol: LIB_Symbol;`
- **pcb_document**: `public pcb_Document: PCB_Document;`
- **pcb_drc**: `public pcb_Drc: PCB_Drc;`
- **pcb_event**: `public pcb_Event: PCB_Event;`
- **pcb_layer**: `public pcb_Layer: PCB_Layer;`
- **pcb_manufacturedata**: `public pcb_ManufactureData: PCB_ManufactureData;`
- **pcb_mathpolygon**: `public pcb_MathPolygon: PCB_MathPolygon;`
- **pcb_net**: `public pcb_Net: PCB_Net;`
- **pcb_primitive**: `public pcb_Primitive: PCB_Primitive;`
- **pcb_primitivearc**: `public pcb_PrimitiveArc: PCB_PrimitiveArc;`
- **pcb_primitiveattribute**: `public pcb_PrimitiveAttribute: PCB_PrimitiveAttribute;`
- **pcb_primitivecomponent**: `public pcb_PrimitiveComponent: PCB_PrimitiveComponent;`
- **pcb_primitivedimension**: `public pcb_PrimitiveDimension: PCB_PrimitiveDimension;`
- **pcb_primitivefill**: `public pcb_PrimitiveFill: PCB_PrimitiveFill;`
- **pcb_primitiveimage**: `public pcb_PrimitiveImage: PCB_PrimitiveImage;`
- **pcb_primitiveline**: `public pcb_PrimitiveLine: PCB_PrimitiveLine;`
- **pcb_primitiveobject**: `public pcb_PrimitiveObject: PCB_PrimitiveObject;`
- **pcb_primitivepad**: `public pcb_PrimitivePad: PCB_PrimitivePad;`
- **pcb_primitivepolyline**: `public pcb_PrimitivePolyline: PCB_PrimitivePolyline;`
- **pcb_primitivepour**: `public pcb_PrimitivePour: PCB_PrimitivePour;`
- **pcb_primitivepoured**: `public pcb_PrimitivePoured: PCB_PrimitivePoured;`
- **pcb_primitiveregion**: `public pcb_PrimitiveRegion: PCB_PrimitiveRegion;`
- **pcb_primitivestring**: `public pcb_PrimitiveString: PCB_PrimitiveString;`
- **pcb_primitivevia**: `public pcb_PrimitiveVia: PCB_PrimitiveVia;`
- **pcb_raytracerengine**: `public pcb_RayTracerEngine: PCB_RayTracerEngine;`
- **pcb_selectcontrol**: `public pcb_SelectControl: PCB_SelectControl;`
- **pnl_document**: `public pnl_Document: PNL_Document;`
- **sch_document**: `public sch_Document: SCH_Document;`
- **sch_drc**: `public sch_Drc: SCH_Drc;`
- **sch_event**: `public sch_Event: SCH_Event;`
- **sch_manufacturedata**: `public sch_ManufactureData: SCH_ManufactureData;`
- **sch_net**: `public sch_Net: SCH_Net;`
- **sch_netlist**: `public sch_Netlist: SCH_Netlist;`
- **sch_primitive**: `public sch_Primitive: SCH_Primitive;`
- **sch_primitivearc**: `public sch_PrimitiveArc: SCH_PrimitiveArc;`
- **sch_primitiveattribute**: `public sch_PrimitiveAttribute: SCH_PrimitiveAttribute;`
- **sch_primitivebus**: `public sch_PrimitiveBus: SCH_PrimitiveBus;`
- **sch_primitivecircle**: `public sch_PrimitiveCircle: SCH_PrimitiveCircle;`
- **sch_primitivecomponent**: `public sch_PrimitiveComponent: SCH_PrimitiveComponent;`
- **sch_primitiveobject**: `public sch_PrimitiveObject: SCH_PrimitiveObject;`
- **sch_primitivepin**: `public sch_PrimitivePin: SCH_PrimitivePin;`
- **sch_primitivepolygon**: `public sch_PrimitivePolygon: SCH_PrimitivePolygon;`
- **sch_primitiverectangle**: `public sch_PrimitiveRectangle: SCH_PrimitiveRectangle;`
- **sch_primitivetext**: `public sch_PrimitiveText: SCH_PrimitiveText;`
- **sch_primitivewire**: `public sch_PrimitiveWire: SCH_PrimitiveWire;`
- **sch_selectcontrol**: `public sch_SelectControl: SCH_SelectControl;`
- **sch_simulationengine**: `public sch_SimulationEngine: SCH_SimulationEngine;`
- **sch_utils**: `public sch_Utils: SCH_Utils;`
- **sys_clienturl**: `public sys_ClientUrl: SYS_ClientUrl;`
- **sys_dialog**: `public sys_Dialog: SYS_Dialog;`
- **sys_environment**: `public sys_Environment: SYS_Environment;`
- **sys_filemanager**: `public sys_FileManager: SYS_FileManager;`
- **sys_filesystem**: `public sys_FileSystem: SYS_FileSystem;`
- **sys_fontmanager**: `public sys_FontManager: SYS_FontManager;`
- **sys_formatconversion**: `public sys_FormatConversion: SYS_FormatConversion;`
- **sys_headermenu**: `public sys_HeaderMenu: SYS_HeaderMenu;`
- **sys_i18n**: `public sys_I18n: SYS_I18n;`
- **sys_iframe**: `public sys_IFrame: SYS_IFrame;`
- **sys_loadingandprogressbar**: `public sys_LoadingAndProgressBar: SYS_LoadingAndProgressBar;`
- **sys_log**: `public sys_Log: SYS_Log;`
- **sys_math**: `public sys_Math: SYS_Math;`
- **sys_message**: `public sys_Message: SYS_Message;`
- **sys_messagebox**: `public sys_MessageBox: SYS_MessageBox;`
- **sys_messagebus**: `public sys_MessageBus: SYS_MessageBus;`
- **sys_panelcontrol**: `public sys_PanelControl: SYS_PanelControl;`
- **sys_rightclickmenu**: `public sys_RightClickMenu: SYS_RightClickMenu;`
- **sys_setting**: `public sys_Setting: SYS_Setting;`
- **sys_shortcutkey**: `public sys_ShortcutKey: SYS_ShortcutKey;`
- **sys_storage**: `public sys_Storage: SYS_Storage;`
- **sys_timer**: `public sys_Timer: SYS_Timer;`
- **sys_toastmessage**: `public sys_ToastMessage: SYS_ToastMessage;`
- **sys_tool**: `public sys_Tool: SYS_Tool;`
- **sys_unit**: `public sys_Unit: SYS_Unit;`
- **sys_websocket**: `public sys_WebSocket: SYS_WebSocket;`
- **sys_window**: `public sys_Window: SYS_Window;`

---

## IPCB_ComplexPolygon

复杂多边形

```typescript
export class IPCB_ComplexPolygon
```

- **addsource**: `public addSource(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon;`
- **getcenter**: `public getCenter(): Promise<{ x: number; y: number }>;`
- **getsource**: `public getSource(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;`
- **getsourcestrictcomplex**: `public getSourceStrictComplex(): Array<TPCB_PolygonSourceArray>;`
- **topolygon**: `public toPolygon(): Array<IPCB_Polygon>;`

---

## IPCB_Polygon

单多边形

```typescript
export class IPCB_Polygon
```

- **discretize**: `public discretize(options?: IPCB_DiscretizeOptions): Promise<Array<IPCB_DiscretizedPoint>>;`
- **getcenter**: `public getCenter(): Promise<{ x: number; y: number }>;`
- **getsource**: `public getSource(): TPCB_PolygonSourceArray;`

---

## IPCB_PrimitiveArc

圆弧线图元

```typescript
export class IPCB_PrimitiveArc implements IPCB_Primitive
```

- **done**: `public done(): Promise<IPCB_PrimitiveArc>;`
- **getadjacentprimitives**: `public getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc>>;`
- **getentiretrack**: `public getEntireTrack(includeVias: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;`
- **getentiretrack_1**: `public getEntireTrack(includeVias: true): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;`
- **getstate_arcangle**: `public getState_ArcAngle(): number;`
- **getstate_endx**: `public getState_EndX(): number;`
- **getstate_endy**: `public getState_EndY(): number;`
- **getstate_interactivemode**: `public getState_InteractiveMode(): EPCB_PrimitiveArcInteractiveMode;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfLine;`
- **getstate_linewidth**: `public getState_LineWidth(): number;`
- **getstate_net**: `public getState_Net(): string;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_startx**: `public getState_StartX(): number;`
- **getstate_starty**: `public getState_StartY(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitiveArc>;`
- **setstate_arcangle**: `public setState_ArcAngle(arcAngle: number): IPCB_PrimitiveArc;`
- **setstate_endx**: `public setState_EndX(endX: number): IPCB_PrimitiveArc;`
- **setstate_endy**: `public setState_EndY(endY: number): IPCB_PrimitiveArc;`
- **setstate_interactivemode**: `public setState_InteractiveMode(interactiveMode: EPCB_PrimitiveArcInteractiveMode): IPCB_PrimitiveArc;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitiveArc;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number): IPCB_PrimitiveArc;`
- **setstate_net**: `public setState_Net(net: string): IPCB_PrimitiveArc;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveArc;`
- **setstate_startx**: `public setState_StartX(startX: number): IPCB_PrimitiveArc;`
- **setstate_starty**: `public setState_StartY(startY: number): IPCB_PrimitiveArc;`
- **toasync**: `public toAsync(): IPCB_PrimitiveArc;`
- **tosync**: `public toSync(): IPCB_PrimitiveArc;`

---

## IPCB_PrimitiveAttribute

属性图元

```typescript
export class IPCB_PrimitiveAttribute implements IPCB_Primitive
```

- **_constructor_**: `public constructor(layer: TPCB_LayersOfImage, x: number | null, y: number | null, key: string, value: string, keyVisible: boolean, valueVisible: boolean, fontFamily: string, fontSize: number, lineWidth: number, alignMode: EPCB_PrimitiveStringAlignMode, rotation: number, reverse: boolean, expansion: number, mirror: boolean, primitiveLock: boolean, primitiveId: string, parentPrimitiveId: string);`
- **done**: `public done(): Promise<IPCB_PrimitiveAttribute>;`
- **getstate_alignmode**: `public getState_AlignMode(): EPCB_PrimitiveStringAlignMode;`
- **getstate_expansion**: `public getState_Expansion(): number;`
- **getstate_fontfamily**: `public getState_FontFamily(): string;`
- **getstate_fontsize**: `public getState_FontSize(): number;`
- **getstate_key**: `public getState_Key(): string;`
- **getstate_keyvisible**: `public getState_KeyVisible(): boolean;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfImage;`
- **getstate_linewidth**: `public getState_LineWidth(): number;`
- **getstate_mirror**: `public getState_Mirror(): boolean;`
- **getstate_parentprimitiveid**: `public getState_ParentPrimitiveId(): string;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_reverse**: `public getState_Reverse(): boolean;`
- **getstate_rotation**: `public getState_Rotation(): number;`
- **getstate_value**: `public getState_Value(): string;`
- **getstate_valuevisible**: `public getState_ValueVisible(): boolean;`
- **getstate_x**: `public getState_X(): number | null;`
- **getstate_y**: `public getState_Y(): number | null;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitiveAttribute>;`
- **setstate_alignmode**: `public setState_AlignMode(alignMode: EPCB_PrimitiveStringAlignMode): IPCB_PrimitiveAttribute;`
- **setstate_expansion**: `public setState_Expansion(expansion: number): IPCB_PrimitiveAttribute;`
- **setstate_fontfamily**: `public setState_FontFamily(fontFamily: string): IPCB_PrimitiveAttribute;`
- **setstate_fontsize**: `public setState_FontSize(fontSize: number): IPCB_PrimitiveAttribute;`
- **setstate_key**: `public setState_Key(key: string): IPCB_PrimitiveAttribute;`
- **setstate_keyvisible**: `public setState_KeyVisible(keyVisible: boolean): IPCB_PrimitiveAttribute;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfImage): IPCB_PrimitiveAttribute;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number): IPCB_PrimitiveAttribute;`
- **setstate_mirror**: `public setState_Mirror(mirror: boolean): IPCB_PrimitiveAttribute;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveAttribute;`
- **setstate_reverse**: `public setState_Reverse(reverse: boolean): IPCB_PrimitiveAttribute;`
- **setstate_rotation**: `public setState_Rotation(rotation: number): IPCB_PrimitiveAttribute;`
- **setstate_value**: `public setState_Value(value: string): IPCB_PrimitiveAttribute;`
- **setstate_valuevisible**: `public setState_ValueVisible(valueVisible: boolean): IPCB_PrimitiveAttribute;`
- **setstate_x**: `public setState_X(x: number): IPCB_PrimitiveAttribute;`
- **setstate_y**: `public setState_Y(y: number): IPCB_PrimitiveAttribute;`
- **toasync**: `public toAsync(): IPCB_PrimitiveAttribute;`
- **tosync**: `public toSync(): IPCB_PrimitiveAttribute;`

---

## IPCB_PrimitiveComponent

器件图元

```typescript
export class IPCB_PrimitiveComponent implements IPCB_Primitive
```

- **done**: `public done(): Promise<IPCB_PrimitiveComponent>;`
- **getallpins**: `public getAllPins(): Promise<Array<IPCB_PrimitiveComponentPad>>;`
- **getstate_addintobom**: `public getState_AddIntoBom(): boolean;`
- **getstate_component**: `public getState_Component(): { libraryUuid: string; uuid: string; name?: undefined | string } | undefined;`
- **getstate_designator**: `public getState_Designator(): string | undefined;`
- **getstate_footprint**: `public getState_Footprint(): { libraryUuid: string; uuid: string; name?: undefined | string } | undefined;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfComponent;`
- **getstate_manufacturer**: `public getState_Manufacturer(): string | undefined;`
- **getstate_manufacturerid**: `public getState_ManufacturerId(): string | undefined;`
- **getstate_model3d**: `public getState_Model3D(): { libraryUuid: string; uuid: string; name?: undefined | string } | undefined;`
- **getstate_name**: `public getState_Name(): string | undefined;`
- **getstate_otherproperty**: `public getState_OtherProperty(): Record<string, string | number | boolean> | undefined;`
- **getstate_pads**: `public getState_Pads(): Array<{ primitiveId: string; net: string; padNumber: string }> | undefined;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `public getState_Rotation(): number;`
- **getstate_supplier**: `public getState_Supplier(): string | undefined;`
- **getstate_supplierid**: `public getState_SupplierId(): string | undefined;`
- **getstate_uniqueid**: `public getState_UniqueId(): string | undefined;`
- **getstate_x**: `public getState_X(): number;`
- **getstate_y**: `public getState_Y(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitiveComponent>;`
- **setattribute**: `public setAttribute(key: string, value?: string | number | boolean, keyVisible?: boolean, valueVisible?: boolean): Promise<IPCB_PrimitiveAttribute>;`
- **setstate_addintobom**: `public setState_AddIntoBom(addIntoBom: boolean): IPCB_PrimitiveComponent;`
- **setstate_designator**: `public setState_Designator(designator: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfComponent): IPCB_PrimitiveComponent;`
- **setstate_manufacturer**: `public setState_Manufacturer(manufacturer: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_manufacturerid**: `public setState_ManufacturerId(manufacturerId: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_name**: `public setState_Name(name: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_otherproperty**: `public setState_OtherProperty(otherProperty: Record<string, string | number | boolean>): IPCB_PrimitiveComponent;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveComponent;`
- **setstate_rotation**: `public setState_Rotation(rotation: number): IPCB_PrimitiveComponent;`
- **setstate_supplier**: `public setState_Supplier(supplier: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_supplierid**: `public setState_SupplierId(supplierId: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_uniqueid**: `public setState_UniqueId(uniqueId: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_x**: `public setState_X(x: number): IPCB_PrimitiveComponent;`
- **setstate_y**: `public setState_Y(y: number): IPCB_PrimitiveComponent;`
- **toasync**: `public toAsync(): IPCB_PrimitiveComponent;`
- **tosync**: `public toSync(): IPCB_PrimitiveComponent;`

---

## IPCB_PrimitiveComponentPad

器件焊盘图元

```typescript
export class IPCB_PrimitiveComponentPad extends IPCB_PrimitivePad
```

- **done**: `public done(): Promise<IPCB_PrimitiveComponentPad>;`
- **getconnectedprimitives**: `public getConnectedPrimitives(onlyCentreConnection: true): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;`
- **getconnectedprimitives_1**: `public getConnectedPrimitives(onlyCentreConnection: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia | IPCB_PrimitivePolyline | IPCB_PrimitiveFill>>;`
- **getstate_parentcomponentprimitiveid**: `public getState_ParentComponentPrimitiveId(): string;`
- **primitivetype**: `protected readonly primitiveType: EPCB_PrimitiveType.COMPONENT_PAD;`
- **setstate_parentcomponentprimitiveid**: `public setState_ParentComponentPrimitiveId(): IPCB_PrimitiveComponentPad;`

---

## IPCB_PrimitiveDimension

尺寸标注图元

```typescript
export class IPCB_PrimitiveDimension implements IPCB_Primitive
```

- **done**: `public done(): Promise<IPCB_PrimitiveDimension>;`
- **getstate_coordinateset**: `public getState_CoordinateSet(): TPCB_PrimitiveDimensionCoordinateSet;`
- **getstate_dimensiontype**: `public getState_DimensionType(): EPCB_PrimitiveDimensionType;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfDimension;`
- **getstate_linewidth**: `public getState_LineWidth(): number;`
- **getstate_precision**: `public getState_Precision(): number;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_textfollow**: `public getState_TextFollow(): 0 | 1;`
- **getstate_unit**: `public getState_Unit(): ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitiveDimension>;`
- **setstate_coordinateset**: `public setState_CoordinateSet(coordinateSet: TPCB_PrimitiveDimensionCoordinateSet): IPCB_PrimitiveDimension;`
- **setstate_dimensiontype**: `public setState_DimensionType(dimensionType: EPCB_PrimitiveDimensionType): IPCB_PrimitiveDimension;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfDimension): IPCB_PrimitiveDimension;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number): IPCB_PrimitiveDimension;`
- **setstate_precision**: `public setState_Precision(precision: number): IPCB_PrimitiveDimension;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveDimension;`
- **setstate_unit**: `public setState_Unit(unit: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL): IPCB_PrimitiveDimension;`
- **toasync**: `public toAsync(): IPCB_PrimitiveDimension;`
- **tosync**: `public toSync(): IPCB_PrimitiveDimension;`

---

## IPCB_PrimitiveFill

填充图元

```typescript
export class IPCB_PrimitiveFill implements IPCB_Primitive
```

- **converttopolyline**: `public convertToPolyline(): Promise<IPCB_PrimitivePolyline>;`
- **converttopour**: `public convertToPour(): Promise<IPCB_PrimitivePour>;`
- **converttoregion**: `public convertToRegion(): Promise<IPCB_PrimitiveRegion>;`
- **done**: `public done(): Promise<IPCB_PrimitiveFill>;`
- **getstate_complexpolygon**: `public getState_ComplexPolygon(): IPCB_Polygon;`
- **getstate_fillmode**: `public getState_FillMode(): EPCB_PrimitiveFillMode | undefined;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfFill;`
- **getstate_linewidth**: `public getState_LineWidth(): number;`
- **getstate_net**: `public getState_Net(): string | undefined;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitiveFill>;`
- **setstate_complexpolygon**: `public setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitiveFill;`
- **setstate_fillmode**: `public setState_FillMode(fillMode: EPCB_PrimitiveFillMode): IPCB_PrimitiveFill;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfFill): IPCB_PrimitiveFill;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number): IPCB_PrimitiveFill;`
- **setstate_net**: `public setState_Net(net: string): IPCB_PrimitiveFill;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveFill;`
- **toasync**: `public toAsync(): IPCB_PrimitiveFill;`
- **tosync**: `public toSync(): IPCB_PrimitiveFill;`

---

## IPCB_PrimitiveImage

图像图元

```typescript
export class IPCB_PrimitiveImage implements IPCB_Primitive
```

- **done**: `public done(): Promise<IPCB_PrimitiveImage>;`
- **getstate_complexpolygon**: `public getState_ComplexPolygon(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;`
- **getstate_height**: `public getState_Height(): number;`
- **getstate_horizonmirror**: `public getState_HorizonMirror(): boolean;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfImage;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `public getState_Rotation(): number;`
- **getstate_width**: `public getState_Width(): number;`
- **getstate_x**: `public getState_X(): number;`
- **getstate_y**: `public getState_Y(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitiveImage>;`
- **setstate_height**: `public setState_Height(height: number): IPCB_PrimitiveImage;`
- **setstate_horizonmirror**: `public setState_HorizonMirror(horizonMirror: boolean): IPCB_PrimitiveImage;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfImage): IPCB_PrimitiveImage;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveImage;`
- **setstate_rotation**: `public setState_Rotation(rotation: number): IPCB_PrimitiveImage;`
- **setstate_width**: `public setState_Width(width: number): IPCB_PrimitiveImage;`
- **setstate_x**: `public setState_X(x: number): IPCB_PrimitiveImage;`
- **setstate_y**: `public setState_Y(y: number): IPCB_PrimitiveImage;`
- **toasync**: `public toAsync(): IPCB_PrimitiveImage;`
- **tosync**: `public toSync(): IPCB_PrimitiveImage;`

---

## IPCB_PrimitiveLine

直线图元

```typescript
export class IPCB_PrimitiveLine implements IPCB_Primitive
```

- **done**: `public done(): Promise<IPCB_PrimitiveLine>;`
- **getadjacentprimitives**: `public getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc>>;`
- **getentiretrack**: `public getEntireTrack(includeVias: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;`
- **getentiretrack_1**: `public getEntireTrack(includeVias: true): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;`
- **getstate_endx**: `public getState_EndX(): number;`
- **getstate_endy**: `public getState_EndY(): number;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfLine;`
- **getstate_linewidth**: `public getState_LineWidth(): number;`
- **getstate_net**: `public getState_Net(): string;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_startx**: `public getState_StartX(): number;`
- **getstate_starty**: `public getState_StartY(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitiveLine>;`
- **setstate_endx**: `public setState_EndX(endX: number): IPCB_PrimitiveLine;`
- **setstate_endy**: `public setState_EndY(endY: number): IPCB_PrimitiveLine;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitiveLine;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number): IPCB_PrimitiveLine;`
- **setstate_net**: `public setState_Net(net: string): IPCB_PrimitiveLine;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveLine;`
- **setstate_startx**: `public setState_StartX(startX: number): IPCB_PrimitiveLine;`
- **setstate_starty**: `public setState_StartY(startY: number): IPCB_PrimitiveLine;`
- **toasync**: `public toAsync(): IPCB_PrimitiveLine;`
- **tosync**: `public toSync(): IPCB_PrimitiveLine;`

---

## IPCB_PrimitiveObject

二进制内嵌对象图元

```typescript
export class IPCB_PrimitiveObject implements IPCB_Primitive
```

- **done**: `public done(): Promise<IPCB_PrimitiveObject>;`
- **getstate_binarydata**: `public getState_BinaryData(): string;`
- **getstate_filename**: `public getState_FileName(): string;`
- **getstate_height**: `public getState_Height(): number;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfObject | undefined;`
- **getstate_mirror**: `public getState_Mirror(): boolean;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `public getState_Rotation(): number;`
- **getstate_topleftx**: `public getState_TopLeftX(): number | undefined;`
- **getstate_toplefty**: `public getState_TopLeftY(): number | undefined;`
- **getstate_width**: `public getState_Width(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitiveObject>;`
- **setstate_binarydata**: `public setState_BinaryData(binaryData: string): IPCB_PrimitiveObject;`
- **setstate_filename**: `public setState_FileName(fileName: string): IPCB_PrimitiveObject;`
- **setstate_height**: `public setState_Height(height: number): IPCB_PrimitiveObject;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfObject): IPCB_PrimitiveObject;`
- **setstate_mirror**: `public setState_Mirror(mirror: boolean): IPCB_PrimitiveObject;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveObject;`
- **setstate_rotation**: `public setState_Rotation(rotation: number): IPCB_PrimitiveObject;`
- **setstate_topleftx**: `public setState_TopLeftX(topLeftX: number): IPCB_PrimitiveObject;`
- **setstate_toplefty**: `public setState_TopLeftY(topLeftY: number): IPCB_PrimitiveObject;`
- **setstate_width**: `public setState_Width(width: number): IPCB_PrimitiveObject;`
- **toasync**: `public toAsync(): IPCB_PrimitiveObject;`
- **tosync**: `public toSync(): IPCB_PrimitiveObject;`

---

## IPCB_PrimitivePad

焊盘图元

```typescript
export class IPCB_PrimitivePad implements IPCB_Primitive
```

- **async**: `protected async: boolean;`
- **create**: `public create(): Promise<IPCB_PrimitivePad>;`
- **done**: `public done(): Promise<IPCB_PrimitivePad>;`
- **getstate_heatwelding**: `public getState_HeatWelding(): IPCB_PrimitivePadHeatWelding | null;`
- **getstate_hole**: `public getState_Hole(): TPCB_PrimitivePadHole | null;`
- **getstate_holeoffsetx**: `public getState_HoleOffsetX(): number;`
- **getstate_holeoffsety**: `public getState_HoleOffsetY(): number;`
- **getstate_holerotation**: `public getState_HoleRotation(): number;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfPad;`
- **getstate_metallization**: `public getState_Metallization(): boolean;`
- **getstate_net**: `public getState_Net(): string | undefined;`
- **getstate_pad**: `public getState_Pad(): TPCB_PrimitivePadShape | undefined;`
- **getstate_padnumber**: `public getState_PadNumber(): string;`
- **getstate_padtype**: `public getState_PadType(): EPCB_PrimitivePadType;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `public getState_Rotation(): number;`
- **getstate_soldermaskandpastemaskexpansion**: `public getState_SolderMaskAndPasteMaskExpansion(): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;`
- **getstate_specialpad**: `public getState_SpecialPad(): TPCB_PrimitiveSpecialPadShape | undefined;`
- **getstate_x**: `public getState_X(): number;`
- **getstate_y**: `public getState_Y(): number;`
- **heatwelding**: `protected heatWelding: IPCB_PrimitivePadHeatWelding | null;`
- **hole**: `protected hole: TPCB_PrimitivePadHole | null;`
- **holeoffsetx**: `protected holeOffsetX: number;`
- **holeoffsety**: `protected holeOffsetY: number;`
- **holerotation**: `protected holeRotation: number;`
- **isasync**: `public isAsync(): boolean;`
- **layer**: `protected layer: TPCB_LayersOfPad;`
- **metallization**: `protected metallization: boolean;`
- **net**: `protected net?: string;`
- **pad**: `protected pad?: TPCB_PrimitivePadShape;`
- **padnumber**: `protected padNumber: string;`
- **padtype**: `protected padType: EPCB_PrimitivePadType;`
- **primitiveid**: `protected primitiveId?: string;`
- **primitivelock**: `protected primitiveLock: boolean;`
- **primitivetype**: `protected readonly primitiveType: EPCB_PrimitiveType;`
- **reset**: `public reset(): Promise<IPCB_PrimitivePad>;`
- **rotation**: `protected rotation: number;`
- **setstate_heatwelding**: `public setState_HeatWelding(heatWelding: IPCB_PrimitivePadHeatWelding | null): IPCB_PrimitivePad;`
- **setstate_hole**: `public setState_Hole(hole: TPCB_PrimitivePadHole): IPCB_PrimitivePad;`
- **setstate_holeoffsetx**: `public setState_HoleOffsetX(holeOffsetX: number): IPCB_PrimitivePad;`
- **setstate_holeoffsety**: `public setState_HoleOffsetY(holeOffsetY: number): IPCB_PrimitivePad;`
- **setstate_holerotation**: `public setState_HoleRotation(holeRotation: number): IPCB_PrimitivePad;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfPad): IPCB_PrimitivePad;`
- **setstate_metallization**: `public setState_Metallization(metallization: boolean): IPCB_PrimitivePad;`
- **setstate_net**: `public setState_Net(net?: string): IPCB_PrimitivePad;`
- **setstate_pad**: `public setState_Pad(pad: TPCB_PrimitivePadShape): IPCB_PrimitivePad;`
- **setstate_padnumber**: `public setState_PadNumber(padNumber: string): IPCB_PrimitivePad;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePad;`
- **setstate_rotation**: `public setState_Rotation(rotation: number): IPCB_PrimitivePad;`
- **setstate_soldermaskandpastemaskexpansion**: `public setState_SolderMaskAndPasteMaskExpansion(solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null): IPCB_PrimitivePad;`
- **setstate_specialpad**: `public setState_SpecialPad(specialPad: TPCB_PrimitiveSpecialPadShape): IPCB_PrimitivePad;`
- **setstate_x**: `public setState_X(x: number): IPCB_PrimitivePad;`
- **setstate_y**: `public setState_Y(y: number): IPCB_PrimitivePad;`
- **soldermaskandpastemaskexpansion**: `protected solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;`
- **specialpad**: `protected specialPad?: TPCB_PrimitiveSpecialPadShape;`
- **toasync**: `public toAsync(): IPCB_PrimitivePad;`
- **tosync**: `public toSync(): IPCB_PrimitivePad;`
- **x**: `protected x: number;`
- **y**: `protected y: number;`

---

## IPCB_PrimitivePolyline

折线图元

```typescript
export class IPCB_PrimitivePolyline implements IPCB_Primitive
```

- **converttofill**: `public convertToFill(): Promise<IPCB_PrimitiveFill>;`
- **converttopour**: `public convertToPour(): Promise<IPCB_PrimitivePour>;`
- **converttoregion**: `public convertToRegion(): Promise<IPCB_PrimitiveRegion>;`
- **done**: `public done(): Promise<IPCB_PrimitivePolyline>;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfLine;`
- **getstate_linewidth**: `public getState_LineWidth(): number;`
- **getstate_net**: `public getState_Net(): string;`
- **getstate_polygon**: `public getState_Polygon(): IPCB_Polygon;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitivePolyline>;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitivePolyline;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number): IPCB_PrimitivePolyline;`
- **setstate_net**: `public setState_Net(net: string): IPCB_PrimitivePolyline;`
- **setstate_polygon**: `public setState_Polygon(polygon: IPCB_Polygon): IPCB_PrimitivePolyline;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePolyline;`
- **toasync**: `public toAsync(): IPCB_PrimitivePolyline;`
- **tosync**: `public toSync(): IPCB_PrimitivePolyline;`

---

## IPCB_PrimitivePour

覆铜边框图元

```typescript
export class IPCB_PrimitivePour implements IPCB_Primitive
```

- **converttofill**: `public convertToFill(): Promise<IPCB_PrimitiveFill>;`
- **converttopolyline**: `public convertToPolyline(): Promise<IPCB_PrimitivePolyline>;`
- **converttoregion**: `public convertToRegion(): Promise<IPCB_PrimitiveRegion>;`
- **done**: `public done(): Promise<IPCB_PrimitivePour>;`
- **getcopperregion**: `public getCopperRegion(): Promise<IPCB_PrimitivePoured | undefined>;`
- **getstate_complexpolygon**: `public getState_ComplexPolygon(): IPCB_Polygon;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfCopper;`
- **getstate_linewidth**: `public getState_LineWidth(): number;`
- **getstate_net**: `public getState_Net(): string;`
- **getstate_pourfillmethod**: `public getState_PourFillMethod(): any;`
- **getstate_pourname**: `public getState_PourName(): string;`
- **getstate_pourpriority**: `public getState_PourPriority(): number;`
- **getstate_preservesilos**: `public getState_PreserveSilos(): boolean;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **isasync**: `public isAsync(): boolean;`
- **rebuildcopperregion**: `public rebuildCopperRegion(): Promise<IPCB_PrimitivePoured | undefined>;`
- **reset**: `public reset(): Promise<IPCB_PrimitivePour>;`
- **setstate_complexpolygon**: `public setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitivePour;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfCopper): IPCB_PrimitivePour;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number): IPCB_PrimitivePour;`
- **setstate_net**: `public setState_Net(net: string): IPCB_PrimitivePour;`
- **setstate_pourfillmethod**: `public setState_PourFillMethod(pourFillMethod: EPCB_PrimitivePourFillMethod): IPCB_PrimitivePour;`
- **setstate_pourname**: `public setState_PourName(pourName: string): IPCB_PrimitivePour;`
- **setstate_pourpriority**: `public setState_PourPriority(pourPriority: number): IPCB_PrimitivePour;`
- **setstate_preservesilos**: `public setState_PreserveSilos(preserveSilos: boolean): IPCB_PrimitivePour;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePour;`
- **toasync**: `public toAsync(): IPCB_PrimitivePour;`
- **tosync**: `public toSync(): IPCB_PrimitivePour;`

---

## IPCB_PrimitivePoured

覆铜填充图元

```typescript
export class IPCB_PrimitivePoured implements IPCB_Primitive
```

- **addsoldermaskfill**: `public addSolderMaskFill(pourFillId: IPCB_PrimitivePouredPourFill['id']): Promise<IPCB_PrimitiveFill | undefined>;`
- **converttofill**: `public convertToFill(pourFillId: IPCB_PrimitivePouredPourFill['id']): Promise<IPCB_PrimitiveFill | undefined>;`
- **deletepourfills**: `public deletePourFills(pourFillIds: IPCB_PrimitivePouredPourFill['id'] | Array<IPCB_PrimitivePouredPourFill['id']>): Promise<boolean>;`
- **getstate_pourfills**: `public getState_PourFills(): Array<IPCB_PrimitivePouredPourFill>;`
- **getstate_pourprimitiveid**: `public getState_PourPrimitiveId(): string;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **reset**: `public reset(): Promise<IPCB_PrimitivePoured>;`

---

## IPCB_PrimitiveRegion

区域图元

```typescript
export class IPCB_PrimitiveRegion implements IPCB_Primitive
```

- **converttofill**: `public convertToFill(): Promise<IPCB_PrimitiveFill>;`
- **converttopolyline**: `public convertToPolyline(): Promise<IPCB_PrimitivePolyline>;`
- **converttopour**: `public convertToPour(): Promise<IPCB_PrimitivePour>;`
- **done**: `public done(): Promise<IPCB_PrimitiveRegion>;`
- **getstate_complexpolygon**: `public getState_ComplexPolygon(): IPCB_Polygon;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfRegion;`
- **getstate_linewidth**: `public getState_LineWidth(): number;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_regionname**: `public getState_RegionName(): string | undefined;`
- **getstate_ruletype**: `public getState_RuleType(): Array<EPCB_PrimitiveRegionRuleType>;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitiveRegion>;`
- **setstate_complexpolygon**: `public setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitiveRegion;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfRegion): IPCB_PrimitiveRegion;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number): IPCB_PrimitiveRegion;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveRegion;`
- **setstate_regionname**: `public setState_RegionName(regionName?: string): IPCB_PrimitiveRegion;`
- **setstate_ruletype**: `public setState_RuleType(ruleType: Array<EPCB_PrimitiveRegionRuleType>): IPCB_PrimitiveRegion;`
- **toasync**: `public toAsync(): IPCB_PrimitiveRegion;`
- **tosync**: `public toSync(): IPCB_PrimitiveRegion;`

---

## IPCB_PrimitiveString

文本图元

```typescript
export class IPCB_PrimitiveString implements IPCB_Primitive
```

- **_constructor_**: `public constructor(layer: TPCB_LayersOfImage, x: number, y: number, text: string, fontFamily?: string, fontSize?: number, lineWidth?: number, alignMode?: EPCB_PrimitiveStringAlignMode, rotation?: number, reverse?: boolean, expansion?: number, mirror?: boolean, primitiveLock?: boolean, primitiveId?: string);`
- **done**: `public done(): Promise<IPCB_PrimitiveString>;`
- **getstate_alignmode**: `public getState_AlignMode(): EPCB_PrimitiveStringAlignMode;`
- **getstate_expansion**: `public getState_Expansion(): number;`
- **getstate_fontfamily**: `public getState_FontFamily(): string;`
- **getstate_fontsize**: `public getState_FontSize(): number;`
- **getstate_layer**: `public getState_Layer(): TPCB_LayersOfImage;`
- **getstate_linewidth**: `public getState_LineWidth(): number;`
- **getstate_mirror**: `public getState_Mirror(): boolean;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_reverse**: `public getState_Reverse(): boolean;`
- **getstate_rotation**: `public getState_Rotation(): number;`
- **getstate_text**: `public getState_Text(): string;`
- **getstate_x**: `public getState_X(): number;`
- **getstate_y**: `public getState_Y(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitiveString>;`
- **setstate_alignmode**: `public setState_AlignMode(alignMode: EPCB_PrimitiveStringAlignMode): IPCB_PrimitiveString;`
- **setstate_expansion**: `public setState_Expansion(expansion: number): IPCB_PrimitiveString;`
- **setstate_fontfamily**: `public setState_FontFamily(fontFamily: string): IPCB_PrimitiveString;`
- **setstate_fontsize**: `public setState_FontSize(fontSize: number): IPCB_PrimitiveString;`
- **setstate_layer**: `public setState_Layer(layer: TPCB_LayersOfImage): IPCB_PrimitiveString;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number): IPCB_PrimitiveString;`
- **setstate_mirror**: `public setState_Mirror(mirror: boolean): IPCB_PrimitiveString;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveString;`
- **setstate_reverse**: `public setState_Reverse(reverse: boolean): IPCB_PrimitiveString;`
- **setstate_rotation**: `public setState_Rotation(rotation: number): IPCB_PrimitiveString;`
- **setstate_text**: `public setState_Text(text: string): IPCB_PrimitiveString;`
- **setstate_x**: `public setState_X(x: number): IPCB_PrimitiveString;`
- **setstate_y**: `public setState_Y(y: number): IPCB_PrimitiveString;`
- **toasync**: `public toAsync(): IPCB_PrimitiveString;`
- **tosync**: `public toSync(): IPCB_PrimitiveString;`

---

## IPCB_PrimitiveVia

过孔图元

```typescript
export class IPCB_PrimitiveVia implements IPCB_Primitive
```

- **done**: `public done(): Promise<IPCB_PrimitiveVia>;`
- **getadjacentprimitives**: `public getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;`
- **getstate_designruleblindvianame**: `public getState_DesignRuleBlindViaName(): string | null;`
- **getstate_diameter**: `public getState_Diameter(): number;`
- **getstate_holediameter**: `public getState_HoleDiameter(): number;`
- **getstate_net**: `public getState_Net(): string;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `public getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_soldermaskexpansion**: `public getState_SolderMaskExpansion(): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;`
- **getstate_viatype**: `public getState_ViaType(): EPCB_PrimitiveViaType;`
- **getstate_x**: `public getState_X(): number;`
- **getstate_y**: `public getState_Y(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<IPCB_PrimitiveVia>;`
- **setstate_designruleblindvianame**: `public setState_DesignRuleBlindViaName(designRuleBlindViaName: string | null): IPCB_PrimitiveVia;`
- **setstate_diameter**: `public setState_Diameter(diameter: number): IPCB_PrimitiveVia;`
- **setstate_holediameter**: `public setState_HoleDiameter(holeDiameter: number): IPCB_PrimitiveVia;`
- **setstate_net**: `public setState_Net(net: string): IPCB_PrimitiveVia;`
- **setstate_primitivelock**: `public setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveVia;`
- **setstate_soldermaskexpansion**: `public setState_SolderMaskExpansion(solderMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null): IPCB_PrimitiveVia;`
- **setstate_viatype**: `public setState_ViaType(viaType: EPCB_PrimitiveViaType): IPCB_PrimitiveVia;`
- **setstate_x**: `public setState_X(x: number): IPCB_PrimitiveVia;`
- **setstate_y**: `public setState_Y(y: number): IPCB_PrimitiveVia;`
- **toasync**: `public toAsync(): IPCB_PrimitiveVia;`
- **tosync**: `public toSync(): IPCB_PrimitiveVia;`

---

## ISCH_PrimitiveArc

圆弧图元

```typescript
export class ISCH_PrimitiveArc implements ISCH_Primitive
```

- **done**: `public done(): Promise<ISCH_PrimitiveArc>;`
- **getstate_color**: `public getState_Color(): string | null;`
- **getstate_endx**: `public getState_EndX(): number;`
- **getstate_endy**: `public getState_EndY(): number;`
- **getstate_fillcolor**: `public getState_FillColor(): string | null;`
- **getstate_linetype**: `public getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `public getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_referencex**: `public getState_ReferenceX(): number;`
- **getstate_referencey**: `public getState_ReferenceY(): number;`
- **getstate_startx**: `public getState_StartX(): number;`
- **getstate_starty**: `public getState_StartY(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<ISCH_PrimitiveArc>;`
- **setstate_color**: `public setState_Color(color: string | null): ISCH_PrimitiveArc;`
- **setstate_endx**: `public setState_EndX(endX: number): ISCH_PrimitiveArc;`
- **setstate_endy**: `public setState_EndY(endY: number): ISCH_PrimitiveArc;`
- **setstate_fillcolor**: `public setState_FillColor(fillColor: string | null): ISCH_PrimitiveArc;`
- **setstate_linetype**: `public setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveArc;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveArc;`
- **setstate_referencex**: `public setState_ReferenceX(referenceX: number): ISCH_PrimitiveArc;`
- **setstate_referencey**: `public setState_ReferenceY(referenceY: number): ISCH_PrimitiveArc;`
- **setstate_startx**: `public setState_StartX(startX: number): ISCH_PrimitiveArc;`
- **setstate_starty**: `public setState_StartY(startY: number): ISCH_PrimitiveArc;`
- **toasync**: `public toAsync(): ISCH_PrimitiveArc;`
- **tosync**: `public toSync(): ISCH_PrimitiveArc;`

---

## ISCH_PrimitiveAttribute

属性图元

```typescript
export class ISCH_PrimitiveAttribute implements ISCH_Primitive
```

- **done**: `public done(): Promise<ISCH_PrimitiveAttribute>;`
- **getstate_alignmode**: `public getState_AlignMode(): ESCH_PrimitiveTextAlignMode | null;`
- **getstate_bold**: `public getState_Bold(): boolean | null;`
- **getstate_color**: `public getState_Color(): string | null;`
- **getstate_fillcolor**: `public getState_FillColor(): string | null;`
- **getstate_fontname**: `public getState_FontName(): string | null;`
- **getstate_fontsize**: `public getState_FontSize(): number | null;`
- **getstate_italic**: `public getState_Italic(): boolean | null;`
- **getstate_key**: `public getState_Key(): string;`
- **getstate_keyvisible**: `public getState_KeyVisible(): boolean | null;`
- **getstate_parentprimitiveid**: `public getState_ParentPrimitiveId(): string;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `public getState_Rotation(): number | null;`
- **getstate_underline**: `public getState_UnderLine(): boolean | null;`
- **getstate_value**: `public getState_Value(): string;`
- **getstate_valuevisible**: `public getState_ValueVisible(): boolean | null;`
- **getstate_x**: `public getState_X(): number | null;`
- **getstate_y**: `public getState_Y(): number | null;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<ISCH_PrimitiveAttribute>;`
- **setstate_alignmode**: `public setState_AlignMode(alignMode: ESCH_PrimitiveTextAlignMode | null): ISCH_PrimitiveAttribute;`
- **setstate_bold**: `public setState_Bold(bold: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_color**: `public setState_Color(color: string | null): ISCH_PrimitiveAttribute;`
- **setstate_fillcolor**: `public setState_FillColor(fillColor: string | null): ISCH_PrimitiveAttribute;`
- **setstate_fontname**: `public setState_FontName(fontName: string | null): ISCH_PrimitiveAttribute;`
- **setstate_fontsize**: `public setState_FontSize(fontSize: number | null): ISCH_PrimitiveAttribute;`
- **setstate_italic**: `public setState_Italic(italic: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_key**: `public setState_Key(key: string): ISCH_PrimitiveAttribute;`
- **setstate_keyvisible**: `public setState_KeyVisible(keyVisible: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_rotation**: `public setState_Rotation(rotation: number | null): ISCH_PrimitiveAttribute;`
- **setstate_underline**: `public setState_UnderLine(underLine: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_value**: `public setState_Value(value: string): ISCH_PrimitiveAttribute;`
- **setstate_valuevisible**: `public setState_ValueVisible(valueVisible: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_x**: `public setState_X(x: number | null): ISCH_PrimitiveAttribute;`
- **setstate_y**: `public setState_Y(y: number | null): ISCH_PrimitiveAttribute;`
- **toasync**: `public toAsync(): ISCH_PrimitiveAttribute;`
- **tosync**: `public toSync(): ISCH_PrimitiveAttribute;`

---

## ISCH_PrimitiveBus

总线图元

```typescript
export class ISCH_PrimitiveBus implements ISCH_Primitive
```

- **done**: `public done(): Promise<ISCH_PrimitiveBus>;`
- **getstate_busname**: `public getState_BusName(): string;`
- **getstate_color**: `public getState_Color(): string | null;`
- **getstate_line**: `public getState_Line(): Array<number> | Array<Array<number>>;`
- **getstate_linetype**: `public getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `public getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): ESCH_PrimitiveType;`
- **isasync**: `public isAsync(): boolean;`
- **setstate_busname**: `public setState_BusName(busName: string): ISCH_PrimitiveBus;`
- **setstate_color**: `public setState_Color(color: string | null): ISCH_PrimitiveBus;`
- **setstate_line**: `public setState_Line(line: Array<number> | Array<Array<number>>): ISCH_PrimitiveBus;`
- **setstate_linetype**: `public setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveBus;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveBus;`
- **toasync**: `public toAsync(): ISCH_PrimitiveBus;`
- **tosync**: `public toSync(): ISCH_PrimitiveBus;`

---

## ISCH_PrimitiveCbbSymbolComponent

复用模块符号图元

```typescript
export class ISCH_PrimitiveCbbSymbolComponent extends ISCH_PrimitiveComponent
```

- **done**: `public done(): Promise<ISCH_PrimitiveCbbSymbolComponent>;`
- **getstate_cbb**: `public getState_Cbb(): { libraryUuid: string; uuid: string };`
- **getstate_cbbsymbol**: `public getState_CbbSymbol(): { libraryUuid: string; cbbUuid: string; uuid?: undefined | string; name?: undefined | string };`
- **reset**: `public reset(): Promise<ISCH_PrimitiveCbbSymbolComponent>;`

---

## ISCH_PrimitiveCircle

圆图元

```typescript
export class ISCH_PrimitiveCircle implements ISCH_Primitive
```

- **done**: `public done(): Promise<ISCH_PrimitiveCircle>;`
- **getstate_centerx**: `public getState_CenterX(): number;`
- **getstate_centery**: `public getState_CenterY(): number;`
- **getstate_color**: `public getState_Color(): string | null;`
- **getstate_fillcolor**: `public getState_FillColor(): string | null;`
- **getstate_fillstyle**: `public getState_FillStyle(): ESCH_PrimitiveFillStyle | null;`
- **getstate_linetype**: `public getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `public getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_radius**: `public getState_Radius(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<ISCH_PrimitiveCircle>;`
- **setstate_centerx**: `public setState_CenterX(centerX: number): ISCH_PrimitiveCircle;`
- **setstate_centery**: `public setState_CenterY(centerY: number): ISCH_PrimitiveCircle;`
- **setstate_color**: `public setState_Color(color: string | null): ISCH_PrimitiveCircle;`
- **setstate_fillcolor**: `public setState_FillColor(fillColor: string | null): ISCH_PrimitiveCircle;`
- **setstate_fillstyle**: `public setState_FillStyle(fillStyle: ESCH_PrimitiveFillStyle | null): ISCH_PrimitiveCircle;`
- **setstate_linetype**: `public setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveCircle;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveCircle;`
- **setstate_radius**: `public setState_Radius(radius: number): ISCH_PrimitiveCircle;`
- **toasync**: `public toAsync(): ISCH_PrimitiveCircle;`
- **tosync**: `public toSync(): ISCH_PrimitiveCircle;`

---

## ISCH_PrimitiveComponent

器件图元

```typescript
export class ISCH_PrimitiveComponent implements ISCH_Primitive
```

- **async**: `protected async: boolean;`
- **designator**: `protected designator?: string;`
- **done**: `public done(): Promise<ISCH_PrimitiveComponent>;`
- **getallpins**: `public getAllPins(): Promise<Array<ISCH_PrimitiveComponentPin> | undefined>;`
- **getstate_addintobom**: `public getState_AddIntoBom(): boolean | undefined;`
- **getstate_addintopcb**: `public getState_AddIntoPcb(): boolean | undefined;`
- **getstate_component**: `public getState_Component(): { libraryUuid: string; uuid: string; name?: undefined | string } | undefined;`
- **getstate_componenttype**: `public getState_ComponentType(): ESCH_PrimitiveComponentType;`
- **getstate_designator**: `public getState_Designator(): string | undefined;`
- **getstate_footprint**: `public getState_Footprint(): { libraryUuid: string; uuid: string; name?: undefined | string } | undefined;`
- **getstate_manufacturer**: `public getState_Manufacturer(): string | undefined;`
- **getstate_manufacturerid**: `public getState_ManufacturerId(): string | undefined;`
- **getstate_mirror**: `public getState_Mirror(): boolean;`
- **getstate_name**: `public getState_Name(): string | undefined;`
- **getstate_net**: `public getState_Net(): string | undefined;`
- **getstate_otherproperty**: `public getState_OtherProperty(): Record<string, string | number | boolean> | undefined;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `public getState_Rotation(): number;`
- **getstate_subpartname**: `public getState_SubPartName(): string | undefined;`
- **getstate_supplier**: `public getState_Supplier(): string | undefined;`
- **getstate_supplierid**: `public getState_SupplierId(): string | undefined;`
- **getstate_symbol**: `public getState_Symbol(): { libraryUuid: string; uuid: string; name?: undefined | string } | undefined;`
- **getstate_uniqueid**: `public getState_UniqueId(): string | undefined;`
- **getstate_x**: `public getState_X(): number;`
- **getstate_y**: `public getState_Y(): number;`
- **isasync**: `public isAsync(): boolean;`
- **mirror**: `protected mirror: boolean;`
- **name**: `protected name?: string;`
- **otherproperty**: `protected otherProperty?: Record<string, string | number | boolean>;`
- **primitiveid**: `protected primitiveId?: string;`
- **reset**: `public reset(): Promise<ISCH_PrimitiveComponent>;`
- **rotation**: `protected rotation: number;`
- **setstate_addintobom**: `public setState_AddIntoBom(addIntoBom: boolean | undefined): ISCH_PrimitiveComponent;`
- **setstate_addintopcb**: `public setState_AddIntoPcb(addIntoPcb: boolean | undefined): ISCH_PrimitiveComponent;`
- **setstate_designator**: `public setState_Designator(designator: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_manufacturer**: `public setState_Manufacturer(manufacturer: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_manufacturerid**: `public setState_ManufacturerId(manufacturerId: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_mirror**: `public setState_Mirror(mirror: boolean): ISCH_PrimitiveComponent;`
- **setstate_name**: `public setState_Name(name: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_net**: `public setState_Net(net: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_otherproperty**: `public setState_OtherProperty(otherProperty: Record<string, string | number | boolean>): ISCH_PrimitiveComponent;`
- **setstate_rotation**: `public setState_Rotation(rotation: number): ISCH_PrimitiveComponent;`
- **setstate_supplier**: `public setState_Supplier(supplier: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_supplierid**: `public setState_SupplierId(supplierId: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_uniqueid**: `public setState_UniqueId(uniqueId: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_x**: `public setState_X(x: number): ISCH_PrimitiveComponent;`
- **setstate_y**: `public setState_Y(y: number): ISCH_PrimitiveComponent;`
- **toasync**: `public toAsync(): ISCH_PrimitiveComponent;`
- **tosync**: `public toSync(): ISCH_PrimitiveComponent;`
- **x**: `protected x: number;`
- **y**: `protected y: number;`

---

## ISCH_PrimitiveComponentPin

器件引脚图元

```typescript
export class ISCH_PrimitiveComponentPin extends ISCH_PrimitivePin
```

- **done**: `public done(): Promise<ISCH_PrimitiveComponentPin>;`
- **primitivetype**: `protected readonly primitiveType: ESCH_PrimitiveType.COMPONENT_PIN;`

---

## ISCH_PrimitiveObject

二进制内嵌对象图元

```typescript
export class ISCH_PrimitiveObject implements ISCH_Primitive
```

- **done**: `public done(): Promise<ISCH_PrimitiveObject>;`
- **getstate_content**: `public getState_Content(): File | string;`
- **getstate_filename**: `public getState_FileName(): string;`
- **getstate_height**: `public getState_Height(): number;`
- **getstate_mirror**: `public getState_Mirror(): boolean;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `public getState_Rotation(): number;`
- **getstate_startx**: `public getState_StartX(): number;`
- **getstate_starty**: `public getState_StartY(): number;`
- **getstate_width**: `public getState_Width(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<ISCH_PrimitiveObject>;`
- **setstate_content**: `public setState_Content(content: File | string): ISCH_PrimitiveObject;`
- **setstate_filename**: `public setState_FileName(fileName: string): ISCH_PrimitiveObject;`
- **setstate_height**: `public setState_Height(height: number): ISCH_PrimitiveObject;`
- **setstate_mirror**: `public setState_Mirror(mirror: boolean): ISCH_PrimitiveObject;`
- **setstate_rotation**: `public setState_Rotation(rotation: number): ISCH_PrimitiveObject;`
- **setstate_startx**: `public setState_StartX(startX: number): ISCH_PrimitiveObject;`
- **setstate_starty**: `public setState_StartY(startY: number): ISCH_PrimitiveObject;`
- **setstate_width**: `public setState_Width(width: number): ISCH_PrimitiveObject;`
- **toasync**: `public toAsync(): ISCH_PrimitiveObject;`
- **tosync**: `public toSync(): ISCH_PrimitiveObject;`

---

## ISCH_PrimitivePin

引脚图元

```typescript
export class ISCH_PrimitivePin implements ISCH_Primitive
```

- **async**: `protected async: boolean;`
- **done**: `public done(): Promise<ISCH_PrimitivePin>;`
- **getstate_noconnected**: `public getState_NoConnected(): boolean | undefined;`
- **getstate_otherproperty**: `public getState_OtherProperty(): Record<string, string | number | boolean> | undefined;`
- **getstate_pincolor**: `public getState_PinColor(): string | null;`
- **getstate_pinlength**: `public getState_PinLength(): number;`
- **getstate_pinname**: `public getState_PinName(): string;`
- **getstate_pinnumber**: `public getState_PinNumber(): string;`
- **getstate_pinshape**: `public getState_PinShape(): ESCH_PrimitivePinShape;`
- **getstate_pintype**: `public getState_pinType(): ESCH_PrimitivePinType;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `public getState_Rotation(): number;`
- **getstate_x**: `public getState_X(): number;`
- **getstate_y**: `public getState_Y(): number;`
- **isasync**: `public isAsync(): boolean;`
- **noconnected**: `protected noConnected?: boolean;`
- **otherproperty**: `protected otherProperty?: Record<string, string | number | boolean>;`
- **pincolor**: `protected pinColor: string | null;`
- **pinlength**: `protected pinLength: number;`
- **pinname**: `protected pinName: string;`
- **pinnumber**: `protected pinNumber: string;`
- **pinshape**: `protected pinShape: ESCH_PrimitivePinShape;`
- **pintype**: `protected pinType: ESCH_PrimitivePinType;`
- **primitiveid**: `protected primitiveId?: string;`
- **primitivetype**: `protected readonly primitiveType: ESCH_PrimitiveType;`
- **reset**: `public reset(): Promise<ISCH_PrimitivePin>;`
- **rotation**: `protected rotation: number;`
- **setstate_noconnected**: `public setState_NoConnected(noConnected: boolean): ISCH_PrimitivePin;`
- **setstate_otherproperty**: `public setState_OtherProperty(otherProperty: Record<string, string | number | boolean>): ISCH_PrimitivePin;`
- **setstate_pincolor**: `public setState_PinColor(pinColor: string | null): ISCH_PrimitivePin;`
- **setstate_pinlength**: `public setState_PinLength(pinLength: number): ISCH_PrimitivePin;`
- **setstate_pinname**: `public setState_PinName(pinName: string): ISCH_PrimitivePin;`
- **setstate_pinnumber**: `public setState_PinNumber(pinNumber: string): ISCH_PrimitivePin;`
- **setstate_pinshape**: `public setState_PinShape(pinShape: ESCH_PrimitivePinShape): ISCH_PrimitivePin;`
- **setstate_pintype**: `public setState_PinType(pinType: ESCH_PrimitivePinType): ISCH_PrimitivePin;`
- **setstate_rotation**: `public setState_Rotation(rotation: number): ISCH_PrimitivePin;`
- **setstate_x**: `public setState_X(x: number): ISCH_PrimitivePin;`
- **setstate_y**: `public setState_Y(y: number): ISCH_PrimitivePin;`
- **toasync**: `public toAsync(): ISCH_PrimitivePin;`
- **tosync**: `public toSync(): ISCH_PrimitivePin;`
- **x**: `protected x: number;`
- **y**: `protected y: number;`

---

## ISCH_PrimitivePolygon

多边形（折线）图元

```typescript
export class ISCH_PrimitivePolygon implements ISCH_Primitive
```

- **done**: `public done(): Promise<ISCH_PrimitivePolygon>;`
- **getstate_color**: `public getState_Color(): string | null;`
- **getstate_fillcolor**: `public getState_FillColor(): string | null;`
- **getstate_line**: `public getState_Line(): Array<number>;`
- **getstate_linetype**: `public getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `public getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): ESCH_PrimitiveType;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<ISCH_PrimitivePolygon>;`
- **setstate_color**: `public setState_Color(color: string | null): ISCH_PrimitivePolygon;`
- **setstate_fillcolor**: `public setState_FillColor(fillColor: string | null): ISCH_PrimitivePolygon;`
- **setstate_line**: `public setState_Line(line: Array<number>): ISCH_PrimitivePolygon;`
- **setstate_linetype**: `public setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitivePolygon;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number | null): ISCH_PrimitivePolygon;`
- **toasync**: `public toAsync(): ISCH_PrimitivePolygon;`
- **tosync**: `public toSync(): ISCH_PrimitivePolygon;`

---

## ISCH_PrimitiveRectangle

矩形图元

```typescript
export class ISCH_PrimitiveRectangle implements ISCH_Primitive
```

- **done**: `public done(): Promise<ISCH_PrimitiveRectangle>;`
- **getstate_color**: `public getState_Color(): string | null;`
- **getstate_cornerradius**: `public getState_CornerRadius(): number;`
- **getstate_fillcolor**: `public getState_FillColor(): string | null;`
- **getstate_fillstyle**: `public getState_FillStyle(): ESCH_PrimitiveFillStyle | null;`
- **getstate_height**: `public getState_Height(): number;`
- **getstate_linetype**: `public getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `public getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `public getState_Rotation(): number;`
- **getstate_topleftx**: `public getState_TopLeftX(): number;`
- **getstate_toplefty**: `public getState_TopLeftY(): number;`
- **getstate_width**: `public getState_Width(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<ISCH_PrimitiveRectangle>;`
- **setstate_color**: `public setState_Color(color: string | null): ISCH_PrimitiveRectangle;`
- **setstate_cornerradius**: `public setState_CornerRadius(cornerRadius: number): ISCH_PrimitiveRectangle;`
- **setstate_fillcolor**: `public setState_FillColor(fillColor: string | null): ISCH_PrimitiveRectangle;`
- **setstate_fillstyle**: `public setState_FillStyle(fillStyle: ESCH_PrimitiveFillStyle | null): ISCH_PrimitiveRectangle;`
- **setstate_height**: `public setState_Height(height: number): ISCH_PrimitiveRectangle;`
- **setstate_linetype**: `public setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveRectangle;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveRectangle;`
- **setstate_rotation**: `public setState_Rotation(rotation: number): ISCH_PrimitiveRectangle;`
- **setstate_topleftx**: `public setState_TopLeftX(topLeftX: number): ISCH_PrimitiveRectangle;`
- **setstate_toplefty**: `public setState_TopLeftY(topLeftY: number): ISCH_PrimitiveRectangle;`
- **setstate_width**: `public setState_Width(width: number): ISCH_PrimitiveRectangle;`
- **toasync**: `public toAsync(): ISCH_PrimitiveRectangle;`
- **tosync**: `public toSync(): ISCH_PrimitiveRectangle;`

---

## ISCH_PrimitiveText

文本图元

```typescript
export class ISCH_PrimitiveText implements ISCH_Primitive
```

- **done**: `public done(): Promise<ISCH_PrimitiveText>;`
- **getstate_alignmode**: `public getState_AlignMode(): ESCH_PrimitiveTextAlignMode;`
- **getstate_bold**: `public getState_Bold(): boolean;`
- **getstate_content**: `public getState_Content(): string;`
- **getstate_fontname**: `public getState_FontName(): string | null;`
- **getstate_fontsize**: `public getState_FontSize(): number | null;`
- **getstate_italic**: `public getState_Italic(): boolean;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `public getState_Rotation(): number;`
- **getstate_textcolor**: `public getState_TextColor(): string | null;`
- **getstate_underline**: `public getState_UnderLine(): boolean;`
- **getstate_x**: `public getState_X(): number;`
- **getstate_y**: `public getState_Y(): number;`
- **isasync**: `public isAsync(): boolean;`
- **reset**: `public reset(): Promise<ISCH_PrimitiveText>;`
- **setstate_alignmode**: `public setState_AlignMode(alignMode: ESCH_PrimitiveTextAlignMode): ISCH_PrimitiveText;`
- **setstate_bold**: `public setState_Bold(bold: boolean): ISCH_PrimitiveText;`
- **setstate_content**: `public setState_Content(content: string): ISCH_PrimitiveText;`
- **setstate_fontname**: `public setState_FontName(fontName: string | null): ISCH_PrimitiveText;`
- **setstate_fontsize**: `public setState_FontSize(fontSize: number | null): ISCH_PrimitiveText;`
- **setstate_italic**: `public setState_Italic(italic: boolean): ISCH_PrimitiveText;`
- **setstate_rotation**: `public setState_Rotation(rotation: number): ISCH_PrimitiveText;`
- **setstate_textcolor**: `public setState_TextColor(textColor: string | null): ISCH_PrimitiveText;`
- **setstate_underline**: `public setState_UnderLine(underLine: boolean): ISCH_PrimitiveText;`
- **setstate_x**: `public setState_X(x: number): ISCH_PrimitiveText;`
- **setstate_y**: `public setState_Y(y: number): ISCH_PrimitiveText;`
- **toasync**: `public toAsync(): ISCH_PrimitiveText;`
- **tosync**: `public toSync(): ISCH_PrimitiveText;`

---

## ISCH_PrimitiveWire

导线图元

```typescript
export class ISCH_PrimitiveWire implements ISCH_Primitive
```

- **done**: `public done(): Promise<ISCH_PrimitiveWire>;`
- **getstate_color**: `public getState_Color(): string | null;`
- **getstate_line**: `public getState_Line(): Array<number> | Array<Array<number>>;`
- **getstate_linetype**: `public getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `public getState_LineWidth(): number | null;`
- **getstate_net**: `public getState_Net(): string;`
- **getstate_primitiveid**: `public getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `public getState_PrimitiveType(): ESCH_PrimitiveType;`
- **isasync**: `public isAsync(): boolean;`
- **setstate_color**: `public setState_Color(color: string | null): ISCH_PrimitiveWire;`
- **setstate_line**: `public setState_Line(line: Array<number> | Array<Array<number>>): ISCH_PrimitiveWire;`
- **setstate_linetype**: `public setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveWire;`
- **setstate_linewidth**: `public setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveWire;`
- **setstate_net**: `public setState_Net(net: string): ISCH_PrimitiveWire;`
- **toasync**: `public toAsync(): ISCH_PrimitiveWire;`
- **tosync**: `public toSync(): ISCH_PrimitiveWire;`

---

## LIB_3DModel

综合库 / 3D 模型类

```typescript
export class LIB_3DModel
```

- **copy**: `public copy(modelUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newModelName?: string): Promise<string | undefined>;`
- **create**: `public create(libraryUuid: string, modelFile: Blob, classification?: ILIB_ClassificationIndex | Array<string>, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.METER | ESYS_Unit.MIL | ESYS_Unit.INCH): Promise<Array<string> | undefined>;`
- **delete**: `public delete(modelUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `public get(modelUuid: string, libraryUuid?: string): Promise<ILIB_3DModelItem | undefined>;`
- **modify**: `public modify(modelUuid: string, libraryUuid: string, modelName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;`
- **search**: `public search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_3DModelSearchItem>>;`

---

## LIB_Cbb

综合库 / 复用模块类

```typescript
export class LIB_Cbb
```

- **copy**: `public copy(cbbUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newCbbName?: string): Promise<string | undefined>;`
- **create**: `public create(libraryUuid: string, cbbName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;`
- **delete**: `public delete(cbbUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `public get(cbbUuid: string, libraryUuid?: string): Promise<ILIB_CbbItem | undefined>;`
- **modify**: `public modify(cbbUuid: string, libraryUuid: string, cbbName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;`
- **openprojectineditor**: `public openProjectInEditor(cbbUuid: string, libraryUuid: string): Promise<boolean>;`
- **opensymbolineditor**: `public openSymbolInEditor(cbbUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **search**: `public search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_CbbSearchItem>>;`

---

## LIB_Classification

综合库 / 库分类索引类

```typescript
export class LIB_Classification
```

- **createprimary**: `public createPrimary(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;`
- **createsecondary**: `public createSecondary(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;`
- **deletebyindex**: `public deleteByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<boolean>;`
- **deletebyuuid**: `public deleteByUuid(libraryUuid: string, classificationUuid: string): Promise<boolean>;`
- **getallclassificationtree**: `public getAllClassificationTree(libraryUuid: string, libraryType: ELIB_LibraryType): Promise<Array<{ name: string; uuid: string; children?: undefined | { name: string; uuid: string }[] }>>;`
- **getindexbyname**: `public getIndexByName(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string, secondaryClassificationName?: string): Promise<ILIB_ClassificationIndex | undefined>;`
- **getnamebyindex**: `public getNameByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<{ primaryClassificationName: string; secondaryClassificationName?: undefined | string } | undefined>;`
- **getnamebyuuid**: `public getNameByUuid(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationUuid?: string): Promise<{ primaryClassificationName: string; secondaryClassificationName?: undefined | string } | undefined>;`

---

## LIB_Device

综合库 / 器件类

```typescript
export class LIB_Device
```

- **copy**: `public copy(deviceUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newDeviceName?: string): Promise<string | undefined>;`
- **create**: *(签名过长，请查看详细文档)*
- **delete**: `public delete(deviceUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `public get(deviceUuid: string, libraryUuid?: string): Promise<ILIB_DeviceItem | undefined>;`
- **getbylcscids**: `public getByLcscIds<T extends boolean>(lcscIds: string, libraryUuid?: string, allowMultiMatch?: T): Promise<T extends true ? ILIB_DeviceSearchItem | undefined : Array<ILIB_DeviceSearchItem>>;`
- **getbylcscids_1**: `public getByLcscIds(lcscIds: Array<string>, libraryUuid?: string, allowMultiMatch?: boolean): Promise<Array<ILIB_DeviceSearchItem>>;`
- **modify**: *(签名过长，请查看详细文档)*
- **search**: `public search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_DeviceSearchItem>>;`
- **searchbyproperties**: `public searchByProperties(properties: ILIB_DevicePropertiesForSearch, libraryUuid?: string, classification?: Array<string>, symbolType?: ELIB_SymbolType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_DeviceSearchItem>>;`

---

## LIB_Footprint

综合库 / 封装类

```typescript
export class LIB_Footprint
```

- **copy**: `public copy(footprintUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newFootprintName?: string): Promise<string | undefined>;`
- **create**: `public create(libraryUuid: string, footprintName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;`
- **delete**: `public delete(footprintUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `public get(footprintUuid: string, libraryUuid?: string): Promise<ILIB_FootprintItem | undefined>;`
- **getrenderimage**: `public getRenderImage(source: { footprintUuid: string; libraryUuid: string }): Promise<Blob | undefined>;`
- **modify**: `public modify(footprintUuid: string, libraryUuid: string, footprintName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;`
- **openineditor**: `public openInEditor(footprintUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **search**: `public search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_FootprintSearchItem>>;`
- **searchbyproperties**: `public searchByProperties(properties: ILIB_FootprintPropertiesForSearch, libraryUuid?: string): Promise<Array<ILIB_FootprintSearchItem>>;`
- **updatedocumentsource**: `public updateDocumentSource(footprintUuid: string, libraryUuid: string, documentSource: string): Promise<boolean | undefined>;`

---

## LIB_LibrariesList

综合库 / 库列表类

```typescript
export class LIB_LibrariesList
```

- **getalllibrarieslist**: `public getAllLibrariesList(): Promise<Array<ILIB_LibraryInfo>>;`
- **getfavoritelibraryuuid**: `public getFavoriteLibraryUuid(): Promise<string | undefined>;`
- **getpersonallibraryuuid**: `public getPersonalLibraryUuid(): Promise<string | undefined>;`
- **getprojectlibraryuuid**: `public getProjectLibraryUuid(): Promise<string | undefined>;`
- **getsystemlibraryuuid**: `public getSystemLibraryUuid(): Promise<string | undefined>;`
- **registerextendlibrary**: `public registerExtendLibrary(title: string, libraryFunctions: { device?: undefined | ILIB_ExtendLibraryDeviceFunctions; symbol?: undefined | ILIB_ExtendLibrarySymbolFunctions; footprint?: undefined | ILIB_ExtendLibraryFootprintFunctions; cbb?: undefined | ILIB_ExtendLibraryCbbFunctions; model3d?: undefined | ILIB_ExtendLibrary3DModelFunctions }): Promise<string | undefined>;`

---

## LIB_PanelLibrary

综合库 / 面板库类

```typescript
export class LIB_PanelLibrary
```

- **copy**: `public copy(panelLibraryUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newPanelLibraryName?: string): Promise<string | undefined>;`
- **create**: `public create(libraryUuid: string, panelLibraryName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;`
- **delete**: `public delete(panelLibraryUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `public get(panelLibraryUuid: string, libraryUuid?: string): Promise<ILIB_PanelLibraryItem | undefined>;`
- **modify**: `public modify(panelLibraryUuid: string, libraryUuid: string, panelLibraryName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;`
- **openineditor**: `public openInEditor(panelLibraryUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **search**: `public search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_PanelLibrarySearchItem>>;`

---

## LIB_SelectControl

综合库 / 选择控制类

```typescript
export class LIB_SelectControl
```

- **getselectedlibraryrowinfo**: `public getSelectedLibraryRowInfo(): Promise<ILIB_LibraryItem | undefined>;`

---

## LIB_SimulationModel

综合库 / 仿真模型类

```typescript
export class LIB_SimulationModel
```

- **copy**: `public copy(simulationModelUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: Array<string>, newSimulationModelName?: string): Promise<string | undefined>;`
- **create**: `public create(libraryUuid: string, model: { modelType: 'Ngspice' } & ({ modelFile: Blob; modelName?: undefined | string; modelCategory?: undefined | string; modelPin?: undefined | string } | { modelData: string; modelName?: undefined | string; modelCategory?: undefined | string; modelPin?: undefined | string }), classification?: Array<string>, description?: string): Promise<string | undefined>;`
- **delete**: `public delete(simulationModelUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `public get(simulationModelUuid: string, libraryUuid?: string): Promise<ILIB_SimulationModelItem | undefined>;`
- **modify**: `public modify(simulationModelUuid: string, libraryUuid: string, modelProps?: { modelName?: undefined | string; modelCategory?: undefined | string; modelPin?: undefined | string }, classification?: Array<string> | null, description?: string | null): Promise<boolean>;`
- **search**: `public search(key: string, libraryUuid?: string, classification?: Array<string>, simulationModelType?: ELIB_SimulationModelType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_SimulationModelSearchItem>>;`

---

## LIB_Symbol

综合库 / 符号类

```typescript
export class LIB_Symbol
```

- **copy**: `public copy(symbolUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newSymbolName?: string): Promise<string | undefined>;`
- **create**: `public create(libraryUuid: string, symbolName: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, description?: string): Promise<string | undefined>;`
- **delete**: `public delete(symbolUuid: string, libraryUuid: string): Promise<boolean>;`
- **get**: `public get(symbolUuid: string, libraryUuid?: string): Promise<ILIB_SymbolItem | undefined>;`
- **getrenderimage**: `public getRenderImage(source: { symbolUuid: string; libraryUuid: string; subPartName?: undefined | string }): Promise<Blob | undefined>;`
- **modify**: `public modify(symbolUuid: string, libraryUuid: string, symbolName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, description?: string | null): Promise<boolean>;`
- **openineditor**: `public openInEditor(symbolUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **search**: `public search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_SymbolSearchItem>>;`
- **searchbyproperties**: `public searchByProperties(properties: ILIB_SymbolPropertiesForSearch, libraryUuid?: string): Promise<Array<ILIB_SymbolSearchItem>>;`
- **updatedocumentsource**: `public updateDocumentSource(symbolUuid: string, libraryUuid: string, documentSource: string): Promise<boolean | undefined>;`

---

## PCB_Document

PCB &amp; 封装 / 文档操作类

```typescript
export class PCB_Document
```

- **autolayout**: `public autoLayout(): Promise<IPCB_AutoLayoutResult>;`
- **autorouting**: `public autoRouting(props?: IPCB_AutoRoutingProps): Promise<IPCB_AutoRoutingResult>;`
- **clearrouting**: `public clearRouting(type?: 'all' | 'net' | 'connection'): Promise<boolean>;`
- **convertcanvasorigintodataorigin**: `public convertCanvasOriginToDataOrigin(x: number, y: number): Promise<{ x: number; y: number }>;`
- **convertdataorigintocanvasorigin**: `public convertDataOriginToCanvasOrigin(x: number, y: number): Promise<{ x: number; y: number }>;`
- **getcalculatingratlinestatus**: `public getCalculatingRatlineStatus(): Promise<EPCB_DocumentRatlineCalculatingActiveStatus | undefined>;`
- **getcanvasorigin**: `public getCanvasOrigin(): Promise<{ offsetX: number; offsetY: number }>;`
- **getcanvasupdatecalculationstatus**: `public getCanvasUpdateCalculationStatus(): Promise<EPCB_DocumentCanvasUpdateCalculationActiveStatus | undefined>;`
- **getcurrentfilterconfiguration**: `public getCurrentFilterConfiguration(): Promise<Record<string, any> | undefined>;`
- **getprimitiveatpoint**: `public getPrimitiveAtPoint(x: number, y: number): Promise<IPCB_Primitive | undefined>;`
- **getprimitivesinregion**: `public getPrimitivesInRegion(left: number, right: number, top: number, bottom: number, leftToRight?: boolean): Promise<Array<IPCB_Primitive>>;`
- **importautolayoutjsonfile**: `public importAutoLayoutJsonFile(autoLayoutFile: File): Promise<boolean>;`
- **importautoroutejsonfile**: `public importAutoRouteJsonFile(autoRouteFile: File): Promise<boolean>;`
- **importautoroutesesfile**: `public importAutoRouteSesFile(autoRouteFile: File): Promise<boolean>;`
- **importchanges**: `public importChanges(uuid?: string): Promise<boolean>;`
- **navigatetocoordinates**: `public navigateToCoordinates(x: number, y: number): Promise<boolean>;`
- **navigatetoregion**: `public navigateToRegion(left: number, right: number, top: number, bottom: number): Promise<boolean>;`
- **save**: `public save(): Promise<boolean>;`
- **setcanvasorigin**: `public setCanvasOrigin(offsetX: number, offsetY: number): Promise<boolean>;`
- **startcalculatingratline**: `public startCalculatingRatline(): Promise<boolean>;`
- **startcanvasupdatecalculation**: `public startCanvasUpdateCalculation(): Promise<boolean>;`
- **stopcalculatingratline**: `public stopCalculatingRatline(): Promise<boolean>;`
- **stopcanvasupdatecalculation**: `public stopCanvasUpdateCalculation(): Promise<boolean>;`
- **triggercanvasupdatecalculation**: `public triggerCanvasUpdateCalculation(): Promise<boolean>;`
- **zoomtoboardoutline**: `public zoomToBoardOutline(): Promise<boolean>;`

---

## PCB_Drc

PCB &amp; 封装 / 设计规则检查（DRC）类

```typescript
export class PCB_Drc
```

- **addnettoequallengthnetgroup**: `public addNetToEqualLengthNetGroup(equalLengthNetGroupName: string, net: string | Array<string>): Promise<boolean>;`
- **addnettonetclass**: `public addNetToNetClass(netClassName: string, net: string | Array<string>): Promise<boolean>;`
- **addpadpairtopadpairgroup**: `public addPadPairToPadPairGroup(padPairGroupName: string, padPair: [string, string] | Array<[string, string]>): Promise<boolean>;`
- **check**: `public check(strict: boolean, userInterface: boolean, includeVerboseError: false): Promise<boolean>;`
- **check_1**: `public check(strict: boolean, userInterface: boolean, includeVerboseError: true): Promise<Array<any>>;`
- **createdifferentialpair**: `public createDifferentialPair(differentialPairName: string, positiveNet: string, negativeNet: string): Promise<boolean>;`
- **createequallengthnetgroup**: `public createEqualLengthNetGroup(equalLengthNetGroupName: string, nets: Array<string>, color: IPCB_EqualLengthNetGroupItem['color']): Promise<boolean>;`
- **createnetclass**: `public createNetClass(netClassName: string, nets: Array<string>, color: IPCB_EqualLengthNetGroupItem['color']): Promise<boolean>;`
- **createpadpairgroup**: `public createPadPairGroup(padPairGroupName: string, padPairs: Array<[string, string]>): Promise<boolean>;`
- **deletedifferentialpair**: `public deleteDifferentialPair(differentialPairName: string): Promise<boolean>;`
- **deleteequallengthnetgroup**: `public deleteEqualLengthNetGroup(equalLengthNetGroupName: string): Promise<boolean>;`
- **deletenetclass**: `public deleteNetClass(netClassName: string): Promise<boolean>;`
- **deletepadpairgroup**: `public deletePadPairGroup(padPairGroupName: string): Promise<boolean>;`
- **deleteruleconfiguration**: `public deleteRuleConfiguration(configurationName: string): Promise<boolean>;`
- **getalldifferentialpairs**: `public getAllDifferentialPairs(): Promise<Array<IPCB_DifferentialPairItem> | Record<string, any>>;`
- **getallequallengthnetgroups**: `public getAllEqualLengthNetGroups(): Promise<Array<IPCB_EqualLengthNetGroupItem>>;`
- **getallnetclasses**: `public getAllNetClasses(): Promise<Array<IPCB_NetClassItem>>;`
- **getallpadpairgroups**: `public getAllPadPairGroups(): Promise<Array<IPCB_PadPairGroupItem>>;`
- **getallruleconfigurations**: `public getAllRuleConfigurations(includeSystem?: boolean): Promise<Array<Record<string, any>>>;`
- **getcurrentruleconfiguration**: `public getCurrentRuleConfiguration(): Promise<Record<string, any> | undefined>;`
- **getcurrentruleconfigurationname**: `public getCurrentRuleConfigurationName(): Promise<string | undefined>;`
- **getdefaultruleconfigurationname**: `public getDefaultRuleConfigurationName(): Promise<string | undefined>;`
- **getnetbynetrules**: `public getNetByNetRules(): Promise<Record<string, any>>;`
- **getnetrules**: `public getNetRules(): Promise<Array<Record<string, any>>>;`
- **getpadpairgroupminwirelength**: `public getPadPairGroupMinWireLength(padPairGroupName: string): Promise<Array<IPCB_PadPairMinWireLengthItem>>;`
- **getrealtimedrcstatus**: `public getRealTimeDrcStatus(): Promise<boolean>;`
- **getregionrules**: `public getRegionRules(): Promise<Array<Record<string, any>>>;`
- **getruleconfiguration**: `public getRuleConfiguration(configurationName: string): Promise<Record<string, any> | undefined>;`
- **modifydifferentialpairname**: `public modifyDifferentialPairName(originalDifferentialPairName: string, differentialPairName: string): Promise<boolean>;`
- **modifydifferentialpairnegativenet**: `public modifyDifferentialPairNegativeNet(differentialPairName: string, negativeNet: string): Promise<boolean>;`
- **modifydifferentialpairpositivenet**: `public modifyDifferentialPairPositiveNet(differentialPairName: string, positiveNet: string): Promise<boolean>;`
- **modifyequallengthnetgroupname**: `public modifyEqualLengthNetGroupName(originalEqualLengthNetGroupName: string, equalLengthNetGroupName: string): Promise<boolean>;`
- **modifynetclassname**: `public modifyNetClassName(originalNetClassName: string, netClassName: string): Promise<boolean>;`
- **modifypadpairgroupname**: `public modifyPadPairGroupName(originalPadPairGroupName: string, padPairGroupName: string): Promise<boolean>;`
- **overwritecurrentruleconfiguration**: `public overwriteCurrentRuleConfiguration(ruleConfiguration: Record<string, any>): Promise<boolean>;`
- **overwritenetbynetrules**: `public overwriteNetByNetRules(netByNetRules: Record<string, any>): Promise<boolean>;`
- **overwritenetrules**: `public overwriteNetRules(netRules: Array<Record<string, any>>): Promise<boolean>;`
- **overwriteregionrules**: `public overwriteRegionRules(regionRules: Array<Record<string, any>>): Promise<boolean>;`
- **removenetfromequallengthnetgroup**: `public removeNetFromEqualLengthNetGroup(equalLengthNetGroupName: string, net: string | Array<string>): Promise<boolean>;`
- **removenetfromnetclass**: `public removeNetFromNetClass(netClassName: string, net: string | Array<string>): Promise<boolean>;`
- **removepadpairfrompadpairgroup**: `public removePadPairFromPadPairGroup(padPairGroupName: string, padPair: [string, string] | Array<[string, string]>): Promise<boolean>;`
- **renameruleconfiguration**: `public renameRuleConfiguration(originalConfigurationName: string, configurationName: string): Promise<boolean>;`
- **saveruleconfiguration**: `public saveRuleConfiguration(ruleConfiguration: Record<string, any>, configurationName: string, allowOverwrite?: boolean): Promise<boolean>;`
- **setasdefaultruleconfiguration**: `public setAsDefaultRuleConfiguration(configurationName: string): Promise<boolean>;`
- **startrealtimedrc**: `public startRealTimeDrc(): Promise<boolean>;`
- **stoprealtimedrc**: `public stopRealTimeDrc(): Promise<boolean>;`

---

## PCB_Event

PCB &amp; 封装 / 事件类

```typescript
export class PCB_Event
```

- **addcrossprobeselecteventlistener**: `public addCrossProbeSelectEventListener(id: string, callFn: (props: any) => void | Promise<void>): void;`
- **addmouseeventlistener**: `public addMouseEventListener(id: string, eventType: 'all' | EPCB_MouseEventType, callFn: (eventType: EPCB_MouseEventType, props: [{ primitiveId: string; primitiveType: EPCB_PrimitiveType; net?: undefined | string; designator?: undefined | string; parentComponentPrimitiveId?: undefined | string; parentComponentDesignator?: undefined | string }]) => void | Promise<void>, onlyOnce?: boolean): void;`
- **addneteventlistener**: `public addNetEventListener(id: string, eventType: 'all' | EPCB_NetEventType, callFn: (eventType: EPCB_NetEventType, props: [{ net: string }]) => void | Promise<void>, onlyOnce?: boolean): void;`
- **addprimitiveeventlistener**: `public addPrimitiveEventListener(id: string, eventType: 'all' | EPCB_PrimitiveEventType, callFn: (eventType: EPCB_PrimitiveEventType, props: [{ primitiveId: string; primitiveType: EPCB_PrimitiveType; net?: undefined | string; designator?: undefined | string; parentComponentPrimitiveId?: undefined | string; parentComponentDesignator?: undefined | string }]) => void | Promise<void>, onlyOnce?: boolean): void;`
- **addraytracerengine3dviewcamerachangeeventlistener**: `public addRayTracerEngine3DViewCameraChangeEventListener(id: string, callFn: (props: { position: { x: number; y: number; z: number }; rotation: { x: number; y: number; z: number }; focalLength: number }) => void | Promise<void>, onlyOnce?: boolean): void;`
- **addraytracerengine3dviewclickmaterialeventlistener**: `public addRayTracerEngine3DViewClickMaterialEventListener(id: string, callFn: (props: { materialId: number; material: any }) => void | Promise<void>, onlyOnce?: boolean): void;`
- **addrealtimedrcresulteventlistener**: `public addRealTimeDrcResultEventListener(id: string, eventType: 'all', callFn: (eventType: undefined, props: [{ drcResult: any }]) => void | Promise<void>): void;`
- **iseventlisteneralreadyexist**: `public isEventListenerAlreadyExist(id: string): boolean;`
- **removeeventlistener**: `public removeEventListener(id: string): boolean;`

---

## PCB_Layer

PCB &amp; 封装 / 图层操作类

```typescript
export class PCB_Layer
```

- **addcustomlayer**: `public addCustomLayer(): Promise<TPCB_LayersOfCustom | undefined>;`
- **deletephysicalstackingconfiguration**: `public deletePhysicalStackingConfiguration(configurationName: string, physicalProps?: IPCB_SubstratePhysicalProperties): Promise<boolean>;`
- **getalllayers**: `public getAllLayers(): Promise<Array<IPCB_LayerItem>>;`
- **getallphysicalstackingconfigurations**: `public getAllPhysicalStackingConfigurations(physicalProps?: IPCB_SubstratePhysicalProperties): Promise<Array<IPCB_PhysicalStackingConfiguration>>;`
- **getcurrentlayer**: `public getCurrentLayer(): Promise<IPCB_LayerItem | undefined>;`
- **getcurrentphysicalstackingconfiguration**: `public getCurrentPhysicalStackingConfiguration(): Promise<IPCB_PhysicalStackingConfiguration | undefined>;`
- **getcurrentphysicalstackingconfigurationname**: `public getCurrentPhysicalStackingConfigurationName(): Promise<string | undefined>;`
- **getdefaultphysicalstackingconfigurationname**: `public getDefaultPhysicalStackingConfigurationName(physicalProps?: IPCB_SubstratePhysicalProperties): Promise<string | undefined>;`
- **getphysicalstackingconfiguration**: `public getPhysicalStackingConfiguration(configurationName: string, physicalProps?: IPCB_SubstratePhysicalProperties): Promise<IPCB_PhysicalStackingConfiguration | undefined>;`
- **locklayer**: `public lockLayer(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>): Promise<boolean>;`
- **modifylayer**: `public modifyLayer(layer: TPCB_LayersInTheSelectable, property: { name?: undefined | string; type?: undefined | EPCB_LayerType.SIGNAL | EPCB_LayerType.INTERNAL_ELECTRICAL; color?: undefined | string; transparency?: undefined | number }): Promise<boolean>;`
- **overwritecurrentphysicalstackingconfiguration**: `public overwriteCurrentPhysicalStackingConfiguration(physicalStackingConfiguration: IPCB_PhysicalStackingConfiguration): Promise<boolean>;`
- **removelayer**: `public removeLayer(layer: TPCB_LayersOfCustom): Promise<boolean>;`
- **renamephysicalstackingconfiguration**: `public renamePhysicalStackingConfiguration(originalConfigurationName: string, configurationName: string, physicalProps?: IPCB_SubstratePhysicalProperties): Promise<boolean>;`
- **savephysicalstackingconfiguration**: `public savePhysicalStackingConfiguration(physicalStackingConfiguration: IPCB_PhysicalStackingConfiguration, configurationName: string, physicalProps?: IPCB_SubstratePhysicalProperties, allowOverwrite?: boolean): Promise<boolean>;`
- **selectlayer**: `public selectLayer(layer: TPCB_LayersInTheSelectable): Promise<boolean>;`
- **setasdefaultphysicalstackingconfiguration**: `public setAsDefaultPhysicalStackingConfiguration(configurationName: string, physicalProps?: IPCB_SubstratePhysicalProperties): Promise<boolean>;`
- **setinactivelayerdisplaymode**: `public setInactiveLayerDisplayMode(displayMode?: EPCB_InactiveLayerDisplayMode): Promise<boolean>;`
- **setinactivelayertransparency**: `public setInactiveLayerTransparency(transparency: number): Promise<boolean>;`
- **setlayercolorconfiguration**: `public setLayerColorConfiguration(colorConfiguration: EPCB_LayerColorConfiguration): Promise<boolean>;`
- **setlayerinvisible**: `public setLayerInvisible(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, setOtherLayerVisible?: boolean): Promise<boolean>;`
- **setlayervisible**: `public setLayerVisible(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, setOtherLayerInvisible?: boolean): Promise<boolean>;`
- **setpcbtype**: `public setPcbType(pcbType: EPCB_PcbPlateType): Promise<boolean>;`
- **setthenumberofcopperlayers**: `public setTheNumberOfCopperLayers(numberOfLayers: TPCB_NumberOfCopperLayers): Promise<boolean>;`
- **unlocklayer**: `public unlockLayer(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>): Promise<boolean>;`

---

## PCB_ManufactureData

PCB &amp; 封装 / 生产资料类

```typescript
export class PCB_ManufactureData
```

- **deletebomtemplate**: `public deleteBomTemplate(template: string): Promise<boolean>;`
- **get3dfile**: `public get3DFile(fileName?: string, fileType?: 'step' | 'obj', element?: Array<'Component Model' | 'Via' | 'Silkscreen' | 'Wire In Signal Layer'>, modelMode?: 'Outfit' | 'Parts', autoGenerateModels?: boolean): Promise<File | undefined>;`
- **get3dshellfile**: `public get3DShellFile(fileName?: string, fileType?: 'stl' | 'step' | 'obj'): Promise<File | undefined>;`
- **getaltiumdesignerfile**: `public getAltiumDesignerFile(fileName?: string): Promise<File | undefined>;`
- **getautolayoutjsonfile**: `public getAutoLayoutJsonFile(fileName?: string): Promise<File | undefined>;`
- **getautoroutejsonfile**: `public getAutoRouteJsonFile(fileName?: string): Promise<File | undefined>;`
- **getautoroutejsonfileforjrouter**: `public getAutoRouteJsonFileForJRouter(fileName?: string): Promise<File | undefined>;`
- **getbomfile**: `public getBomFile(fileName?: string, fileType?: 'xlsx' | 'csv', template?: string, filterOptions?: Array<{ property: string; includeValue: string | false | true }>, statistics?: Array<string>, property?: Array<string>, columns?: Array<IPCB_BomPropertiesTableColumns>): Promise<File | undefined>;`
- **getbomtemplatefile**: `public getBomTemplateFile(template: string): Promise<File | undefined>;`
- **getbomtemplates**: `public getBomTemplates(): Promise<Array<string>>;`
- **getdsnfile**: `public getDsnFile(fileName?: string): Promise<File | undefined>;`
- **getdxffile**: `public getDxfFile(fileName?: string, layers?: Array<{ layerId: number; mirror: boolean }>, objects?: Array<string>): Promise<File | undefined>;`
- **getflyingprobetestfile**: `public getFlyingProbeTestFile(fileName?: string): Promise<File | undefined>;`
- **getgerberfile**: *(签名过长，请查看详细文档)*
- **getidxfile**: `public getIdxFile(fileName?: string): Promise<File | undefined>;`
- **getipc2581cfile**: `public getIpc2581CFile(fileName?: string, fileType?: 'xml' | 'cvg' | '2581', unit?: ESYS_Unit.INCH | ESYS_Unit.MILLIMETER, oemNumber?: 'Device' | 'Manufacturer Part' | 'Supplier Part' | 'Comment'): Promise<File | undefined>;`
- **getipcd356afile**: `public getIpcD356AFile(fileName?: string): Promise<File | undefined>;`
- **getmanufacturedata**: `public getManufactureData(): Promise<File | undefined>;`
- **getnetlistfile**: `public getNetlistFile(fileName?: string, netlistType?: ESYS_NetlistType): Promise<File | undefined>;`
- **getopendatabasedoubleplusfile**: `public getOpenDatabaseDoublePlusFile(fileName?: string, unit?: ESYS_Unit.INCH | ESYS_Unit.MILLIMETER, otherData?: { metallizedDrilledHoles?: undefined | false | true; nonMetallizedDrilledHoles?: undefined | false | true; drillTable?: undefined | false | true; flyingProbeTestFile?: undefined | false | true }, layers?: Array<{ layerId: number; mirror: boolean }>, objects?: Array<{ objectName: string }>): Promise<File | undefined>;`
- **getpadsfile**: `public getPadsFile(fileName?: string): Promise<File | undefined>;`
- **getpcbinfofile**: `public getPcbInfoFile(fileName?: string): Promise<File | undefined>;`
- **getpdffile**: *(签名过长，请查看详细文档)*
- **getpickandplacefile**: `public getPickAndPlaceFile(fileName?: string, fileType?: 'xlsx' | 'csv', unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.MIL): Promise<File | undefined>;`
- **gettestpointfile**: `public getTestPointFile(fileName?: string, fileType?: 'xlsx' | 'csv'): Promise<File | undefined>;`
- **place3dshellorder**: `public place3DShellOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placecomponentsorder**: `public placeComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placepcborder**: `public placePcbOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placesmtcomponentsorder**: `public placeSmtComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **uploadbomtemplatefile**: `public uploadBomTemplateFile(templateFile: File, template?: string): Promise<string | undefined>;`

---

## PCB_MathPolygon

PCB &amp; 封装 / 多边形数学类

```typescript
export class PCB_MathPolygon
```

- **calculatebboxheight**: `public calculateBBoxHeight(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>): number;`
- **calculateheight**: `public calculateHeight(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon): number;`
- **calculatewidth**: `public calculateWidth(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon): number;`
- **convertimagetocomplexpolygon**: `public convertImageToComplexPolygon(imageBlob: Blob, imageWidth: number, imageHeight: number, tolerance?: number, simplification?: number, smoothing?: number, despeckling?: number, whiteAsBackgroundColor?: boolean, inversion?: boolean): Promise<IPCB_ComplexPolygon | undefined>;`
- **createcomplexpolygon**: `public createComplexPolygon(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon | undefined;`
- **createpolygon**: `public createPolygon(polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined;`
- **discretize**: `public discretize(polygon: IPCB_Polygon | TPCB_PolygonSourceArray, options?: IPCB_DiscretizeOptions): Promise<Array<IPCB_DiscretizedPoint>>;`
- **splitpolygon**: `public splitPolygon(...complexPolygons: Array<IPCB_ComplexPolygon>): Array<IPCB_Polygon>;`

---

## PCB_Net

PCB &amp; 封装 / 网络类

```typescript
export class PCB_Net
```

- **getallnetname**: `public getAllNetName(): Promise<Array<string>>;`
- **getallnets**: `public getAllNets(): Promise<Array<IPCB_NetInfo>>;`
- **getallnetsname**: `public getAllNetsName(): Promise<Array<string>>;`
- **getallprimitivesbynet**: `public getAllPrimitivesByNet(net: string, primitiveTypes?: Array<EPCB_PrimitiveType>): Promise<Array<IPCB_Primitive>>;`
- **getnet**: `public getNet(net: string): Promise<IPCB_NetInfo | undefined>;`
- **getnetcolor**: `public getNetColor(net: string): Promise<IPCB_NetInfo['color'] | undefined>;`
- **getnetlength**: `public getNetLength(net: string): Promise<number | undefined>;`
- **getnetlist**: `public getNetlist(type?: ESYS_NetlistType): Promise<string>;`
- **highlightnet**: `public highlightNet(net: string): Promise<boolean>;`
- **selectnet**: `public selectNet(net: string): Promise<boolean>;`
- **setnetcolor**: `public setNetColor(net: string, color: IPCB_NetInfo['color']): Promise<boolean>;`
- **setnetlist**: `public setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<boolean>;`
- **unhighlightallnets**: `public unhighlightAllNets(): Promise<boolean>;`
- **unhighlightnet**: `public unhighlightNet(net: string): Promise<boolean>;`
- **unselectallnets**: `public unselectAllNets(): Promise<boolean>;`
- **unselectnet**: `public unselectNet(net: string): Promise<boolean>;`

---

## PCB_Primitive

PCB &amp; 封装 / 图元类

```typescript
export class PCB_Primitive
```

- **getprimitiveboardline**: `public getPrimitiveBoardLine(primitiveId: string, layers?: Array<EPCB_LayerId>): Promise<IPCB_ComplexPolygon | undefined>;`
- **getprimitivesbbox**: `public getPrimitivesBBox(primitiveIds: Array<string | IPCB_Primitive>): Promise<{ minX: number; minY: number; maxX: number; maxY: number } | undefined>;`

---

## PCB_PrimitiveArc

PCB &amp; 封装 / 圆弧线图元类

```typescript
export class PCB_PrimitiveArc implements IPCB_PrimitiveAPI
```

- **create**: `public create(net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, arcAngle: number, lineWidth?: number, interactiveMode?: EPCB_PrimitiveArcInteractiveMode, primitiveLock?: boolean): Promise<IPCB_PrimitiveArc | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitiveArc | Array<string> | Array<IPCB_PrimitiveArc>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitiveArc | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveArc>>;`
- **getall**: `public getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveArc>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitiveAttribute

PCB &amp; 封装 / 属性图元类

```typescript
export class PCB_PrimitiveAttribute implements IPCB_PrimitiveAPI
```

- **delete**: `public delete(primitiveIds: string | IPCB_PrimitiveAttribute | Array<string> | Array<IPCB_PrimitiveAttribute>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitiveAttribute | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveAttribute>>;`
- **getall**: `public getAll(parentPrimitiveId?: string, layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveAttribute>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(parentPrimitiveId?: string, layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitiveComponent

PCB &amp; 封装 / 器件图元类

```typescript
export class PCB_PrimitiveComponent implements IPCB_PrimitiveAPI
```

- **create**: `public create(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem | { libraryType: ELIB_LibraryType.FOOTPRINT; libraryUuid: string; uuid: string } | ILIB_FootprintItem | ILIB_FootprintSearchItem, layer: TPCB_LayersOfComponent, x: number, y: number, rotation?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveComponent | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitiveComponent | Array<string> | Array<IPCB_PrimitiveComponent>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitiveComponent | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveComponent>>;`
- **getall**: `public getAll(layer?: TPCB_LayersOfComponent, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveComponent>>;`
- **getallpinsbyprimitiveid**: `public getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<IPCB_PrimitiveComponentPad> | undefined>;`
- **getallprimitiveid**: `public getAllPrimitiveId(layer?: TPCB_LayersOfComponent, primitiveLock?: boolean): Promise<Array<string>>;`
- **getallpropertynames**: `public getAllPropertyNames(): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*
- **placecomponentwithmouse**: `public placeComponentWithMouse(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **placefootprintwithmouse**: `public placeFootprintWithMouse(footprint: { libraryUuid: string; uuid: string } | ILIB_FootprintItem | ILIB_FootprintSearchItem, properties?: Record<string, boolean | number | string | undefined>): Promise<boolean>;`

---

## PCB_PrimitiveDimension

PCB &amp; 封装 / 尺寸标注图元类

```typescript
export class PCB_PrimitiveDimension implements IPCB_PrimitiveAPI
```

- **create**: `public create(dimensionType: EPCB_PrimitiveDimensionType, coordinateSet: TPCB_PrimitiveDimensionCoordinateSet, layer?: TPCB_LayersOfDimension, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL, lineWidth?: number, precision?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveDimension | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitiveDimension | Array<string> | Array<IPCB_PrimitiveDimension>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitiveDimension | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveDimension>>;`
- **getall**: `public getAll(layer?: TPCB_LayersOfDimension, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveDimension>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(layer?: TPCB_LayersOfDimension, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitiveFill

PCB &amp; 封装 / 填充图元类

```typescript
export class PCB_PrimitiveFill implements IPCB_PrimitiveAPI
```

- **create**: `public create(layer: TPCB_LayersOfFill, complexPolygon: IPCB_Polygon, net?: string, fillMode?: EPCB_PrimitiveFillMode, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveFill | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitiveFill | Array<string> | Array<IPCB_PrimitiveFill>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitiveFill | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveFill>>;`
- **getall**: `public getAll(layer?: TPCB_LayersOfFill, net?: string, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveFill>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(layer?: TPCB_LayersOfFill, net?: string, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitiveImage

PCB &amp; 封装 / 图像图元类

```typescript
export class PCB_PrimitiveImage implements IPCB_PrimitiveAPI
```

- **create**: `public create(x: number, y: number, complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon, layer: TPCB_LayersOfImage, width?: number, height?: number, rotation?: number, horizonMirror?: boolean, primitiveLock?: boolean): Promise<IPCB_PrimitiveImage | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitiveImage | Array<string> | Array<IPCB_PrimitiveImage>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitiveImage | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveImage>>;`
- **getall**: `public getAll(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveImage>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitiveLine

PCB &amp; 封装 / 直线图元类

```typescript
export class PCB_PrimitiveLine implements IPCB_PrimitiveAPI
```

- **create**: `public create(net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveLine | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitiveLine | Array<string> | Array<IPCB_PrimitiveLine>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitiveLine | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveLine>>;`
- **getall**: `public getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveLine>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitiveObject

PCB &amp; 封装 / 二进制内嵌对象图元类

```typescript
export class PCB_PrimitiveObject implements IPCB_PrimitiveAPI
```

- **create**: `public create(layer: TPCB_LayersOfObject, topLeftX: number, topLeftY: number, binaryData: string, width: number, height: number, rotation?: number, mirror?: boolean, fileName?: string, primitiveLock?: boolean): Promise<IPCB_PrimitiveObject | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitiveObject | Array<string> | Array<IPCB_PrimitiveObject>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitiveObject | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveObject>>;`
- **getall**: `public getAll(layer?: TPCB_LayersOfObject, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveObject>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(layer?: TPCB_LayersOfObject, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitivePad

PCB &amp; 封装 / 焊盘图元类

```typescript
export class PCB_PrimitivePad implements IPCB_PrimitiveAPI
```

- **create**: *(签名过长，请查看详细文档)*
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitivePad | Array<string> | Array<IPCB_PrimitivePad>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitivePad | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePad>>;`
- **getall**: `public getAll(layer?: TPCB_LayersOfPad, net?: string, primitiveLock?: boolean, padType?: EPCB_PrimitivePadType): Promise<Array<IPCB_PrimitivePad>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(layer?: TPCB_LayersOfPad, net?: string, primitiveLock?: boolean, padType?: EPCB_PrimitivePadType): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitivePolyline

PCB &amp; 封装 / 折线图元类

```typescript
export class PCB_PrimitivePolyline implements IPCB_PrimitiveAPI
```

- **create**: `public create(net: string, layer: TPCB_LayersOfLine, polygon: IPCB_Polygon, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePolyline | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitivePolyline | Array<string> | Array<IPCB_PrimitivePolyline>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitivePolyline | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePolyline>>;`
- **getall**: `public getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitivePolyline>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitivePour

PCB &amp; 封装 / 覆铜边框图元类

```typescript
export class PCB_PrimitivePour implements IPCB_PrimitiveAPI
```

- **create**: `public create(net: string, layer: TPCB_LayersOfCopper, complexPolygon: IPCB_Polygon, pourFillMethod?: EPCB_PrimitivePourFillMethod, preserveSilos?: boolean, pourName?: string, pourPriority?: number, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePour | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitivePour | Array<string> | Array<IPCB_PrimitivePour>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitivePour | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePour>>;`
- **getall**: `public getAll(net?: string, layer?: TPCB_LayersOfCopper, primitiveLock?: boolean): Promise<Array<IPCB_PrimitivePour>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfCopper, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitivePoured

PCB &amp; 封装 / 覆铜填充图元类

```typescript
export class PCB_PrimitivePoured implements IPCB_PrimitiveAPI
```

- **delete**: `public delete(primitiveIds: string | IPCB_PrimitivePoured | Array<string> | Array<IPCB_PrimitivePoured>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitivePoured | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePoured>>;`
- **getall**: `public getAll(): Promise<Array<IPCB_PrimitivePoured>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(): Promise<Array<string>>;`

---

## PCB_PrimitiveRegion

PCB &amp; 封装 / 禁止区域和约束区域图元类

```typescript
export class PCB_PrimitiveRegion implements IPCB_PrimitiveAPI
```

- **create**: `public create(layer: TPCB_LayersOfRegion, complexPolygon: IPCB_Polygon, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, regionName?: string, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveRegion | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitiveRegion | Array<string> | Array<IPCB_PrimitiveRegion>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitiveRegion | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveRegion>>;`
- **getall**: `public getAll(layer?: TPCB_LayersOfRegion, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveRegion>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(layer?: TPCB_LayersOfRegion, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitiveString

PCB &amp; 封装 / 文本图元类

```typescript
export class PCB_PrimitiveString implements IPCB_PrimitiveAPI
```

- **create**: `public create(layer: TPCB_LayersOfImage, x: number, y: number, text: string, fontFamily: string, fontSize: number, lineWidth: number, alignMode: EPCB_PrimitiveStringAlignMode, rotation: number, reverse: boolean, expansion: number, mirror: boolean, primitiveLock: boolean): Promise<IPCB_PrimitiveString | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitiveString | Array<string> | Array<IPCB_PrimitiveString>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitiveString | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveString>>;`
- **getall**: `public getAll(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveString>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitiveVia

PCB &amp; 封装 / 过孔图元类

```typescript
export class PCB_PrimitiveVia implements IPCB_PrimitiveAPI
```

- **create**: `public create(net: string, x: number, y: number, holeDiameter: number, diameter: number, viaType?: EPCB_PrimitiveViaType, designRuleBlindViaName?: string | null, solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, primitiveLock?: boolean): Promise<IPCB_PrimitiveVia | undefined>;`
- **delete**: `public delete(primitiveIds: string | IPCB_PrimitiveVia | Array<string> | Array<IPCB_PrimitiveVia>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<IPCB_PrimitiveVia | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveVia>>;`
- **getall**: `public getAll(net?: string, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveVia>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(net?: string, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_RayTracerEngine

PCB &amp; 封装 / 光线追踪引擎类

```typescript
export class PCB_RayTracerEngine
```

- **dispose**: `public dispose(): Promise<void>;`
- **getlightconfigurations**: `public getLightConfigurations(lightName: string): Promise<any>;`
- **getrenderconfigurations**: `public getRenderConfigurations(): Promise<any>;`
- **init**: `public init(): Promise<void>;`
- **setrenderconfigurations**: `public setRenderConfigurations(configurations: any): Promise<void>;`

---

## PCB_SelectControl

PCB &amp; 封装 / 选择控制类

```typescript
export class PCB_SelectControl
```

- **clearselected**: `public clearSelected(): Promise<boolean>;`
- **docrossprobeselect**: `public doCrossProbeSelect(components?: Array<string>, pins?: Array<string>, nets?: Array<string>, highlight?: boolean, select?: boolean): Promise<boolean>;`
- **doselectprimitives**: `public doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;`
- **getallselectedprimitives**: `public getAllSelectedPrimitives(): Promise<Array<IPCB_Primitive>>;`
- **getallselectedprimitives_primitiveid**: `public getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;`
- **getcurrentmouseposition**: `public getCurrentMousePosition(): Promise<{ x: number; y: number } | undefined>;`
- **getselectedprimitives**: `public getSelectedPrimitives(): Promise<Array<object>>;`

---

## PNL_Document

面板 / 文档操作类

```typescript
export class PNL_Document
```

- **save**: `public save(): Promise<boolean>;`

---

## SCH_Document

原理图 &amp; 符号 / 文档操作类

```typescript
export class SCH_Document
```

- **autolayout**: `public autoLayout(props?: { uuids?: undefined | string[]; netlist?: undefined | { component: Record<string, { pinInfoMap: Record<string, { name: string; number: string; net: string; props: { 'Pin Number': string } }> }> }; designatorDeviceTypeMap?: undefined | Record<string, 'resistor' | 'capacitor' | 'inductive' | 'diode' | 'triode' | 'oscillator' | 'chip' | 'otherDevice'> }): Promise<any>;`
- **autorouting**: `public autoRouting(props?: { uuids?: undefined | string[]; netlist?: undefined | { component: Record<string, { pinInfoMap: Record<string, { name: string; number: string; net: string; props: { 'Pin Number': string } }> }> }; designatorDeviceTypeMap?: undefined | Record<string, 'resistor' | 'capacitor' | 'inductive' | 'diode' | 'triode' | 'oscillator' | 'chip' | 'otherDevice'> }): Promise<any>;`
- **getcurrentfilterconfiguration**: `public getCurrentFilterConfiguration(): Promise<Record<string, boolean> | undefined>;`
- **getprimitiveatpoint**: `public getPrimitiveAtPoint(x: number, y: number): Promise<ISCH_Primitive | undefined>;`
- **getprimitivesinregion**: `public getPrimitivesInRegion(left: number, right: number, top: number, bottom: number): Promise<Array<ISCH_Primitive>>;`
- **importchanges**: `public importChanges(): Promise<boolean>;`
- **navigatetocoordinates**: `public navigateToCoordinates(x: number, y: number): Promise<boolean>;`
- **navigatetoregion**: `public navigateToRegion(left: number, right: number, top: number, bottom: number): Promise<boolean>;`
- **save**: `public save(): Promise<boolean>;`

---

## SCH_Drc

原理图 &amp; 符号 / 设计规则检查（DRC）类

```typescript
export class SCH_Drc
```

- **check**: `public check(strict: boolean, userInterface: boolean, includeVerboseError: false): Promise<boolean>;`
- **check_1**: `public check(strict: boolean, userInterface: boolean, includeVerboseError: true): Promise<Array<ISCH_DrcError>>;`

---

## SCH_Event

原理图 &amp; 符号 / 事件类

```typescript
export class SCH_Event
```

- **addmouseeventlistener**: `public addMouseEventListener(id: string, eventType: 'all' | ESCH_MouseEventType, callFn: (eventType: ESCH_MouseEventType) => void | Promise<void>, onlyOnce?: boolean): void;`
- **addprimitiveeventlistener**: `public addPrimitiveEventListener(id: string, eventType: 'all' | ESCH_PrimitiveEventType, callFn: (eventType: ESCH_PrimitiveEventType, props: { primitiveIds: string[] }) => void | Promise<void>, onlyOnce?: boolean): void;`
- **addsimulationenginepulleventlistener**: `public addSimulationEnginePullEventListener(id: string, eventType: 'all', callFn: (eventType: ESCH_DynamicSimulationEnginePullEventType | ESCH_SpiceSimulationEnginePullEventType, props: Record<string, any>) => void | Promise<void>): void;`
- **iseventlisteneralreadyexist**: `public isEventListenerAlreadyExist(id: string): boolean;`
- **removeeventlistener**: `public removeEventListener(id: string): boolean;`

---

## SCH_ManufactureData

原理图 &amp; 符号 / 生产资料类

```typescript
export class SCH_ManufactureData
```

- **deletebomtemplate**: `public deleteBomTemplate(template: string): Promise<boolean>;`
- **getassemblyvariantsconfigs**: `public getAssemblyVariantsConfigs(): Promise<Array<{ text: string; value: string }>>;`
- **getbomfile**: `public getBomFile(fileName?: string, fileType?: 'xlsx' | 'csv', template?: string, filterOptions?: Array<{ property: string; includeValue: string | false | true }>, statistics?: Array<string>, property?: Array<string>, columns?: Array<IPCB_BomPropertiesTableColumns>, assemblyVariantsConfig?: { text: string; value: string }): Promise<File | undefined>;`
- **getbomtemplatefile**: `public getBomTemplateFile(template: string): Promise<File | undefined>;`
- **getbomtemplates**: `public getBomTemplates(): Promise<Array<string>>;`
- **getexportdocumentfile**: *(签名过长，请查看详细文档)*
- **getnetlistfile**: `public getNetlistFile(fileName?: string, netlistType?: ESYS_NetlistType): Promise<File | undefined>;`
- **getsimulationnetlistfile**: `public getSimulationNetlistFile(fileName?: string, netlistType?: ESCH_SimulationNetlistType): Promise<File | undefined>;`
- **placecomponentsorder**: `public placeComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placesmtcomponentsorder**: `public placeSmtComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **uploadbomtemplatefile**: `public uploadBomTemplateFile(templateFile: File, template?: string): Promise<string | undefined>;`

---

## SCH_Net

原理图 &amp; 符号 / 网络类

```typescript
export class SCH_Net
```

- **getallnets**: `public getAllNets(): Promise<Array<ISCH_NetInfo>>;`
- **getallnetsname**: `public getAllNetsName(): Promise<Array<string>>;`
- **getcurrentprojectallnets**: `public getCurrentProjectAllNets(): Promise<Array<ISCH_ProjectNetInfo>>;`
- **getnet**: `public getNet(net: string): Promise<ISCH_NetInfo | undefined>;`

---

## SCH_Netlist

原理图 &amp; 符号 / 网表类

```typescript
export class SCH_Netlist
```

- **getnetlist**: `public getNetlist(type?: ESYS_NetlistType): Promise<string>;`
- **setnetlist**: `public setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<void>;`

---

## SCH_Primitive

原理图 &amp; 符号 / 图元类

```typescript
export class SCH_Primitive
```

- **getprimitivebyprimitiveid**: `public getPrimitiveByPrimitiveId(id: string): Promise<ISCH_Primitive | undefined>;`
- **getprimitivesbbox**: `public getPrimitivesBBox(primitiveIds: Array<string | ISCH_Primitive>): Promise<{ minX: number; minY: number; maxX: number; maxY: number } | undefined>;`
- **getprimitivesbyprimitiveid**: `public getPrimitivesByPrimitiveId(ids: Array<string>): Promise<Array<ISCH_Primitive>>;`
- **getprimitivetypebyprimitiveid**: `public getPrimitiveTypeByPrimitiveId(id: string): Promise<ESCH_PrimitiveType | undefined>;`

---

## SCH_PrimitiveArc

原理图 &amp; 符号 / 圆弧图元类

```typescript
export class SCH_PrimitiveArc implements ISCH_PrimitiveAPI
```

- **create**: `public create(startX: number, startY: number, referenceX: number, referenceY: number, endX: number, endY: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveArc | undefined>;`
- **delete**: `public delete(primitiveIds: string | ISCH_PrimitiveArc | Array<string> | Array<ISCH_PrimitiveArc>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<ISCH_PrimitiveArc | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveArc>>;`
- **getall**: `public getAll(): Promise<Array<ISCH_PrimitiveArc>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## SCH_PrimitiveAttribute

原理图 &amp; 符号 / 属性图元类

```typescript
export class SCH_PrimitiveAttribute implements ISCH_PrimitiveAPI
```

- **createnetlabel**: `public createNetLabel(x: number, y: number, net: string): Promise<ISCH_PrimitiveAttribute | undefined>;`
- **get**: `public get(primitiveIds: string): Promise<ISCH_PrimitiveAttribute | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveAttribute>>;`
- **getall**: `public getAll(parentPrimitiveId?: string): Promise<Array<ISCH_PrimitiveAttribute>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(parentPrimitiveId?: string): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## SCH_PrimitiveBus

原理图 &amp; 符号 / 总线图元类

```typescript
export class SCH_PrimitiveBus implements ISCH_PrimitiveAPI
```

- **create**: `public create(busName: string, line: Array<number> | Array<Array<number>>, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveBus | undefined>;`
- **delete**: `public delete(primitiveIds: string | ISCH_PrimitiveBus | Array<string> | Array<ISCH_PrimitiveBus>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<ISCH_PrimitiveBus | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveBus>>;`
- **getall**: `public getAll(): Promise<Array<ISCH_PrimitiveBus>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `public modify(primitiveId: string | ISCH_PrimitiveBus, property: { busName?: undefined | string; line?: undefined | number[] | number[][]; color?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED }): Promise<ISCH_PrimitiveBus | undefined>;`

---

## SCH_PrimitiveCircle

原理图 &amp; 符号 / 圆图元类

```typescript
export class SCH_PrimitiveCircle implements ISCH_PrimitiveAPI
```

- **create**: `public create(centerX: number, centerY: number, radius: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveCircle | undefined>;`
- **delete**: `public delete(primitiveIds: string | ISCH_PrimitiveCircle | Array<string> | Array<ISCH_PrimitiveCircle>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<ISCH_PrimitiveCircle | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveCircle>>;`
- **getall**: `public getAll(): Promise<Array<ISCH_PrimitiveCircle>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## SCH_PrimitiveComponent

原理图 &amp; 符号 / 器件图元类

```typescript
export class SCH_PrimitiveComponent implements ISCH_PrimitiveAPI
```

- **create**: `public create(component: { libraryType?: undefined | ELIB_LibraryType.DEVICE; libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem | { libraryType: ELIB_LibraryType.SYMBOL; libraryUuid: string; uuid: string } | ILIB_SymbolItem | ILIB_SymbolSearchItem, x: number, y: number, subPartName?: string, rotation?: number, mirror?: boolean, addIntoBom?: boolean, addIntoPcb?: boolean): Promise<ISCH_PrimitiveComponent | undefined>;`
- **createcbbsymbol**: `public createCbbSymbol(cbbSymbol: { libraryUuid: string; cbbUuid: string; uuid?: undefined | string }, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveCbbSymbolComponent | undefined>;`
- **createnetflag**: `public createNetFlag(identification: 'Power' | 'Ground' | 'AnalogGround' | 'ProtectGround', net: string, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent | undefined>;`
- **createnetport**: `public createNetPort(direction: 'IN' | 'OUT' | 'BI', net: string, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent | undefined>;`
- **createshortcircuitflag**: `public createShortCircuitFlag(x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent | undefined>;`
- **delete**: `public delete(primitiveIds: string | ISCH_PrimitiveComponent | Array<string> | Array<ISCH_PrimitiveComponent>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<ISCH_PrimitiveComponent | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveComponent>>;`
- **getall**: `public getAll(componentType?: ESCH_PrimitiveComponentType, allSchematicPages?: boolean): Promise<Array<ISCH_PrimitiveComponent>>;`
- **getallpinsbyprimitiveid**: `public getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<ISCH_PrimitiveComponentPin> | undefined>;`
- **getallprimitiveid**: `public getAllPrimitiveId(componentType?: ESCH_PrimitiveComponentType, allSchematicPages?: boolean): Promise<Array<string>>;`
- **getallpropertynames**: `public getAllPropertyNames(): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*
- **placecbbschematicpage**: `public placeCbbSchematicPage(cbbSchematicPage: { libraryUuid: string; cbbUuid: string; uuid: string }, x: number, y: number, props?: { reimportWhenNameRepeated?: undefined | false | true }): Promise<boolean>;`
- **placecomponentwithmouse**: `public placeComponentWithMouse(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem, subPartName?: string): Promise<boolean>;`
- **placesymbolwithmouse**: `public placeSymbolWithMouse(symbol: { libraryUuid: string; uuid: string } | ILIB_SymbolItem | ILIB_SymbolSearchItem, subPartName?: string, properties?: Record<string, boolean | number | string | undefined>): Promise<boolean>;`
- **setnetflagcomponentuuid_analogground**: `public setNetFlagComponentUuid_AnalogGround(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetflagcomponentuuid_ground**: `public setNetFlagComponentUuid_Ground(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetflagcomponentuuid_power**: `public setNetFlagComponentUuid_Power(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetflagcomponentuuid_protectground**: `public setNetFlagComponentUuid_ProtectGround(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetportcomponentuuid_bi**: `public setNetPortComponentUuid_BI(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetportcomponentuuid_in**: `public setNetPortComponentUuid_IN(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`
- **setnetportcomponentuuid_out**: `public setNetPortComponentUuid_OUT(component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;`

---

## SCH_PrimitiveObject

原理图 &amp; 符号 / 二进制内嵌对象图元类

```typescript
export class SCH_PrimitiveObject implements ISCH_PrimitiveAPI
```

- **create**: `public create(content: File | string, startX: number, startY: number, width?: number, height?: number, rotation?: number, mirror?: boolean, fileName?: string): Promise<ISCH_PrimitiveObject | undefined>;`
- **delete**: `public delete(primitiveIds: string | ISCH_PrimitiveObject | Array<string> | Array<ISCH_PrimitiveObject>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<ISCH_PrimitiveObject | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveObject>>;`
- **getall**: `public getAll(): Promise<Array<ISCH_PrimitiveObject>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `public modify(primitiveId: string | ISCH_PrimitiveObject, property: { content?: undefined | string | File; startX?: undefined | number; startY?: undefined | number; width?: undefined | number; height?: undefined | number; rotation?: undefined | number; mirror?: undefined | false | true; fileName?: undefined | string }): Promise<ISCH_PrimitiveObject | undefined>;`

---

## SCH_PrimitivePin

原理图 &amp; 符号 / 引脚图元类

```typescript
export class SCH_PrimitivePin implements ISCH_PrimitiveAPI
```

- **create**: `public create(x: number, y: number, pinNumber: string, pinName?: string, rotation?: number, pinLength?: number, pinColor?: string | null, pinShape?: ESCH_PrimitivePinShape, pinType?: ESCH_PrimitivePinType): Promise<ISCH_PrimitivePin | undefined>;`
- **delete**: `public delete(primitiveIds: string | ISCH_PrimitivePin | Array<string> | Array<ISCH_PrimitivePin>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin>>;`
- **getall**: `public getAll(): Promise<Array<ISCH_PrimitivePin>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## SCH_PrimitivePolygon

原理图 &amp; 符号 / 多边形（折线）图元类

```typescript
export class SCH_PrimitivePolygon implements ISCH_PrimitiveAPI
```

- **create**: `public create(line: Array<number>, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitivePolygon | undefined>;`
- **delete**: `public delete(primitiveIds: string | ISCH_PrimitivePolygon | Array<string> | Array<ISCH_PrimitivePolygon>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<ISCH_PrimitivePolygon | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePolygon>>;`
- **getall**: `public getAll(): Promise<Array<ISCH_PrimitivePolygon>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `public modify(primitiveId: string | ISCH_PrimitivePolygon, property: { line?: undefined | number[]; color?: undefined | null | string; fillColor?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED }): Promise<ISCH_PrimitivePolygon | undefined>;`

---

## SCH_PrimitiveRectangle

原理图 &amp; 符号 / 矩形图元类

```typescript
export class SCH_PrimitiveRectangle implements ISCH_PrimitiveAPI
```

- **create**: `public create(topLeftX: number, topLeftY: number, width: number, height: number, cornerRadius?: number, rotation?: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveRectangle | undefined>;`
- **delete**: `public delete(primitiveIds: string | ISCH_PrimitiveRectangle | Array<string> | Array<ISCH_PrimitiveRectangle>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<ISCH_PrimitiveRectangle | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveRectangle>>;`
- **getall**: `public getAll(): Promise<Array<ISCH_PrimitiveRectangle>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## SCH_PrimitiveText

原理图 &amp; 符号 / 文本图元类

```typescript
export class SCH_PrimitiveText implements ISCH_PrimitiveAPI
```

- **create**: `public create(x: number, y: number, content: string, rotation?: number, textColor?: string | null, fontName?: string | null, fontSize?: number | null, bold?: boolean, italic?: boolean, underLine?: boolean, alignMode?: ESCH_PrimitiveTextAlignMode): Promise<ISCH_PrimitiveText | undefined>;`
- **delete**: `public delete(primitiveIds: string | ISCH_PrimitiveText | Array<string> | Array<ISCH_PrimitiveText>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<ISCH_PrimitiveText | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveText>>;`
- **getall**: `public getAll(): Promise<Array<ISCH_PrimitiveText>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## SCH_PrimitiveWire

原理图 &amp; 符号 / 导线图元类

```typescript
export class SCH_PrimitiveWire implements ISCH_PrimitiveAPI
```

- **create**: `public create(line: Array<number> | Array<Array<number>>, net?: string, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveWire | undefined>;`
- **delete**: `public delete(primitiveIds: string | ISCH_PrimitiveWire | Array<string> | Array<ISCH_PrimitiveWire>): Promise<boolean>;`
- **get**: `public get(primitiveIds: string): Promise<ISCH_PrimitiveWire | undefined>;`
- **get_1**: `public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveWire>>;`
- **getall**: `public getAll(net?: string | Array<string>): Promise<Array<ISCH_PrimitiveWire>>;`
- **getallprimitiveid**: `public getAllPrimitiveId(net?: string | Array<string>): Promise<Array<string>>;`
- **modify**: `public modify(primitiveId: string | ISCH_PrimitiveWire, property: { line?: undefined | number[] | number[][]; net?: undefined | string; color?: undefined | null | string; lineWidth?: undefined | null | number; lineType?: undefined | null | ESCH_PrimitiveLineType.SOLID | ESCH_PrimitiveLineType.DASHED | ESCH_PrimitiveLineType.DOTTED | ESCH_PrimitiveLineType.DOT_DASHED }): Promise<ISCH_PrimitiveWire | undefined>;`

---

## SCH_SelectControl

原理图 &amp; 符号 / 选择控制类

```typescript
export class SCH_SelectControl
```

- **clearselected**: `public clearSelected(): boolean;`
- **docrossprobeselect**: `public doCrossProbeSelect(components?: Array<string>, pins?: Array<string>, nets?: Array<string>, highlight?: boolean, select?: boolean): boolean;`
- **doselectprimitives**: `public doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;`
- **getallselectedprimitives**: `public getAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;`
- **getallselectedprimitives_primitiveid**: `public getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;`
- **getcurrentmouseposition**: `public getCurrentMousePosition(): Promise<{ x: number; y: number } | undefined>;`
- **getselectedprimitives**: `public getSelectedPrimitives(): Promise<Array<object>>;`
- **getselectedprimitives_primitiveid**: `public getSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;`

---

## SCH_SimulationEngine

原理图 &amp; 符号 / 仿真引擎类

```typescript
export class SCH_SimulationEngine
```

- **pushdata**: `public pushData(eventType: ESCH_DynamicSimulationEnginePushEventType | ESCH_SpiceSimulationEnginePushEventType, props: Record<string, any>): void;`

---

## SCH_Utils

原理图 &amp; 符号 / 工具类

```typescript
export class SCH_Utils
```

- **splitlines**: `public splitLines(lines: Array<number | Array<number>>): Array<Array<number | Array<number>>> | undefined;`

---

## SYS_ClientUrl

系统 / 外部请求类

```typescript
export class SYS_ClientUrl
```

- **request**: `public request(url: string, method?: 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH', data?: string | Blob | FormData | URLSearchParams, options?: { headers?: undefined | { [key: string]: any }; integrity?: undefined | string }, succeedCallFn?: (data: Response) => void | Promise<void>): Promise<Response>;`

---

## SYS_Dialog

系统 / 对话框类

```typescript
export class SYS_Dialog
```

- **createdesignportal**: `public createDesignPortal(): IDesignPortal;`
- **showconfirmationmessage**: `public showConfirmationMessage(content: string, title?: string, mainButtonTitle?: string, buttonTitle?: string, callbackFn?: (mainButtonClicked: boolean) => void): void;`
- **showinformationmessage**: `public showInformationMessage(content: string, title?: string, buttonTitle?: string): void;`
- **showinputdialog**: *(签名过长，请查看详细文档)*
- **showselectdialog**: `public showSelectDialog(options: Array<string> | Array<{ value: string; displayContent: string }>, beforeContent?: string, afterContent?: string, title?: string, defaultOption?: string, multiple?: false, callbackFn?: (value: string) => void | Promise<void>): void;`
- **showselectdialog_1**: `public showSelectDialog(options: Array<string> | Array<{ value: string; displayContent: string }>, beforeContent?: string, afterContent?: string, title?: string, defaultOption?: Array<string>, multiple?: true, callbackFn?: (value: Array<string>) => void | Promise<void>): void;`

---

## SYS_Environment

系统 / 运行环境类

```typescript
export class SYS_Environment
```

- **geteditorcomplieddate**: `public getEditorCompliedDate(): string;`
- **geteditorcurrentversion**: `public getEditorCurrentVersion(onlySemantic?: boolean): string;`
- **getuserinfo**: `public getUserInfo(): { username?: undefined | string; nickname?: undefined | string; avatar?: undefined | string; uuid?: undefined | string; customerCode?: undefined | string };`
- **isclient**: `public isClient(): boolean;`
- **iseasyedaproedition**: `public isEasyEDAProEdition(): boolean;`
- **ishalfofflinemode**: `public isHalfOfflineMode(): boolean;`
- **isjlcedaproedition**: `public isJLCEDAProEdition(): boolean;`
- **isofflinemode**: `public isOfflineMode(): boolean;`
- **isonlinemode**: `public isOnlineMode(): boolean;`
- **isproprivateedition**: `public isProPrivateEdition(): boolean;`
- **isweb**: `public isWeb(): boolean;`

---

## SYS_FileManager

系统 / 文件管理类

```typescript
export class SYS_FileManager
```

- **extractlibinfo**: `public extractLibInfo(data: File | Array<File>): Promise<any>;`
- **extractprojectinfo**: `public extractProjectInfo(data: File): Promise<any>;`
- **getcbbfilebycbbuuid**: `public getCbbFileByCbbUuid(cbbUuid: string, libraryUuid?: string, props?: { fileName?: undefined | string; password?: undefined | string; fileType?: undefined | 'epro' | 'epro2'; templateSchematicUuid?: undefined | string; templatePcbUuid?: undefined | string }): Promise<File | undefined>;`
- **getdevicefilebydeviceuuid**: `public getDeviceFileByDeviceUuid(deviceUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;`
- **getdocumentfile**: `public getDocumentFile(fileName?: string, password?: string, fileType?: 'epro' | 'epro2'): Promise<File | undefined>;`
- **getdocumentfootprintsources**: `public getDocumentFootprintSources(): Promise<Array<{ footprintUuid: string; documentSource: string }>>;`
- **getdocumentsource**: `public getDocumentSource(): Promise<string | undefined>;`
- **getfootprintfilebyfootprintuuid**: `public getFootprintFileByFootprintUuid(footprintUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;`
- **getpanellibraryfilebypanellibraryuuid**: `public getPanelLibraryFileByPanelLibraryUuid(panelLibraryUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;`
- **getprojectfile**: `public getProjectFile(fileName?: string, password?: string, fileType?: 'epro' | 'epro2'): Promise<File | undefined>;`
- **getprojectfilebyprojectuuid**: `public getProjectFileByProjectUuid(projectUuid: string, fileName?: string, password?: string, fileType?: 'epro' | 'epro2'): Promise<File | undefined>;`
- **getsymbolfilebysymboluuid**: `public getSymbolFileBySymbolUuid(symbolUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;`
- **importprojectbyprojectfile**: *(签名过长，请查看详细文档)*
- **importprojectbyprojectfile_1**: *(签名过长，请查看详细文档)*
- **setdocumentsource**: `public setDocumentSource(source: string): Promise<boolean>;`

---

## SYS_FileSystem

系统 / 文件系统交互类

```typescript
export class SYS_FileSystem
```

- **createdirectoryinfilesystem**: `public createDirectoryInFileSystem(folderPath: string): Promise<boolean>;`
- **createobjecturl**: `public createObjectURL(blob: Blob | File): string;`
- **deletefileinfilesystem**: `public deleteFileInFileSystem(uri: string, force?: boolean): Promise<boolean>;`
- **existspathinfilesystem**: `public existsPathInFileSystem(uri: string): Promise<boolean>;`
- **getdocumentspath**: `public getDocumentsPath(): Promise<string>;`
- **getedapath**: `public getEdaPath(): Promise<string>;`
- **getextensionfile**: `public getExtensionFile(uri: string): Promise<File | undefined>;`
- **getlibrariespaths**: `public getLibrariesPaths(): Promise<Array<string>>;`
- **getprojectspaths**: `public getProjectsPaths(): Promise<Array<string>>;`
- **listfilesoffilesystem**: `public listFilesOfFileSystem(folderPath: string, recursive?: boolean): Promise<Array<ISYS_FileSystemFileList>>;`
- **openreadfiledialog**: `public openReadFileDialog(filenameExtensions?: string | Array<string>, multiFiles?: true): Promise<Array<File> | undefined>;`
- **openreadfiledialog_1**: `public openReadFileDialog(filenameExtensions?: string | Array<string>, multiFiles?: false): Promise<File | undefined>;`
- **openreadfolderdialog**: `public openReadFolderDialog(): Promise<Array<{ relativePath: string; file: File }>>;`
- **readfilefromfilesystem**: `public readFileFromFileSystem(uri: string): Promise<File | undefined>;`
- **revokeobjecturl**: `public revokeObjectURL(url: string): void;`
- **savefile**: `public saveFile(fileData: File | Blob, fileName?: string): Promise<void>;`
- **savefiletofilesystem**: `public saveFileToFileSystem(uri: string, fileData: File | Blob, fileName?: string, force?: boolean): Promise<boolean>;`

---

## SYS_FontManager

系统 / 字体管理类

```typescript
export class SYS_FontManager
```

- **addfont**: `public addFont(fontName: string): Promise<boolean>;`
- **deletefont**: `public deleteFont(fontName: string): Promise<boolean>;`
- **getfontslist**: `public getFontsList(): Promise<Array<string>>;`

---

## SYS_FormatConversion

系统 / 格式转换（Chameleon）类

```typescript
export class SYS_FormatConversion
```

- **convertaltiumdesignerlibrariestoeasyedamultifiles**: `public convertAltiumDesignerLibrariesToEasyEDAMultiFiles(file: File | Array<File>): Promise<Array<File>>;`
- **convertaltiumdesignerlibrariestoeasyedasinglefile**: `public convertAltiumDesignerLibrariesToEasyEDASingleFile(file: File | Array<File>): Promise<File | undefined>;`
- **convertdisalibrariestoeasyedamultifiles**: `public convertDisaLibrariesToEasyEDAMultiFiles(file: File | Array<File>): Promise<Array<File>>;`
- **convertdisalibrariestoeasyedasinglefile**: `public convertDisaLibrariesToEasyEDASingleFile(file: File | Array<File>): Promise<File | undefined>;`

---

## SYS_HeaderMenu

系统 / 顶部菜单类

```typescript
export class SYS_HeaderMenu
```

- **insertheadermenus**: `public insertHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>;`
- **insertsystemheadermenuitem**: `public insertSystemHeaderMenuItem(env: ESYS_HeaderMenuEnvironment, id: Array<string>, props: { title: string; registerFn?: undefined | string; menuItems?: undefined | (null | ISYS_HeaderMenuSub2MenuItem | ISYS_HeaderMenuSub1MenuItem)[]; insertDividerBefore?: undefined | false | true; insertDividerAfter?: undefined | false | true; insertBefore?: undefined | string; crossDividerWhenInsert?: undefined | false | true }): Promise<string | undefined>;`
- **removeheadermenus**: `public removeHeaderMenus(): void;`
- **removesystemheadermenuitem**: `public removeSystemHeaderMenuItem(id: Array<string>, props?: { removeTheBeforeDivider?: undefined | false | true; removeTheAfterDivider?: undefined | false | true }): Promise<boolean>;`
- **replaceheadermenus**: `public replaceHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>;`

---

## SYS_I18n

系统 / 多语言类

```typescript
export class SYS_I18n
```

- **addlanguagechangedeventlistener**: `public addLanguageChangedEventListener(id: string, callFn: (newLanguage: string, lastLanguage: string) => void | Promise<void>, onlyOnce: boolean): void;`
- **getallsupportedlanguages**: `public getAllSupportedLanguages(): Array<string>;`
- **getcurrentlanguage**: `public getCurrentLanguage(): Promise<string>;`
- **importmultilingual**: `public importMultilingual(language: string, source: ISYS_LanguageKeyValuePairs): boolean;`
- **importmultilinguallanguage**: `public importMultilingualLanguage(namespace: string, language: string, source: ISYS_LanguageKeyValuePairs): boolean;`
- **importmultilingualnamespace**: `public importMultilingualNamespace(namespace: string, source: ISYS_MultilingualLanguagesData): boolean;`
- **iseventlisteneralreadyexist**: `public isEventListenerAlreadyExist(id: string): boolean;`
- **islanguagesupported**: `public isLanguageSupported(language: string): boolean;`
- **removeeventlistener**: `public removeEventListener(id: string): boolean;`
- **text**: `public text(tag: string, namespace?: string, language?: string, ...args: Array<any>): string;`

---

## SYS_IFrame

系统 / 内联框架窗口类

```typescript
export class SYS_IFrame
```

- **closeiframe**: `public closeIFrame(id?: string): Promise<boolean>;`
- **hideiframe**: `public hideIFrame(id?: string): Promise<boolean>;`
- **isiframealreadyexist**: `public isIFrameAlreadyExist(id: string): Promise<boolean>;`
- **openiframe**: *(签名过长，请查看详细文档)*
- **showiframe**: `public showIFrame(id?: string): Promise<boolean>;`

---

## SYS_LoadingAndProgressBar

系统 / 加载与进度条类

```typescript
export class SYS_LoadingAndProgressBar
```

- **destroyloading**: `public destroyLoading(): void;`
- **destroyprogressbar**: `public destroyProgressBar(): void;`
- **showloading**: `public showLoading(): void;`
- **showprogressbar**: `public showProgressBar(progress?: number, title?: string): void;`

---

## SYS_Log

系统 / 日志类

```typescript
export class SYS_Log
```

- **add**: `public add(message: string, type?: ESYS_LogType): void;`
- **clear**: `public clear(): void;`
- **export**: `public export(types?: ESYS_LogType | Array<ESYS_LogType>): void;`
- **find**: `public find(message: string | Array<string | { text: string; attr?: undefined | { id?: undefined | string; path?: undefined | string; sheet?: undefined | string; pcbid?: undefined | string; type?: undefined | string } }>, types?: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>;`
- **sort**: `public sort(types?: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>;`

---

## SYS_Math

系统 / 数学计算类

```typescript
export class SYS_Math
```

- **bboxintersects**: `public bboxIntersects(bbox1: ISYS_MathBBox, bbox2: ISYS_MathBBox): boolean;`
- **calculatearea**: `public calculateArea(polygon: TSYS_MathPolygonInput): number;`
- **calculateperimeter**: `public calculatePerimeter(polygon: TSYS_MathPolygonInput): number;`
- **contains**: `public contains(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): boolean;`
- **containspoint**: `public containsPoint(polygon: TSYS_MathPolygonInput, point: ISYS_MathPoint): boolean;`
- **distancetopoint**: `public distanceToPoint(polygon: TSYS_MathPolygonInput, point: ISYS_MathPoint): number;`
- **getbbox**: `public getBBox(polygon: TSYS_MathPolygonInput): ISYS_MathBBox;`
- **getcentroid**: `public getCentroid(polygon: TSYS_MathPolygonInput): ISYS_MathPoint;`
- **intersection**: `public intersection(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): TSYS_MathPolygonGroup;`
- **intersects**: `public intersects(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): boolean;`
- **rotate**: `public rotate(polygon: TSYS_MathPolygonInput, angle: number, centerX?: number, centerY?: number): Array<ISYS_MathPoint>;`
- **scale**: `public scale(polygon: TSYS_MathPolygonInput, scaleX: number, scaleY?: number, centerX?: number, centerY?: number): Array<ISYS_MathPoint>;`
- **subtract**: `public subtract(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): TSYS_MathPolygonGroup;`
- **translate**: `public translate(polygon: TSYS_MathPolygonInput, dx: number, dy: number): Array<ISYS_MathPoint>;`
- **union**: `public union(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): TSYS_MathPolygonGroup;`
- **xor**: `public xor(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): TSYS_MathPolygonGroup;`

---

## SYS_Message

系统 / 消息通知类

```typescript
export class SYS_Message
```

- **removefollowmousetip**: `public removeFollowMouseTip(tip?: string): Promise<void>;`
- **showfollowmousetip**: `public showFollowMouseTip(tip: string, msTimeout?: number): Promise<void>;`
- **showtoastmessage**: `public showToastMessage(message: string, messageType?: ESYS_ToastMessageType, timer?: number, bottomPanel?: ESYS_BottomPanelTab, buttonTitle?: string, buttonCallbackFn?: string): void;`

---

## SYS_MessageBox

系统 / 消息框类

```typescript
export class SYS_MessageBox
```

- **showconfirmationmessage**: `public showConfirmationMessage(content: string, title?: string, mainButtonTitle?: string, buttonTitle?: string, callbackFn?: (mainButtonClicked: boolean) => void): void;`
- **showinformationmessage**: `public showInformationMessage(content: string, title?: string, buttonTitle?: string): void;`

---

## SYS_MessageBus

系统 / 消息总线类

```typescript
export class SYS_MessageBus
```

- **createprivatemessagebus**: `public createPrivateMessageBus(): void;`
- **publish**: `public publish(topic: string, message: any): void;`
- **publishpublic**: `public publishPublic(topic: string, message: any): void;`
- **pull**: `public pull(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **pullasync**: `public pullAsync(topic: string): Promise<any>;`
- **pullasyncpublic**: `public pullAsyncPublic(topic: string): Promise<any>;`
- **pullpublic**: `public pullPublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **push**: `public push(topic: string, message: any): void;`
- **pushpublic**: `public pushPublic(topic: string, message: any): void;`
- **removeprivatemessagebus**: `public removePrivateMessageBus(): void;`
- **rpccall**: `public rpcCall(topic: string, message?: any, timeout?: number): Promise<any>;`
- **rpccallpublic**: `public rpcCallPublic(topic: string, message?: any, timeout?: number): Promise<any>;`
- **rpcservice**: `public rpcService(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void;`
- **rpcservicepublic**: `public rpcServicePublic(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void;`
- **subscribe**: `public subscribe(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **subscribeonce**: `public subscribeOnce(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **subscribeoncepublic**: `public subscribeOncePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **subscribepublic**: `public subscribePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`

---

## SYS_PanelControl

系统 / 面板控制类

```typescript
export class SYS_PanelControl
```

- **closebottompanel**: `public closeBottomPanel(): void;`
- **closeleftpanel**: `public closeLeftPanel(): void;`
- **closerightpanel**: `public closeRightPanel(): void;`
- **isbottompanellocked**: `public isBottomPanelLocked(): Promise<boolean>;`
- **isleftpanellocked**: `public isLeftPanelLocked(): Promise<boolean>;`
- **isrightpanellocked**: `public isRightPanelLocked(): Promise<boolean>;`
- **openbottompanel**: `public openBottomPanel(tab?: ESYS_BottomPanelTab): void;`
- **openleftpanel**: `public openLeftPanel(tab?: ESYS_LeftPanelTab): void;`
- **openrightpanel**: `public openRightPanel(tab?: ESYS_RightPanelTab): void;`
- **togglebottompanellockstate**: `public toggleBottomPanelLockState(state?: boolean): void;`
- **toggleleftpanellockstate**: `public toggleLeftPanelLockState(state?: boolean): void;`
- **togglerightpanellockstate**: `public toggleRightPanelLockState(state?: boolean): void;`

---

## SYS_RightClickMenu

系统 / 右键菜单类

```typescript
export class SYS_RightClickMenu
```

- **changemenu**: `public changeMenu(menuId: string, menuItems: Array<ISYS_RightClickMenuItem | null>): Promise<void>;`

---

## SYS_Setting

系统 / 设置类

```typescript
export class SYS_Setting
```

- **restoredefault**: `public restoreDefault(): Promise<boolean>;`

---

## SYS_ShortcutKey

系统 / 快捷键类

```typescript
export class SYS_ShortcutKey
```

- **get**: `public get(id: string): ISYS_ShortcutKeyDataWithUserDefinedShortcutKey | undefined;`
- **getall**: `public getAll(): Record<string, ISYS_ShortcutKeyDataWithUserDefinedShortcutKey>;`
- **getshortcutkeys**: `public getShortcutKeys(includeSystem?: boolean): Promise<Array<{ shortcutKey: TSYS_ShortcutKeys; title: string; documentType: ESYS_ShortcutKeyEffectiveEditorRange[]; scene: ESYS_ShortcutKeyEffectiveEditorScene[] }>>;`
- **register**: `public register(id: string, props: ISYS_ShortcutKeyDataWithCallFn): boolean;`
- **registershortcutkey**: `public registerShortcutKey(shortcutKey: TSYS_ShortcutKeys, title: string, callbackFn: (shortcutKey: TSYS_ShortcutKeys) => void | Promise<void>, documentType?: Array<ESYS_ShortcutKeyEffectiveEditorRange>, scene?: Array<ESYS_ShortcutKeyEffectiveEditorScene>): Promise<boolean>;`
- **unregister**: `public unregister(id: string): boolean;`
- **unregistershortcutkey**: `public unregisterShortcutKey(shortcutKey: TSYS_ShortcutKeys): Promise<boolean>;`

---

## SYS_Storage

系统 / 存储类

```typescript
export class SYS_Storage
```

- **clearextensionalluserconfigs**: `public clearExtensionAllUserConfigs(): Promise<boolean>;`
- **deleteextensionuserconfig**: `public deleteExtensionUserConfig(key: string): Promise<boolean>;`
- **getextensionalluserconfigs**: `public getExtensionAllUserConfigs(): Record<string, any>;`
- **getextensionuserconfig**: `public getExtensionUserConfig(key: string): any | undefined;`
- **setextensionalluserconfigs**: `public setExtensionAllUserConfigs(configs: Record<string, any>): Promise<boolean>;`
- **setextensionuserconfig**: `public setExtensionUserConfig(key: string, value: any): Promise<boolean>;`

---

## SYS_Timer

系统 / 定时器类

```typescript
export class SYS_Timer
```

- **clearintervaltimer**: `public clearIntervalTimer(id: string): boolean;`
- **cleartimeouttimer**: `public clearTimeoutTimer(id: string): boolean;`
- **setintervaltimer**: `public setIntervalTimer(id: string, timeout: number, callFn: (...args: any) => void, ...args: any): boolean;`
- **settimeouttimer**: `public setTimeoutTimer(id: string, timeout: number, callFn: (...args: any) => void, ...args: any): boolean;`

---

## SYS_ToastMessage

系统 / 吐司消息类

```typescript
export class SYS_ToastMessage
```

- **showmessage**: `public showMessage(message: string, messageType?: ESYS_ToastMessageType, timer?: number, bottomPanel?: ESYS_BottomPanelTab, buttonTitle?: string, buttonCallbackFn?: string): void;`

---

## SYS_Tool

系统 / 工具类

```typescript
export class SYS_Tool
```

- **netlistcomparison**: `public netlistComparison(netlist1: string | { projectUuid: string; documentUuid: string } | File, netlist2: string | { projectUuid: string; documentUuid: string } | File): Promise<Array<{ type: 'Net' | 'Component'; object: string; netlist1Name: string[]; netlist2Name: string[] }>>;`
- **pcbcomparison**: `public pcbComparison(pcb1: string | { projectUuid: string; pcbUuid: string } | File, pcb2: string | { projectUuid: string; pcbUuid: string } | File, options?: { valUnit?: undefined | ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL; deviation?: undefined | number; comparisonSize?: undefined | number }): Promise<ISYS_PcbComparisonResponse>;`

---

## SYS_Unit

系统 / 单位类

```typescript
export class SYS_Unit
```

- **getfrontenddataunit**: `public getFrontendDataUnit(): Promise<ESYS_Unit | undefined>;`
- **inchtomil**: `public inchToMil(inch: number, numberOfDecimals?: number): number;`
- **inchtomm**: `public inchToMm(inch: number, numberOfDecimals?: number): number;`
- **miltoinch**: `public milToInch(mil: number, numberOfDecimals?: number): number;`
- **miltomm**: `public milToMm(mil: number, numberOfDecimals?: number): number;`
- **mmtoinch**: `public mmToInch(mm: number, numberOfDecimals?: number): number;`
- **mmtomil**: `public mmToMil(mm: number, numberOfDecimals?: number): number;`

---

## SYS_WebSocket

系统 / WebSocket 类

```typescript
export class SYS_WebSocket
```

- **close**: `public close(id: string, code?: number, reason?: string, extensionUuid?: string): void;`
- **register**: `public register(id: string, serviceUri: string, receiveMessageCallFn?: (event: MessageEvent<any>) => void | Promise<void>, connectedCallFn?: () => void | Promise<void>, protocols?: string | Array<string>): void;`
- **send**: `public send(id: string, data: string | Blob | BufferSource, extensionUuid?: string): void;`

---

## SYS_Window

系统 / 窗口类

```typescript
export class SYS_Window
```

- **addeventlistener**: `public addEventListener(type: ESYS_WindowEventType, listener: (ev: any) => any, options?: { capture?: undefined | false | true; once?: undefined | false | true; passive?: undefined | false | true; signal?: undefined | AbortSignal }): ISYS_WindowEventListenerRemovableObject | undefined;`
- **getcurrenttheme**: `public getCurrentTheme(): Promise<ESYS_Theme>;`
- **geturlanchor**: `public getUrlAnchor(): string;`
- **geturlparam**: `public getUrlParam(key: string): string | null;`
- **getviewportsize**: `public getViewportSize(): { width: number; height: number };`
- **hidestartpagequickstartitems**: `public hideStartPageQuickStartItems(items: Array<ESYS_StartPageQuickStartItem>): Promise<boolean>;`
- **hidestartpagesupportfloatbaritems**: `public hideStartPageSupportFloatBarItems(): Promise<boolean>;`
- **open**: `public open(url: string, target?: ESYS_WindowOpenTarget): void;`
- **openui**: `public openUI(uiName: string, args?: Record<string, any>): Promise<void>;`
- **removeeventlistener**: `public removeEventListener(removableObject: ISYS_WindowEventListenerRemovableObject): void;`
- **urlpushstate**: `public urlPushState(url: string): void;`
- **urlreplacestate**: `public urlReplaceState(url: string): void;`

---

