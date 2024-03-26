class CreateDepartments < ActiveRecord::Migration[7.0]
  def change
    create_table :departments do |t|
      t.integer :faculty_id, null: false
      t.integer :department_name, null: false

      t.timestamps
    end
  end
end
