import axios from 'axios'
import React from 'react'
import Style from '../../public/static/adminDashboard.module.css'
import { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

function DashboardComponent() {

  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get('https://golden-duck-it.herokuapp.com/api/v4/contactGet');
      console.log('hello')
      console.log(response.data.contacts)
      setUsers(response.data.contacts)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className={Style.dashboard}>
      <div className={Style.dashboardContainer}>
        <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>5</p></div>
          <div className={Style.text2}><p>Blogs</p></div>
        </div>
        <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>3</p></div>
          <div className={Style.text2}><p>Feedbacks</p></div>
        </div>
        <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>8</p></div>
          <div className={Style.text2}><p>Projects</p></div>
        </div>
        <div className={Style.dashboardColumn}>
          <div className={Style.text1}><p>7</p></div>
          <div className={Style.text2}><p>Portfolio</p></div>
        </div>

      </div>

      <div className={Style.userContainer}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Service</th>
              <th>Found</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr><td>{index + 1}</td>

                  <td>{user.name}</td>
                  <td>{user.contact}</td>
                  <td><a>{user.email}</a></td>

                  <td>{user.service}</td>
                  <td>{user.found}</td>
                  <td>{user.message}</td>
                  <td>{user.date}</td>
                </tr>

              )
            })}

          </tbody>
        </Table>

      </div>



    </div>
  )
}

export default DashboardComponent