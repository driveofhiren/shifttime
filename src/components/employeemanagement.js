import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  role: Yup.string().required('Role is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  availability: Yup.array().of(
    Yup.object().shape({
      day_of_week: Yup.string().required('Day of week is required'),
      start_time: Yup.string().required('Start time is required'),
      end_time: Yup.string().required('End time is required'),
      availability_type: Yup.string().required('Availability type is required'),
      _id: Yup.string().required('_id is required'),
    })
  ).required('Availability is required'),
});

const colorMap = {}; // Maintain a mapping between notes and colors

const generateColor = (notes, alpha = 0.8) => {
  const colorKey = notes + alpha; // Combine notes and alpha to create a unique key
  if (!colorMap[colorKey]) {
    // If color for the note is not already set, generate a random color
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16); // Random hex color
    // Apply alpha transparency
    const rgbaColor = hexToRGBA(color, alpha);
    colorMap[colorKey] = rgbaColor;
  }
  return colorMap[colorKey]; // Return the color associated with the note
};

// Function to convert hex color to rgba with alpha
const hexToRGBA = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};


const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("/availability");
      console.log("Response data:", response.data);
      setEmployees(response.data);
  
      // Convert availability data to events for calendar
      const newEvents = response.data.flatMap(employee => {
        return employee.availibilityDetails.map(avail => ({
          id: avail._id,
       
          start: new Date(avail.start_time), // Convert start time to Date object
          end: new Date(avail.end_time), // Convert end time to Date object
          dayOfWeek: avail.day_of_week, // Store day of the week for reference
          availabilityType: avail.availability_type, // Store availability type for reference
          notes: employee.notes, // Store notes for reference
          isApproved: employee.isApproved, // Store approval status for reference
          isDelete: employee.isDelete, // Store delete status for reference
          createdAt: new Date(employee.createdAt), // Convert createdAt to Date object
          updatedAt: new Date(employee.updatedAt) // Convert updatedAt to Date object
        }));
      });
      setEvents(newEvents);
      console.log("New events:", newEvents);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  

  const handleAddEmployee = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('/signup', values);
      if (response.status === 201) {
        setEmployees([...employees, response.data]);
        resetForm();
      } else {
        console.error('Failed to add employee:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding employee:', error);
    } finally {
      setSubmitting(false);
    }
  };
  const eventStyleGetter = (event, start, end, isSelected) => {
    // Generate a color based on the user ID
    const notes = event.notes; // Assuming userId is a property of the event object
    const color = generateColor(notes);
    
    return {
      style: {
        backgroundColor: color,
        borderStyle: 'none',
        //border style light grey
    
        boxShadow: '0 1 2px 1px rgba(0, 0, 0, 0.8)',
      
      },
    };
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-2">
          <h2>Employees</h2>
          <ul className="list-group">
            {/* Render employees list */}
            {employees.map(employee => (
              <li key={employee._id} className="list-group-item">
                <div>User ID: {employee.userId}</div>
                <div>Notes: {employee.notes}</div>
                <div>Created On: {new Date(employee.createdOn).toLocaleString()}</div>
                <div>Approved: {employee.isApproved ? 'Yes' : 'No'}</div>
                <div>Deleted: {employee.isDelete ? 'Yes' : 'No'}</div>
                <div>
                  Availability:
                  <ul>
                    {employee.availibilityDetails && employee.availibilityDetails.map(avail => (
                      <li key={avail._id}>
                        Day of Week: {avail.day_of_week}, Start Time: {avail.start_time}, End Time: {avail.end_time}, Availability Type: {avail.availability_type}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
         
        </div>
        <div className="col-md-8">
          <h2>Availability Calendar</h2>
          {/* Render React Big Calendar */}
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '45%', width: '100%' }}
            eventPropGetter={eventStyleGetter} // Apply custom event styles
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
