import Group from "../group/Group";

function GroupCard({ name, avatar_color, closed, members_count }: Group) {
  return (
    <div>
      <div>name: {name}</div>
      <div>avatar_color: {avatar_color}</div>
      <div>closed: {closed}</div>
      <div>members_count: {members_count}</div>
    </div>
  )
}

export default GroupCard;