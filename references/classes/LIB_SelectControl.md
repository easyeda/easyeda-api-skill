# LIB\_SelectControl class

综合库 / 选择控制类

## Signature

```typescript
declare class LIB_SelectControl 
```

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[getSelectedLibraryRowInfo()](./LIB_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前底部库选中行的信息


</td></tr>
</tbody></table>

---

## 方法详情

### getselectedlibraryrowinfo

# LIB\_SelectControl.getSelectedLibraryRowInfo() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前底部库选中行的信息

## Signature

```typescript
getSelectedLibraryRowInfo(): Promise<ILIB_LibraryItem | undefined>;
```


## Returns

Promise&lt;[ILIB\_LibraryItem](../interfaces/ILIB_LibraryItem.md) \| undefined&gt;

库属性对象，如若为 `undefined` 则获取失败

## Remarks

将会获取当前底部库选中行的库类型、UUID、所属库 UUID
