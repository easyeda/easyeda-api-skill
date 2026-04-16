# BLOB 真彩图

```json
{ "type": "META", "id": "BLOB-HASH-ID",  "ticket": 1 }||{ "filename": "dadas", "data": "data:image/png;base64,asdfasdfwer" }|
```

1. filename 文件名
2. data 预留元数据，二进制数据：使用类似 `Data URLs` 的规范，但有区别

    1. 一般格式，与 `Data Urls` 完全兼容 `data:[<mediatype>][;base64],<data>`

        - 如 `data:image/png;base64,asdfasdfwer`
        - 如 `data:text/html,<html></html>`
        - 一般情况下，应尽可能使用一般格式，方便直接使用 Web API 加载，不需要算法转换

    2. 扩展格式，扩展了其功能性，加上了如 gzip/deflate 等编码转换功能 `data:<mediatype>[pipeline],<data>`

    - 如 `data:text/html;gzip;base64,asdfasdf`
        1. 先将 asdfasdf 进行 base64 解码
        2. 再用 gzip 解压缩
        3. 最后才以 text/html 去加载
    - 如 `data:text/css;deflate;aes128;base64,aaaaaaa`
        1. 先将 aaaaaaa 进行 base64 解码
        2. 再用 aes128 解密（具体加解密逻辑待定）
        3. 再用 deflate 解压缩
        4. 最后才以 text/css 去加载此数据

```json
{ "type": "META", "id": "ID",  "ticket": 1 }||{ "filename": "dadas", "data": "data:application/vnd.ms-excel;base64,xxsasdfawerwerqwer" }|
```
