class Classification < ApplicationRecord
    has_many :curriculums
    has_many :departments, through: :curriculums

    has_many :lectures
end
