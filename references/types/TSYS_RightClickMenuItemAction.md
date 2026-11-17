# TSYS\_RightClickMenuItemAction type

右键菜单项动作

## Signature

```typescript
type TSYS_RightClickMenuItemAction
	= | {
		type: 'extensionCommand';
		registerFn: string;
	}
	| {
		type: 'builtinCommand';
		command: string;
		args?: Record<string, any>;
	};
```

## Remarks

菜单项被点击后要执行的动作，分两类： - `extensionCommand`<!-- -->：执行扩展自身的命令，需要在扩展入口文件导出对应方法 - `builtinCommand`<!-- -->：执行 EDA 内部命令，命令名与 EDA 内置命令一致，可选携带参数

两类动作只能选择其一