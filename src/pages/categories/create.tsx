import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { CATEGORIES_QUERY } from "./queries";

export const CategoryCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    meta: {
      fields: CATEGORIES_QUERY,
    },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Title"}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
