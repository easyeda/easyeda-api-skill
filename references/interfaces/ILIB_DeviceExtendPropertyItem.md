# ILIB\_DeviceExtendPropertyItem interface

器件扩展属性

## Signature

```typescript
interface ILIB_DeviceExtendPropertyItem 
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

[addIntoBom?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 加入 BOM


</td></tr>
<tr><td>

[addIntoPcb?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 转到 PCB


</td></tr>
<tr><td>

[designator?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 位号


</td></tr>
<tr><td>

[manufacturer?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 制造商


</td></tr>
<tr><td>

[manufacturerId?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 制造商编号


</td></tr>
<tr><td>

[name?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 名称


</td></tr>
<tr><td>

[net?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 网络


</td></tr>
<tr><td>

[otherProperty?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

\{ \[key: string\]: boolean \| number \| string \| undefined; \}


</td><td>

_(Optional)_ 其它属性


</td></tr>
<tr><td>

[supplier?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 供应商


</td></tr>
<tr><td>

[supplierId?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ 供应商编号


</td></tr>
</tbody></table>

---

## 属性详情

### addintobom

# ILIB\_DeviceExtendPropertyItem.addIntoBom property

加入 BOM

## Signature

```typescript
addIntoBom?: boolean;
```

### addintopcb

# ILIB\_DeviceExtendPropertyItem.addIntoPcb property

转到 PCB

## Signature

```typescript
addIntoPcb?: boolean;
```

### designator

# ILIB\_DeviceExtendPropertyItem.designator property

位号

## Signature

```typescript
designator?: string;
```

### manufacturer

# ILIB\_DeviceExtendPropertyItem.manufacturer property

制造商

## Signature

```typescript
manufacturer?: string;
```

### manufacturerid

# ILIB\_DeviceExtendPropertyItem.manufacturerId property

制造商编号

## Signature

```typescript
manufacturerId?: string;
```

### name

# ILIB\_DeviceExtendPropertyItem.name property

名称

## Signature

```typescript
name?: string;
```

### net

# ILIB\_DeviceExtendPropertyItem.net property

网络

## Signature

```typescript
net?: string;
```

### otherproperty

# ILIB\_DeviceExtendPropertyItem.otherProperty property

其它属性

## Signature

```typescript
otherProperty?: {
        [key: string]: boolean | number | string | undefined;
    };
```

### supplier

# ILIB\_DeviceExtendPropertyItem.supplier property

供应商

## Signature

```typescript
supplier?: string;
```

### supplierid

# ILIB\_DeviceExtendPropertyItem.supplierId property

供应商编号

## Signature

```typescript
supplierId?: string;
```
