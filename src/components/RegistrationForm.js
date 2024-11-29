import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// List of public email domains
const publicDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com", "icloud.com"];

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        first_name: '',
        last_name: '',
        company: '',
        designation: '',
        email: '',
        contactNumber: '',
        telephone: '',
        technologies: '',
        budget: '',
        comments: '',
        event: '',
        consent: false,
      });
    }
  }, [reset, isSubmitSuccessful]);

  const submitRegistrationForm = async (data) => {
    
    // Ensure no null values are sent
    const cleanedData = {};
    for (const key in data) {
      cleanedData[key] = data[key] || '';
    }

    try {
      const response = await axios.post('https://utrechtitconsulting.com/api/nextgen-abudhabi-registration.php', cleanedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data); // Log API response to verify format
      if (response.data.message === 'Registration successful') {
        alert('Registration successful');
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error.message || error.response?.data?.message || error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  // Custom email validation function
  const validateEmail = (email) => {
    const domain = email.split('@')[1];
    if (publicDomains.includes(domain)) {
      return "Public email domains are not allowed.";
    }
    return true;
  };

  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit(submitRegistrationForm)}>
      <div className="flex flex-col gap-5 lg:flex-row" >
        <div className="flex flex-col gap-2 lg:w-[48%]" >
          <label htmlFor="first_name" className="text-black">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            placeholder="Enter First Name"
            className="border border-slate-300 p-3 rounded-xl text-slate-800"
            {...register('first_name', { required: true })}
          />
          {errors.first_name && (
            <span className="-mt-1 text-[12px] text-red-400">Please enter your first name.</span>
          )}
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="last_name" className="text-black">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            className="border border-slate-300 p-3 rounded-xl text-slate-800"
            placeholder="Enter Last Name"
            {...register('last_name', { required: true })}
          />
          {errors.last_name && (
            <span className="-mt-1 text-[12px] text-red-400">Please enter your last name.</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="company" className="text-black">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            placeholder="Enter Company Name"
            className="border border-slate-300 p-3 rounded-xl text-slate-800"
            {...register('company', { required: true })}
          />
          {errors.company && (
            <span className="-mt-1 text-[12px] text-red-400">Please enter your company name.</span>
          )}
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="designation" className="text-black">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            placeholder="Enter Designation"
            className="border border-slate-300 p-3 rounded-xl text-slate-800"
            {...register('designation', { required: true })}
          />
          {errors.designation && (
            <span className="-mt-1 text-[12px] text-red-400">Please enter your designation.</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="contactNumber" className="text-black">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            className="border border-slate-300 p-3 rounded-xl text-slate-800"
            placeholder="Enter Contact Number"
            {...register('contactNumber', {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers are allowed."
              }
            })}
          />
          {errors.contactNumber && (
            <span className="-mt-1 text-[12px] text-red-400">
              {errors.contactNumber.message || "Please enter your contact number."}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="telephone" className="text-black">
            Telephone
          </label>
          <input
            type="text"
            id="telephone"
            placeholder="Enter Telephone Number"
            {...register('telephone', {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers are allowed."
              }
            })}
            className="border border-slate-300 p-3 rounded-xl text-slate-800"
          />
          {errors.telephone && (
            <span className="-mt-1 text-[12px] text-red-400">
              {errors.telephone.message || "Please enter your telephone number."}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="email" className="text-black">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            className="border border-slate-300 p-3 rounded-xl text-slate-800"
            {...register('email', { 
              required: true, 
              validate: validateEmail 
            })}
          />
          {errors.email && (
            <span className="-mt-1 text-[12px] text-red-400">{errors.email.message || "Please enter your email address."}</span>
          )}
        </div>

        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="event" className="text-black">
            I am interested in
          </label>
          <select
            id="event"
            {...register('event', { required: true })}
            className="border border-slate-300 p-3 rounded-xl text-slate-800"
          >
            <option value="">Select</option>
            <option value="Attend as a Delegate">Attend as a Delegate</option>
            <option value="Attend as a Speaker">Attend as a Speaker</option>
            <option value="Attend as a Partner">Attend as a Partner</option>
          </select>
          {errors.event && (
            <span className="-mt-1 text-[12px] text-red-400">Please select an event.</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="technologies" className="text-black">
          Select the technologies you are interested in
        </label>
        <select
          id="technologies"
          {...register('technologies', { required: false })}
          className="border border-slate-300 p-3 rounded-xl text-slate-800"
        >
          <option value="">Select</option>
          <option value="Digital Integration">Digital Integration</option>
          <option value="API Management">API Management</option>
          <option value="Enterprise iPaaS">Enterprise iPaaS</option>
          <option value="Business Process Management">Business Process Management</option>
          <option value="Digital Process Automation">Digital Process Automation</option>
          <option value="Business Intelligence">Business Intellegence(BI)</option>
          {/* <option value="Data Engineering">Data Engineering</option> */}
          <option value="Data Management">Data Management</option>
          <option value="Data Virtulization">Data Virtulization</option>
          <option value="Real Time Analytics">Real Time Analytics</option>
          <option value="IT Consulting">IT Consulting</option>
        </select>
        {errors.technologies && (
          <span className="-mt-1 text-[12px] text-red-400">Please select a technology.</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="budget" className="text-black">
          What is the budget allocated for the implementation of these technological advancements?
        </label>
        <select
          id="budget"
          {...register('budget', { required: false })}
          className="border border-slate-300 p-3 rounded-xl text-slate-800"
        >
          <option value="">Select</option>
          <option value="$10,000 - $50,000">$10,000 - $50,000</option>
          <option value="$50,000 - $1,00,000">$50,000 - $1,00,000</option>
          <option value="$1,00,000 - $2,00,000">$1,00,000 - $2,00,000</option>
          <option value="$2,00,000 - $3,00,000">$2,00,000 - $3,00,000</option>
          <option value="$3,00,000 - $4,00,000">$3,00,000 - $4,00,000</option>
          <option value="$4,00,000 - $5,00,000">$4,00,000 - $5,00,000</option>
          <option value="$5,00,000 - $6,00,000">$5,00,000 - $6,00,000</option>
          <option value="$6,00,000 - $7,00,000">$6,00,000 - $7,00,000</option>
          <option value="$7,00,000 - $8,00,000">$7,00,000 - $8,00,000</option>
          <option value="$8,00,000 - $9,00,000">$8,00,000 - $9,00,000</option>
          <option value="$9,00,000 - $1,000,000">$9,00,000 - $1,000,000</option>
          <option value="$1,000,000 and above">$1,000,000 and above</option>
        </select>
        {errors.budget && (
          <span className="-mt-1 text-[12px] text-red-400">Please select a budget.</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="comments" className="label-style">
          Please add your comments here if you would like to discuss any specific topics or explore any use cases in detail.
        </label>
        <textarea className="border border-slate-300 p-3 rounded-xl text-slate-800"
          {...register('comments', { required: false })}
          id="comments" rows="4" cols="50" placeholder='Comments'>
        </textarea>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="consent" className="label-style flex items-start text-black">
          <input
            type="checkbox"
            id="consent"
            {...register('consent', { required: true })}
            className="mr-2 mt-2"
          />
          By completing this form, I hereby officially confirm my participation in the event and consent to receiving updates from UIC on the latest technology services for potential collaboration via email/WhatsApp.
        </label>
        {errors.consent && (
          <span className="-mt-1 text-[12px] text-red-400">You must consent to the terms and conditions.</span>
        )}
      </div>

      <button
        type="submit"
        className="rounded-md bg-yellow-400 px-6 py-3 text-center text-[13px] font-medium uppercase tracking-wide text-black transition hover:bg-yellow-300"
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
