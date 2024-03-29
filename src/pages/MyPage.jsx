import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import ReactHelmet from "../common/ReactHelmet";
import GlobalErrorHandler from "../components/Error/GlobalErrorHandler";
import Loading from "../components/Loading/Loading";
import MainTemplate from "../components/Template/Main/MainTemplate";
import UserDeleteModal from "../components/UserDeleteModal/UserDeleteModal";
import { ROLE } from "../constants/role";
import useModal from "../hooks/useModal";
import { getMyPage } from "../modules/user";

const MyPage = () => {
  const { jwtToken } = useSelector(state => state.auth);
  const { data: user, loading, error } = useSelector(state => state.user);
  const [isOpened, openModal, closeModal] = useModal();
  const dispatch = useDispatch();
  const history = useHistory();

  const inActivateScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.scroll = "no";
  };

  const activateScroll = () => {
    document.body.style.overflow = "scroll";
    document.body.scroll = "yes";
  };

  const openDeleteModal = () => {
    openModal();
    inActivateScroll();
  };

  const closeDeleteModal = () => {
    closeModal();
    activateScroll();
  };

  useEffect(() => {
    dispatch(getMyPage(jwtToken));
  }, [dispatch, jwtToken]);

  const findUserRole = role => {
    if (role === ROLE.ADMIN) {
      return "ADMIN";
    }

    if (role === ROLE.MEMBER) {
      return "MEMBER";
    }

    if (role === ROLE.GUEST) {
      return "GUEST";
    }
  };

  if (!jwtToken) {
    history.push("/");
  }

  return (
    <>
      <ReactHelmet title={"마이 페이지"} />
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
            <UserDeleteButton onClick={openDeleteModal}>
              탈퇴하기
            </UserDeleteButton>
            <UserDeleteModal
              isOpened={isOpened}
              jwtToken={jwtToken}
              user={user}
              closeDeleteModal={closeDeleteModal}
            />
          </MyPageBlock>
        )}
      </MainTemplate>
    </>
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

const UserDeleteButton = styled.button`
  margin-top: 5rem;
  padding: 0.7rem 2.1rem;
  font-size: 1.35rem;
  outline: none;
  border: none;
  cursor: pointer;
  background: #495057;
  color: #fff;
  font-weight: 600;
  border-radius: 0.3rem;
  box-shadow: 3px 5px 35px rgba(0, 0, 0, 0.3);
`;

export default MyPage;
