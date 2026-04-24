# Extension Configuration File

In order to define the properties of an extension and the various functions that an extension can invoke, each extension should have an extension configuration file named `extension.json` in the root directory with the following default contents:

<<< @/private/pro-api-sdk/extension.json{json}

## name <Badge type="tip" text="string" />

Extension name. It can only contain lowercase English characters `a-z`, numbers `0-9`, and underscores `-`, and is `5-30` characters long.

## uuid <Badge type="tip" text="string" />

UUID. A unique ID for the extension that can contain only lowercase English characters `a-z`, numbers `0-9`, and is `32` characters long.

## displayName <Badge type="tip" text="string" />

Display name.

## description <Badge type="tip" text="string" />

Description.

## version <Badge type="tip" text="string" />

Version number. The format is `major.minor.patch`.

## publisher <Badge type="tip" text="string" />

Developer Information.

## engines <Badge type="tip" text="Object" /> <Badge type="warning" text="feature" />

The engine to which the extension applies.

### engines.eda <Badge type="tip" text="string" /> <Badge type="warning" text="feature" />

Extended adapted version of EasyEDA Professional (online).

## license <Badge type="tip" text="string" />

Open-source licensing terms. It is recommended to go to [Choose a License](https://choosealicense.com/) to select the appropriate open source license for your project.

## repository <Badge type="tip" text="Object" /> <Badge type="warning" text="feature" /> <Badge type="info" text="in working" />

Repository information for the source code of the extension.

### repository.type <Badge type="tip" text="string" /> <Badge type="warning" text="feature" /> <Badge type="info" text="in working" />

The type of source code repository. Optional values are `extension-store` `git` `mercurial` `svn` `ftp` `github` `gitlab` `gitlab-selfhosted` `gitee` `gitea` `bitbucket` `coding` `gnu-savannah` ` gitbucket` `gogs`.

### repository.url <Badge type="tip" text="string" /> <Badge type="warning" text="feature" /> <Badge type="info" text="in working" />

Source code repository URL.

## categories <Badge type="tip" text="string | Array<string>" />

The extension's classification. Optional values are `Schematic` `Symbol` `PCB` `Footprint` `Panel` `Library` `Project` `Other`.

## keywords <Badge type="tip" text="Array<string>" />

Keywords.

## images <Badge type="tip" text="Object" />

Images.

### images.logo <Badge type="tip" text="string" />

Logo. Size `1:1`, PNG/JPEG format. Logos can be drawn using an AI generation tool such as [AutoDraw](https://www.autodraw.com/) and a minimum size of `500×500` is recommended.

### images.banner <Badge type="tip" text="string" /> <Badge type="warning" text="feature" />

Banner. Size `64:27`, for presentation of extension's store page, JPEG format.

## homepage <Badge type="tip" text="string" />

Project homepage.

## bugs <Badge type="tip" text="string" />

Vulnerability feedback channel. Please fill in a correct URI.

## activationEvents <Badge type="tip" text="Object" /> <Badge type="warning" text="feature" /> <Badge type="info" text="in working" />

Extension's activation event.

## entry <Badge type="tip" text="string" />

Entry file. No modification is recommended, it is correctly defined within the SDK.

## dependentExtensions <Badge type="tip" text="Object" /> <Badge type="warning" text="feature" /> <Badge type="info" text="in working" />

Dependencies on other extensions. Supports the use of 32-bit UUIDs of extensions in the Extension Store (automatic pulling supported), or user-defined extension names (manual upload required).

## headerMenus <Badge type="tip" text="Object" />

The header menu registered when the extension is initialized.

The header menu is currently supported to be configured separately according to the following pages:

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

Menu item ID. must be unique.

### headerMenus[].title <Badge type="tip" text="string" />

Menu item title.

### headerMenus[].menuItems <Badge type="tip" text="Object" />

Menu item subitems. Up to two levels of subitems can be nested.

`menuItems` conflicts with `registerFn`, only one of them is allowed to exist in the same level.

### headerMenus[].registerFn <Badge type="tip" text="string" />

Menu associated registered method. The method here is associated with a method exported within the code of this extension, you need to export the specified method as an `ES Module` using `export` and fill in its method name here.

`registerFn` conflicts with `menuItems`, only one of them is allowed to exist in the same level.
