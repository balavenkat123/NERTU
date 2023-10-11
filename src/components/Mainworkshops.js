import React, { useState } from 'react';
import {workshopsData} from "./MainworkshopsData"
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mainworkshops = () => {
  const [contacts, setContacts] = useState(workshopsData);
  const [search, setSearch] = useState('');  


  return (
    <div id="projects">
    <div>
        <h1 className='text-center text-info py-5 mt-5'>Workshopes</h1>
        <Form>
            <center>
        <InputGroup className='w-75'>

          {/* onChange for search */}
          <Form.Control className='w-30'
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search projects'
          />
        </InputGroup></center>
      </Form>
    </div>
    
      
      <Table striped bordered hover className='bg-light mt-3 ml-3 mr-3'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title </th>   
            <th>subject</th>        
            <th>Duration</th>
            <th>Code</th>
                        
          </tr>
        </thead>
        <tbody>
          {workshopsData
            .filter((item) => {
              return search === " "
                ? item
                : item.Title.includes(search);
            })
            .map((item, index) => (
              <tr key={index}>
                <td>{item['S_No']}</td>
                <td>{item.Title}</td>
                <td>{item.Subject}</td>
                <td>{item.Duration }</td>
                <td>{item.Code}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    
  </div>
  )
}

export default Mainworkshops