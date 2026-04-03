# SYS\_RightClickMenu class

系统 / 右键菜单类

## 签名

```typescript
declare class SYS_RightClickMenu 
```

## 备注


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[changeMenu(menuId, menuItems)](./SYS_RightClickMenu.md)


</td><td>


</td><td>

**_(BETA)_** 修改右键菜单


</td></tr>
</tbody></table>

---

## 方法详情

### changemenu

# SYS\_RightClickMenu.changeMenu() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改右键菜单

## 签名

```typescript
changeMenu(menuId: string, menuItems: Array<ISYS_RightClickMenuItem | null>): Promise<void>;
```

## 参数名

<table><thead><tr><th>

参数


</th><th>

类型


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

menuId


</td><td>

string


</td><td>

菜单 ID


</td></tr>
<tr><td>

menuItems


</td><td>

Array&lt;[ISYS\_RightClickMenuItem](../interfaces/ISYS_RightClickMenuItem.md) \| null&gt;


</td><td>

菜单项，`null` 代表分隔符


</td></tr>
</tbody></table>



## 返回值

Promise&lt;void&gt;

## 备注

当前仅支持 \*\*底部菜单器件列表项目右击\*\*、\*\*底部菜单符号列表项目右击\*\*、\*\*底部菜单封装列表项目右击\*\*、\*\*底部菜单复用模块列表项目右击\*\* 的右键菜单修改

如若希望重新排序、移除部分菜单项，在 `menuItems` 内只需传入菜单项 ID，其它属性将自动保持不变

如若需要注册新的右键菜单，需要传入完整的 [ISYS\_RightClickMenuItem](../interfaces/ISYS_RightClickMenuItem.md) 数据

本接口将会强制新建的右键菜单的 ID 包含扩展 UUID，例如输入的 `id = 'example'`<!-- -->，将会被自动重写为 `e143d88179874e7f851cc890cd22fc71|example`

注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

非公开接口使用提醒：本接口按原样提供，不提供参数的额外文档，参数可能在任何版本出现破坏性更改并不另行通知
