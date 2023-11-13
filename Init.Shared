local when = {}

local notConnected = function()
	print("WHEN: Event has not been connected yet. Please consider doing :Connect(yourFunctionHere)") 
end

local STRUCT_EVENT = {
	Session = {},
	Fire = notConnected,
	Disconnect = function(self)
		task.cancel(self.Session.Task)
		self.Session.Task = nil
		self.Fire = notConnected
	end,
	Connect = function(self, fx, condition)
		self.Session.Task = task.spawn(function()
			if type(fx) ~= "function" then warn("WHEN: Connect's Input 'fx' is not a function"); return end
			if type(condition) ~= "function" or type(condition) ~= nil then warn("WHEN: Connect's Input 'condition' is not a function"); return end

			if condition then
				local status
				repeat
					repeat status = condition() until status == true
                    fx()
				until false
			else
				self:Disconnect()
				self.Fire = fx
			end
		end)
	end,
	Destroy = function(self)
		self:Disconnect()
		self = nil
	end
}

function when.new()
    local newEvent = STRUCT_EVENT
	return
end

return when