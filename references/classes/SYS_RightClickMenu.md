# SYS\_RightClickMenu class

System / right-click menu class

## Signature

```typescript
export class SYS_RightClickMenu 
```

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

[changeMenu(menuId, menuItems)](./SYS_RightClickMenu.md)


</td><td>


</td><td>

**_(BETA)_** Modify the right-click menu


</td></tr>
</tbody></table>

---

## 方法详情

### changemenu

# SYS\_RightClickMenu.changeMenu() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Modify the right-click menu

## Signature

```typescript
public changeMenu(menuId: string, menuItems: Array<ISYS_RightClickMenuItem | null>): Promise<void>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

menuId


</td><td>

string


</td><td>

Menu ID


</td></tr>
<tr><td>

menuItems


</td><td>

Array&lt;[ISYS\_RightClickMenuItem](../interfaces/ISYS_RightClickMenuItem.md) \| null&gt;


</td><td>

Menu items. `null` represents a separator


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

## Remarks

Currently, only right-click menu modifications for \*\*bottom menu device list item right-click\*\*, \*\*bottom menu symbol list item right-click\*\*, \*\*bottom menu footprint list item right-click\*\*, and \*\*bottom menu reuse block list item right-click\*\* are supported

If you want to reorder or remove some menu items, only the menu item IDs need to be passed in `menuItems`<!-- -->; other properties will remain unchanged automatically

To register a new right-click menu, the complete [ISYS\_RightClickMenuItem](../interfaces/ISYS_RightClickMenuItem.md) data needs to be passed in

This API forces the ID of the newly created right-click menu to include the extension UUID. For example, an input `id = 'example'` will be automatically rewritten to `e143d88179874e7f851cc890cd22fc71|example`

Note: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

Non-public API usage notice: This API is provided as-is without additional documentation for parameters. Parameters may be changed in a breaking manner in any version without notice.
