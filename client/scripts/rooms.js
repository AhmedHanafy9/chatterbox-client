// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  _retrieve: (cb = ()=>{}) => {
    Parse.readAll((data) => {
      _.each(data, (message) => {
        if (message.roomname) {
          Rooms._data.add(message.roomname);
        }
      });
      cb();
    });
  },

  add: (room) => {
    Rooms._data.add(room);
    RoomsView.$select.html('');
    RoomsView.render();
  }

};