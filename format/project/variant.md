# Variant

## Document Header

```json
{ "type": "DOCHEAD" }||{ "docType": "VARIANT", "uuid": "UUID", "client": "clientID" }|
```

1. type: `DOCHEAD`, document header identifier.
2. docType: `VARIANT` variant data.
3. uuid: unique identifier, random id.
4. client: terminal identifier for eventual consistency.

## META Basic Information

```json
{ "type": "META", "ticket": 1 }||
{
	/** Name */
	"title": string,
	/** Description */
	"description": string,
	/** Schematic */
	"schematicId": string,
	/** Sort order */
	"zIndex": number,
	/** Whether there are ungrouped items */
	"notGrouped": boolean,
}|
```
