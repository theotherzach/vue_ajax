class PagesController < ApplicationController

  def home
  end

  def manage_user
    gon.user_id = params.fetch(:id)
  end

  def manage_users
  end

end
