class CreateUniversities < ActiveRecord::Migration[7.0]
  def change
    create_table :universities do |t|
      t.string :university_name, null: false

      t.timestamps
    end
  end
end
