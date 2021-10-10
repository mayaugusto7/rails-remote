class MessagesController < ApplicationController
  def index
  end

  def new
    @messages = Message.new
  end

  def create
    @messages = Message.create(message_params)
    respond_to do |format|
      if @messages.save
        format.html { redirect_to messages_path, notice: 'Message save success.' }
        format.json { render :show, status: :created, location: @messages }
      else
        format.html { render :new }
        format.json { render json: @messages.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def message_params
    params.require(:message).permit(:title, :description)
  end
end
