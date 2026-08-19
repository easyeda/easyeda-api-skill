# ILIB\_SimulationModelItem interface

仿真模型属性

## Signature

```typescript
export interface ILIB_SimulationModelItem 
```

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

[classification?](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

Array&lt;string&gt;


</td><td>

_(Optional)_ 分类


</td></tr>
<tr><td>

[description?](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 描述


</td></tr>
<tr><td>

[libraryType](./ILIB_SimulationModelItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.SIMULATION\_MODEL\_NGSPICE](../enums/ELIB_LibraryType.md) \| [ELIB\_LibraryType.SIMULATION\_MODEL\_SIMULIDE](../enums/ELIB_LibraryType.md)


</td><td>

库类型


</td></tr>
<tr><td>

[libraryUuid](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

所属库 UUID


</td></tr>
<tr><td>

[modelCategory](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

仿真模型分类


</td></tr>
<tr><td>

[modelData](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

仿真模型数据


</td></tr>
<tr><td>

[modelPin](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

仿真模型引脚


</td></tr>
<tr><td>

[name](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

仿真模型名称


</td></tr>
<tr><td>

[type](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

[ELIB\_SimulationModelType](../enums/ELIB_SimulationModelType.md)


</td><td>

仿真模型类型


</td></tr>
<tr><td>

[uuid](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

仿真模型 UUID


</td></tr>
</tbody></table>

---

## 属性详情

### classification

# ILIB\_SimulationModelItem.classification property

分类

## Signature

```typescript
classification?: Array<string>;
```

### description

# ILIB\_SimulationModelItem.description property

描述

## Signature

```typescript
description?: string;
```

### librarytype

# ILIB\_SimulationModelItem.libraryType property

库类型

## Signature

```typescript
readonly libraryType: ELIB_LibraryType.SIMULATION_MODEL_NGSPICE | ELIB_LibraryType.SIMULATION_MODEL_SIMULIDE;
```

### libraryuuid

# ILIB\_SimulationModelItem.libraryUuid property

所属库 UUID

## Signature

```typescript
libraryUuid: string;
```

### modelcategory

# ILIB\_SimulationModelItem.modelCategory property

仿真模型分类

## Signature

```typescript
modelCategory: string;
```

### modeldata

# ILIB\_SimulationModelItem.modelData property

仿真模型数据

## Signature

```typescript
modelData: string;
```

### modelpin

# ILIB\_SimulationModelItem.modelPin property

仿真模型引脚

## Signature

```typescript
modelPin: string;
```

### name

# ILIB\_SimulationModelItem.name property

仿真模型名称

## Signature

```typescript
name: string;
```

### type

# ILIB\_SimulationModelItem.type property

仿真模型类型

## Signature

```typescript
type: ELIB_SimulationModelType;
```

### uuid

# ILIB\_SimulationModelItem.uuid property

仿真模型 UUID

## Signature

```typescript
uuid: string;
```
