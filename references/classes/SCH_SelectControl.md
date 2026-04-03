# SCH\_SelectControl class

原理图 &amp; 符号 / 选择控制类

## 签名

```typescript
declare class SCH_SelectControl 
```

## 备注

获取或操作选择的元素

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[clearSelected()](./SCH_SelectControl.md)


</td><td>


</td><td>

清除选中


</td></tr>
<tr><td>

[doCrossProbeSelect(components, pins, nets, highlight, select)](./SCH_SelectControl.md)


</td><td>


</td><td>

进行交叉选择


</td></tr>
<tr><td>

[doSelectPrimitives(primitiveIds)](./SCH_SelectControl.md)


</td><td>


</td><td>

使用图元 ID 选中图元


</td></tr>
<tr><td>

[getAllSelectedPrimitives\_PrimitiveId()](./SCH_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** 查询所有已选中图元的图元 ID


</td></tr>
<tr><td>

[getAllSelectedPrimitives()](./SCH_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** 查询所有已选中图元的图元对象


</td></tr>
<tr><td>

[getCurrentMousePosition()](./SCH_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前鼠标在画布上的位置


</td></tr>
<tr><td>

[getSelectedPrimitives\_PrimitiveId()](./SCH_SelectControl.md)


</td><td>


</td><td>

查询选中图元的图元 ID


</td></tr>
<tr><td>

[getSelectedPrimitives()](./SCH_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** 查询选中图元的所有参数


</td></tr>
<tr><td>

[refactorGetAllSelectedPrimitives()](./SCH_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** 3.0版：查询所有已选中图元的图元对象


</td></tr>
</tbody></table>

---

## 方法详情

### clearselected

# SCH\_SelectControl.clearSelected() method

清除选中

## 签名

```typescript
clearSelected(): boolean;
```


## 返回值

boolean

操作是否成功

### docrossprobeselect

# SCH\_SelectControl.doCrossProbeSelect() method

进行交叉选择

## 签名

```typescript
doCrossProbeSelect(components?: Array<string>, pins?: Array<string>, nets?: Array<string>, highlight?: boolean, select?: boolean): boolean;
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

components


</td><td>

Array&lt;string&gt;


</td><td>

_（可选）_ 器件位号


</td></tr>
<tr><td>

pins


</td><td>

Array&lt;string&gt;


</td><td>

_（可选）_ 器件位号\_引脚编号，格式为 \['U1\_1', 'U1\_2'\]


</td></tr>
<tr><td>

nets


</td><td>

Array&lt;string&gt;


</td><td>

_（可选）_ 网络名称


</td></tr>
<tr><td>

highlight


</td><td>

boolean


</td><td>

_（可选）_ 是否高亮


</td></tr>
<tr><td>

select


</td><td>

boolean


</td><td>

_（可选）_ 是否选中


</td></tr>
</tbody></table>



## 返回值

boolean

操作是否成功

### doselectprimitives

# SCH\_SelectControl.doSelectPrimitives() method

使用图元 ID 选中图元

## 签名

```typescript
doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;
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

primitiveIds


</td><td>

string \| Array&lt;string&gt;


</td><td>

图元 ID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

### getallselectedprimitives

# SCH\_SelectControl.getAllSelectedPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

查询所有已选中图元的图元对象

## 签名

```typescript
getAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;
```


## 返回值

Promise&lt;Array&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;&gt;

所有已选中图元的图元对象

### getallselectedprimitives_primitiveid

# SCH\_SelectControl.getAllSelectedPrimitives\_PrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

查询所有已选中图元的图元 ID

## 签名

```typescript
getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
```


## 返回值

Promise&lt;Array&lt;string&gt;&gt;

所有已选中图元的图元 ID

### getcurrentmouseposition

# SCH\_SelectControl.getCurrentMousePosition() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取当前鼠标在画布上的位置

## 签名

```typescript
getCurrentMousePosition(): Promise<{
        x: number;
        y: number;
    } | undefined>;
```


## 返回值

Promise&lt;{ x: number; y: number; } \| undefined&gt;

鼠标在画布上的位置，`undefined` 代表当前鼠标不在画布上

### getselectedprimitives

# SCH\_SelectControl.getSelectedPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

> 警告：此 API 现已弃用。
>
> 请使用 [getAllSelectedPrimitives](./SCH_SelectControl.md) 替代

查询选中图元的所有参数

## 签名

```typescript
getSelectedPrimitives(): Promise<Array<Object>>;
```


## 返回值

Promise&lt;Array&lt;Object&gt;&gt;

选中图元的所有参数

### getselectedprimitives_primitiveid

# SCH\_SelectControl.getSelectedPrimitives\_PrimitiveId() method

> 警告：此 API 现已弃用。
>
> 请使用 [getAllSelectedPrimitives\_PrimitiveId](./SCH_SelectControl.md) 替代

查询选中图元的图元 ID

## 签名

```typescript
getSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
```


## 返回值

Promise&lt;Array&lt;string&gt;&gt;

选中图元的图元 ID

### refactorgetallselectedprimitives

# SCH\_SelectControl.refactorGetAllSelectedPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

3.0版：查询所有已选中图元的图元对象

## 签名

```typescript
refactorGetAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;
```


## 返回值

Promise&lt;Array&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;&gt;

所有已选中图元的图元对象
