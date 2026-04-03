# ILIB\_DeviceExtendPropertyItem interface

器件扩展属性

## 签名

```typescript
interface ILIB_DeviceExtendPropertyItem 
```

## 属性

<table><thead><tr><th>

属性名


</th><th>

修饰符


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[addIntoBom?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

boolean


</td><td>

_（可选）_ 加入 BOM


</td></tr>
<tr><td>

[addIntoPcb?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

boolean


</td><td>

_（可选）_ 转到 PCB


</td></tr>
<tr><td>

[designator?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 位号


</td></tr>
<tr><td>

[manufacturer?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 制造商


</td></tr>
<tr><td>

[manufacturerId?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 制造商编号


</td></tr>
<tr><td>

[name?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 名称


</td></tr>
<tr><td>

[net?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 网络


</td></tr>
<tr><td>

[otherProperty?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

\{ \[key: string\]: boolean \| number \| string \| undefined; \}


</td><td>

_（可选）_ 其它参数


</td></tr>
<tr><td>

[supplier?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 供应商


</td></tr>
<tr><td>

[supplierId?](./ILIB_DeviceExtendPropertyItem.md)


</td><td>


</td><td>

string


</td><td>

_（可选）_ 供应商编号


</td></tr>
</tbody></table>

---

## 属性详情

### addintobom

# ILIB\_DeviceExtendPropertyItem.addIntoBom property

加入 BOM

## 签名

```typescript
addIntoBom?: boolean;
```

### addintopcb

# ILIB\_DeviceExtendPropertyItem.addIntoPcb property

转到 PCB

## 签名

```typescript
addIntoPcb?: boolean;
```

### designator

# ILIB\_DeviceExtendPropertyItem.designator property

位号

## 签名

```typescript
designator?: string;
```

### manufacturer

# ILIB\_DeviceExtendPropertyItem.manufacturer property

制造商

## 签名

```typescript
manufacturer?: string;
```

### manufacturerid

# ILIB\_DeviceExtendPropertyItem.manufacturerId property

制造商编号

## 签名

```typescript
manufacturerId?: string;
```

### name

# ILIB\_DeviceExtendPropertyItem.name property

名称

## 签名

```typescript
name?: string;
```

### net

# ILIB\_DeviceExtendPropertyItem.net property

网络

## 签名

```typescript
net?: string;
```

### otherproperty

# ILIB\_DeviceExtendPropertyItem.otherProperty property

其它参数

## 签名

```typescript
otherProperty?: {
        [key: string]: boolean | number | string | undefined;
    };
```

### supplier

# ILIB\_DeviceExtendPropertyItem.supplier property

供应商

## 签名

```typescript
supplier?: string;
```

### supplierid

# ILIB\_DeviceExtendPropertyItem.supplierId property

供应商编号

## 签名

```typescript
supplierId?: string;
```
