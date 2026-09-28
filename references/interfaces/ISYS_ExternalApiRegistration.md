# ISYS\_ExternalApiRegistration interface

扩展注入的上层接口注册条目

## Signature

```typescript
interface ISYS_ExternalApiRegistration
```

## Remarks

存储在 gVars.extensionRegisteredExternalApis 与 gVars.extensionExternalApiIndex 中

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

[callFn](./ISYS_ExternalApiRegistration.md)

</td><td>

</td><td>

(...args: any\[\]) =&gt; any \| Promise&lt;any&gt;

</td><td>

实际调用函数

</td></tr>
<tr><td>

[extensionUuid](./ISYS_ExternalApiRegistration.md)

</td><td>

</td><td>

string

</td><td>

注册该接口的扩展 UUID

</td></tr>
<tr><td>

[help?](./ISYS_ExternalApiRegistration.md)

</td><td>

</td><td>

[ISYS\_ExternalApiHelp](./ISYS_ExternalApiHelp.md)

</td><td>

_(Optional)_ Help 元数据（可选）

</td></tr>
<tr><td>

[priority](./ISYS_ExternalApiRegistration.md)

</td><td>

</td><td>

number

</td><td>

注册顺序，越小越优先（最早注册优先）

</td></tr>
</tbody></table>

---

## 属性详情

### callfn

# ISYS\_ExternalApiRegistration.callFn property

实际调用函数

## Signature

```typescript
callFn: (...args: any[]) => any | Promise<any>;
```

### extensionuuid

# ISYS\_ExternalApiRegistration.extensionUuid property

注册该接口的扩展 UUID

## Signature

```typescript
extensionUuid: string;
```

### help

# ISYS\_ExternalApiRegistration.help property

Help 元数据（可选）

## Signature

```typescript
help?: ISYS_ExternalApiHelp;
```

### priority

# ISYS\_ExternalApiRegistration.priority property

注册顺序，越小越优先（最早注册优先）

## Signature

```typescript
priority: number;
```
