interface FormProps {
  email: string;
  password: string;
  name?: string;
}

function Log() {
  console.log("Hello");
}
export const Form = (props: FormProps) => {
  const formSubmit: any = () => {
    console.log("t");
  };
  return (
    <>
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-text text-justify" />
        </div>
        <div>
          {" "}
          <label htmlFor="senha">Senha:</label>
          <input type="password" className="form-text text-justify" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
