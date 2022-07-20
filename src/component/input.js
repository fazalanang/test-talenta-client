import '../styles/input.css'
import React, { useEffect, useState } from 'react';
import background from '../assets/background.jpg';
import { API } from "../config/api";
import { useNavigate } from "react-router";

export default function Input({ open,onClose }) {
   let navigate = useNavigate(); 
  let api = API();

  const [form, setForm] = useState ({
    name: "",
    gender: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const body = JSON.stringify(form);

      const config = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body,
      };
      console.log(config);

      const formData = new FormData()
      formData.set("name", form.name)
      formData.set("gender", form.desc)
      formData.set("age", form.price)

      const response = await api.post( '/user' , body, config);
      console.log(response.data);
      navigate.push("/")
    } catch (error) {
    
      console.log(error);

    }
  };

  useEffect (()=> {
    console.log(form)
  },[form]);

  if (!open) return null

    return (
        <>
        <body>
            <div className='containerInput'>
                <div className='leftInput'>
                    <img src={background} alt={background} onClick={onClose}/>
                </div>
                <div className='rightInput'>
                    <h1>Fill The Form</h1>
                    <form onSubmit={handleSubmit}>
                        <h3>Nama Teman</h3>
                        <input 
                        type='text' 
                        placeholder='Name' 
                        name="name"
                        onChange={handleChange}
                        />
                        <h3>Jenis Kelamin</h3>
                        <input 
                        type='text' 
                        placeholder='Gender' 
                        name="gender"
                        onChange={handleChange}
                        />
                        <h3>Umur</h3>
                        <input 
                        type='number' 
                        placeholder='Age' 
                        name="age"
                        onChange={handleChange}
                        />
                    <div className='buttonInput'>
                        <button type="submit" onClick={onClose}>SUBMIT</button>
                    </div>
                    </form>
                </div>
            </div>
        </body>
        </>
    );
}