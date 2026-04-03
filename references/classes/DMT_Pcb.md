# DMT\_Pcb class

文档树 / PCB 管理类

## 签名

```typescript
declare class DMT_Pcb 
```

## 备注

在当前打开的工程内进行 PCB 管理的相关操作

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[copyPcb(pcbUuid, boardName)](./DMT_Pcb.md)


</td><td>


</td><td>

复制 PCB


</td></tr>
<tr><td>

[createPcb(boardName)](./DMT_Pcb.md)


</td><td>


</td><td>

创建 PCB


</td></tr>
<tr><td>

[deletePcb(pcbUuid)](./DMT_Pcb.md)


</td><td>


</td><td>

删除 PCB


</td></tr>
<tr><td>

[getAllPcbsInfo()](./DMT_Pcb.md)


</td><td>


</td><td>

获取工程内所有 PCB 的详细属性


</td></tr>
<tr><td>

[getCurrentPcbInfo()](./DMT_Pcb.md)


</td><td>


</td><td>

获取当前 PCB 的详细属性


</td></tr>
<tr><td>

[getPcbInfo(pcbUuid)](./DMT_Pcb.md)


</td><td>


</td><td>

获取 PCB 的详细属性


</td></tr>
<tr><td>

[modifyPcbName(pcbUuid, pcbName)](./DMT_Pcb.md)


</td><td>


</td><td>

修改 PCB 名称


</td></tr>
</tbody></table>

---

## 方法详情

### copypcb

# DMT\_Pcb.copyPcb() method

复制 PCB

## 签名

```typescript
copyPcb(pcbUuid: string, boardName?: string): Promise<string | undefined>;
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

pcbUuid


</td><td>

string


</td><td>

源 PCB UUID


</td></tr>
<tr><td>

boardName


</td><td>

string


</td><td>

_（可选）_ 新 PCB 所属板子名称，如若不指定则为游离 PCB


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

新 PCB UUID，如若为 `undefined` 则复制失败

## 备注

即使此处 PCB 已关联复用模块（在工程库内存在同名的复用模块符号），也不新建复用模块符号，此操作逻辑与当前编辑器前端保持一致

### createpcb

# DMT\_Pcb.createPcb() method

创建 PCB

## 签名

```typescript
createPcb(boardName?: string): Promise<string | undefined>;
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

boardName


</td><td>

string


</td><td>

_（可选）_ 所属板子名称，如若不指定则为游离 PCB


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

PCB UUID，如若为 `undefined` 则创建失败

### deletepcb

# DMT\_Pcb.deletePcb() method

删除 PCB

## 签名

```typescript
deletePcb(pcbUuid: string): Promise<boolean>;
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

pcbUuid


</td><td>

string


</td><td>

PCB UUID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

如若 PCB 已关联复用模块（在工程库内存在同名的复用模块符号），则删除 PCB 时将同步删除关联的原理图和复用模块符号，复用模块符号不可删除则跳过

### getallpcbsinfo

# DMT\_Pcb.getAllPcbsInfo() method

获取工程内所有 PCB 的详细属性

## 签名

```typescript
getAllPcbsInfo(): Promise<Array<IDMT_PcbItem>>;
```


## 返回值

Promise&lt;Array&lt;[IDMT\_PcbItem](../interfaces/IDMT_PcbItem.md)<!-- -->&gt;&gt;

所有 PCB 的详细属性的数组

### getcurrentpcbinfo

# DMT\_Pcb.getCurrentPcbInfo() method

获取当前 PCB 的详细属性

## 签名

```typescript
getCurrentPcbInfo(): Promise<IDMT_PcbItem | undefined>;
```


## 返回值

Promise&lt;[IDMT\_PcbItem](../interfaces/IDMT_PcbItem.md) \| undefined&gt;

PCB 的详细属性，如若为 `undefined` 则获取失败

## 备注

将会获取当前打开且拥有最后输入焦点的 PCB 的详细属性

### getpcbinfo

# DMT\_Pcb.getPcbInfo() method

获取 PCB 的详细属性

## 签名

```typescript
getPcbInfo(pcbUuid: string): Promise<IDMT_PcbItem | undefined>;
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

pcbUuid


</td><td>

string


</td><td>

PCB UUID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IDMT\_PcbItem](../interfaces/IDMT_PcbItem.md) \| undefined&gt;

PCB 的详细属性，如若为 `undefined` 则获取失败

### modifypcbname

# DMT\_Pcb.modifyPcbName() method

修改 PCB 名称

## 签名

```typescript
modifyPcbName(pcbUuid: string, pcbName: string): Promise<boolean>;
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

pcbUuid


</td><td>

string


</td><td>

PCB UUID


</td></tr>
<tr><td>

pcbName


</td><td>

string


</td><td>

PCB 名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

是否修改成功

## 备注

如若 PCB 已关联复用模块（在工程库内存在同名的复用模块符号），则修改名称时将同步修改复用模块符号名称与关联原理图名称
