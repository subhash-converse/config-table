import { Button } from "@/components/ui/button";
import type { RootState } from "@/store";
import { decrement, increment } from "@/store/slices/counter-slice";
import { useSelector, useDispatch } from "react-redux";

export default function AboutPage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className="max-w-3xl mx-auto p-6 h-full flex justify-center items-center">
      <div>
        <div className="flex justify-center items-center gap-4">

          <Button onClick={() => dispatch(increment())}>+</Button>
          <h1>Count: {count}</h1>
          <Button onClick={() => dispatch(decrement())}>-</Button>
        </div>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to our website! We are dedicated to building awesome apps with
          Vite, React, and Tailwind CSS.
        </p>
        <p className="mb-4">
          Our team  is passionate about delivering fast, reliable, and
          maintainable web experiences.
        </p>
        <p>
          This is just a placeholder page to show you how easy it is to create
          pages and routes with React Router.
        </p>
      </div>
    </main>
  );
}
