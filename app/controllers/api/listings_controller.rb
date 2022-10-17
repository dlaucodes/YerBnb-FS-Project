class Api::ListingsController < ActionController::API

    wrap_parameters include: Listing.attribute_names + [:photo]

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

    def create
        @listing = Listing.new(listing_params)
        @listing.photo.attach(params[:listing][:photo])

        if @listing.save
            render json: {message: "You did it!"}
        else 
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def listing_params
        params.require(:listing).permit(:price, :title, :description, :location, :photo, :owner_id, :lat, :lng)
    end
end