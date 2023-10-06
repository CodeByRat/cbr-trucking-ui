local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
end

RegisterCommand('show-nui', function(source, args, rawCommand)
  toggleNuiFrame(true)
  SendReactMessage('open-menu', 'Truck Rental')
  debugPrint('Show NUI frame')
end, false)

RegisterCommand('truck-rental', function()
  toggleNuiFrame(true)
  SendReactMessage('open-menu', 'truck-rental')
end, false)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  debugPrint('Hide NUI frame')
  cb({})
end)

RegisterNUICallback('getClientData', function(data, cb)
  debugPrint('Data sent by React', json.encode(data))

-- Lets send back client coords to the React frame for use
  local curCoords = GetEntityCoords(PlayerPedId())

  local retData <const> = { x = curCoords.x, y = curCoords.y, z = curCoords.z }
  cb(retData)
end)