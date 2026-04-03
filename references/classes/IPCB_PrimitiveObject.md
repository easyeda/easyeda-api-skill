# IPCB\_PrimitiveObject class

二进制内嵌对象图元

## 签名

```typescript
declare class IPCB_PrimitiveObject implements IPCB_Primitive 
```
**实现自：**[IPCB\_Primitive](../interfaces/IPCB_Primitive.md)

## 备注


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[done()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_BinaryData()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：二进制数据


</td></tr>
<tr><td>

[getState\_FileName()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：文件名


</td></tr>
<tr><td>

[getState\_Height()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：高


</td></tr>
<tr><td>

[getState\_Layer()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：层


</td></tr>
<tr><td>

[getState\_Mirror()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：是否水平镜像


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：是否锁定


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_Rotation()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：旋转角度


</td></tr>
<tr><td>

[getState\_TopLeftX()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：左上点 X


</td></tr>
<tr><td>

[getState\_TopLeftY()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：左上点 Y


</td></tr>
<tr><td>

[getState\_Width()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

获取属性状态：宽


</td></tr>
<tr><td>

[isAsync()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_BinaryData(binaryData)](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

设置属性状态：二进制数据


</td></tr>
<tr><td>

[setState\_FileName(fileName)](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

设置属性状态：文件名


</td></tr>
<tr><td>

[setState\_Height(height)](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

设置属性状态：高


</td></tr>
<tr><td>

[setState\_Layer(layer)](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：层


</td></tr>
<tr><td>

[setState\_Mirror(mirror)](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

设置属性状态：是否水平镜像


</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：是否锁定


</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

设置属性状态：旋转角度


</td></tr>
<tr><td>

[setState\_TopLeftX(topLeftX)](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

设置属性状态：左上点 X


</td></tr>
<tr><td>

[setState\_TopLeftY(topLeftY)](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

设置属性状态：左上点 Y


</td></tr>
<tr><td>

[setState\_Width(width)](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

设置属性状态：宽


</td></tr>
<tr><td>

[toAsync()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./IPCB_PrimitiveObject.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# IPCB\_PrimitiveObject.done() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将对图元的更改应用到画布

## 签名

```typescript
done(): Promise<IPCB_PrimitiveObject>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)<!-- -->&gt;

二进制内嵌对象图元对象

### getstate_binarydata

# IPCB\_PrimitiveObject.getState\_BinaryData() method

获取属性状态：二进制数据

## 签名

```typescript
getState_BinaryData(): string;
```


## 返回值

string

二进制数据

### getstate_filename

# IPCB\_PrimitiveObject.getState\_FileName() method

获取属性状态：文件名

## 签名

```typescript
getState_FileName(): string;
```


## 返回值

string

文件名

### getstate_height

# IPCB\_PrimitiveObject.getState\_Height() method

获取属性状态：高

## 签名

```typescript
getState_Height(): number;
```


## 返回值

number

高

### getstate_layer

# IPCB\_PrimitiveObject.getState\_Layer() method

获取属性状态：层

## 签名

```typescript
getState_Layer(): TPCB_LayersOfObject | undefined;
```


## 返回值

[TPCB\_LayersOfObject](../types/TPCB_LayersOfObject.md) \| undefined

层

### getstate_mirror

# IPCB\_PrimitiveObject.getState\_Mirror() method

获取属性状态：是否水平镜像

## 签名

```typescript
getState_Mirror(): boolean;
```


## 返回值

boolean

是否水平镜像

### getstate_primitiveid

# IPCB\_PrimitiveObject.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivelock

# IPCB\_PrimitiveObject.getState\_PrimitiveLock() method

获取属性状态：是否锁定

## 签名

```typescript
getState_PrimitiveLock(): boolean;
```


## 返回值

boolean

是否锁定

### getstate_primitivetype

# IPCB\_PrimitiveObject.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType;
```


## 返回值

[EPCB\_PrimitiveType](../enums/EPCB_PrimitiveType.md)

图元类型

### getstate_rotation

# IPCB\_PrimitiveObject.getState\_Rotation() method

获取属性状态：旋转角度

## 签名

```typescript
getState_Rotation(): number;
```


## 返回值

number

旋转角度

### getstate_topleftx

# IPCB\_PrimitiveObject.getState\_TopLeftX() method

获取属性状态：左上点 X

## 签名

```typescript
getState_TopLeftX(): number | undefined;
```


## 返回值

number \| undefined

左上点 X

### getstate_toplefty

# IPCB\_PrimitiveObject.getState\_TopLeftY() method

获取属性状态：左上点 Y

## 签名

```typescript
getState_TopLeftY(): number | undefined;
```


## 返回值

number \| undefined

左上点 Y

### getstate_width

# IPCB\_PrimitiveObject.getState\_Width() method

获取属性状态：宽

## 签名

```typescript
getState_Width(): number;
```


## 返回值

number

宽

### isasync

# IPCB\_PrimitiveObject.isAsync() method

查询图元是否为异步图元

## 签名

```typescript
isAsync(): boolean;
```


## 返回值

boolean

是否为异步图元

### reset

# IPCB\_PrimitiveObject.reset() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将异步图元重置为当前画布状态

## 签名

```typescript
reset(): Promise<IPCB_PrimitiveObject>;
```


## 返回值

Promise&lt;[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)<!-- -->&gt;

二进制内嵌对象图元对象

### setstate_binarydata

# IPCB\_PrimitiveObject.setState\_BinaryData() method

设置属性状态：二进制数据

## 签名

```typescript
setState_BinaryData(binaryData: string): IPCB_PrimitiveObject;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

binaryData


</td><td>

string


</td><td>

二进制数据


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_filename

# IPCB\_PrimitiveObject.setState\_FileName() method

设置属性状态：文件名

## 签名

```typescript
setState_FileName(fileName: string): IPCB_PrimitiveObject;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

fileName


</td><td>

string


</td><td>

文件名


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_height

# IPCB\_PrimitiveObject.setState\_Height() method

设置属性状态：高

## 签名

```typescript
setState_Height(height: number): IPCB_PrimitiveObject;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

height


</td><td>

number


</td><td>

高


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_layer

# IPCB\_PrimitiveObject.setState\_Layer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：层

## 签名

```typescript
setState_Layer(layer: TPCB_LayersOfObject): IPCB_PrimitiveObject;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

layer


</td><td>

[TPCB\_LayersOfObject](../types/TPCB_LayersOfObject.md)


</td><td>

层


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_mirror

# IPCB\_PrimitiveObject.setState\_Mirror() method

设置属性状态：是否水平镜像

## 签名

```typescript
setState_Mirror(mirror: boolean): IPCB_PrimitiveObject;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

mirror


</td><td>

boolean


</td><td>

是否水平镜像


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_primitivelock

# IPCB\_PrimitiveObject.setState\_PrimitiveLock() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：是否锁定

## 签名

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveObject;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

primitiveLock


</td><td>

boolean


</td><td>

是否锁定


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_rotation

# IPCB\_PrimitiveObject.setState\_Rotation() method

设置属性状态：旋转角度

## 签名

```typescript
setState_Rotation(rotation: number): IPCB_PrimitiveObject;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

rotation


</td><td>

number


</td><td>

旋转角度


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_topleftx

# IPCB\_PrimitiveObject.setState\_TopLeftX() method

设置属性状态：左上点 X

## 签名

```typescript
setState_TopLeftX(topLeftX: number): IPCB_PrimitiveObject;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

topLeftX


</td><td>

number


</td><td>

左上点 X


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_toplefty

# IPCB\_PrimitiveObject.setState\_TopLeftY() method

设置属性状态：左上点 Y

## 签名

```typescript
setState_TopLeftY(topLeftY: number): IPCB_PrimitiveObject;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

topLeftY


</td><td>

number


</td><td>

左上点 Y


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象

### setstate_width

# IPCB\_PrimitiveObject.setState\_Width() method

设置属性状态：宽

## 签名

```typescript
setState_Width(width: number): IPCB_PrimitiveObject;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

width


</td><td>

number


</td><td>

宽


</td></tr>
</tbody></table>



## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象

### toasync

# IPCB\_PrimitiveObject.toAsync() method

将图元转换为异步图元

## 签名

```typescript
toAsync(): IPCB_PrimitiveObject;
```


## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象

### tosync

# IPCB\_PrimitiveObject.toSync() method

将图元转换为同步图元

## 签名

```typescript
toSync(): IPCB_PrimitiveObject;
```


## 返回值

[IPCB\_PrimitiveObject](./IPCB_PrimitiveObject.md)

二进制内嵌对象图元对象
