class Lecture < ApplicationRecord
    belongs_to :classification

    has_many :attendances
    has_many :users, through: :attendances
    has_many :departments, through: :attendances
end
