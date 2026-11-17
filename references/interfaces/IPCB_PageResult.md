# IPCB\_PageResult interface

分页结果

## Signature

```typescript
interface IPCB_PageResult<T>
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

[hasMore](./IPCB_PageResult.md)

</td><td>

</td><td>

boolean

</td><td>

是否还有下一页

</td></tr>
<tr><td>

[items](./IPCB_PageResult.md)

</td><td>

</td><td>

Array&lt;T&gt;

</td><td>

当前页数据

</td></tr>
<tr><td>

[nextCursor?](./IPCB_PageResult.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 下一页游标，无更多数据时为 `undefined`

</td></tr>
<tr><td>

[total?](./IPCB_PageResult.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 符合条件的总数

</td></tr>
</tbody></table>

---

## 属性详情

### hasmore

# IPCB\_PageResult.hasMore property

是否还有下一页

## Signature

```typescript
hasMore: boolean;
```

### items

# IPCB\_PageResult.items property

当前页数据

## Signature

```typescript
items: Array<T>;
```

### nextcursor

# IPCB\_PageResult.nextCursor property

下一页游标，无更多数据时为 `undefined`

## Signature

```typescript
nextCursor?: string;
```

### total

# IPCB\_PageResult.total property

符合条件的总数

## Signature

```typescript
total?: number;
```
