interface Group {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: AvatarColor;
  members_count: number;
  friends?: User[];
}

type AvatarColor =
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "purple"
  | "orange"
  | "white";

interface User {
  first_name: string;
  last_name: string;
}

export default Group;
