class UsersController < ApplicationController

    
    
    def index
        users = User.all
        render json: UserSerializer.new(users).serializable_hash.to_json
      end
    
    def create
        # byebug
      user = User.create(name: params[:name])
      render json: UserSerializer.new(user).serializable_hash.to_json
    end

    




end


