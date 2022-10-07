import { useField } from "formik";
import { InputFieldStyled } from "./style";

const InputField = (props: any) => {
  const [field, meta] = useField(props);
  const showFeedback = meta.touched;
  console.log(meta.error, "field error .....");

  return (
    <InputFieldStyled>
      <input
        className={`${showFeedback ? (meta.error ? "invalid" : "valid") : ""}`}
        {...props}
        {...field}
      />
    </InputFieldStyled>
  );
};

export default InputField;
