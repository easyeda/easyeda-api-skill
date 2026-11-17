# IPCB\_ViolationBase interface

检查违规项公共字段

## Signature

```typescript
interface IPCB_ViolationBase
```

## Remarks

DRC 与 DFM 的违规项均包含此处声明的字段，各自在此基础上扩展专有字段

## Properties

<table><thead><tr><th>

Property

</th><th>

Modifiers

</th><th>

Type

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

[errorType](./IPCB_ViolationBase.md)

</td><td>

</td><td>

string

</td><td>

错误类型

</td></tr>
<tr><td>

[layerIds](./IPCB_ViolationBase.md)

</td><td>

</td><td>

Array&lt;number&gt;

</td><td>

关联图层 ID 数组

</td></tr>
<tr><td>

[obj1](./IPCB_ViolationBase.md)

</td><td>

</td><td>

string

</td><td>

第一个关联对象

</td></tr>
<tr><td>

[obj1Type](./IPCB_ViolationBase.md)

</td><td>

</td><td>

string

</td><td>

第一个关联对象类型

</td></tr>
<tr><td>

[obj2?](./IPCB_ViolationBase.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 第二个关联对象

</td></tr>
<tr><td>

[obj2Type?](./IPCB_ViolationBase.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 第二个关联对象类型

</td></tr>
<tr><td>

[position](./IPCB_ViolationBase.md)

</td><td>

</td><td>

\{ x: number; y: number \}

</td><td>

违规位置

</td></tr>
<tr><td>

[ruleName](./IPCB_ViolationBase.md)

</td><td>

</td><td>

string

</td><td>

规则名称

</td></tr>
</tbody></table>

---

## 属性详情

### errortype

# IPCB\_ViolationBase.errorType property

错误类型

## Signature

```typescript
errorType: string;
```

### layerids

# IPCB\_ViolationBase.layerIds property

关联图层 ID 数组

## Signature

```typescript
layerIds: Array<number>;
```

### obj1

# IPCB\_ViolationBase.obj1 property

第一个关联对象

## Signature

```typescript
obj1: string;
```

### obj1type

# IPCB\_ViolationBase.obj1Type property

第一个关联对象类型

## Signature

```typescript
obj1Type: string;
```

### obj2

# IPCB\_ViolationBase.obj2 property

第二个关联对象

## Signature

```typescript
obj2?: string;
```

### obj2type

# IPCB\_ViolationBase.obj2Type property

第二个关联对象类型

## Signature

```typescript
obj2Type?: string;
```

### position

# IPCB\_ViolationBase.position property

违规位置

## Signature

```typescript
position: {
	x: number;
	y: number;
}
```

### rulename

# IPCB\_ViolationBase.ruleName property

规则名称

## Signature

```typescript
ruleName: string;
```
