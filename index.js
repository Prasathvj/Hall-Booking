//express module is imported to craete the express server
const express = require("express");
const { room, booking } = require("./data.js");

const app = express();

//middleware
app.use(express.json());

//data variables for room and booking
let rooms = room;
let bookings= booking;

//Q.1.create a room
app.post("/rooms",(req,res)=>{
  const {roomName,seats,amenities, pricePerHour} = req.body;
  if(!roomName|| !seats || !amenities|| !pricePerHour){
    return res.status(400).json({data:"Invalid request"})
  }
 const room = {
  id:room.length+1,
  roomName,
  seats,
  amenities,
  pricePerHour
 }
 rooms.push(room)
 res.status(200).json({data:room,message:"Room created successfully"})
})

//Q.2.Book a room
app.post("/bookings",(req,res)=>{
  const {customerName, date, startTime, endTime, roomId} = req.body;
  if(!customerName || !date || !startTime || !endTime || !roomId){
    return res.status(400).json({data:"Invalid request"})
  }
  const roomfind= rooms.find(room=>room.id === roomId)
  if(!roomfind){
    return res.status(404).json({ error: 'Room not found' });
  }
//creating the new booking
const booking = {
  id :bookings.length+1,
    customerName,
    date,
    startTime,
    endTime,
    roomId
}
bookings.push(booking)
res.status(201).json({ message: 'Booking created successfully', booking });
})

// Q3: List all Rooms with Booked Data
app.get('/rooms/bookings', (req, res) => {
  const roomBookings = rooms.map(room => {
    const bookingsForRoom = bookings.filter(booking => booking.roomId === room.id);
    const bookedStatus = bookingsForRoom.length > 0 ? 'Booked' : 'Available';

    return {
      roomName: room.roomName,
      bookedStatus,
      bookings: bookingsForRoom
    };
  });

  res.json(roomBookings);
});


 // Q4: List all customers with booked data
app.get('/customers/bookings', (req, res) => {
 
  const customerBookings = bookings.map(booking => {
    const room = rooms.find(room => room.id === booking.roomId);

    return {
      customerName: booking.customerName,
      roomName: room.roomName,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime
    };
  });

  res.json(customerBookings);
});


// Q5: List how many times a customer has booked the room
app.get('/customers/:customerName/booking-count', (req, res) => {
  
  const { customerName } = req.params;

  const customerBookings = bookings.filter(booking => booking.customerName === customerName);

  res.json({ 
    customerName,
    bookingCount: customerBookings.length,
    bookings: customerBookings
  });
});

//listen the server
app.listen(9000,()=>console.log("server started in localhost:9000"))