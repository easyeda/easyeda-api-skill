# ISYS\_ShortcutKeyData interface

Shortcut key data

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

Effective page range of the shortcut key


</td></tr>
<tr><td>

[remark](./ISYS_ShortcutKeyData.md)


</td><td>


</td><td>

string


</td><td>

Remarks


</td></tr>
<tr><td>

[scene](./ISYS_ShortcutKeyData.md)


</td><td>


</td><td>

Array&lt;[ESYS\_ShortcutKeyEffectiveEditorScene](../enums/ESYS_ShortcutKeyEffectiveEditorScene.md)<!-- -->&gt;


</td><td>

Effective scene range of the shortcut key


</td></tr>
<tr><td>

[shortcutKey](./ISYS_ShortcutKeyData.md)


</td><td>


</td><td>

[TSYS\_ShortcutKeys](../types/TSYS_ShortcutKeys.md) \| null


</td><td>

Shortcut key


</td></tr>
<tr><td>

[title](./ISYS_ShortcutKeyData.md)


</td><td>


</td><td>

string


</td><td>

Title


</td></tr>
</tbody></table>

---

## 属性详情

### range

# ISYS\_ShortcutKeyData.range property

Effective page range of the shortcut key

## Signature

```typescript
range: Array<ESYS_ShortcutKeyEffectiveEditorRange>;
```

### remark

# ISYS\_ShortcutKeyData.remark property

Remarks

## Signature

```typescript
remark: string;
```

### scene

# ISYS\_ShortcutKeyData.scene property

Effective scene range of the shortcut key

## Signature

```typescript
scene: Array<ESYS_ShortcutKeyEffectiveEditorScene>;
```

### shortcutkey

# ISYS\_ShortcutKeyData.shortcutKey property

Shortcut key

## Signature

```typescript
shortcutKey: TSYS_ShortcutKeys | null;
```

### title

# ISYS\_ShortcutKeyData.title property

Title

## Signature

```typescript
title: string;
```
