# SCH\_Document class

原理图 &amp; 符号 / 文档操作类

## Signature

```typescript
declare class SCH_Document 
```

## Remarks

对设计文档总体进行的操作

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


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

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

自动布局

## Signature

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

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

props


</td><td>

{ uuids?: Array&lt;string&gt;; netlist?: { component: { \[uniqueId: string\]: { pinInfoMap: { \[key: string\]: { name: string; number: string; net: string; props: { 'Pin Number': string; }; }; }; }; }; }; designatorDeviceTypeMap?: { \[designator: string\]: 'resistor' \| 'capacitor' \| 'inductive' \| 'diode' \| 'triode' \| 'oscillator' \| 'chip' \| 'otherDevice'; }; }


</td><td>

_(Optional)_ 自动布局参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

结果

### autorouting

# SCH\_Document.autoRouting() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

自动布线

## Signature

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

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

props


</td><td>

{ uuids?: Array&lt;string&gt;; netlist?: { component: { \[uniqueId: string\]: { pinInfoMap: { \[key: string\]: { name: string; number: string; net: string; props: { 'Pin Number': string; }; }; }; }; }; }; designatorDeviceTypeMap?: { \[designator: string\]: 'resistor' \| 'capacitor' \| 'inductive' \| 'diode' \| 'triode' \| 'oscillator' \| 'chip' \| 'otherDevice'; }; }


</td><td>

_(Optional)_ 自动布线参数


</td></tr>
</tbody></table>



## Returns

Promise&lt;any&gt;

结果

### importchanges

# SCH\_Document.importChanges() method

从 PCB 导入变更

## Signature

```typescript
importChanges(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

导入操作是否成功，导入失败或游离原理图返回 `false`

### save

# SCH\_Document.save() method

保存文档

## Signature

```typescript
save(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

保存操作是否成功，保存失败、上传失败等错误均返回 `false`
