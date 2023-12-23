import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { dataList } from './ProjectData';

const Projectss = () => {
    const [data, setData] = useState(dataList);
    const [search, setSearch] = useState('');

    const excludeColumns = ["S.No", "Amount"];

    const handleChange = (value) => {
      setSearch(value);
      filterData(value);
    }

    const filterData = (value) => {
      const lowercasedValue = value.toLowerCase().trim();
  
      if(lowercasedValue === '') setData(dataList);
  
      else{
        const filteredData = dataList.filter((item) => {
          return Object.keys(item).some((key) => excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        })
        setData(filteredData);
      }
    };

    return (
      <div id="projects" className='m-5'>
        <div>
            <h1 className='text-center text-info py-5 mt-5'>Projects</h1>
            <Form>
                <center>
            <InputGroup className='w-75'>
  
              {/* onChange for search */}
              <Form.Control className="w-75" type="text" placeholder="Type to search..." value={search} onChange={(e) => handleChange(e.target.value)}
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
              {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item['S.No']}</td>
                    <td className="text-start">{item.Title_Project}</td>
                    <td>{item["Amount"] }</td>
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