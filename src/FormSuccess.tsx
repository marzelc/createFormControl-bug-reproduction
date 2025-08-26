import {Link} from "react-router";

const FormSuccess = () => {
  return <>
    <h1>Form success</h1>
    <p>If you go back to the form to create an other name, the previous value is shown</p>
    <Link to='/'>Create another user</Link>
  </>;
};

export default FormSuccess
