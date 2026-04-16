# 嘉立创EDA文件格式

## V2.2版本的文件格式

V2.2版本的文件格式：[lceda-pro-file-format-v2.2_2022.12.15.zip](https://image.lceda.cn/files/lceda-pro-file-format-v2.2_2022.12.15.zip)

提示：这不是最新的文件格式规范，但这里有绝大部分的格式细节。

## V3版本的文件格式

V3版本使用全新的源码格式，完全不同于之前的格式。

提示：嘉立创EDA 3.0 全面改造了工程格式，使用日志的概念对工程变更进行了增量存储；并且从 2.0 的按照数组偏移量的设计风格，调整成了按照 key-value 的风格，便于后期格式演进，和相关兼容代码的开发，以及提高可读性。

V3版本的文件格式（zip里面包含范例文件）：
- [lceda-pro-file-format-v3_2025.10.21.zip](https://image.lceda.cn/files/lceda-pro-file-format-v3_2025.10.21.zip)
- [lceda-pro-file-format-v3_2025.10.21.md](https://image.lceda.cn/files/lceda-pro-file-format-v3_2025.10.21.md)
- [lceda-pro-file-format-v3_2025.10.21.pdf](https://image.lceda.cn/files/lceda-pro-file-format-v3_2025.10.21.pdf)

### 格式详情文档

- [工程格式](/cn/format/project/index.md)
- [原理图格式](/cn/format/schematic/index.md)
- [PCB格式](/cn/format/pcb/index.md)

### 基础文档格式

#### 文档约定

-   工程的所有数据存在一个日志文档里，日志记录变动的首行必须是文件头 `DOCTYPE`，以区分不同类型文档， `DOCTYPE`作为一个 `块级元素`存在于工程日志中
-   以行为单位，每一行都是由两个合法的 JSON 对象拼接而成，第一个对象是用于最终一致性框架解析使用，后一个是 `原子结构对象`
-   键名采用驼峰命名，每个单词的首字母大写（除了第一个单词的首字母外），并且单词之间没有下划线或其他分隔符
-   所有图元都要带上文件内的 `唯一编号`
-   `旋转角度` 以逆时针方向为正，统一使用角度制
-   若无特殊说明，所有坐标、长度、大小统一使用 `0.01 inch` 为单位
-   所有颜色都使用 `"#RRGGBB"` 的方式表达，如果需要表示无颜色（完全透明），则用 `""`
-   所有使用 `是否XXXX` 描述的属性，都使用 `1` 是 `0` 否 的编码方式
-   本 `约定` 中未明确描述的部分（如转义等），全部依据 [RFC 7195 The JavaScript Object Notation (JSON) Data Interchange Format](https://tools.ietf.org/html/rfc7159)

#### 文档头

-   所有数据的开头必须带上文档头，以区分不同类型文档
-   逐行解析时，当解析遇到文档头时，表示接下来解析的数据都归到该文档下，直到遇到下一个文档头

```json
{ "type": "DOCHEAD" }||{ "docType": "SCH_PAGE", "uuid": "UUID", "client": "clientID" }|
```

1. type："DOCHEAD"，文档头标识
2. docType：文档类型
3. uuid：文档唯一编号，工程内唯一
4. client：最终一致性的一个终端标识

###### docType 文档类型

-   工程配置 `PROJECT_CONFIG`
-   板子 `BOARD`
-   原理图 `SCH`
-   原理图页 `SCH_PAGE`
-   PCB `PCB`
-   面板 `PANEL`
-   符号 `SYMBOL`
-   封装 `FOOTPRINT`
-   器件 `DEVICE`
-   真彩图 `BLOB`
-   实例属性 `INSTANCE`

#### 数据格式

```json
{ "type": "TYPE", "id": "UUID", "ticket": 1}||{["key": string]: any}|
```

通过标识符`||`, 将一条数据分割成内外两层数据：

1. 外层数据：用于最终一致性框架使用，保证数据的一致性
    1. type 数据类型
    2. id 唯一编号，需保证在文档内具体的 type 下唯一
    3. ticket 逻辑时钟，仅用于最终一致性框架，保证数据的唯一
2. 内层数据: 图元原子数据，是一个`key-value`对象，具体的数据内容详见各类型对应的文档

之所以分为内外两层数据，是因为在最终一致性框架中，无需关注具体的图元数据，只需要外层数据就能保证数据的唯一，以减少不必要的 JSON 解析，节省内存消耗

```json
{ "type": "META", "ticket": 1}||{"name": "名称"}|
```

有一些数据是在文档内就只能保留一个数据，用 type 字段就能表示唯一，会省略掉 id 字段，只有同一类型下有多个数据时才用 id 字段去区分

#### 最终一致性

-   存储 3.0，数据增删改都是往日志里加一条数据，这样日志里存在多条数据是表示的是同一个数据
-   最终一致性框架根据 type、id、ticket 字段决定保留哪一条数据，保证数据的一致性

ps: 更加详细的描述请查看最终一致性的设计文档，这里仅说明相关字段的用处

###### type 相同且 id 相同的两条数据

```json
{ "type": "TYPE", "id": "UUID", "ticket": 1}||{"data": 1}|
```

```json
{ "type": "TYPE", "id": "UUID", "ticket": 2}||{"data": 2}|
```

最终一致性框架，就会去对比 ticket 字段，ticket 更大的则保留下来，ticket 小的则舍弃，上面 data 为 2 的数据则保留

###### type 相同且 id 相同，ticket 也相同

```json
{ "type": "DOCHEAD" }||{ "docType": "SCH_PAGE", "uuid": "UUID", "client": "1" }|
{ "type": "TYPE", "id": "UUID", "ticket": 1}||{"data": 1}|
```

```json
{ "type": "DOCHEAD" }||{ "docType": "SCH_PAGE", "uuid": "UUID", "client": "2" }|
{ "type": "TYPE", "id": "UUID", "ticket": 1}||{"data": 2}|
```

则去比较文档头的 client 字段，client 标识更小的则保留下来，上面 data 为 1 的数据则保留

#### 删除

##### 原子数据删除

```json
{ "type": "TYPE", "id": "UUID", "ticket": 1}||""
```

数据的删除实际就是将内层数据置为空字符串

##### 文档删除

```json
{ "type": "DELETE_DOC", "ticket": 1}||{"isDelete": true}|
```

1. type `DELETE_DOC` 文档删除标识
2. isDelete 是否删除

-   文档删除实际是添加一个删除的标识，并不会在日志内直接删除文档数据，以方便文档删除的撤销和数据的一致性维护

-   所有删除的数据都会在日志里有所保留，用户如果要去除工程内删除的数据记录，让用户走克隆工程以去除这些数据，日志的快照不会去清除相关删除的记录
