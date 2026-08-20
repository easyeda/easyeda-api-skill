# ISYS\_WindowEventListenerRemovableObject interface

Window event listener can remove object

## Signature

```typescript
export interface ISYS_WindowEventListenerRemovableObject 
```

## Remarks

This object is obtained from [addEventListener](../classes/SYS_Window.md) and can be used to remove the created event listener by simply passing it to [removeEventListener](../classes/SYS_Window.md)

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

\{ capture?: undefined \| false \| true \}


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
options?: { capture?: undefined | false | true };
```

### type

# ISYS\_WindowEventListenerRemovableObject.type property

## Signature

```typescript
type: ESYS_WindowEventType;
```
