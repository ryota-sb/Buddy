class Profile < ApplicationRecord
  belongs_to :user

  mount_uploader :image, ImageUploader

  enum gender: { man: 0, woman: 1 }

  validates :discord_id, presence: true
  validates :message, presence: true, length: { maximum: 144 }
  validates :nickname, presence: true
end
