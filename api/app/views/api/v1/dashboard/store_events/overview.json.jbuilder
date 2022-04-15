json.array! @overview do |overview|
  json.interval overview[:interval]
  json.increase overview[:increase]
  json.decrease overview[:decrease]
end
