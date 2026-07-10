# IPCB\_AutoLayoutResult interface

自动布局结果

## Signature

```typescript
interface IPCB_AutoLayoutResult 
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

[duration](./IPCB_AutoLayoutResult.md)


</td><td>


</td><td>

number


</td><td>

自动布局耗时（毫秒）


</td></tr>
<tr><td>

[failedComponents](./IPCB_AutoLayoutResult.md)


</td><td>


</td><td>

Array&lt;string&gt;


</td><td>

未能完成布局的器件图元 ID 列表


</td></tr>
<tr><td>

[success](./IPCB_AutoLayoutResult.md)


</td><td>


</td><td>

boolean


</td><td>

自动布局是否成功启动


</td></tr>
<tr><td>

[successComponentsCount](./IPCB_AutoLayoutResult.md)


</td><td>


</td><td>

number


</td><td>

成功完成布局的器件数量


</td></tr>
<tr><td>

[totalComponentsCount](./IPCB_AutoLayoutResult.md)


</td><td>


</td><td>

number


</td><td>

参与自动布局的器件总数


</td></tr>
</tbody></table>

---

## 属性详情

### duration

# IPCB\_AutoLayoutResult.duration property

自动布局耗时（毫秒）

## Signature

```typescript
duration: number;
```

### failedcomponents

# IPCB\_AutoLayoutResult.failedComponents property

未能完成布局的器件图元 ID 列表

## Signature

```typescript
failedComponents: Array<string>;
```

### success

# IPCB\_AutoLayoutResult.success property

自动布局是否成功启动

## Signature

```typescript
success: boolean;
```

### successcomponentscount

# IPCB\_AutoLayoutResult.successComponentsCount property

成功完成布局的器件数量

## Signature

```typescript
successComponentsCount: number;
```

### totalcomponentscount

# IPCB\_AutoLayoutResult.totalComponentsCount property

参与自动布局的器件总数

## Signature

```typescript
totalComponentsCount: number;
```
