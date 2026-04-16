# 公共数据

每个文档都会带上基本信息、创建信息、修改信息，这些信息由工程管理维护

### 基本信息

```json
{ "type": "META", "ticket": 1 }||data
```

1. type "META" 基本信息
2. data 具体数据，每个文档不一样，后续单独描述

### 创建信息

每个文档一样

```json
{ "type": "META_CREATE", "ticket": 1 }||
{
    "creator": { "uuid":"UUID", "nickname":"nickname", "username":"username", },
    "createTime": 1725593026474,
}|
```

1. type "META_CREATE" 创建信息
2. creator 创建者
3. createTime 创建时间

### 修改信息

```json
{ "type": "META_MODIFY", "ticket": 1 }||
{
    "modifier": { "uuid":"UUID", "nickname":"nickname", "username":"username", },
    "createTime": 1725593026474,
}|
```

1. type "META_MODIFY" 修改信息
2. modifier 修改者
3. updateTime 更新时间
