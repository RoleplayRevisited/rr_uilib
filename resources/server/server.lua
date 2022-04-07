function Notify(source, props)
    TriggerClientEvent('rr_uilib:Notify', source, props)
end
exports('Notify', Notify)

function NotifyS(source, msgType, msg, useSound)
    TriggerClientEvent('rr_uilib:NotifyS', source, msgType, msg, useSound)
end
exports('NotifyS', NotifyS)

function DrawText(source, props)
    TriggerClientEvent('rr_uilib:DrawText', source, props)
end
exports('DrawText', DrawText)

