class ChangeColumnsType < ActiveRecord::Migration[7.0]
  def change
    change_column :faculties, :faculty_name, :string, null: false
    change_column :departments, :department_name, :string, null: false
    change_column :classifications, :entrance_year, :string, null: false
  end
end
