# SYS\_PanelControl class

System / panel control class

## Signature

```typescript
export class SYS_PanelControl 
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

Close the bottom panel


</td></tr>
<tr><td>

[closeLeftPanel()](./SYS_PanelControl.md)


</td><td>


</td><td>

Close the left panel


</td></tr>
<tr><td>

[closeRightPanel()](./SYS_PanelControl.md)


</td><td>


</td><td>

Close the right panel


</td></tr>
<tr><td>

[isBottomPanelLocked()](./SYS_PanelControl.md)


</td><td>


</td><td>

Query whether the bottom panel is locked


</td></tr>
<tr><td>

[isLeftPanelLocked()](./SYS_PanelControl.md)


</td><td>


</td><td>

Query whether the left panel is locked


</td></tr>
<tr><td>

[isRightPanelLocked()](./SYS_PanelControl.md)


</td><td>


</td><td>

Query whether the right panel is locked


</td></tr>
<tr><td>

[openBottomPanel(tab)](./SYS_PanelControl.md)


</td><td>


</td><td>

Open the bottom panel


</td></tr>
<tr><td>

[openLeftPanel(tab)](./SYS_PanelControl.md)


</td><td>


</td><td>

Open the left panel


</td></tr>
<tr><td>

[openRightPanel(tab)](./SYS_PanelControl.md)


</td><td>


</td><td>

Open the right panel


</td></tr>
<tr><td>

[toggleBottomPanelLockState(state)](./SYS_PanelControl.md)


</td><td>


</td><td>

Toggle the lock state of the bottom panel


</td></tr>
<tr><td>

[toggleLeftPanelLockState(state)](./SYS_PanelControl.md)


</td><td>


</td><td>

Toggle the lock state of the left panel


</td></tr>
<tr><td>

[toggleRightPanelLockState(state)](./SYS_PanelControl.md)


</td><td>


</td><td>

Toggle the lock state of the right panel


</td></tr>
</tbody></table>

---

## 方法详情

### closebottompanel

# SYS\_PanelControl.closeBottomPanel() method

Close the bottom panel

## Signature

```typescript
public closeBottomPanel(): void;
```


## Returns

void

### closeleftpanel

# SYS\_PanelControl.closeLeftPanel() method

Close the left panel

## Signature

```typescript
public closeLeftPanel(): void;
```


## Returns

void

### closerightpanel

# SYS\_PanelControl.closeRightPanel() method

Close the right panel

## Signature

```typescript
public closeRightPanel(): void;
```


## Returns

void

### isbottompanellocked

# SYS\_PanelControl.isBottomPanelLocked() method

Query whether the bottom panel is locked

## Signature

```typescript
public isBottomPanelLocked(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether Already lock

### isleftpanellocked

# SYS\_PanelControl.isLeftPanelLocked() method

Query whether the left panel is locked

## Signature

```typescript
public isLeftPanelLocked(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether Already lock

### isrightpanellocked

# SYS\_PanelControl.isRightPanelLocked() method

Query whether the right panel is locked

## Signature

```typescript
public isRightPanelLocked(): Promise<boolean>;
```


## Returns

Promise&lt;boolean&gt;

Whether Already lock

### openbottompanel

# SYS\_PanelControl.openBottomPanel() method

Open the bottom panel

## Signature

```typescript
public openBottomPanel(tab?: ESYS_BottomPanelTab): void;
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

_(Optional)_ Tab. If not specified, the tab will not be switched


</td></tr>
</tbody></table>



## Returns

void

### openleftpanel

# SYS\_PanelControl.openLeftPanel() method

Open the left panel

## Signature

```typescript
public openLeftPanel(tab?: ESYS_LeftPanelTab): void;
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

_(Optional)_ Tab. If not specified, the tab will not be switched


</td></tr>
</tbody></table>



## Returns

void

### openrightpanel

# SYS\_PanelControl.openRightPanel() method

Open the right panel

## Signature

```typescript
public openRightPanel(tab?: ESYS_RightPanelTab): void;
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

_(Optional)_ Tab. If not specified, the tab will not be switched


</td></tr>
</tbody></table>



## Returns

void

### togglebottompanellockstate

# SYS\_PanelControl.toggleBottomPanelLockState() method

Toggle the lock state of the bottom panel

## Signature

```typescript
public toggleBottomPanelLockState(state?: boolean): void;
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

_(Optional)_ Whether to lock. If not specified, the current state is inverted


</td></tr>
</tbody></table>



## Returns

void

### toggleleftpanellockstate

# SYS\_PanelControl.toggleLeftPanelLockState() method

Toggle the lock state of the left panel

## Signature

```typescript
public toggleLeftPanelLockState(state?: boolean): void;
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

_(Optional)_ Whether to lock. If not specified, the current state is inverted


</td></tr>
</tbody></table>



## Returns

void

### togglerightpanellockstate

# SYS\_PanelControl.toggleRightPanelLockState() method

Toggle the lock state of the right panel

## Signature

```typescript
public toggleRightPanelLockState(state?: boolean): void;
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

_(Optional)_ Whether to lock. If not specified, the current state is inverted


</td></tr>
</tbody></table>



## Returns

void
