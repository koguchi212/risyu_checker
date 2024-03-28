class CreateCurriculums < ActiveRecord::Migration[7.0]
  def change
    create_table :curriculums do |t|
      t.integer :department_id, null: false
      t.integer :classification_id, null: false

      t.timestamps
    end
  end
end
