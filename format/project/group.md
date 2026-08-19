# Component Grouping

## Document Header

```json
{ "type": "DOCHEAD" }||{ "docType": "COMPONENT_GROUP", "uuid": "UUID", "client": "clientID" }|
```

1. type: `DOCHEAD`, document header identifier.
2. docType: `COMPONENT_GROUP` component grouping.
3. uuid: unique identifier, random id.
4. client: terminal identifier for eventual consistency.

### META Basic Information

```json
{ "type": "META", "ticket": 1 }||
{
	/** Name */
	"title": string,
	/** Parent component group uuid of the child component group */
	"parent": string,
	/** Component groups belonging directly to a variant do not participate in the component group tree */
	"belong": string,
	/** Sort order in the component group tree */
	"zIndex": number,
	/** Schematic */
	"schematicId": string,
}|
```

### GROUP_INDEX Sorting of Component Groups in Variants

```json
{ "type": "GROUP_INDEX", "ticket": 1, "id": "variantId" }||
{
	"zIndex": 1,
}|
```

1. type: `GROUP_INDEX`
2. ticket: logical clock.
3. id: variant uuid.
4. zIndex: sort order within the variant.

### GROUP_DATA Attribute Data

```json
{ "type": "GROUP_DATA", "id": "e176@uuid",  "ticket": 1 }||data
```

1. type `GROUP_DATA` attribute data.
2. id combined id, separated by `@`:
    1. The first is the primitive ID.
    2. The second is the instance page ID.
3. data attribute override, data signature is `{ [key: string]: string }| `

```json
{ "type": "GROUP_DATA", "id": "e176@uuid1",  "ticket": 1 }||{ "Designator": "U15", "ASDF": "1234" }|
{ "type": "GROUP_DATA", "id": "e177@uuid1",  "ticket": 2 }||{ "NUMBER": 2 }|
{ "type": "GROUP_DATA", "id": "e176@uuid2",  "ticket": 3 }||{ "Author": "abc" }|
```
