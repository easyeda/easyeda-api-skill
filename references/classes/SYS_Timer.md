# SYS\_Timer class

系统 / 定时器类

## 签名

```typescript
declare class SYS_Timer 
```

## 备注

设置定时器


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[clearIntervalTimer(id)](./SYS_Timer.md)


</td><td>


</td><td>

清除指定循环定时器


</td></tr>
<tr><td>

[clearTimeoutTimer(id)](./SYS_Timer.md)


</td><td>


</td><td>

清除指定单次定时器


</td></tr>
<tr><td>

[setIntervalTimer(id, timeout, callFn, args)](./SYS_Timer.md)


</td><td>


</td><td>

设置循环定时器


</td></tr>
<tr><td>

[setTimeoutTimer(id, timeout, callFn, args)](./SYS_Timer.md)


</td><td>


</td><td>

设置单次定时器


</td></tr>
</tbody></table>

---

## 方法详情

### clearintervaltimer

# SYS\_Timer.clearIntervalTimer() method

清除指定循环定时器

## 签名

```typescript
clearIntervalTimer(id: string): boolean;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

id


</td><td>

string


</td><td>

定时器 ID


</td></tr>
</tbody></table>



## 返回值

boolean

定时器是否清除成功

### cleartimeouttimer

# SYS\_Timer.clearTimeoutTimer() method

清除指定单次定时器

## 签名

```typescript
clearTimeoutTimer(id: string): boolean;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

id


</td><td>

string


</td><td>

定时器 ID


</td></tr>
</tbody></table>



## 返回值

boolean

定时器是否清除成功

### setintervaltimer

# SYS\_Timer.setIntervalTimer() method

设置循环定时器

## 签名

```typescript
setIntervalTimer(id: string, timeout: number, callFn: (...args: any) => void, ...args: any): boolean;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

id


</td><td>

string


</td><td>

定时器 ID，用于定位&amp;删除定时器


</td></tr>
<tr><td>

timeout


</td><td>

number


</td><td>

定时时间，单位 ms


</td></tr>
<tr><td>

callFn


</td><td>

(...args: any) =&gt; void


</td><td>

定时调用函数


</td></tr>
<tr><td>

args


</td><td>

any


</td><td>

传给定时调用函数的参数


</td></tr>
</tbody></table>



## 返回值

boolean

定时器是否设置成功

## 备注

如果遇到 ID 重复的定时器，则之前设置的定时器将被清除

### settimeouttimer

# SYS\_Timer.setTimeoutTimer() method

设置单次定时器

## 签名

```typescript
setTimeoutTimer(id: string, timeout: number, callFn: (...args: any) => void, ...args: any): boolean;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

id


</td><td>

string


</td><td>

定时器 ID


</td></tr>
<tr><td>

timeout


</td><td>

number


</td><td>

定时时间，单位 ms


</td></tr>
<tr><td>

callFn


</td><td>

(...args: any) =&gt; void


</td><td>

定时调用函数


</td></tr>
<tr><td>

args


</td><td>

any


</td><td>

传给定时调用函数的参数


</td></tr>
</tbody></table>



## 返回值

boolean

定时器是否设置成功

## 备注

如果遇到 ID 重复的定时器，则之前设置的定时器将被清除
