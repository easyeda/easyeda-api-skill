# ISYS\_ShortcutKeyData interface

快捷键数据

## Signature

```typescript
export interface ISYS_ShortcutKeyData 
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

[range](./ISYS_ShortcutKeyData.md)


</td><td>


</td><td>

Array&lt;[ESYS\_ShortcutKeyEffectiveEditorRange](../enums/ESYS_ShortcutKeyEffectiveEditorRange.md)<!-- -->&gt;


</td><td>

快捷键生效页面范围


</td></tr>
<tr><td>

[remark](./ISYS_ShortcutKeyData.md)


</td><td>


</td><td>

string


</td><td>

备注


</td></tr>
<tr><td>

[scene](./ISYS_ShortcutKeyData.md)


</td><td>


</td><td>

Array&lt;[ESYS\_ShortcutKeyEffectiveEditorScene](../enums/ESYS_ShortcutKeyEffectiveEditorScene.md)<!-- -->&gt;


</td><td>

快捷键生效场景范围


</td></tr>
<tr><td>

[shortcutKey](./ISYS_ShortcutKeyData.md)


</td><td>


</td><td>

[TSYS\_ShortcutKeys](../types/TSYS_ShortcutKeys.md) \| null


</td><td>

快捷键


</td></tr>
<tr><td>

[title](./ISYS_ShortcutKeyData.md)


</td><td>


</td><td>

string


</td><td>

标题


</td></tr>
</tbody></table>

---

## 属性详情

### range

# ISYS\_ShortcutKeyData.range property

快捷键生效页面范围

## Signature

```typescript
range: Array<ESYS_ShortcutKeyEffectiveEditorRange>;
```

### remark

# ISYS\_ShortcutKeyData.remark property

备注

## Signature

```typescript
remark: string;
```

### scene

# ISYS\_ShortcutKeyData.scene property

快捷键生效场景范围

## Signature

```typescript
scene: Array<ESYS_ShortcutKeyEffectiveEditorScene>;
```

### shortcutkey

# ISYS\_ShortcutKeyData.shortcutKey property

快捷键

## Signature

```typescript
shortcutKey: TSYS_ShortcutKeys | null;
```

### title

# ISYS\_ShortcutKeyData.title property

标题

## Signature

```typescript
title: string;
```
