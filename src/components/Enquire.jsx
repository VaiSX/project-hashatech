import React, { useState,useRef } from 'react';
import './enquire.scss';
import emailjs from '@emailjs/browser';

const Enquire = () => {

  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
      // Reset form fields to empty
      setFormData({
        firstName: '',
        lastName: '',
        email: ''
      });

      emailjs
      .sendForm('service_omnrcuk', 'template_e02w11c', form.current, {
        publicKey: '1u5wEqC5W5-qzvLCl',
      })
      .then(
        () => {
          alert('Received!');
        },
        (error) => {
          alert('Failed!');
          console.log('FAILED...', error.text);
        },
      );
    }
  };

  return (
    <form className="enquire-form" ref={form} onSubmit={handleSubmit}>
    <div className='form-top'>
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
      </div>
    </div>
      <div className='form-bottom'>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Enquire;
