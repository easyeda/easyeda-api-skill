# SYS\_LoadingAndProgressBar class

系统 / 加载与进度条类

## 签名

```typescript
declare class SYS_LoadingAndProgressBar 
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

## 签名

```typescript
destroyLoading(): void;
```


## 返回值

void

### destroyprogressbar

# SYS\_LoadingAndProgressBar.destroyProgressBar() method

销毁进度条

## 签名

```typescript
destroyProgressBar(): void;
```


## 返回值

void

### showloading

# SYS\_LoadingAndProgressBar.showLoading() method

显示无进度加载覆盖

## 签名

```typescript
showLoading(): void;
```


## 返回值

void

## 备注

没有进度指示，但会存在与进度条一致的灰色覆盖，阻止用户进一步操作

### showprogressbar

# SYS\_LoadingAndProgressBar.showProgressBar() method

显示进度条或设置进度条进度

## 签名

```typescript
showProgressBar(progress?: number, title?: string): void;
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

progress


</td><td>

number


</td><td>

_（可选）_ 进度值，取值范围 `0-100`


</td></tr>
<tr><td>

title


</td><td>

string


</td><td>

_（可选）_ 进度条标题


</td></tr>
</tbody></table>



## 返回值

void

## 备注

当进度达到 `100` 时，进度条将自动销毁
