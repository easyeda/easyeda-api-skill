# SYS\_Timer class

System / timer class

## Signature

```typescript
class SYS_Timer
```

## Remarks

Set Timer

## Methods

<table><thead><tr><th>

Method

</th><th>

Modifiers

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[clearIntervalTimer(id)](./SYS_Timer.md)

</td><td>

</td><td>

Clear the specified interval timer

</td></tr>
<tr><td>

[clearTimeoutTimer(id)](./SYS_Timer.md)

</td><td>

</td><td>

Clear the specified timeout timer

</td></tr>
<tr><td>

[setIntervalTimer(id, timeout, callFn, args)](./SYS_Timer.md)

</td><td>

</td><td>

Set an interval timer

</td></tr>
<tr><td>

[setTimeoutTimer(id, timeout, callFn, args)](./SYS_Timer.md)

</td><td>

</td><td>

Set a timeout timer

</td></tr>
</tbody></table>

---

## 方法详情

### clearintervaltimer

# SYS\_Timer.clearIntervalTimer() method

Clear the specified interval timer

## Signature

```typescript
function clearIntervalTimer(id: string): boolean;
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

string

</td><td>

Timer ID

</td></tr>
</tbody></table>

## Returns

boolean

Whether the timer was cleared successfully

## Example

```javascript
// 1. 挂一个每 200ms 触发的循环定时器
let tickCount = 0;
const created = eda.sys_Timer.setIntervalTimer('嘉立创示例_停表', 200, () => { tickCount++; });

// 2. 让它运行约 1.5 秒
await new Promise(resolve => setTimeout(resolve, 1500));
const ticksAtClear = tickCount;

// 3. 清除定时器，回调不再触发
const cleared = eda.sys_Timer.clearIntervalTimer('嘉立创示例_停表');
await new Promise(resolve => setTimeout(resolve, 600));

// 4. 清除不存在的 ID 返回 false（该定时器已在上一步被清除）
const again = eda.sys_Timer.clearIntervalTimer('嘉立创示例_停表');

console.log('定时器设置结果：', created);
console.log('清除结果：', cleared);
console.log('清除前触发次数：', ticksAtClear, '，清除后新增：', tickCount - ticksAtClear);
console.log('再次清除同一 ID：', again);
```

### cleartimeouttimer

# SYS\_Timer.clearTimeoutTimer() method

Clear the specified timeout timer

## Signature

```typescript
function clearTimeoutTimer(id: string): boolean;
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

string

</td><td>

Timer ID

</td></tr>
</tbody></table>

## Returns

boolean

Whether the timer was cleared successfully

## Example

```javascript
// 1. 挂一个 2 秒后才触发的定时器
let fired = false;
eda.sys_Timer.setTimeoutTimer('嘉立创示例_取消单次', 2000, () => { fired = true; });

// 2. 在触发前清除它
const cleared = eda.sys_Timer.clearTimeoutTimer('嘉立创示例_取消单次');

// 3. 对已清除的 ID 再清除一次，返回 false（定时器已不存在）
const again = eda.sys_Timer.clearTimeoutTimer('嘉立创示例_取消单次');

// 4. 等过原定触发时间，确认回调没有被触发
await new Promise(resolve => setTimeout(resolve, 1000));

console.log('清除结果：', cleared);
console.log('再次清除同一 ID：', again);
console.log('回调是否仍被触发：', fired);
```

### setintervaltimer

# SYS\_Timer.setIntervalTimer() method

Set an interval timer

## Signature

```typescript
function setIntervalTimer(
	id: string,
	timeout: number,
	callFn: (...args: any) => void,
	...args: any
): boolean;
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

string

</td><td>

Timer ID, used to locate and delete the timer

</td></tr>
<tr><td>

timeout

</td><td>

number

</td><td>

Timer duration, unit ms

</td></tr>
<tr><td>

callFn

</td><td>

(...args: any) =&gt; void

</td><td>

Function called by the timer

</td></tr>
<tr><td>

args

</td><td>

any

</td><td>

Arguments passed to the timer callback function

</td></tr>
</tbody></table>

## Returns

boolean

Whether the timer was set successfully

## Remarks

If a timer with a duplicate ID is encountered, the previously set timer will be cleared

## Example

```javascript
// 1. 设置每 200ms 触发一次的循环定时器，统计触发次数
let tickCount = 0;
const created = eda.sys_Timer.setIntervalTimer('嘉立创示例_循环', 200, () => { tickCount++; });

// 2. 让它运行约 1.5 秒
await new Promise(resolve => setTimeout(resolve, 1500));
const ticksAtClear = tickCount;

// 3. 用完清除，定时器停止（净零收尾，可重复运行）
const cleared = eda.sys_Timer.clearIntervalTimer('嘉立创示例_循环');

// 4. 再等一会，确认清除后没有继续触发
await new Promise(resolve => setTimeout(resolve, 600));

console.log('设置结果：', created);
console.log('清除结果：', cleared);
console.log('运行期间触发次数：', ticksAtClear, '，清除后新增：', tickCount - ticksAtClear);
```

### settimeouttimer

# SYS\_Timer.setTimeoutTimer() method

Set a timeout timer

## Signature

```typescript
function setTimeoutTimer(
	id: string,
	timeout: number,
	callFn: (...args: any) => void,
	...args: any
): boolean;
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

string

</td><td>

Timer ID

</td></tr>
<tr><td>

timeout

</td><td>

number

</td><td>

Timer duration, unit ms

</td></tr>
<tr><td>

callFn

</td><td>

(...args: any) =&gt; void

</td><td>

Function called by the timer

</td></tr>
<tr><td>

args

</td><td>

any

</td><td>

Arguments passed to the timer callback function

</td></tr>
</tbody></table>

## Returns

boolean

Whether the timer was set successfully

## Remarks

If a timer with a duplicate ID is encountered, the previously set timer will be cleared

## Example

```javascript
// 1. 设置 200ms 后触发一次的定时器，并给回调传参
let received = null;
const created = eda.sys_Timer.setTimeoutTimer('嘉立创示例_单次', 200, (msg) => { received = msg; }, '延时任务完成');

// 2. 等待定时器到期（单次定时器触发后自动结束，无需手动清理）
await new Promise(resolve => setTimeout(resolve, 1500));

console.log('设置结果：', created);
console.log('回调收到的参数：', received);
```
