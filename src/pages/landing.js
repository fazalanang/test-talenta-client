import '../styles/landing.css';
import React, { useState, useEffect } from "react";
import talenta from '../assets/talenta.png'
import profile from '../assets/blank-profile.png';
import pen from '../assets/iconsPen.png'
import { Table } from 'react-bootstrap';
import Input from '../component/input';
import { API } from "../config/api";
import { UserContext } from "../context/userContext.js";

export default function Landing() {
  const [isInput, setIsInput] = useState(false);
  const [users, setUsers] = useState([]);

  // Fetching User data from database
const getUsers = async () => {
  try {
    const response = await API.get("/user");
    setUsers(response.data.data);
    console.log(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getUsers();
}, []);
  
    return (
      <>
      <Input open={isInput} onClose={()=> setIsInput(false)}/>
        <nav>
            <div className='leftNav'>
                <img src={talenta} alt={talenta}/>
            </div>
            <div className='rightNav'>
                <button>DOWNLOAD</button>
                <h3>||</h3>
                <h3>TABLE FORM</h3>
            </div>
        </nav>


        <div className='container'>

            <div className='leftContainer'>
              <div className='profile'>
                <img src={profile} alt={profile}/>
                <h5>USER_01</h5>
              </div>
              <div className='addForm'>
                <div className='icon'>
                  <img src={pen} alt={pen}/>
                </div>
                <h6 onClick={() => setIsInput(true)}>Add Form</h6>
              </div>
            </div>

            <div className='rightContainer'>
              <h4>Table</h4>
              <Table>
                <div className='table'>
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>Nama Teman</th>
                      <th>Jenis kelamin</th>
                      <th>Usia</th>
                    </tr>
                  </thead>
                    {users?.map((item) => (
                  <tbody>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.age}</td>
                      </tr>
                  </tbody>
                    ))};
                </div>
              </Table>
              
              <h4>Chart</h4>
            </div>
        </div>
      </>
    );
  }