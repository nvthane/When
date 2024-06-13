local internal = {}

--[[
            INTERNAL
        What is Internal? Internal is a dependency extension for When
    that allows you to modify the internal of the modules to stack with
    minimal performance changes. Stacking callbacks per extension
    becomes a big problem, but Internal solves that. Internal also
    allows you to access the event itself.

        Internal instead rewrites how When operates to keep the pure
    implementation as optimized as possible.
]]

internal._config = {
    purpose = "core",
    id = "internal"
}

local runService = game:GetService("RunService")
local replicatedStorage = game:GetService("ReplicatedStorage")

function internal.handle(unlocked)
    local extraArgs = {}
    local extraArgsOnce = {}
    local function list(fn, usage)
        if not usage then usage = "loop" end
        if usage == "loop" then
            table.insert(extraArgs, fn)
        elseif usage == "once" then
            table.insert(extraArgsOnce, fn)
        end
    end

    local function isTableEmpty(t)
        for _ in pairs(t) do
            return false
        end
        return true
    end

    local notConnected = function()
        print("WHEN: Event has not been connected yet. Please consider doing :Connect(yourFunctionHere)") 
    end

    function unlocked.STRUCT_EVENT:Fire(...)
        if self.Rules then if not self.Rules() then return end end
        if isTableEmpty(self._handlers) and isTableEmpty(self._onces) then notConnected(); return end
        for _, v in ipairs(self._handlers) do
            v(table.unpack(extraArgs), self, ...)
        end
        for _, v in ipairs(self._onces) do
            v(table.unpack(extraArgsOnce), self, ...)
        end
        self._onces = {}
    end

    return {
        addcore = {
            _list = list
        }
    }
end

return internal