import { Button } from "keep-react";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);
  return (
    <div>
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-5xl font-bold">Counter - {value}</h1>
          <div className="flex items-center justify-center gap-5 mt-10">
            <Button
              disabled={value === 10}
              onClick={() => dispatch(increment())}
              size="sm"
              color="success"
            >
              Increment
            </Button>
            <Button
              disabled={value === 0}
              onClick={() => dispatch(decrement())}
              size="sm"
              color="error"
            >
              Decrement
            </Button>
            <Button
              onClick={() => dispatch(incrementByAmount(5))}
              size="sm"
              color="secondary"
            >
              Increment By 5
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
