import React, { useEffect, useState } from 'react';
import axios from 'axios';

<script src="https://js.stripe.com/v3/"></script>


const api = 'https://p2nzd3xj7i.execute-api.ap-south-1.amazonaws.com/dev/staff/fetch-tutored-student?collegeId=19E234';



// export default function AxPostFetchTutoredStud() {
//   const fetchData = async () => {
//     try {
//       const response = await axios.post(api, {collegeId: '19E234'} , {
//         headers: {
//           "Access-Token": 'eyJraWQiOiJ0eU9LVHFIV1J2UDlNOGRVNDVQaHhRZkZDTndqRDQ4R3ltbVg4RDhmVmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OTg5NzAzYi1mYmIzLTQxYjEtOTk1NS1lNjU2M2Y0YTVjMDMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1ZiTUN4V1VxbyIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjVkaDBpM3NjODh0N2Jwa2Q4b3FsMzMxYWVqIiwiZXZlbnRfaWQiOiIwZTNiMDJiNS05MTlhLTRlN2QtYmI1Ni1lY2VhMTU0NGI0OGIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY2MDcyNTMyMywiZXhwIjoxNjYwODExNzIzLCJpYXQiOjE2NjA3MjUzMjMsImp0aSI6ImNjNjE2YWU4LTk3MjEtNDYyYi1hZDUwLTAyZDc5MGY0NDRlZiIsInVzZXJuYW1lIjoiOTk4OTcwM2ItZmJiMy00MWIxLTk5NTUtZTY1NjNmNGE1YzAzIn0.O-CUgEeerS8eeWyxBCL7lYk9Rv3LCEkPo6PXkP3sYUJI2q_HurjBoMCuMifc23gYKxO4Yyef5eaMCKNUqfcMhKBlXlDpgjQKqRUAjYbQxgOnRJaA8FzpXSQsbnfxOkWAEEkyISvsaKg7mYztL-TsD_qS0QJ3J95fjIJJaN2Za5s1m7kIwxgVI6v4HK9TbrDCi50ADtKLS2Nclr8FvScoRJBOJY7q-bwQ7jHFtA90EbxR8FWFipdx-MB-QcdoBo1T4KsN-WSiMPWvy_9G1W43SKMBbQ2Iplv2vGMHvnS1xlmWx8ilXjtsT-uotv4TIeiWHSWzAiO13DujoCVZStRFzA'
//          //  ,
//           //  'access-control-allow-origin': '*',
//           // "Access-Control-Allow-Headers": "X-Requested-With"
//         }
//       });
const token = JSON.parse(sessionStorage.getItem('data'));
//const tokens = token.data.subject;

export default function AxGetfetchCourseAllocated() {
  const [jsonData,setjsonData] =useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(api, {
        headers: {
          "Access-Token": 'eyJraWQiOiJ0eU9LVHFIV1J2UDlNOGRVNDVQaHhRZkZDTndqRDQ4R3ltbVg4RDhmVmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OTg5NzAzYi1mYmIzLTQxYjEtOTk1NS1lNjU2M2Y0YTVjMDMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1ZiTUN4V1VxbyIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjVkaDBpM3NjODh0N2Jwa2Q4b3FsMzMxYWVqIiwiZXZlbnRfaWQiOiIwZTNiMDJiNS05MTlhLTRlN2QtYmI1Ni1lY2VhMTU0NGI0OGIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY2MDcyNTMyMywiZXhwIjoxNjYwODExNzIzLCJpYXQiOjE2NjA3MjUzMjMsImp0aSI6ImNjNjE2YWU4LTk3MjEtNDYyYi1hZDUwLTAyZDc5MGY0NDRlZiIsInVzZXJuYW1lIjoiOTk4OTcwM2ItZmJiMy00MWIxLTk5NTUtZTY1NjNmNGE1YzAzIn0.O-CUgEeerS8eeWyxBCL7lYk9Rv3LCEkPo6PXkP3sYUJI2q_HurjBoMCuMifc23gYKxO4Yyef5eaMCKNUqfcMhKBlXlDpgjQKqRUAjYbQxgOnRJaA8FzpXSQsbnfxOkWAEEkyISvsaKg7mYztL-TsD_qS0QJ3J95fjIJJaN2Za5s1m7kIwxgVI6v4HK9TbrDCi50ADtKLS2Nclr8FvScoRJBOJY7q-bwQ7jHFtA90EbxR8FWFipdx-MB-QcdoBo1T4KsN-WSiMPWvy_9G1W43SKMBbQ2Iplv2vGMHvnS1xlmWx8ilXjtsT-uotv4TIeiWHSWzAiO13DujoCVZStRFzA'
        }
      });
//       



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