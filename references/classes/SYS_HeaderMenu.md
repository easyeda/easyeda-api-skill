# SYS\_HeaderMenu class

System / header menu class

## Signature

```typescript
export class SYS_HeaderMenu 
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

[insertHeaderMenus(headerMenus)](./SYS_HeaderMenu.md)


</td><td>


</td><td>

Import top menu data


</td></tr>
<tr><td>

[insertSystemHeaderMenuItem(env, id, props)](./SYS_HeaderMenu.md)


</td><td>


</td><td>

**_(BETA)_** Insert a system header menu item at the specified position


</td></tr>
<tr><td>

[removeHeaderMenus()](./SYS_HeaderMenu.md)


</td><td>


</td><td>

Remove Top menu data


</td></tr>
<tr><td>

[removeSystemHeaderMenuItem(id, props)](./SYS_HeaderMenu.md)


</td><td>


</td><td>

**_(BETA)_** Remove a system header menu item


</td></tr>
<tr><td>

[replaceHeaderMenus(headerMenus)](./SYS_HeaderMenu.md)


</td><td>


</td><td>

Replace top menu data


</td></tr>
</tbody></table>

---

## 方法详情

### insertheadermenus

# SYS\_HeaderMenu.insertHeaderMenus() method

Import top menu data

## Signature

```typescript
public insertHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>;
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

headerMenus


</td><td>

[ISYS\_HeaderMenus](../interfaces/ISYS_HeaderMenus.md)


</td><td>

Top menu data


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

### insertsystemheadermenuitem

# SYS\_HeaderMenu.insertSystemHeaderMenuItem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Insert a system header menu item at the specified position

## Signature

```typescript
public insertSystemHeaderMenuItem(env: ESYS_HeaderMenuEnvironment, id: Array<string>, props: { title: string; registerFn?: undefined | string; menuItems?: undefined | (null | ISYS_HeaderMenuSub2MenuItem | ISYS_HeaderMenuSub1MenuItem)[]; insertDividerBefore?: undefined | false | true; insertDividerAfter?: undefined | false | true; insertBefore?: undefined | string; crossDividerWhenInsert?: undefined | false | true }): Promise<string | undefined>;
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

env


</td><td>

[ESYS\_HeaderMenuEnvironment](../enums/ESYS_HeaderMenuEnvironment.md)


</td><td>

Environment


</td></tr>
<tr><td>

id


</td><td>

Array&lt;string&gt;


</td><td>

Menu item ID tree. It will match menu items by hierarchy in array order and use the last element of the array as the ID of the menu item to insert


</td></tr>
<tr><td>

props


</td><td>

{ title: string; registerFn?: undefined \| string; menuItems?: undefined \| (null \| [ISYS\_HeaderMenuSub2MenuItem](../interfaces/ISYS_HeaderMenuSub2MenuItem.md) \| [ISYS\_HeaderMenuSub1MenuItem](../interfaces/ISYS_HeaderMenuSub1MenuItem.md)<!-- -->)\[\]; insertDividerBefore?: undefined \| false \| true; insertDividerAfter?: undefined \| false \| true; insertBefore?: undefined \| string; crossDividerWhenInsert?: undefined \| false \| true }


</td><td>

Other parameters


</td></tr>
</tbody></table>



## Returns

Promise&lt;string \| undefined&gt;

The ID of the header menu item. Whether a separator is inserted does not affect the return value of the operation. The IDs of sub-items in menuItems are not included

## Remarks

This API adds a sub-menu under an existing system first-level menu. First-level menus cannot be added or modified. The `id` array should contain at least `2` values

This API forces the ID of the newly created system header menu to include the extension UUID. For example, an input `id = 'example'` will be automatically rewritten to `e143d88179874e7f851cc890cd22fc71|example`<!-- -->. To remove this menu later, enter the rewritten name

This API cannot add any sub-menu under the \*\*Advanced\*\* menu

Sub-menus added by this API are placed at the end of the original menu by default, unless the `props.insertBefore` parameter is specified

Note: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

Non-public API usage notice: This API is provided as-is without additional documentation for parameters. Parameters may be changed in a breaking manner in any version without notice.

### removeheadermenus

# SYS\_HeaderMenu.removeHeaderMenus() method

Remove Top menu data

## Signature

```typescript
public removeHeaderMenus(): void;
```


## Returns

void

### removesystemheadermenuitem

# SYS\_HeaderMenu.removeSystemHeaderMenuItem() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Remove a system header menu item

## Signature

```typescript
public removeSystemHeaderMenuItem(id: Array<string>, props?: { removeTheBeforeDivider?: undefined | false | true; removeTheAfterDivider?: undefined | false | true }): Promise<boolean>;
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

id


</td><td>

Array&lt;string&gt;


</td><td>

Menu item ID tree. It will match menu items by hierarchy in array order and remove the menu item corresponding to the last element; when only one element is passed, the corresponding first-level menu is removed


</td></tr>
<tr><td>

props


</td><td>

\{ removeTheBeforeDivider?: undefined \| false \| true; removeTheAfterDivider?: undefined \| false \| true \}


</td><td>

_(Optional)_ Other parameters. Whether to remove the separators before and after the menu item (only takes effect when removing a sub-menu item)


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the removal operation was successful. If the menu is removed but the separator is not found, `true` is also returned

## Remarks

Once a menu is removed, restarting the EasyEDA software is required to restore it

This API cannot remove the system header menu items imported by the  API

When the `id` array contains only one element, the corresponding first-level menu is removed; when it contains multiple elements, the menu items are matched by hierarchy in array order, and the sub-menu item corresponding to the last element is removed

This API cannot remove the \*\*Advanced\*\* menu itself or any sub-menu under it

Note 1: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`

Note 2: The \*\*remove first-level menu\*\* function of this API is exclusive to the private deployment edition. Calling it in other editions will always `throw Error`

Non-public API usage notice: This API is provided as-is without additional documentation for parameters. Parameters may be changed in a breaking manner in any version without notice.

### replaceheadermenus

# SYS\_HeaderMenu.replaceHeaderMenus() method

Replace top menu data

## Signature

```typescript
public replaceHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>;
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

headerMenus


</td><td>

[ISYS\_HeaderMenus](../interfaces/ISYS_HeaderMenus.md)


</td><td>

Top menu data


</td></tr>
</tbody></table>



## Returns

Promise&lt;void&gt;

## Remarks

This API is equivalent to executing the [remove](./SYS_HeaderMenu.md) and [insert](./SYS_HeaderMenu.md) operations at the same time
