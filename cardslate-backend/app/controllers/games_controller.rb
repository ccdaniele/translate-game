class GamesController < ApplicationController

    def index
        games = Game.all
        render json: GameSerializer.new(games).serializable_hash.to_json
      end
    
    def create
        byebug
      game = Game.create(language: params[:language], category_id: params[:category_id])
      render json: GameSerializer.new(game).serializable_hash.to_json
    end

end
