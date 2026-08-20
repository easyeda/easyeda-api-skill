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

## Example


```javascript
// 1. 先制造一个可观察的自定义设置：向字体白名单加入演示字体
await eda.sys_FontManager.addFont('嘉立创示例_恢复默认演示字体');
const before = await eda.sys_FontManager.getFontsList();
console.log('恢复前演示字体在列表中：', before.includes('嘉立创示例_恢复默认演示字体'));

// 2. 全局恢复默认设置（异步操作，返回是否成功；所有自定义设置将被清除）
const ok = await eda.sys_Setting.restoreDefault();
console.log('恢复默认设置返回：', ok);

// 3. 复查演示字体是否已随设置一起被清除
const after = await eda.sys_FontManager.getFontsList();
console.log('恢复后演示字体在列表中：', after.includes('嘉立创示例_恢复默认演示字体'));

// 4. 兜底清理：若字体白名单不受本接口影响，手动移除演示字体，保证净零变更
await eda.sys_FontManager.deleteFont('嘉立创示例_恢复默认演示字体');
```
