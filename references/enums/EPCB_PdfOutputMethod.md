# EPCB\_PdfOutputMethod enum

PDF output method

## Signature

```typescript
enum EPCB_PdfOutputMethod
```

## Enumeration Members

<table><thead><tr><th>

Member

</th><th>

Value

</th><th>

Description

</th></tr></thead>
<tbody><tr><td>

MULTI\_PAGE\_PDF

</td><td>

`'paged'`

</td><td>

单个多页 PDF

</td></tr>
<tr><td>

MULTIPLE\_SINGLE\_PAGE\_PDF

</td><td>

`'separated'`

</td><td>

多个单页 PDF（将会输出包含所有分解图层 PDF 文件的压缩包）

</td></tr>
<tr><td>

SINGLE\_PAGE\_PDF

</td><td>

`'merged'`

</td><td>

单个单页 PDF（将会输出包含每层一个 PDF 文件的压缩包）

</td></tr>
</tbody></table>