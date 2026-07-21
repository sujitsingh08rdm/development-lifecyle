import { Button } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

function App() {
  return (
    <>
      <h1>Complete life cycle dev and deployment</h1>
      <Button onClick={() => alert(formatCurrency(12345))} />
      <div>Hello!</div>
      <p>SOme new fixes! DEployemtn check</p>
    </>
  );
}

export default App;
