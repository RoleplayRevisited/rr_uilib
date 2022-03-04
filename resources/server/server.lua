function Notify(source, props)
    TriggerClientEvent('rr_uilib:Notify', source, props)
end
exports('Notify', Notify)

function DrawText(source, props)
    TriggerClientEvent('rr_uilib:DrawText', source, props)
end
exports('DrawText', DrawText)