# SCH\_Drc class

Schematic &amp; symbol / design rule check (DRC) class

## Signature

```typescript
export class SCH_Drc 
```

## Remarks

Check and set DRC rules

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[check(strict, userInterface, includeVerboseError)](./SCH_Drc.md)


</td><td>


</td><td>

**_(BETA)_** Check DRC


</td></tr>
<tr><td>

[check(strict, userInterface, includeVerboseError)](./SCH_Drc.md)


</td><td>


</td><td>

**_(BETA)_** Check DRC


</td></tr>
</tbody></table>

---

## 方法详情

### check

# SCH\_Drc.check() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Check DRC

## Signature

```typescript
public check(strict: boolean, userInterface: boolean, includeVerboseError: false): Promise<boolean>;
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

strict


</td><td>

boolean


</td><td>

Whether strict checking is enabled. The current schematic is uniformly in strict checking mode


</td></tr>
<tr><td>

userInterface


</td><td>

boolean


</td><td>

Whether to show the UI (open the bottom DRC window)


</td></tr>
<tr><td>

includeVerboseError


</td><td>

false


</td><td>

Whether to include detailed error information in the return value. If it is `true`<!-- -->, the return value will always be an array


</td></tr>
</tbody></table>



## Returns

Promise&lt;boolean&gt;

Whether the DRC check passed

### check_1

# SCH\_Drc.check() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Check DRC

## Signature

```typescript
public check(strict: boolean, userInterface: boolean, includeVerboseError: true): Promise<Array<ISCH_DrcError>>;
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

strict


</td><td>

boolean


</td><td>

Whether strict checking is enabled. The current schematic is uniformly in strict checking mode


</td></tr>
<tr><td>

userInterface


</td><td>

boolean


</td><td>

Whether to show the UI (open the bottom DRC window)


</td></tr>
<tr><td>

includeVerboseError


</td><td>

true


</td><td>

Whether to include detailed error information in the return value. If it is `true`<!-- -->, the return value will always be an array. ADD since EDA v4.2


</td></tr>
</tbody></table>



## Returns

Promise&lt;Array&lt;[ISCH\_DrcError](../interfaces/ISCH_DrcError.md)<!-- -->&gt;&gt;

Detailed results of the DRC check
