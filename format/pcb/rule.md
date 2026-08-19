# Design Rule System

## Design Rule Template

There are two logical ways to understand the design rule template; the PCB can choose according to its needs:

1. As a base version for other design rules, other design rules are overrides of the template.
2. Mutually exclusive with other design rules; when a template exists, other design rules are only temporary and have no effect.
3. As an identifier of which template the rules originate from, without affecting the effectiveness of subsequent actual rules (current solution).

```json
{ "type": "RULE_TEMPLATE", "ticket": 1 }||{ "name": "JLCPCB Capability(High Frequency Board)"}|
```

1. type design rule template: `RULE_TEMPLATE`.
2. ticket logical clock.
3. name template name.

## Design Rule

```json
{ "type": "RULE", "id":"UUID", "ticket": 1 }||
{
  "ruleType":"Safe Clearance",
  "ruleName":"General",
  "ruleState":1,
  "ruleContext":{},
}|
```

1. type design rule: `RULE`.
2. ticket logical clock.
3. ruleType rule type: decided by EDA.
4. ruleName rule name.
5. ruleState rule state: 0 normal rule, 1 default rule, 2 disabled rule.
6. ruleContext rule content: decided by EDA.

Design rules of the same `rule type` must appear in the same order as the left tree in [Rule Manager].

## Rule Selector

```json
{ "type": "RULE_SELECTOR", "id":"UUID", "ticket": 1 }||
{
  "ruleSelect":["NET", "GND"],
  "ruleOrder":0,
  "ruleKeyValue":{ "Safe Clearance": "General", "Other Clearance": "General" },
}|
```

1. type rule selector: `RULE_SELECTOR`.
2. ticket logical clock.
3. ruleSelect selector.
    1. Net class: `["NET_CLASS", "High Speed"]`
    2. Net: `["NET", "GND"]`
    3. Layer: `["LAYER", 5]`
    4. Region: `["REGION", "e10"]`
    5. Footprint: `["FOOTPRINT", "0805"]`
    6. Component: `["COMPONENT", "e100"]`
    7. Copper pour: `["POUR", "e100"]`
    8. Differential pair: `["DIFF_PAIR", "asdf"]`
    9. Equal-length group: `["EQ_LEN_GRP", "fdsa"]`
    10. Future logic support: `["AND", ["NET", "GND"], ["LAYER", 5]]`
4. ruleOrder priority: the smaller the value, the higher the priority. Recommended:
    - `0` component rule
    - `1` footprint rule
    - `2` region rule
    - `3` net-net rule
    - `4` net rule
    - `5` layer rule
5. ruleKeyValue rules. Key is the rule class, Value is the rule name. Only one rule can be selected under each rule class.
