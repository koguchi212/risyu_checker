User.destroy_all

User.create!(password: 'password', password_confirmation: 'password', email: 'test@example.com', uid: 'test@example.com', id: 1, provider: 'email', allow_password_change: false, name: 'test')