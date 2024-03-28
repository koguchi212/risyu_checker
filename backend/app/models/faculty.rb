class Faculty < ApplicationRecord
    belongs_to :university
    
    has_many :departments
end
