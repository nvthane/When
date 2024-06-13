-- Alias for event:Disconnect()

local suspend = {}

suspend._config = {
    purpose = "core",
    id = "suspend",
    dependencies = {"internal"}
}

local replicatedStorage = game:GetService("ReplicatedStorage")

function suspend.handle(unlocked)
    unlocked._list(function(self)
        self:Disconnect()
	end)
	return
end

return suspend