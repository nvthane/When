---
sidebar_position: 2
---

# Events

Events can be created directly through When.

```lua
local when = require(game:GetService("ReplicatedStorage").When)

local event = when.new()
```

## Methods
---
#### :Connect()
```lua
event:Connect(
	fn,
	key? : string || number
)
```

Connects a function to the self event object.

---
#### :Disconnect()
```lua
event:Disconnect(
	key? : string || number
)
```

Disconnects a connection accessed by a key, else all the connection from the self event object.

---
#### :Once()
```lua
event:Once(
	fn,
	key? : string || number
)
```

Connects a function to the self event object that can be only fired once.

---
#### :Deonce()
```lua
event:Deonce(
	key? : string || number
)
```

Disconnects a once connection accessed by a key, else all the once connections from the self event object.

---
#### :Ineffective()
```lua
event:Ineffective()
```

Disconnects all connections regardless of repeatable or once while maintaining rules.

---
#### :Reset()
```lua
event:Reset()
```

Fresh event from scratch.

---
#### :Destroy()
```lua
event:Destroy()
```

Turns the event into `nil` in order to be collected by the GC later.

---
#### :Fire()
```lua
event:Fire(
	...
)
```

Fires all connections attached to the self event object regardless of repeatable or once.