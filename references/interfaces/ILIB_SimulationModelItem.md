# ILIB\_SimulationModelItem interface

Simulation model properties

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

_(Optional)_ Classification


</td></tr>
<tr><td>

[description?](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Description


</td></tr>
<tr><td>

[libraryType](./ILIB_SimulationModelItem.md)


</td><td>

`readonly`


</td><td>

[ELIB\_LibraryType.SIMULATION\_MODEL\_NGSPICE](../enums/ELIB_LibraryType.md) \| [ELIB\_LibraryType.SIMULATION\_MODEL\_SIMULIDE](../enums/ELIB_LibraryType.md)


</td><td>

Library type


</td></tr>
<tr><td>

[libraryUuid](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

UUID of the library it belongs to


</td></tr>
<tr><td>

[modelCategory](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

Simulation model category


</td></tr>
<tr><td>

[modelData](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

Simulation model data


</td></tr>
<tr><td>

[modelPin](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

Simulation model pin


</td></tr>
<tr><td>

[name](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

Simulation model name


</td></tr>
<tr><td>

[type](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

[ELIB\_SimulationModelType](../enums/ELIB_SimulationModelType.md)


</td><td>

Simulation model type


</td></tr>
<tr><td>

[uuid](./ILIB_SimulationModelItem.md)


</td><td>


</td><td>

string


</td><td>

Simulation model UUID


</td></tr>
</tbody></table>

---

## 属性详情

### classification

# ILIB\_SimulationModelItem.classification property

Classification

## Signature

```typescript
classification?: Array<string>;
```

### description

# ILIB\_SimulationModelItem.description property

Description

## Signature

```typescript
description?: string;
```

### librarytype

# ILIB\_SimulationModelItem.libraryType property

Library type

## Signature

```typescript
readonly libraryType: ELIB_LibraryType.SIMULATION_MODEL_NGSPICE | ELIB_LibraryType.SIMULATION_MODEL_SIMULIDE;
```

### libraryuuid

# ILIB\_SimulationModelItem.libraryUuid property

UUID of the library it belongs to

## Signature

```typescript
libraryUuid: string;
```

### modelcategory

# ILIB\_SimulationModelItem.modelCategory property

Simulation model category

## Signature

```typescript
modelCategory: string;
```

### modeldata

# ILIB\_SimulationModelItem.modelData property

Simulation model data

## Signature

```typescript
modelData: string;
```

### modelpin

# ILIB\_SimulationModelItem.modelPin property

Simulation model pin

## Signature

```typescript
modelPin: string;
```

### name

# ILIB\_SimulationModelItem.name property

Simulation model name

## Signature

```typescript
name: string;
```

### type

# ILIB\_SimulationModelItem.type property

Simulation model type

## Signature

```typescript
type: ELIB_SimulationModelType;
```

### uuid

# ILIB\_SimulationModelItem.uuid property

Simulation model UUID

## Signature

```typescript
uuid: string;
```
