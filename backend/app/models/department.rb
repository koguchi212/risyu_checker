class Department < ApplicationRecord
    belongs_to :fuculty

    has_many :attendances
    has_many :users, through: :attendances
    has_many :lectures, through: :attendances
end
