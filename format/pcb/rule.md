# 设计规则体系

## 设计规则模板

设计规则模板逻辑上有两种理解方式，PCB 自行根据需要选择

1. 作为其他设计规则的基版，其他设计规则是对模板的覆盖
1. 与其他设计规则互斥，有模板其他设计规则只是暂存，不产生任何效果
1. 作为来源于哪个模板的标识，不影响后续实际规则的效力（当前采用的方案）

```json
{ "type": "RULE_TEMPLATE", "ticket": 1 }||{ "name": "JLCPCB Capability(High Frequency Board)"}|
```

1. type 设计规则模板：`RULE_TEMPLATE`
2. ticket 逻辑时钟
3. name 模板名称

## 设计规则

```json
{ "type": "RULE", "id":"UUID", "ticket": 1 }||
{
  "ruleType":"Safe Clearance",
  "ruleName":"通用",
  "ruleState":1,
  "ruleContext":{},
}|
```

1. type 设计规则：`RULE`
2. ticket 逻辑时钟
3. ruleType 规则类型：EDA 自己决定
4. ruleName 规则名称
5. ruleState 规则状态：0 普通规则 1 默认规则 2 停用规则
6. ruleContext 规则内容：EDA 自己决定

同一 `规则类型` 设计规则出现的顺序，需要和【规则管理】左侧树的顺序一致

## 规则选择器

```json
{ "type": "RULE_SELECTOR", "id":"UUID", "ticket": 1 }||
{
  "ruleSelect":["NET", "GND"],
  "ruleOrder":0,
  "ruleKeyValue":{ "Safe Clearance": "通用", "Other Clearance": "通用" },
}|
```

1. type 规则选择器：`RULE_SELECTOR`
2. ticket 逻辑时钟
3. ruleSelect 选择器
    1. 网络类型：`["NET_CLASS", "High Speed"]`
    2. 网络：`["NET", "GND"]`
    3. 层：`["LAYER", 3]`
    4. 区域：`["REGION", "e10"]`
    5. 封装：`["FOOTPRINT", "0805"]`
    6. 元件：`["COMPONENT", "e100"]`
    7. 覆铜：`["POUR", "e100"]`
    8. 差分对：`["DIFF_PAIR", "asdf"]`
    9. 等长对：`["EQ_LEN_GRP", "fdsa"]`
    10. 未来如果要配置逻辑，可以写逻辑 `["AND", ["NET", "GND"], ["LAYER", 5]]`
4. ruleOrder 优先级：数值越小，优先级越高，建议
    - `0` 元件规则
    - `1` 封装规则
    - `2` 区域规则
    - `3` 网络-网络规则
    - `4` 网络规则
    - `5` 层规则
5. ruleKeyValue 规则，Key 为 规则类，Value 为 规则名称，每个规则类下只能选择一个规则
