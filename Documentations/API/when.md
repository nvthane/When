---
sidebar_position: 1
---

# When

A library that is to be required.

```lua
local when = require(game:GetService("ReplicatedStorage").When)
```

## Statics
---
#### .new()
```lua
when.new(
	name? : string || number
)
```

Returns a table which behaves like an event.