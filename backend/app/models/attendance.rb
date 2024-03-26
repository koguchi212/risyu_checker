class Attendance < ApplicationRecord
    belongs_to :user
    belongs_to :lecture
    belongs_to :department
end
