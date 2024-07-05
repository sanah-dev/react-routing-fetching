import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

interface DetailsInterface {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  background-color: #f5f6fa;
`;

const PrevBtn = styled.button`
  align-self: flex-start;
  display: block;
  width: 80px;
  height: 36px;
  margin-bottom: 40px;
  padding: 0;
  border: 1px solid rgb(47 54 64 / 86%);
  border: 0;
  background: none;
  font-family: "brandon-grotesque", serif;
  text-align: left;
  cursor: pointer;
`;

const Contents = styled.div`
  max-width: 1024px;
  font-size: 22px;
  text-align: left;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2em;
  letter-spacing: 2px;
`;

const DetailsList = styled.ul`
  padding: 20px 0;
  ul {
    padding: 0;
    li {
      padding: 0;
    }
  }
`;
const DetailsItem = styled.li`
  padding: 20px 0;
  line-height: 1.7em;

  strong {
    display: block;
    font-weight: 700;
  }
`;

const ImgBox = styled.div`
  width: 400px;
  height: auto;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
  }
`;

function Details() {
  const characterId = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<DetailsInterface>();

  const onClick = () => {};

  useEffect(() => {
    (async () => {
      const detailsData = await fetch(
        `https://disney_api.nomadcoders.workers.dev/characters/${Object.values(
          characterId
        )}/`
      );
      const json = await detailsData.json();
      setDetails(json);
      console.log(json);
    })();

    setLoading(false);
  }, []);

  return (
    <Container>
      {loading
        ? "loading..."
        : details && (
            <Contents>
              <Title>
                <PrevBtn onClick={onClick}>&lt;&lt; prev</PrevBtn>
                {details.name ?? "데이터가 없습니다"}
              </Title>

              <DetailsList>
                <DetailsItem>
                  <ImgBox>
                    <img src={details.imageUrl} alt={details.name} />
                  </ImgBox>
                </DetailsItem>

                <DetailsItem>
                  <strong>Films</strong>
                  <DetailsList>
                    {details.films.map((item: string, i: number) => (
                      <DetailsItem key={i}>
                        {i + 1}. {item}
                      </DetailsItem>
                    ))}
                  </DetailsList>
                </DetailsItem>

                <DetailsItem>
                  <strong>Wiki</strong>
                  {details.sourceUrl ? (
                    <Link to={details.sourceUrl}>{details.sourceUrl}</Link>
                  ) : (
                    "URL이 없습니다"
                  )}
                </DetailsItem>
              </DetailsList>
            </Contents>
          )}
    </Container>
  );
}

export default Details;
