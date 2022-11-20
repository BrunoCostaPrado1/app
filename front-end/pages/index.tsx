import { Form } from "./components/form";
import { HelloWorld } from "./components/hello";

//
//
//

export default function Home(): JSX.Element {
  return (
    <div>
      <HelloWorld />
      <Form email="" password="" />
    </div>
  );
}
