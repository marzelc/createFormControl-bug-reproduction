import {createFormControl, useController, useForm} from "react-hook-form";
import {useNavigate} from "react-router";

const {formControl, control, handleSubmit, register} = createFormControl()

const LastName = () => {
  const {field} = useController({control, name: 'lastName', rules: {required: true}})

  return <>
    <label htmlFor="lastName">Last name:</label><input id='lastName' {...field} />
  </>
}

const Form = () => {
  const navigate = useNavigate()

  useForm({
    formControl,
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  })

  return <>
    <h1>Create a user</h1>
    <p>If you already have created one, submit without typing anything and the previous value of lastName (useController) will appear but not the firstName (register)</p>
    <form onSubmit={handleSubmit(data => {
      console.log(data);

      navigate('/success')
    })}>
      <label htmlFor="firstName">First firstName:</label>
      <input id='firstName' {...register('firstName', {required: true})} />
      <br/>
      <LastName/>
      <br/><br/>
      <button type='submit'>Submit</button>
    </form>
  </>;
};

export default Form
