class CreateAttendances < ActiveRecord::Migration[7.0]
  def change
    create_table :attendances do |t|
      t.integer :user_id, null: false
      t.integer :department_id, null: false
      t.integer :lecture_id, null: false

      t.timestamps
    end
  end
end
