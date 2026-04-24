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
</tbody></table>

---

## 方法详情

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
