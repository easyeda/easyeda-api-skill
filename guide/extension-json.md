# 扩展配置文件

为了定义扩展的属性以及扩展可以调用的各种功能，每个扩展的根目录下都应该拥有一个名为 `extension.json` 的扩展配置文件，它具有以下默认内容：

<<< @/private/pro-api-sdk/extension.json{json}

## name <Badge type="tip" text="string" />

扩展名称。仅可包含小写英文字符 `a-z`、数字 `0-9` 与中划线 `-`，长度为 `5-30` 个字符。

## uuid <Badge type="tip" text="string" />

UUID。扩展的唯一 ID，仅可包含小写英文字符 `a-z`、数字 `0-9`，长度为 `32` 个字符。

## displayName <Badge type="tip" text="string" />

展示名称。

## description <Badge type="tip" text="string" />

描述。

## version <Badge type="tip" text="string" />

语义化版本号。格式为 `major.minor.patch`。

## publisher <Badge type="tip" text="string" />

开发者信息。

## engines <Badge type="tip" text="Object" /> <Badge type="warning" text="feature" />

扩展适配引擎。

### engines.eda <Badge type="tip" text="string" /> <Badge type="warning" text="feature" />

扩展适配嘉立创 EDA 专业版（线上）版本。

## license <Badge type="tip" text="string" />

开源协议。建议前往 [Choose a License](https://choosealicense.com/) 为项目选择适配的开源协议。

## repository <Badge type="tip" text="Object" /> <Badge type="warning" text="feature" /> <Badge type="info" text="in working" />

扩展源代码仓库信息。

### repository.type <Badge type="tip" text="string" /> <Badge type="warning" text="feature" /> <Badge type="info" text="in working" />

源代码仓库类型。可选值为 `extension-store` `git` `mercurial` `svn` `ftp` `github` `gitlab` `gitlab-selfhosted` `gitee` `gitea` `bitbucket` `coding` `gnu-savannah` `gitbucket` `gogs`。

### repository.url <Badge type="tip" text="string" /> <Badge type="warning" text="feature" /> <Badge type="info" text="in working" />

源代码仓库 URL。

## categories <Badge type="tip" text="string | Array<string>" />

扩展分类。可选值为 `Schematic` `Symbol` `PCB` `Footprint` `Panel` `Library` `Project` `Other`。

## keywords <Badge type="tip" text="Array<string>" />

关键词。

## images <Badge type="tip" text="Object" />

展示图。

### images.logo <Badge type="tip" text="string" />

图标。尺寸 `1:1`，PNG/JPEG 格式。绘制 LOGO 可以使用 [AutoDraw](https://www.autodraw.com/) 等 AI 生成工具，建议最少 `500×500` 大小。

### images.banner <Badge type="tip" text="string" /> <Badge type="warning" text="feature" />

横幅。尺寸 `64:27`，用于扩展商店页面的展示，JPEG 格式。

## homepage <Badge type="tip" text="string" />

主页。

## bugs <Badge type="tip" text="string" />

漏洞反馈渠道。请填写一个正确的 URI。

## activationEvents <Badge type="tip" text="Object" /> <Badge type="warning" text="feature" /> <Badge type="info" text="in working" />

扩展激活方式。

## entry <Badge type="tip" text="string" />

入口文件。不建议修改，在 SDK 内已正确定义。

## dependentExtensions <Badge type="tip" text="Object" /> <Badge type="warning" text="feature" /> <Badge type="info" text="in working" />

依赖的其他扩展。支持使用扩展商店内扩展的 32 位 UUID（支持自动拉取），或用户自定义的扩展名称（需要手动上传）。

## headerMenus <Badge type="tip" text="Object" />

扩展初始化时注册的头部菜单。

当前支持按照以下页面分别配置头部菜单：

```json
{
	"headerMenus": {
		"home": [], // [!code focus:9]
		"blank": [],
		"sch": [],
		"symbol": [],
		"pcb": [],
		"footprint": [],
		"pcbView": [],
		"panel": [],
		"panelView": []
	}
}
```

### headerMenus[].id <Badge type="tip" text="string" />

菜单项 ID。必须唯一。

### headerMenus[].title <Badge type="tip" text="string" />

菜单项标题。

### headerMenus[].menuItems <Badge type="tip" text="Object" />

菜单项子项。最多可以嵌套两层子项。

`menuItems` 与 `registerFn` 冲突，同级项内只允许存在其一。

### headerMenus[].registerFn <Badge type="tip" text="string" />

菜单关联注册方法。此处的方法关联到在本扩展代码内导出的方法，你需要使用 `export` 将指定方法作为 `ES Module` 导出，并将其方法名填写于此处。

`menuItems` 与 `registerFn` 冲突，同级项内只允许存在其一。
