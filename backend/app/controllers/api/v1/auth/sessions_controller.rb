class Api::V1::Auth::SessionsController < ApplicationController
  def index
    if current_api_v1_user
      render json: { status: 200, current_user: current_api_v1_user }
    else
      render json: { status: 401, message: "認証エラー: ユーザーが存在しません" }
    end
  end


  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
