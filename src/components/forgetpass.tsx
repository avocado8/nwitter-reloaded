import { sendPasswordResetEmail } from "firebase/auth"
import styled from "styled-components"
import { auth } from "../firebase"
import { useState } from "react"

const Forget = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const Button = styled.span`
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: underline;
`
const Form = styled.form``;

const Input = styled.input`
  border-radius: 50px;
  padding: 10px;
  &[type="submit"]{
    cursor: pointer;
    &:hover {
      opacity: .8;
    }
  }
`;

const Info = styled.span`
  margin-top: 10px;
`;

export default function ForgetPass() {
  const [isForget, setIsForget] = useState(false);
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");

  const onClick = () => {
    setIsForget(true);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {target: {name, value}} = e;
    if (name === "email"){
      setEmail(value);
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(email === "") return;
    try {
      await sendPasswordResetEmail(auth, email);
      setInfo("Confirmation email sent");
    } catch(e) {
      console.error(e);
    }
  }

  return (
    <Forget>
      <Button onClick={onClick}>
        Forget Password?
      </Button>
      {isForget ?
      <Form onSubmit={onSubmit}>
        <Input onChange={onChange} name="email" type="text" value={email} placeholder="Email" required/>
        <Input type="submit" value="send email"/>
      </Form>
      : null}
      <Info>{info}</Info>
    </Forget>
    
  )
}