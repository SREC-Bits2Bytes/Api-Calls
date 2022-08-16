import React, { useEffect } from 'react';
import axios from 'axios';

<script src="https://js.stripe.com/v3/"></script>


const api = 'https://p2nzd3xj7i.execute-api.ap-south-1.amazonaws.com/dev/staff/add-student-subject';



export default function AxPostAddStudSubject() {
  const fetchData = async () => {
    try {
      const response = await axios.post(api, {subjectName :"Devops", staffName:"Narendran" , subjectCode:"16cs210", collegeId:"19E234", student: ["1901053"]} , {
        //{subjectName, staffName , subjectCode, collegeId}
        headers: {
          "Access-Token": 'eyJraWQiOiJ0eU9LVHFIV1J2UDlNOGRVNDVQaHhRZkZDTndqRDQ4R3ltbVg4RDhmVmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OTg5NzAzYi1mYmIzLTQxYjEtOTk1NS1lNjU2M2Y0YTVjMDMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1ZiTUN4V1VxbyIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjVkaDBpM3NjODh0N2Jwa2Q4b3FsMzMxYWVqIiwiZXZlbnRfaWQiOiI5OGViM2Y0My0zZGM4LTRkMTUtOTE4MS02NWZmZDJjNWY0MGMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY2MDI4MzYxMiwiZXhwIjoxNjYwMzcwMDEyLCJpYXQiOjE2NjAyODM2MTIsImp0aSI6ImExMmZlZGIxLTlkMDQtNGMwYi04OWY4LWQ1MDlkNzk5NTk3YyIsInVzZXJuYW1lIjoiOTk4OTcwM2ItZmJiMy00MWIxLTk5NTUtZTY1NjNmNGE1YzAzIn0.eo_3jxufMfQYP2x8KeCXa_8V7bm7LX0zs4Oj3GiVeyCvMQ4wcoJ71TcYMAtxnQFre5Yj9UHUeFOOEUJZDIql_v_7xiN65xPhhjakOs_MgG7V-xFzbugxiDeDGW19orAy2AEV3nDq5_FfKYrrNHtp-Gc-2Lz5QwMlV8JCGIV7IyXWKc7_9YO-930RtmUL7O2xC55wflIlNfRmze5_w1KCo92ZZy9L6mYbK5xKMa_KE3V5YVJaLTnHmf1pdI2wpI92mZnJvYNemQ_9hzgKEP0c1OvGHvdiwjH0TYp7HU0R-3ZiACLcCcEJZqjPPT4GfS4fXbwqdW6JF2fq6tWZOao84w'
         //  ,
          //  'access-control-allow-origin': '*',
          // "Access-Control-Allow-Headers": "X-Requested-With"
        }
      });
      if (response.data) {
        console.log(response.data);
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
  return <div>Hi</div>
}