class Api::ListingsController < ActionController::API
    def index
        @listings = Listing.all
    end
    
    
    def show
        @listing = Listing.find_by(id: params[:id])
            if @listing
                render :show #'api/listings/show' same as :show 
            else
                render json: { user: nil }
            end
    end
    
end