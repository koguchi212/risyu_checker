class ChangeColumnsAttendanceFaculty < ActiveRecord::Migration[7.0]
  def change
    add_column :faculties, :university_id, :integer, null: false

    remove_column :attendances, :department_id, :integer
  end
end
