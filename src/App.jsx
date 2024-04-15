import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { Button } from "bootstrap";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Name: </label>
          <input type="text" name="name" {...register("name")} />
        </div>
        <div className="form-control">
          <label>Surname: </label>
          <input type="surname" name="surname" {...register("surname")} />
        </div>

        <div className="form-control">
          <label>Password: </label>
          <input type="password" name="password" {...register("password")} />
        </div>

        <div className="form-control">
          <label></label>
          <button type="button" className="btn btn-danger">
            Register{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
