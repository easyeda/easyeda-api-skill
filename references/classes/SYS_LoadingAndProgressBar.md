# SYS\_LoadingAndProgressBar class

系统 / 加载与进度条类

## Signature

```typescript
declare class SYS_LoadingAndProgressBar 
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

销毁无进度加载覆盖


</td></tr>
<tr><td>

[destroyProgressBar()](./SYS_LoadingAndProgressBar.md)


</td><td>


</td><td>

销毁进度条


</td></tr>
<tr><td>

[showLoading()](./SYS_LoadingAndProgressBar.md)


</td><td>


</td><td>

显示无进度加载覆盖


</td></tr>
<tr><td>

[showProgressBar(progress, title)](./SYS_LoadingAndProgressBar.md)


</td><td>


</td><td>

显示进度条或设置进度条进度


</td></tr>
</tbody></table>

---

## 方法详情

### destroyloading

# SYS\_LoadingAndProgressBar.destroyLoading() method

销毁无进度加载覆盖

## Signature

```typescript
destroyLoading(): void;
```


## Returns

void

### destroyprogressbar

# SYS\_LoadingAndProgressBar.destroyProgressBar() method

销毁进度条

## Signature

```typescript
destroyProgressBar(): void;
```


## Returns

void

### showloading

# SYS\_LoadingAndProgressBar.showLoading() method

显示无进度加载覆盖

## Signature

```typescript
showLoading(): void;
```


## Returns

void

## Remarks

没有进度指示，但会存在与进度条一致的灰色覆盖，阻止用户进一步操作

### showprogressbar

# SYS\_LoadingAndProgressBar.showProgressBar() method

显示进度条或设置进度条进度

## Signature

```typescript
showProgressBar(progress?: number, title?: string): void;
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

_(Optional)_ 进度值，取值范围 `0-100`


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_(Optional)_ 进度条标题


</td></tr>
</tbody></table>



## Returns

void

## Remarks

当进度达到 `100` 时，进度条将自动销毁
