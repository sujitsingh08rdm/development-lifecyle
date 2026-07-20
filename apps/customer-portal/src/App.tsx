import { Button } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

function App() {
  return (
    <>
      <h1>Complete life cycle dev and deployment</h1>
      <Button onClick={() => alert(formatCurrency(12345))} />
    </>
  );
}

export default App;
