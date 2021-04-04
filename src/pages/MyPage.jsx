import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import GlobalErrorHandler from "../components/Error/GlobalErrorHandler";
import Loading from "../components/Loading/Loading";
import MainTemplate from "../components/Template/Main/MainTemplate";
import { ROLE } from "../constants/role";
import { getMyPage } from "../modules/user";

const MyPage = () => {
  const { jwtToken } = useSelector(state => state.auth);
  const { data: user, loading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPage(jwtToken));
  }, [dispatch, jwtToken]);

  const findUserRole = role => {
    if (role === ROLE.ADMIN) {
      return "리얼피아노 운영자";
    }

    if (role === ROLE.MEMBER) {
      return "리얼피아노 회원";
    }

    if (role === ROLE.GUEST) {
      return "리얼피아노 손님";
    }
  };

  return (
    <MainTemplate>
      {loading && <Loading position={50} />}
      {error && <GlobalErrorHandler error={error} />}
      {user && (
        <MyPageBlock>
          <Title> </Title>
          <UserAvatarWrap>
            <UserImage src={user.avatarUrl} />
            <Name>{user.name}</Name>
            <Email>{user.email}</Email>
          </UserAvatarWrap>
          <UserDetailsWrap>
            <UserDetails>
              <DetailsValue>{user.createdDateTime}</DetailsValue>
              <DetailsName>가입일</DetailsName>
            </UserDetails>
            <UserDetails>
              <DetailsValue>{findUserRole(user.role)}</DetailsValue>
              <DetailsName>등급</DetailsName>
            </UserDetails>
            <UserDetails>
              <DetailsValue>{user.requestCount}</DetailsValue>
              <DetailsName>신청곡 등록 수</DetailsName>
            </UserDetails>
          </UserDetailsWrap>
        </MyPageBlock>
      )}
    </MainTemplate>
  );
};

const MyPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.5);
  padding: 0rem 3rem 1.5rem 3rem;
`;

const UserAvatarWrap = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  width: 65%;
  padding: 3rem 0rem;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const UserImage = styled.img`
  border-radius: 50%;
  box-shadow: 5px 3px 30px 1px rgba(0, 0, 0, 0.3);
  max-width: 9.6rem;
  max-height: 9.6rem;
`;

const Name = styled.span`
  margin-top: 2.5rem;
  font-size: 1.7rem;
  color: #212121;
  font-weight: 700;
`;

const Email = styled.span`
  margin-top: 0.7rem;
  color: rgba(0, 0, 0, 0.3);
`;

const UserDetailsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5rem;
  width: 65%;
  margin-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media ${({ theme }) => theme.device.mobile} {
    justify-content: space-around;
    padding: 5rem 0rem;
    width: 95%;
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailsValue = styled.span`
  font-weight: 600;
  font-size: 1.5rem;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.2rem;
  }
`;

const DetailsName = styled.span`
  margin-top: 0.8rem;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 700;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.1rem;
  }
`;

export default MyPage;
