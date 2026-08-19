# BLOB True-Color Image

```json
{ "type": "META", "id": "BLOB-HASH-ID",  "ticket": 1 }||{ "filename": "dadas", "data": "data:image/png;base64,asdfasdfwer" }|
```

1. filename file name.
2. data reserved metadata; binary data uses a specification similar to `Data URLs`, but with differences.

    1. General format, fully compatible with `Data URLs`: `data:[<mediatype>][;base64],<data>`

        - e.g. `data:image/png;base64,asdfasdfwer`
        - e.g. `data:text/html,<html></html>`
        - In general, this format should be used whenever possible, so it can be loaded directly with Web APIs without algorithm conversion.

    2. Extended format, extending functionality by adding encodings such as gzip/deflate: `data:<mediatype>[pipeline],<data>`

    - e.g. `data:text/html;gzip;base64,asdfasdf`
        1. First base64-decode `asdfasdf`.
        2. Then decompress with gzip.
        3. Finally load as `text/html`.
    - e.g. `data:text/css;deflate;aes128;base64,aaaaaaa`
        1. First base64-decode `aaaaaaa`.
        2. Then decrypt with aes128 (specific encryption/decryption logic to be determined).
        3. Then decompress with deflate.
        4. Finally load as `text/css`.

```json
{ "type": "META", "id": "ID",  "ticket": 1 }||{ "filename": "dadas", "data": "data:application/vnd.ms-excel;base64,xxsasdfawerwerqwer" }|
```
