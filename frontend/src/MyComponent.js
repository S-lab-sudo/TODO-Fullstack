import { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  // const [data, setData] = useState('');
  // const [csrfToken, setCsrfToken] = useState(null);

  useEffect(()=>{
    axios.get("http://localhost:8000").then(response=>{
      console.log(response)
    }).catch(err=>{
      console.log(err)
    })
  })
  // useEffect(() => {
  //   const fetchCsrfToken = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/api/get_csrf_token/");
  //       setCsrfToken(response.data.csrfToken);
  //       // Update Axios headers only if the token is fetched successfully
  //       if (response.data.csrfToken) {
  //         axios.defaults.headers.common['X-CSRFToken'] = response.data.csrfToken;
  //       }
  //     } catch (error) {
  //       console.error('Error fetching CSRF token:', error);
  //     }
  //   };

  //   fetchCsrfToken();
  // }, []);

  // const postData = async () => {
  //   if (!csrfToken) {
  //     console.error('CSRF token not available yet. Try again later.');
  //     return;
  //   }
    
  //   try {
  //     const response = await axios.post("http://localhost:8000/api/my_endpoint/", { data: data });
  //     console.log(response.data);
  //     // Handle response as needed
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div>
      {/* <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={postData}>Send POST Request</button> */}
      I 
    </div>
  );
};

export default MyComponent;
