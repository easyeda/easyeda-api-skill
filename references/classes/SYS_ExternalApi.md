# SYS\_ExternalApi class

外部接口注入管理类

## Signature

```typescript
class SYS_ExternalApi
```

## Remarks

提供扩展注入自己开发的上层接口的能力，供其他扩展、独立脚本与 runApi 调用；

- 支持命名冲突检测：多个扩展注册同名接口时，输出冲突警告日志，调用时默认走最早注册的那个； - 支持生命周期管理：扩展卸载时自动注销其注册的接口，其他扩展再次调用该接口将报错； - 支持注入 Help 元数据：注册时附带说明、参数、返回值、示例，供 [SYS\_Help](./SYS_Help.md) 渐进式披露

调用入口为沙盒内的 `external` 对象（Proxy 动态调用），注册 / 注销统一通过本类的 `register` / `unregister`

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[register(namespace, apiName, callFn, help)](./SYS_ExternalApi.md)

</td><td>

</td><td>

注册一个上层接口

</td></tr>
<tr><td>

[unregister(namespace, apiName)](./SYS_ExternalApi.md)

</td><td>

</td><td>

注销指定接口

</td></tr>
</tbody></table>

---

## 方法详情

### register

# SYS\_ExternalApi.register() method

注册一个上层接口

## Signature

```typescript
function register(
	namespace: string,
	apiName: string,
	callFn: (...args: any[]) => any | Promise<any>,
	help?: ISYS_ExternalApiHelp,
): void;
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

namespace

</td><td>

string

</td><td>

命名空间（如 `'component'`<!-- -->）

</td></tr>
<tr><td>

apiName

</td><td>

string

</td><td>

接口名（如 `'placeComponent'`<!-- -->）

</td></tr>
<tr><td>

callFn

</td><td>

(...args: any\[\]) =&gt; any \| Promise&lt;any&gt;

</td><td>

调用函数，接收任意参数，返回任意值或 Promise

</td></tr>
<tr><td>

help

</td><td>

[ISYS\_ExternalApiHelp](../interfaces/ISYS_ExternalApiHelp.md)

</td><td>

_(Optional)_ 可选 Help 元数据，供 `eda.sys_Help.help('external', namespace, apiName)` 查询

</td></tr>
</tbody></table>

## Returns

void

## Example

```javascript
// 注册一个「一键放置器件」的上层接口
eda.sys_ExternalApi.register(
	'component',
	'placeComponent',
	async (props) => {
		const device = await eda.lib_Device.search({ name: props.deviceName });
		await eda.sch_PrimitiveComponent.place(device[0].uuid, props.x, props.y);
		return { success: true, deviceUuid: device[0].uuid };
	},
	{
		title: '放置器件（一步完成）',
		description: '按器件名称查询并放置到原理图指定坐标',
		params: [
			{ name: 'deviceName', type: 'string', description: '器件名称', required: true },
			{ name: 'x', type: 'number', description: 'X 坐标', required: true },
			{ name: 'y', type: 'number', description: 'Y 坐标', required: true },
		],
		returns: { type: 'Promise<{success, deviceUuid}>', description: '放置结果与器件 UUID' },
	},
);

// 调用
await external.component.placeComponent({ deviceName: 'R0402', x: 100, y: 100 });
```

### unregister

# SYS\_ExternalApi.unregister() method

注销指定接口

## Signature

```typescript
function unregister(namespace: string, apiName: string): boolean;
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

namespace

</td><td>

string

</td><td>

命名空间

</td></tr>
<tr><td>

apiName

</td><td>

string

</td><td>

接口名

</td></tr>
</tbody></table>

## Returns

boolean

是否成功注销

## Example

```javascript
// 注销此前注册的接口
const removed = eda.sys_ExternalApi.unregister('component', 'placeComponent');
```
