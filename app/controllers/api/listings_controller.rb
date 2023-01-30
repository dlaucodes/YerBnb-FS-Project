class Api::ListingsController < ActionController::API

    wrap_parameters include: Listing.attribute_names + [:photos]

    def index
        @listings = Listing.all

        render :index
    end
    
    
    def show
        @listing = Listing.find_by(id: params[:id])
            if @listing
                render :show #'api/listings/show' same as :show 
            else
                render json: { user: nil }
            end
        # @listing = Listing.find(params[:id])
    end

    def create
        @listing = Listing.new(listing_params)
        # @listing.user_id = current_user.id
        # params[:listing][:photos].each do |photo|
        #     @listing.photos.attach(photo)
        end
        # @listing.photos.attach(params[:listing][:photos].each)

        if @listing.save
            render json: {message: "you did it!"}
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
        params.require(:listing).permit(:price, :title, :description, :location, :owner_id, :lat, :lng, photos: [])
    end
end