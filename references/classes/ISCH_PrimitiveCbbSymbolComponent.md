# ISCH\_PrimitiveCbbSymbolComponent class

Reuse block symbol primitive

## Signature

```typescript
export class ISCH_PrimitiveCbbSymbolComponent extends ISCH_PrimitiveComponent 
```
**Extends:** [ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

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

[done()](./ISCH_PrimitiveCbbSymbolComponent.md)


</td><td>


</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas


</td></tr>
<tr><td>

[getState\_Cbb()](./ISCH_PrimitiveCbbSymbolComponent.md)


</td><td>


</td><td>

Get the property state: associate reuse block


</td></tr>
<tr><td>

[getState\_CbbSymbol()](./ISCH_PrimitiveCbbSymbolComponent.md)


</td><td>


</td><td>

Get the property state: associate reuse block symbol


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveCbbSymbolComponent.md)


</td><td>


</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state


</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveCbbSymbolComponent.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
public done(): Promise<ISCH_PrimitiveCbbSymbolComponent>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveCbbSymbolComponent](./ISCH_PrimitiveCbbSymbolComponent.md)<!-- -->&gt;

Reuse block symbol primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试符号重合
const x = 2000 + Math.floor(Math.random() * 6000);
const y = 2000 + Math.floor(Math.random() * 6000);

// 2. 放置一个测试复用模块符号（SCH 坐标单位 10mil）
const cbbList = await eda.lib_Cbb.search('');
const cbb = cbbList[0];
const symbol = await eda.sch_PrimitiveComponent.createCbbSymbol(
  { libraryUuid: cbb.libraryUuid, cbbUuid: cbb.uuid },
  x, y
);

// 3. 切换异步模式，把符号向右移动 200（约 5mm）
const asyncSymbol = symbol.toAsync();
asyncSymbol.setState_X(x + 200);

// 4. 一次性提交到画布
await asyncSymbol.done();

// 5. 从画布重新读取，确认位置修改已生效（保留现场供观察）
const refetched = await eda.sch_Primitive.getPrimitiveByPrimitiveId(symbol.getState_PrimitiveId());

console.log('x:', x, '→', refetched.getState_X());
```

### getstate_cbb

# ISCH\_PrimitiveCbbSymbolComponent.getState\_Cbb() method

Get the property state: associate reuse block

## Signature

```typescript
public getState_Cbb(): { libraryUuid: string; uuid: string };
```


## Returns

\{ libraryUuid: string; uuid: string \}

Associate reuse block

## Example


```javascript
// 1. 从系统库搜索一个复用模块
const cbbList = await eda.lib_Cbb.search('');
const cbb = cbbList[0];

// 2. 在画布上放置该模块的符号（SCH 坐标单位 10mil）
const symbol = await eda.sch_PrimitiveComponent.createCbbSymbol(
  { libraryUuid: cbb.libraryUuid, cbbUuid: cbb.uuid },
  1000, 1000
);

// 3. 读取符号关联的复用模块（libraryUuid + 模块 uuid，与放置时传入的一致）
const cbbInfo = symbol.getState_Cbb();

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveComponent.delete([symbol.getState_PrimitiveId()]);

console.log('cbbInfo:', cbbInfo);
```

### getstate_cbbsymbol

# ISCH\_PrimitiveCbbSymbolComponent.getState\_CbbSymbol() method

Get the property state: associate reuse block symbol

## Signature

```typescript
public getState_CbbSymbol(): { libraryUuid: string; cbbUuid: string; uuid?: undefined | string; name?: undefined | string };
```


## Returns

\{ libraryUuid: string; cbbUuid: string; uuid?: undefined \| string; name?: undefined \| string \}

Associate reuse block symbol

## Example


```javascript
// 1. 从系统库搜索一个复用模块
const cbbList = await eda.lib_Cbb.search('');
const cbb = cbbList[0];

// 2. 在画布上放置该模块的符号（未指定具体符号 uuid，使用模块默认符号）
const symbol = await eda.sch_PrimitiveComponent.createCbbSymbol(
  { libraryUuid: cbb.libraryUuid, cbbUuid: cbb.uuid },
  1000, 1000
);

// 3. 读取符号定义信息（libraryUuid + cbbUuid 必有，uuid/name 未指定时为空）
const cbbSymbol = symbol.getState_CbbSymbol();

// 4. 清理测试图元（查询类案例不留测试对象）
await eda.sch_PrimitiveComponent.delete([symbol.getState_PrimitiveId()]);

console.log('cbbSymbol:', cbbSymbol);
```

### reset

# ISCH\_PrimitiveCbbSymbolComponent.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
public reset(): Promise<ISCH_PrimitiveCbbSymbolComponent>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveCbbSymbolComponent](./ISCH_PrimitiveCbbSymbolComponent.md)<!-- -->&gt;

Reuse block symbol primitive object

## Example


```javascript
// 1. 生成本次运行专用的坐标，避免与之前保留的测试符号重合
const x = 2000 + Math.floor(Math.random() * 6000);
const y = 2000 + Math.floor(Math.random() * 6000);

// 2. 放置一个测试复用模块符号（SCH 坐标单位 10mil）
const cbbList = await eda.lib_Cbb.search('');
const cbb = cbbList[0];
const symbol = await eda.sch_PrimitiveComponent.createCbbSymbol(
  { libraryUuid: cbb.libraryUuid, cbbUuid: cbb.uuid },
  x, y
);

// 3. 异步模式下改一个错误坐标，但不提交，直接 reset() 丢弃
const asyncSymbol = symbol.toAsync();
asyncSymbol.setState_X(x + 9999);
await asyncSymbol.reset();

// 4. 从画布重新读取，确认位置仍是放置时的值（保留现场供观察）
const refetched = await eda.sch_Primitive.getPrimitiveByPrimitiveId(symbol.getState_PrimitiveId());

console.log('x:', refetched.getState_X(), '(修改已丢弃)');
```
