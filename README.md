# FoodieFriends

FoodieFriends is a program where users can share their favorite recipes with their friends. This program uses a rails API with JWT authentication in the backend and React.js with Redux in the front end. 

Users can log in, sign up, view recipe posts by other users, and create new recipe posts. 


## How It Works
Fork and clone this repo, along with the application's [backend API](https://github.com/Janaeq/tiktok-organizer-api.git).

### Backend
Run the following code in your terminal to set up the API and start your server.
```ruby
bundle install
rails db:migrate
rails s
```

### Frontend
In your terminal, run ``` npm start ``` to open the application.
Upon sign up, you are directed to the home page where you can view other recipe posts, view your profile, and create a new recipe post. 

## Contributing
Pull requests are welcome. Please open an issue for major changes.

## License
MIT License
