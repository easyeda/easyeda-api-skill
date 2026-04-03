# SCH\_Document class

原理图 &amp; 符号 / 文档操作类

## 签名

```typescript
declare class SCH_Document 
```

## 备注

对设计文档总体进行的操作

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[autoLayout(props)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** 自动布局


</td></tr>
<tr><td>

[autoRouting(props)](./SCH_Document.md)


</td><td>


</td><td>

**_(BETA)_** 自动布线


</td></tr>
<tr><td>

[importChanges()](./SCH_Document.md)


</td><td>


</td><td>

从 PCB 导入变更


</td></tr>
<tr><td>

[save()](./SCH_Document.md)


</td><td>


</td><td>

保存文档


</td></tr>
</tbody></table>

---

## 方法详情

### autolayout

# SCH\_Document.autoLayout() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

自动布局

## 签名

```typescript
autoLayout(props?: {
        uuids?: Array<string>;
        netlist?: {
            component: {
                [uniqueId: string]: {
                    pinInfoMap: {
                        [key: string]: {
                            name: string;
                            number: string;
                            net: string;
                            props: {
                                'Pin Number': string;
                            };
                        };
                    };
                };
            };
        };
        designatorDeviceTypeMap?: {
            [designator: string]: 'resistor' | 'capacitor' | 'inductive' | 'diode' | 'triode' | 'oscillator' | 'chip' | 'otherDevice';
        };
    }): Promise<any>;
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

props


</td><td>

{ uuids?: Array&lt;string&gt;; netlist?: { component: { \[uniqueId: string\]: { pinInfoMap: { \[key: string\]: { name: string; number: string; net: string; props: { 'Pin Number': string; }; }; }; }; }; }; designatorDeviceTypeMap?: { \[designator: string\]: 'resistor' \| 'capacitor' \| 'inductive' \| 'diode' \| 'triode' \| 'oscillator' \| 'chip' \| 'otherDevice'; }; }


</td><td>

_（可选）_ 自动布局参数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;any&gt;

结果

### autorouting

# SCH\_Document.autoRouting() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

自动布线

## 签名

```typescript
autoRouting(props?: {
        uuids?: Array<string>;
        netlist?: {
            component: {
                [uniqueId: string]: {
                    pinInfoMap: {
                        [key: string]: {
                            name: string;
                            number: string;
                            net: string;
                            props: {
                                'Pin Number': string;
                            };
                        };
                    };
                };
            };
        };
        designatorDeviceTypeMap?: {
            [designator: string]: 'resistor' | 'capacitor' | 'inductive' | 'diode' | 'triode' | 'oscillator' | 'chip' | 'otherDevice';
        };
    }): Promise<any>;
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

props


</td><td>

{ uuids?: Array&lt;string&gt;; netlist?: { component: { \[uniqueId: string\]: { pinInfoMap: { \[key: string\]: { name: string; number: string; net: string; props: { 'Pin Number': string; }; }; }; }; }; }; designatorDeviceTypeMap?: { \[designator: string\]: 'resistor' \| 'capacitor' \| 'inductive' \| 'diode' \| 'triode' \| 'oscillator' \| 'chip' \| 'otherDevice'; }; }


</td><td>

_（可选）_ 自动布线参数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;any&gt;

结果

### importchanges

# SCH\_Document.importChanges() method

从 PCB 导入变更

## 签名

```typescript
importChanges(): Promise<boolean>;
```


## 返回值

Promise&lt;boolean&gt;

导入操作是否成功，导入失败或游离原理图返回 `false`

### save

# SCH\_Document.save() method

保存文档

## 签名

```typescript
save(): Promise<boolean>;
```


## 返回值

Promise&lt;boolean&gt;

保存操作是否成功，保存失败、上传失败等错误均返回 `false`
