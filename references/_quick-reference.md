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

Document tree / Board management class

```typescript
class DMT_Board
```

- **copyboard**: `function copyBoard(sourceBoardName: string): Promise<string | undefined>;`
- **createboard**: `function createBoard(schematicUuid?: string, pcbUuid?: string): Promise<string | undefined>;`
- **deleteboard**: `function deleteBoard(boardName: string): Promise<boolean>;`
- **getallboardsinfo**: `function getAllBoardsInfo(): Promise<Array<IDMT_BoardItem>>;`
- **getboardinfo**: `function getBoardInfo(boardName: string): Promise<IDMT_BoardItem | undefined>;`
- **getcurrentboardinfo**: `function getCurrentBoardInfo(): Promise<IDMT_BoardItem | undefined>;`
- **modifyboardname**: `function modifyBoardName(originalBoardName: string, boardName: string): Promise<boolean>;`

---

## DMT_EditorControl

Document tree / Editor control class

```typescript
class DMT_EditorControl
```

- **activatedocument**: `function activateDocument(tabId: string): Promise<boolean>;`
- **activatesplitscreen**: `function activateSplitScreen(splitScreenId: string): Promise<boolean>;`
- **closedocument**: `function closeDocument(tabId: string): Promise<boolean>;`
- **createsplitscreen**: `function createSplitScreen( 	splitScreenType: EDMT_EditorSplitScreenDirection, 	tabId: string, ): Promise<{ sourceSplitScreenId: string; newSplitScreenId: string } | undefined>;`
- **generateindicatormarkers**: `function generateIndicatorMarkers( 	markers: Array<IDMT_IndicatorMarkerShape>, 	color?: { r: number; g: number; b: number; alpha: number }, 	lineWidth?: number, 	zoom?: boolean, 	tabId?: string, ): Promise<boolean>;`
- **getcurrentrenderedareaimage**: `function getCurrentRenderedAreaImage(tabId?: string): Promise<Blob | undefined>;`
- **getsplitscreenidbytabid**: `function getSplitScreenIdByTabId(tabId: string): Promise<string | undefined>;`
- **getsplitscreentree**: `function getSplitScreenTree(): Promise<IDMT_EditorSplitScreenItem | undefined>;`
- **gettabsbysplitscreenid**: `function getTabsBySplitScreenId(splitScreenId: string): Promise<Array<IDMT_EditorTabItem>>;`
- **mergealldocumentfromsplitscreen**: `function mergeAllDocumentFromSplitScreen(): Promise<boolean>;`
- **movedocumenttosplitscreen**: `function moveDocumentToSplitScreen(tabId: string, splitScreenId: string): Promise<boolean>;`
- **opendocument**: `function openDocument(documentUuid: string, splitScreenId?: string): Promise<string | undefined>;`
- **openlibrarydocument**: `function openLibraryDocument( 	libraryUuid: string, 	libraryType: ELIB_LibraryType.SYMBOL | ELIB_LibraryType.FOOTPRINT, 	uuid: string, 	splitScreenId?: string, ): Promise<string | undefined>;`
- **removeindicatormarkers**: `function removeIndicatorMarkers(tabId?: string): Promise<boolean>;`
- **tilealldocumenttosplitscreen**: `function tileAllDocumentToSplitScreen(): Promise<boolean>;`
- **zoomto**: `function zoomTo( 	x?: number, 	y?: number, 	scaleRatio?: number, 	tabId?: string, ): Promise<{ left: number; right: number; top: number; bottom: number } | false>;`
- **zoomtoallprimitives**: `function zoomToAllPrimitives( 	tabId?: string, ): Promise<{ left: number; right: number; top: number; bottom: number } | false>;`
- **zoomtoregion**: `function zoomToRegion( 	left: number, 	right: number, 	top: number, 	bottom: number, 	tabId?: string, ): Promise<boolean>;`
- **zoomtoselectedprimitives**: `function zoomToSelectedPrimitives( 	tabId?: string, ): Promise<{ left: number; right: number; top: number; bottom: number } | false>;`

---

## DMT_Event

Document tree / event class

```typescript
class DMT_Event
```

- **addeditortabeventlistener**: `function addEditorTabEventListener( 	id: string, 	eventType: 'all' | EDMT_EditorTabEventType, 	callFn: ( 		eventType: EDMT_EditorTabEventType, 		props: { documentType: EDMT_EditorDocumentType; title: string; tabId: string }, 	) => void | Promise<void>, 	onlyOnce?: boolean, ): void;`
- **iseventlisteneralreadyexist**: `function isEventListenerAlreadyExist(id: string): boolean;`
- **removeeventlistener**: `function removeEventListener(id: string): boolean;`

---

## DMT_Folder

Document tree / Folder class

```typescript
class DMT_Folder
```

- **createfolder**: `function createFolder( 	folderName: string, 	teamUuid: string, 	parentFolderUuid?: string, 	description?: string, ): Promise<string | undefined>;`
- **deletefolder**: `function deleteFolder(teamUuid: string, folderUuid: string): Promise<boolean>;`
- **getallfoldersuuid**: `function getAllFoldersUuid(teamUuid: string): Promise<Array<string>>;`
- **getfolderinfo**: `function getFolderInfo(teamUuid: string, folderUuid: string): Promise<IDMT_FolderItem | undefined>;`
- **modifyfolderdescription**: `function modifyFolderDescription( 	teamUuid: string, 	folderUuid: string, 	description?: string, ): Promise<boolean>;`
- **modifyfoldername**: `function modifyFolderName( 	teamUuid: string, 	folderUuid: string, 	folderName: string, ): Promise<boolean>;`
- **movefoldertofolder**: `function moveFolderToFolder( 	teamUuid: string, 	folderUuid: string, 	parentFolderUuid?: string, ): Promise<boolean>;`

---

## DMT_Panel

Document tree / Panel management class

```typescript
class DMT_Panel
```

- **copypanel**: `function copyPanel(panelUuid: string): Promise<string | undefined>;`
- **createpanel**: `function createPanel(): Promise<string | undefined>;`
- **deletepanel**: `function deletePanel(panelUuid: string): Promise<boolean>;`
- **getallpanelsinfo**: `function getAllPanelsInfo(): Promise<Array<IDMT_PanelItem>>;`
- **getcurrentpanelinfo**: `function getCurrentPanelInfo(): Promise<IDMT_PanelItem | undefined>;`
- **getpanelinfo**: `function getPanelInfo(panelUuid: string): Promise<IDMT_PanelItem | undefined>;`
- **modifypanelname**: `function modifyPanelName(panelUuid: string, panelName: string): Promise<boolean>;`

---

## DMT_Pcb

Document tree / PCB management class

```typescript
class DMT_Pcb
```

- **copypcb**: `function copyPcb(pcbUuid: string, boardName?: string): Promise<string | undefined>;`
- **createpcb**: `function createPcb(boardName?: string): Promise<string | undefined>;`
- **deletepcb**: `function deletePcb(pcbUuid: string): Promise<boolean>;`
- **getallpcbsinfo**: `function getAllPcbsInfo(): Promise<Array<IDMT_PcbItem>>;`
- **getcurrentpcbinfo**: `function getCurrentPcbInfo(): Promise<IDMT_PcbItem | undefined>;`
- **getpcbinfo**: `function getPcbInfo(pcbUuid: string): Promise<IDMT_PcbItem | undefined>;`
- **modifypcbname**: `function modifyPcbName(pcbUuid: string, pcbName: string): Promise<boolean>;`

---

## DMT_Project

Document tree / Project management class

```typescript
class DMT_Project
```

- **createproject**: `function createProject( 	projectFriendlyName: string, 	projectName?: string, 	teamUuid?: string, 	folderUuid?: string, 	description?: string, 	collaborationMode?: EDMT_ProjectCollaborationMode, 	fileFormat?: EDMT_ProjectFileFormat, ): Promise<string | undefined>;`
- **getallprojectsuuid**: `function getAllProjectsUuid( 	teamUuid?: string, 	folderUuid?: string, 	workspaceUuid?: string, ): Promise<Array<string>>;`
- **getcurrentprojectinfo**: `function getCurrentProjectInfo(): Promise<IDMT_ProjectItem | undefined>;`
- **getprojectinfo**: `function getProjectInfo(projectUuid: string): Promise<IDMT_BriefProjectItem | undefined>;`
- **moveprojecttofolder**: `function moveProjectToFolder(projectUuid: string, folderUuid?: string): Promise<boolean>;`
- **openproject**: `function openProject(projectUuid: string): Promise<boolean>;`

---

## DMT_Schematic

Document tree / Schematic management class

```typescript
class DMT_Schematic
```

- **copyschematic**: `function copySchematic(schematicUuid: string, boardName?: string): Promise<string | undefined>;`
- **copyschematicpage**: `function copySchematicPage( 	schematicPageUuid: string, 	schematicUuid?: string, ): Promise<string | undefined>;`
- **createschematic**: `function createSchematic(boardName?: string): Promise<string | undefined>;`
- **createschematicpage**: `function createSchematicPage(schematicUuid: string): Promise<string | undefined>;`
- **deleteschematic**: `function deleteSchematic(schematicUuid: string): Promise<boolean>;`
- **deleteschematicpage**: `function deleteSchematicPage(schematicPageUuid: string): Promise<boolean>;`
- **getallschematicpagesinfo**: `function getAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;`
- **getallschematicsinfo**: `function getAllSchematicsInfo(): Promise<Array<IDMT_SchematicItem>>;`
- **getcurrentschematicallschematicpagesinfo**: `function getCurrentSchematicAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;`
- **getcurrentschematicinfo**: `function getCurrentSchematicInfo(): Promise<IDMT_SchematicItem | undefined>;`
- **getcurrentschematicpageinfo**: `function getCurrentSchematicPageInfo(): Promise<IDMT_SchematicPageItem | undefined>;`
- **getschematicinfo**: `function getSchematicInfo(schematicUuid: string): Promise<IDMT_SchematicItem | undefined>;`
- **getschematicpageinfo**: `function getSchematicPageInfo( 	schematicPageUuid: string, ): Promise<IDMT_SchematicPageItem | undefined>;`
- **modifyschematicname**: `function modifySchematicName(schematicUuid: string, schematicName: string): Promise<boolean>;`
- **modifyschematicpagename**: `function modifySchematicPageName( 	schematicPageUuid: string, 	schematicPageName: string, ): Promise<boolean>;`
- **modifyschematicpagetitleblock**: `function modifySchematicPageTitleBlock( 	showTitleBlock?: boolean, 	titleBlockData?: Record<string, { showTitle?: boolean; showValue?: boolean; value?: any }>, ): Promise<boolean>;`
- **reorderschematicpages**: `function reorderSchematicPages( 	schematicUuid: string, 	schematicPageItemsArray: Array<IDMT_SchematicPageItem>, ): Promise<boolean>;`

---

## DMT_SelectControl

Document tree / selection control class

```typescript
class DMT_SelectControl
```

- **getcurrentdocumentinfo**: `function getCurrentDocumentInfo(): Promise<IDMT_EditorDocumentItem | undefined>;`

---

## DMT_Team

Document tree / Team class

```typescript
class DMT_Team
```

- **getallinvolvedteaminfo**: `function getAllInvolvedTeamInfo(): Promise<Array<IDMT_TeamItem>>;`
- **getallteamsinfo**: `function getAllTeamsInfo(): Promise<Array<IDMT_TeamItem>>;`
- **getcurrentteaminfo**: `function getCurrentTeamInfo(): Promise<IDMT_TeamItem | undefined>;`

---

## DMT_Workspace

Document tree / Workspace class

```typescript
class DMT_Workspace
```

- **getallworkspacesinfo**: `function getAllWorkspacesInfo(): Promise<Array<IDMT_WorkspaceItem>>;`
- **getcurrentworkspaceinfo**: `function getCurrentWorkspaceInfo(): Promise<IDMT_WorkspaceItem | undefined>;`
- **toggletoworkspace**: `function toggleToWorkspace(workspaceUuid?: string): Promise<boolean>;`

---

## EDA

EasyEDA Pro user API interface

```typescript
eda: EDA;
```

- **dmt_board**: `function dmt_Board: DMT_Board;`
- **dmt_editorcontrol**: `function dmt_EditorControl: DMT_EditorControl;`
- **dmt_event**: `function dmt_Event: DMT_Event;`
- **dmt_folder**: `function dmt_Folder: DMT_Folder;`
- **dmt_panel**: `function dmt_Panel: DMT_Panel;`
- **dmt_pcb**: `function dmt_Pcb: DMT_Pcb;`
- **dmt_project**: `function dmt_Project: DMT_Project;`
- **dmt_schematic**: `function dmt_Schematic: DMT_Schematic;`
- **dmt_selectcontrol**: `function dmt_SelectControl: DMT_SelectControl;`
- **dmt_team**: `function dmt_Team: DMT_Team;`
- **dmt_workspace**: `function dmt_Workspace: DMT_Workspace;`
- **lib_3dmodel**: `function lib_3DModel: LIB_3DModel;`
- **lib_cbb**: `function lib_Cbb: LIB_Cbb;`
- **lib_classification**: `function lib_Classification: LIB_Classification;`
- **lib_device**: `function lib_Device: LIB_Device;`
- **lib_footprint**: `function lib_Footprint: LIB_Footprint;`
- **lib_librarieslist**: `function lib_LibrariesList: LIB_LibrariesList;`
- **lib_panellibrary**: `function lib_PanelLibrary: LIB_PanelLibrary;`
- **lib_selectcontrol**: `function lib_SelectControl: LIB_SelectControl;`
- **lib_simulationmodel**: `function lib_SimulationModel: LIB_SimulationModel;`
- **lib_symbol**: `function lib_Symbol: LIB_Symbol;`
- **pcb_document**: `function pcb_Document: PCB_Document;`
- **pcb_drc**: `function pcb_Drc: PCB_Drc;`
- **pcb_event**: `function pcb_Event: PCB_Event;`
- **pcb_imagetool**: `function pcb_ImageTool: PCB_ImageTool;`
- **pcb_layer**: `function pcb_Layer: PCB_Layer;`
- **pcb_manufacturedata**: `function pcb_ManufactureData: PCB_ManufactureData;`
- **pcb_mathpolygon**: `function pcb_MathPolygon: PCB_MathPolygon;`
- **pcb_net**: `function pcb_Net: PCB_Net;`
- **pcb_primitive**: `function pcb_Primitive: PCB_Primitive;`
- **pcb_primitivearc**: `function pcb_PrimitiveArc: PCB_PrimitiveArc;`
- **pcb_primitiveattribute**: `function pcb_PrimitiveAttribute: PCB_PrimitiveAttribute;`
- **pcb_primitivecomponent**: `function pcb_PrimitiveComponent: PCB_PrimitiveComponent;`
- **pcb_primitivedimension**: `function pcb_PrimitiveDimension: PCB_PrimitiveDimension;`
- **pcb_primitivefill**: `function pcb_PrimitiveFill: PCB_PrimitiveFill;`
- **pcb_primitiveimage**: `function pcb_PrimitiveImage: PCB_PrimitiveImage;`
- **pcb_primitiveline**: `function pcb_PrimitiveLine: PCB_PrimitiveLine;`
- **pcb_primitiveobject**: `function pcb_PrimitiveObject: PCB_PrimitiveObject;`
- **pcb_primitivepad**: `function pcb_PrimitivePad: PCB_PrimitivePad;`
- **pcb_primitivepolyline**: `function pcb_PrimitivePolyline: PCB_PrimitivePolyline;`
- **pcb_primitivepour**: `function pcb_PrimitivePour: PCB_PrimitivePour;`
- **pcb_primitivepoured**: `function pcb_PrimitivePoured: PCB_PrimitivePoured;`
- **pcb_primitiveregion**: `function pcb_PrimitiveRegion: PCB_PrimitiveRegion;`
- **pcb_primitivestring**: `function pcb_PrimitiveString: PCB_PrimitiveString;`
- **pcb_primitivevia**: `function pcb_PrimitiveVia: PCB_PrimitiveVia;`
- **pcb_raytracerengine**: `function pcb_RayTracerEngine: PCB_RayTracerEngine;`
- **pcb_selectcontrol**: `function pcb_SelectControl: PCB_SelectControl;`
- **pcb_tool**: `function pcb_Tool: PCB_Tool;`
- **pnl_document**: `function pnl_Document: PNL_Document;`
- **sch_document**: `function sch_Document: SCH_Document;`
- **sch_drc**: `function sch_Drc: SCH_Drc;`
- **sch_event**: `function sch_Event: SCH_Event;`
- **sch_manufacturedata**: `function sch_ManufactureData: SCH_ManufactureData;`
- **sch_net**: `function sch_Net: SCH_Net;`
- **sch_netlist**: `function sch_Netlist: SCH_Netlist;`
- **sch_primitive**: `function sch_Primitive: SCH_Primitive;`
- **sch_primitivearc**: `function sch_PrimitiveArc: SCH_PrimitiveArc;`
- **sch_primitiveattribute**: `function sch_PrimitiveAttribute: SCH_PrimitiveAttribute;`
- **sch_primitivebus**: `function sch_PrimitiveBus: SCH_PrimitiveBus;`
- **sch_primitivecircle**: `function sch_PrimitiveCircle: SCH_PrimitiveCircle;`
- **sch_primitivecomponent**: `function sch_PrimitiveComponent: SCH_PrimitiveComponent;`
- **sch_primitiveobject**: `function sch_PrimitiveObject: SCH_PrimitiveObject;`
- **sch_primitivepin**: `function sch_PrimitivePin: SCH_PrimitivePin;`
- **sch_primitivepolygon**: `function sch_PrimitivePolygon: SCH_PrimitivePolygon;`
- **sch_primitiverectangle**: `function sch_PrimitiveRectangle: SCH_PrimitiveRectangle;`
- **sch_primitivetext**: `function sch_PrimitiveText: SCH_PrimitiveText;`
- **sch_primitivewire**: `function sch_PrimitiveWire: SCH_PrimitiveWire;`
- **sch_selectcontrol**: `function sch_SelectControl: SCH_SelectControl;`
- **sch_simulationengine**: `function sch_SimulationEngine: SCH_SimulationEngine;`
- **sch_utils**: `function sch_Utils: SCH_Utils;`
- **sys_clienturl**: `function sys_ClientUrl: SYS_ClientUrl;`
- **sys_dialog**: `function sys_Dialog: SYS_Dialog;`
- **sys_environment**: `function sys_Environment: SYS_Environment;`
- **sys_externalapi**: `function sys_ExternalApi: SYS_ExternalApi;`
- **sys_filemanager**: `function sys_FileManager: SYS_FileManager;`
- **sys_filesystem**: `function sys_FileSystem: SYS_FileSystem;`
- **sys_fontmanager**: `function sys_FontManager: SYS_FontManager;`
- **sys_formatconversion**: `function sys_FormatConversion: SYS_FormatConversion;`
- **sys_headermenu**: `function sys_HeaderMenu: SYS_HeaderMenu;`
- **sys_help**: `function sys_Help: SYS_Help;`
- **sys_i18n**: `function sys_I18n: SYS_I18n;`
- **sys_iframe**: `function sys_IFrame: SYS_IFrame;`
- **sys_loadingandprogressbar**: `function sys_LoadingAndProgressBar: SYS_LoadingAndProgressBar;`
- **sys_log**: `function sys_Log: SYS_Log;`
- **sys_math**: `function sys_Math: SYS_Math;`
- **sys_message**: `function sys_Message: SYS_Message;`
- **sys_messagebox**: `function sys_MessageBox: SYS_MessageBox;`
- **sys_messagebus**: `function sys_MessageBus: SYS_MessageBus;`
- **sys_panelcontrol**: `function sys_PanelControl: SYS_PanelControl;`
- **sys_rightclickmenu**: `function sys_RightClickMenu: SYS_RightClickMenu;`
- **sys_setting**: `function sys_Setting: SYS_Setting;`
- **sys_shortcutkey**: `function sys_ShortcutKey: SYS_ShortcutKey;`
- **sys_storage**: `function sys_Storage: SYS_Storage;`
- **sys_timer**: `function sys_Timer: SYS_Timer;`
- **sys_toastmessage**: `function sys_ToastMessage: SYS_ToastMessage;`
- **sys_tool**: `function sys_Tool: SYS_Tool;`
- **sys_unit**: `function sys_Unit: SYS_Unit;`
- **sys_websocket**: `function sys_WebSocket: SYS_WebSocket;`
- **sys_window**: `function sys_Window: SYS_Window;`

---

## IPCB_ComplexPolygon

Complex polygon

```typescript
class IPCB_ComplexPolygon
```

- **addsource**: `function addSource( 	complexPolygon: 		| TPCB_PolygonSourceArray 		| Array<TPCB_PolygonSourceArray> 		| IPCB_Polygon 		| Array<IPCB_Polygon>, ): IPCB_ComplexPolygon;`
- **getcenter**: `function getCenter(): Promise<{ x: number; y: number }>;`
- **getsource**: `function getSource(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;`
- **getsourcestrictcomplex**: `function getSourceStrictComplex(): Array<TPCB_PolygonSourceArray>;`
- **topolygon**: `function toPolygon(): Array<IPCB_Polygon>;`

---

## IPCB_Polygon

Single polygon

```typescript
class IPCB_Polygon
```

- **discretize**: `function discretize(options?: IPCB_DiscretizeOptions): Promise<Array<IPCB_DiscretizedPoint> | null>;`
- **getcenter**: `function getCenter(): Promise<{ x: number; y: number }>;`
- **getsource**: `function getSource(): TPCB_PolygonSourceArray;`

---

## IPCB_PrimitiveArc

Arc line primitive

```typescript
class IPCB_PrimitiveArc implements IPCB_Primitive
```

- **done**: `function done(): Promise<IPCB_PrimitiveArc>;`
- **getadjacentprimitives**: `function getAdjacentPrimitives(): Promise< 	Array<IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc> >;`
- **getentiretrack**: `function getEntireTrack(includeVias: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;`
- **getentiretrack_1**: `function getEntireTrack( 	includeVias: true, ): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;`
- **getstate_arcangle**: `function getState_ArcAngle(): number;`
- **getstate_endx**: `function getState_EndX(): number;`
- **getstate_endy**: `function getState_EndY(): number;`
- **getstate_interactivemode**: `function getState_InteractiveMode(): EPCB_PrimitiveArcInteractiveMode;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfLine;`
- **getstate_linewidth**: `function getState_LineWidth(): number;`
- **getstate_net**: `function getState_Net(): string;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_startx**: `function getState_StartX(): number;`
- **getstate_starty**: `function getState_StartY(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitiveArc>;`
- **setstate_arcangle**: `function setState_ArcAngle(arcAngle: number): IPCB_PrimitiveArc;`
- **setstate_endx**: `function setState_EndX(endX: number): IPCB_PrimitiveArc;`
- **setstate_endy**: `function setState_EndY(endY: number): IPCB_PrimitiveArc;`
- **setstate_interactivemode**: `function setState_InteractiveMode( 	interactiveMode: EPCB_PrimitiveArcInteractiveMode, ): IPCB_PrimitiveArc;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitiveArc;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number): IPCB_PrimitiveArc;`
- **setstate_net**: `function setState_Net(net: string): IPCB_PrimitiveArc;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveArc;`
- **setstate_startx**: `function setState_StartX(startX: number): IPCB_PrimitiveArc;`
- **setstate_starty**: `function setState_StartY(startY: number): IPCB_PrimitiveArc;`
- **toasync**: `function toAsync(): IPCB_PrimitiveArc;`
- **tosync**: `function toSync(): IPCB_PrimitiveArc;`

---

## IPCB_PrimitiveAttribute

Property primitive

```typescript
class IPCB_PrimitiveAttribute implements IPCB_Primitive
```

- **_constructor_**: `function constructor( 	layer: TPCB_LayersOfImage, 	x: number | null, 	y: number | null, 	key: string, 	value: string, 	keyVisible: boolean, 	valueVisible: boolean, 	fontFamily: string, 	fontSize: number, 	lineWidth: number, 	alignMode: EPCB_PrimitiveStringAlignMode, 	rotation: number, 	reverse: boolean, 	expansion: number, 	mirror: boolean, 	primitiveLock: boolean, 	primitiveId: string, 	parentPrimitiveId: string, );`
- **done**: `function done(): Promise<IPCB_PrimitiveAttribute>;`
- **getstate_alignmode**: `function getState_AlignMode(): EPCB_PrimitiveStringAlignMode;`
- **getstate_expansion**: `function getState_Expansion(): number;`
- **getstate_fontfamily**: `function getState_FontFamily(): string;`
- **getstate_fontsize**: `function getState_FontSize(): number;`
- **getstate_key**: `function getState_Key(): string;`
- **getstate_keyvisible**: `function getState_KeyVisible(): boolean;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfImage;`
- **getstate_linewidth**: `function getState_LineWidth(): number;`
- **getstate_mirror**: `function getState_Mirror(): boolean;`
- **getstate_parentprimitiveid**: `function getState_ParentPrimitiveId(): string;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_reverse**: `function getState_Reverse(): boolean;`
- **getstate_rotation**: `function getState_Rotation(): number;`
- **getstate_value**: `function getState_Value(): string;`
- **getstate_valuevisible**: `function getState_ValueVisible(): boolean;`
- **getstate_x**: `function getState_X(): number | null;`
- **getstate_y**: `function getState_Y(): number | null;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitiveAttribute>;`
- **setstate_alignmode**: `function setState_AlignMode(alignMode: EPCB_PrimitiveStringAlignMode): IPCB_PrimitiveAttribute;`
- **setstate_expansion**: `function setState_Expansion(expansion: number): IPCB_PrimitiveAttribute;`
- **setstate_fontfamily**: `function setState_FontFamily(fontFamily: string): IPCB_PrimitiveAttribute;`
- **setstate_fontsize**: `function setState_FontSize(fontSize: number): IPCB_PrimitiveAttribute;`
- **setstate_key**: `function setState_Key(key: string): IPCB_PrimitiveAttribute;`
- **setstate_keyvisible**: `function setState_KeyVisible(keyVisible: boolean): IPCB_PrimitiveAttribute;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfImage): IPCB_PrimitiveAttribute;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number): IPCB_PrimitiveAttribute;`
- **setstate_mirror**: `function setState_Mirror(mirror: boolean): IPCB_PrimitiveAttribute;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveAttribute;`
- **setstate_reverse**: `function setState_Reverse(reverse: boolean): IPCB_PrimitiveAttribute;`
- **setstate_rotation**: `function setState_Rotation(rotation: number): IPCB_PrimitiveAttribute;`
- **setstate_value**: `function setState_Value(value: string): IPCB_PrimitiveAttribute;`
- **setstate_valuevisible**: `function setState_ValueVisible(valueVisible: boolean): IPCB_PrimitiveAttribute;`
- **setstate_x**: `function setState_X(x: number): IPCB_PrimitiveAttribute;`
- **setstate_y**: `function setState_Y(y: number): IPCB_PrimitiveAttribute;`
- **toasync**: `function toAsync(): IPCB_PrimitiveAttribute;`
- **tosync**: `function toSync(): IPCB_PrimitiveAttribute;`

---

## IPCB_PrimitiveComponent

Device primitive

```typescript
class IPCB_PrimitiveComponent implements IPCB_Primitive
```

- **done**: `function done(): Promise<IPCB_PrimitiveComponent>;`
- **getallpins**: `function getAllPins(): Promise<Array<IPCB_PrimitiveComponentPad>>;`
- **getstate_addintobom**: `function getState_AddIntoBom(): boolean;`
- **getstate_component**: `function getState_Component(): { libraryUuid: string; uuid: string; name?: string } | undefined;`
- **getstate_designator**: `function getState_Designator(): string | undefined;`
- **getstate_footprint**: `function getState_Footprint(): { libraryUuid: string; uuid: string; name?: string } | undefined;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfComponent;`
- **getstate_manufacturer**: `function getState_Manufacturer(): string | undefined;`
- **getstate_manufacturerid**: `function getState_ManufacturerId(): string | undefined;`
- **getstate_model3d**: `function getState_Model3D(): { libraryUuid: string; uuid: string; name?: string } | undefined;`
- **getstate_name**: `function getState_Name(): string | undefined;`
- **getstate_otherproperty**: `function getState_OtherProperty(): Record<string, string | number | boolean> | undefined;`
- **getstate_pads**: `function getState_Pads(): 	Array<{ primitiveId: string; net: string; padNumber: string }> | undefined;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `function getState_Rotation(): number;`
- **getstate_supplier**: `function getState_Supplier(): string | undefined;`
- **getstate_supplierid**: `function getState_SupplierId(): string | undefined;`
- **getstate_uniqueid**: `function getState_UniqueId(): string | undefined;`
- **getstate_x**: `function getState_X(): number;`
- **getstate_y**: `function getState_Y(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitiveComponent>;`
- **setattribute**: `function setAttribute( 	key: string, 	value?: string | number | boolean, 	keyVisible?: boolean, 	valueVisible?: boolean, ): Promise<IPCB_PrimitiveAttribute>;`
- **setstate_addintobom**: `function setState_AddIntoBom(addIntoBom: boolean): IPCB_PrimitiveComponent;`
- **setstate_designator**: `function setState_Designator(designator: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfComponent): IPCB_PrimitiveComponent;`
- **setstate_manufacturer**: `function setState_Manufacturer(manufacturer: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_manufacturerid**: `function setState_ManufacturerId(manufacturerId: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_name**: `function setState_Name(name: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_otherproperty**: `function setState_OtherProperty( 	otherProperty: Record<string, string | number | boolean>, ): IPCB_PrimitiveComponent;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveComponent;`
- **setstate_rotation**: `function setState_Rotation(rotation: number): IPCB_PrimitiveComponent;`
- **setstate_supplier**: `function setState_Supplier(supplier: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_supplierid**: `function setState_SupplierId(supplierId: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_uniqueid**: `function setState_UniqueId(uniqueId: string | undefined): IPCB_PrimitiveComponent;`
- **setstate_x**: `function setState_X(x: number): IPCB_PrimitiveComponent;`
- **setstate_y**: `function setState_Y(y: number): IPCB_PrimitiveComponent;`
- **toasync**: `function toAsync(): IPCB_PrimitiveComponent;`
- **tosync**: `function toSync(): IPCB_PrimitiveComponent;`

---

## IPCB_PrimitiveComponentPad

Device pad primitive

```typescript
class IPCB_PrimitiveComponentPad extends IPCB_PrimitivePad
```

- **done**: `function done(): Promise<IPCB_PrimitiveComponentPad>;`
- **getconnectedprimitives**: `function getConnectedPrimitives( 	onlyCentreConnection: true, ): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;`
- **getconnectedprimitives_1**: `function getConnectedPrimitives( 	onlyCentreConnection: false, ): Promise< 	Array< 		| IPCB_PrimitiveLine 		| IPCB_PrimitiveArc 		| IPCB_PrimitiveVia 		| IPCB_PrimitivePolyline 		| IPCB_PrimitiveFill 	> >;`
- **getstate_parentcomponentprimitiveid**: `function getState_ParentComponentPrimitiveId(): string;`
- **primitivetype**: `function readonly primitiveType: EPCB_PrimitiveType.COMPONENT_PAD;`
- **setstate_parentcomponentprimitiveid**: `function setState_ParentComponentPrimitiveId(): IPCB_PrimitiveComponentPad;`

---

## IPCB_PrimitiveDimension

Dimension primitive

```typescript
class IPCB_PrimitiveDimension implements IPCB_Primitive
```

- **done**: `function done(): Promise<IPCB_PrimitiveDimension>;`
- **getstate_coordinateset**: `function getState_CoordinateSet(): TPCB_PrimitiveDimensionCoordinateSet;`
- **getstate_dimensiontype**: `function getState_DimensionType(): EPCB_PrimitiveDimensionType;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfDimension;`
- **getstate_linewidth**: `function getState_LineWidth(): number;`
- **getstate_precision**: `function getState_Precision(): number;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_textfollow**: `function getState_TextFollow(): 0 | 1;`
- **getstate_unit**: `function getState_Unit(): 	ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitiveDimension>;`
- **setstate_coordinateset**: `function setState_CoordinateSet( 	coordinateSet: TPCB_PrimitiveDimensionCoordinateSet, ): IPCB_PrimitiveDimension;`
- **setstate_dimensiontype**: `function setState_DimensionType( 	dimensionType: EPCB_PrimitiveDimensionType, ): IPCB_PrimitiveDimension;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfDimension): IPCB_PrimitiveDimension;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number): IPCB_PrimitiveDimension;`
- **setstate_precision**: `function setState_Precision(precision: number): IPCB_PrimitiveDimension;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveDimension;`
- **setstate_unit**: `function setState_Unit( 	unit: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL, ): IPCB_PrimitiveDimension;`
- **toasync**: `function toAsync(): IPCB_PrimitiveDimension;`
- **tosync**: `function toSync(): IPCB_PrimitiveDimension;`

---

## IPCB_PrimitiveFill

Fill primitive

```typescript
class IPCB_PrimitiveFill implements IPCB_Primitive
```

- **converttopolyline**: `function convertToPolyline(): Promise<IPCB_PrimitivePolyline>;`
- **converttopour**: `function convertToPour(): Promise<IPCB_PrimitivePour>;`
- **converttoregion**: `function convertToRegion(): Promise<IPCB_PrimitiveRegion>;`
- **done**: `function done(): Promise<IPCB_PrimitiveFill>;`
- **getstate_complexpolygon**: `function getState_ComplexPolygon(): IPCB_Polygon;`
- **getstate_fillmode**: `function getState_FillMode(): EPCB_PrimitiveFillMode | undefined;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfFill;`
- **getstate_linewidth**: `function getState_LineWidth(): number;`
- **getstate_net**: `function getState_Net(): string | undefined;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitiveFill>;`
- **setstate_complexpolygon**: `function setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitiveFill;`
- **setstate_fillmode**: `function setState_FillMode(fillMode: EPCB_PrimitiveFillMode): IPCB_PrimitiveFill;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfFill): IPCB_PrimitiveFill;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number): IPCB_PrimitiveFill;`
- **setstate_net**: `function setState_Net(net: string): IPCB_PrimitiveFill;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveFill;`
- **toasync**: `function toAsync(): IPCB_PrimitiveFill;`
- **tosync**: `function toSync(): IPCB_PrimitiveFill;`

---

## IPCB_PrimitiveImage

Image primitive

```typescript
class IPCB_PrimitiveImage implements IPCB_Primitive
```

- **done**: `function done(): Promise<IPCB_PrimitiveImage>;`
- **getstate_complexpolygon**: `function getState_ComplexPolygon(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;`
- **getstate_height**: `function getState_Height(): number;`
- **getstate_horizonmirror**: `function getState_HorizonMirror(): boolean;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfImage;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `function getState_Rotation(): number;`
- **getstate_width**: `function getState_Width(): number;`
- **getstate_x**: `function getState_X(): number;`
- **getstate_y**: `function getState_Y(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitiveImage>;`
- **setstate_height**: `function setState_Height(height: number): IPCB_PrimitiveImage;`
- **setstate_horizonmirror**: `function setState_HorizonMirror(horizonMirror: boolean): IPCB_PrimitiveImage;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfImage): IPCB_PrimitiveImage;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveImage;`
- **setstate_rotation**: `function setState_Rotation(rotation: number): IPCB_PrimitiveImage;`
- **setstate_width**: `function setState_Width(width: number): IPCB_PrimitiveImage;`
- **setstate_x**: `function setState_X(x: number): IPCB_PrimitiveImage;`
- **setstate_y**: `function setState_Y(y: number): IPCB_PrimitiveImage;`
- **toasync**: `function toAsync(): IPCB_PrimitiveImage;`
- **tosync**: `function toSync(): IPCB_PrimitiveImage;`

---

## IPCB_PrimitiveLine

Line primitive

```typescript
class IPCB_PrimitiveLine implements IPCB_Primitive
```

- **done**: `function done(): Promise<IPCB_PrimitiveLine>;`
- **getadjacentprimitives**: `function getAdjacentPrimitives(): Promise< 	Array<IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc> >;`
- **getentiretrack**: `function getEntireTrack(includeVias: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;`
- **getentiretrack_1**: `function getEntireTrack( 	includeVias: true, ): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;`
- **getstate_endx**: `function getState_EndX(): number;`
- **getstate_endy**: `function getState_EndY(): number;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfLine;`
- **getstate_linewidth**: `function getState_LineWidth(): number;`
- **getstate_net**: `function getState_Net(): string;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_startx**: `function getState_StartX(): number;`
- **getstate_starty**: `function getState_StartY(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitiveLine>;`
- **setstate_endx**: `function setState_EndX(endX: number): IPCB_PrimitiveLine;`
- **setstate_endy**: `function setState_EndY(endY: number): IPCB_PrimitiveLine;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitiveLine;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number): IPCB_PrimitiveLine;`
- **setstate_net**: `function setState_Net(net: string): IPCB_PrimitiveLine;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveLine;`
- **setstate_startx**: `function setState_StartX(startX: number): IPCB_PrimitiveLine;`
- **setstate_starty**: `function setState_StartY(startY: number): IPCB_PrimitiveLine;`
- **toasync**: `function toAsync(): IPCB_PrimitiveLine;`
- **tosync**: `function toSync(): IPCB_PrimitiveLine;`

---

## IPCB_PrimitiveObject

Binary embedded object primitive

```typescript
class IPCB_PrimitiveObject implements IPCB_Primitive
```

- **done**: `function done(): Promise<IPCB_PrimitiveObject>;`
- **getstate_binarydata**: `function getState_BinaryData(): string;`
- **getstate_filename**: `function getState_FileName(): string;`
- **getstate_height**: `function getState_Height(): number;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfObject | undefined;`
- **getstate_mirror**: `function getState_Mirror(): boolean;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `function getState_Rotation(): number;`
- **getstate_topleftx**: `function getState_TopLeftX(): number | undefined;`
- **getstate_toplefty**: `function getState_TopLeftY(): number | undefined;`
- **getstate_width**: `function getState_Width(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitiveObject>;`
- **setstate_binarydata**: `function setState_BinaryData(binaryData: string): IPCB_PrimitiveObject;`
- **setstate_filename**: `function setState_FileName(fileName: string): IPCB_PrimitiveObject;`
- **setstate_height**: `function setState_Height(height: number): IPCB_PrimitiveObject;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfObject): IPCB_PrimitiveObject;`
- **setstate_mirror**: `function setState_Mirror(mirror: boolean): IPCB_PrimitiveObject;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveObject;`
- **setstate_rotation**: `function setState_Rotation(rotation: number): IPCB_PrimitiveObject;`
- **setstate_topleftx**: `function setState_TopLeftX(topLeftX: number): IPCB_PrimitiveObject;`
- **setstate_toplefty**: `function setState_TopLeftY(topLeftY: number): IPCB_PrimitiveObject;`
- **setstate_width**: `function setState_Width(width: number): IPCB_PrimitiveObject;`
- **toasync**: `function toAsync(): IPCB_PrimitiveObject;`
- **tosync**: `function toSync(): IPCB_PrimitiveObject;`

---

## IPCB_PrimitivePad

Pad primitive

```typescript
class IPCB_PrimitivePad implements IPCB_Primitive
```

- **async**: `function async: boolean;`
- **create**: `function create(): Promise<IPCB_PrimitivePad>;`
- **done**: `function done(): Promise<IPCB_PrimitivePad>;`
- **getstate_heatwelding**: `function getState_HeatWelding(): IPCB_PrimitivePadHeatWelding | null;`
- **getstate_hole**: `function getState_Hole(): TPCB_PrimitivePadHole | null;`
- **getstate_holeoffsetx**: `function getState_HoleOffsetX(): number;`
- **getstate_holeoffsety**: `function getState_HoleOffsetY(): number;`
- **getstate_holerotation**: `function getState_HoleRotation(): number;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfPad;`
- **getstate_metallization**: `function getState_Metallization(): boolean;`
- **getstate_net**: `function getState_Net(): string | undefined;`
- **getstate_pad**: `function getState_Pad(): TPCB_PrimitivePadShape | undefined;`
- **getstate_padnumber**: `function getState_PadNumber(): string;`
- **getstate_padtype**: `function getState_PadType(): EPCB_PrimitivePadType;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_rotation**: `function getState_Rotation(): number;`
- **getstate_soldermaskandpastemaskexpansion**: `function getState_SolderMaskAndPasteMaskExpansion(): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;`
- **getstate_specialpad**: `function getState_SpecialPad(): TPCB_PrimitiveSpecialPadShape | undefined;`
- **getstate_x**: `function getState_X(): number;`
- **getstate_y**: `function getState_Y(): number;`
- **heatwelding**: `function heatWelding: IPCB_PrimitivePadHeatWelding | null;`
- **hole**: `function hole: TPCB_PrimitivePadHole | null;`
- **holeoffsetx**: `function holeOffsetX: number;`
- **holeoffsety**: `function holeOffsetY: number;`
- **holerotation**: `function holeRotation: number;`
- **isasync**: `function isAsync(): boolean;`
- **layer**: `function layer: TPCB_LayersOfPad;`
- **metallization**: `function metallization: boolean;`
- **net**: `function net?: string;`
- **pad**: `function pad?: TPCB_PrimitivePadShape;`
- **padnumber**: `function padNumber: string;`
- **padtype**: `function padType: EPCB_PrimitivePadType;`
- **primitiveid**: `function primitiveId?: string;`
- **primitivelock**: `function primitiveLock: boolean;`
- **primitivetype**: `function readonly primitiveType: EPCB_PrimitiveType;`
- **reset**: `function reset(): Promise<IPCB_PrimitivePad>;`
- **rotation**: `function rotation: number;`
- **setstate_heatwelding**: `function setState_HeatWelding(heatWelding: IPCB_PrimitivePadHeatWelding | null): IPCB_PrimitivePad;`
- **setstate_hole**: `function setState_Hole(hole: TPCB_PrimitivePadHole): IPCB_PrimitivePad;`
- **setstate_holeoffsetx**: `function setState_HoleOffsetX(holeOffsetX: number): IPCB_PrimitivePad;`
- **setstate_holeoffsety**: `function setState_HoleOffsetY(holeOffsetY: number): IPCB_PrimitivePad;`
- **setstate_holerotation**: `function setState_HoleRotation(holeRotation: number): IPCB_PrimitivePad;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfPad): IPCB_PrimitivePad;`
- **setstate_metallization**: `function setState_Metallization(metallization: boolean): IPCB_PrimitivePad;`
- **setstate_net**: `function setState_Net(net?: string): IPCB_PrimitivePad;`
- **setstate_pad**: `function setState_Pad(pad: TPCB_PrimitivePadShape): IPCB_PrimitivePad;`
- **setstate_padnumber**: `function setState_PadNumber(padNumber: string): IPCB_PrimitivePad;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePad;`
- **setstate_rotation**: `function setState_Rotation(rotation: number): IPCB_PrimitivePad;`
- **setstate_soldermaskandpastemaskexpansion**: `function setState_SolderMaskAndPasteMaskExpansion( 	solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, ): IPCB_PrimitivePad;`
- **setstate_specialpad**: `function setState_SpecialPad(specialPad: TPCB_PrimitiveSpecialPadShape): IPCB_PrimitivePad;`
- **setstate_x**: `function setState_X(x: number): IPCB_PrimitivePad;`
- **setstate_y**: `function setState_Y(y: number): IPCB_PrimitivePad;`
- **soldermaskandpastemaskexpansion**: `function solderMaskAndPasteMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;`
- **specialpad**: `function specialPad?: TPCB_PrimitiveSpecialPadShape;`
- **toasync**: `function toAsync(): IPCB_PrimitivePad;`
- **tosync**: `function toSync(): IPCB_PrimitivePad;`
- **x**: `function x: number;`
- **y**: `function y: number;`

---

## IPCB_PrimitivePolyline

Polyline primitive

```typescript
class IPCB_PrimitivePolyline implements IPCB_Primitive
```

- **converttofill**: `function convertToFill(): Promise<IPCB_PrimitiveFill>;`
- **converttopour**: `function convertToPour(): Promise<IPCB_PrimitivePour>;`
- **converttoregion**: `function convertToRegion(): Promise<IPCB_PrimitiveRegion>;`
- **done**: `function done(): Promise<IPCB_PrimitivePolyline>;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfLine;`
- **getstate_linewidth**: `function getState_LineWidth(): number;`
- **getstate_net**: `function getState_Net(): string;`
- **getstate_polygon**: `function getState_Polygon(): IPCB_Polygon;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitivePolyline>;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitivePolyline;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number): IPCB_PrimitivePolyline;`
- **setstate_net**: `function setState_Net(net: string): IPCB_PrimitivePolyline;`
- **setstate_polygon**: `function setState_Polygon(polygon: IPCB_Polygon): IPCB_PrimitivePolyline;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePolyline;`
- **toasync**: `function toAsync(): IPCB_PrimitivePolyline;`
- **tosync**: `function toSync(): IPCB_PrimitivePolyline;`

---

## IPCB_PrimitivePour

Copper border primitive

```typescript
class IPCB_PrimitivePour implements IPCB_Primitive
```

- **converttofill**: `function convertToFill(): Promise<IPCB_PrimitiveFill>;`
- **converttopolyline**: `function convertToPolyline(): Promise<IPCB_PrimitivePolyline>;`
- **converttoregion**: `function convertToRegion(): Promise<IPCB_PrimitiveRegion>;`
- **done**: `function done(): Promise<IPCB_PrimitivePour>;`
- **getcopperregion**: `function getCopperRegion(): Promise<IPCB_PrimitivePoured | undefined>;`
- **getstate_complexpolygon**: `function getState_ComplexPolygon(): IPCB_Polygon;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfCopper;`
- **getstate_linewidth**: `function getState_LineWidth(): number;`
- **getstate_net**: `function getState_Net(): string;`
- **getstate_pourfillmethod**: `function getState_PourFillMethod(): any;`
- **getstate_pourname**: `function getState_PourName(): string;`
- **getstate_pourpriority**: `function getState_PourPriority(): number;`
- **getstate_preservesilos**: `function getState_PreserveSilos(): boolean;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **isasync**: `function isAsync(): boolean;`
- **rebuildcopperregion**: `function rebuildCopperRegion(): Promise<IPCB_PrimitivePoured | undefined>;`
- **reset**: `function reset(): Promise<IPCB_PrimitivePour>;`
- **setstate_complexpolygon**: `function setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitivePour;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfCopper): IPCB_PrimitivePour;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number): IPCB_PrimitivePour;`
- **setstate_net**: `function setState_Net(net: string): IPCB_PrimitivePour;`
- **setstate_pourfillmethod**: `function setState_PourFillMethod(pourFillMethod: EPCB_PrimitivePourFillMethod): IPCB_PrimitivePour;`
- **setstate_pourname**: `function setState_PourName(pourName: string): IPCB_PrimitivePour;`
- **setstate_pourpriority**: `function setState_PourPriority(pourPriority: number): IPCB_PrimitivePour;`
- **setstate_preservesilos**: `function setState_PreserveSilos(preserveSilos: boolean): IPCB_PrimitivePour;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitivePour;`
- **toasync**: `function toAsync(): IPCB_PrimitivePour;`
- **tosync**: `function toSync(): IPCB_PrimitivePour;`

---

## IPCB_PrimitivePoured

Copper fill primitive

```typescript
class IPCB_PrimitivePoured implements IPCB_Primitive
```

- **addsoldermaskfill**: `function addSolderMaskFill( 	pourFillId: IPCB_PrimitivePouredPourFill['id'], ): Promise<IPCB_PrimitiveFill | undefined>;`
- **converttofill**: `function convertToFill( 	pourFillId: IPCB_PrimitivePouredPourFill['id'], ): Promise<IPCB_PrimitiveFill | undefined>;`
- **deletepourfills**: `function deletePourFills( 	pourFillIds: IPCB_PrimitivePouredPourFill['id'] | Array<IPCB_PrimitivePouredPourFill['id']>, ): Promise<boolean>;`
- **getstate_pourfills**: `function getState_PourFills(): Array<IPCB_PrimitivePouredPourFill>;`
- **getstate_pourprimitiveid**: `function getState_PourPrimitiveId(): string;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **reset**: `function reset(): Promise<IPCB_PrimitivePoured>;`

---

## IPCB_PrimitiveRegion

Region primitive

```typescript
class IPCB_PrimitiveRegion implements IPCB_Primitive
```

- **converttofill**: `function convertToFill(): Promise<IPCB_PrimitiveFill>;`
- **converttopolyline**: `function convertToPolyline(): Promise<IPCB_PrimitivePolyline>;`
- **converttopour**: `function convertToPour(): Promise<IPCB_PrimitivePour>;`
- **done**: `function done(): Promise<IPCB_PrimitiveRegion>;`
- **getstate_complexpolygon**: `function getState_ComplexPolygon(): IPCB_Polygon;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfRegion;`
- **getstate_linewidth**: `function getState_LineWidth(): number;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_regionname**: `function getState_RegionName(): string | undefined;`
- **getstate_ruletype**: `function getState_RuleType(): Array<EPCB_PrimitiveRegionRuleType>;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitiveRegion>;`
- **setstate_complexpolygon**: `function setState_ComplexPolygon(complexPolygon: IPCB_Polygon): IPCB_PrimitiveRegion;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfRegion): IPCB_PrimitiveRegion;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number): IPCB_PrimitiveRegion;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveRegion;`
- **setstate_regionname**: `function setState_RegionName(regionName?: string): IPCB_PrimitiveRegion;`
- **setstate_ruletype**: `function setState_RuleType(ruleType: Array<EPCB_PrimitiveRegionRuleType>): IPCB_PrimitiveRegion;`
- **toasync**: `function toAsync(): IPCB_PrimitiveRegion;`
- **tosync**: `function toSync(): IPCB_PrimitiveRegion;`

---

## IPCB_PrimitiveString

Text primitive

```typescript
class IPCB_PrimitiveString implements IPCB_Primitive
```

- **_constructor_**: `function constructor( 	layer: TPCB_LayersOfImage, 	x: number, 	y: number, 	text: string, 	fontFamily?: string, 	fontSize?: number, 	lineWidth?: number, 	alignMode?: EPCB_PrimitiveStringAlignMode, 	rotation?: number, 	reverse?: boolean, 	expansion?: number, 	mirror?: boolean, 	primitiveLock?: boolean, 	primitiveId?: string, );`
- **done**: `function done(): Promise<IPCB_PrimitiveString>;`
- **getstate_alignmode**: `function getState_AlignMode(): EPCB_PrimitiveStringAlignMode;`
- **getstate_expansion**: `function getState_Expansion(): number;`
- **getstate_fontfamily**: `function getState_FontFamily(): string;`
- **getstate_fontsize**: `function getState_FontSize(): number;`
- **getstate_layer**: `function getState_Layer(): TPCB_LayersOfImage;`
- **getstate_linewidth**: `function getState_LineWidth(): number;`
- **getstate_mirror**: `function getState_Mirror(): boolean;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_reverse**: `function getState_Reverse(): boolean;`
- **getstate_rotation**: `function getState_Rotation(): number;`
- **getstate_text**: `function getState_Text(): string;`
- **getstate_x**: `function getState_X(): number;`
- **getstate_y**: `function getState_Y(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitiveString>;`
- **setstate_alignmode**: `function setState_AlignMode(alignMode: EPCB_PrimitiveStringAlignMode): IPCB_PrimitiveString;`
- **setstate_expansion**: `function setState_Expansion(expansion: number): IPCB_PrimitiveString;`
- **setstate_fontfamily**: `function setState_FontFamily(fontFamily: string): IPCB_PrimitiveString;`
- **setstate_fontsize**: `function setState_FontSize(fontSize: number): IPCB_PrimitiveString;`
- **setstate_layer**: `function setState_Layer(layer: TPCB_LayersOfImage): IPCB_PrimitiveString;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number): IPCB_PrimitiveString;`
- **setstate_mirror**: `function setState_Mirror(mirror: boolean): IPCB_PrimitiveString;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveString;`
- **setstate_reverse**: `function setState_Reverse(reverse: boolean): IPCB_PrimitiveString;`
- **setstate_rotation**: `function setState_Rotation(rotation: number): IPCB_PrimitiveString;`
- **setstate_text**: `function setState_Text(text: string): IPCB_PrimitiveString;`
- **setstate_x**: `function setState_X(x: number): IPCB_PrimitiveString;`
- **setstate_y**: `function setState_Y(y: number): IPCB_PrimitiveString;`
- **toasync**: `function toAsync(): IPCB_PrimitiveString;`
- **tosync**: `function toSync(): IPCB_PrimitiveString;`

---

## IPCB_PrimitiveVia

Via primitive

```typescript
class IPCB_PrimitiveVia implements IPCB_Primitive
```

- **done**: `function done(): Promise<IPCB_PrimitiveVia>;`
- **getadjacentprimitives**: `function getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;`
- **getstate_designruleblindvianame**: `function getState_DesignRuleBlindViaName(): string | null;`
- **getstate_diameter**: `function getState_Diameter(): number;`
- **getstate_holediameter**: `function getState_HoleDiameter(): number;`
- **getstate_net**: `function getState_Net(): string;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivelock**: `function getState_PrimitiveLock(): boolean;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): EPCB_PrimitiveType;`
- **getstate_soldermaskexpansion**: `function getState_SolderMaskExpansion(): IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;`
- **getstate_viatype**: `function getState_ViaType(): EPCB_PrimitiveViaType;`
- **getstate_x**: `function getState_X(): number;`
- **getstate_y**: `function getState_Y(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<IPCB_PrimitiveVia>;`
- **setstate_designruleblindvianame**: `function setState_DesignRuleBlindViaName(designRuleBlindViaName: string | null): IPCB_PrimitiveVia;`
- **setstate_diameter**: `function setState_Diameter(diameter: number): IPCB_PrimitiveVia;`
- **setstate_holediameter**: `function setState_HoleDiameter(holeDiameter: number): IPCB_PrimitiveVia;`
- **setstate_net**: `function setState_Net(net: string): IPCB_PrimitiveVia;`
- **setstate_primitivelock**: `function setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveVia;`
- **setstate_soldermaskexpansion**: `function setState_SolderMaskExpansion( 	solderMaskExpansion: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, ): IPCB_PrimitiveVia;`
- **setstate_viatype**: `function setState_ViaType(viaType: EPCB_PrimitiveViaType): IPCB_PrimitiveVia;`
- **setstate_x**: `function setState_X(x: number): IPCB_PrimitiveVia;`
- **setstate_y**: `function setState_Y(y: number): IPCB_PrimitiveVia;`
- **toasync**: `function toAsync(): IPCB_PrimitiveVia;`
- **tosync**: `function toSync(): IPCB_PrimitiveVia;`

---

## ISCH_PrimitiveArc

Arc primitive

```typescript
class ISCH_PrimitiveArc implements ISCH_Primitive
```

- **done**: `function done(): Promise<ISCH_PrimitiveArc>;`
- **getstate_color**: `function getState_Color(): string | null;`
- **getstate_endx**: `function getState_EndX(): number;`
- **getstate_endy**: `function getState_EndY(): number;`
- **getstate_fillcolor**: `function getState_FillColor(): string | null;`
- **getstate_linetype**: `function getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `function getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_referencex**: `function getState_ReferenceX(): number;`
- **getstate_referencey**: `function getState_ReferenceY(): number;`
- **getstate_startx**: `function getState_StartX(): number;`
- **getstate_starty**: `function getState_StartY(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<ISCH_PrimitiveArc>;`
- **setstate_color**: `function setState_Color(color: string | null): ISCH_PrimitiveArc;`
- **setstate_endx**: `function setState_EndX(endX: number): ISCH_PrimitiveArc;`
- **setstate_endy**: `function setState_EndY(endY: number): ISCH_PrimitiveArc;`
- **setstate_fillcolor**: `function setState_FillColor(fillColor: string | null): ISCH_PrimitiveArc;`
- **setstate_linetype**: `function setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveArc;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveArc;`
- **setstate_referencex**: `function setState_ReferenceX(referenceX: number): ISCH_PrimitiveArc;`
- **setstate_referencey**: `function setState_ReferenceY(referenceY: number): ISCH_PrimitiveArc;`
- **setstate_startx**: `function setState_StartX(startX: number): ISCH_PrimitiveArc;`
- **setstate_starty**: `function setState_StartY(startY: number): ISCH_PrimitiveArc;`
- **toasync**: `function toAsync(): ISCH_PrimitiveArc;`
- **tosync**: `function toSync(): ISCH_PrimitiveArc;`

---

## ISCH_PrimitiveAttribute

Property primitive

```typescript
class ISCH_PrimitiveAttribute implements ISCH_Primitive
```

- **done**: `function done(): Promise<ISCH_PrimitiveAttribute>;`
- **getstate_alignmode**: `function getState_AlignMode(): ESCH_PrimitiveTextAlignMode | null;`
- **getstate_bold**: `function getState_Bold(): boolean | null;`
- **getstate_color**: `function getState_Color(): string | null;`
- **getstate_fillcolor**: `function getState_FillColor(): string | null;`
- **getstate_fontname**: `function getState_FontName(): string | null;`
- **getstate_fontsize**: `function getState_FontSize(): number | null;`
- **getstate_italic**: `function getState_Italic(): boolean | null;`
- **getstate_key**: `function getState_Key(): string;`
- **getstate_keyvisible**: `function getState_KeyVisible(): boolean | null;`
- **getstate_parentprimitiveid**: `function getState_ParentPrimitiveId(): string;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `function getState_Rotation(): number | null;`
- **getstate_underline**: `function getState_UnderLine(): boolean | null;`
- **getstate_value**: `function getState_Value(): string;`
- **getstate_valuevisible**: `function getState_ValueVisible(): boolean | null;`
- **getstate_x**: `function getState_X(): number | null;`
- **getstate_y**: `function getState_Y(): number | null;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<ISCH_PrimitiveAttribute>;`
- **setstate_alignmode**: `function setState_AlignMode(alignMode: ESCH_PrimitiveTextAlignMode | null): ISCH_PrimitiveAttribute;`
- **setstate_bold**: `function setState_Bold(bold: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_color**: `function setState_Color(color: string | null): ISCH_PrimitiveAttribute;`
- **setstate_fillcolor**: `function setState_FillColor(fillColor: string | null): ISCH_PrimitiveAttribute;`
- **setstate_fontname**: `function setState_FontName(fontName: string | null): ISCH_PrimitiveAttribute;`
- **setstate_fontsize**: `function setState_FontSize(fontSize: number | null): ISCH_PrimitiveAttribute;`
- **setstate_italic**: `function setState_Italic(italic: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_key**: `function setState_Key(key: string): ISCH_PrimitiveAttribute;`
- **setstate_keyvisible**: `function setState_KeyVisible(keyVisible: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_rotation**: `function setState_Rotation(rotation: number | null): ISCH_PrimitiveAttribute;`
- **setstate_underline**: `function setState_UnderLine(underLine: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_value**: `function setState_Value(value: string): ISCH_PrimitiveAttribute;`
- **setstate_valuevisible**: `function setState_ValueVisible(valueVisible: boolean | null): ISCH_PrimitiveAttribute;`
- **setstate_x**: `function setState_X(x: number | null): ISCH_PrimitiveAttribute;`
- **setstate_y**: `function setState_Y(y: number | null): ISCH_PrimitiveAttribute;`
- **toasync**: `function toAsync(): ISCH_PrimitiveAttribute;`
- **tosync**: `function toSync(): ISCH_PrimitiveAttribute;`

---

## ISCH_PrimitiveBus

Bus primitive

```typescript
class ISCH_PrimitiveBus implements ISCH_Primitive
```

- **done**: `function done(): Promise<ISCH_PrimitiveBus>;`
- **getstate_busname**: `function getState_BusName(): string;`
- **getstate_color**: `function getState_Color(): string | null;`
- **getstate_line**: `function getState_Line(): Array<number> | Array<Array<number>>;`
- **getstate_linetype**: `function getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `function getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): ESCH_PrimitiveType;`
- **isasync**: `function isAsync(): boolean;`
- **setstate_busname**: `function setState_BusName(busName: string): ISCH_PrimitiveBus;`
- **setstate_color**: `function setState_Color(color: string | null): ISCH_PrimitiveBus;`
- **setstate_line**: `function setState_Line(line: Array<number> | Array<Array<number>>): ISCH_PrimitiveBus;`
- **setstate_linetype**: `function setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveBus;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveBus;`
- **toasync**: `function toAsync(): ISCH_PrimitiveBus;`
- **tosync**: `function toSync(): ISCH_PrimitiveBus;`

---

## ISCH_PrimitiveCbbSymbolComponent

Reuse block symbol primitive

```typescript
class ISCH_PrimitiveCbbSymbolComponent extends ISCH_PrimitiveComponent
```

- **done**: `function done(): Promise<ISCH_PrimitiveCbbSymbolComponent>;`
- **getstate_cbb**: `function getState_Cbb(): { libraryUuid: string; uuid: string };`
- **getstate_cbbsymbol**: `function getState_CbbSymbol(): { 	libraryUuid: string; 	cbbUuid: string; 	uuid?: string; 	name?: string; };`
- **reset**: `function reset(): Promise<ISCH_PrimitiveCbbSymbolComponent>;`

---

## ISCH_PrimitiveCircle

Circle primitive

```typescript
class ISCH_PrimitiveCircle implements ISCH_Primitive
```

- **done**: `function done(): Promise<ISCH_PrimitiveCircle>;`
- **getstate_centerx**: `function getState_CenterX(): number;`
- **getstate_centery**: `function getState_CenterY(): number;`
- **getstate_color**: `function getState_Color(): string | null;`
- **getstate_fillcolor**: `function getState_FillColor(): string | null;`
- **getstate_fillstyle**: `function getState_FillStyle(): ESCH_PrimitiveFillStyle | null;`
- **getstate_linetype**: `function getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `function getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_radius**: `function getState_Radius(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<ISCH_PrimitiveCircle>;`
- **setstate_centerx**: `function setState_CenterX(centerX: number): ISCH_PrimitiveCircle;`
- **setstate_centery**: `function setState_CenterY(centerY: number): ISCH_PrimitiveCircle;`
- **setstate_color**: `function setState_Color(color: string | null): ISCH_PrimitiveCircle;`
- **setstate_fillcolor**: `function setState_FillColor(fillColor: string | null): ISCH_PrimitiveCircle;`
- **setstate_fillstyle**: `function setState_FillStyle(fillStyle: ESCH_PrimitiveFillStyle | null): ISCH_PrimitiveCircle;`
- **setstate_linetype**: `function setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveCircle;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveCircle;`
- **setstate_radius**: `function setState_Radius(radius: number): ISCH_PrimitiveCircle;`
- **toasync**: `function toAsync(): ISCH_PrimitiveCircle;`
- **tosync**: `function toSync(): ISCH_PrimitiveCircle;`

---

## ISCH_PrimitiveComponent

Device primitive

```typescript
class ISCH_PrimitiveComponent implements ISCH_Primitive
```

- **async**: `function async: boolean;`
- **designator**: `function designator?: string;`
- **done**: `function done(): Promise<ISCH_PrimitiveComponent>;`
- **getallpins**: `function getAllPins(): Promise<Array<ISCH_PrimitiveComponentPin> | undefined>;`
- **getstate_addintobom**: `function getState_AddIntoBom(): boolean | undefined;`
- **getstate_addintopcb**: `function getState_AddIntoPcb(): boolean | undefined;`
- **getstate_component**: `function getState_Component(): { libraryUuid: string; uuid: string; name?: string } | undefined;`
- **getstate_componenttype**: `function getState_ComponentType(): ESCH_PrimitiveComponentType;`
- **getstate_designator**: `function getState_Designator(): string | undefined;`
- **getstate_footprint**: `function getState_Footprint(): { libraryUuid: string; uuid: string; name?: string } | undefined;`
- **getstate_manufacturer**: `function getState_Manufacturer(): string | undefined;`
- **getstate_manufacturerid**: `function getState_ManufacturerId(): string | undefined;`
- **getstate_mirror**: `function getState_Mirror(): boolean;`
- **getstate_name**: `function getState_Name(): string | undefined;`
- **getstate_net**: `function getState_Net(): string | undefined;`
- **getstate_otherproperty**: `function getState_OtherProperty(): Record<string, string | number | boolean> | undefined;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `function getState_Rotation(): number;`
- **getstate_subpartname**: `function getState_SubPartName(): string | undefined;`
- **getstate_supplier**: `function getState_Supplier(): string | undefined;`
- **getstate_supplierid**: `function getState_SupplierId(): string | undefined;`
- **getstate_symbol**: `function getState_Symbol(): { libraryUuid: string; uuid: string; name?: string } | undefined;`
- **getstate_uniqueid**: `function getState_UniqueId(): string | undefined;`
- **getstate_x**: `function getState_X(): number;`
- **getstate_y**: `function getState_Y(): number;`
- **isasync**: `function isAsync(): boolean;`
- **mirror**: `function mirror: boolean;`
- **name**: `function name?: string;`
- **otherproperty**: `function otherProperty?: Record<string, string | number | boolean>;`
- **primitiveid**: `function primitiveId?: string;`
- **reset**: `function reset(): Promise<ISCH_PrimitiveComponent>;`
- **rotation**: `function rotation: number;`
- **setstate_addintobom**: `function setState_AddIntoBom(addIntoBom: boolean | undefined): ISCH_PrimitiveComponent;`
- **setstate_addintopcb**: `function setState_AddIntoPcb(addIntoPcb: boolean | undefined): ISCH_PrimitiveComponent;`
- **setstate_designator**: `function setState_Designator(designator: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_manufacturer**: `function setState_Manufacturer(manufacturer: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_manufacturerid**: `function setState_ManufacturerId(manufacturerId: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_mirror**: `function setState_Mirror(mirror: boolean): ISCH_PrimitiveComponent;`
- **setstate_name**: `function setState_Name(name: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_net**: `function setState_Net(net: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_otherproperty**: `function setState_OtherProperty( 	otherProperty: Record<string, string | number | boolean>, ): ISCH_PrimitiveComponent;`
- **setstate_rotation**: `function setState_Rotation(rotation: number): ISCH_PrimitiveComponent;`
- **setstate_supplier**: `function setState_Supplier(supplier: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_supplierid**: `function setState_SupplierId(supplierId: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_uniqueid**: `function setState_UniqueId(uniqueId: string | undefined): ISCH_PrimitiveComponent;`
- **setstate_x**: `function setState_X(x: number): ISCH_PrimitiveComponent;`
- **setstate_y**: `function setState_Y(y: number): ISCH_PrimitiveComponent;`
- **toasync**: `function toAsync(): ISCH_PrimitiveComponent;`
- **tosync**: `function toSync(): ISCH_PrimitiveComponent;`
- **x**: `function x: number;`
- **y**: `function y: number;`

---

## ISCH_PrimitiveComponentPin

Device pin primitive

```typescript
class ISCH_PrimitiveComponentPin extends ISCH_PrimitivePin
```

- **done**: `function done(): Promise<ISCH_PrimitiveComponentPin>;`
- **primitivetype**: `function readonly primitiveType: ESCH_PrimitiveType.COMPONENT_PIN;`

---

## ISCH_PrimitiveObject

Binary embedded object primitive

```typescript
class ISCH_PrimitiveObject implements ISCH_Primitive
```

- **done**: `function done(): Promise<ISCH_PrimitiveObject>;`
- **getstate_content**: `function getState_Content(): File | string;`
- **getstate_filename**: `function getState_FileName(): string;`
- **getstate_height**: `function getState_Height(): number;`
- **getstate_mirror**: `function getState_Mirror(): boolean;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `function getState_Rotation(): number;`
- **getstate_startx**: `function getState_StartX(): number;`
- **getstate_starty**: `function getState_StartY(): number;`
- **getstate_width**: `function getState_Width(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<ISCH_PrimitiveObject>;`
- **setstate_content**: `function setState_Content(content: File | string): ISCH_PrimitiveObject;`
- **setstate_filename**: `function setState_FileName(fileName: string): ISCH_PrimitiveObject;`
- **setstate_height**: `function setState_Height(height: number): ISCH_PrimitiveObject;`
- **setstate_mirror**: `function setState_Mirror(mirror: boolean): ISCH_PrimitiveObject;`
- **setstate_rotation**: `function setState_Rotation(rotation: number): ISCH_PrimitiveObject;`
- **setstate_startx**: `function setState_StartX(startX: number): ISCH_PrimitiveObject;`
- **setstate_starty**: `function setState_StartY(startY: number): ISCH_PrimitiveObject;`
- **setstate_width**: `function setState_Width(width: number): ISCH_PrimitiveObject;`
- **toasync**: `function toAsync(): ISCH_PrimitiveObject;`
- **tosync**: `function toSync(): ISCH_PrimitiveObject;`

---

## ISCH_PrimitivePin

Pin primitive

```typescript
class ISCH_PrimitivePin implements ISCH_Primitive
```

- **async**: `function async: boolean;`
- **done**: `function done(): Promise<ISCH_PrimitivePin>;`
- **getstate_noconnected**: `function getState_NoConnected(): boolean | undefined;`
- **getstate_otherproperty**: `function getState_OtherProperty(): Record<string, string | number | boolean> | undefined;`
- **getstate_pincolor**: `function getState_PinColor(): string | null;`
- **getstate_pinlength**: `function getState_PinLength(): number;`
- **getstate_pinname**: `function getState_PinName(): string;`
- **getstate_pinnumber**: `function getState_PinNumber(): string;`
- **getstate_pinshape**: `function getState_PinShape(): ESCH_PrimitivePinShape;`
- **getstate_pintype**: `function getState_pinType(): ESCH_PrimitivePinType;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `function getState_Rotation(): number;`
- **getstate_x**: `function getState_X(): number;`
- **getstate_y**: `function getState_Y(): number;`
- **isasync**: `function isAsync(): boolean;`
- **noconnected**: `function noConnected?: boolean;`
- **otherproperty**: `function otherProperty?: Record<string, string | number | boolean>;`
- **pincolor**: `function pinColor: string | null;`
- **pinlength**: `function pinLength: number;`
- **pinname**: `function pinName: string;`
- **pinnumber**: `function pinNumber: string;`
- **pinshape**: `function pinShape: ESCH_PrimitivePinShape;`
- **pintype**: `function pinType: ESCH_PrimitivePinType;`
- **primitiveid**: `function primitiveId?: string;`
- **primitivetype**: `function readonly primitiveType: ESCH_PrimitiveType;`
- **reset**: `function reset(): Promise<ISCH_PrimitivePin>;`
- **rotation**: `function rotation: number;`
- **setstate_noconnected**: `function setState_NoConnected(noConnected: boolean): ISCH_PrimitivePin;`
- **setstate_otherproperty**: `function setState_OtherProperty( 	otherProperty: Record<string, string | number | boolean>, ): ISCH_PrimitivePin;`
- **setstate_pincolor**: `function setState_PinColor(pinColor: string | null): ISCH_PrimitivePin;`
- **setstate_pinlength**: `function setState_PinLength(pinLength: number): ISCH_PrimitivePin;`
- **setstate_pinname**: `function setState_PinName(pinName: string): ISCH_PrimitivePin;`
- **setstate_pinnumber**: `function setState_PinNumber(pinNumber: string): ISCH_PrimitivePin;`
- **setstate_pinshape**: `function setState_PinShape(pinShape: ESCH_PrimitivePinShape): ISCH_PrimitivePin;`
- **setstate_pintype**: `function setState_PinType(pinType: ESCH_PrimitivePinType): ISCH_PrimitivePin;`
- **setstate_rotation**: `function setState_Rotation(rotation: number): ISCH_PrimitivePin;`
- **setstate_x**: `function setState_X(x: number): ISCH_PrimitivePin;`
- **setstate_y**: `function setState_Y(y: number): ISCH_PrimitivePin;`
- **toasync**: `function toAsync(): ISCH_PrimitivePin;`
- **tosync**: `function toSync(): ISCH_PrimitivePin;`
- **x**: `function x: number;`
- **y**: `function y: number;`

---

## ISCH_PrimitivePolygon

Polygon (polyline) primitive

```typescript
class ISCH_PrimitivePolygon implements ISCH_Primitive
```

- **done**: `function done(): Promise<ISCH_PrimitivePolygon>;`
- **getstate_color**: `function getState_Color(): string | null;`
- **getstate_fillcolor**: `function getState_FillColor(): string | null;`
- **getstate_line**: `function getState_Line(): Array<number>;`
- **getstate_linetype**: `function getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `function getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): ESCH_PrimitiveType;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<ISCH_PrimitivePolygon>;`
- **setstate_color**: `function setState_Color(color: string | null): ISCH_PrimitivePolygon;`
- **setstate_fillcolor**: `function setState_FillColor(fillColor: string | null): ISCH_PrimitivePolygon;`
- **setstate_line**: `function setState_Line(line: Array<number>): ISCH_PrimitivePolygon;`
- **setstate_linetype**: `function setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitivePolygon;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number | null): ISCH_PrimitivePolygon;`
- **toasync**: `function toAsync(): ISCH_PrimitivePolygon;`
- **tosync**: `function toSync(): ISCH_PrimitivePolygon;`

---

## ISCH_PrimitiveRectangle

Rectangle primitive

```typescript
class ISCH_PrimitiveRectangle implements ISCH_Primitive
```

- **done**: `function done(): Promise<ISCH_PrimitiveRectangle>;`
- **getstate_color**: `function getState_Color(): string | null;`
- **getstate_cornerradius**: `function getState_CornerRadius(): number;`
- **getstate_fillcolor**: `function getState_FillColor(): string | null;`
- **getstate_fillstyle**: `function getState_FillStyle(): ESCH_PrimitiveFillStyle | null;`
- **getstate_height**: `function getState_Height(): number;`
- **getstate_linetype**: `function getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `function getState_LineWidth(): number | null;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `function getState_Rotation(): number;`
- **getstate_topleftx**: `function getState_TopLeftX(): number;`
- **getstate_toplefty**: `function getState_TopLeftY(): number;`
- **getstate_width**: `function getState_Width(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<ISCH_PrimitiveRectangle>;`
- **setstate_color**: `function setState_Color(color: string | null): ISCH_PrimitiveRectangle;`
- **setstate_cornerradius**: `function setState_CornerRadius(cornerRadius: number): ISCH_PrimitiveRectangle;`
- **setstate_fillcolor**: `function setState_FillColor(fillColor: string | null): ISCH_PrimitiveRectangle;`
- **setstate_fillstyle**: `function setState_FillStyle(fillStyle: ESCH_PrimitiveFillStyle | null): ISCH_PrimitiveRectangle;`
- **setstate_height**: `function setState_Height(height: number): ISCH_PrimitiveRectangle;`
- **setstate_linetype**: `function setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveRectangle;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveRectangle;`
- **setstate_rotation**: `function setState_Rotation(rotation: number): ISCH_PrimitiveRectangle;`
- **setstate_topleftx**: `function setState_TopLeftX(topLeftX: number): ISCH_PrimitiveRectangle;`
- **setstate_toplefty**: `function setState_TopLeftY(topLeftY: number): ISCH_PrimitiveRectangle;`
- **setstate_width**: `function setState_Width(width: number): ISCH_PrimitiveRectangle;`
- **toasync**: `function toAsync(): ISCH_PrimitiveRectangle;`
- **tosync**: `function toSync(): ISCH_PrimitiveRectangle;`

---

## ISCH_PrimitiveText

Text primitive

```typescript
class ISCH_PrimitiveText implements ISCH_Primitive
```

- **done**: `function done(): Promise<ISCH_PrimitiveText>;`
- **getstate_alignmode**: `function getState_AlignMode(): ESCH_PrimitiveTextAlignMode;`
- **getstate_bold**: `function getState_Bold(): boolean;`
- **getstate_content**: `function getState_Content(): string;`
- **getstate_fontname**: `function getState_FontName(): string | null;`
- **getstate_fontsize**: `function getState_FontSize(): number | null;`
- **getstate_italic**: `function getState_Italic(): boolean;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): ESCH_PrimitiveType;`
- **getstate_rotation**: `function getState_Rotation(): number;`
- **getstate_textcolor**: `function getState_TextColor(): string | null;`
- **getstate_underline**: `function getState_UnderLine(): boolean;`
- **getstate_x**: `function getState_X(): number;`
- **getstate_y**: `function getState_Y(): number;`
- **isasync**: `function isAsync(): boolean;`
- **reset**: `function reset(): Promise<ISCH_PrimitiveText>;`
- **setstate_alignmode**: `function setState_AlignMode(alignMode: ESCH_PrimitiveTextAlignMode): ISCH_PrimitiveText;`
- **setstate_bold**: `function setState_Bold(bold: boolean): ISCH_PrimitiveText;`
- **setstate_content**: `function setState_Content(content: string): ISCH_PrimitiveText;`
- **setstate_fontname**: `function setState_FontName(fontName: string | null): ISCH_PrimitiveText;`
- **setstate_fontsize**: `function setState_FontSize(fontSize: number | null): ISCH_PrimitiveText;`
- **setstate_italic**: `function setState_Italic(italic: boolean): ISCH_PrimitiveText;`
- **setstate_rotation**: `function setState_Rotation(rotation: number): ISCH_PrimitiveText;`
- **setstate_textcolor**: `function setState_TextColor(textColor: string | null): ISCH_PrimitiveText;`
- **setstate_underline**: `function setState_UnderLine(underLine: boolean): ISCH_PrimitiveText;`
- **setstate_x**: `function setState_X(x: number): ISCH_PrimitiveText;`
- **setstate_y**: `function setState_Y(y: number): ISCH_PrimitiveText;`
- **toasync**: `function toAsync(): ISCH_PrimitiveText;`
- **tosync**: `function toSync(): ISCH_PrimitiveText;`

---

## ISCH_PrimitiveWire

Wire primitive

```typescript
class ISCH_PrimitiveWire implements ISCH_Primitive
```

- **done**: `function done(): Promise<ISCH_PrimitiveWire>;`
- **getstate_color**: `function getState_Color(): string | null;`
- **getstate_line**: `function getState_Line(): Array<number> | Array<Array<number>>;`
- **getstate_linetype**: `function getState_LineType(): ESCH_PrimitiveLineType | null;`
- **getstate_linewidth**: `function getState_LineWidth(): number | null;`
- **getstate_net**: `function getState_Net(): string;`
- **getstate_primitiveid**: `function getState_PrimitiveId(): string;`
- **getstate_primitivetype**: `function getState_PrimitiveType(): ESCH_PrimitiveType;`
- **isasync**: `function isAsync(): boolean;`
- **setstate_color**: `function setState_Color(color: string | null): ISCH_PrimitiveWire;`
- **setstate_line**: `function setState_Line(line: Array<number> | Array<Array<number>>): ISCH_PrimitiveWire;`
- **setstate_linetype**: `function setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveWire;`
- **setstate_linewidth**: `function setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveWire;`
- **setstate_net**: `function setState_Net(net: string): ISCH_PrimitiveWire;`
- **toasync**: `function toAsync(): ISCH_PrimitiveWire;`
- **tosync**: `function toSync(): ISCH_PrimitiveWire;`

---

## LIB_3DModel

Comprehensive library / 3D model class

```typescript
class LIB_3DModel
```

- **copy**: `function copy( 	modelUuid: string, 	libraryUuid: string, 	targetLibraryUuid: string, 	targetClassification?: ILIB_ClassificationIndex | Array<string>, 	newModelName?: string, ): Promise<string | undefined>;`
- **create**: `function create( 	libraryUuid: string, 	modelFile: Blob, 	classification?: ILIB_ClassificationIndex | Array<string>, 	unit?: 		| ESYS_Unit.MILLIMETER 		| ESYS_Unit.CENTIMETER 		| ESYS_Unit.METER 		| ESYS_Unit.MIL 		| ESYS_Unit.INCH, ): Promise<Array<string> | undefined>;`
- **delete**: `function delete(modelUuid: string, libraryUuid: string): Promise<boolean | undefined>;`
- **get**: `function get(modelUuid: string, libraryUuid?: string): Promise<ILIB_3DModelItem | undefined>;`
- **modify**: `function modify( 	modelUuid: string, 	libraryUuid: string, 	modelName?: string, 	classification?: ILIB_ClassificationIndex | Array<string> | null, 	description?: string | null, ): Promise<boolean>;`
- **search**: `function search( 	key: string, 	libraryUuid?: string, 	classification?: ILIB_ClassificationIndex | Array<string>, 	itemsOfPage?: number, 	page?: number, ): Promise<Array<ILIB_3DModelSearchItem>>;`

---

## LIB_Cbb

Comprehensive library / reuse block class

```typescript
class LIB_Cbb
```

- **copy**: `function copy( 	cbbUuid: string, 	libraryUuid: string, 	targetLibraryUuid: string, 	targetClassification?: ILIB_ClassificationIndex | Array<string>, 	newCbbName?: string, ): Promise<string | undefined>;`
- **create**: `function create( 	libraryUuid: string, 	cbbName: string, 	classification?: ILIB_ClassificationIndex | Array<string>, 	description?: string, ): Promise<string | undefined>;`
- **delete**: `function delete(cbbUuid: string, libraryUuid: string): Promise<boolean | undefined>;`
- **get**: `function get(cbbUuid: string, libraryUuid?: string): Promise<ILIB_CbbItem | undefined>;`
- **modify**: `function modify( 	cbbUuid: string, 	libraryUuid: string, 	cbbName?: string, 	classification?: ILIB_ClassificationIndex | Array<string> | null, 	description?: string | null, ): Promise<boolean>;`
- **openprojectineditor**: `function openProjectInEditor(cbbUuid: string, libraryUuid: string): Promise<boolean>;`
- **opensymbolineditor**: `function openSymbolInEditor( 	cbbUuid: string, 	libraryUuid: string, 	splitScreenId?: string, ): Promise<string | undefined>;`
- **search**: `function search( 	key: string, 	libraryUuid?: string, 	classification?: ILIB_ClassificationIndex | Array<string>, 	itemsOfPage?: number, 	page?: number, ): Promise<Array<ILIB_CbbSearchItem>>;`

---

## LIB_Classification

Comprehensive library / library classification index class

```typescript
class LIB_Classification
```

- **createprimary**: `function createPrimary( 	libraryUuid: string, 	libraryType: ELIB_LibraryType, 	primaryClassificationName: string, ): Promise<ILIB_ClassificationIndex | undefined>;`
- **createsecondary**: `function createSecondary( 	libraryUuid: string, 	libraryType: ELIB_LibraryType, 	primaryClassificationUuid: string, 	secondaryClassificationName: string, ): Promise<ILIB_ClassificationIndex | undefined>;`
- **deletebyindex**: `function deleteByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<boolean>;`
- **deletebyuuid**: `function deleteByUuid(libraryUuid: string, classificationUuid: string): Promise<boolean>;`
- **getallclassificationtree**: `function getAllClassificationTree( 	libraryUuid: string, 	libraryType: ELIB_LibraryType, ): Promise< 	Array<{ 		name: string; 		uuid: string; 		children?: Array<{ name: string; uuid: string }> | undefined; 	}> >;`
- **getindexbyname**: `function getIndexByName( 	libraryUuid: string, 	libraryType: ELIB_LibraryType, 	primaryClassificationName: string, 	secondaryClassificationName?: string, ): Promise<ILIB_ClassificationIndex | undefined>;`
- **getnamebyindex**: `function getNameByIndex( 	classificationIndex: ILIB_ClassificationIndex, ): Promise< 	| { primaryClassificationName: string; secondaryClassificationName?: string | undefined } 	| undefined >;`
- **getnamebyuuid**: `function getNameByUuid( 	libraryUuid: string, 	libraryType: ELIB_LibraryType, 	primaryClassificationUuid: string, 	secondaryClassificationUuid?: string, ): Promise< 	| { primaryClassificationName: string; secondaryClassificationName?: string | undefined } 	| undefined >;`

---

## LIB_Device

Comprehensive library / device class

```typescript
class LIB_Device
```

- **copy**: `function copy( 	deviceUuid: string, 	libraryUuid: string, 	targetLibraryUuid: string, 	targetClassification?: ILIB_ClassificationIndex | Array<string>, 	newDeviceName?: string, ): Promise<string | undefined>;`
- **create**: *(签名过长，请查看详细文档)*
- **delete**: `function delete(deviceUuid: string, libraryUuid: string): Promise<boolean | undefined>;`
- **get**: `function get(deviceUuid: string, libraryUuid?: string): Promise<ILIB_DeviceItem | undefined>;`
- **getbylcscids**: `function getByLcscIds<T extends boolean>( 	lcscIds: string, 	libraryUuid?: string, 	allowMultiMatch?: T, ): Promise<T extends true ? ILIB_DeviceSearchItem | undefined : Array<ILIB_DeviceSearchItem>>;`
- **getbylcscids_1**: `function getByLcscIds( 	lcscIds: Array<string>, 	libraryUuid?: string, 	allowMultiMatch?: boolean, ): Promise<Array<ILIB_DeviceSearchItem>>;`
- **modify**: *(签名过长，请查看详细文档)*
- **search**: `function search( 	key: string, 	libraryUuid?: string, 	classification?: ILIB_ClassificationIndex | Array<string>, 	symbolType?: ELIB_SymbolType, 	itemsOfPage?: number, 	page?: number, ): Promise<Array<ILIB_DeviceSearchItem>>;`
- **searchbyproperties**: `function searchByProperties( 	properties: ILIB_DevicePropertiesForSearch, 	libraryUuid?: string, 	classification?: Array<string>, 	symbolType?: ELIB_SymbolType, 	itemsOfPage?: number, 	page?: number, ): Promise<Array<ILIB_DeviceSearchItem>>;`

---

## LIB_Footprint

Comprehensive library / footprint class

```typescript
class LIB_Footprint
```

- **copy**: `function copy( 	footprintUuid: string, 	libraryUuid: string, 	targetLibraryUuid: string, 	targetClassification?: ILIB_ClassificationIndex | Array<string>, 	newFootprintName?: string, ): Promise<string | undefined>;`
- **create**: `function create( 	libraryUuid: string, 	footprintName: string, 	classification?: ILIB_ClassificationIndex | Array<string>, 	description?: string, 	otherProperty?: Record<string, boolean | number | string | undefined>, 	model3D?: { name: string; uuid: string; libraryUuid: string }, ): Promise<string | undefined>;`
- **delete**: `function delete(footprintUuid: string, libraryUuid: string): Promise<boolean | undefined>;`
- **get**: `function get(footprintUuid: string, libraryUuid?: string): Promise<ILIB_FootprintItem | undefined>;`
- **getdocumentsource**: `function getDocumentSource( 	footprintUuid: string, 	libraryUuid?: string, ): Promise<string | undefined>;`
- **getrenderimage**: `function getRenderImage(source: { 	footprintUuid: string; 	libraryUuid: string; }): Promise<Blob | undefined>;`
- **modify**: `function modify( 	footprintUuid: string, 	libraryUuid: string, 	footprintName?: string, 	classification?: ILIB_ClassificationIndex | Array<string> | null, 	description?: string | null, 	otherProperty?: Record<string, boolean | number | string | undefined | null>, 	model3D?: { name: string; uuid: string; libraryUuid: string }, ): Promise<boolean>;`
- **openineditor**: `function openInEditor( 	footprintUuid: string, 	libraryUuid: string, 	splitScreenId?: string, ): Promise<string | undefined>;`
- **search**: `function search( 	key: string, 	libraryUuid?: string, 	classification?: ILIB_ClassificationIndex | Array<string>, 	itemsOfPage?: number, 	page?: number, ): Promise<Array<ILIB_FootprintSearchItem>>;`
- **searchbyproperties**: `function searchByProperties( 	properties: ILIB_FootprintPropertiesForSearch, 	libraryUuid?: string, ): Promise<Array<ILIB_FootprintSearchItem>>;`
- **updatedocumentsource**: `function updateDocumentSource( 	footprintUuid: string, 	libraryUuid: string, 	documentSource: string, ): Promise<boolean | undefined>;`

---

## LIB_LibrariesList

Comprehensive library / library list class

```typescript
class LIB_LibrariesList
```

- **getalllibrarieslist**: `function getAllLibrariesList(): Promise<Array<ILIB_LibraryInfo>>;`
- **getfavoritelibraryuuid**: `function getFavoriteLibraryUuid(): Promise<string | undefined>;`
- **getpersonallibraryuuid**: `function getPersonalLibraryUuid(): Promise<string | undefined>;`
- **getprojectlibraryuuid**: `function getProjectLibraryUuid(): Promise<string | undefined>;`
- **getsystemlibraryuuid**: `function getSystemLibraryUuid(): Promise<string | undefined>;`
- **registerextendlibrary**: `function registerExtendLibrary( 	title: string, 	libraryFunctions: { 		device?: ILIB_ExtendLibraryDeviceFunctions; 		symbol?: ILIB_ExtendLibrarySymbolFunctions; 		footprint?: ILIB_ExtendLibraryFootprintFunctions; 		cbb?: ILIB_ExtendLibraryCbbFunctions; 		model3d?: ILIB_ExtendLibrary3DModelFunctions; 	}, ): Promise<string | undefined>;`

---

## LIB_PanelLibrary

Comprehensive library / panel library class

```typescript
class LIB_PanelLibrary
```

- **copy**: `function copy( 	panelLibraryUuid: string, 	libraryUuid: string, 	targetLibraryUuid: string, 	targetClassification?: ILIB_ClassificationIndex | Array<string>, 	newPanelLibraryName?: string, ): Promise<string | undefined>;`
- **create**: `function create( 	libraryUuid: string, 	panelLibraryName: string, 	classification?: ILIB_ClassificationIndex | Array<string>, 	description?: string, ): Promise<string | undefined>;`
- **delete**: `function delete(panelLibraryUuid: string, libraryUuid: string): Promise<boolean | undefined>;`
- **get**: `function get( 	panelLibraryUuid: string, 	libraryUuid?: string, ): Promise<ILIB_PanelLibraryItem | undefined>;`
- **modify**: `function modify( 	panelLibraryUuid: string, 	libraryUuid: string, 	panelLibraryName?: string, 	classification?: ILIB_ClassificationIndex | Array<string> | null, 	description?: string | null, ): Promise<boolean>;`
- **openineditor**: `function openInEditor( 	panelLibraryUuid: string, 	libraryUuid: string, 	splitScreenId?: string, ): Promise<string | undefined>;`
- **search**: `function search( 	key: string, 	libraryUuid?: string, 	classification?: ILIB_ClassificationIndex | Array<string>, 	itemsOfPage?: number, 	page?: number, ): Promise<Array<ILIB_PanelLibrarySearchItem>>;`

---

## LIB_SelectControl

Comprehensive library / selection control class

```typescript
class LIB_SelectControl
```

- **getselectedlibraryrowinfo**: `function getSelectedLibraryRowInfo(): Promise<ILIB_LibraryItem | undefined>;`

---

## LIB_SimulationModel

Comprehensive library / simulation model class

```typescript
class LIB_SimulationModel
```

- **copy**: `function copy( 	simulationModelUuid: string, 	libraryUuid: string, 	targetLibraryUuid: string, 	targetClassification?: Array<string>, 	newSimulationModelName?: string, ): Promise<string | undefined>;`
- **create**: `function create( 	libraryUuid: string, 	model: { modelType: 'Ngspice' } & ( 		| { modelFile: Blob; modelName?: string; modelCategory?: string; modelPin?: string } 		| { modelData: string; modelName?: string; modelCategory?: string; modelPin?: string } 	), 	classification?: Array<string>, 	description?: string, ): Promise<string | undefined>;`
- **delete**: `function delete(simulationModelUuid: string, libraryUuid: string): Promise<boolean | undefined>;`
- **get**: `function get( 	simulationModelUuid: string, 	libraryUuid?: string, ): Promise<ILIB_SimulationModelItem | undefined>;`
- **modify**: `function modify( 	simulationModelUuid: string, 	libraryUuid: string, 	modelProps?: { modelName?: string; modelCategory?: string; modelPin?: string }, 	classification?: Array<string> | null, 	description?: string | null, ): Promise<boolean>;`
- **search**: `function search( 	key: string, 	libraryUuid?: string, 	classification?: Array<string>, 	simulationModelType?: ELIB_SimulationModelType, 	itemsOfPage?: number, 	page?: number, ): Promise<Array<ILIB_SimulationModelSearchItem>>;`

---

## LIB_Symbol

Comprehensive library / symbol class

```typescript
class LIB_Symbol
```

- **copy**: `function copy( 	symbolUuid: string, 	libraryUuid: string, 	targetLibraryUuid: string, 	targetClassification?: ILIB_ClassificationIndex | Array<string>, 	newSymbolName?: string, ): Promise<string | undefined>;`
- **create**: `function create( 	libraryUuid: string, 	symbolName: string, 	classification?: ILIB_ClassificationIndex | Array<string>, 	symbolType?: ELIB_SymbolType, 	description?: string, 	otherProperty?: Record<string, boolean | number | string | undefined>, ): Promise<string | undefined>;`
- **delete**: `function delete(symbolUuid: string, libraryUuid: string): Promise<boolean | undefined>;`
- **get**: `function get(symbolUuid: string, libraryUuid?: string): Promise<ILIB_SymbolItem | undefined>;`
- **getdocumentsource**: `function getDocumentSource(symbolUuid: string, libraryUuid?: string): Promise<string | undefined>;`
- **getrenderimage**: `function getRenderImage(source: { 	symbolUuid: string; 	libraryUuid: string; 	subPartName?: string; }): Promise<Blob | undefined>;`
- **modify**: `function modify( 	symbolUuid: string, 	libraryUuid: string, 	symbolName?: string, 	classification?: ILIB_ClassificationIndex | Array<string> | null, 	description?: string | null, 	otherProperty?: Record<string, boolean | number | string | undefined | null>, ): Promise<boolean>;`
- **openineditor**: `function openInEditor( 	symbolUuid: string, 	libraryUuid: string, 	splitScreenId?: string, ): Promise<string | undefined>;`
- **search**: `function search( 	key: string, 	libraryUuid?: string, 	classification?: ILIB_ClassificationIndex | Array<string>, 	symbolType?: ELIB_SymbolType, 	itemsOfPage?: number, 	page?: number, ): Promise<Array<ILIB_SymbolSearchItem>>;`
- **searchbyproperties**: `function searchByProperties( 	properties: ILIB_SymbolPropertiesForSearch, 	libraryUuid?: string, ): Promise<Array<ILIB_SymbolSearchItem>>;`
- **updatedocumentsource**: `function updateDocumentSource( 	symbolUuid: string, 	libraryUuid: string, 	documentSource: string, ): Promise<boolean | undefined>;`

---

## PCB_Document

PCB &amp; footprint / document operation class

```typescript
class PCB_Document
```

- **autolayout**: `function autoLayout(): Promise<IPCB_AutoLayoutResult>;`
- **autorouting**: `function autoRouting(props?: IPCB_AutoRoutingProps): Promise<IPCB_AutoRoutingResult>;`
- **clearrouting**: `function clearRouting(type?: 'all' | 'net' | 'connection'): Promise<boolean>;`
- **convertcanvasorigintodataorigin**: `function convertCanvasOriginToDataOrigin(x: number, y: number): Promise<{ x: number; y: number }>;`
- **convertdataorigintocanvasorigin**: `function convertDataOriginToCanvasOrigin(x: number, y: number): Promise<{ x: number; y: number }>;`
- **getcalculatingratlinestatus**: `function getCalculatingRatlineStatus(): Promise< 	EPCB_DocumentRatlineCalculatingActiveStatus | undefined >;`
- **getcanvasorigin**: `function getCanvasOrigin(): Promise<{ offsetX: number; offsetY: number }>;`
- **getcanvasupdatecalculationstatus**: `function getCanvasUpdateCalculationStatus(): Promise< 	EPCB_DocumentCanvasUpdateCalculationActiveStatus | undefined >;`
- **getcurrentfilterconfiguration**: `function getCurrentFilterConfiguration(): Promise<Record<string, any> | undefined>;`
- **getprimitiveatpoint**: `function getPrimitiveAtPoint(x: number, y: number): Promise<IPCB_Primitive | undefined>;`
- **getprimitivesinregion**: `function getPrimitivesInRegion( 	left: number, 	right: number, 	top: number, 	bottom: number, 	leftToRight?: boolean, ): Promise<Array<IPCB_Primitive>>;`
- **importautolayoutjsonfile**: `function importAutoLayoutJsonFile(autoLayoutFile: File): Promise<boolean>;`
- **importautoroutejsonfile**: `function importAutoRouteJsonFile(autoRouteFile: File): Promise<boolean>;`
- **importautoroutesesfile**: `function importAutoRouteSesFile(autoRouteFile: File): Promise<boolean>;`
- **importchanges**: `function importChanges(uuid?: string): Promise<boolean>;`
- **navigatetocoordinates**: `function navigateToCoordinates(x: number, y: number): Promise<boolean>;`
- **navigatetoregion**: `function navigateToRegion( 	left: number, 	right: number, 	top: number, 	bottom: number, ): Promise<boolean>;`
- **save**: `function save(): Promise<boolean>;`
- **setcanvasorigin**: `function setCanvasOrigin(offsetX: number, offsetY: number): Promise<boolean>;`
- **startcalculatingratline**: `function startCalculatingRatline(): Promise<boolean>;`
- **startcanvasupdatecalculation**: `function startCanvasUpdateCalculation(): Promise<boolean>;`
- **stopcalculatingratline**: `function stopCalculatingRatline(): Promise<boolean>;`
- **stopcanvasupdatecalculation**: `function stopCanvasUpdateCalculation(): Promise<boolean>;`
- **triggercanvasupdatecalculation**: `function triggerCanvasUpdateCalculation(): Promise<boolean>;`
- **zoomtoboardoutline**: `function zoomToBoardOutline(): Promise<boolean>;`

---

## PCB_Drc

PCB &amp; footprint / design rule check (DRC) class

```typescript
class PCB_Drc
```

- **addnettoequallengthnetgroup**: `function addNetToEqualLengthNetGroup( 	equalLengthNetGroupName: string, 	net: string | Array<string>, ): Promise<boolean>;`
- **addnettonetclass**: `function addNetToNetClass(netClassName: string, net: string | Array<string>): Promise<boolean>;`
- **addpadpairtopadpairgroup**: `function addPadPairToPadPairGroup( 	padPairGroupName: string, 	padPair: [string, string] | Array<[string, string]>, ): Promise<boolean>;`
- **check**: `function check( 	strict: boolean, 	userInterface: boolean, 	includeVerboseError: false, ): Promise<boolean>;`
- **check_1**: `function check( 	strict: boolean, 	userInterface: boolean, 	includeVerboseError: true, ): Promise<Array<any>>;`
- **createdifferentialpair**: `function createDifferentialPair( 	differentialPairName: string, 	positiveNet: string, 	negativeNet: string, ): Promise<boolean>;`
- **createequallengthnetgroup**: `function createEqualLengthNetGroup( 	equalLengthNetGroupName: string, 	nets: Array<string>, 	color: IPCB_EqualLengthNetGroupItem['color'], ): Promise<boolean>;`
- **createnetclass**: `function createNetClass( 	netClassName: string, 	nets: Array<string>, 	color: IPCB_EqualLengthNetGroupItem['color'], ): Promise<boolean>;`
- **createpadpairgroup**: `function createPadPairGroup( 	padPairGroupName: string, 	padPairs: Array<[string, string]>, ): Promise<boolean>;`
- **deletedifferentialpair**: `function deleteDifferentialPair(differentialPairName: string): Promise<boolean>;`
- **deleteequallengthnetgroup**: `function deleteEqualLengthNetGroup(equalLengthNetGroupName: string): Promise<boolean>;`
- **deletenetclass**: `function deleteNetClass(netClassName: string): Promise<boolean>;`
- **deletepadpairgroup**: `function deletePadPairGroup(padPairGroupName: string): Promise<boolean>;`
- **deleteruleconfiguration**: `function deleteRuleConfiguration(configurationName: string): Promise<boolean>;`
- **getalldifferentialpairs**: `function getAllDifferentialPairs(): Promise<Array<IPCB_DifferentialPairItem> | Record<string, any>>;`
- **getallequallengthnetgroups**: `function getAllEqualLengthNetGroups(): Promise<Array<IPCB_EqualLengthNetGroupItem>>;`
- **getallnetclasses**: `function getAllNetClasses(): Promise<Array<IPCB_NetClassItem>>;`
- **getallpadpairgroups**: `function getAllPadPairGroups(): Promise<Array<IPCB_PadPairGroupItem>>;`
- **getallruleconfigurations**: `function getAllRuleConfigurations(includeSystem?: boolean): Promise<Array<Record<string, any>>>;`
- **getcurrentruleconfiguration**: `function getCurrentRuleConfiguration(): Promise<Record<string, any> | undefined>;`
- **getcurrentruleconfigurationname**: `function getCurrentRuleConfigurationName(): Promise<string | undefined>;`
- **getdefaultruleconfigurationname**: `function getDefaultRuleConfigurationName(): Promise<string | undefined>;`
- **getnetbynetrules**: `function getNetByNetRules(): Promise<Record<string, any>>;`
- **getnetrules**: `function getNetRules(): Promise<Array<Record<string, any>>>;`
- **getpadpairgroupminwirelength**: `function getPadPairGroupMinWireLength( 	padPairGroupName: string, ): Promise<Array<IPCB_PadPairMinWireLengthItem>>;`
- **getrealtimedrcstatus**: `function getRealTimeDrcStatus(): Promise<boolean>;`
- **getregionrules**: `function getRegionRules(): Promise<Array<Record<string, any>>>;`
- **getruleconfiguration**: `function getRuleConfiguration(configurationName: string): Promise<Record<string, any> | undefined>;`
- **modifydifferentialpairname**: `function modifyDifferentialPairName( 	originalDifferentialPairName: string, 	differentialPairName: string, ): Promise<boolean>;`
- **modifydifferentialpairnegativenet**: `function modifyDifferentialPairNegativeNet( 	differentialPairName: string, 	negativeNet: string, ): Promise<boolean>;`
- **modifydifferentialpairpositivenet**: `function modifyDifferentialPairPositiveNet( 	differentialPairName: string, 	positiveNet: string, ): Promise<boolean>;`
- **modifyequallengthnetgroupname**: `function modifyEqualLengthNetGroupName( 	originalEqualLengthNetGroupName: string, 	equalLengthNetGroupName: string, ): Promise<boolean>;`
- **modifynetclassname**: `function modifyNetClassName(originalNetClassName: string, netClassName: string): Promise<boolean>;`
- **modifypadpairgroupname**: `function modifyPadPairGroupName( 	originalPadPairGroupName: string, 	padPairGroupName: string, ): Promise<boolean>;`
- **overwritecurrentruleconfiguration**: `function overwriteCurrentRuleConfiguration( 	ruleConfiguration: Record<string, any>, ): Promise<boolean>;`
- **overwritenetbynetrules**: `function overwriteNetByNetRules(netByNetRules: Record<string, any>): Promise<boolean>;`
- **overwritenetrules**: `function overwriteNetRules(netRules: Array<Record<string, any>>): Promise<boolean>;`
- **overwriteregionrules**: `function overwriteRegionRules(regionRules: Array<Record<string, any>>): Promise<boolean>;`
- **removenetfromequallengthnetgroup**: `function removeNetFromEqualLengthNetGroup( 	equalLengthNetGroupName: string, 	net: string | Array<string>, ): Promise<boolean>;`
- **removenetfromnetclass**: `function removeNetFromNetClass(netClassName: string, net: string | Array<string>): Promise<boolean>;`
- **removepadpairfrompadpairgroup**: `function removePadPairFromPadPairGroup( 	padPairGroupName: string, 	padPair: [string, string] | Array<[string, string]>, ): Promise<boolean>;`
- **renameruleconfiguration**: `function renameRuleConfiguration( 	originalConfigurationName: string, 	configurationName: string, ): Promise<boolean>;`
- **saveruleconfiguration**: `function saveRuleConfiguration( 	ruleConfiguration: Record<string, any>, 	configurationName: string, 	allowOverwrite?: boolean, ): Promise<boolean>;`
- **setasdefaultruleconfiguration**: `function setAsDefaultRuleConfiguration(configurationName: string): Promise<boolean>;`
- **startrealtimedrc**: `function startRealTimeDrc(): Promise<boolean>;`
- **stoprealtimedrc**: `function stopRealTimeDrc(): Promise<boolean>;`

---

## PCB_Event

PCB &amp; footprint / event class

```typescript
class PCB_Event
```

- **addcrossprobeselecteventlistener**: `function addCrossProbeSelectEventListener( 	id: string, 	callFn: (props: any) => void | Promise<void>, ): void;`
- **addimageeventlistener**: `function addImageEventListener( 	id: string, 	callFn: (message: { file?: File; source: 'toolbar' | 'paste' }) => void | Promise<void>, ): boolean;`
- **addmouseeventlistener**: `function addMouseEventListener( 	id: string, 	eventType: 'all' | EPCB_MouseEventType, 	callFn: ( 		eventType: EPCB_MouseEventType, 		props: [ 			{ 				primitiveId: string; 				primitiveType: EPCB_PrimitiveType; 				net?: string; 				designator?: string; 				parentComponentPrimitiveId?: string; 				parentComponentDesignator?: string; 			}, 		], 	) => void | Promise<void>, 	onlyOnce?: boolean, ): void;`
- **addneteventlistener**: `function addNetEventListener( 	id: string, 	eventType: 'all' | EPCB_NetEventType, 	callFn: (eventType: EPCB_NetEventType, props: [{ net: string }]) => void | Promise<void>, 	onlyOnce?: boolean, ): void;`
- **addprimitiveeventlistener**: `function addPrimitiveEventListener( 	id: string, 	eventType: 'all' | EPCB_PrimitiveEventType, 	callFn: ( 		eventType: EPCB_PrimitiveEventType, 		props: [ 			{ 				primitiveId: string; 				primitiveType: EPCB_PrimitiveType; 				net?: string; 				designator?: string; 				parentComponentPrimitiveId?: string; 				parentComponentDesignator?: string; 			}, 		], 	) => void | Promise<void>, 	onlyOnce?: boolean, ): void;`
- **addraytracerengine3dviewcamerachangeeventlistener**: `function addRayTracerEngine3DViewCameraChangeEventListener( 	id: string, 	callFn: (props: { 		position: { x: number; y: number; z: number }; 		rotation: { x: number; y: number; z: number }; 		focalLength: number; 	}) => void | Promise<void>, 	onlyOnce?: boolean, ): void;`
- **addraytracerengine3dviewclickmaterialeventlistener**: `function addRayTracerEngine3DViewClickMaterialEventListener( 	id: string, 	callFn: (props: { materialId: number; material: any }) => void | Promise<void>, 	onlyOnce?: boolean, ): void;`
- **addrealtimedrcresulteventlistener**: `function addRealTimeDrcResultEventListener( 	id: string, 	eventType: 'all', 	callFn: (eventType: undefined, props: [{ drcResult: any }]) => void | Promise<void>, ): void;`
- **iseventlisteneralreadyexist**: `function isEventListenerAlreadyExist(id: string): boolean;`
- **removeeventlistener**: `function removeEventListener(id: string): boolean;`

---

## PCB_ImageTool

PCB 图片工具类

```typescript
class PCB_ImageTool
```

- **processimage**: `function processImage( 	file: File, 	options?: { maxBytes?: number; acceptableBytes?: number }, ): Promise<{ 	file: File; 	dataURL: string; 	width: number; 	height: number; 	actualFormat: string; 	msg: string; }>;`
- **runinsertimagecommand**: `function runInsertImageCommand(): Promise<boolean>;`
- **startplacetruecolorpicture**: `function startPlaceTrueColorPicture(options: { 	imageBlob: Blob; 	width: number; 	height: number; 	unit?: 'mm' | 'mil'; 	fileName: string; }): Promise<boolean>;`
- **startplacevectorimage**: `function startPlaceVectorImage(options: { 	path: string; 	width: number; 	height: number; 	unit?: 'mm' | 'mil'; }): Promise<boolean>;`

---

## PCB_Layer

PCB &amp; footprint / layer operation class

```typescript
class PCB_Layer
```

- **addcustomlayer**: `function addCustomLayer(): Promise<TPCB_LayersOfCustom | undefined>;`
- **deletephysicalstackingconfiguration**: `function deletePhysicalStackingConfiguration( 	configurationName: string, 	physicalProps?: IPCB_SubstratePhysicalProperties, ): Promise<boolean>;`
- **getalllayers**: `function getAllLayers(): Promise<Array<IPCB_LayerItem>>;`
- **getallphysicalstackingconfigurations**: `function getAllPhysicalStackingConfigurations( 	physicalProps?: IPCB_SubstratePhysicalProperties, ): Promise<Array<IPCB_PhysicalStackingConfiguration>>;`
- **getcurrentlayer**: `function getCurrentLayer(): Promise<IPCB_LayerItem | undefined>;`
- **getcurrentphysicalstackingconfiguration**: `function getCurrentPhysicalStackingConfiguration(): Promise< 	IPCB_PhysicalStackingConfiguration | undefined >;`
- **getcurrentphysicalstackingconfigurationname**: `function getCurrentPhysicalStackingConfigurationName(): Promise<string | undefined>;`
- **getdefaultphysicalstackingconfigurationname**: `function getDefaultPhysicalStackingConfigurationName( 	physicalProps?: IPCB_SubstratePhysicalProperties, ): Promise<string | undefined>;`
- **getphysicalstackingconfiguration**: `function getPhysicalStackingConfiguration( 	configurationName: string, 	physicalProps?: IPCB_SubstratePhysicalProperties, ): Promise<IPCB_PhysicalStackingConfiguration | undefined>;`
- **locklayer**: `function lockLayer( 	layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, ): Promise<boolean>;`
- **modifylayer**: `function modifyLayer( 	layer: TPCB_LayersInTheSelectable, 	property: { 		name?: string; 		type?: TPCB_LayerTypesOfInnerLayer; 		color?: string; 		transparency?: number; 	}, ): Promise<boolean>;`
- **overwritecurrentphysicalstackingconfiguration**: `function overwriteCurrentPhysicalStackingConfiguration( 	physicalStackingConfiguration: IPCB_PhysicalStackingConfiguration, ): Promise<boolean>;`
- **removelayer**: `function removeLayer(layer: TPCB_LayersOfCustom): Promise<boolean>;`
- **renamephysicalstackingconfiguration**: `function renamePhysicalStackingConfiguration( 	originalConfigurationName: string, 	configurationName: string, 	physicalProps?: IPCB_SubstratePhysicalProperties, ): Promise<boolean>;`
- **savephysicalstackingconfiguration**: `function savePhysicalStackingConfiguration( 	physicalStackingConfiguration: IPCB_PhysicalStackingConfiguration, 	configurationName: string, 	physicalProps?: IPCB_SubstratePhysicalProperties, 	allowOverwrite?: boolean, ): Promise<boolean>;`
- **selectlayer**: `function selectLayer(layer: TPCB_LayersInTheSelectable): Promise<boolean>;`
- **setasdefaultphysicalstackingconfiguration**: `function setAsDefaultPhysicalStackingConfiguration( 	configurationName: string, 	physicalProps?: IPCB_SubstratePhysicalProperties, ): Promise<boolean>;`
- **setinactivelayerdisplaymode**: `function setInactiveLayerDisplayMode(displayMode?: EPCB_InactiveLayerDisplayMode): Promise<boolean>;`
- **setinactivelayertransparency**: `function setInactiveLayerTransparency(transparency: number): Promise<boolean>;`
- **setlayercolorconfiguration**: `function setLayerColorConfiguration( 	colorConfiguration: EPCB_LayerColorConfiguration, ): Promise<boolean>;`
- **setlayerinvisible**: `function setLayerInvisible( 	layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, 	setOtherLayerVisible?: boolean, ): Promise<boolean>;`
- **setlayervisible**: `function setLayerVisible( 	layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, 	setOtherLayerInvisible?: boolean, ): Promise<boolean>;`
- **setpcbtype**: `function setPcbType(pcbType: EPCB_PcbPlateType): Promise<boolean>;`
- **setthenumberofcopperlayers**: `function setTheNumberOfCopperLayers(numberOfLayers: TPCB_NumberOfCopperLayers): Promise<boolean>;`
- **unlocklayer**: `function unlockLayer( 	layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, ): Promise<boolean>;`

---

## PCB_ManufactureData

PCB &amp; footprint / manufacture data class

```typescript
class PCB_ManufactureData
```

- **deletebomtemplate**: `function deleteBomTemplate(template: string): Promise<boolean>;`
- **get3dfile**: `function get3DFile( 	fileName?: string, 	fileType?: 'step' | 'obj', 	element?: Array<'Component Model' | 'Via' | 'Silkscreen' | 'Wire In Signal Layer'>, 	modelMode?: 'Outfit' | 'Parts', 	autoGenerateModels?: boolean, ): Promise<File | undefined>;`
- **get3dshellfile**: `function get3DShellFile( 	fileName?: string, 	fileType?: 'stl' | 'step' | 'obj', ): Promise<File | undefined>;`
- **getaltiumdesignerfile**: `function getAltiumDesignerFile(fileName?: string): Promise<File | undefined>;`
- **getautolayoutjsonfile**: `function getAutoLayoutJsonFile(fileName?: string): Promise<File | undefined>;`
- **getautoroutejsonfile**: `function getAutoRouteJsonFile(fileName?: string): Promise<File | undefined>;`
- **getautoroutejsonfileforjrouter**: `function getAutoRouteJsonFileForJRouter(fileName?: string): Promise<File | undefined>;`
- **getbomfile**: `function getBomFile( 	fileName?: string, 	fileType?: 'xlsx' | 'csv', 	template?: string, 	filterOptions?: Array<{ property: string; includeValue: boolean | string }>, 	statistics?: Array<string>, 	property?: Array<string>, 	columns?: Array<IPCB_BomPropertiesTableColumns>, ): Promise<File | undefined>;`
- **getbomtemplatefile**: `function getBomTemplateFile(template: string): Promise<File | undefined>;`
- **getbomtemplates**: `function getBomTemplates(): Promise<Array<string>>;`
- **getdsnfile**: `function getDsnFile(fileName?: string): Promise<File | undefined>;`
- **getdxffile**: `function getDxfFile( 	fileName?: string, 	layers?: Array<{ layerId: EPCB_LayerId; mirror: boolean }>, 	objects?: Array<string>, ): Promise<File | undefined>;`
- **getflyingprobetestfile**: `function getFlyingProbeTestFile(fileName?: string): Promise<File | undefined>;`
- **getgerberfile**: *(签名过长，请查看详细文档)*
- **getidxfile**: `function getIdxFile(fileName?: string): Promise<File | undefined>;`
- **getipc2581cfile**: `function getIpc2581CFile( 	fileName?: string, 	fileType?: 'xml' | 'cvg' | '2581', 	unit?: ESYS_Unit.INCH | ESYS_Unit.MILLIMETER, 	oemNumber?: 'Device' | 'Manufacturer Part' | 'Supplier Part' | 'Comment', ): Promise<File | undefined>;`
- **getipcd356afile**: `function getIpcD356AFile(fileName?: string): Promise<File | undefined>;`
- **getmanufacturedata**: `function getManufactureData(): Promise<File | undefined>;`
- **getnetlistfile**: `function getNetlistFile( 	fileName?: string, 	netlistType?: ESYS_NetlistType, ): Promise<File | undefined>;`
- **getopendatabasedoubleplusfile**: `function getOpenDatabaseDoublePlusFile( 	fileName?: string, 	unit?: ESYS_Unit.INCH | ESYS_Unit.MILLIMETER, 	otherData?: { 		metallizedDrilledHoles?: boolean; 		nonMetallizedDrilledHoles?: boolean; 		drillTable?: boolean; 		flyingProbeTestFile?: boolean; 	}, 	layers?: Array<{ layerId: EPCB_LayerId; mirror: boolean }>, 	objects?: Array<{ objectName: string }>, ): Promise<File | undefined>;`
- **getpadsfile**: `function getPadsFile(fileName?: string): Promise<File | undefined>;`
- **getpcbinfofile**: `function getPcbInfoFile(fileName?: string): Promise<File | undefined>;`
- **getpdffile**: *(签名过长，请查看详细文档)*
- **getpickandplacefile**: `function getPickAndPlaceFile( 	fileName?: string, 	fileType?: 'xlsx' | 'csv', 	unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.MIL, ): Promise<File | undefined>;`
- **gettestpointfile**: `function getTestPointFile(fileName?: string, fileType?: 'xlsx' | 'csv'): Promise<File | undefined>;`
- **place3dshellorder**: `function place3DShellOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placecomponentsorder**: `function placeComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placepcborder**: `function placePcbOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placesmtcomponentsorder**: `function placeSmtComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **uploadbomtemplatefile**: `function uploadBomTemplateFile(templateFile: File, template?: string): Promise<string | undefined>;`

---

## PCB_MathPolygon

PCB &amp; footprint / polygon math class

```typescript
class PCB_MathPolygon
```

- **calculatebboxheight**: `function calculateBBoxHeight( 	complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>, ): number;`
- **calculateheight**: `function calculateHeight( 	complexPolygon: 		| TPCB_PolygonSourceArray 		| Array<TPCB_PolygonSourceArray> 		| IPCB_Polygon 		| IPCB_ComplexPolygon, ): number;`
- **calculatewidth**: `function calculateWidth( 	complexPolygon: 		| TPCB_PolygonSourceArray 		| Array<TPCB_PolygonSourceArray> 		| IPCB_Polygon 		| IPCB_ComplexPolygon, ): number;`
- **convertimagetocomplexpolygon**: `function convertImageToComplexPolygon( 	imageBlob: Blob, 	imageWidth: number, 	imageHeight: number, 	tolerance?: number, 	simplification?: number, 	smoothing?: number, 	despeckling?: number, 	whiteAsBackgroundColor?: boolean, 	inversion?: boolean, ): Promise<IPCB_ComplexPolygon | undefined>;`
- **createcomplexpolygon**: `function createComplexPolygon( 	complexPolygon: 		| TPCB_PolygonSourceArray 		| Array<TPCB_PolygonSourceArray> 		| IPCB_Polygon 		| Array<IPCB_Polygon>, ): IPCB_ComplexPolygon | undefined;`
- **createpolygon**: `function createPolygon(polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined;`
- **discretize**: `function discretize( 	polygon: IPCB_Polygon | TPCB_PolygonSourceArray, 	options?: IPCB_DiscretizeOptions, ): Promise<Array<IPCB_DiscretizedPoint> | null>;`
- **disposetrace**: `function disposeTrace(): Promise<void>;`
- **splitpolygon**: `function splitPolygon(...complexPolygons: Array<IPCB_ComplexPolygon>): Array<IPCB_Polygon>;`
- **traceimage**: `function traceImage(options: { 	imageBlob?: Blob; 	imageWidth?: number; 	imageHeight?: number; 	quality?: 'low' | 'high'; 	tolerance?: number; 	simplify?: number; 	smoothness?: number; 	despeckle?: number; 	whiteAsTransparent?: boolean; 	antiphase?: boolean; }): Promise< 	| { path: string; sourcePreviewUrl: string; previewUrl: string; width: number; height: number } 	| undefined >;`

---

## PCB_Net

PCB &amp; footprint / net class

```typescript
class PCB_Net
```

- **getallnetname**: `function getAllNetName(): Promise<Array<string>>;`
- **getallnets**: `function getAllNets(): Promise<Array<IPCB_NetInfo>>;`
- **getallnetsname**: `function getAllNetsName(): Promise<Array<string>>;`
- **getallprimitivesbynet**: `function getAllPrimitivesByNet( 	net: string, 	primitiveTypes?: Array<EPCB_PrimitiveType>, ): Promise<Array<IPCB_Primitive>>;`
- **getnet**: `function getNet(net: string): Promise<IPCB_NetInfo | undefined>;`
- **getnetcolor**: `function getNetColor(net: string): Promise<IPCB_NetInfo['color'] | undefined>;`
- **getnetlength**: `function getNetLength(net: string): Promise<number | undefined>;`
- **getnetlist**: `function getNetlist(type?: ESYS_NetlistType): Promise<string>;`
- **highlightnet**: `function highlightNet(net: string): Promise<boolean>;`
- **selectnet**: `function selectNet(net: string): Promise<boolean>;`
- **setnetcolor**: `function setNetColor(net: string, color: IPCB_NetInfo['color']): Promise<boolean>;`
- **setnetlist**: `function setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<boolean>;`
- **unhighlightallnets**: `function unhighlightAllNets(): Promise<boolean>;`
- **unhighlightnet**: `function unhighlightNet(net: string): Promise<boolean>;`
- **unselectallnets**: `function unselectAllNets(): Promise<boolean>;`
- **unselectnet**: `function unselectNet(net: string): Promise<boolean>;`

---

## PCB_Primitive

PCB &amp; footprint / primitive class

```typescript
class PCB_Primitive
```

- **getprimitiveboardline**: `function getPrimitiveBoardLine( 	primitiveId: string, 	layers?: Array<EPCB_LayerId>, ): Promise<IPCB_ComplexPolygon | undefined>;`
- **getprimitivesbbox**: `function getPrimitivesBBox( 	primitiveIds: Array<string | IPCB_Primitive>, ): Promise<{ minX: number; minY: number; maxX: number; maxY: number } | undefined>;`

---

## PCB_PrimitiveArc

PCB &amp; footprint / arc line primitive class

```typescript
class PCB_PrimitiveArc implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	net: string, 	layer: TPCB_LayersOfLine, 	startX: number, 	startY: number, 	endX: number, 	endY: number, 	arcAngle: number, 	lineWidth?: number, 	interactiveMode?: EPCB_PrimitiveArcInteractiveMode, 	primitiveLock?: boolean, ): Promise<IPCB_PrimitiveArc | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitiveArc | Array<string> | Array<IPCB_PrimitiveArc>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitiveArc | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveArc>>;`
- **getall**: `function getAll( 	net?: string, 	layer?: TPCB_LayersOfLine, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitiveArc>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	net?: string, 	layer?: TPCB_LayersOfLine, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitiveArc, 	property: { 		net?: string; 		layer?: TPCB_LayersOfLine; 		startX?: number; 		startY?: number; 		endX?: number; 		endY?: number; 		arcAngle?: number; 		lineWidth?: number; 		interactiveMode?: EPCB_PrimitiveArcInteractiveMode; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitiveArc | undefined>;`

---

## PCB_PrimitiveAttribute

PCB &amp; footprint / property primitive class

```typescript
class PCB_PrimitiveAttribute implements IPCB_PrimitiveAPI
```

- **delete**: `function delete(primitiveIds: string | IPCB_PrimitiveAttribute | Array<string> | Array<IPCB_PrimitiveAttribute>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitiveAttribute | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveAttribute>>;`
- **getall**: `function getAll( 	parentPrimitiveId?: string, 	layer?: TPCB_LayersOfImage, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitiveAttribute>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	parentPrimitiveId?: string, 	layer?: TPCB_LayersOfImage, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitiveAttribute, 	property: { 		layer?: TPCB_LayersOfImage; 		x?: number; 		y?: number; 		key?: string; 		value?: string; 		keyVisible?: boolean; 		valueVisible?: boolean; 		fontFamily?: string; 		fontSize?: number; 		lineWidth?: number; 		alignMode?: EPCB_PrimitiveStringAlignMode; 		rotation?: number; 		reverse?: boolean; 		expansion?: number; 		mirror?: boolean; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitiveAttribute | undefined>;`

---

## PCB_PrimitiveComponent

PCB &amp; footprint / device primitive class

```typescript
class PCB_PrimitiveComponent implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	component: 		| { libraryUuid: string; uuid: string } 		| ILIB_DeviceItem 		| ILIB_DeviceSearchItem 		| { libraryType: ELIB_LibraryType.FOOTPRINT; libraryUuid: string; uuid: string } 		| ILIB_FootprintItem 		| ILIB_FootprintSearchItem, 	layer: TPCB_LayersOfComponent, 	x: number, 	y: number, 	rotation?: number, 	primitiveLock?: boolean, ): Promise<IPCB_PrimitiveComponent | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitiveComponent | Array<string> | Array<IPCB_PrimitiveComponent>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitiveComponent | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveComponent>>;`
- **getall**: `function getAll( 	layer?: TPCB_LayersOfComponent, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitiveComponent>>;`
- **getallpinsbyprimitiveid**: `function getAllPinsByPrimitiveId( 	primitiveId: string, ): Promise<Array<IPCB_PrimitiveComponentPad> | undefined>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	layer?: TPCB_LayersOfComponent, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **getallpropertynames**: `function getAllPropertyNames(): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*
- **placecomponentwithmouse**: `function placeComponentWithMouse( 	component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem, ): Promise<boolean>;`
- **placefootprintwithmouse**: `function placeFootprintWithMouse( 	footprint: 		{ libraryUuid: string; uuid: string } | ILIB_FootprintItem | ILIB_FootprintSearchItem, 	properties?: Record<string, boolean | number | string | undefined>, ): Promise<boolean>;`

---

## PCB_PrimitiveDimension

PCB &amp; footprint / dimension primitive class

```typescript
class PCB_PrimitiveDimension implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	dimensionType: EPCB_PrimitiveDimensionType, 	coordinateSet: TPCB_PrimitiveDimensionCoordinateSet, 	layer?: TPCB_LayersOfDimension, 	unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL, 	lineWidth?: number, 	precision?: number, 	primitiveLock?: boolean, ): Promise<IPCB_PrimitiveDimension | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitiveDimension | Array<string> | Array<IPCB_PrimitiveDimension>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitiveDimension | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveDimension>>;`
- **getall**: `function getAll( 	layer?: TPCB_LayersOfDimension, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitiveDimension>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	layer?: TPCB_LayersOfDimension, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitiveDimension, 	property: { 		dimensionType?: EPCB_PrimitiveDimensionType; 		coordinateSet?: TPCB_PrimitiveDimensionCoordinateSet; 		layer?: TPCB_LayersOfDimension; 		unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL; 		lineWidth?: number; 		precision?: number; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitiveDimension | undefined>;`

---

## PCB_PrimitiveFill

PCB &amp; footprint / fill primitive class

```typescript
class PCB_PrimitiveFill implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	layer: TPCB_LayersOfFill, 	complexPolygon: IPCB_Polygon, 	net?: string, 	fillMode?: EPCB_PrimitiveFillMode, 	lineWidth?: number, 	primitiveLock?: boolean, ): Promise<IPCB_PrimitiveFill | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitiveFill | Array<string> | Array<IPCB_PrimitiveFill>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitiveFill | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveFill>>;`
- **getall**: `function getAll( 	layer?: TPCB_LayersOfFill, 	net?: string, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitiveFill>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	layer?: TPCB_LayersOfFill, 	net?: string, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitiveFill, 	property: { 		layer?: TPCB_LayersOfFill; 		complexPolygon?: IPCB_Polygon; 		net?: string; 		fillMode?: EPCB_PrimitiveFillMode; 		lineWidth?: number; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitiveFill | undefined>;`

---

## PCB_PrimitiveImage

PCB &amp; footprint / image primitive class

```typescript
class PCB_PrimitiveImage implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	x: number, 	y: number, 	complexPolygon: 		| TPCB_PolygonSourceArray 		| Array<TPCB_PolygonSourceArray> 		| IPCB_Polygon 		| IPCB_ComplexPolygon, 	layer: TPCB_LayersOfImage, 	width?: number, 	height?: number, 	rotation?: number, 	horizonMirror?: boolean, 	primitiveLock?: boolean, ): Promise<IPCB_PrimitiveImage | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitiveImage | Array<string> | Array<IPCB_PrimitiveImage>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitiveImage | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveImage>>;`
- **getall**: `function getAll( 	layer?: TPCB_LayersOfImage, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitiveImage>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	layer?: TPCB_LayersOfImage, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitiveImage, 	property: { 		x?: number; 		y?: number; 		layer?: TPCB_LayersOfImage; 		width?: number; 		height?: number; 		rotation?: number; 		horizonMirror?: boolean; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitiveImage | undefined>;`

---

## PCB_PrimitiveLine

PCB &amp; footprint / line primitive class

```typescript
class PCB_PrimitiveLine implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	net: string, 	layer: TPCB_LayersOfLine, 	startX: number, 	startY: number, 	endX: number, 	endY: number, 	lineWidth?: number, 	primitiveLock?: boolean, ): Promise<IPCB_PrimitiveLine | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitiveLine | Array<string> | Array<IPCB_PrimitiveLine>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitiveLine | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveLine>>;`
- **getall**: `function getAll( 	net?: string, 	layer?: TPCB_LayersOfLine, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitiveLine>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	net?: string, 	layer?: TPCB_LayersOfLine, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitiveLine, 	property: { 		net?: string; 		layer?: TPCB_LayersOfLine; 		startX?: number; 		startY?: number; 		endX?: number; 		endY?: number; 		lineWidth?: number; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitiveLine | undefined>;`

---

## PCB_PrimitiveObject

PCB &amp; footprint / binary embedded object primitive class

```typescript
class PCB_PrimitiveObject implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	layer: TPCB_LayersOfObject, 	topLeftX: number, 	topLeftY: number, 	binaryData: string, 	width: number, 	height: number, 	rotation?: number, 	mirror?: boolean, 	fileName?: string, 	primitiveLock?: boolean, ): Promise<IPCB_PrimitiveObject | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitiveObject | Array<string> | Array<IPCB_PrimitiveObject>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitiveObject | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveObject>>;`
- **getall**: `function getAll( 	layer?: TPCB_LayersOfObject, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitiveObject>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	layer?: TPCB_LayersOfObject, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitiveObject, 	property: { 		layer?: TPCB_LayersOfObject; 		topLeftX?: number; 		topLeftY?: number; 		binaryData?: string; 		width?: number; 		height?: number; 		rotation?: number; 		mirror?: boolean; 		fileName?: string; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitiveObject | undefined>;`

---

## PCB_PrimitivePad

PCB &amp; footprint / pad primitive class

```typescript
class PCB_PrimitivePad implements IPCB_PrimitiveAPI
```

- **create**: *(签名过长，请查看详细文档)*
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitivePad | Array<string> | Array<IPCB_PrimitivePad>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitivePad | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePad>>;`
- **getall**: `function getAll( 	layer?: TPCB_LayersOfPad, 	net?: string, 	primitiveLock?: boolean, 	padType?: EPCB_PrimitivePadType, ): Promise<Array<IPCB_PrimitivePad>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	layer?: TPCB_LayersOfPad, 	net?: string, 	primitiveLock?: boolean, 	padType?: EPCB_PrimitivePadType, ): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## PCB_PrimitivePolyline

PCB &amp; footprint / polyline primitive class

```typescript
class PCB_PrimitivePolyline implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	net: string, 	layer: TPCB_LayersOfLine, 	polygon: IPCB_Polygon, 	lineWidth?: number, 	primitiveLock?: boolean, ): Promise<IPCB_PrimitivePolyline | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitivePolyline | Array<string> | Array<IPCB_PrimitivePolyline>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitivePolyline | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePolyline>>;`
- **getall**: `function getAll( 	net?: string, 	layer?: TPCB_LayersOfLine, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitivePolyline>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	net?: string, 	layer?: TPCB_LayersOfLine, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitivePolyline, 	property: { 		net?: string; 		layer?: TPCB_LayersOfLine; 		polygon?: IPCB_Polygon; 		lineWidth?: number; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitivePolyline | undefined>;`

---

## PCB_PrimitivePour

PCB &amp; footprint / copper border primitive class

```typescript
class PCB_PrimitivePour implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	net: string, 	layer: TPCB_LayersOfCopper, 	complexPolygon: IPCB_Polygon, 	pourFillMethod?: EPCB_PrimitivePourFillMethod, 	preserveSilos?: boolean, 	pourName?: string, 	pourPriority?: number, 	lineWidth?: number, 	primitiveLock?: boolean, ): Promise<IPCB_PrimitivePour | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitivePour | Array<string> | Array<IPCB_PrimitivePour>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitivePour | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePour>>;`
- **getall**: `function getAll( 	net?: string, 	layer?: TPCB_LayersOfCopper, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitivePour>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	net?: string, 	layer?: TPCB_LayersOfCopper, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitivePour, 	property: { 		net?: string; 		layer?: TPCB_LayersOfCopper; 		complexPolygon?: IPCB_Polygon; 		pourFillMethod?: EPCB_PrimitivePourFillMethod; 		preserveSilos?: boolean; 		pourName?: string; 		pourPriority?: number; 		lineWidth?: number; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitivePour | undefined>;`

---

## PCB_PrimitivePoured

PCB &amp; footprint / copper fill primitive class

```typescript
class PCB_PrimitivePoured implements IPCB_PrimitiveAPI
```

- **delete**: `function delete(primitiveIds: string | IPCB_PrimitivePoured | Array<string> | Array<IPCB_PrimitivePoured>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitivePoured | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePoured>>;`
- **getall**: `function getAll(): Promise<Array<IPCB_PrimitivePoured>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(): Promise<Array<string>>;`

---

## PCB_PrimitiveRegion

PCB &amp; footprint / forbidden region and constrained region primitive class

```typescript
class PCB_PrimitiveRegion implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	layer: TPCB_LayersOfRegion, 	complexPolygon: IPCB_Polygon, 	ruleType?: Array<EPCB_PrimitiveRegionRuleType>, 	regionName?: string, 	lineWidth?: number, 	primitiveLock?: boolean, ): Promise<IPCB_PrimitiveRegion | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitiveRegion | Array<string> | Array<IPCB_PrimitiveRegion>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitiveRegion | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveRegion>>;`
- **getall**: `function getAll( 	layer?: TPCB_LayersOfRegion, 	ruleType?: Array<EPCB_PrimitiveRegionRuleType>, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitiveRegion>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	layer?: TPCB_LayersOfRegion, 	ruleType?: Array<EPCB_PrimitiveRegionRuleType>, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitiveRegion, 	property: { 		layer?: TPCB_LayersOfRegion; 		complexPolygon?: IPCB_Polygon; 		ruleType?: Array<EPCB_PrimitiveRegionRuleType>; 		regionName?: string; 		lineWidth?: number; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitiveRegion | undefined>;`

---

## PCB_PrimitiveString

PCB &amp; footprint / text primitive class

```typescript
class PCB_PrimitiveString implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	layer: TPCB_LayersOfImage, 	x: number, 	y: number, 	text: string, 	fontFamily: string, 	fontSize: number, 	lineWidth: number, 	alignMode: EPCB_PrimitiveStringAlignMode, 	rotation: number, 	reverse: boolean, 	expansion: number, 	mirror: boolean, 	primitiveLock: boolean, ): Promise<IPCB_PrimitiveString | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitiveString | Array<string> | Array<IPCB_PrimitiveString>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitiveString | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveString>>;`
- **getall**: `function getAll( 	layer?: TPCB_LayersOfImage, 	primitiveLock?: boolean, ): Promise<Array<IPCB_PrimitiveString>>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	layer?: TPCB_LayersOfImage, 	primitiveLock?: boolean, ): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitiveString, 	property: { 		layer?: TPCB_LayersOfImage; 		x?: number; 		y?: number; 		text?: string; 		fontFamily?: string; 		fontSize?: number; 		lineWidth?: number; 		alignMode?: EPCB_PrimitiveStringAlignMode; 		rotation?: number; 		reverse?: boolean; 		expansion?: number; 		mirror?: boolean; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitiveString | undefined>;`

---

## PCB_PrimitiveVia

PCB &amp; footprint / via primitive class

```typescript
class PCB_PrimitiveVia implements IPCB_PrimitiveAPI
```

- **create**: `function create( 	net: string, 	x: number, 	y: number, 	holeDiameter: number, 	diameter: number, 	viaType?: EPCB_PrimitiveViaType, 	designRuleBlindViaName?: string | null, 	solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, 	primitiveLock?: boolean, ): Promise<IPCB_PrimitiveVia | undefined>;`
- **delete**: `function delete(primitiveIds: string | IPCB_PrimitiveVia | Array<string> | Array<IPCB_PrimitiveVia>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<IPCB_PrimitiveVia | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveVia>>;`
- **getall**: `function getAll(net?: string, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveVia>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(net?: string, primitiveLock?: boolean): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | IPCB_PrimitiveVia, 	property: { 		net?: string; 		x?: number; 		y?: number; 		holeDiameter?: number; 		diameter?: number; 		viaType?: EPCB_PrimitiveViaType; 		designRuleBlindViaName?: string | null; 		solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null; 		primitiveLock?: boolean; 	}, ): Promise<IPCB_PrimitiveVia | undefined>;`

---

## PCB_RayTracerEngine

PCB &amp; footprint / ray tracer engine class

```typescript
class PCB_RayTracerEngine
```

- **dispose**: `function dispose(): Promise<void>;`
- **getlightconfigurations**: `function getLightConfigurations(lightName: string): Promise<any>;`
- **getrenderconfigurations**: `function getRenderConfigurations(): Promise<any>;`
- **init**: `function init(): Promise<void>;`
- **setrenderconfigurations**: `function setRenderConfigurations(configurations: any): Promise<void>;`

---

## PCB_SelectControl

PCB &amp; footprint / selection control class

```typescript
class PCB_SelectControl
```

- **clearselected**: `function clearSelected(): Promise<boolean>;`
- **docrossprobeselect**: `function doCrossProbeSelect( 	components?: Array<string>, 	pins?: Array<string>, 	nets?: Array<string>, 	highlight?: boolean, 	select?: boolean, ): Promise<boolean>;`
- **doselectprimitives**: `function doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;`
- **getallselectedprimitives**: `function getAllSelectedPrimitives(): Promise<Array<IPCB_Primitive>>;`
- **getallselectedprimitives_primitiveid**: `function getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;`
- **getcurrentmouseposition**: `function getCurrentMousePosition(): Promise<{ x: number; y: number } | undefined>;`
- **getselectedprimitives**: `function getSelectedPrimitives(): Promise<Array<object>>;`

---

## PCB_Tool

PCB / 设计工具类

```typescript
class PCB_Tool
```


---

## PNL_Document

Panel / document operation class

```typescript
class PNL_Document
```

- **save**: `function save(): Promise<boolean>;`

---

## SCH_Document

Schematic &amp; symbol / document operation class

```typescript
class SCH_Document
```

- **autolayout**: `function autoLayout(props?: { 	uuids?: Array<string>; 	netlist?: { 		component: Record< 			string, 			{ 				pinInfoMap: Record< 					string, 					{ name: string; number: string; net: string; props: { 'Pin Number': string } } 				>; 			} 		>; 	}; 	designatorDeviceTypeMap?: Record< 		string, 		| 'resistor' 		| 'capacitor' 		| 'inductive' 		| 'diode' 		| 'triode' 		| 'oscillator' 		| 'chip' 		| 'otherDevice' 	>; }): Promise<any>;`
- **autorouting**: `function autoRouting(props?: { 	uuids?: Array<string>; 	netlist?: { 		component: Record< 			string, 			{ 				pinInfoMap: Record< 					string, 					{ name: string; number: string; net: string; props: { 'Pin Number': string } } 				>; 			} 		>; 	}; 	designatorDeviceTypeMap?: Record< 		string, 		| 'resistor' 		| 'capacitor' 		| 'inductive' 		| 'diode' 		| 'triode' 		| 'oscillator' 		| 'chip' 		| 'otherDevice' 	>; }): Promise<any>;`
- **getcurrentfilterconfiguration**: `function getCurrentFilterConfiguration(): Promise<Record<string, boolean> | undefined>;`
- **getprimitiveatpoint**: `function getPrimitiveAtPoint(x: number, y: number): Promise<ISCH_Primitive | undefined>;`
- **getprimitivesinregion**: `function getPrimitivesInRegion( 	left: number, 	right: number, 	top: number, 	bottom: number, ): Promise<Array<ISCH_Primitive>>;`
- **importchanges**: `function importChanges(): Promise<boolean>;`
- **navigatetocoordinates**: `function navigateToCoordinates(x: number, y: number): Promise<boolean>;`
- **navigatetoregion**: `function navigateToRegion( 	left: number, 	right: number, 	top: number, 	bottom: number, ): Promise<boolean>;`
- **save**: `function save(): Promise<boolean>;`

---

## SCH_Drc

Schematic &amp; symbol / design rule check (DRC) class

```typescript
class SCH_Drc
```

- **check**: `function check( 	strict: boolean, 	userInterface: boolean, 	includeVerboseError: false, ): Promise<boolean>;`
- **check_1**: `function check( 	strict: boolean, 	userInterface: boolean, 	includeVerboseError: true, ): Promise<Array<ISCH_DrcError>>;`

---

## SCH_Event

Schematic &amp; symbol / event class

```typescript
class SCH_Event
```

- **addmouseeventlistener**: `function addMouseEventListener( 	id: string, 	eventType: 'all' | ESCH_MouseEventType, 	callFn: (eventType: ESCH_MouseEventType) => void | Promise<void>, 	onlyOnce?: boolean, ): void;`
- **addprimitiveeventlistener**: `function addPrimitiveEventListener( 	id: string, 	eventType: 'all' | ESCH_PrimitiveEventType, 	callFn: ( 		eventType: ESCH_PrimitiveEventType, 		props: { primitiveIds: Array<string> }, 	) => void | Promise<void>, 	onlyOnce?: boolean, ): void;`
- **addsimulationenginepulleventlistener**: `function addSimulationEnginePullEventListener( 	id: string, 	eventType: 'all', 	callFn: ( 		eventType: 			ESCH_DynamicSimulationEnginePullEventType | ESCH_SpiceSimulationEnginePullEventType, 		props: Record<string, any>, 	) => void | Promise<void>, ): void;`
- **iseventlisteneralreadyexist**: `function isEventListenerAlreadyExist(id: string): boolean;`
- **removeeventlistener**: `function removeEventListener(id: string): boolean;`

---

## SCH_ManufactureData

Schematic &amp; symbol / manufacture data class

```typescript
class SCH_ManufactureData
```

- **deletebomtemplate**: `function deleteBomTemplate(template: string): Promise<boolean>;`
- **getassemblyvariantsconfigs**: `function getAssemblyVariantsConfigs(): Promise<Array<{ text: string; value: string }>>;`
- **getbomfile**: `function getBomFile( 	fileName?: string, 	fileType?: 'xlsx' | 'csv', 	template?: string, 	filterOptions?: Array<{ property: string; includeValue: boolean | string }>, 	statistics?: Array<string>, 	property?: Array<string>, 	columns?: Array<IPCB_BomPropertiesTableColumns>, 	assemblyVariantsConfig?: { text: string; value: string }, ): Promise<File | undefined>;`
- **getbomtemplatefile**: `function getBomTemplateFile(template: string): Promise<File | undefined>;`
- **getbomtemplates**: `function getBomTemplates(): Promise<Array<string>>;`
- **getexportdocumentfile**: *(签名过长，请查看详细文档)*
- **getnetlistfile**: `function getNetlistFile( 	fileName?: string, 	netlistType?: ESYS_NetlistType, ): Promise<File | undefined>;`
- **getpngfile**: `function getPngFile( 	fileName?: string, 	resolution?: ISCH_ExportPngResolution, ): Promise<File | undefined>;`
- **getsimulationnetlistfile**: `function getSimulationNetlistFile( 	fileName?: string, 	netlistType?: ESCH_SimulationNetlistType, ): Promise<File | undefined>;`
- **getsvgfile**: `function getSvgFile(fileName?: string): Promise<File | undefined>;`
- **placecomponentsorder**: `function placeComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **placesmtcomponentsorder**: `function placeSmtComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;`
- **uploadbomtemplatefile**: `function uploadBomTemplateFile(templateFile: File, template?: string): Promise<string | undefined>;`

---

## SCH_Net

Schematic &amp; symbol / net class

```typescript
class SCH_Net
```

- **getallnets**: `function getAllNets(): Promise<Array<ISCH_NetInfo>>;`
- **getallnetsname**: `function getAllNetsName(): Promise<Array<string>>;`
- **getcurrentprojectallnets**: `function getCurrentProjectAllNets(): Promise<Array<ISCH_ProjectNetInfo>>;`
- **getnet**: `function getNet(net: string): Promise<ISCH_NetInfo | undefined>;`

---

## SCH_Netlist

Schematic &amp; symbol / netlist class

```typescript
class SCH_Netlist
```

- **getnetlist**: `function getNetlist(type?: ESYS_NetlistType): Promise<string>;`
- **setnetlist**: `function setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<void>;`

---

## SCH_Primitive

Schematic &amp; symbol / primitive class

```typescript
class SCH_Primitive
```

- **getprimitivebyprimitiveid**: `function getPrimitiveByPrimitiveId(id: string): Promise<ISCH_Primitive | undefined>;`
- **getprimitivesbbox**: `function getPrimitivesBBox( 	primitiveIds: Array<string | ISCH_Primitive>, ): Promise<{ minX: number; minY: number; maxX: number; maxY: number } | undefined>;`
- **getprimitivesbyprimitiveid**: `function getPrimitivesByPrimitiveId(ids: Array<string>): Promise<Array<ISCH_Primitive>>;`
- **getprimitivetypebyprimitiveid**: `function getPrimitiveTypeByPrimitiveId(id: string): Promise<ESCH_PrimitiveType | undefined>;`

---

## SCH_PrimitiveArc

Schematic &amp; symbol / arc primitive class

```typescript
class SCH_PrimitiveArc implements ISCH_PrimitiveAPI
```

- **create**: `function create( 	startX: number, 	startY: number, 	referenceX: number, 	referenceY: number, 	endX: number, 	endY: number, 	color?: string | null, 	fillColor?: string | null, 	lineWidth?: number | null, 	lineType?: ESCH_PrimitiveLineType | null, ): Promise<ISCH_PrimitiveArc | undefined>;`
- **delete**: `function delete(primitiveIds: string | ISCH_PrimitiveArc | Array<string> | Array<ISCH_PrimitiveArc>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<ISCH_PrimitiveArc | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveArc>>;`
- **getall**: `function getAll(): Promise<Array<ISCH_PrimitiveArc>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | ISCH_PrimitiveArc, 	property: { 		startX?: number; 		startY?: number; 		referenceX?: number; 		referenceY?: number; 		endX?: number; 		endY?: number; 		color?: string | null; 		fillColor?: string | null; 		lineWidth?: number | null; 		lineType?: ESCH_PrimitiveLineType | null; 	}, ): Promise<ISCH_PrimitiveArc | undefined>;`

---

## SCH_PrimitiveAttribute

Schematic &amp; symbol / property primitive class

```typescript
class SCH_PrimitiveAttribute implements ISCH_PrimitiveAPI
```

- **createnetlabel**: `function createNetLabel( 	x: number, 	y: number, 	net: string, ): Promise<ISCH_PrimitiveAttribute | undefined>;`
- **get**: `function get(primitiveIds: string): Promise<ISCH_PrimitiveAttribute | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveAttribute>>;`
- **getall**: `function getAll(parentPrimitiveId?: string): Promise<Array<ISCH_PrimitiveAttribute>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(parentPrimitiveId?: string): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*

---

## SCH_PrimitiveBus

Schematic &amp; symbol / bus primitive class

```typescript
class SCH_PrimitiveBus implements ISCH_PrimitiveAPI
```

- **create**: `function create( 	busName: string, 	line: Array<number> | Array<Array<number>>, 	color?: string | null, 	lineWidth?: number | null, 	lineType?: ESCH_PrimitiveLineType | null, ): Promise<ISCH_PrimitiveBus | undefined>;`
- **delete**: `function delete(primitiveIds: string | ISCH_PrimitiveBus | Array<string> | Array<ISCH_PrimitiveBus>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<ISCH_PrimitiveBus | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveBus>>;`
- **getall**: `function getAll(): Promise<Array<ISCH_PrimitiveBus>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | ISCH_PrimitiveBus, 	property: { 		busName?: string; 		line?: Array<number> | Array<Array<number>>; 		color?: string | null; 		lineWidth?: number | null; 		lineType?: ESCH_PrimitiveLineType | null; 	}, ): Promise<ISCH_PrimitiveBus | undefined>;`

---

## SCH_PrimitiveCircle

Schematic &amp; symbol / circle primitive class

```typescript
class SCH_PrimitiveCircle implements ISCH_PrimitiveAPI
```

- **create**: `function create( 	centerX: number, 	centerY: number, 	radius: number, 	color?: string | null, 	fillColor?: string | null, 	lineWidth?: number | null, 	lineType?: ESCH_PrimitiveLineType | null, 	fillStyle?: ESCH_PrimitiveFillStyle | null, ): Promise<ISCH_PrimitiveCircle | undefined>;`
- **delete**: `function delete(primitiveIds: string | ISCH_PrimitiveCircle | Array<string> | Array<ISCH_PrimitiveCircle>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<ISCH_PrimitiveCircle | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveCircle>>;`
- **getall**: `function getAll(): Promise<Array<ISCH_PrimitiveCircle>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | ISCH_PrimitiveCircle, 	property: { 		centerX?: number; 		centerY?: number; 		radius?: number; 		color?: string | null; 		fillColor?: string | null; 		lineWidth?: number | null; 		lineType?: ESCH_PrimitiveLineType | null; 		fillStyle?: ESCH_PrimitiveFillStyle | null; 	}, ): Promise<ISCH_PrimitiveCircle | undefined>;`

---

## SCH_PrimitiveComponent

Schematic &amp; symbol / device primitive class

```typescript
class SCH_PrimitiveComponent implements ISCH_PrimitiveAPI
```

- **create**: `function create( 	component: 		| { libraryType?: ELIB_LibraryType.DEVICE; libraryUuid: string; uuid: string } 		| ILIB_DeviceItem 		| ILIB_DeviceSearchItem 		| { libraryType: ELIB_LibraryType.SYMBOL; libraryUuid: string; uuid: string } 		| ILIB_SymbolItem 		| ILIB_SymbolSearchItem, 	x: number, 	y: number, 	subPartName?: string, 	rotation?: number, 	mirror?: boolean, 	addIntoBom?: boolean, 	addIntoPcb?: boolean, ): Promise<ISCH_PrimitiveComponent | undefined>;`
- **createcbbsymbol**: `function createCbbSymbol( 	cbbSymbol: { libraryUuid: string; cbbUuid: string; uuid?: string }, 	x: number, 	y: number, 	rotation?: number, 	mirror?: boolean, ): Promise<ISCH_PrimitiveCbbSymbolComponent | undefined>;`
- **createnetflag**: `function createNetFlag( 	identification: 'Power' | 'Ground' | 'AnalogGround' | 'ProtectGround', 	net: string, 	x: number, 	y: number, 	rotation?: number, 	mirror?: boolean, ): Promise<ISCH_PrimitiveComponent | undefined>;`
- **createnetport**: `function createNetPort( 	direction: 'IN' | 'OUT' | 'BI', 	net: string, 	x: number, 	y: number, 	rotation?: number, 	mirror?: boolean, ): Promise<ISCH_PrimitiveComponent | undefined>;`
- **createshortcircuitflag**: `function createShortCircuitFlag( 	x: number, 	y: number, 	rotation?: number, 	mirror?: boolean, ): Promise<ISCH_PrimitiveComponent | undefined>;`
- **delete**: `function delete(primitiveIds: string | ISCH_PrimitiveComponent | Array<string> | Array<ISCH_PrimitiveComponent>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<ISCH_PrimitiveComponent | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveComponent>>;`
- **getall**: `function getAll( 	componentType?: ESCH_PrimitiveComponentType, 	allSchematicPages?: boolean, ): Promise<Array<ISCH_PrimitiveComponent>>;`
- **getallpinsbyprimitiveid**: `function getAllPinsByPrimitiveId( 	primitiveId: string, ): Promise<Array<ISCH_PrimitiveComponentPin> | undefined>;`
- **getallprimitiveid**: `function getAllPrimitiveId( 	componentType?: ESCH_PrimitiveComponentType, 	allSchematicPages?: boolean, ): Promise<Array<string>>;`
- **getallpropertynames**: `function getAllPropertyNames(): Promise<Array<string>>;`
- **modify**: *(签名过长，请查看详细文档)*
- **placecbbschematicpage**: `function placeCbbSchematicPage( 	cbbSchematicPage: { libraryUuid: string; cbbUuid: string; uuid: string }, 	x: number, 	y: number, 	props?: { reimportWhenNameRepeated?: boolean }, ): Promise<boolean>;`
- **placecomponentwithmouse**: `function placeComponentWithMouse( 	component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem, 	subPartName?: string, ): Promise<boolean>;`
- **placesymbolwithmouse**: `function placeSymbolWithMouse( 	symbol: { libraryUuid: string; uuid: string } | ILIB_SymbolItem | ILIB_SymbolSearchItem, 	subPartName?: string, 	properties?: Record<string, boolean | number | string | undefined>, ): Promise<boolean>;`
- **setnetflagcomponentuuid_analogground**: `function setNetFlagComponentUuid_AnalogGround( 	component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem, ): Promise<boolean>;`
- **setnetflagcomponentuuid_ground**: `function setNetFlagComponentUuid_Ground( 	component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem, ): Promise<boolean>;`
- **setnetflagcomponentuuid_power**: `function setNetFlagComponentUuid_Power( 	component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem, ): Promise<boolean>;`
- **setnetflagcomponentuuid_protectground**: `function setNetFlagComponentUuid_ProtectGround( 	component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem, ): Promise<boolean>;`
- **setnetportcomponentuuid_bi**: `function setNetPortComponentUuid_BI( 	component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem, ): Promise<boolean>;`
- **setnetportcomponentuuid_in**: `function setNetPortComponentUuid_IN( 	component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem, ): Promise<boolean>;`
- **setnetportcomponentuuid_out**: `function setNetPortComponentUuid_OUT( 	component: { libraryUuid: string; uuid: string } | ILIB_DeviceItem | ILIB_DeviceSearchItem, ): Promise<boolean>;`

---

## SCH_PrimitiveObject

Schematic &amp; symbol / binary embedded object primitive class

```typescript
class SCH_PrimitiveObject implements ISCH_PrimitiveAPI
```

- **create**: `function create( 	content: File | string, 	startX: number, 	startY: number, 	width?: number, 	height?: number, 	rotation?: number, 	mirror?: boolean, 	fileName?: string, ): Promise<ISCH_PrimitiveObject | undefined>;`
- **delete**: `function delete(primitiveIds: string | ISCH_PrimitiveObject | Array<string> | Array<ISCH_PrimitiveObject>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<ISCH_PrimitiveObject | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveObject>>;`
- **getall**: `function getAll(): Promise<Array<ISCH_PrimitiveObject>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | ISCH_PrimitiveObject, 	property: { 		content?: File | string; 		startX?: number; 		startY?: number; 		width?: number; 		height?: number; 		rotation?: number; 		mirror?: boolean; 		fileName?: string; 	}, ): Promise<ISCH_PrimitiveObject | undefined>;`

---

## SCH_PrimitivePin

Schematic &amp; symbol / pin primitive class

```typescript
class SCH_PrimitivePin implements ISCH_PrimitiveAPI
```

- **create**: `function create( 	x: number, 	y: number, 	pinNumber: string, 	pinName?: string, 	rotation?: number, 	pinLength?: number, 	pinColor?: string | null, 	pinShape?: ESCH_PrimitivePinShape, 	pinType?: ESCH_PrimitivePinType, ): Promise<ISCH_PrimitivePin | undefined>;`
- **delete**: `function delete(primitiveIds: string | ISCH_PrimitivePin | Array<string> | Array<ISCH_PrimitivePin>): Promise<boolean>;`
- **get**: `function get( 	primitiveIds: string, ): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;`
- **get_1**: `function get( 	primitiveIds: Array<string>, ): Promise<Array<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin>>;`
- **getall**: `function getAll(): Promise<Array<ISCH_PrimitivePin>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | ISCH_PrimitivePin | ISCH_PrimitiveComponentPin, 	property: { 		x?: number; 		y?: number; 		pinNumber?: string; 		pinName?: string; 		rotation?: number; 		pinLength?: number; 		pinColor?: string | null; 		pinShape?: ESCH_PrimitivePinShape; 		pinType?: ESCH_PrimitivePinType; 		noConnected?: boolean; 		otherProperty?: Record<string, string | number | boolean>; 	}, ): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;`

---

## SCH_PrimitivePolygon

Schematic &amp; symbol / polygon (polyline) primitive class

```typescript
class SCH_PrimitivePolygon implements ISCH_PrimitiveAPI
```

- **create**: `function create( 	line: Array<number>, 	color?: string | null, 	fillColor?: string | null, 	lineWidth?: number | null, 	lineType?: ESCH_PrimitiveLineType | null, ): Promise<ISCH_PrimitivePolygon | undefined>;`
- **delete**: `function delete(primitiveIds: string | ISCH_PrimitivePolygon | Array<string> | Array<ISCH_PrimitivePolygon>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<ISCH_PrimitivePolygon | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePolygon>>;`
- **getall**: `function getAll(): Promise<Array<ISCH_PrimitivePolygon>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | ISCH_PrimitivePolygon, 	property: { 		line?: Array<number>; 		color?: string | null; 		fillColor?: string | null; 		lineWidth?: number | null; 		lineType?: ESCH_PrimitiveLineType | null; 	}, ): Promise<ISCH_PrimitivePolygon | undefined>;`

---

## SCH_PrimitiveRectangle

Schematic &amp; symbol / rectangle primitive class

```typescript
class SCH_PrimitiveRectangle implements ISCH_PrimitiveAPI
```

- **create**: `function create( 	topLeftX: number, 	topLeftY: number, 	width: number, 	height: number, 	cornerRadius?: number, 	rotation?: number, 	color?: string | null, 	fillColor?: string | null, 	lineWidth?: number | null, 	lineType?: ESCH_PrimitiveLineType | null, 	fillStyle?: ESCH_PrimitiveFillStyle | null, ): Promise<ISCH_PrimitiveRectangle | undefined>;`
- **delete**: `function delete(primitiveIds: string | ISCH_PrimitiveRectangle | Array<string> | Array<ISCH_PrimitiveRectangle>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<ISCH_PrimitiveRectangle | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveRectangle>>;`
- **getall**: `function getAll(): Promise<Array<ISCH_PrimitiveRectangle>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | ISCH_PrimitiveRectangle, 	property: { 		topLeftX?: number; 		topLeftY?: number; 		width?: number; 		height?: number; 		cornerRadius?: number; 		rotation?: number; 		color?: string | null; 		fillColor?: string | null; 		lineWidth?: number | null; 		lineType?: ESCH_PrimitiveLineType | null; 		fillStyle?: ESCH_PrimitiveFillStyle | null; 	}, ): Promise<ISCH_PrimitiveRectangle | undefined>;`

---

## SCH_PrimitiveText

Schematic &amp; symbol / text primitive class

```typescript
class SCH_PrimitiveText implements ISCH_PrimitiveAPI
```

- **create**: `function create( 	x: number, 	y: number, 	content: string, 	rotation?: number, 	textColor?: string | null, 	fontName?: string | null, 	fontSize?: number | null, 	bold?: boolean, 	italic?: boolean, 	underLine?: boolean, 	alignMode?: ESCH_PrimitiveTextAlignMode, ): Promise<ISCH_PrimitiveText | undefined>;`
- **delete**: `function delete(primitiveIds: string | ISCH_PrimitiveText | Array<string> | Array<ISCH_PrimitiveText>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<ISCH_PrimitiveText | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveText>>;`
- **getall**: `function getAll(): Promise<Array<ISCH_PrimitiveText>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | ISCH_PrimitiveText, 	property: { 		x?: number; 		y?: number; 		content?: string; 		rotation?: number; 		textColor?: string | null; 		fontName?: string | null; 		fontSize?: number | null; 		bold?: boolean; 		italic?: boolean; 		underLine?: boolean; 		alignMode?: ESCH_PrimitiveTextAlignMode; 	}, ): Promise<ISCH_PrimitiveText | undefined>;`

---

## SCH_PrimitiveWire

Schematic &amp; symbol / wire primitive class

```typescript
class SCH_PrimitiveWire implements ISCH_PrimitiveAPI
```

- **create**: `function create( 	line: Array<number> | Array<Array<number>>, 	net?: string, 	color?: string | null, 	lineWidth?: number | null, 	lineType?: ESCH_PrimitiveLineType | null, ): Promise<ISCH_PrimitiveWire | undefined>;`
- **delete**: `function delete(primitiveIds: string | ISCH_PrimitiveWire | Array<string> | Array<ISCH_PrimitiveWire>): Promise<boolean>;`
- **get**: `function get(primitiveIds: string): Promise<ISCH_PrimitiveWire | undefined>;`
- **get_1**: `function get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveWire>>;`
- **getall**: `function getAll(net?: string | Array<string>): Promise<Array<ISCH_PrimitiveWire>>;`
- **getallprimitiveid**: `function getAllPrimitiveId(net?: string | Array<string>): Promise<Array<string>>;`
- **modify**: `function modify( 	primitiveId: string | ISCH_PrimitiveWire, 	property: { 		line?: Array<number> | Array<Array<number>>; 		net?: string; 		color?: string | null; 		lineWidth?: number | null; 		lineType?: ESCH_PrimitiveLineType | null; 	}, ): Promise<ISCH_PrimitiveWire | undefined>;`

---

## SCH_SelectControl

Schematic &amp; symbol / selection control class

```typescript
class SCH_SelectControl
```

- **clearselected**: `function clearSelected(): boolean;`
- **docrossprobeselect**: `function doCrossProbeSelect( 	components?: Array<string>, 	pins?: Array<string>, 	nets?: Array<string>, 	highlight?: boolean, 	select?: boolean, ): boolean;`
- **doselectprimitives**: `function doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;`
- **getallselectedprimitives**: `function getAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;`
- **getallselectedprimitives_primitiveid**: `function getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;`
- **getcurrentmouseposition**: `function getCurrentMousePosition(): Promise<{ x: number; y: number } | undefined>;`
- **getselectedprimitives**: `function getSelectedPrimitives(): Promise<Array<object>>;`
- **getselectedprimitives_primitiveid**: `function getSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;`

---

## SCH_SimulationEngine

Schematic &amp; symbol / simulation engine class

```typescript
class SCH_SimulationEngine
```

- **pushdata**: `function pushData( 	eventType: ESCH_DynamicSimulationEnginePushEventType | ESCH_SpiceSimulationEnginePushEventType, 	props: Record<string, any>, ): void;`

---

## SCH_Utils

Schematic &amp; symbol / utility class

```typescript
class SCH_Utils
```

- **splitlines**: `function splitLines( 	lines: Array<number | Array<number>>, ): Array<Array<number | Array<number>>> | undefined;`

---

## SYS_ClientUrl

System / external request class

```typescript
class SYS_ClientUrl
```

- **request**: `function request( 	url: string, 	method?: 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH', 	data?: string | Blob | FormData | URLSearchParams, 	options?: { headers?: { [header: string]: any }; integrity?: string }, 	succeedCallFn?: (data: Response) => void | Promise<void>, ): Promise<Response>;`

---

## SYS_Dialog

System / dialog class

```typescript
class SYS_Dialog
```

- **createdesignportal**: `function createDesignPortal(): IDesignPortal;`
- **showconfirmationmessage**: `function showConfirmationMessage( 	content: string, 	title?: string, 	mainButtonTitle?: string, 	buttonTitle?: string, 	callbackFn?: (mainButtonClicked: boolean) => void, ): void;`
- **showinformationmessage**: `function showInformationMessage(content: string, title?: string, buttonTitle?: string): void;`
- **showinputdialog**: *(签名过长，请查看详细文档)*
- **showselectdialog**: `function showSelectDialog( 	options: Array<string> | Array<{ value: string; displayContent: string }>, 	beforeContent?: string, 	afterContent?: string, 	title?: string, 	defaultOption?: string, 	multiple?: false, 	callbackFn?: (value: string) => void | Promise<void>, ): void;`
- **showselectdialog_1**: `function showSelectDialog( 	options: Array<string> | Array<{ value: string; displayContent: string }>, 	beforeContent?: string, 	afterContent?: string, 	title?: string, 	defaultOption?: Array<string>, 	multiple?: true, 	callbackFn?: (value: Array<string>) => void | Promise<void>, ): void;`

---

## SYS_Environment

System / runtime environment class

```typescript
class SYS_Environment
```

- **geteditorcomplieddate**: `function getEditorCompliedDate(): string;`
- **geteditorcurrentversion**: `function getEditorCurrentVersion(onlySemantic?: boolean): string;`
- **getuserinfo**: `function getUserInfo(): { 	username?: string; 	nickname?: string; 	avatar?: string; 	uuid?: string; 	customerCode?: string; };`
- **isclient**: `function isClient(): boolean;`
- **iseasyedaproedition**: `function isEasyEDAProEdition(): boolean;`
- **iseditorcurrentversiongreaterthanorequal**: `function isEditorCurrentVersionGreaterThanOrEqual(version: string): boolean;`
- **iseditorcurrentversionlessthanorequal**: `function isEditorCurrentVersionLessThanOrEqual(version: string): boolean;`
- **ishalfofflinemode**: `function isHalfOfflineMode(): boolean;`
- **isjlcedaproedition**: `function isJLCEDAProEdition(): boolean;`
- **isofflinemode**: `function isOfflineMode(): boolean;`
- **isonlinemode**: `function isOnlineMode(): boolean;`
- **isproprivateedition**: `function isProPrivateEdition(): boolean;`
- **isweb**: `function isWeb(): boolean;`

---

## SYS_ExternalApi

外部接口注入管理类

```typescript
class SYS_ExternalApi
```

- **register**: `function register( 	namespace: string, 	apiName: string, 	callFn: (...args: any[]) => any | Promise<any>, 	help?: ISYS_ExternalApiHelp, ): void;`
- **unregister**: `function unregister(namespace: string, apiName: string): boolean;`

---

## SYS_FileManager

System / file manager class

```typescript
class SYS_FileManager
```

- **extractlibinfo**: `function extractLibInfo(data: File | Array<File>): Promise<any>;`
- **extractprojectinfo**: `function extractProjectInfo(data: File): Promise<any>;`
- **getcbbfilebycbbuuid**: `function getCbbFileByCbbUuid( 	cbbUuid: string, 	libraryUuid?: string, 	props?: { 		fileName?: string; 		password?: string; 		fileType?: 'epro' | 'epro2'; 		templateSchematicUuid?: string; 		templatePcbUuid?: string; 	}, ): Promise<File | undefined>;`
- **getdevicefilebydeviceuuid**: `function getDeviceFileByDeviceUuid( 	deviceUuid: string | Array<string>, 	libraryUuid?: string, 	fileType?: 'elibz' | 'elibz2', ): Promise<File | undefined>;`
- **getdocumentfile**: `function getDocumentFile( 	fileName?: string, 	password?: string, 	fileType?: 'epro' | 'epro2', ): Promise<File | undefined>;`
- **getdocumentfootprintsources**: `function getDocumentFootprintSources(): Promise< 	Array<{ footprintUuid: string; documentSource: string }> >;`
- **getdocumentsource**: `function getDocumentSource(): Promise<string | undefined>;`
- **getfootprintfilebyfootprintuuid**: `function getFootprintFileByFootprintUuid( 	footprintUuid: string | Array<string>, 	libraryUuid?: string, 	fileType?: 'elibz' | 'elibz2', ): Promise<File | undefined>;`
- **getpanellibraryfilebypanellibraryuuid**: `function getPanelLibraryFileByPanelLibraryUuid( 	panelLibraryUuid: string | Array<string>, 	libraryUuid?: string, 	fileType?: 'elibz' | 'elibz2', ): Promise<File | undefined>;`
- **getprojectfile**: `function getProjectFile( 	fileName?: string, 	password?: string, 	fileType?: 'epro' | 'epro2', ): Promise<File | undefined>;`
- **getprojectfilebyprojectuuid**: `function getProjectFileByProjectUuid( 	projectUuid: string, 	fileName?: string, 	password?: string, 	fileType?: 'epro' | 'epro2', ): Promise<File | undefined>;`
- **getschematicfile**: `function getSchematicFile( 	fileName?: string, 	password?: string, 	fileType?: 'epro' | 'epro2', ): Promise<File | undefined>;`
- **getsymbolfilebysymboluuid**: `function getSymbolFileBySymbolUuid( 	symbolUuid: string | Array<string>, 	libraryUuid?: string, 	fileType?: 'elibz' | 'elibz2', ): Promise<File | undefined>;`
- **importprojectbyprojectfile**: *(签名过长，请查看详细文档)*
- **importprojectbyprojectfile_1**: *(签名过长，请查看详细文档)*
- **setdocumentsource**: `function setDocumentSource(source: string): Promise<boolean>;`

---

## SYS_FileSystem

System / file system interaction class

```typescript
class SYS_FileSystem
```

- **createdirectoryinfilesystem**: `function createDirectoryInFileSystem(folderPath: string): Promise<boolean>;`
- **createobjecturl**: `function createObjectURL(blob: Blob | File): string;`
- **deletefileinfilesystem**: `function deleteFileInFileSystem(uri: string, force?: boolean): Promise<boolean>;`
- **existspathinfilesystem**: `function existsPathInFileSystem(uri: string): Promise<boolean>;`
- **getdocumentspath**: `function getDocumentsPath(): Promise<string>;`
- **getedapath**: `function getEdaPath(): Promise<string>;`
- **getextensionfile**: `function getExtensionFile(uri: string): Promise<File | undefined>;`
- **getlibrariespaths**: `function getLibrariesPaths(): Promise<Array<string>>;`
- **getprojectspaths**: `function getProjectsPaths(): Promise<Array<string>>;`
- **listfilesoffilesystem**: `function listFilesOfFileSystem( 	folderPath: string, 	recursive?: boolean, ): Promise<Array<ISYS_FileSystemFileList>>;`
- **openreadfiledialog**: `function openReadFileDialog( 	filenameExtensions?: string | Array<string>, 	multiFiles?: true, ): Promise<Array<File> | undefined>;`
- **openreadfiledialog_1**: `function openReadFileDialog( 	filenameExtensions?: string | Array<string>, 	multiFiles?: false, ): Promise<File | undefined>;`
- **openreadfilepathdialog**: `function openReadFilePathDialog( 	filenameExtensions?: string | Array<string>, 	multiFiles?: true, ): Promise<Array<string>>;`
- **openreadfilepathdialog_1**: `function openReadFilePathDialog( 	filenameExtensions?: string | Array<string>, 	multiFiles?: false, ): Promise<string | undefined>;`
- **openreadfolderdialog**: `function openReadFolderDialog(): Promise<Array<{ relativePath: string; file: File }>>;`
- **openreadfolderpathdialog**: `function openReadFolderPathDialog(): Promise<string | undefined>;`
- **readfilefromfilesystem**: `function readFileFromFileSystem(uri: string): Promise<File | undefined>;`
- **revokeobjecturl**: `function revokeObjectURL(url: string): void;`
- **savefile**: `function saveFile(fileData: File | Blob, fileName?: string): Promise<void>;`
- **savefiletofilesystem**: `function saveFileToFileSystem( 	uri: string, 	fileData: File | Blob, 	fileName?: string, 	force?: boolean, ): Promise<boolean>;`

---

## SYS_FontManager

System / font manager class

```typescript
class SYS_FontManager
```

- **addfont**: `function addFont(fontName: string): Promise<boolean>;`
- **deletefont**: `function deleteFont(fontName: string): Promise<boolean>;`
- **getfontslist**: `function getFontsList(): Promise<Array<string>>;`

---

## SYS_FormatConversion

System / format conversion (Chameleon) class

```typescript
class SYS_FormatConversion
```

- **convertaltiumdesignerlibrariestoeasyedamultifiles**: `function convertAltiumDesignerLibrariesToEasyEDAMultiFiles( 	file: File | Array<File>, ): Promise<Array<File>>;`
- **convertaltiumdesignerlibrariestoeasyedasinglefile**: `function convertAltiumDesignerLibrariesToEasyEDASingleFile( 	file: File | Array<File>, ): Promise<File | undefined>;`
- **convertdisalibrariestoeasyedamultifiles**: `function convertDisaLibrariesToEasyEDAMultiFiles(file: File | Array<File>): Promise<Array<File>>;`
- **convertdisalibrariestoeasyedasinglefile**: `function convertDisaLibrariesToEasyEDASingleFile( 	file: File | Array<File>, ): Promise<File | undefined>;`

---

## SYS_HeaderMenu

System / header menu class

```typescript
class SYS_HeaderMenu
```

- **insertheadermenus**: `function insertHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>;`
- **insertsystemheadermenuitem**: `function insertSystemHeaderMenuItem( 	env: ESYS_HeaderMenuEnvironment, 	id: Array<string>, 	props: { 		title: string; 		registerFn?: string; 		icon?: string; 		shortcutKey?: TSYS_ShortcutKeys; 		menuItems?: Array<ISYS_HeaderMenuSub1MenuItem | ISYS_HeaderMenuSub2MenuItem | null>; 		insertDividerBefore?: boolean; 		insertDividerAfter?: boolean; 		insertBefore?: string; 		crossDividerWhenInsert?: boolean; 	}, ): Promise<string | undefined>;`
- **removeheadermenus**: `function removeHeaderMenus(): void;`
- **removesystemheadermenuitem**: `function removeSystemHeaderMenuItem( 	id: Array<string>, 	props?: { 		removeTheBeforeDivider?: boolean; 		removeTheAfterDivider?: boolean; 	}, ): Promise<boolean>;`
- **replaceheadermenus**: `function replaceHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>;`

---

## SYS_Help

Help 渐进式披露类

```typescript
class SYS_Help
```

- **help**: `function help( 	namespace?: string, 	className?: string, 	methodName?: string, ): Promise<ISYS_HelpData | Record<string, any> | ISYS_HelpClassSummary | ISYS_HelpMethodDetail>;`

---

## SYS_I18n

System / multilingual class

```typescript
class SYS_I18n
```

- **addlanguagechangedeventlistener**: `function addLanguageChangedEventListener( 	id: string, 	callFn: (newLanguage: string, lastLanguage: string) => void | Promise<void>, 	onlyOnce: boolean, ): void;`
- **getallsupportedlanguages**: `function getAllSupportedLanguages(): Array<string>;`
- **getcurrentlanguage**: `function getCurrentLanguage(): Promise<string>;`
- **importmultilingual**: `function importMultilingual(language: string, source: TSYS_LanguageKeyValuePairs): boolean;`
- **importmultilinguallanguage**: `function importMultilingualLanguage( 	namespace: string, 	language: string, 	source: TSYS_LanguageKeyValuePairs, ): boolean;`
- **importmultilingualnamespace**: `function importMultilingualNamespace( 	namespace: string, 	source: ISYS_MultilingualLanguagesData, ): boolean;`
- **iseventlisteneralreadyexist**: `function isEventListenerAlreadyExist(id: string): boolean;`
- **islanguagesupported**: `function isLanguageSupported(language: string): boolean;`
- **removeeventlistener**: `function removeEventListener(id: string): boolean;`
- **text**: `function text(tag: string, namespace?: string, language?: string, ...args: Array<any>): string;`

---

## SYS_IFrame

System / iframe window class

```typescript
class SYS_IFrame
```

- **closeiframe**: `function closeIFrame(id?: string): Promise<boolean>;`
- **hideiframe**: `function hideIFrame(id?: string): Promise<boolean>;`
- **isiframealreadyexist**: `function isIFrameAlreadyExist(id: string): Promise<boolean>;`
- **openiframe**: `function openIFrame( 	htmlFileName: string, 	width?: number, 	height?: number, 	id?: string, 	props?: { 		maximizeButton?: boolean; 		minimizeButton?: boolean; 		minimizeStyle?: 'collapsed' | 'constricted'; 		buttonCallbackFn?: (button: 'close' | 'minimize' | 'maximize') => void | Promise<void>; 		onBeforeCloseCallFn?: () => boolean | undefined | Promise<boolean | undefined>; 		grayscaleMask?: boolean; 		title?: string; 		x?: number; 		y?: number; 	}, ): Promise<boolean>;`
- **showiframe**: `function showIFrame(id?: string): Promise<boolean>;`

---

## SYS_LoadingAndProgressBar

System / loading and progress bar class

```typescript
class SYS_LoadingAndProgressBar
```

- **destroyloading**: `function destroyLoading(): void;`
- **destroyprogressbar**: `function destroyProgressBar(): void;`
- **showloading**: `function showLoading(): void;`
- **showprogressbar**: `function showProgressBar(progress?: number, title?: string): void;`

---

## SYS_Log

System / log class

```typescript
class SYS_Log
```

- **add**: `function add(message: string, type?: ESYS_LogType): void;`
- **clear**: `function clear(): void;`
- **export**: `function export(types?: ESYS_LogType | Array<ESYS_LogType>): void;`
- **find**: `function find( 	message: 		| string 		| Array< 			| string 			| { 				text: string; 				attr?: { 					id?: string; 					path?: string; 					sheet?: string; 					pcbid?: string; 					type?: string; 				}; 			} 		>, 	types?: ESYS_LogType | Array<ESYS_LogType>, ): Promise<Array<ISYS_LogLine>>;`
- **sort**: `function sort(types?: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>;`

---

## SYS_Math

System / math class

```typescript
class SYS_Math
```

- **bboxintersects**: `function bboxIntersects(bbox1: ISYS_MathBBox, bbox2: ISYS_MathBBox): boolean;`
- **calculatearea**: `function calculateArea(polygon: TSYS_MathPolygonInput): number;`
- **calculateperimeter**: `function calculatePerimeter(polygon: TSYS_MathPolygonInput): number;`
- **contains**: `function contains(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): boolean;`
- **containspoint**: `function containsPoint(polygon: TSYS_MathPolygonInput, point: ISYS_MathPoint): boolean;`
- **distancetopoint**: `function distanceToPoint(polygon: TSYS_MathPolygonInput, point: ISYS_MathPoint): number;`
- **getbbox**: `function getBBox(polygon: TSYS_MathPolygonInput): ISYS_MathBBox;`
- **getcentroid**: `function getCentroid(polygon: TSYS_MathPolygonInput): ISYS_MathPoint;`
- **intersection**: `function intersection( 	polygon1: TSYS_MathPolygonInput, 	polygon2: TSYS_MathPolygonInput, ): TSYS_MathPolygonGroup;`
- **intersects**: `function intersects(polygon1: TSYS_MathPolygonInput, polygon2: TSYS_MathPolygonInput): boolean;`
- **rotate**: `function rotate( 	polygon: TSYS_MathPolygonInput, 	angle: number, 	centerX?: number, 	centerY?: number, ): Array<ISYS_MathPoint>;`
- **scale**: `function scale( 	polygon: TSYS_MathPolygonInput, 	scaleX: number, 	scaleY?: number, 	centerX?: number, 	centerY?: number, ): Array<ISYS_MathPoint>;`
- **subtract**: `function subtract( 	polygon1: TSYS_MathPolygonInput, 	polygon2: TSYS_MathPolygonInput, ): TSYS_MathPolygonGroup;`
- **translate**: `function translate(polygon: TSYS_MathPolygonInput, dx: number, dy: number): Array<ISYS_MathPoint>;`
- **union**: `function union( 	polygon1: TSYS_MathPolygonInput, 	polygon2: TSYS_MathPolygonInput, ): TSYS_MathPolygonGroup;`
- **xor**: `function xor( 	polygon1: TSYS_MathPolygonInput, 	polygon2: TSYS_MathPolygonInput, ): TSYS_MathPolygonGroup;`

---

## SYS_Message

System / message notification class

```typescript
class SYS_Message
```

- **removefollowmousetip**: `function removeFollowMouseTip(tip?: string): Promise<void>;`
- **showfollowmousetip**: `function showFollowMouseTip(tip: string, msTimeout?: number): Promise<void>;`
- **showtoastmessage**: `function showToastMessage( 	message: string, 	messageType?: ESYS_ToastMessageType, 	timer?: number, 	bottomPanel?: ESYS_BottomPanelTab, 	buttonTitle?: string, 	buttonCallbackFn?: string, ): void;`

---

## SYS_MessageBox

System / message box class

```typescript
class SYS_MessageBox
```

- **showconfirmationmessage**: `function showConfirmationMessage( 	content: string, 	title?: string, 	mainButtonTitle?: string, 	buttonTitle?: string, 	callbackFn?: (mainButtonClicked: boolean) => void, ): void;`
- **showinformationmessage**: `function showInformationMessage(content: string, title?: string, buttonTitle?: string): void;`

---

## SYS_MessageBus

System / message bus class

```typescript
class SYS_MessageBus
```

- **createprivatemessagebus**: `function createPrivateMessageBus(): void;`
- **publish**: `function publish(topic: string, message: any): void;`
- **publishpublic**: `function publishPublic(topic: string, message: any): void;`
- **pull**: `function pull(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **pullasync**: `function pullAsync(topic: string): Promise<any>;`
- **pullasyncpublic**: `function pullAsyncPublic(topic: string): Promise<any>;`
- **pullpublic**: `function pullPublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **push**: `function push(topic: string, message: any): void;`
- **pushpublic**: `function pushPublic(topic: string, message: any): void;`
- **removeprivatemessagebus**: `function removePrivateMessageBus(): void;`
- **rpccall**: `function rpcCall(topic: string, message?: any, timeout?: number): Promise<any>;`
- **rpccallpublic**: `function rpcCallPublic(topic: string, message?: any, timeout?: number): Promise<any>;`
- **rpcservice**: `function rpcService(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void;`
- **rpcservicepublic**: `function rpcServicePublic( 	topic: string, 	callbackFn: (...args: Array<any>) => any | Promise<any>, ): void;`
- **subscribe**: `function subscribe(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **subscribeonce**: `function subscribeOnce(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`
- **subscribeoncepublic**: `function subscribeOncePublic( 	topic: string, 	callbackFn: (message: any) => void, ): ISYS_MessageBusTask;`
- **subscribepublic**: `function subscribePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;`

---

## SYS_PanelControl

System / panel control class

```typescript
class SYS_PanelControl
```

- **closebottompanel**: `function closeBottomPanel(): void;`
- **closeleftpanel**: `function closeLeftPanel(): void;`
- **closerightpanel**: `function closeRightPanel(): void;`
- **isbottompanellocked**: `function isBottomPanelLocked(): Promise<boolean>;`
- **isleftpanellocked**: `function isLeftPanelLocked(): Promise<boolean>;`
- **isrightpanellocked**: `function isRightPanelLocked(): Promise<boolean>;`
- **openbottompanel**: `function openBottomPanel(tab?: ESYS_BottomPanelTab): void;`
- **openleftpanel**: `function openLeftPanel(tab?: ESYS_LeftPanelTab): void;`
- **openrightpanel**: `function openRightPanel(tab?: ESYS_RightPanelTab): void;`
- **togglebottompanellockstate**: `function toggleBottomPanelLockState(state?: boolean): void;`
- **toggleleftpanellockstate**: `function toggleLeftPanelLockState(state?: boolean): void;`
- **togglerightpanellockstate**: `function toggleRightPanelLockState(state?: boolean): void;`

---

## SYS_RightClickMenu

System / right-click menu class

```typescript
class SYS_RightClickMenu
```

- **changemenu**: `function changeMenu( 	menuId: string, 	menuItems: Array<ISYS_RightClickMenuItem | null>, ): Promise<void>;`

---

## SYS_Setting

System / settings class

```typescript
class SYS_Setting
```

- **getjlccolorsilkenabled**: `function getJLCColorSilkEnabled(): Promise<boolean>;`
- **restoredefault**: `function restoreDefault(): Promise<boolean>;`

---

## SYS_ShortcutKey

System / shortcut key class

```typescript
class SYS_ShortcutKey
```

- **get**: `function get(id: string): ISYS_ShortcutKeyDataWithUserDefinedShortcutKey | undefined;`
- **getall**: `function getAll(): Record<string, ISYS_ShortcutKeyDataWithUserDefinedShortcutKey>;`
- **getshortcutkeys**: `function getShortcutKeys( 	includeSystem?: boolean, ): Promise< 	Array<{ 		shortcutKey: TSYS_ShortcutKeys; 		title: string; 		documentType: Array<ESYS_ShortcutKeyEffectiveEditorRange>; 		scene: Array<ESYS_ShortcutKeyEffectiveEditorScene>; 	}> >;`
- **register**: `function register(id: string, props: ISYS_ShortcutKeyDataWithCallFn): boolean;`
- **registershortcutkey**: `function registerShortcutKey( 	shortcutKey: TSYS_ShortcutKeys, 	title: string, 	callbackFn: (shortcutKey: TSYS_ShortcutKeys) => void | Promise<void>, 	documentType?: Array<ESYS_ShortcutKeyEffectiveEditorRange>, 	scene?: Array<ESYS_ShortcutKeyEffectiveEditorScene>, ): Promise<boolean>;`
- **unregister**: `function unregister(id: string): boolean;`
- **unregistershortcutkey**: `function unregisterShortcutKey(shortcutKey: TSYS_ShortcutKeys): Promise<boolean>;`

---

## SYS_Storage

System / storage class

```typescript
class SYS_Storage
```

- **clearextensionalluserconfigs**: `function clearExtensionAllUserConfigs(): Promise<boolean>;`
- **deleteextensionuserconfig**: `function deleteExtensionUserConfig(key: string): Promise<boolean>;`
- **getextensionalluserconfigs**: `function getExtensionAllUserConfigs(): Record<string, any>;`
- **getextensionuserconfig**: `function getExtensionUserConfig(key: string): any | undefined;`
- **setextensionalluserconfigs**: `function setExtensionAllUserConfigs(configs: Record<string, any>): Promise<boolean>;`
- **setextensionuserconfig**: `function setExtensionUserConfig(key: string, value: any): Promise<boolean>;`

---

## SYS_Timer

System / timer class

```typescript
class SYS_Timer
```

- **clearintervaltimer**: `function clearIntervalTimer(id: string): boolean;`
- **cleartimeouttimer**: `function clearTimeoutTimer(id: string): boolean;`
- **setintervaltimer**: `function setIntervalTimer( 	id: string, 	timeout: number, 	callFn: (...args: any) => void, 	...args: any ): boolean;`
- **settimeouttimer**: `function setTimeoutTimer( 	id: string, 	timeout: number, 	callFn: (...args: any) => void, 	...args: any ): boolean;`

---

## SYS_ToastMessage

System / toast message class

```typescript
class SYS_ToastMessage
```

- **showmessage**: `function showMessage( 	message: string, 	messageType?: ESYS_ToastMessageType, 	timer?: number, 	bottomPanel?: ESYS_BottomPanelTab, 	buttonTitle?: string, 	buttonCallbackFn?: string, ): void;`

---

## SYS_Tool

System / tool class

```typescript
class SYS_Tool
```

- **netlistcomparison**: `function netlistComparison( 	netlist1: string | { projectUuid: string; documentUuid: string } | File, 	netlist2: string | { projectUuid: string; documentUuid: string } | File, ): Promise< 	Array<{ 		type: 'Net' | 'Component'; 		object: string; 		netlist1Name: Array<string>; 		netlist2Name: Array<string>; 	}> >;`
- **pcbcomparison**: `function pcbComparison( 	pcb1: string | { projectUuid: string; pcbUuid: string } | File, 	pcb2: string | { projectUuid: string; pcbUuid: string } | File, 	options?: { 		valUnit?: ESYS_Unit.MIL | ESYS_Unit.MILLIMETER | ESYS_Unit.INCH | ESYS_Unit.CENTIMETER; 		deviation?: number; 		comparisonSize?: number; 	}, ): Promise<ISYS_ComparisonResponse>;`
- **schematiccomparison**: `function schematicComparison( 	schematicUuid1: string, 	schematicUuid2: string, ): Promise<ISYS_ComparisonResponse>;`

---

## SYS_Unit

System / unit class

```typescript
class SYS_Unit
```

- **getfrontenddataunit**: `function getFrontendDataUnit(): Promise<ESYS_Unit | undefined>;`
- **inchtomil**: `function inchToMil(inch: number, numberOfDecimals?: number): number;`
- **inchtomm**: `function inchToMm(inch: number, numberOfDecimals?: number): number;`
- **miltoinch**: `function milToInch(mil: number, numberOfDecimals?: number): number;`
- **miltomm**: `function milToMm(mil: number, numberOfDecimals?: number): number;`
- **mmtoinch**: `function mmToInch(mm: number, numberOfDecimals?: number): number;`
- **mmtomil**: `function mmToMil(mm: number, numberOfDecimals?: number): number;`

---

## SYS_WebSocket

System / WebSocket class

```typescript
class SYS_WebSocket
```

- **close**: `function close(id: string, code?: number, reason?: string, extensionUuid?: string): void;`
- **register**: `function register( 	id: string, 	serviceUri: string, 	receiveMessageCallFn?: (event: MessageEvent<any>) => void | Promise<void>, 	connectedCallFn?: () => void | Promise<void>, 	protocols?: string | Array<string>, ): void;`
- **send**: `function send(id: string, data: string | Blob | BufferSource, extensionUuid?: string): void;`

---

## SYS_Window

System / window class

```typescript
class SYS_Window
```

- **addeventlistener**: `function addEventListener( 	type: ESYS_WindowEventType, 	listener: (ev: any) => any, 	options?: { capture?: boolean; once?: boolean; passive?: boolean; signal?: AbortSignal }, ): ISYS_WindowEventListenerRemovableObject | undefined;`
- **getcurrenttheme**: `function getCurrentTheme(): Promise<ESYS_Theme>;`
- **geturlanchor**: `function getUrlAnchor(): string;`
- **geturlparam**: `function getUrlParam(key: string): string | null;`
- **getviewportsize**: `function getViewportSize(): { width: number; height: number };`
- **hidestartpagequickstartitems**: `function hideStartPageQuickStartItems(items: Array<ESYS_StartPageQuickStartItem>): Promise<boolean>;`
- **hidestartpagesupportfloatbaritems**: `function hideStartPageSupportFloatBarItems(): Promise<boolean>;`
- **open**: `function open(url: string, target?: ESYS_WindowOpenTarget): void;`
- **openui**: `function openUI(uiName: string, args?: Record<string, any>): Promise<void>;`
- **removeeventlistener**: `function removeEventListener(removableObject: ISYS_WindowEventListenerRemovableObject): void;`
- **urlpushstate**: `function urlPushState(url: string): void;`
- **urlreplacestate**: `function urlReplaceState(url: string): void;`

---

