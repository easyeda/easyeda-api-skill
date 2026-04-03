# SYS\_ClientUrl class

系统 / 外部请求类

## 签名

```typescript
declare class SYS_ClientUrl 
```

## 备注

向外部服务器发起安全的 cURL 请求


## 方法

<table><thead><tr><th>

方法名


</th><th>

修饰符


</th><th>

描述


</th></tr></thead>
<tbody><tr><td>

[request(url, method, data, options, succeedCallFn)](./SYS_ClientUrl.md)


</td><td>


</td><td>

发起即时请求


</td></tr>
</tbody></table>

---

## 方法详情

### request

# SYS\_ClientUrl.request() method

发起即时请求

## 签名

```typescript
request(url: string, method?: 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH', data?: string | Blob | FormData | URLSearchParams, options?: {
        headers?: {
            [header: string]: any;
        };
        integrity?: string;
    }, succeedCallFn?: (data: Response) => void | Promise<void>): Promise<Response>;
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

url


</td><td>

string


</td><td>

请求地址


</td></tr>
<tr><td>

method


</td><td>

'GET' \| 'POST' \| 'HEAD' \| 'PUT' \| 'DELETE' \| 'PATCH'


</td><td>

_（可选）_ 请求方法


</td></tr>
<tr><td>

data


</td><td>

string \| Blob \| FormData \| URLSearchParams


</td><td>

_（可选）_ 请求发送的数据，可以是直接数据或 [URLSearchParams](https://developer.mozilla.org/docs/Web/API/URLSearchParams) 对象，如果 method 为 `HEAD` 或 `GET`<!-- -->，本参数将被忽略


</td></tr>
<tr><td>

options


</td><td>

\{ headers?: \{ \[header: string\]: any; \}; integrity?: string; \}


</td><td>

_（可选）_ 请求参数


</td></tr>
<tr><td>

succeedCallFn


</td><td>

(data: Response) =&gt; void \| Promise&lt;void&gt;


</td><td>

_（可选）_ 请求成功后回调的函数


</td></tr>
</tbody></table>



## 返回值

Promise&lt;Response&gt;

Fetch 的返回结果

## 备注

请注意，需要在被请求的站点上允许跨源资源共享（CORS），否则接口将始终返回错误结果。

更多信息，请查阅 [跨源资源共享 (CORS) - MDN](https://developer.mozilla.org/docs/Web/HTTP/CORS)<!-- -->。

注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
