# PCB\_RayTracerEngine class

PCB &amp; footprint / ray tracer engine class

## Signature

```typescript
export class PCB_RayTracerEngine 
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

[dispose()](./PCB_RayTracerEngine.md)


</td><td>


</td><td>

**_(BETA)_** Stop the ray tracer engine


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

[init()](./PCB_RayTracerEngine.md)


</td><td>


</td><td>

**_(BETA)_** Initialize the ray tracer engine


</td></tr>
<tr><td>

[setRenderConfigurations(configurations)](./PCB_RayTracerEngine.md)


</td><td>


</td><td>

**_(BETA)_** Set the ray tracer render configurations


</td></tr>
</tbody></table>

---

## 方法详情

### dispose

# PCB\_RayTracerEngine.dispose() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Stop the ray tracer engine

## Signature

```typescript
public dispose(): Promise<void>;
```


## Returns

Promise&lt;void&gt;

## Remarks

ADD since EDA v4

### getlightconfigurations

# PCB\_RayTracerEngine.getLightConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the ray tracer light configurations

## Signature

```typescript
public getLightConfigurations(lightName: string): Promise<any>;
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

The configuration definition of this API is still in progress ADD since EDA v4

### getrenderconfigurations

# PCB\_RayTracerEngine.getRenderConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get the ray tracer render configurations

## Signature

```typescript
public getRenderConfigurations(): Promise<any>;
```


## Returns

Promise&lt;any&gt;

Render configuration

## Remarks

The configuration definition of this API is still in progress ADD since EDA v4

### init

# PCB\_RayTracerEngine.init() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Initialize the ray tracer engine

## Signature

```typescript
public init(): Promise<void>;
```


## Returns

Promise&lt;void&gt;

## Remarks

ADD since EDA v4

### setrenderconfigurations

# PCB\_RayTracerEngine.setRenderConfigurations() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the ray tracer render configurations

## Signature

```typescript
public setRenderConfigurations(configurations: any): Promise<void>;
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

Render configuration


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

## Remarks

The configuration definition of this API is still in progress ADD since EDA v4
