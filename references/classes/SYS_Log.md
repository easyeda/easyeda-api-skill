# SYS\_Log class

系统 / 日志类

## 签名

```typescript
declare class SYS_Log 
```

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[add(message, type)](./SYS_Log.md)


</td><td>


</td><td>

添加日志条目


</td></tr>
<tr><td>

[clear()](./SYS_Log.md)


</td><td>


</td><td>

清空日志


</td></tr>
<tr><td>

[export(types)](./SYS_Log.md)


</td><td>


</td><td>

导出日志


</td></tr>
<tr><td>

[find(message, types)](./SYS_Log.md)


</td><td>


</td><td>

查找条目


</td></tr>
<tr><td>

[sort(types)](./SYS_Log.md)


</td><td>


</td><td>

筛选并获取日志条目


</td></tr>
</tbody></table>

---

## 方法详情

### add

# SYS\_Log.add() method

添加日志条目

## 签名

```typescript
add(message: string, type?: ESYS_LogType): void;
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

message


</td><td>

string


</td><td>

日志内容


</td></tr>
<tr><td>

type


</td><td>

[ESYS\_LogType](../enums/ESYS_LogType.md)


</td><td>

_（可选）_ 日志类型


</td></tr>
</tbody></table>



## 返回值

void

### clear

# SYS\_Log.clear() method

清空日志

## 签名

```typescript
clear(): void;
```


## 返回值

void

### export

# SYS\_Log.export() method

导出日志

## 签名

```typescript
export(types?: ESYS_LogType | Array<ESYS_LogType>): void;
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

types


</td><td>

[ESYS\_LogType](../enums/ESYS_LogType.md) \| Array&lt;[ESYS\_LogType](../enums/ESYS_LogType.md)<!-- -->&gt;


</td><td>

_（可选）_ 日志类型


</td></tr>
</tbody></table>



## 返回值

void

### find

# SYS\_Log.find() method

查找条目

## 签名

```typescript
find(message: string | Array<string | {
        text: string;
        attr?: {
            id?: string;
            path?: string;
            sheet?: string;
            pcbid?: string;
            type?: string;
        };
    }>, types?: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>;
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

message


</td><td>

string \| Array&lt;string \| { text: string; attr?: { id?: string; path?: string; sheet?: string; pcbid?: string; type?: string; }; }&gt;


</td><td>

查找内容


</td></tr>
<tr><td>

types


</td><td>

[ESYS\_LogType](../enums/ESYS_LogType.md) \| Array&lt;[ESYS\_LogType](../enums/ESYS_LogType.md)<!-- -->&gt;


</td><td>

_（可选）_ 日志类型数组，可以在指定的日志类型内查找


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ISYS\_LogLine](../interfaces/ISYS_LogLine.md)<!-- -->&gt;&gt;

符合查找条件的日志条目数组

## 备注

如果日志面板处于打开状态，查找操作会同时在前端展现

### sort

# SYS\_Log.sort() method

筛选并获取日志条目

## 签名

```typescript
sort(types?: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>;
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

types


</td><td>

[ESYS\_LogType](../enums/ESYS_LogType.md) \| Array&lt;[ESYS\_LogType](../enums/ESYS_LogType.md)<!-- -->&gt;


</td><td>

_（可选）_ 日志类型数组，可以同时指定多种日志类型，如若不指定则为全部类型


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;[ISYS\_LogLine](../interfaces/ISYS_LogLine.md)<!-- -->&gt;&gt;

符合筛选条件的日志条目数组

## 备注

如果日志面板处于打开状态，筛选操作会同时在前端展现
