# EPCB\_PdfOutputMethod enum

PDF 输出方式

## Signature

```typescript
declare enum EPCB_PdfOutputMethod 
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

`"A Multi Page PDF"`


</td><td>

单个多页 PDF


</td></tr>
<tr><td>

MULTIPLE\_SINGLE\_PAGE\_PDF


</td><td>

`"Multiple Single Page PDF"`


</td><td>

多个单页 PDF（将会输出包含所有分解图层 PDF 文件的压缩包）


</td></tr>
<tr><td>

SINGLE\_PAGE\_PDF


</td><td>

`"A Single Page PDF"`


</td><td>

单个单页 PDF（将会输出包含每层一个 PDF 文件的压缩包）


</td></tr>
</tbody></table>