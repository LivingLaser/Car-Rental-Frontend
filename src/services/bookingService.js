import {myAxios} from "./backend"

export const userBooking = (booking, userId, modelId) => {
    return myAxios.post(`/bookings/user/${userId}/car/${modelId}`, booking).then((response) => response.data);
}

export const confirmBooking = (bookingId, registration) => {
    return myAxios.post(`/bookings/${bookingId}/variant/${registration}`).then((response) => response.data);
}

export const updateBooking = (bookingId, bookingStatus) => {
    return myAxios.put(`/bookings/${bookingId}/set_status/${bookingStatus}`).then((response) => response.data);
}

export const getUserBookings = (userId, pageNumber) => {
    return myAxios.get(`/bookings/user/${userId}`, {
        params: {
            pageNumber: pageNumber
        }
    }).then((response) => response.data);
}

export const getBookingsByStatus = (bookingStatus) => {
    return myAxios.get(`/bookings/status/${bookingStatus}`).then((response) => response.data);
}

export const getAllBookings = (pageNumber) => {
    return myAxios.get(`/bookings/`, {
        params: {
            pageNumber: pageNumber
        }
    }).then((response) => response.data);
}