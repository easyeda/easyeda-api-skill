# PCB\_ImageTool class

PCB 图片工具类

## Signature

```typescript
class PCB_ImageTool
```

## Remarks

ADD since EDA v5

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[processImage(file, options)](./PCB_ImageTool.md)

</td><td>

</td><td>

**_(BETA)_** 选图处理门面（弹窗内重选图片：校验/压缩/读尺寸/预览 dataURL 全由服务端完成）

</td></tr>
<tr><td>

[runInsertImageCommand()](./PCB_ImageTool.md)

</td><td>

</td><td>

**_(BETA)_** 运行系统插入图片命令（扩展快捷键桥接）

</td></tr>
<tr><td>

[startPlaceTrueColorPicture(options)](./PCB_ImageTool.md)

</td><td>

</td><td>

**_(BETA)_** 开始放置真彩图片（权限校验 → 图片审核 → 内核上传 → 模板注册 → 触发放置）

</td></tr>
<tr><td>

[startPlaceVectorImage(options)](./PCB_ImageTool.md)

</td><td>

</td><td>

**_(BETA)_** 开始放置矢量图片（将描摹好的路径交给内核，触发十字光标放置）

</td></tr>
</tbody></table>

---

## 方法详情

### processimage

# PCB\_ImageTool.processImage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> 临时接口（插入图片 PCB 迁移打通流程用）：等统一放置接口重构落地后删除替换，请尽快迁移，勿在新功能中继续依赖

选图处理门面（弹窗内重选图片：校验/压缩/读尺寸/预览 dataURL 全由服务端完成）

## Signature

```typescript
function processImage(
	file: File,
	options?: { maxBytes?: number; acceptableBytes?: number },
): Promise<{
	file: File;
	dataURL: string;
	width: number;
	height: number;
	actualFormat: string;
	msg: string;
}>;
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

file

</td><td>

File

</td><td>

弹窗内重选 `openReadFileDialog` 返回的 File

</td></tr>
<tr><td>

options

</td><td>

\{ maxBytes?: number; acceptableBytes?: number \}

</td><td>

_(Optional)_ .acceptableBytes - 可接受大小（超过则压缩），默认 2M

</td></tr>
</tbody></table>

## Returns

Promise&lt;{ file: File; dataURL: string; width: number; height: number; actualFormat: string; msg: string; }&gt;

处理结果：`file` 压缩后文件；`dataURL` 预览图 dataURL（decode 失败为空字符串）；`width`<!-- -->/`height` 原始自然尺寸；`actualFormat` 原图实际格式（magic bytes 探测，识别失败为空串）；`msg` 提示消息

## Remarks

注意：`msg` 仅作为提示文本返回，\*\*服务端已内部弹出 ToastMsg\*\*（`getImageInfoByFileWithProgressTip` 内部 toast）， 扩展侧\*\*无需也不应\*\*再对 `msg` 调用 `showMessage`<!-- -->，否则会双弹；仅当扩展需要自绘提示时才消费该字段。 ADD since EDA v5

## Example

```javascript
// 弹窗内重选图片：选择 → 处理 → 更新预览（提示已由服务端 toast，此处不重复弹）
const file = await eda.sys_FileSystem.openReadFileDialog(['.png', '.jpg']);
if (!file) {
  return;
}
const res = await eda.pcb_ImageTool.processImage({ file });
if (res.dataURL) {
  // 更新预览：res.dataURL（图）、res.width/res.height（原始尺寸）
  console.log('图片已就绪：', res.file.name, res.width, res.height);
}
```

### runinsertimagecommand

# PCB\_ImageTool.runInsertImageCommand() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> 临时接口，等待统一放置接口机制落地后替换

运行系统插入图片命令（扩展快捷键桥接）

## Signature

```typescript
function runInsertImageCommand(): Promise<boolean>;
```

## Returns

Promise&lt;boolean&gt;

命令是否已派发

## Remarks

与工具栏按钮/系统菜单同走 `doCommand('insertImage')`<!-- -->，由宿主按当前文档类型路由： SCH/符号/仿真/面板 → 旧直接放置流程；PCB/封装 → 扩展弹窗（publishInsertImageEvent → 扩展 addImageEventListener）。 ADD since EDA v5

### startplacetruecolorpicture

# PCB\_ImageTool.startPlaceTrueColorPicture() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> 临时接口（插入图片 PCB 迁移打通流程用）：等统一放置接口重构落地后删除替换，请尽快迁移，勿在新功能中继续依赖

开始放置真彩图片（权限校验 → 图片审核 → 内核上传 → 模板注册 → 触发放置）

## Signature

```typescript
function startPlaceTrueColorPicture(options: {
	imageBlob: Blob;
	width: number;
	height: number;
	unit?: 'mm' | 'mil';
	fileName: string;
}): Promise<boolean>;
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

{ imageBlob: Blob; width: number; height: number; unit?: 'mm' \| 'mil'; fileName: string }

</td><td>

.fileName - 文件名

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

放置工具是否成功触发（权限未过/审核未过/导入失败返回 false）

## Remarks

ADD since EDA v5

## Example

```javascript
// 放置真彩图片（压缩在选图阶段已完成）
const ok = await eda.pcb_ImageTool.startPlaceTrueColorPicture({
	imageBlob: file,
	width: 50,
	height: 30,
	unit: 'mm',
	fileName: 'photo.png',
});
console.log('真彩放置已触发：', ok);
```

### startplacevectorimage

# PCB\_ImageTool.startPlaceVectorImage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> 临时接口（插入图片 PCB 迁移打通流程用）：等统一放置接口重构落地后删除替换，请尽快迁移，勿在新功能中继续依赖

开始放置矢量图片（将描摹好的路径交给内核，触发十字光标放置）

## Signature

```typescript
function startPlaceVectorImage(options: {
	path: string;
	width: number;
	height: number;
	unit?: 'mm' | 'mil';
}): Promise<boolean>;
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

{ path: string; width: number; height: number; unit?: 'mm' \| 'mil' }

</td><td>

.unit - 单位，默认 `mm`

</td></tr>
</tbody></table>

## Returns

Promise&lt;boolean&gt;

放置工具是否成功触发

## Remarks

ADD since EDA v5

## Example

```javascript
// 1. 描摹图片得到矢量路径
const traced = await eda.pcb_MathPolygon.traceImage({ imageBlob, quality: 'high' });
if (!traced) {
  console.log('空描摹：无图可放置');
  return;
}

// 2. 触发放置（用户点哪放哪）
const ok = await eda.pcb_ImageTool.startPlaceVectorImage({
  path: traced.path,
  width: 50,
  height: 30,
  unit: 'mm',
});
console.log('矢量放置已触发：', ok);
```
