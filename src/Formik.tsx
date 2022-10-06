import { useFormik, FormikProvider, Form, useField } from "formik";
import * as Yup from "yup";

const TextInputLiveFeedback = () => {

  const [field, meta] = useField({name:'username'});
  const showFeedback = meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex items-center space-between"></div>
      <input type='text' {...field}  />
    </div>
  );
};

export const Example = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <TextInputLiveFeedback />
      </Form>
    </FormikProvider>
  );
};
