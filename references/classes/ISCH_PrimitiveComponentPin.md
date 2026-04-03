# ISCH\_PrimitiveComponentPin class

器件引脚图元

## 签名

```typescript
declare class ISCH_PrimitiveComponentPin extends ISCH_PrimitivePin 
```
**扩展自：**[ISCH\_PrimitivePin](./ISCH_PrimitivePin.md)

## 备注

器件引脚图元是一个特殊的图元，它指的是在原理图画布上关联到符号的引脚

器件引脚图元仅可更改 `pinNumber`<!-- -->、`noConnected` 属性，其它所有属性均为只读， 并且你只能通过 [器件类的 getAllPinsByPrimitiveId 方法](./SCH_PrimitiveComponent.md) 或  获取到器件引脚图元


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

[primitiveType](./ISCH_PrimitiveComponentPin.md)


</td><td>

`protected`

`readonly`


</td><td>

[ESCH\_PrimitiveType.COMPONENT\_PIN](../enums/ESCH_PrimitiveType.md)


</td><td>

图元类型


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

[getState\_NoConnected()](./ISCH_PrimitiveComponentPin.md)


</td><td>


</td><td>

获取属性状态：是否存在非连接标识


</td></tr>
<tr><td>

[setState\_NoConnected(noConnected)](./ISCH_PrimitiveComponentPin.md)


</td><td>


</td><td>

设置属性状态：是否存在非连接标识


</td></tr>
</tbody></table>

---

## 属性详情

### primitivetype

# ISCH\_PrimitiveComponentPin.primitiveType property

图元类型

## 签名

```typescript
protected readonly primitiveType: ESCH_PrimitiveType.COMPONENT_PIN;
```


---

## 方法详情

### getstate_noconnected

# ISCH\_PrimitiveComponentPin.getState\_NoConnected() method

获取属性状态：是否存在非连接标识

## 签名

```typescript
getState_NoConnected(): boolean;
```


## 返回值

boolean

是否存在非连接标识

### setstate_noconnected

# ISCH\_PrimitiveComponentPin.setState\_NoConnected() method

设置属性状态：是否存在非连接标识

## 签名

```typescript
setState_NoConnected(noConnected: boolean): ISCH_PrimitiveComponentPin;
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

noConnected


</td><td>

boolean


</td><td>


</td></tr>
</tbody></table>



## 返回值

[ISCH\_PrimitiveComponentPin](./ISCH_PrimitiveComponentPin.md)

器件引脚图元对象
