import React, { useEffect } from 'react';
import axios from 'axios';

<script src="https://js.stripe.com/v3/"></script>


const api = 'https://p2nzd3xj7i.execute-api.ap-south-1.amazonaws.com/dev/staff/fetch-tutored-student?collegeId=19E234';



export default function AxPostFetchTutoredStud() {
  const fetchData = async () => {
    try {
      const response = await axios.post(api, {collegeId: '19E234'} , {
        headers: {
          "Access-Token": 'eyJraWQiOiJ0eU9LVHFIV1J2UDlNOGRVNDVQaHhRZkZDTndqRDQ4R3ltbVg4RDhmVmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OTg5NzAzYi1mYmIzLTQxYjEtOTk1NS1lNjU2M2Y0YTVjMDMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1ZiTUN4V1VxbyIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjVkaDBpM3NjODh0N2Jwa2Q4b3FsMzMxYWVqIiwiZXZlbnRfaWQiOiI5NGJmZGQ3My1hNTU1LTQyNTktYmUyNi0xZTUyMGQzNGY3NjQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY2MDEzOTYxOSwiZXhwIjoxNjYwMjI2MDE5LCJpYXQiOjE2NjAxMzk2MTksImp0aSI6IjZkM2Y5ZWFlLTcxYzYtNDg0YS05MTYwLTg1MGNiZjU1MDU3NSIsInVzZXJuYW1lIjoiOTk4OTcwM2ItZmJiMy00MWIxLTk5NTUtZTY1NjNmNGE1YzAzIn0.P63oUjiPNIMZy0RhlgoBhM_EoyMxww3NBZjzrNhDYIyflFBJtcJYDo1j35-nmlhpJ6sX_hQCffE1JbJp4Y7FRIBUGgFyLfPrls7BiP29E1GPr5mTkJuFryEh8W_aK5cjY2zQtaAmtt3a59_1QpeaY_ibZhwBSKMOLPT3uG7rTZLAMLThA69ZWtbCrXzdMFmgmoZNBevW9ZqcNksWE4p2UsarbhdFp5oLU4v-AQIQRqpIVxhfMuEIR67pEtwXj9uq5lZ-wRBrsMxdkvicNxRPnXZnZ6teMW0D3kuzWiB2p5fs6pquZ1I2jDlg0fo4Vfi53nT3_-SSaq7k3Jqr7Q-1PA'
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