import React, { useEffect } from 'react';
import axios from 'axios';

<script src="https://js.stripe.com/v3/"></script>


const api = ' https://p2nzd3xj7i.execute-api.ap-south-1.amazonaws.com/dev/staff/mark-subject-attendance';



export default function AxPostMarkSubjectAtt() {
  const fetchData = async () => {
    try {
      const response = await axios.post(api, {subjectName: 'Devops', staffName: 'Narendran', subjectCode: '16cs210', collegeId: '19E234', date: '04 Aug 2019', name: 'WhatsApp Video 2022-08-04 at 7.17.53 PM.mp4'} , {
        headers: {
          "Access-Token": 'eyJraWQiOiJ0eU9LVHFIV1J2UDlNOGRVNDVQaHhRZkZDTndqRDQ4R3ltbVg4RDhmVmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OTg5NzAzYi1mYmIzLTQxYjEtOTk1NS1lNjU2M2Y0YTVjMDMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1ZiTUN4V1VxbyIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjVkaDBpM3NjODh0N2Jwa2Q4b3FsMzMxYWVqIiwiZXZlbnRfaWQiOiJkZjI4MzlhNS0zNmExLTQ4ZWYtYTQ4Mi03ZDQ0M2E3OGM2ZDYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY2MDIwNTM1OCwiZXhwIjoxNjYwMjkxNzU4LCJpYXQiOjE2NjAyMDUzNTgsImp0aSI6IjQ5YjcyYTU3LWZiMTgtNGJlNy05NzJhLWRiZjU5YWQ0MDMyZCIsInVzZXJuYW1lIjoiOTk4OTcwM2ItZmJiMy00MWIxLTk5NTUtZTY1NjNmNGE1YzAzIn0.ltdj9b8DJJMbORk8vcbbEzviGt2gVYJ6JqBuBOxclOtXUFEY6ohn9VS8S0f6tWP941R2mxFX6aEtyVjz2lTH8FITO2q0cuPfjylX9V7ytVSv4UlyCJiXEFR8PRfB6sqJPzeE_rOOjgdeD4390y7F9Ow8VCm4l_0iq3pVZEVDUYy7a6Cb61XYsihoggsXoqHBGo84Gvcp4buv091V6HTMIoQA4mYtf91nEU2Gbq_5JtUX8kcOVnq-2eiCZYtK-V578yD2RVvEh7NQujEW_MzqBx3jiNjcVsGlAKUqcn6LivvmamrhpT_cBTXEq0evEm_yZ8dl06XzpIGl2CoGPX1AZA'

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

//https://www.example.com/#id_token=eyJraWQiOiJQbEdEaktpclRUb1d0RmMrMzVMU2gzUzdIRUhRMWUrZmdyUm9yZk8rbWw4PSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoickJ2YkFSVGlxQWdQcEdCN1l3WUNoUSIsInN1YiI6Ijk5ODk3MDNiLWZiYjMtNDFiMS05OTU1LWU2NTYzZjRhNWMwMyIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfVmJNQ3hXVXFvIiwiY29nbml0bzp1c2VybmFtZSI6Ijk5ODk3MDNiLWZiYjMtNDFiMS05OTU1LWU2NTYzZjRhNWMwMyIsImF1ZCI6IjVkaDBpM3NjODh0N2Jwa2Q4b3FsMzMxYWVqIiwiZXZlbnRfaWQiOiJkZjI4MzlhNS0zNmExLTQ4ZWYtYTQ4Mi03ZDQ0M2E3OGM2ZDYiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY2MDIwNTM1OCwiZXhwIjoxNjYwMjA4OTU4LCJpYXQiOjE2NjAyMDUzNTgsImp0aSI6IjJjMmJjYzE5LWE4ODctNDgwNy04ZGViLWE3NjJhZTI0MGFjZSIsImVtYWlsIjoic3RhZmZAZ21haWwuY29tIn0.CStRHGuZQrrwmsLOoiK2EFKdYD8sRKOylda5FBOpiPVgQ2pAs2wUeCdsmU68LQySU1GyEqNxEEiqQQ6huCmLNYiVr20-o4A6OYMAB7fEMPuOYlA-1ZxwxDD6JAMrclVqsDTYTfg4fLPm-jtktVlKKj_2l7J7CQ7-rngfJinXaxKrO2gWGFA1dDZnXqY8HWkMYwHjw7ZVqpH288oHfRCdv5u2hXdwag-uJqK4eHoR94kgUcyV_Ql00qNFTKLty-lCZ1nO5XGzj8knSZ9r4oMxyP2nySbk2iKBcc0B3UqIx_tGGWixMpFs_X_OMoVP7hpmmy8xPkzFIp-JXgTFMBz4tg&access_token=&expires_in=86400&token_type=Bearer
//https://www.example.com/#id_token=eyJraWQiOiJQbEdEaktpclRUb1d0RmMrMzVMU2gzUzdIRUhRMWUrZmdyUm9yZk8rbWw4PSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoickJ2YkFSVGlxQWdQcEdCN1l3WUNoUSIsInN1YiI6Ijk5ODk3MDNiLWZiYjMtNDFiMS05OTU1LWU2NTYzZjRhNWMwMyIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfVmJNQ3hXVXFvIiwiY29nbml0bzp1c2VybmFtZSI6Ijk5ODk3MDNiLWZiYjMtNDFiMS05OTU1LWU2NTYzZjRhNWMwMyIsImF1ZCI6IjVkaDBpM3NjODh0N2Jwa2Q4b3FsMzMxYWVqIiwiZXZlbnRfaWQiOiJkZjI4MzlhNS0zNmExLTQ4ZWYtYTQ4Mi03ZDQ0M2E3OGM2ZDYiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY2MDIwNTM1OCwiZXhwIjoxNjYwMjA4OTU4LCJpYXQiOjE2NjAyMDUzNTgsImp0aSI6IjJjMmJjYzE5LWE4ODctNDgwNy04ZGViLWE3NjJhZTI0MGFjZSIsImVtYWlsIjoic3RhZmZAZ21haWwuY29tIn0.CStRHGuZQrrwmsLOoiK2EFKdYD8sRKOylda5FBOpiPVgQ2pAs2wUeCdsmU68LQySU1GyEqNxEEiqQQ6huCmLNYiVr20-o4A6OYMAB7fEMPuOYlA-1ZxwxDD6JAMrclVqsDTYTfg4fLPm-jtktVlKKj_2l7J7CQ7-rngfJinXaxKrO2gWGFA1dDZnXqY8HWkMYwHjw7ZVqpH288oHfRCdv5u2hXdwag-uJqK4eHoR94kgUcyV_Ql00qNFTKLty-lCZ1nO5XGzj8knSZ9r4oMxyP2nySbk2iKBcc0B3UqIx_tGGWixMpFs_X_OMoVP7hpmmy8xPkzFIp-JXgTFMBz4tg&access_token=&expires_in=86400&token_type=Bearer