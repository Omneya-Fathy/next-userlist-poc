import React from "react";
import EditUser from "./EditUser";
import styles from "./UserCard.module.css";


function UserCard() {
  return (
    <div className={styles.card}>
      <EditUser />
    </div>
  );
}

export default UserCard;
