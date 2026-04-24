# SYS\_PanelControl class

系统 / 面板控制类

## Signature

```typescript
declare class SYS_PanelControl 
```

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[closeBottomPanel()](./SYS_PanelControl.md)


</td><td>


</td><td>

关闭底部面板


</td></tr>
<tr><td>

[closeLeftPanel()](./SYS_PanelControl.md)


</td><td>


</td><td>

关闭左侧面板


</td></tr>
<tr><td>

[closeRightPanel()](./SYS_PanelControl.md)


</td><td>


</td><td>

关闭右侧面板


</td></tr>
<tr><td>

[isBottomPanelLocked()](./SYS_PanelControl.md)


</td><td>


</td><td>

查询底部面板是否已锁定


</td></tr>
<tr><td>

[isLeftPanelLocked()](./SYS_PanelControl.md)


</td><td>


</td><td>

查询左侧面板是否已锁定


</td></tr>
<tr><td>

[isRightPanelLocked()](./SYS_PanelControl.md)


</td><td>


</td><td>

查询右侧面板是否已锁定


</td></tr>
<tr><td>

[openBottomPanel(tab)](./SYS_PanelControl.md)


</td><td>


</td><td>

打开底部面板


</td></tr>
<tr><td>

[openLeftPanel(tab)](./SYS_PanelControl.md)


</td><td>


</td><td>

打开左侧面板


</td></tr>
<tr><td>

[openRightPanel(tab)](./SYS_PanelControl.md)


</td><td>


</td><td>

打开右侧面板


</td></tr>
<tr><td>

[toggleBottomPanelLockState(state)](./SYS_PanelControl.md)


</td><td>


</td><td>

切换底部面板锁定状态


</td></tr>
<tr><td>

[toggleLeftPanelLockState(state)](./SYS_PanelControl.md)


</td><td>


</td><td>

切换左侧面板锁定状态


</td></tr>
<tr><td>

[toggleRightPanelLockState(state)](./SYS_PanelControl.md)


</td><td>


</td><td>

切换右侧面板锁定状态


</td></tr>
</tbody></table>

---

## 方法详情

### closebottompanel

# SYS\_PanelControl.closeBottomPanel() method

关闭底部面板

## Signature

```typescript
closeBottomPanel(): void;
```


## Returns

void

### closeleftpanel

# SYS\_PanelControl.closeLeftPanel() method

关闭左侧面板

## Signature

```typescript
closeLeftPanel(): void;
```


## Returns

void

### closerightpanel

# SYS\_PanelControl.closeRightPanel() method

关闭右侧面板

## Signature

```typescript
closeRightPanel(): void;
```


## Returns

void

### isbottompanellocked

# SYS\_PanelControl.isBottomPanelLocked() method

查询底部面板是否已锁定

## Signature

```typescript
isBottomPanelLocked(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

是否已锁定

### isleftpanellocked

# SYS\_PanelControl.isLeftPanelLocked() method

查询左侧面板是否已锁定

## Signature

```typescript
isLeftPanelLocked(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

是否已锁定

### isrightpanellocked

# SYS\_PanelControl.isRightPanelLocked() method

查询右侧面板是否已锁定

## Signature

```typescript
isRightPanelLocked(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

是否已锁定

### openbottompanel

# SYS\_PanelControl.openBottomPanel() method

打开底部面板

## Signature

```typescript
openBottomPanel(tab?: ESYS_BottomPanelTab): void;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

tab


</td><td>

[ESYS\_BottomPanelTab](../enums/ESYS_BottomPanelTab.md)


</td><td>

_(Optional)_ 标签页，如若不指定则不切换标签页


</td></tr>
</tbody></table>



## Returns

void

### openleftpanel

# SYS\_PanelControl.openLeftPanel() method

打开左侧面板

## Signature

```typescript
openLeftPanel(tab?: ESYS_LeftPanelTab): void;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

tab


</td><td>

[ESYS\_LeftPanelTab](../enums/ESYS_LeftPanelTab.md)


</td><td>

_(Optional)_ 标签页，如若不指定则不切换标签页


</td></tr>
</tbody></table>



## Returns

void

### openrightpanel

# SYS\_PanelControl.openRightPanel() method

打开右侧面板

## Signature

```typescript
openRightPanel(tab?: ESYS_RightPanelTab): void;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

tab


</td><td>

[ESYS\_RightPanelTab](../enums/ESYS_RightPanelTab.md)


</td><td>

_(Optional)_ 标签页，如若不指定则不切换标签页


</td></tr>
</tbody></table>



## Returns

void

### togglebottompanellockstate

# SYS\_PanelControl.toggleBottomPanelLockState() method

切换底部面板锁定状态

## Signature

```typescript
toggleBottomPanelLockState(state?: boolean): void;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

state


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定，如若不指定则反置当前状态


</td></tr>
</tbody></table>



## Returns

void

### toggleleftpanellockstate

# SYS\_PanelControl.toggleLeftPanelLockState() method

切换左侧面板锁定状态

## Signature

```typescript
toggleLeftPanelLockState(state?: boolean): void;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

state


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定，如若不指定则反置当前状态


</td></tr>
</tbody></table>



## Returns

void

### togglerightpanellockstate

# SYS\_PanelControl.toggleRightPanelLockState() method

切换右侧面板锁定状态

## Signature

```typescript
toggleRightPanelLockState(state?: boolean): void;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

state


</td><td>

boolean


</td><td>

_(Optional)_ 是否锁定，如若不指定则反置当前状态


</td></tr>
</tbody></table>



## Returns

void
