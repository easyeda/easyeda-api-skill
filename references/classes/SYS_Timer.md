# SYS\_Timer class

System / timer class

## Signature

```typescript
export class SYS_Timer 
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
public clearIntervalTimer(id: string): boolean;
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

### cleartimeouttimer

# SYS\_Timer.clearTimeoutTimer() method

Clear the specified timeout timer

## Signature

```typescript
public clearTimeoutTimer(id: string): boolean;
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

### setintervaltimer

# SYS\_Timer.setIntervalTimer() method

Set an interval timer

## Signature

```typescript
public setIntervalTimer(id: string, timeout: number, callFn: (...args: any) => void, ...args: any): boolean;
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

### settimeouttimer

# SYS\_Timer.setTimeoutTimer() method

Set a timeout timer

## Signature

```typescript
public setTimeoutTimer(id: string, timeout: number, callFn: (...args: any) => void, ...args: any): boolean;
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
