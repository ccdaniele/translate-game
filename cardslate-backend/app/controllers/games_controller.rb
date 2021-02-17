class GamesController < ApplicationController

    def index
        games = Game.all

        render json: games
    end
    
    def create
      game = Game.create(user_id: params[:user_id], language: params[:language], category_id: params[:category_id])
      
      render json: game
    end

end
