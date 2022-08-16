import React, { useEffect } from 'react';
import axios from 'axios';

<script src="https://js.stripe.com/v3/"></script>


const api = 'https://p2nzd3xj7i.execute-api.ap-south-1.amazonaws.com/dev/staff/fetch-student-details';



export default function AxPostFetchStudDetails() {
  const fetchData = async () => {
    try {
      const response = await axios.post(api, {rollno: '1901039'} , {
        headers: {
          "Access-Token": 'eyJraWQiOiJ0eU9LVHFIV1J2UDlNOGRVNDVQaHhRZkZDTndqRDQ4R3ltbVg4RDhmVmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OTg5NzAzYi1mYmIzLTQxYjEtOTk1NS1lNjU2M2Y0YTVjMDMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1ZiTUN4V1VxbyIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjVkaDBpM3NjODh0N2Jwa2Q4b3FsMzMxYWVqIiwiZXZlbnRfaWQiOiJkZjI4MzlhNS0zNmExLTQ4ZWYtYTQ4Mi03ZDQ0M2E3OGM2ZDYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY2MDIwNTM1OCwiZXhwIjoxNjYwMjkxNzU4LCJpYXQiOjE2NjAyMDUzNTgsImp0aSI6IjQ5YjcyYTU3LWZiMTgtNGJlNy05NzJhLWRiZjU5YWQ0MDMyZCIsInVzZXJuYW1lIjoiOTk4OTcwM2ItZmJiMy00MWIxLTk5NTUtZTY1NjNmNGE1YzAzIn0.ltdj9b8DJJMbORk8vcbbEzviGt2gVYJ6JqBuBOxclOtXUFEY6ohn9VS8S0f6tWP941R2mxFX6aEtyVjz2lTH8FITO2q0cuPfjylX9V7ytVSv4UlyCJiXEFR8PRfB6sqJPzeE_rOOjgdeD4390y7F9Ow8VCm4l_0iq3pVZEVDUYy7a6Cb61XYsihoggsXoqHBGo84Gvcp4buv091V6HTMIoQA4mYtf91nEU2Gbq_5JtUX8kcOVnq-2eiCZYtK-V578yD2RVvEh7NQujEW_MzqBx3jiNjcVsGlAKUqcn6LivvmamrhpT_cBTXEq0evEm_yZ8dl06XzpIGl2CoGPX1AZA'
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