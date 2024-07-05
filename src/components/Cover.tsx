import styled from "styled-components";

const CoverBox = styled.section`
  height: 50vh;
`;

const Div = styled.div`
  z-index: -1;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 20vh;
  background-image: url("http://www.disney.co.kr/home/images/main/bg-d.jpg");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
`;

export default function Cover() {
  return (
    <>
      <Div>
        <img
          src='http://www.disney.co.kr/home/images/main/logo-d.png'
          alt=''
          width='150'
        />
      </Div>
    </>
  );
}
