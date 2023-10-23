import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'

const EventList = () => {

// component lifecycle
// 1. mounts (state runs, code runs, JSX gets put on screen)
// 2. useEffects run
// 3. setState
// 4. rerender (recalculate state, code runs, NEW JSX)
// 5. dismounts ?


const [events, setEvents] = useState([]);


useEffect(() => {
const fetchEvents = async () => {
try {
const response = await axios('/server/events');
setEvents(response.data);
} catch (error) {
console.error('Error fetching events:', error);
}
};
fetchEvents();
}, []);
// ^ we can specify what chagnes should cause the funciton to run again

console.log("I'm on first render, before useEffect")

const handleDelete = (eventId) =>{
  //1. go to Mongdb and delete from database
  let response = await axios({
    method: 'DELETE',
    // DELETE       /events/:idOfEvent
    url: `/server/events/${eventID}`
  })
  //2. It's still in state! Still on the screen
  //3. so - set state without ID!

}

return (
<div className="event-list">
<h1>My List Of Events</h1>
{events.map(event => (
<div key={event.id} className="event-item">
  <button onClick={() => handleDelete(event._id)}>Delete</button>
  <button onClick={}>Edit</button>
<h2>{event.title}</h2>
<p>Date: {event.date}</p>
<p>Location: {event.location}</p>
<p>Description: {event.description}</p>
<div className="organizer">
<strong>Organizer:</strong>
<p>Name: {event.organizer.name}</p>
<p>Role: {event.organizer.role}</p>
</div>
</div>
))}
</div>
);
};

export default EventList;