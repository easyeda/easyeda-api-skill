# ISCH\_PrimitivePin class

引脚图元

## 签名

```typescript
declare class ISCH_PrimitivePin implements ISCH_Primitive 
```
**实现自：**[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

## 备注

引脚图元仅符号编辑器可用，在原理图图页内，关联到符号的引脚被称为 [器件引脚图元](./ISCH_PrimitiveComponentPin.md)


## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[async](./ISCH_PrimitivePin.md)


</td><td>

`protected`


</td><td>

boolean


</td><td>

异步


</td></tr>
<tr><td>

[pinColor](./ISCH_PrimitivePin.md)


</td><td>

`protected`


</td><td>

string \| null


</td><td>

引脚颜色


</td></tr>
<tr><td>

[pinLength](./ISCH_PrimitivePin.md)


</td><td>

`protected`


</td><td>

number


</td><td>

引脚长度


</td></tr>
<tr><td>

[pinName](./ISCH_PrimitivePin.md)


</td><td>

`protected`


</td><td>

string


</td><td>

引脚名称


</td></tr>
<tr><td>

[pinNumber](./ISCH_PrimitivePin.md)


</td><td>

`protected`


</td><td>

string


</td><td>

引脚编号


</td></tr>
<tr><td>

[pinShape](./ISCH_PrimitivePin.md)


</td><td>

`protected`


</td><td>

[ESCH\_PrimitivePinShape](../enums/ESCH_PrimitivePinShape.md)


</td><td>

引脚形状


</td></tr>
<tr><td>

[pinType](./ISCH_PrimitivePin.md)


</td><td>

`protected`


</td><td>

[ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)


</td><td>

引脚类型


</td></tr>
<tr><td>

[primitiveId?](./ISCH_PrimitivePin.md)


</td><td>

`protected`


</td><td>

string


</td><td>

_（可选）_ 图元 ID


</td></tr>
<tr><td>

[primitiveType](./ISCH_PrimitivePin.md)


</td><td>

`protected`

`readonly`


</td><td>

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)


</td><td>

图元类型


</td></tr>
<tr><td>

[rotation](./ISCH_PrimitivePin.md)


</td><td>

`protected`


</td><td>

number


</td><td>

旋转角度


</td></tr>
<tr><td>

[x](./ISCH_PrimitivePin.md)


</td><td>

`protected`


</td><td>

number


</td><td>

坐标 X


</td></tr>
<tr><td>

[y](./ISCH_PrimitivePin.md)


</td><td>

`protected`


</td><td>

number


</td><td>

坐标 Y


</td></tr>
</tbody></table>

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[done()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_OtherProperty()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：其它参数


</td></tr>
<tr><td>

[getState\_PinColor()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：引脚颜色


</td></tr>
<tr><td>

[getState\_PinLength()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：引脚长度


</td></tr>
<tr><td>

[getState\_PinName()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：引脚名称


</td></tr>
<tr><td>

[getState\_PinNumber()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：引脚编号


</td></tr>
<tr><td>

[getState\_PinShape()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：引脚形状


</td></tr>
<tr><td>

[getState\_pinType()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：引脚类型


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[getState\_Rotation()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：旋转角度


</td></tr>
<tr><td>

[getState\_X()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：坐标 X


</td></tr>
<tr><td>

[getState\_Y()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

获取属性状态：坐标 Y


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
<tr><td>

[setState\_OtherProperty(otherProperty)](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：其它参数


</td></tr>
<tr><td>

[setState\_PinColor(pinColor)](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：引脚颜色


</td></tr>
<tr><td>

[setState\_PinLength(pinLength)](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：引脚长度


</td></tr>
<tr><td>

[setState\_PinName(pinName)](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：引脚名称


</td></tr>
<tr><td>

[setState\_PinNumber(pinNumber)](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：引脚编号


</td></tr>
<tr><td>

[setState\_PinShape(pinShape)](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：引脚形状


</td></tr>
<tr><td>

[setState\_PinType(pinType)](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：引脚类型


</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：旋转角度


</td></tr>
<tr><td>

[setState\_X(x)](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标 X


</td></tr>
<tr><td>

[setState\_Y(y)](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：坐标 Y


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitivePin.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 属性详情

### async

# ISCH\_PrimitivePin.async property

异步

## 签名

```typescript
protected async: boolean;
```

### pincolor

# ISCH\_PrimitivePin.pinColor property

引脚颜色

## 签名

```typescript
protected pinColor: string | null;
```

### pinlength

# ISCH\_PrimitivePin.pinLength property

引脚长度

## 签名

```typescript
protected pinLength: number;
```

### pinname

# ISCH\_PrimitivePin.pinName property

引脚名称

## 签名

```typescript
protected pinName: string;
```

### pinnumber

# ISCH\_PrimitivePin.pinNumber property

引脚编号

## 签名

```typescript
protected pinNumber: string;
```

### pinshape

# ISCH\_PrimitivePin.pinShape property

引脚形状

## 签名

```typescript
protected pinShape: ESCH_PrimitivePinShape;
```

### pintype

# ISCH\_PrimitivePin.pinType property

引脚类型

## 签名

```typescript
protected pinType: ESCH_PrimitivePinType;
```

### primitiveid

# ISCH\_PrimitivePin.primitiveId property

图元 ID

## 签名

```typescript
protected primitiveId?: string;
```

### primitivetype

# ISCH\_PrimitivePin.primitiveType property

图元类型

## 签名

```typescript
protected readonly primitiveType: ESCH_PrimitiveType;
```

### rotation

# ISCH\_PrimitivePin.rotation property

旋转角度

## 签名

```typescript
protected rotation: number;
```

### x

# ISCH\_PrimitivePin.x property

坐标 X

## 签名

```typescript
protected x: number;
```

### y

# ISCH\_PrimitivePin.y property

坐标 Y

## 签名

```typescript
protected y: number;
```


---

## 方法详情

### done

# ISCH\_PrimitivePin.done() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将对图元的更改应用到画布

## 签名

```typescript
done(): Promise<ISCH_PrimitivePin>;
```


## 返回值

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)<!-- -->&gt;

引脚图元对象

### getstate_otherproperty

# ISCH\_PrimitivePin.getState\_OtherProperty() method

获取属性状态：其它参数

## 签名

```typescript
getState_OtherProperty(): {
        [key: string]: string | number | boolean;
    } | undefined;
```


## 返回值

{ \[key: string\]: string \| number \| boolean; } \| undefined

其它参数

### getstate_pincolor

# ISCH\_PrimitivePin.getState\_PinColor() method

获取属性状态：引脚颜色

## 签名

```typescript
getState_PinColor(): string | null;
```


## 返回值

string \| null

引脚颜色

### getstate_pinlength

# ISCH\_PrimitivePin.getState\_PinLength() method

获取属性状态：引脚长度

## 签名

```typescript
getState_PinLength(): number;
```


## 返回值

number

引脚长度

### getstate_pinname

# ISCH\_PrimitivePin.getState\_PinName() method

获取属性状态：引脚名称

## 签名

```typescript
getState_PinName(): string;
```


## 返回值

string

引脚名称

### getstate_pinnumber

# ISCH\_PrimitivePin.getState\_PinNumber() method

获取属性状态：引脚编号

## 签名

```typescript
getState_PinNumber(): string;
```


## 返回值

string

引脚编号

### getstate_pinshape

# ISCH\_PrimitivePin.getState\_PinShape() method

获取属性状态：引脚形状

## 签名

```typescript
getState_PinShape(): ESCH_PrimitivePinShape;
```


## 返回值

[ESCH\_PrimitivePinShape](../enums/ESCH_PrimitivePinShape.md)

引脚形状

### getstate_pintype

# ISCH\_PrimitivePin.getState\_pinType() method

获取属性状态：引脚类型

## 签名

```typescript
getState_pinType(): ESCH_PrimitivePinType;
```


## 返回值

[ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)

引脚类型

### getstate_primitiveid

# ISCH\_PrimitivePin.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivetype

# ISCH\_PrimitivePin.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): ESCH_PrimitiveType;
```


## 返回值

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

图元类型

### getstate_rotation

# ISCH\_PrimitivePin.getState\_Rotation() method

获取属性状态：旋转角度

## 签名

```typescript
getState_Rotation(): number;
```


## 返回值

number

旋转角度

### getstate_x

# ISCH\_PrimitivePin.getState\_X() method

获取属性状态：坐标 X

## 签名

```typescript
getState_X(): number;
```


## 返回值

number

坐标 X

### getstate_y

# ISCH\_PrimitivePin.getState\_Y() method

获取属性状态：坐标 Y

## 签名

```typescript
getState_Y(): number;
```


## 返回值

number

坐标 Y

### isasync

# ISCH\_PrimitivePin.isAsync() method

查询图元是否为异步图元

## 签名

```typescript
isAsync(): boolean;
```


## 返回值

boolean

是否为异步图元

### reset

# ISCH\_PrimitivePin.reset() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将异步图元重置为当前画布状态

## 签名

```typescript
reset(): Promise<ISCH_PrimitivePin>;
```


## 返回值

Promise&lt;[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)<!-- -->&gt;

引脚图元对象

### setstate_otherproperty

# ISCH\_PrimitivePin.setState\_OtherProperty() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：其它参数

## 签名

```typescript
setState_OtherProperty(otherProperty: {
        [key: string]: string | number | boolean;
    }): ISCH_PrimitivePin;
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

otherProperty


</td><td>

\{ \[key: string\]: string \| number \| boolean; \}


</td><td>

其它参数


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象

### setstate_pincolor

# ISCH\_PrimitivePin.setState\_PinColor() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：引脚颜色

## 签名

```typescript
setState_PinColor(pinColor: string | null): ISCH_PrimitivePin;
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

pinColor


</td><td>

string \| null


</td><td>

引脚颜色


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象

### setstate_pinlength

# ISCH\_PrimitivePin.setState\_PinLength() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：引脚长度

## 签名

```typescript
setState_PinLength(pinLength: number): ISCH_PrimitivePin;
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

pinLength


</td><td>

number


</td><td>

引脚长度


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象

### setstate_pinname

# ISCH\_PrimitivePin.setState\_PinName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：引脚名称

## 签名

```typescript
setState_PinName(pinName: string): ISCH_PrimitivePin;
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

pinName


</td><td>

string


</td><td>

引脚名称


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象

### setstate_pinnumber

# ISCH\_PrimitivePin.setState\_PinNumber() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：引脚编号

## 签名

```typescript
setState_PinNumber(pinNumber: string): ISCH_PrimitivePin;
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

pinNumber


</td><td>

string


</td><td>

引脚编号


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象

### setstate_pinshape

# ISCH\_PrimitivePin.setState\_PinShape() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：引脚形状

## 签名

```typescript
setState_PinShape(pinShape: ESCH_PrimitivePinShape): ISCH_PrimitivePin;
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

pinShape


</td><td>

[ESCH\_PrimitivePinShape](../enums/ESCH_PrimitivePinShape.md)


</td><td>

引脚形状


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象

### setstate_pintype

# ISCH\_PrimitivePin.setState\_PinType() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：引脚类型

## 签名

```typescript
setState_PinType(pinType: ESCH_PrimitivePinType): ISCH_PrimitivePin;
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

pinType


</td><td>

[ESCH\_PrimitivePinType](../enums/ESCH_PrimitivePinType.md)


</td><td>

引脚类型


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象

### setstate_rotation

# ISCH\_PrimitivePin.setState\_Rotation() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：旋转角度

## 签名

```typescript
setState_Rotation(rotation: number): ISCH_PrimitivePin;
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

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象

### setstate_x

# ISCH\_PrimitivePin.setState\_X() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：坐标 X

## 签名

```typescript
setState_X(x: number): ISCH_PrimitivePin;
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

x


</td><td>

number


</td><td>

坐标 X


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象

### setstate_y

# ISCH\_PrimitivePin.setState\_Y() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：坐标 Y

## 签名

```typescript
setState_Y(y: number): ISCH_PrimitivePin;
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

y


</td><td>

number


</td><td>

坐标 Y


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象

### toasync

# ISCH\_PrimitivePin.toAsync() method

将图元转换为异步图元

## 签名

```typescript
toAsync(): ISCH_PrimitivePin;
```


## 返回值

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象

### tosync

# ISCH\_PrimitivePin.toSync() method

将图元转换为同步图元

## 签名

```typescript
toSync(): ISCH_PrimitivePin;
```


## 返回值

[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

引脚图元对象
