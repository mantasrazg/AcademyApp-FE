import React from "react";
import * as S from "./Notification.style";

function Notification({ message, type }) {
  return (
    <S.NotificationBox type={type}>
      <S.Notification>{message}</S.Notification>
    </S.NotificationBox>
  );
}

export default Notification;
