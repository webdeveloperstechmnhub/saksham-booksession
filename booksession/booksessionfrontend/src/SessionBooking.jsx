import React, { useState } from "react";
import "./session.css";
import axios from "axios";

const SessionBooking = () => {

const [formData, setFormData] = useState({
  instituteName: "",
  department: "",
  city: "",
  contactName: "",
  email: "",
  phone: "",
  topic: "",
  type: "",
  date: "",
  time: "",
  duration: "",
  students: "",
  audience: "",
  mode: "",
  requirements: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:8080/api/sessions",
      formData
    );

    alert("Session Booked Successfully 🚀");
    console.log(response.data);

    // form reset
    setFormData({
      instituteName: "",
      department: "",
      city: "",
      contactName: "",
      email: "",
      phone: "",
      topic: "",
      type: "",
      date: "",
      time: "",
      duration: "",
      students: "",
      audience: "",
      mode: "",
      requirements: ""
    });

  } catch (error) {
    console.error(error);
    alert("Error saving data ❌");
  }
};

return (
<div className="session-wrapper">



<div className="container">

<h1>Book a Session</h1>
<p className="subtitle">TechMNHub Institute Session Booking</p>

<form onSubmit={handleSubmit}>

{/* Institute Details */}

<h2>Institute Details</h2>

<input
type="text"
name="instituteName"
placeholder="Institute Name"
onChange={handleChange}
required
/>

<input
type="text"
name="department"
placeholder="Department"
onChange={handleChange}
required
/>

<input
type="text"
name="city"
placeholder="City"
onChange={handleChange}
required
/>

{/* Contact */}

<h2>Contact Person</h2>

<input
type="text"
name="contactName"
placeholder="Contact Person Name"
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email Address"
onChange={handleChange}
required
/>

<input
type="tel"
name="phone"
placeholder="Phone Number"
onChange={handleChange}
required
/>

{/* Session */}

<h2>Session Details</h2>

<input
type="text"
name="topic"
placeholder="Session Topic"
onChange={handleChange}
required
/>

<select name="type" onChange={handleChange} required>
<option value="">Session Type</option>
<option>Workshop</option>
<option>Webinar</option>
<option>Training</option>
<option>Guest Lecture</option>
</select>

<input type="date" name="date" onChange={handleChange} required />

<input type="time" name="time" onChange={handleChange} required />

<select name="duration" onChange={handleChange} required>
<option value="">Duration</option>
<option>1 Hour</option>
<option>2 Hours</option>
<option>Half Day</option>
<option>Full Day</option>
</select>

{/* Audience */}

<h2>Audience Details</h2>

<input
type="number"
name="students"
placeholder="Number of Students"
onChange={handleChange}
required
/>

<select name="audience" onChange={handleChange} required>
<option value="">Target Audience</option>
<option>Students</option>
<option>Faculty</option>
<option>Both</option>
</select>

{/* Mode */}

<h2>Session Mode</h2>

<select name="mode" onChange={handleChange} required>
<option value="">Mode</option>
<option>Online</option>
<option>Offline</option>
<option>Hybrid</option>
</select>

{/* Requirements */}

<h2>Requirements</h2>

<textarea
name="requirements"
placeholder="Special Requirements"
onChange={handleChange}
/>

<button type="submit">Book Session</button>

</form>

</div>

</div>
);
};

export default SessionBooking;