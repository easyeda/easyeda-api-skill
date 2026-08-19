# ISCH\_PrimitiveObject class

二进制内嵌对象图元

## Signature

```typescript
export class ISCH_PrimitiveObject implements ISCH_Primitive 
```
**Implements:** [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

## Remarks


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[done()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_Content()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：对象内容


</td></tr>
<tr><td>

[getState\_FileName()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：文件名称


</td></tr>
<tr><td>

[getState\_Height()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：高度


</td></tr>
<tr><td>

[getState\_Mirror()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：是否镜像


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_Rotation()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：旋转角度


</td></tr>
<tr><td>

[getState\_StartX()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：坐标 X


</td></tr>
<tr><td>

[getState\_StartY()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：坐标 Y


</td></tr>
<tr><td>

[getState\_Width()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：宽度


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_Content(content)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：对象内容


</td></tr>
<tr><td>

[setState\_FileName(fileName)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：文件名称


</td></tr>
<tr><td>

[setState\_Height(height)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：高度


</td></tr>
<tr><td>

[setState\_Mirror(mirror)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否镜像


</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：旋转角度


</td></tr>
<tr><td>

[setState\_StartX(startX)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：起点坐标 X


</td></tr>
<tr><td>

[setState\_StartY(startY)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：起点坐标 Y


</td></tr>
<tr><td>

[setState\_Width(width)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：宽度


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveObject.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
public done(): Promise<ISCH_PrimitiveObject>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)<!-- -->&gt;

二进制内嵌对象图元对象

### getstate_content

# ISCH\_PrimitiveObject.getState\_Content() method

获取属性状态：对象内容

## Signature

```typescript
public getState_Content(): File | string;
```


## Returns

File \| string

对象内容

### getstate_filename

# ISCH\_PrimitiveObject.getState\_FileName() method

获取属性状态：文件名称

## Signature

```typescript
public getState_FileName(): string;
```


## Returns

string

文件名称

### getstate_height

# ISCH\_PrimitiveObject.getState\_Height() method

获取属性状态：高度

## Signature

```typescript
public getState_Height(): number;
```


## Returns

number

高度

### getstate_mirror

# ISCH\_PrimitiveObject.getState\_Mirror() method

获取属性状态：是否镜像

## Signature

```typescript
public getState_Mirror(): boolean;
```


## Returns

boolean

是否镜像

### getstate_primitiveid

# ISCH\_PrimitiveObject.getState\_PrimitiveId() method

获取属性状态：图元 ID

## Signature

```typescript
public getState_PrimitiveId(): string;
```


## Returns

string

图元 ID

### getstate_primitivetype

# ISCH\_PrimitiveObject.getState\_PrimitiveType() method

获取属性状态：图元类型

## Signature

```typescript
public getState_PrimitiveType(): ESCH_PrimitiveType;
```


## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

图元类型

### getstate_rotation

# ISCH\_PrimitiveObject.getState\_Rotation() method

获取属性状态：旋转角度

## Signature

```typescript
public getState_Rotation(): number;
```


## Returns

number

旋转角度

### getstate_startx

# ISCH\_PrimitiveObject.getState\_StartX() method

获取属性状态：坐标 X

## Signature

```typescript
public getState_StartX(): number;
```


## Returns

number

坐标 X

### getstate_starty

# ISCH\_PrimitiveObject.getState\_StartY() method

获取属性状态：坐标 Y

## Signature

```typescript
public getState_StartY(): number;
```


## Returns

number

坐标 Y

### getstate_width

# ISCH\_PrimitiveObject.getState\_Width() method

获取属性状态：宽度

## Signature

```typescript
public getState_Width(): number;
```


## Returns

number

宽度

### isasync

# ISCH\_PrimitiveObject.isAsync() method

查询图元是否为异步图元

## Signature

```typescript
public isAsync(): boolean;
```


## Returns

boolean

是否为异步图元

### reset

# ISCH\_PrimitiveObject.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
public reset(): Promise<ISCH_PrimitiveObject>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)<!-- -->&gt;

二进制内嵌对象图元对象

### setstate_content

# ISCH\_PrimitiveObject.setState\_Content() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：对象内容

## Signature

```typescript
public setState_Content(content: File | string): ISCH_PrimitiveObject;
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

content


</td><td>

File \| string


</td><td>

对象内容


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_filename

# ISCH\_PrimitiveObject.setState\_FileName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：文件名称

## Signature

```typescript
public setState_FileName(fileName: string): ISCH_PrimitiveObject;
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

fileName


</td><td>

string


</td><td>

文件名称


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_height

# ISCH\_PrimitiveObject.setState\_Height() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：高度

## Signature

```typescript
public setState_Height(height: number): ISCH_PrimitiveObject;
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

height


</td><td>

number


</td><td>

高度


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_mirror

# ISCH\_PrimitiveObject.setState\_Mirror() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：是否镜像

## Signature

```typescript
public setState_Mirror(mirror: boolean): ISCH_PrimitiveObject;
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

mirror


</td><td>

boolean


</td><td>

是否镜像


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_rotation

# ISCH\_PrimitiveObject.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：旋转角度

## Signature

```typescript
public setState_Rotation(rotation: number): ISCH_PrimitiveObject;
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

rotation


</td><td>

number


</td><td>

旋转角度


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_startx

# ISCH\_PrimitiveObject.setState\_StartX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：起点坐标 X

## Signature

```typescript
public setState_StartX(startX: number): ISCH_PrimitiveObject;
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

startX


</td><td>

number


</td><td>

起点坐标 X


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_starty

# ISCH\_PrimitiveObject.setState\_StartY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：起点坐标 Y

## Signature

```typescript
public setState_StartY(startY: number): ISCH_PrimitiveObject;
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

startY


</td><td>

number


</td><td>

起点坐标 Y


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_width

# ISCH\_PrimitiveObject.setState\_Width() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

设置属性状态：宽度

## Signature

```typescript
public setState_Width(width: number): ISCH_PrimitiveObject;
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

width


</td><td>

number


</td><td>

宽度


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

二进制内嵌对象图元对象

### toasync

# ISCH\_PrimitiveObject.toAsync() method

将图元转换为异步图元

## Signature

```typescript
public toAsync(): ISCH_PrimitiveObject;
```


## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

二进制内嵌对象图元对象

### tosync

# ISCH\_PrimitiveObject.toSync() method

将图元转换为同步图元

## Signature

```typescript
public toSync(): ISCH_PrimitiveObject;
```


## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

二进制内嵌对象图元对象
