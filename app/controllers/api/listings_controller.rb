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
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.photos.attach(params[:listing][photos:[]])
        if @listing.save
            
            render json: {message: "you did it!"}
        else 
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def update
        @listing = Listing.find_by(id: params[:id])

        if listing_params['photo'] 
            @listing.photos.purge
            @listing.photos.attach(params[:listing][photos:[]])
        end
        if @listing.update(listing_params)
            @listing.save
            render :show
        end
        if @listing.errors.none?
            @listing.save
        else
            render json: { errors: @listing.errors.full_messages }, status: :unprocessable_entity
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
        params.require(:listing).permit(:price, :title, :description, :owner_id, :lat, :lng, :id, :guests, :beds, :baths, :city, :wifi, :kitchen, :pets_allowed, :bedrooms, :state, photos:[])
    end
end