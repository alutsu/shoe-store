require 'faye/websocket'
require 'eventmachine'
require 'json'

EM.run {
  ws = Faye::WebSocket::Client.new('ws://sender:8080')

  ws.on :message do |event|
    data = JSON.parse(event.data)
    Events::CreateJob.perform_async(data)
  end
}
