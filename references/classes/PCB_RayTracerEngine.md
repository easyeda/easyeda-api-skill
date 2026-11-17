# PCB\_RayTracerEngine class

PCB &amp; footprint / ray tracer engine class

## Signature

```typescript
class PCB_RayTracerEngine
```

## Remarks

Controls the docking and interaction of the ray tracer engine

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[addSceneElement(file)](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** 添加场景元素

</td></tr>
<tr><td>

[dispose()](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** Stop the ray tracer engine

</td></tr>
<tr><td>

[exportImage()](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** 导出当前画布光追渲染效果图片（PNG）

</td></tr>
<tr><td>

[exportPackage(preset)](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** 导出光追场景资源包

</td></tr>
<tr><td>

[getLightConfigurations(lightName)](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** Get the ray tracer light configurations

</td></tr>
<tr><td>

[getRenderConfigurations()](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** Get the ray tracer render configurations

</td></tr>
<tr><td>

[getSceneElements()](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** 获取当前所有场景元素

</td></tr>
<tr><td>

[importPackage(file)](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** 加载光追资源包

</td></tr>
<tr><td>

[init()](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** Initialize the ray tracer engine

</td></tr>
<tr><td>

[pauseRender()](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** 暂停光线追踪渲染

</td></tr>
<tr><td>

[removeSceneElement(id)](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** 移除场景元素

</td></tr>
<tr><td>

[setRenderConfigurations(configurations)](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** Set the ray tracer render configurations

</td></tr>
<tr><td>

[setSceneElementTransform(id, transform)](./PCB_RayTracerEngine.md)

</td><td>

</td><td>

**_(BETA)_** 修改场景元素变换参数

</td></tr>
</tbody></table>

---

## 方法详情

### addsceneelement

# PCB\_RayTracerEngine.addSceneElement() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

添加场景元素

## Signature

```typescript
function addSceneElement(file: Blob): Promise<IPCB_RayTracerSceneElement>;
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

Blob

</td><td>

obj 文件

</td></tr>
</tbody></table>

## Returns

Promise&lt;[IPCB\_RayTracerSceneElement](../interfaces/IPCB_RayTracerSceneElement.md)<!-- -->&gt;

新增的场景元素

## Remarks

ADD since EDA v4.1.79

### dispose

# PCB\_RayTracerEngine.dispose() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Stop the ray tracer engine

## Signature

```typescript
function dispose(): Promise<void>;
```

## Returns

Promise&lt;void&gt;

## Remarks

ADD since EDA v4.1.79

### exportimage

# PCB\_RayTracerEngine.exportImage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

导出当前画布光追渲染效果图片（PNG）

## Signature

```typescript
function exportImage(): Promise<Blob | null>;
```

## Returns

Promise&lt;Blob \| null&gt;

图片数据；无可导出光追帧时返回 `null`

## Remarks

光追未初始化或当前没有可导出的光追帧时返回 `null` ADD since EDA v4.1.79

## Example

```javascript
// 1. 初始化光追引擎并等待首帧渲染完成
await eda.pcb_RayTracerEngine.init();

// 2. 导出当前画布的光追渲染效果图，无可用帧时返回 null
const blob = await eda.pcb_RayTracerEngine.exportImage();
if (!blob) {
  console.log('说明：当前没有可导出的光追帧，请等待首帧渲染完成后再试');
  return;
}

// 3. 保存到本地磁盘
await eda.sys_FileSystem.saveFile(blob, 'raytracer.png');
console.log('已导出光追效果图，大小：', blob.size);
```

### exportpackage

# PCB\_RayTracerEngine.exportPackage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

导出光追场景资源包

## Signature

```typescript
function exportPackage(preset: 'geometry' | 'asset' | 'scene'): Promise<Blob>;
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

preset

</td><td>

'geometry' \| 'asset' \| 'scene'

</td><td>

导出档位，取值 `geometry` / `asset` / `scene`

</td></tr>
</tbody></table>

## Returns

Promise&lt;Blob&gt;

场景资源包 ZIP 数据

## Remarks

将当前光追场景按指定档位打包为 ZIP 数据，包含几何、材质与附属资源文件

支持的导出档位：

- `geometry`<!-- -->：几何包，包含主几何与材质索引 - `asset`<!-- -->：资源包，包含材质表、纹理与渲染参数 - `scene`<!-- -->：场景包，包含几何、材质、渲染参数与相机

返回的 ZIP 数据由调用方处理，例如通过 [saveFile](./SYS_FileSystem.md) 保存到本地 ADD since EDA v4.1.103

## Example

```javascript
// 1. 导出完整场景包（几何 + 材质 + 渲染参数 + 相机）
const blob = await eda.pcb_RayTracerEngine.exportPackage('scene');

// 2. 保存到本地磁盘，文件名由调用方指定
await eda.sys_FileSystem.saveFile(blob, 'raytracer-scene.zip');
console.log('场景资源包已导出，大小：', blob.size);
```

### getlightconfigurations

# PCB\_RayTracerEngine.getLightConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the ray tracer light configurations

## Signature

```typescript
function getLightConfigurations(lightName: string): Promise<any>;
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

lightName

</td><td>

string

</td><td>

</td></tr>
</tbody></table>

## Returns

Promise&lt;any&gt;

Light configuration

## Remarks

The [get ray tracer render configurations](./PCB_RayTracerEngine.md) API contains a light configuration. This API is used to get different light configurations

The configuration definition of this API is still in progress ADD since EDA v4.1.79

### getrenderconfigurations

# PCB\_RayTracerEngine.getRenderConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the ray tracer render configurations

## Signature

```typescript
function getRenderConfigurations(): Promise<IPCB_RayTracerRenderConfigurations>;
```

## Returns

Promise&lt;[IPCB\_RayTracerRenderConfigurations](../interfaces/IPCB_RayTracerRenderConfigurations.md)<!-- -->&gt;

Render configuration

## Remarks

The configuration definition of this API is still in progress ADD since EDA v4.1.79

### getsceneelements

# PCB\_RayTracerEngine.getSceneElements() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前所有场景元素

## Signature

```typescript
function getSceneElements(): Promise<IPCB_RayTracerSceneElement[]>;
```

## Returns

Promise&lt;[IPCB\_RayTracerSceneElement](../interfaces/IPCB_RayTracerSceneElement.md)<!-- -->\[\]&gt;

场景元素列表

## Remarks

ADD since EDA v4.1.79

### importpackage

# PCB\_RayTracerEngine.importPackage() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

加载光追资源包

## Signature

```typescript
function importPackage(file: Blob): Promise<void>;
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

Blob

</td><td>

资源包 ZIP 数据

</td></tr>
</tbody></table>

## Returns

Promise&lt;void&gt;

## Remarks

在光追渲染运行期间加载资源包，包内的材质表、纹理、背景与场景模型立即生效，无需重新初始化光追渲染

资源包需由 [exportPackage](./PCB_RayTracerEngine.md) 导出，或符合其目录结构与材质表格式 ADD since EDA v4.1.103

## Example

```javascript
// 1. 从远端获取资源包（本接口需启用扩展的外部交互权限）
const response = await eda.sys_ClientUrl.request('https://example.com/raytracer-scene.zip', 'GET');
const blob = await response.blob();

// 2. 加载资源包，材质表、纹理、背景与场景模型立即生效
await eda.pcb_RayTracerEngine.importPackage(blob);
console.log('资源包已加载：', blob.size);
```

### init

# PCB\_RayTracerEngine.init() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Initialize the ray tracer engine

## Signature

```typescript
function init(): Promise<void>;
```

## Returns

Promise&lt;void&gt;

## Remarks

headless / 无头环境下 `init()` 可能返回 `undefined`<!-- -->（不可用）； 可用性判定用 `init() === undefined`<!-- -->，3D 光追相关流程不要假定一定可用 ADD since EDA v4.1.79

### pauserender

# PCB\_RayTracerEngine.pauseRender() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

暂停光线追踪渲染

## Signature

```typescript
function pauseRender(): Promise<void>;
```

## Returns

Promise&lt;void&gt;

## Remarks

暂停后光线追踪引擎将停止继续渲染 ADD since EDA v4.1.79

### removesceneelement

# PCB\_RayTracerEngine.removeSceneElement() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

移除场景元素

## Signature

```typescript
function removeSceneElement(id: string): Promise<void>;
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

id

</td><td>

string

</td><td>

场景元素 ID

</td></tr>
</tbody></table>

## Returns

Promise&lt;void&gt;

## Remarks

ADD since EDA v4.1.79

### setrenderconfigurations

# PCB\_RayTracerEngine.setRenderConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the ray tracer render configurations

## Signature

```typescript
function setRenderConfigurations(configurations: IPCB_RayTracerRenderConfigurations): Promise<void>;
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

configurations

</td><td>

[IPCB\_RayTracerRenderConfigurations](../interfaces/IPCB_RayTracerRenderConfigurations.md)

</td><td>

Render configuration

</td></tr>
</tbody></table>

## Returns

Promise&lt;void&gt;

## Remarks

ADD since EDA v4.1.79

### setsceneelementtransform

# PCB\_RayTracerEngine.setSceneElementTransform() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

修改场景元素变换参数

## Signature

```typescript
function setSceneElementTransform(
	id: string,
	transform: IPCB_RayTracerSceneElementTransform,
): Promise<void>;
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

id

</td><td>

string

</td><td>

场景元素 ID

</td></tr>
<tr><td>

transform

</td><td>

[IPCB\_RayTracerSceneElementTransform](../interfaces/IPCB_RayTracerSceneElementTransform.md)

</td><td>

变换参数

</td></tr>
</tbody></table>

## Returns

Promise&lt;void&gt;

## Remarks

ADD since EDA v4.1.79
