json.reservations do 
    @reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation, :id, :guest_id, :listing_id, :start_date, :end_date, :listing, :created_at, :guests, :listing_pic, :listing_title, :listing_price
        end
    end
end