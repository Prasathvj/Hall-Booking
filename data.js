let  room = [
    {
        id: 1,
        roomName: "Conference Room ",
        seats: 10,
        amenities: ["Projector", "Whiteboard"],
        pricePerHour: 50
    },
    {
        id: 2,
        roomName: "Conference Room ",
        seats: 8,
        amenities: ["TV", "Conference Phone"],
        pricePerHour: 40
    },
        {
        id: 3,
        roomName: "Meeting Room ",
        seats: 6,
        amenities: ["Whiteboard"],
        pricePerHour: 30
        },
    {
        id: 4,
        roomName: "Boardroom",
        seats: 12,
        amenities: ["Projector", "Conference Phone", "Whiteboard"],
        pricePerHour: 60
      },
    {
        id: 5,
        roomName: "Training Room A",
        seats: 20,
        amenities: ["Projector", "Flipchart", "Coffee Machine"],
        pricePerHour: 80
      },
    {
        id: 6,
        roomName: "Meeting Room B",
        seats: 4,
        amenities: ["TV", "Whiteboard"],
        pricePerHour: 25
      },
    {
        id: 7,
        roomName: "Conference Room C",
        seats: 16,
        amenities: ["Projector", "Conference Phone", "Whiteboard", "Coffee Machine"],
        pricePerHour: 70
      },
    {
        id: 8,
        roomName: "Discussion Room",
        seats: 6,
        amenities: ["Whiteboard"],
        pricePerHour: 30
      }
  ];
  
let booking = [
    {
      id: 1,
      customerName: "Prasath",
      date: "2023-06-01",
      startTime: "09:00",
      endTime: "11:00",
      roomId: 1
    },
    {
      id: 2,
      customerName: "Vijay",
      date: "2023-06-02",
      startTime: "13:00",
      endTime: "15:00",
      roomId: 2
    },
    {
      id: 3,
      customerName: "Kumar",
      date: "2023-06-02",
      startTime: "10:00",
      endTime: "12:00",
      roomId: 1
    },
    {
        id: 4,
        customerName: "Sara",
        date: "2023-06-03",
        startTime: "14:00",
        endTime: "16:00",
        roomId: 4
      },
    {
        id: 5,
        customerName: "Michael sk",
        date: "2023-06-04",
        startTime: "10:00",
        endTime: "12:00",
        roomId: 5
      },
    {
        id: 6,
        customerName: "Praveen",
        date: "2023-06-04",
        startTime: "13:00",
        endTime: "15:00",
        roomId: 6
      },
    {
        id: 7,
        customerName: "Prasath",
        date: "2023-06-05",
        startTime: "09:00",
        endTime: "11:00",
        roomId: 7
      },
    {
        id: 8,
        customerName: "oviya",
        date: "2023-06-05",
        startTime: "14:00",
        endTime: "16:00",
        roomId: 8
      }
  ];
  module.exports = { room, booking };