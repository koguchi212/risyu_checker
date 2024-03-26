class CreateClassifications < ActiveRecord::Migration[7.0]
  def change
    create_table :classifications do |t|
      t.integer :entrance_year, null: false
      t.string :course, null: false
      t.integer :graduation_credit, null: false
      
      t.timestamps
    end
  end
end
