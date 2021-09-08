class Api::V1::MessagesController < ApplicationController
  def create
    message = Message.new(message_params)

    if message.save
      render json: { status: 'success', message: message }
    else
      render json: { status: 'error', message: "作成に失敗しました" }
    end
  end

  private

  def message_params
    params.premit(:chat_room_id, :user_id, :content)
  end
end
