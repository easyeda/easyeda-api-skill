# 基本信息

### 工程配置

存放工程的配置数据，之前是存在后端的工程详情里的

```json
{ "type": "META", "ticket": 1 }||{ "name": "name", "default_sheet": "default_sheet_uuid"}|
```

1. name 工程名称
2. default_sheet 工程的默认图纸

### 板子

```json
{ "type": "META", "ticket": 1 }||{ "title": "title", "sort": 1}|
```

1. title 板子名称
2. sort 排序权重

### 原理图

```json
{ "type": "META", "ticket": 1 }||{ "name": "name", "board":"", "source": "", "version": ""}|
```

1. name 名称
2. board 所属的板子 uuid, 没有则为空
3. source 源文档 uuid
4. version 版本，源文档的更新时间

### 原理图页

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Page Name",
    "schematic": "SID",
    "description": "描述",
    "sort": 0.5,
    "source": "",
    "version": "",
}|
```

1. name 名称
2. schematic 所属的原理图 uuid
3. description 描述
4. sort 排序权重
5. source 源文档 uuid
6. version 版本，源文档的更新时间

### PCB

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "PCB Name",
    "board": "boardId",
    "description": "描述",
    "parentId":"",
    "sort": 0.5,
    "source": "",
    "version": "",
}|
```

1. name 名称
2. board 所属的板子 uuid, 没有则为空
3. description 描述
4. parentId 父 PCB UUID, 没有则为空
5. sort 排序权重
6. source 源文档 uuid
7. version 版本，源文档的更新时间

子 PCB

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "子PCB Name",
    "board": "",
    "description": "描述",
    "parentId":"UUID",
    "sort": 0.2,
    "source": "",
    "version": "",
}|
```

### 面板

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Panel Name",
    "description": "描述",
    "sort": 0.5,
}|
```

1. name 名称
2. description 描述
3. sort 排序权重

### 符号

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Name",
    "description": "描述",
    "type": 2,
    "tags": "tag1",
    "source": "",
    "version": "",
}|
```

1. name 名称
2. description 描述
3. type 符号类型
4. tags 分类标签
5. source 源文档 uuid
6. version 版本，源文档的更新时间

### 封装

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Name",
    "description": "描述",
    "type": 4,
    "tags": "tag1",
    "source": "",
    "version": "",
    "pcb": "",
}|
```

1. name 名称
2. description 描述
3. type 封装类型
4. tags 分类标签
5. source 源文档 uuid
6. version 版本，源文档的更新时间
7. pcb 所属的 pcb uuid, 默认为空，仅特殊封装有该字段

特殊封装

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Name",
    "description": "描述",
    "type": 4,
    "tags": "tag1",
    "source": "",
    "version": "",
    "pcb": "pcbUuid",
}|
```

### 器件

```json
{ "type": "META", "ticket": 1 }||
{
    "name": "Name",
    "description": "描述",
    "type": 4,
    "tags": "tag1",
    "source": "",
    "version": "",
    "attributes": {},
    "images": "",
}|
```

1. name 名称
2. description 描述
3. tags 分类标签
4. source 源文档 uuid
5. version 版本，源文档的更新时间
6. attributes 器件属性 Key-Value
7. images 图片链接
