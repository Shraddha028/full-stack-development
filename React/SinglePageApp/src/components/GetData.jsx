import React, { useState, useEffect} from "react";

function GetData() {
  // using state management, manage
  // error, loading and success states
 
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
   

  async function fetchData() {
    // complete the code here
    console.log("NETWORKCAL")
     try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const req = await response.json()
        console.log(req)
        setData(req);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setError(true);
        setLoading(false);
      }
  }

  useEffect(() => {

    fetchData()
  }, []);

  if (loading) {
    return <h2>Loading data…</h2>;
  }

  if (error) {
    return <h2>Error fetching data</h2>;
  }
  // call the fetch data function when the
  // page loads

  // Here is the basic data boilerplate
  return (
    <>
      {/* do not edit the code below this line */}
      <h2>Name: {data.name}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Username: {data.username}</h2>
    </>
  );
}

export default GetData;
