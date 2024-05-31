# When
---
When is an flexible individual-focused event library for Roblox that aims to be embeddable and extensible which can ease communications across your scripts with the intention to be used in a personal workflow allowing you to stay comfortable.

Read the [documentation](https://nvthane.github.io/When/docsite/) for more information.

### Installing

It doesn't have to be complicated. To install, you don't need any package manager or any other confusing stuff. You just need to directly grab it from the source and it is ready to be used.

**Hosted on Roblox**

- Get When from the Roblox library.
- Place When anywhere accessible... to both the client and the server.

> Due to Roblox's issues on the backend preventing packages from being distributed, When is currently unobtainable through the Roblox library. Consider looking through the GitHub option.

**Hosted on GitHub**

- Obtain [When.lua](https://raw.githubusercontent.com/nvthane/When/main/When.lua) from the [Github Repository](https://github.com/nvthane/When/tree/main).
- Place it in a folder where modules are usually required by you.

## Creating Your First Event

Requiring is one thing, but When is as easy to use as solving 2+2. The usual pattern is to create a scripting interface event which can then be connected and fired throughout the script, or possibly through multiple scripts. You are the controller, and it is up to you.

To create your first event, it would go like this:

```lua
local when = require(game:GetService("ReplicatedStorage").When)
-- Location may vary as you choose where to place the library

when.new()
-- Returns an event object
```

### A Useful Event

Cool. You created your first event, but now let's actually put it to use. Because `when.new()` returns an object event, you'll have to store it.
```lua
local when = require(game:GetService("ReplicatedStorage").When)
-- Location may vary as you choose where to place the library

local score = 0
local int = 0
-- Setup your data

local scoreController = when.new()
-- Returns an event object

scoreController:Rule(function()
    if int >  6 then return true end
end)
-- Set a rule

scoreController:Connect(function()
    score += 1
    print("You scored 1! Current score is "..score)
end)
-- Connect a function to handle



while true do
    task.wait(2)
    int = math.random(1, 10)
    print("Number received: "..int)
    scoreController:Fire()
end
-- Make a random number generator that fires the event
```

What we did is basically store the event into the `scoreController` variable which dictates when the function will be fired.

We then set up a rule that will be place to ensure the integer is over 6 in order for it to be handled. If the rules returns `true`, then it will fire the connections. If it returns `false` or nothing, it will not be dealt with.

We connected a function that'll handle increasing the score everytime the event is successfully fired.

We set up an random number generator for numbers from 1 to 10 that fires the event and it repeats indefinitely until the process is terminated.

Multiple handling functions to connect will be very useful to connect the event from anywhere in one script, and so are rules when you do not want to apply requirements for multiple connections.

You basically just understood Roblox bindable events in a form of scripting interface with flexibility. **Congratulations!**
