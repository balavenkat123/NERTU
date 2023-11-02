import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './Data.js';

const Projectss = () => {
    const [contacts, setContacts] = useState(data);
    const [search, setSearch] = useState('');
  
    return (
      <div id="projects" className='m-5'>
        <div>
            <h1 className='text-center text-info py-5 mt-5'>Projects</h1>
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
                <th>Title</th>
                <th>Amount ( Rs. in lakhs)</th>
                <th>Start</th>
                <th>End</th>
                <th>Project Code</th>
                <th>Sponsoring Agency</th>
                <th>Investigator</th>
                            
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search === " "
                    ? item
                    : item.Title_Project.toLowerCase().includes(search),
                    item['Name of Investigators'].toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item['S.No']}</td>
                    <td className="text-start">{item.Title_Project}</td>
                    <td>{item["Amount "] }</td>
                    <td>{item.Start}</td>
                    <td>{item.End}</td>
                    <td>{item['Project Code']}</td>
                    <td>{item['Name of Sponsoring Agency']}</td>
                    <td>{item['Name of Investigators']}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        
      </div>
    );
}

export default Projectss