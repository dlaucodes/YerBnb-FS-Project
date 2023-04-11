class Api::ReviewsController < ActionController::API

    wrap_parameters include: Review.attribute_names + ['listingId' , 'userId']

    def index
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review 
            @review.destroy
        else
            render json: {message: "nothing to delete"}
        end
    end

    def review_params
        params.require(:review).permit(:body, :rating, :listing_id, :user_id, :id)
    end


end