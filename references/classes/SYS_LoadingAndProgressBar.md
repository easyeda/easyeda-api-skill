# SYS\_LoadingAndProgressBar class

System / loading and progress bar class

## Signature

```typescript
export class SYS_LoadingAndProgressBar 
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

[destroyLoading()](./SYS_LoadingAndProgressBar.md)


</td><td>


</td><td>

Destroy the no-progress loading overlay


</td></tr>
<tr><td>

[destroyProgressBar()](./SYS_LoadingAndProgressBar.md)


</td><td>


</td><td>

Destroy the progress bar


</td></tr>
<tr><td>

[showLoading()](./SYS_LoadingAndProgressBar.md)


</td><td>


</td><td>

Show the no-progress loading overlay


</td></tr>
<tr><td>

[showProgressBar(progress, title)](./SYS_LoadingAndProgressBar.md)


</td><td>


</td><td>

Show the progress bar or set its progress


</td></tr>
</tbody></table>

---

## 方法详情

### destroyloading

# SYS\_LoadingAndProgressBar.destroyLoading() method

Destroy the no-progress loading overlay

## Signature

```typescript
public destroyLoading(): void;
```


## Returns

void

### destroyprogressbar

# SYS\_LoadingAndProgressBar.destroyProgressBar() method

Destroy the progress bar

## Signature

```typescript
public destroyProgressBar(): void;
```


## Returns

void

### showloading

# SYS\_LoadingAndProgressBar.showLoading() method

Show the no-progress loading overlay

## Signature

```typescript
public showLoading(): void;
```


## Returns

void

## Remarks

There is no progress indicator, but a gray overlay consistent with the progress bar will appear to prevent further user operations

### showprogressbar

# SYS\_LoadingAndProgressBar.showProgressBar() method

Show the progress bar or set its progress

## Signature

```typescript
public showProgressBar(progress?: number, title?: string): void;
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

progress


</td><td>

number


</td><td>

_(Optional)_ Progress value, value range `0-100`


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_(Optional)_ Progress bar title


</td></tr>
</tbody></table>



## Returns

void

## Remarks

When the progress reaches `100`<!-- -->, the progress bar will be automatically destroyed
