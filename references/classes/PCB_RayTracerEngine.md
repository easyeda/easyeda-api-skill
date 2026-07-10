# PCB\_RayTracerEngine class

PCB &amp; 封装 / 光线追踪引擎类

## Signature

```typescript
declare class PCB_RayTracerEngine 
```

## Remarks

控制光线追踪引擎的对接和交互


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[dispose()](./PCB_RayTracerEngine.md)


</td><td>


</td><td>

**_(BETA)_** 停止光线追踪引擎


</td></tr>
<tr><td>

[getLightConfigurations(lightName)](./PCB_RayTracerEngine.md)


</td><td>


</td><td>

**_(BETA)_** 获取光线追踪光源配置


</td></tr>
<tr><td>

[getRenderConfigurations()](./PCB_RayTracerEngine.md)


</td><td>


</td><td>

**_(BETA)_** 获取光线追踪渲染配置


</td></tr>
<tr><td>

[init()](./PCB_RayTracerEngine.md)


</td><td>


</td><td>

**_(BETA)_** 初始化光线追踪引擎


</td></tr>
<tr><td>

[setRenderConfigurations(configurations)](./PCB_RayTracerEngine.md)


</td><td>


</td><td>

**_(BETA)_** 设置光线追踪渲染配置


</td></tr>
</tbody></table>

---

## 方法详情

### dispose

# PCB\_RayTracerEngine.dispose() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

停止光线追踪引擎

## Signature

```typescript
dispose(): Promise<void>;
```


## Returns

Promise&lt;void&gt;

## Remarks

ADD since EDA v4

### getlightconfigurations

# PCB\_RayTracerEngine.getLightConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取光线追踪光源配置

## Signature

```typescript
getLightConfigurations(lightName: string): Promise<any>;
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

光源配置

## Remarks

[获取光线追踪渲染配置](./PCB_RayTracerEngine.md) 接口中包含一种光源配置，本接口用于获取不同光源配置

本接口配置定义还在进行中

ADD since EDA v4

### getrenderconfigurations

# PCB\_RayTracerEngine.getRenderConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取光线追踪渲染配置

## Signature

```typescript
getRenderConfigurations(): Promise<any>;
```


## Returns

Promise&lt;any&gt;

渲染配置

## Remarks

本接口配置定义还在进行中

ADD since EDA v4

### init

# PCB\_RayTracerEngine.init() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

初始化光线追踪引擎

## Signature

```typescript
init(): Promise<void>;
```


## Returns

Promise&lt;void&gt;

## Remarks

ADD since EDA v4

### setrenderconfigurations

# PCB\_RayTracerEngine.setRenderConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置光线追踪渲染配置

## Signature

```typescript
setRenderConfigurations(configurations: any): Promise<void>;
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

any


</td><td>

渲染配置


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

## Remarks

本接口配置定义还在进行中

ADD since EDA v4
