import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cover from "../components/Cover";

interface CharactersInterface {
  id: number;
  imageUrl: string;
  name: string;
}

const Container = styled.section`
  padding: 60px 0;
  background-color: #f5f6fa;
`;

const Contents = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding: 20px;
  font-size: 2em;
  font-weight: 700;
`;

const CharacterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CharacterItem = styled.li`
  width: 33.3333%;
  padding: 20px;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 160px;
  margin-bottom: 12px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`;

const Name = styled.p`
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  padding: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<CharactersInterface[]>([]);

  useEffect(() => {
    (async () => {
      const characterData = await fetch(
        "https://disney_api.nomadcoders.workers.dev/characters"
      );
      const json = await characterData.json();
      setCharacters(json.slice(0, 100));
    })();

    setLoading(false);
  }, []);

  return (
    <>
      <Cover />

      <Container>
        <Contents>
          <Title>Disney Characters</Title>

          {loading ? (
            "loading..."
          ) : (
            <CharacterList>
              {characters.map((character) => (
                <CharacterItem key={character.id}>
                  <Link to={`/character/${character.id}`}>
                    <ImgBox>
                      <img src={character.imageUrl} alt={character.name} />
                    </ImgBox>
                    <Name>{character.name}</Name>
                  </Link>
                </CharacterItem>
              ))}
            </CharacterList>
          )}
        </Contents>
      </Container>
    </>
  );
}

export default Home;
