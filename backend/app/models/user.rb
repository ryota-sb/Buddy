class User < ApplicationRecord
  has_one :profile, dependent: :destroy
  
  has_many :swipes_from, class_name: 'Swipe', foreign_key: :from_user
  has_many :swipes_to, class_name: 'Swipe', foreign_key: :to_user
  has_many :active_swipes, through: :swipes_from, source: :to_user # 自分からのいいね
  has_many :passive_swipes, through: :swipes_to, source: :from_user # 相手からのいいね
  
  def self.from_token_payload(payload)
    find_by(sub: payload['sub']) || create!(sub: payload['sub'])
  end
end
