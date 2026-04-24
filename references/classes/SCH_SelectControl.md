# SCH\_SelectControl class

原理图 &amp; 符号 / 选择控制类

## Signature

```typescript
declare class SCH_SelectControl 
```

## Remarks

获取或操作选择的元素

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


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

## Signature

```typescript
clearSelected(): boolean;
```


## Returns

boolean

操作是否成功

### docrossprobeselect

# SCH\_SelectControl.doCrossProbeSelect() method

进行交叉选择

## Signature

```typescript
doCrossProbeSelect(components?: Array<string>, pins?: Array<string>, nets?: Array<string>, highlight?: boolean, select?: boolean): boolean;
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

components


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ 器件位号


</td></tr>
<tr><td>

pins


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ 器件位号\_引脚编号，格式为 \['U1\_1', 'U1\_2'\]


</td></tr>
<tr><td>

nets


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ 网络名称


</td></tr>
<tr><td>

highlight


</td><td>

boolean


</td><td>

_(Optional)_ 是否高亮


</td></tr>
<tr><td>

select


</td><td>

boolean


</td><td>

_(Optional)_ 是否选中


</td></tr>
</tbody></table>



## Returns

boolean

操作是否成功

### doselectprimitives

# SCH\_SelectControl.doSelectPrimitives() method

使用图元 ID 选中图元

## Signature

```typescript
doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;
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

primitiveIds


</td><td>

string \| Array&lt;string&gt;


</td><td>

图元 ID


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

操作是否成功

### getallselectedprimitives

# SCH\_SelectControl.getAllSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

查询所有已选中图元的图元对象

## Signature

```typescript
getAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;&gt;

所有已选中图元的图元对象

### getallselectedprimitives_primitiveid

# SCH\_SelectControl.getAllSelectedPrimitives\_PrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

查询所有已选中图元的图元 ID

## Signature

```typescript
getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

所有已选中图元的图元 ID

### getcurrentmouseposition

# SCH\_SelectControl.getCurrentMousePosition() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前鼠标在画布上的位置

## Signature

```typescript
getCurrentMousePosition(): Promise<{
        x: number;
        y: number;
    } | undefined>;
```


## Returns

Promise&lt;{ x: number; y: number; } \| undefined&gt;

鼠标在画布上的位置，`undefined` 代表当前鼠标不在画布上

### getselectedprimitives

# SCH\_SelectControl.getSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

> Warning: This API is now obsolete.
>
> 请使用 [getAllSelectedPrimitives](./SCH_SelectControl.md) 替代

查询选中图元的所有参数

## Signature

```typescript
getSelectedPrimitives(): Promise<Array<Object>>;
```


## Returns

Promise&lt;Array&lt;Object&gt;&gt;

选中图元的所有参数

### getselectedprimitives_primitiveid

# SCH\_SelectControl.getSelectedPrimitives\_PrimitiveId() method

> Warning: This API is now obsolete.
>
> 请使用 [getAllSelectedPrimitives\_PrimitiveId](./SCH_SelectControl.md) 替代

查询选中图元的图元 ID

## Signature

```typescript
getSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

选中图元的图元 ID

### refactorgetallselectedprimitives

# SCH\_SelectControl.refactorGetAllSelectedPrimitives() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

3.0版：查询所有已选中图元的图元对象

## Signature

```typescript
refactorGetAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_Primitive](../interfaces/ISCH_Primitive.md)<!-- -->&gt;&gt;

所有已选中图元的图元对象
