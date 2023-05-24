import { array } from "../data/arrayCharacter";

export const TemplateCharacter = () => {
  return (
    <ul className="character-list">
      {array.map((character) => (
        <li className="character col">
          <div className="card character__card">
            <img
              src={character.picture}
              alt={`${character.name} ${character.house}`}
              className="character__picture card-img-top"
            />
            <div className="card-body">
              <h2 className="character__name card-title h4">
                {character.name} {character.house}
              </h2>
              <div className="character__info">
                <ul className="list-unstyled">
                  <li>Edad: {character.age}</li>
                  <li>
                    Estado:{" "}
                    {character.alive ? (
                      <i className="fas fa-thumbs-up"></i>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
              <div className="character__overlay">
                <ul className="list-unstyled">
                  <li>{character.age}</li>
                  <li>{character.tvShow}</li>
                  <li>{character.communicate}</li>
                  {character.weapon && <li>{character.weapon}</li>}
                </ul>
                <div className="character__actions">
                  <button className="character__action btn">habla</button>
                  <button className="character__action btn">muere</button>
                </div>
              </div>
            </div>
            {character.weapon && <i className="🗡"></i>}
          </div>
        </li>
      ))}
    </ul>
  );
};
