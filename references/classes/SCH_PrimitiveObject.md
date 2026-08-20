# SCH\_PrimitiveObject class

Schematic &amp; symbol / binary embedded object primitive class

## Signature

```typescript
export class SCH_PrimitiveObject implements ISCH_PrimitiveAPI 
```
**Implements:** [ISCH\_PrimitiveAPI](../interfaces/ISCH_PrimitiveAPI.md)

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[create(content, startX, startY, width, height, rotation, mirror, fileName)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Create Binary embedded object


</td></tr>
<tr><td>

[delete(primitiveIds)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Delete Binary embedded object


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get Binary embedded object


</td></tr>
<tr><td>

[get(primitiveIds)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get Binary embedded object


</td></tr>
<tr><td>

[getAll()](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get all Binary embedded object


</td></tr>
<tr><td>

[getAllPrimitiveId()](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Get all Binary embedded object primitive IDs


</td></tr>
<tr><td>

[modify(primitiveId, property)](./SCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Modify Binary embedded object


</td></tr>
</tbody></table>

---

## 方法详情

### create

# SCH\_PrimitiveObject.create() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create Binary embedded object

## Signature

```typescript
public create(content: File | string, startX: number, startY: number, width?: number, height?: number, rotation?: number, mirror?: boolean, fileName?: string): Promise<ISCH_PrimitiveObject | undefined>;
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

Object content


</td></tr>
<tr><td>

startX


</td><td>

number


</td><td>

Start point coordinates X


</td></tr>
<tr><td>

startY


</td><td>

number


</td><td>

Start point coordinates Y


</td></tr>
<tr><td>

width


</td><td>

number


</td><td>

_(Optional)_ Width


</td></tr>
<tr><td>

height


</td><td>

number


</td><td>

_(Optional)_ Height


</td></tr>
<tr><td>

rotation


</td><td>

number


</td><td>

_(Optional)_ Rotation angle


</td></tr>
<tr><td>

mirror


</td><td>

boolean


</td><td>

_(Optional)_ Whether it is mirrored


</td></tr>
<tr><td>

fileName


</td><td>

string


</td><td>

_(Optional)_ File name


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md) \| undefined&gt;

Binary embedded object primitive object

## Example


```javascript
// 1. 生成随机放置坐标，避免与画布上已有的内嵌对象重合（SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);

// 2. 准备 4x4 像素 PNG 的 data URI（content 实测也接受裸 base64，data URI 带格式头更易读）
const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';

// 3. 在起点（x, y）放置图片：宽 400、高 300，不旋转、不镜像，文件名 logo.png
const obj = await eda.sch_PrimitiveObject.create(png, x, y, 400, 300, 0, false, 'logo.png');

// 4. 创建类保留现场，不删除图元（getState_Content 返回数据内容，用长度表示）
console.log('primitiveId:', obj.getState_PrimitiveId());
console.log('primitiveType:', obj.getState_PrimitiveType());
console.log('startX:', obj.getState_StartX(), 'startY:', obj.getState_StartY());
console.log('width:', obj.getState_Width(), 'height:', obj.getState_Height());
console.log('fileName:', obj.getState_FileName());
console.log('content length:', obj.getState_Content().length);
```

### delete

# SCH\_PrimitiveObject.delete() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Delete Binary embedded object

## Signature

```typescript
public delete(primitiveIds: string | ISCH_PrimitiveObject | Array<string> | Array<ISCH_PrimitiveObject>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)<!-- -->&gt;


</td><td>

Binary embedded object primitive ID or Binary embedded object primitive object


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Delete Whether the operation is successful

## Example


```javascript
// 1. 创建两个待删除的测试对象（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj1 = await eda.sch_PrimitiveObject.create(png, x, y, 400, 300, 0, false, 'del1.png');
const obj2 = await eda.sch_PrimitiveObject.create(png, x + 400, y, 200, 150, 0, false, 'del2.png');

// 2. 记录删除前的对象数量
const beforeCount = (await eda.sch_PrimitiveObject.getAll()).length;

// 3. 分别以 ID 字符串和图元对象两种形式删除两个对象
const deleted1 = await eda.sch_PrimitiveObject.delete(obj1.getState_PrimitiveId());
const deleted2 = await eda.sch_PrimitiveObject.delete(obj2);

// 4. 删除类保留现场（图元已删除，不恢复）
const afterCount = (await eda.sch_PrimitiveObject.getAll()).length;

console.log('deleted by id:', deleted1);
console.log('deleted by object:', deleted2);
console.log('beforeCount:', beforeCount, '→ afterCount:', afterCount);
```

### get

# SCH\_PrimitiveObject.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Binary embedded object

## Signature

```typescript
public get(primitiveIds: string): Promise<ISCH_PrimitiveObject | undefined>;
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

string


</td><td>

Binary embedded object primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md) \| undefined&gt;

Binary embedded object primitive object, `undefined` indicates that the retrieval failed

## Example


```javascript
// 1. 创建两个测试对象（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj1 = await eda.sch_PrimitiveObject.create(png, x, y, 400, 300, 0, false, 'get1.png');
const obj2 = await eda.sch_PrimitiveObject.create(png, x + 400, y, 200, 150, 0, false, 'get2.png');

// 2. 传单个 ID 字符串，返回单个内嵌对象
const single = await eda.sch_PrimitiveObject.get(obj1.getState_PrimitiveId());

// 3. 传 ID 数组，返回内嵌对象数组（任一 ID 未匹配不影响其它图元的返回）
const arr = await eda.sch_PrimitiveObject.get([obj1.getState_PrimitiveId(), obj2.getState_PrimitiveId()]);

// 4. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveObject.delete([obj1.getState_PrimitiveId(), obj2.getState_PrimitiveId()]);

console.log('single type:', single.getState_PrimitiveType());
console.log('single width:', single.getState_Width());
console.log('array length:', arr.length);
console.log('obj2 fileName:', arr[1].getState_FileName());
```

### get_1

# SCH\_PrimitiveObject.get() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get Binary embedded object

## Signature

```typescript
public get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveObject>>;
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

Array&lt;string&gt;


</td><td>

Binary embedded object primitive ID, which can be a string or an array of strings. If it is an array, an array is also returned


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)<!-- -->&gt;&gt;

Binary embedded object primitive object; an empty array indicates that the retrieval failed

## Remarks

If multiple primitive IDs are passed in, a primitive ID that is not matched will not affect the return of other primitives; that is, fewer primitive objects than the number of primitive IDs passed in may be returned.

### getall

# SCH\_PrimitiveObject.getAll() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Binary embedded object

## Signature

```typescript
public getAll(): Promise<Array<ISCH_PrimitiveObject>>;
```


## Returns

Promise&lt;Array&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)<!-- -->&gt;&gt;

Array of Binary embedded object primitive objects

## Example


```javascript
// 1. 创建一个测试对象作为查找目标（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.sch_PrimitiveObject.create(png, x, y, 300, 200, 0, false, 'find.png');
const objId = obj.getState_PrimitiveId();

// 2. 获取当前原理图页上的全部内嵌对象
const all = await eda.sch_PrimitiveObject.getAll();

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveObject.delete([objId]);

console.log('total objects:', all.length);
console.log('marker object found:', all.some(o => o.getState_PrimitiveId() === objId));
console.log('marker fileName:', all.find(o => o.getState_PrimitiveId() === objId).getState_FileName());
```

### getallprimitiveid

# SCH\_PrimitiveObject.getAllPrimitiveId() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get all Binary embedded object primitive IDs

## Signature

```typescript
public getAllPrimitiveId(): Promise<Array<string>>;
```


## Returns

Promise&lt;Array&lt;string&gt;&gt;

Array of Binary embedded object primitive IDs

## Example


```javascript
// 1. 创建一个测试对象作为查找目标（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.sch_PrimitiveObject.create(png, x, y, 300, 200, 0, false, 'ids.png');
const objId = obj.getState_PrimitiveId();

// 2. 获取全部内嵌对象的图元 ID
const allIds = await eda.sch_PrimitiveObject.getAllPrimitiveId();

// 3. 清理测试图元（查询类需要清理）
await eda.sch_PrimitiveObject.delete([objId]);

console.log('total object ids:', allIds.length);
console.log('marker id in list:', allIds.includes(objId));
```

### modify

# SCH\_PrimitiveObject.modify() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify Binary embedded object

## Signature

```typescript
public modify(primitiveId: string | ISCH_PrimitiveObject, property: { content?: undefined | string | File; startX?: undefined | number; startY?: undefined | number; width?: undefined | number; height?: undefined | number; rotation?: undefined | number; mirror?: undefined | false | true; fileName?: undefined | string }): Promise<ISCH_PrimitiveObject | undefined>;
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

primitiveId


</td><td>

string \| [ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)


</td><td>

Primitive ID


</td></tr>
<tr><td>

property


</td><td>

\{ content?: undefined \| string \| File; startX?: undefined \| number; startY?: undefined \| number; width?: undefined \| number; height?: undefined \| number; rotation?: undefined \| number; mirror?: undefined \| false \| true; fileName?: undefined \| string \}


</td><td>

Modify Parameter


</td></tr>
</tbody></table>



## Returns

Promise&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md) \| undefined&gt;

Binary embedded object primitive object, `undefined` indicates that the modification failed

## Example


```javascript
// 1. 创建待修改的测试对象（随机坐标避免重合，SCH 坐标单位 10mil）
const x = 2000 + Math.floor(Math.random() * 8000);
const y = 2000 + Math.floor(Math.random() * 8000);
const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAEElEQVR4nGP4z8AARwzEcQCukw/x0F8jngAAAABJRU5ErkJggg==';
const obj = await eda.sch_PrimitiveObject.create(png, x, y, 400, 300, 0, false, 'edit.png');
const objId = obj.getState_PrimitiveId();

// 2. 读取修改前的宽与旋转角
const beforeWidth = obj.getState_Width();
const beforeRotation = obj.getState_Rotation();

// 3. 批量修改：宽 400 → 500，旋转 0 → 90 度
await eda.sch_PrimitiveObject.modify(objId, { width: 500, rotation: 90 });

// 4. modify 返回后需要重新 get() 才能读到画布上的最新值
const refreshed = await eda.sch_PrimitiveObject.get(objId);

// 5. 修改类保留现场，供观察修改结果
console.log('primitiveId:', objId);
console.log('width:', beforeWidth, '→', refreshed.getState_Width());
console.log('rotation:', beforeRotation, '→', refreshed.getState_Rotation());
```
