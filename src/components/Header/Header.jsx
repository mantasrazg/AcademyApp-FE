import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/Logo.png";

function Header({ loggedIn, logout }) {
  return (
    <S.Header>
      <Link to="/">
        <S.Logo src={logoImg} alt="Logo" />
      </Link>
      <S.Actions>
        {!loggedIn ? (
          <S.StyledLink to="/login">Login</S.StyledLink>
        ) : (
          <>
            <S.StyledLink to="/">Home</S.StyledLink>
            <S.StyledLink to="/students">Students</S.StyledLink>
            <S.StyledLink to="/lecturers">Lecturers</S.StyledLink>
            <S.StyledLink to="/courses">Courses</S.StyledLink>
            <S.StyledLink onClick={logout}>Logout</S.StyledLink>
          </>
        )}
      </S.Actions>
    </S.Header>
  );
}

export default Header;
