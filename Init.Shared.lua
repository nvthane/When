--!nonstrict

local when = {}

local function isTableEmpty(t)
	for _ in pairs(t) do
		return false
	end
	return true
end

local notConnected = function()
	print("WHEN: Event has not been connected yet. Please consider doing :Connect(yourFunctionHere)") 
end

local STRUCT_EVENT = {
	Name = "Event"
}
STRUCT_EVENT.__index = STRUCT_EVENT

-- Create a new Event
function when.new(name : string | number | nil)
	local event = setmetatable({
		_handlers = {},
		_onces = {},
		_rules = function() return true end
	}, STRUCT_EVENT)
	if name then event.Name = name end
	return event
end

function STRUCT_EVENT:Connect(handler, k)
	if type(handler) ~= "function" then warn(string.format("WHEN: Connect's Input '%s' is not a function", k)); return end
	if k then
		self._handlers[k] = handler
	end
	table.insert(self._handlers, handler)
end

function STRUCT_EVENT:Once(handler, k)
	if type(handler) ~= "function" then warn(string.format("WHEN: Connect's Input '%s' is not a function", k)); return end
	if k then
		self._onces[k] = handler
	end
	table.insert(self._onces, handler)
end

function STRUCT_EVENT:Rule(rules : boolean)
	self.Rules = rules
end

function STRUCT_EVENT:Disconnect(k)
	if not k then self._handlers = {} else self._handlers[k] = nil end
end

function STRUCT_EVENT:Deonce(k)
	if not k then self._onces = {} else self._onces[k] = nil end
end

function STRUCT_EVENT:Ineffective()
	self._handlers = {}
	self._onces = {}
end

function STRUCT_EVENT:Reset()
	self._handlers = {}
	self._onces = {}
	self._rules = {}
end

function STRUCT_EVENT:Destroy()
	self = nil
end

function STRUCT_EVENT:Fire(...)
	if self.Rules then if not self.Rules() then return end end
	if isTableEmpty(self._handlers) and isTableEmpty(self._onces) then notConnected(); return end
	for _, v in ipairs(self._handlers) do
		v(...)
	end
	for _, v in ipairs(self._onces) do
		v(...)
	end
	self._onces = {}
end

return when

