import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  //const form = useForm();
  //console.log(form);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  // <form onSubmit={handleSubmit((data) => console.log(data))}></form>
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            The name field must be atleast 3 characters.
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { pattern: /\d+/ })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.name?.type === "pattern" && <p>Please enter number for age.</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

// const Form = () => {
//   const [person, setPerson] = useState({
//     name: "",
//     age: 0,
//   });

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log("Submitted");

//     console.log(person);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, name: event.target.value })
//           }
//           value={person.name}
//           id="name"
//           type="text"
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, age: parseInt(event.target.value) })
//           }
//           value={person.age}
//           id="age"
//           type="number"
//           className="form-control"
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name: "", age: 0 };

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log("Submitted");

//     if (nameRef.current != null) person.name = nameRef.current.value;
//     if (ageRef.current != null) person.age = parseInt(ageRef.current.value);

//     console.log(person);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input ref={nameRef} id="name" type="text" className="form-control" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input ref={ageRef} id="age" type="number" className="form-control" />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;
