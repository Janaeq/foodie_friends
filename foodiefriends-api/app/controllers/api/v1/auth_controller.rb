class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]
  
    def create # Create the session
        user = User.find_by(username: login_params[:username])
        #User#authenticate comes from BCrypt
        if user && user.authenticate(login_params[:password])
            # encode token comes from ApplicationController
            payload = { user_id: user.id }
            token = encode_token(payload)
            render json: { user: UserSerializer.new(user), jwt: token }, status: :accepted
        else
            render json: { message: 'Invalid username or password' }, status: :unauthorized
        end
    end

    def auto_login
        render json: {user: UserSerializer.new(current_user)}, status: :accepted
    end
    
    private

    def login_params
        params.require(:user).permit(:username, :password)
    end
end
  