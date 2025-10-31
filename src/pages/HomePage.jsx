import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../ReduxSlices/counterSlice";

export const HomePage = () => {
  // useSelector pour s''abonner'
  const count = useSelector((state) => state.counter.value);

  // useDispatch pour modifier les state
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  const incrementByAmountCount = () => {
    // Redux injecte notre '5' comme payload de notre objet d'action

    dispatch(incrementByAmount(5));
  };

  return (
    <>
      <h1>Page D'accueil: Compteur Redux</h1>
      <p>
        Avec les stores, on doit utiliser des selector pour nous 'abonner' à un
        état. Avec Redux, nous avons useSelector()
      </p>
      <p>count: {count}</p>

      <h2>Déclenchement des fonctions 'reducer'</h2>
      <p>
        Avec les stores on doit obligatoirement passer par une fonction
        'reducer' pour modifier un state. Pour cela, on doit utiliser 'dispatch'
      </p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementByAmountCount}>+5</button>
    </>
  );
};
