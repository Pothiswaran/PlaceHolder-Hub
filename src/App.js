import { useEffect, useState } from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
import Table from "./Table";
function App() {
  
  const [usersList, setUsersList] = useState([]);
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [reqType, setReqType] = useState('users')
  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const reqUrl = `${API_URL}${reqType}`;
        const response = await fetch(reqUrl);
        if (!response.ok) throw Error("Data not found");
        const listItems = await response.json();
        setUsersList(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems()
  }, [reqType]);

  const handleClick = (event) => {
    event.preventDefault();
    setReqType(event.target.textContent);

  };


  return (
    <div>
      <Header 
      handleClick = {handleClick}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p>Error: {fetchError}</p>}
        {!isLoading && !fetchError && (
          <List usersList={usersList} />
          // <Table usersList={usersList} />
        )}
      </main>
    
      
      <Footer />
    </div>
  );
}

export default App;

