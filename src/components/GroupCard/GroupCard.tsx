import { useState } from "react";
import Group, { AvatarColor, User } from "../../groups/Group";
import styles from "./GroupCard.module.css";

const PRIVATE_GROUP_LABEL = "Приватная группа";
const PUBLIC_GROUP_LABEL = "Публичная группа";
const MEMBERS_COUNT_LABEL = "Количество участников";
const FRIENDS_COUNT_LABEL = "Количество друзей";

function GroupCard({ avatar_color, ...cardInfoProps }: Group) {
  return (
    <div className={styles.card}>
      <Avatar color={avatar_color} />
      <CardInfo {...cardInfoProps} />
    </div>
  );
}

function Avatar({ color }: { color?: AvatarColor }) {
  return (
    <div className={styles.avatar} style={{ backgroundColor: color }}></div>
  );
}

function CardInfo({ name, closed, members_count, friends }: CardInfoProps) {
  const [isFriendsListVisible, setIsFriendsListVisible] =
    useState<boolean>(false);
  const switchFriendsListVisibility = () =>
    setIsFriendsListVisible(!isFriendsListVisible);

  return (
    <div className={styles.cardInfo}>
      <div>
        <div>{name}</div>
        <div>{closed ? PRIVATE_GROUP_LABEL : PUBLIC_GROUP_LABEL}</div>
        <div>
          {MEMBERS_COUNT_LABEL}: {members_count}
        </div>
        {friends === undefined || (
          <FriendsCountLabel
            friendsCount={friends.length}
            switchFriendsListVisibility={switchFriendsListVisibility}
          />
        )}
      </div>
      {!isFriendsListVisible || <FriendsList friends={friends}></FriendsList>}
    </div>
  );
}

type CardInfoProps = Omit<Group, "id" | "avatar_color">;

function FriendsCountLabel({
  friendsCount,
  switchFriendsListVisibility,
}: FriendsCountLabelProps) {
  return (
    <button
      className={styles.friendsCount}
      onClick={switchFriendsListVisibility}
    >
      {FRIENDS_COUNT_LABEL}: {friendsCount}
    </button>
  );
}

type FriendsCountLabelProps = {
  friendsCount: number;
  switchFriendsListVisibility: () => void;
};

function FriendsList({ friends }: { friends?: User[] }) {
  return (
    <div>
      {friends?.map((friend) => (
        <Friend {...friend} key={generateFriendListKey(friend)} />
      ))}
    </div>
  );

  function generateFriendListKey({ first_name, last_name }: User) {
    return `${first_name}${last_name}`;
  }
}

function Friend({ first_name, last_name }: User) {
  return (
    <div>
      {first_name} {last_name}
    </div>
  );
}

export default GroupCard;
