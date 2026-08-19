# IDesignPortal interface

组件树操作契约。

## Signature

```typescript
export interface IDesignPortal<T extends keyof ComponentPropsMap = keyof ComponentPropsMap> 
```

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

[createComponent](./IDesignPortal.md)


</td><td>


</td><td>

(handle: string, type: T, props: [ComponentPropsMap](./ComponentPropsMap.md)<!-- -->\[T\], eventDispatcher: (ev: any) =&gt; void, parent?: string) =&gt; void


</td><td>


</td></tr>
<tr><td>

[detachComponent](./IDesignPortal.md)


</td><td>


</td><td>

(handle: string) =&gt; void


</td><td>


</td></tr>
<tr><td>

[updateComponent](./IDesignPortal.md)


</td><td>


</td><td>

(handle: string, type: T, props: [ComponentPropsMap](./ComponentPropsMap.md)<!-- -->\[T\], eventDispatcher: (ev: any) =&gt; void) =&gt; void


</td><td>


</td></tr>
</tbody></table>

---

## 属性详情

### createcomponent

# IDesignPortal.createComponent property

## Signature

```typescript
createComponent: (handle: string, type: T, props: ComponentPropsMap[T], eventDispatcher: (ev: any) => void, parent?: string) => void;
```

### detachcomponent

# IDesignPortal.detachComponent property

## Signature

```typescript
detachComponent: (handle: string) => void;
```

### updatecomponent

# IDesignPortal.updateComponent property

## Signature

```typescript
updateComponent: (handle: string, type: T, props: ComponentPropsMap[T], eventDispatcher: (ev: any) => void) => void;
```
