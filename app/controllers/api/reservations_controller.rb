class Api::ReservationsController < ActionController::API

    wrap_parameters include: Reservation.attribite_names + ['listing_id', 'userId', 'startDate', 'endDate']
    before_action :require_logged_in

    def index
        @reservations = reservations.all
        render :index
        
    end

    def show
        @reservation = Reservation.find_by(id: params[:id])
            if @reservation
                render :show
            else
                render json: {reservation: nil}
            end
    end

    def create
        @reservation = Reservation.new(reservation_params)
            if @reservation.save
                render json: {message: "reservation successful"}
            else
                render json: @reservation.errors.full_messages, status: 422
            end
    end

    def update
        @reservation = Reservation.find_by(id: params[:id])
            if @reservation.update(reservation_params)
                @reservation.save
                render :show
            else
                render json: {errors: @reservation.errors.full_messages},
                status: :unprocessable_entity
            end
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])
            if @reservation
                @reservation.destroy
            else
                render json: {message: "nothing to delete"}
            end
    end

    def reservation_params
        params.require(:reservation).permit(:reserved, :listing_id, :guest_id, :start_date, :end_date)
    end

end