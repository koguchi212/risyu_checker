class Department < ApplicationRecord
    belongs_to :faculty

    has_many :attendances
    has_many :users, through: :attendances
    has_many :lectures, through: :attendances
end
