# ISCH\_PrimitiveCbbSymbolComponent class

复用模块符号图元

## Signature

```typescript
declare class ISCH_PrimitiveCbbSymbolComponent extends ISCH_PrimitiveComponent 
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

**_(BETA)_** 将对图元的更改应用到画布


</td></tr>
<tr><td>

[getState\_Cbb()](./ISCH_PrimitiveCbbSymbolComponent.md)


</td><td>


</td><td>

获取属性状态：关联复用模块


</td></tr>
<tr><td>

[getState\_CbbSymbol()](./ISCH_PrimitiveCbbSymbolComponent.md)


</td><td>


</td><td>

获取属性状态：关联复用模块符号


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveCbbSymbolComponent.md)


</td><td>


</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态


</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveCbbSymbolComponent.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将对图元的更改应用到画布

## Signature

```typescript
done(): Promise<ISCH_PrimitiveCbbSymbolComponent>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveCbbSymbolComponent](./ISCH_PrimitiveCbbSymbolComponent.md)<!-- -->&gt;

复用模块符号图元对象

### getstate_cbb

# ISCH\_PrimitiveCbbSymbolComponent.getState\_Cbb() method

获取属性状态：关联复用模块

## Signature

```typescript
getState_Cbb(): {
        libraryUuid: string;
        uuid: string;
    };
```


## Returns

\{ libraryUuid: string; uuid: string; \}

关联复用模块

### getstate_cbbsymbol

# ISCH\_PrimitiveCbbSymbolComponent.getState\_CbbSymbol() method

获取属性状态：关联复用模块符号

## Signature

```typescript
getState_CbbSymbol(): {
        libraryUuid: string;
        cbbUuid: string;
        uuid?: string;
        name?: string;
    };
```


## Returns

\{ libraryUuid: string; cbbUuid: string; uuid?: string; name?: string; \}

关联复用模块符号

### reset

# ISCH\_PrimitiveCbbSymbolComponent.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将异步图元重置为当前画布状态

## Signature

```typescript
reset(): Promise<ISCH_PrimitiveCbbSymbolComponent>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveCbbSymbolComponent](./ISCH_PrimitiveCbbSymbolComponent.md)<!-- -->&gt;

复用模块符号图元对象
