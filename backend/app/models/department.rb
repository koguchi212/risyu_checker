class Department < ApplicationRecord
    belongs_to :faculty

    has_many :curriculums
    has_many :classifications, through: :curriculums
end
