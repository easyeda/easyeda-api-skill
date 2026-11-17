# ESYS\_ProgressBarAction enum

进度条事件操作类型

## Signature

```typescript
enum ESYS_ProgressBarAction
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

CLOSE

</td><td>

`'close'`

</td><td>

用户点击进度条上的关闭按钮

</td></tr>
<tr><td>

COMPLETE

</td><td>

`'complete'`

</td><td>

进度到达 100%，任务完成自动关闭

</td></tr>
<tr><td>

DESTROY

</td><td>

`'destroy'`

</td><td>

进度条在未完成时被程序主动销毁，例如调用 [SYS\_LoadingAndProgressBar.destroyProgressBar()](../classes/SYS_LoadingAndProgressBar.md)

</td></tr>
<tr><td>

START

</td><td>

`'start'`

</td><td>

进度条创建并开始显示

</td></tr>
<tr><td>

UPDATE

</td><td>

`'update'`

</td><td>

进度值更新（递增），可能高频触发

</td></tr>
</tbody></table>

## Remarks

覆盖进度条整个生命周期的各个阶段；后续如增加其它交互方式，会在此追加取值