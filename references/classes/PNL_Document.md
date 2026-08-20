# PNL\_Document class

Panel / document operation class

## Signature

```typescript
export class PNL_Document 
```

## Remarks

Operations performed on the design document as a whole

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[save()](./PNL_Document.md)


</td><td>


</td><td>

**_(BETA)_** Save Document


</td></tr>
</tbody></table>

---

## 方法详情

### save

# PNL\_Document.save() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Save Document

## Signature

```typescript
public save(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether the save operation was successful. Errors such as save failure and upload failure all return `false`
