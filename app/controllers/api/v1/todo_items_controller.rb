class Api::V1::TodoItemsController < ApplicationController
  before_action :authenticate_user!, except: [:create]
  before_action :set_todo_item, only: [:show, :edit, :update, :destroy]
  def index
    @todo_items = current_user.todo_items.all
  end

  def new
  end

  def show
    if authorized?
      respond_to do |format|
        format.json { render :show }
      end
    else
      handle_unauthorized
    end
  end

  def create
    unless current_user.present?
      current_user = User.new(email: (params[:todo_items][:email] rescue "guest-#{rand(1..100)}@example.com"))
      current_user.save!(validate: false)
    end

    @todo_item = current_user.todo_items.build(todo_item_params)
    respond_to do |format|
      if @todo_item.save
        format.json { render :show, status: :created, location: api_v1_todo_item_path(@todo_item) }
      else
        format.json { render json: @todo_item.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    if authorized?
      respond_to do |format|
        if @todo_item.update(todo_item_params)
          format.json { render :show, status: :ok, location: api_v1_todo_item_path(@todo_item) }
        else
          format.json { render json: @todo_item.errors, status: :unprocessable_entity }
        end
      end
    else
        handle_unauthorized
    end
  end

  def destroy
    if authorized?
      @todo_item.destroy
      respond_to do |format|
        format.json { head :no_content }
      end
    else
        handle_unauthorized
    end
  end

  private
    def todo_item_params
      params.require(:todo_item).permit(:title, :complete)
    end

    def set_todo_item
        @todo_item = TodoItem.find(params[:id])
    end

    def authorized?
      @todo_item.user == current_user
    end

    def handle_unauthorized
      unless authorized?
        respond_to do |format|
          format.json { render :unauthorized, status: 401 }
        end
      end
    end

end
