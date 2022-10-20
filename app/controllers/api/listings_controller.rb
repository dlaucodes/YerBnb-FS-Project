class Api::ListingsController < ActionController::API

    wrap_parameters include: Listing.attribute_names + [:photos]

    def index
        @listings = Listing.all
        # debugger
        render :index
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
        # debugger
        @listing = Listing.new(listing_params)
        @listing.photos.attach(params[:listing][:photos].tempfile)

        if @listing.save
            render json: {message: "You did it!"}
        else 
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing = Listing.find_by(id: params[:id])
        if @listing 
            @listing.destroy
        else
            render json: {message: "nothing to delete"}
        end
    end

    def listing_params
        params.require(:listing).permit(:price, :title, :description, :location, :photos, :owner_id, :lat, :lng)
    end
end