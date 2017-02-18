class HomeController < ApplicationController
  def book
    client = OpenBD::Client.new
    isbn = client.get params['isbn']
    render json: isbn.first.summary.source
  end
end
