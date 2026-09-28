# SCH\_Drc class

Schematic &amp; symbol / design rule check (DRC) class

## Signature

```typescript
class SCH_Drc
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
function check(
	strict: boolean,
	userInterface: boolean,
	includeVerboseError: false,
): Promise<boolean>;
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

## Example

```javascript
// 1. 创建测试原理图并打开（DRC 作用于当前激活的原理图）
const schematicUuid = await eda.dmt_Schematic.createSchematic();
await new Promise(r => setTimeout(r, 1500));
const schInfo = await eda.dmt_Schematic.getSchematicInfo(schematicUuid);
await eda.dmt_EditorControl.openDocument(schInfo.page[0].uuid);
await new Promise(r => setTimeout(r, 1000));

// 2. 详细模式：返回全部违规项，无违规则为空数组
const violations = await eda.sch_Drc.check(true, false, true);
console.log('violationCount:', violations.length);
violations.forEach((v, i) => {
	console.log(`[${i}]`, typeof v === 'string' ? v : JSON.stringify(v));
});

// 3. 布尔模式：只返回是否全部通过
const passed = await eda.sch_Drc.check(true, false, false);
console.log('allPassed:', passed);

// 4. 清理测试原理图
await new Promise(r => setTimeout(r, 1500));
await eda.dmt_Schematic.deleteSchematic(schematicUuid);
```

### check_1

# SCH\_Drc.check() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Check DRC

## Signature

```typescript
function check(
	strict: boolean,
	userInterface: boolean,
	includeVerboseError: true,
): Promise<Array<ISCH_DrcError>>;
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
