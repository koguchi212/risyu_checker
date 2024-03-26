class CreateFaculties < ActiveRecord::Migration[7.0]
  def change
    create_table :faculties do |t|
      t.integer :faculty_name, null: false

      t.timestamps
    end
  end
end
