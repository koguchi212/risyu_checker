class CreateFuculties < ActiveRecord::Migration[7.0]
  def change
    create_table :fuculties do |t|
      t.integer :faculty_name, null: false

      t.timestamps
    end
  end
end
