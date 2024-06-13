local interoperable = {}

interoperable._config = {
    purpose = "core",
    id = "interoperable"
}

local runService = game:GetService("RunService")
local replicatedStorage = game:GetService("ReplicatedStorage")

function interoperable.handle()
    local values = {}
    values.pool = {}
    function values.publish(event, key)
        if not key then table.insert(values.pool, event) end
        values.pool[key] = event
    end
    function values.retrieve(key : string | number)
        return values.pool[key]
    end
    function values.retrieveAsync(key : string | number)
        repeat task.wait() until values.pool[key]
        return values.pool[key]
    end
    function values.unlist(key : string | number)
        values.pool[key] = nil
    end
    return {
        addcore = {
            publish = values.publish,
            retrieve = values.retrieve,
            retrieveAsync = values.retrieveAsync,
            unlist = values.unlist,
            pool = values.pool
        }
    }
end

return interoperable