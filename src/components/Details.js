export default function Details({ user }) {
  if (!user) return;

  return (
    <section className="profile">
      <img className="avatar" src={user.avatar} alt="" />
      <h1 className="profile__item name">{user.name}</h1>
      <p className="profile__item city">City: {user.details.city}</p>
      <p className="profile__item company">Company: {user.details.company}</p>
      <p className="profile__item position">Position: {user.details.position}</p>
    </section>
  );
}
