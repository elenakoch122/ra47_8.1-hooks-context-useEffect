import { useEffect, useState } from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

export default function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL + 'users.json')
      .then(res => res.json())
      .then(json => setUsers(json));
  }, []);

  const showDetails = (id) => setUserId(id);

  return (
    <div className="App">
      <List list={users} showDetails={showDetails} />
      {userId && <Details userId={userId} />}
    </div>
  );
}
