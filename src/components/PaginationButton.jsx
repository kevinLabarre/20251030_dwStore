export const PaginationButton = ({ nbrButtons = 0, handleClick }) => {
  // numbers est un tableau de chiffres
  // Ex: si nbrButtons = 5 --> numbers sera égale à [1,2,3,4,5]

  const numbers = Array.from({ length: nbrButtons }, (_, idx) => idx + 1);

  return (
    <>
      {numbers.map((n) => (
        <button className="btn" key={n} onClick={() => handleClick(n)}>
          {n}
        </button>
      ))}
    </>
  );
};
