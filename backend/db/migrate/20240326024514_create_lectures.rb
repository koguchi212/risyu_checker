class CreateLectures < ActiveRecord::Migration[7.0]
  def change
    create_table :lectures do |t|
      t.integer :classification_id, null: false
      t.string :lecture_name, null: false
      t.integer :credit, null: false

      t.timestamps
    end
  end
end
