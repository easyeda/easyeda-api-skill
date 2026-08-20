# SYS\_Setting class

System / settings class

## Signature

```typescript
export class SYS_Setting 
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

[restoreDefault()](./SYS_Setting.md)


</td><td>


</td><td>

**_(BETA)_** Restore all default settings


</td></tr>
</tbody></table>

---

## 方法详情

### restoredefault

# SYS\_Setting.restoreDefault() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Restore all default settings

## Signature

```typescript
public restoreDefault(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the operation is successful

## Remarks

Restores all EDA settings to their default state. This operation will lose all settings. Please pay special attention when calling it
