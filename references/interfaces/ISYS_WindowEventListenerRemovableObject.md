# ISYS\_WindowEventListenerRemovableObject interface

窗口事件监听可移除对象

## 签名

```typescript
interface ISYS_WindowEventListenerRemovableObject 
```

## 备注

本对象从 [addEventListener](../classes/SYS_Window.md) 获取，并可用于移除创建的事件监听，仅需将其传入 [removeEventListener](../classes/SYS_Window.md)

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

[listener](./ISYS_WindowEventListenerRemovableObject.md)


</td><td>


</td><td>

(ev: any) =&gt; any


</td><td>


</td></tr>
<tr><td>

[options?](./ISYS_WindowEventListenerRemovableObject.md)


</td><td>


</td><td>

\{ capture?: boolean; \}


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[type](./ISYS_WindowEventListenerRemovableObject.md)


</td><td>


</td><td>

[ESYS\_WindowEventType](../enums/ESYS_WindowEventType.md)


</td><td>


</td></tr>
</tbody></table>

---

## 属性详情

### listener

# ISYS\_WindowEventListenerRemovableObject.listener property

## 签名

```typescript
listener: (ev: any) => any;
```

### options

# ISYS\_WindowEventListenerRemovableObject.options property

## 签名

```typescript
options?: {
        capture?: boolean;
    };
```

### type

# ISYS\_WindowEventListenerRemovableObject.type property

## 签名

```typescript
type: ESYS_WindowEventType;
```
