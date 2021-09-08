Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # 通信を許可するドメイン
    origins 'localhost:8000'

    # 通信を許可するヘッダとHTTPメソッドの種類
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
