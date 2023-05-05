import { useEffect, useState } from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

export default function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoadling] = useState(false);

  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

  useEffect(() => {
    fetch(url + 'users.json')
      .then(res => res.json())
      .then(json => setUsers(json));
  }, []);

  useEffect(() => {
    if (!userId) return;

    setLoadling(true);

    try {
      fetch(url + `${userId}.json`)
        .then(res => res.json())
        .then(json => setUser(json));
    } finally {
      setLoadling(false);
    }
  }, [userId]);

  const showDetails = (id) => setUserId(id);

  return (
    <div className="App">
      <List list={users} showDetails={showDetails} />
      {loading && <p>Loading...</p>}
      {userId && <Details user={user} />}
    </div>
  );
}
