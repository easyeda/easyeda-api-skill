# ISCH\_SourcePrimitiveWireAddOptions interface

导线创建选项

## Signature

```typescript
interface ISCH_SourcePrimitiveWireAddOptions extends ISCH_SourceIdentity
```
**Extends:** [ISCH\_SourceIdentity](./ISCH_SourceIdentity.md)

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

[line](./ISCH_SourcePrimitiveWireAddOptions.md)

</td><td>

</td><td>

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;

</td><td>

折线点序列

</td></tr>
<tr><td>

[net?](./ISCH_SourcePrimitiveWireAddOptions.md)

</td><td>

</td><td>

string

</td><td>

_(Optional)_ 网络名称

</td></tr>
</tbody></table>

---

## 属性详情

### line

# ISCH\_SourcePrimitiveWireAddOptions.line property

折线点序列

## Signature

```typescript
line: Array<number> | Array<Array<number>>;
```

## Remarks

相邻两点必须水平或垂直。三种写法均接受，同一次调用内不得混用： - 点对 `[[x, y], [x, y], ...]`<!-- -->（整条折线，跨内层成段）； - 坐标串 `[[x1, y1, x2, y2, ...], ...]`<!-- -->（每组一段独立折线）； - 最外层扁平 `[x1, y1, x2, y2, ...]`<!-- -->（视作一段折线，等价 `[[x1, y1, ...]]`<!-- -->；\*\*过渡别名\*\*，首次使用内部打印一次告警，后续版本可能移除，新代码请用前两种）

\*\*端点处理\*\*：引脚或连接点必须作为折线端点

若连接点落在段中部，应先在该点拆段

\*\*交叉与连通\*\*：交叉处默认不连通，以允许导线交叉而不相连

### net

# ISCH\_SourcePrimitiveWireAddOptions.net property

网络名称

## Signature

```typescript
net?: string;
```

## Remarks

省略则由内部按几何连通性自动判定网络，给出则作为候选网络名

多网络模式下与相连网络的既有名并存，单网络模式下与既有名不同时返回 [NET\_CONFLICT](../enums/ESCH_SourceErrorCode.md)
