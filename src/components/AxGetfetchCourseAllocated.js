import React, { useEffect, useState } from 'react';
import axios from 'axios';

<script src="https://js.stripe.com/v3/"></script>



const api = 'https://p2nzd3xj7i.execute-api.ap-south-1.amazonaws.com/dev/staff/fetch-course-allocated?collegeId=19E234';
const token = JSON.parse(sessionStorage.getItem('data'));
//const tokens = token.data.subject;

export default function AxGetfetchCourseAllocated() {
  const [jsonData,setjsonData] =useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(api, {
        headers: {
          "Access-Token": 'eyJraWQiOiJ0eU9LVHFIV1J2UDlNOGRVNDVQaHhRZkZDTndqRDQ4R3ltbVg4RDhmVmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OTg5NzAzYi1mYmIzLTQxYjEtOTk1NS1lNjU2M2Y0YTVjMDMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1ZiTUN4V1VxbyIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjVkaDBpM3NjODh0N2Jwa2Q4b3FsMzMxYWVqIiwiZXZlbnRfaWQiOiIwZjJiMjU3Mi1kMGUzLTRjMWMtOTgwNi1hMDM0YmE2N2Q3NGEiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY2MDYzNzcxMiwiZXhwIjoxNjYwNzI0MTEyLCJpYXQiOjE2NjA2Mzc3MTIsImp0aSI6Ijk5MDJmMGFhLWM3YzEtNDQ2ZS1iYWYwLTA3MGQ0OWU1OGI4OCIsInVzZXJuYW1lIjoiOTk4OTcwM2ItZmJiMy00MWIxLTk5NTUtZTY1NjNmNGE1YzAzIn0.rTh_L1dr08xL3DqLMOXZumn4Nund2YSc0JizLZktuGlDaK9LtM42UAkd1iO9E270c8WG1W9wejM5Jq0kDu11HWCcZ78FB9Sd1CeQ5ruxsTbw6KdeSpBhwbJh4nhPG0PNq4zOglqkCiCDS-k1FjAY8Fd9Vce0RmLghnMjpj9Wlcu25R_wlDpG3lwLxpG1O_wsSLZDFDGExOwi4dQtlAdZM1T07KgCnJeSRaATc9HMDjGJWmqBSEr6jk2PYjonyMzpzE5h0GO3fQNCiqN-Nxst9o1kEnKBcZAe7yv9KTAjZwx9FSDRJZHpvrGTZP5AcjFiGAZWKneZsCKw0KwOnMm87g'
        }
      });

      
      if (response.data) {
        console.log(response.data);
        const ans =response.data.data.subject;
        setjsonData(ans);

       // const list = []
        // products.forEach((response.data) => {
        //   list.push(<li>{product}</li>)
        // })
        
        
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
  <div>
    {/* <button onClick={fetchData}>Default</button>{jsonData} */}
    <table>
  <tr>
    <td>Subject</td>
    
  </tr>
  <tr>
  {jsonData.map(jsonData => (  
          <li>  
            {jsonData}  
          </li>  
        ))}
  </tr>
</table>
    </div>
  
  )
}
