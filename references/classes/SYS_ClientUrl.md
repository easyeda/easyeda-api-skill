# SYS\_ClientUrl class

System / external request class

## Signature

```typescript
export class SYS_ClientUrl 
```

## Remarks

Make secure cURL requests to external servers


## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[request(url, method, data, options, succeedCallFn)](./SYS_ClientUrl.md)


</td><td>


</td><td>

Make an immediate request


</td></tr>
</tbody></table>

---

## 方法详情

### request

# SYS\_ClientUrl.request() method

Make an immediate request

## Signature

```typescript
public request(url: string, method?: 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH', data?: string | Blob | FormData | URLSearchParams, options?: { headers?: undefined | { [key: string]: any }; integrity?: undefined | string }, succeedCallFn?: (data: Response) => void | Promise<void>): Promise<Response>;
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

url


</td><td>

string


</td><td>

Request URL


</td></tr>
<tr><td>

method


</td><td>

'GET' \| 'POST' \| 'HEAD' \| 'PUT' \| 'DELETE' \| 'PATCH'


</td><td>

_(Optional)_ Request method


</td></tr>
<tr><td>

data


</td><td>

string \| Blob \| FormData \| URLSearchParams


</td><td>

_(Optional)_ Data to be sent with the request, which can be direct data or a [URLSearchParams](https://developer.mozilla.org/docs/Web/API/URLSearchParams) object. If the method is `HEAD` or `GET`<!-- -->, this parameter will be ignored


</td></tr>
<tr><td>

options


</td><td>

\{ headers?: undefined \| \{ \[key: string\]: any \}; integrity?: undefined \| string \}


</td><td>

_(Optional)_ Request options


</td></tr>
<tr><td>

succeedCallFn


</td><td>

(data: Response) =&gt; void \| Promise&lt;void&gt;


</td><td>

_(Optional)_ Function to call back after the request succeeds


</td></tr>
</tbody></table>



## Returns

Promise&lt;Response&gt;

The return result of Fetch

## Remarks

Please note that the requested site must allow cross-origin resource sharing (CORS); otherwise, the API will always return an error result.

developer.mozilla.org/docs/Web/HTTP/CORS \| Cross-Origin Resource Sharing (CORS) - MDN<!-- -->}<!-- -->.

Note: This API requires the user to enable the extension external interaction permission, if not enabled, it will always `throw Error`
