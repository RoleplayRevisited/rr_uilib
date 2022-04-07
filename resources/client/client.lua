function Notify(data)
  SendReactMessage("notify", data)
end 

exports('Notify', Notify)

RegisterNetEvent('rr_uilib:Notify')
AddEventHandler('rr_uilib:Notify', function(props)
  Notify(props)
end)

function NotifyS(msgType, msg, sound)
  local useSound = false

  local data = {
    type = msgType,
    msg = msg,
  }

  if sound then 
    useSound = true
    if msgType == "success" then 
      data.sound = "success"
    elseif msgType == "error" then 
      data.sound = "error"
    else 
      data.sound = "info"
    end 
  end 

  if msgType == "success" then 
    data.icon = "fa-solid fa-check"
  elseif msgType == "error" then 
    data.icon = "fa-solid fa-xmark"
  elseif msgType == "warning" then 
    data.icon = "fa-solid fa-triangle-exclamation"
  elseif msgType == "primary" then 
    data.icon = "fa-solid fa-bell"
  elseif msgType == "default" then 
    data.icon = "fa-solid fa-envelope-open"
  end 

  Notify(data)
end 

RegisterNetEvent('rr_uilib:NotifyS')
AddEventHandler('rr_uilib:NotifyS', function(msgType, msg, sound)
  NotifyS(msgType, msg, sound)
end)

exports("NotifyS", NotifyS)

function DrawText(data)
  SendReactMessage("drawText", data)
end 

exports('DrawText', DrawText)

RegisterNetEvent('rr_uilib:DrawText')
AddEventHandler('rr_uilib:DrawText', function(props)
  DrawText(props)
end)
