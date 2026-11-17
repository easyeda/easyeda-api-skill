# ISYS\_RightClickMenuItemPosition interface

右键菜单项插入位置

## Signature

```typescript
interface ISYS_RightClickMenuItemPosition
```

## Remarks

仅在插入菜单项时使用，用于指定新菜单项相对于已有菜单项的位置

`mode` 为 `before`<!-- -->、`after` 时必须提供 `referenceId`<!-- -->；`mode` 为 `index` 时必须提供 `index`

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

[index?](./ISYS_RightClickMenuItemPosition.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 目标下标，`mode` 为 `index` 时必填，`0` 表示最前面

</td></tr>
<tr><td>

[mode](./ISYS_RightClickMenuItemPosition.md)

</td><td>

</td><td>

'start' \| 'end' \| 'before' \| 'after' \| 'index'

</td><td>

插入方式

- `start`<!-- -->：插到菜单最前面 - `end`<!-- -->：插到菜单最后面 - `before`<!-- -->：插到指定菜单项之前 - `after`<!-- -->：插到指定菜单项之后 - `index`<!-- -->：插到指定下标处

</td></tr>
<tr><td>

[referenceId?](./ISYS_RightClickMenuItemPosition.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 参照菜单项 ID，`mode` 为 `before`<!-- -->、`after` 时必填

</td></tr>
</tbody></table>

---

## 属性详情

### index

# ISYS\_RightClickMenuItemPosition.index property

目标下标，`mode` 为 `index` 时必填，`0` 表示最前面

## Signature

```typescript
index?: number;
```

### mode

# ISYS\_RightClickMenuItemPosition.mode property

插入方式

- `start`<!-- -->：插到菜单最前面 - `end`<!-- -->：插到菜单最后面 - `before`<!-- -->：插到指定菜单项之前 - `after`<!-- -->：插到指定菜单项之后 - `index`<!-- -->：插到指定下标处

## Signature

```typescript
mode: 'start' | 'end' | 'before' | 'after' | 'index';
```

### referenceid

# ISYS\_RightClickMenuItemPosition.referenceId property

参照菜单项 ID，`mode` 为 `before`<!-- -->、`after` 时必填

## Signature

```typescript
referenceId?: string;
```
