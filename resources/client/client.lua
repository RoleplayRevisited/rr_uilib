function Notify(data)
  SendReactMessage("notify", data)
end 

exports('Notify', Notify)

RegisterNetEvent('rr_notify:Notify')
AddEventHandler('rr_notify:Notify', function(props)
  Notify(props)
end)

function DrawText(data)
  SendReactMessage("drawText", data)
end 

exports('DrawText', DrawText)

RegisterNetEvent('rr_notify:DrawText')
AddEventHandler('rr_notify:DrawText', function(props)
  DrawText(props)
end)
