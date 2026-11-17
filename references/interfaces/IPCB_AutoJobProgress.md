# IPCB\_AutoJobProgress interface

自动布线 / 自动布局作业进度统计

## Signature

```typescript
interface IPCB_AutoJobProgress
```

## Remarks

顶层 `progress` 两类作业必有；其余字段按引擎可选携带： 布线携带 `routabitity`<!-- -->（布通率），布局携带 `fitness`<!-- -->（GA 适应度）/ `generation`<!-- -->（当前代数）/ `generationsNum`<!-- -->（总代数）

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

[fitness?](./IPCB_AutoJobProgress.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ GA 适应度（仅自动布局作业携带）

</td></tr>
<tr><td>

[generation?](./IPCB_AutoJobProgress.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 当前代数（仅自动布局作业携带）

</td></tr>
<tr><td>

[generationsNum?](./IPCB_AutoJobProgress.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 总代数（仅自动布局作业携带）

</td></tr>
<tr><td>

[progress](./IPCB_AutoJobProgress.md)

</td><td>

</td><td>

number

</td><td>

当前进度 \[0, 1\]（引擎最新一次迭代上报值）

</td></tr>
<tr><td>

[routabitity?](./IPCB_AutoJobProgress.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 布通率 \[0, 1\]（仅自动布线作业携带，引擎最新一次迭代上报值）

</td></tr>
</tbody></table>

---

## 属性详情

### fitness

# IPCB\_AutoJobProgress.fitness property

GA 适应度（仅自动布局作业携带）

## Signature

```typescript
fitness?: number;
```

### generation

# IPCB\_AutoJobProgress.generation property

当前代数（仅自动布局作业携带）

## Signature

```typescript
generation?: number;
```

### generationsnum

# IPCB\_AutoJobProgress.generationsNum property

总代数（仅自动布局作业携带）

## Signature

```typescript
generationsNum?: number;
```

### progress

# IPCB\_AutoJobProgress.progress property

当前进度 \[0, 1\]（引擎最新一次迭代上报值）

## Signature

```typescript
progress: number;
```

### routabitity

# IPCB\_AutoJobProgress.routabitity property

布通率 \[0, 1\]（仅自动布线作业携带，引擎最新一次迭代上报值）

## Signature

```typescript
routabitity?: number;
```
