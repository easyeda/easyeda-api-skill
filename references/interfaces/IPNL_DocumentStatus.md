# IPNL\_DocumentStatus interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

面板文档状态快照

## Signature

```typescript
interface IPNL_DocumentStatus
```

## Remarks

一次调用拿到的编辑器状态快照，让扩展不用零散查一堆接口去猜「现在能不能撤销 / 能不能粘贴 / 当前是框选模式还是点选」

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

[canAlign](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可对齐（选中两个及以上时为 true，与等距、对齐栅格同口径）

</td></tr>
<tr><td>

[canCopy](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可复制

</td></tr>
<tr><td>

[canCut](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可剪切

</td></tr>
<tr><td>

[canEditArray](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可阵列（完全无选中时为 false，有选中即可阵列）

</td></tr>
<tr><td>

[canFlip](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可镜像

</td></tr>
<tr><td>

[canPaste](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可粘贴

</td></tr>
<tr><td>

[canRedo](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可重做

</td></tr>
<tr><td>

[canRotate](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可旋转

</td></tr>
<tr><td>

[canUndo](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否可撤销

</td></tr>
<tr><td>

[isDragging](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否正在拖拽

</td></tr>
<tr><td>

[isEditingPath](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否正在编辑路径

</td></tr>
<tr><td>

[isFocusOnCanvas](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 焦点是否在画布上

</td></tr>
<tr><td>

[isLibPlacing](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否处于待放置库器件状态（已切到放置工具、等待落点）

</td></tr>
<tr><td>

[isPasting](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否处于待粘贴状态（已切到粘贴工具、等待落点；粘贴已经执行时为 false）

</td></tr>
<tr><td>

[selectedCombinationCount](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 当前选中组合数量

</td></tr>
<tr><td>

[selectedCount](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 当前选中图元数量

</td></tr>
<tr><td>

[selectionMode](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

[EPNL\_SelectionMode](../enums/EPNL_SelectionMode.md)

</td><td>

**_(ALPHA)_** 当前框选模式

</td></tr>
<tr><td>

[snapGrid](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 是否启用网格吸附（与网格是否可见相互独立）

</td></tr>
<tr><td>

[visibleGrid](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

boolean

</td><td>

**_(ALPHA)_** 网格是否可见

</td></tr>
<tr><td>

[zoom](./IPNL_DocumentStatus.md)

</td><td>

</td><td>

number

</td><td>

**_(ALPHA)_** 当前缩放比例

</td></tr>
</tbody></table>

---

## 属性详情

### canalign

# IPNL\_DocumentStatus.canAlign property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可对齐（选中两个及以上时为 true，与等距、对齐栅格同口径）

## Signature

```typescript
canAlign: boolean;
```

### cancopy

# IPNL\_DocumentStatus.canCopy property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可复制

## Signature

```typescript
canCopy: boolean;
```

### cancut

# IPNL\_DocumentStatus.canCut property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可剪切

## Signature

```typescript
canCut: boolean;
```

### caneditarray

# IPNL\_DocumentStatus.canEditArray property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可阵列（完全无选中时为 false，有选中即可阵列）

## Signature

```typescript
canEditArray: boolean;
```

### canflip

# IPNL\_DocumentStatus.canFlip property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可镜像

## Signature

```typescript
canFlip: boolean;
```

### canpaste

# IPNL\_DocumentStatus.canPaste property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可粘贴

## Signature

```typescript
canPaste: boolean;
```

### canredo

# IPNL\_DocumentStatus.canRedo property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可重做

## Signature

```typescript
canRedo: boolean;
```

### canrotate

# IPNL\_DocumentStatus.canRotate property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可旋转

## Signature

```typescript
canRotate: boolean;
```

### canundo

# IPNL\_DocumentStatus.canUndo property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否可撤销

## Signature

```typescript
canUndo: boolean;
```

### isdragging

# IPNL\_DocumentStatus.isDragging property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否正在拖拽

## Signature

```typescript
isDragging: boolean;
```

### iseditingpath

# IPNL\_DocumentStatus.isEditingPath property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否正在编辑路径

## Signature

```typescript
isEditingPath: boolean;
```

### isfocusoncanvas

# IPNL\_DocumentStatus.isFocusOnCanvas property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

焦点是否在画布上

## Signature

```typescript
isFocusOnCanvas: boolean;
```

### islibplacing

# IPNL\_DocumentStatus.isLibPlacing property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否处于待放置库器件状态（已切到放置工具、等待落点）

## Signature

```typescript
isLibPlacing: boolean;
```

### ispasting

# IPNL\_DocumentStatus.isPasting property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否处于待粘贴状态（已切到粘贴工具、等待落点；粘贴已经执行时为 false）

## Signature

```typescript
isPasting: boolean;
```

### selectedcombinationcount

# IPNL\_DocumentStatus.selectedCombinationCount property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

当前选中组合数量

## Signature

```typescript
selectedCombinationCount: number;
```

### selectedcount

# IPNL\_DocumentStatus.selectedCount property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

当前选中图元数量

## Signature

```typescript
selectedCount: number;
```

### selectionmode

# IPNL\_DocumentStatus.selectionMode property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

当前框选模式

## Signature

```typescript
selectionMode: EPNL_SelectionMode;
```

### snapgrid

# IPNL\_DocumentStatus.snapGrid property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否启用网格吸附（与网格是否可见相互独立）

## Signature

```typescript
snapGrid: boolean;
```

### visiblegrid

# IPNL\_DocumentStatus.visibleGrid property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

网格是否可见

## Signature

```typescript
visibleGrid: boolean;
```

### zoom

# IPNL\_DocumentStatus.zoom property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

当前缩放比例

## Signature

```typescript
zoom: number;
```
