# for future implementation

class Api::V1::IngredientsController < ApplicationController
    skip_before_action :authorized

    def create 
        ingredient = post
    end
end