interface Group {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: AvatarColor;
  members_count: number;
  friends?: User[];
}

export type AvatarColor =
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "purple"
  | "orange"
  | "white";

export interface User {
  first_name: string;
  last_name: string;
}

export default Group;
