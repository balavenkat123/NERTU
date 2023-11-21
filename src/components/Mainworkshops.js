import React, { useState } from 'react';
import { workshopsData } from "./MainworkshopsData";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mainworkshops = () => {
  const [data, setData] = useState(workshopsData);
  const [searchText, setSearchText] = useState('');

  const excludeColumns = ["S_No", "Code"];

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  }

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();

    if(lowercasedValue === '') setData(workshopsData);

    else{
      const filteredData = workshopsData.filter((item) => {
        return Object.keys(item).some((key) => 
        excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };


  return (
    <div id="projects" className='m-5'>
    <div>
        <h1 className='text-center text-info py-5 mt-5'>Workshops</h1>
        <Form>
          <center>
            <InputGroup>
            <Form.Control className="w-75" type="text" placeholder="Type to search..." value={searchText} onChange={(e) => handleChange(e.target.value)}/>
            </InputGroup>
          </center>
        </Form>
    </div>
    
      
      <Table striped bordered hover className='bg-light mt-3 ml-3 mr-3'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>   
            <th>Subject</th>        
            <th>Duration</th>
            <th>Code</th>
                        
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
              <tr key={index}>
                <td>{item['S_No']}</td>
                <td className="text-start">{item.Title}</td>
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