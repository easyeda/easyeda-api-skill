# LIB\_SelectControl class

综合库 / 选择控制类

## 签名

```typescript
declare class LIB_SelectControl 
```

## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[getSelectedLibraryRowInfo()](./LIB_SelectControl.md)


</td><td>


</td><td>

**_(BETA)_** 获取当前底部库选中行的信息


</td></tr>
</tbody></table>

---

## 方法详情

### getselectedlibraryrowinfo

# LIB\_SelectControl.getSelectedLibraryRowInfo() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取当前底部库选中行的信息

## 签名

```typescript
getSelectedLibraryRowInfo(): Promise<ILIB_LibraryItem | undefined>;
```


## 返回值

Promise&lt;[ILIB\_LibraryItem](../interfaces/ILIB_LibraryItem.md) \| undefined&gt;

库属性对象，如若为 `undefined` 则获取失败

## 备注

将会获取当前底部库选中行的库类型、UUID、所属库 UUID
