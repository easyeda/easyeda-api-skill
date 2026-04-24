# ISYS\_WindowEventListenerRemovableObject interface

窗口事件监听可移除对象

## Signature

```typescript
interface ISYS_WindowEventListenerRemovableObject 
```

## Remarks

本对象从 [addEventListener](../classes/SYS_Window.md) 获取，并可用于移除创建的事件监听，仅需将其传入 [removeEventListener](../classes/SYS_Window.md)

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


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

## Signature

```typescript
listener: (ev: any) => any;
```

### options

# ISYS\_WindowEventListenerRemovableObject.options property

## Signature

```typescript
options?: {
        capture?: boolean;
    };
```

### type

# ISYS\_WindowEventListenerRemovableObject.type property

## Signature

```typescript
type: ESYS_WindowEventType;
```
