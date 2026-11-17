# IPCB\_AutoLayoutIterationData interface

自动布局引擎当前迭代阶段的最优解

## Signature

```typescript
interface IPCB_AutoLayoutIterationData
```

## Remarks

透传布局引擎每次迭代上报的最优解格式化数据

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

[boardOutline?](./IPCB_AutoLayoutIterationData.md)

</td><td>

</td><td>

unknown

</td><td>

_(Optional)_ 边框数据

</td></tr>
<tr><td>

[components?](./IPCB_AutoLayoutIterationData.md)

</td><td>

</td><td>

unknown

</td><td>

_(Optional)_ 元件数据（designator → 位置/角度映射）

</td></tr>
<tr><td>

[finish?](./IPCB_AutoLayoutIterationData.md)

</td><td>

</td><td>

boolean

</td><td>

_(Optional)_ 是否完成

</td></tr>
<tr><td>

[fitness?](./IPCB_AutoLayoutIterationData.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ GA 适应度

</td></tr>
<tr><td>

[generation?](./IPCB_AutoLayoutIterationData.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 当前代数

</td></tr>
<tr><td>

[generationsNum?](./IPCB_AutoLayoutIterationData.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 总代数

</td></tr>
<tr><td>

[progress?](./IPCB_AutoLayoutIterationData.md)

</td><td>

</td><td>

number

</td><td>

_(Optional)_ 当前进度 \[0, 1\]

</td></tr>
</tbody></table>

---

## 属性详情

### boardoutline

# IPCB\_AutoLayoutIterationData.boardOutline property

边框数据

## Signature

```typescript
boardOutline?: unknown;
```

### components

# IPCB\_AutoLayoutIterationData.components property

元件数据（designator → 位置/角度映射）

## Signature

```typescript
components?: unknown;
```

### finish

# IPCB\_AutoLayoutIterationData.finish property

是否完成

## Signature

```typescript
finish?: boolean;
```

### fitness

# IPCB\_AutoLayoutIterationData.fitness property

GA 适应度

## Signature

```typescript
fitness?: number;
```

### generation

# IPCB\_AutoLayoutIterationData.generation property

当前代数

## Signature

```typescript
generation?: number;
```

### generationsnum

# IPCB\_AutoLayoutIterationData.generationsNum property

总代数

## Signature

```typescript
generationsNum?: number;
```

### progress

# IPCB\_AutoLayoutIterationData.progress property

当前进度 \[0, 1\]

## Signature

```typescript
progress?: number;
```
