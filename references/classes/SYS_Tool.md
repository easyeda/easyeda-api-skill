# SYS\_Tool class

系统 / 工具类

## 签名

```typescript
declare class SYS_Tool 
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

[netlistComparison(netlist1, netlist2)](./SYS_Tool.md)


</td><td>


</td><td>

**_(BETA)_** 网表对比


</td></tr>
</tbody></table>

---

## 方法详情

### netlistcomparison

# SYS\_Tool.netlistComparison() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

网表对比

## 签名

```typescript
netlistComparison(netlist1: string | {
        projectUuid: string;
        documentUuid: string;
    } | File, netlist2: string | {
        projectUuid: string;
        documentUuid: string;
    } | File): Promise<Array<{
        type: 'Net' | 'Component';
        object: string;
        netlist1Name: Array<string>;
        netlist2Name: Array<string>;
    }>>;
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

netlist1


</td><td>

string \| { projectUuid: string; documentUuid: string; } \| File


</td><td>

网表 1，可以为：①当前工程内的原理图、PCB 的 UUID；②其它工程的工程 UUID 和原理图、PCB UUID；③原理图、PCB 文件数据


</td></tr>
<tr><td>

netlist2


</td><td>

string \| { projectUuid: string; documentUuid: string; } \| File


</td><td>

网表 2，可以为：①当前工程内的原理图、PCB 的 UUID；②其它工程的工程 UUID 和原理图、PCB UUID；③原理图、PCB 文件数据


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Array&lt;{ type: 'Net' \| 'Component'; object: string; netlist1Name: Array&lt;string&gt;; netlist2Name: Array&lt;string&gt;; }&gt;&gt;

网表对比结果
