# frozen_string_literal: true

class GenresController < ApplicationController
  def create
    @genre = Genre.create(name: params[:name])
  end
end
