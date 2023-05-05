export default function List({ list, showDetails }) {
  return (
    <nav className="nav">
      <ul className="list">
        {list.map(i => <li className="item" key={i.id} onClick={() => showDetails(i.id)}>{i.name}</li>)}
      </ul>
    </nav>
  );
}
