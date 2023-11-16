--!nonstrict

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
	Connect = function(self, fx : number | boolean, condition : boolean)
		self.Session.Task = coroutine.wrap(function()
			if type(fx) ~= "function" then warn("WHEN: Connect's Input 'fx' is not a function"); return end
			if type(condition) ~= "function" or condition ~= nil then warn("WHEN: Connect's Input 'condition' is not a function"); return end

			if condition then
				self.Fire = nil
				local status : boolean
				repeat
					if status ~= true then
						local cache : boolean = condition()
						if cache == true then
							local fxCache : boolean | number = fx()
							if type(fxCache) == "number" then
								task.wait(fxCache)
								status = false
							elseif fxCache == true then
								status = false
							end
						end
					end
				until false
			else
				self:Disconnect()
				self.Fire = fx
			end
		end)()
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