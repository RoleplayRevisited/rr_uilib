function Notify(data)
  SendReactMessage("notify", data)
end 

exports('Notify', Notify)

RegisterNetEvent('rr_uilib:Notify')
AddEventHandler('rr_uilib:Notify', function(props)
  Notify(props)
end)

function DrawText(data)
  SendReactMessage("drawText", data)
end 

exports('DrawText', DrawText)

RegisterNetEvent('rr_uilib:DrawText')
AddEventHandler('rr_uilib:DrawText', function(props)
  DrawText(props)
end)
