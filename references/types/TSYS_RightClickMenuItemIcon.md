# TSYS\_RightClickMenuItemIcon type

右键菜单项图标

## Signature

```typescript
type TSYS_RightClickMenuItemIcon
	= | {
		type: 'builtin';
		name: string;
	}
	| {
		type: 'dataUrl';
		dataUrl: string;
	};
```

## Remarks

支持两种图标来源： - `builtin`<!-- -->：EDA 内置图标，`name` 填图标名称 - `dataUrl`<!-- -->：调用方自行传入的图标数据，形如 `data:image/png;base64,xxx` 或 `data:image/svg+xml;utf8,xxx`

两者只能选择其一，同时传入时以 `builtin` 为准