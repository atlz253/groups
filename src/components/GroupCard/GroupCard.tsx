import Group from "../../group/Group";
import styles from "./GroupCard.module.css";

const PRIVATE_GROUP_LABEL = "Приватная группа";
const PUBLIC_GROUP_LABEL = "Публичная группа";
const MEMBERS_COUNT_LABEL = "Количество участников";

function GroupCard({ name, avatar_color, closed, members_count }: Group) {
  return (
    <div className={styles.card}>
      <div
        className={styles.avatar}
        style={{ backgroundColor: avatar_color }}
      ></div>
      <div className={styles.info}>
        <div>{name}</div>
        <div>{closed ? PRIVATE_GROUP_LABEL : PUBLIC_GROUP_LABEL}</div>
        <div>
          {MEMBERS_COUNT_LABEL}: {members_count}
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
