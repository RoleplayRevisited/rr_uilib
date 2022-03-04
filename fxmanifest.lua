fx_version 'cerulean'

game 'gta5'

name 'rr_uilib'
author 'RoleplayRevisited/Kevintjuhz'
version "1.0.0"

client_script 'resources/client/*.lua'

server_script 'resources/server/*.lua'

ui_page 'web/build/index.html'

files {
  'web/build/index.html',
  'web/build/**/*'
}

server_exports {
	'Notify',
  'DrawText'
}