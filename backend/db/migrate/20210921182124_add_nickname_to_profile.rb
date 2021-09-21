class AddNicknameToProfile < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :nickname, :string, :null => false
  end
end
