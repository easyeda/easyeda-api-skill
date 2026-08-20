# ISCH\_PrimitiveObject class

Binary embedded object primitive

## Signature

```typescript
export class ISCH_PrimitiveObject implements ISCH_Primitive 
```
**Implements:** [ISCH\_Primitive](../interfaces/ISCH_Primitive.md)

## Remarks


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[done()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Apply the changes to the primitives to the canvas


</td></tr>
<tr><td>

[getState\_Content()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Get the property state: object content


</td></tr>
<tr><td>

[getState\_FileName()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Get the property state: file name


</td></tr>
<tr><td>

[getState\_Height()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Get the property state: height


</td></tr>
<tr><td>

[getState\_Mirror()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Get the property state: whether it is mirrored


</td></tr>
<tr><td>

[getState\_PrimitiveId()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Get the property state: primitive ID


</td></tr>
<tr><td>

[getState\_PrimitiveType()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Get the property state: primitive type


</td></tr>
<tr><td>

[getState\_Rotation()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Get the property state: rotation angle


</td></tr>
<tr><td>

[getState\_StartX()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Get the property state: X coordinate


</td></tr>
<tr><td>

[getState\_StartY()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Get the property state: Y coordinate


</td></tr>
<tr><td>

[getState\_Width()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Get the property state: width


</td></tr>
<tr><td>

[isAsync()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Query whether the primitive is an async primitive


</td></tr>
<tr><td>

[reset()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Reset the async primitive to the current canvas state


</td></tr>
<tr><td>

[setState\_Content(content)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: object content


</td></tr>
<tr><td>

[setState\_FileName(fileName)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: file name


</td></tr>
<tr><td>

[setState\_Height(height)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: height


</td></tr>
<tr><td>

[setState\_Mirror(mirror)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: whether it is mirrored


</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: rotation angle


</td></tr>
<tr><td>

[setState\_StartX(startX)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: start point coordinates X


</td></tr>
<tr><td>

[setState\_StartY(startY)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: start point coordinates Y


</td></tr>
<tr><td>

[setState\_Width(width)](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

**_(BETA)_** Set the property state: width


</td></tr>
<tr><td>

[toAsync()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Convert Primitive to Async primitive


</td></tr>
<tr><td>

[toSync()](./ISCH_PrimitiveObject.md)


</td><td>


</td><td>

Convert Primitive to Sync primitive


</td></tr>
</tbody></table>

---

## 方法详情

### done

# ISCH\_PrimitiveObject.done() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Apply the changes to the primitives to the canvas

## Signature

```typescript
public done(): Promise<ISCH_PrimitiveObject>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)<!-- -->&gt;

Binary embedded object primitive object

### getstate_content

# ISCH\_PrimitiveObject.getState\_Content() method

Get the property state: object content

## Signature

```typescript
public getState_Content(): File | string;
```


## Returns

File \| string

Object content

### getstate_filename

# ISCH\_PrimitiveObject.getState\_FileName() method

Get the property state: file name

## Signature

```typescript
public getState_FileName(): string;
```


## Returns

string

File name

### getstate_height

# ISCH\_PrimitiveObject.getState\_Height() method

Get the property state: height

## Signature

```typescript
public getState_Height(): number;
```


## Returns

number

Height

### getstate_mirror

# ISCH\_PrimitiveObject.getState\_Mirror() method

Get the property state: whether it is mirrored

## Signature

```typescript
public getState_Mirror(): boolean;
```


## Returns

boolean

Whether it is mirrored

### getstate_primitiveid

# ISCH\_PrimitiveObject.getState\_PrimitiveId() method

Get the property state: primitive ID

## Signature

```typescript
public getState_PrimitiveId(): string;
```


## Returns

string

Primitive ID

### getstate_primitivetype

# ISCH\_PrimitiveObject.getState\_PrimitiveType() method

Get the property state: primitive type

## Signature

```typescript
public getState_PrimitiveType(): ESCH_PrimitiveType;
```


## Returns

[ESCH\_PrimitiveType](../enums/ESCH_PrimitiveType.md)

Primitive type

### getstate_rotation

# ISCH\_PrimitiveObject.getState\_Rotation() method

Get the property state: rotation angle

## Signature

```typescript
public getState_Rotation(): number;
```


## Returns

number

Rotation angle

### getstate_startx

# ISCH\_PrimitiveObject.getState\_StartX() method

Get the property state: X coordinate

## Signature

```typescript
public getState_StartX(): number;
```


## Returns

number

X coordinate

### getstate_starty

# ISCH\_PrimitiveObject.getState\_StartY() method

Get the property state: Y coordinate

## Signature

```typescript
public getState_StartY(): number;
```


## Returns

number

Y coordinate

### getstate_width

# ISCH\_PrimitiveObject.getState\_Width() method

Get the property state: width

## Signature

```typescript
public getState_Width(): number;
```


## Returns

number

Width

### isasync

# ISCH\_PrimitiveObject.isAsync() method

Query whether the primitive is an async primitive

## Signature

```typescript
public isAsync(): boolean;
```


## Returns

boolean

Whether Is async primitive

### reset

# ISCH\_PrimitiveObject.reset() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reset the async primitive to the current canvas state

## Signature

```typescript
public reset(): Promise<ISCH_PrimitiveObject>;
```


## Returns

Promise&lt;[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)<!-- -->&gt;

Binary embedded object primitive object

### setstate_content

# ISCH\_PrimitiveObject.setState\_Content() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: object content

## Signature

```typescript
public setState_Content(content: File | string): ISCH_PrimitiveObject;
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

content


</td><td>

File \| string


</td><td>

Object content


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

Binary embedded object primitive object

### setstate_filename

# ISCH\_PrimitiveObject.setState\_FileName() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: file name

## Signature

```typescript
public setState_FileName(fileName: string): ISCH_PrimitiveObject;
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

fileName


</td><td>

string


</td><td>

File name


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

Binary embedded object primitive object

### setstate_height

# ISCH\_PrimitiveObject.setState\_Height() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: height

## Signature

```typescript
public setState_Height(height: number): ISCH_PrimitiveObject;
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

height


</td><td>

number


</td><td>

Height


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

Binary embedded object primitive object

### setstate_mirror

# ISCH\_PrimitiveObject.setState\_Mirror() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: whether it is mirrored

## Signature

```typescript
public setState_Mirror(mirror: boolean): ISCH_PrimitiveObject;
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

mirror


</td><td>

boolean


</td><td>

Whether it is mirrored


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

Binary embedded object primitive object

### setstate_rotation

# ISCH\_PrimitiveObject.setState\_Rotation() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: rotation angle

## Signature

```typescript
public setState_Rotation(rotation: number): ISCH_PrimitiveObject;
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

rotation


</td><td>

number


</td><td>

Rotation angle


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

Binary embedded object primitive object

### setstate_startx

# ISCH\_PrimitiveObject.setState\_StartX() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: start point coordinates X

## Signature

```typescript
public setState_StartX(startX: number): ISCH_PrimitiveObject;
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

startX


</td><td>

number


</td><td>

Start point coordinates X


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

Binary embedded object primitive object

### setstate_starty

# ISCH\_PrimitiveObject.setState\_StartY() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: start point coordinates Y

## Signature

```typescript
public setState_StartY(startY: number): ISCH_PrimitiveObject;
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

startY


</td><td>

number


</td><td>

Start point coordinates Y


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

Binary embedded object primitive object

### setstate_width

# ISCH\_PrimitiveObject.setState\_Width() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Set the property state: width

## Signature

```typescript
public setState_Width(width: number): ISCH_PrimitiveObject;
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

width


</td><td>

number


</td><td>

Width


</td></tr>
</tbody></table>



## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

Binary embedded object primitive object

### toasync

# ISCH\_PrimitiveObject.toAsync() method

Convert Primitive to Async primitive

## Signature

```typescript
public toAsync(): ISCH_PrimitiveObject;
```


## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

Binary embedded object primitive object

### tosync

# ISCH\_PrimitiveObject.toSync() method

Convert Primitive to Sync primitive

## Signature

```typescript
public toSync(): ISCH_PrimitiveObject;
```


## Returns

[ISCH\_PrimitiveObject](./ISCH_PrimitiveObject.md)

Binary embedded object primitive object
