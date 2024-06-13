-- Alias for event:Destroy()

local terminate = {}

terminate._config = {
    purpose = "core",
    id = "terminate",
    dependencies = {"internal"}
}

local replicatedStorage = game:GetService("ReplicatedStorage")

function terminate.handle(unlocked)
    unlocked._list(function(self)
        self:Destroy()
	end)
	return
end

return terminate