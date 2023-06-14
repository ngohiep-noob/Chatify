import styled from "styled-components";

import Logo from "../../components/SideBar/Logo";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AuthLayout = ({ children }: any) => {
  return (
    <div>
      <div>
        <div style={{ position: "absolute", top: 10, left: 20 }}>
          <Logo />
        </div>

        <Wrapper>{children}</Wrapper>
      </div>
    </div>
  );
};

export default AuthLayout;
