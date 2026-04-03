# ISCH\_PrimitiveCbbSymbolComponent class

复用模块符号图元

## 签名

```typescript
declare class ISCH_PrimitiveCbbSymbolComponent extends ISCH_PrimitiveComponent 
```
**扩展自：**[ISCH\_PrimitiveComponent](./ISCH_PrimitiveComponent.md)

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

## 签名

```typescript
getState_Cbb(): {
        libraryUuid: string;
        uuid: string;
    };
```


## 返回值

\{ libraryUuid: string; uuid: string; \}

关联复用模块

### getstate_cbbsymbol

# ISCH\_PrimitiveCbbSymbolComponent.getState\_CbbSymbol() method

获取属性状态：关联复用模块符号

## 签名

```typescript
getState_CbbSymbol(): {
        libraryUuid: string;
        cbbUuid: string;
        uuid: string;
        name?: string;
    };
```


## 返回值

\{ libraryUuid: string; cbbUuid: string; uuid: string; name?: string; \}

关联复用模块符号
