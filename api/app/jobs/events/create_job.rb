module Events
  class CreateJob
    include Sidekiq::Worker
    sidekiq_options retry: 3, backtrace: true, queue: 'default'

    def perform(params)
      Events::Create.new(
        store_name: params['store'],
        shoe_model: params['model'],
        new_amount: params['inventory']
      ).call
    end
  end
end
