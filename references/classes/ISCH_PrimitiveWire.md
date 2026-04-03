# ISCH\_PrimitiveWire class

导线图元

## 签名

```typescript
declare class ISCH_PrimitiveWire implements ISCH_Primitive 
```
**实现自：**[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

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

[done()](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_Color()](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

获取属性状态：总线颜色


</td></tr>
<tr><td>

[getState\_Line()](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

获取属性状态：多段线坐标组


</td></tr>
<tr><td>

[getState\_LineType()](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

获取属性状态：线型


</td></tr>
<tr><td>

[getState\_LineWidth()](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

获取属性状态：线宽


</td></tr>
<tr><td>

[getState\_Net()](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

获取属性状态：网络名称


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

获取属性状态：图元 ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

获取属性状态：图元类型


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

查询图元是否为异步图元


</td></tr>
<tr><td>

[setState\_Color(color)](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：导线颜色


</td></tr>
<tr><td>

[setState\_Line(line)](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：多段线坐标组


</td></tr>
<tr><td>

[setState\_LineType(lineType)](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线型


</td></tr>
<tr><td>

[setState\_LineWidth(lineWidth)](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：线宽


</td></tr>
<tr><td>

[setState\_Net(net)](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

**_(BETA)_** 设置属性状态：网络名称


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

将图元转换为异步图元


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveWire.md)


</td><td>


</td><td>

将图元转换为同步图元


</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveWire.done() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将对图元的更改应用到画布

## 签名

```typescript
done(): Promise<ISCH_PrimitiveWire>;
```


## 返回值

Promise&lt;[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)<!-- -->&gt;

导线图元对象

### getstate_color

# ISCH\_PrimitiveWire.getState\_Color() method

获取属性状态：总线颜色

## 签名

```typescript
getState_Color(): string | null;
```


## 返回值

string \| null

总线颜色

### getstate_line

# ISCH\_PrimitiveWire.getState\_Line() method

获取属性状态：多段线坐标组

## 签名

```typescript
getState_Line(): Array<number> | Array<Array<number>>;
```


## 返回值

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;

多段线坐标组

### getstate_linetype

# ISCH\_PrimitiveWire.getState\_LineType() method

获取属性状态：线型

## 签名

```typescript
getState_LineType(): ESCH_PrimitiveLineType | null;
```


## 返回值

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null

线型

### getstate_linewidth

# ISCH\_PrimitiveWire.getState\_LineWidth() method

获取属性状态：线宽

## 签名

```typescript
getState_LineWidth(): number | null;
```


## 返回值

number \| null

线宽

### getstate_net

# ISCH\_PrimitiveWire.getState\_Net() method

获取属性状态：网络名称

## 签名

```typescript
getState_Net(): string;
```


## 返回值

string

网络名称

### getstate_primitiveid

# ISCH\_PrimitiveWire.getState\_PrimitiveId() method

获取属性状态：图元 ID

## 签名

```typescript
getState_PrimitiveId(): string;
```


## 返回值

string

图元 ID

### getstate_primitivetype

# ISCH\_PrimitiveWire.getState\_PrimitiveType() method

获取属性状态：图元类型

## 签名

```typescript
getState_PrimitiveType(): ESCH_PrimitiveType;
```


## 返回值

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

图元类型

### isasync

# ISCH\_PrimitiveWire.isAsync() method

查询图元是否为异步图元

## 签名

```typescript
isAsync(): boolean;
```


## 返回值

boolean

是否为异步图元

### setstate_color

# ISCH\_PrimitiveWire.setState\_Color() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：导线颜色

## 签名

```typescript
setState_Color(color: string | null): ISCH_PrimitiveWire;
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

color


</td><td>

string \| null


</td><td>

导线颜色


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

导线图元对象

### setstate_line

# ISCH\_PrimitiveWire.setState\_Line() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：多段线坐标组

## 签名

```typescript
setState_Line(line: Array<number> | Array<Array<number>>): ISCH_PrimitiveWire;
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

line


</td><td>

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;


</td><td>

多段线坐标组


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

导线图元对象

### setstate_linetype

# ISCH\_PrimitiveWire.setState\_LineType() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：线型

## 签名

```typescript
setState_LineType(lineType: ESCH_PrimitiveLineType | null): ISCH_PrimitiveWire;
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

lineType


</td><td>

[ESCH\_PrimitiveLineType](../enums/ESCH_PrimitiveLineType.md) \| null


</td><td>

线型


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

导线图元对象

### setstate_linewidth

# ISCH\_PrimitiveWire.setState\_LineWidth() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：线宽

## 签名

```typescript
setState_LineWidth(lineWidth: number | null): ISCH_PrimitiveWire;
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

lineWidth


</td><td>

number \| null


</td><td>

线宽


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

导线图元对象

### setstate_net

# ISCH\_PrimitiveWire.setState\_Net() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：网络名称

## 签名

```typescript
setState_Net(net: string): ISCH_PrimitiveWire;
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

net


</td><td>

string


</td><td>

网络名称


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

导线图元对象

### toasync

# ISCH\_PrimitiveWire.toAsync() method

将图元转换为异步图元

## 签名

```typescript
toAsync(): ISCH_PrimitiveWire;
```


## 返回值

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

导线图元对象

### tosync

# ISCH\_PrimitiveWire.toSync() method

将图元转换为同步图元

## 签名

```typescript
toSync(): ISCH_PrimitiveWire;
```


## 返回值

[ISCH\_PrimitiveWire](./ISCH_PrimitiveWire.md)

导线图元对象
