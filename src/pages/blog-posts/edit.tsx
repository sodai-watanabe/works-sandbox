import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";
import {
  BLOG_POSTS_CATEGORIES_SELECT_QUERY,
  BLOG_POSTS_QUERY,
} from "./queries";

export const BlogPostEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({
    meta: {
      fields: BLOG_POSTS_QUERY,
    },
  });

  const blogPostsData = queryResult?.data?.data;

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categories",
    defaultValue: blogPostsData?.category?.id,
    queryOptions: {
      enabled: !!blogPostsData?.category?.id,
    },
    meta: {
      fields: BLOG_POSTS_CATEGORIES_SELECT_QUERY,
    },
  });

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
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
        <Form.Item
          label={"Content"}
          name="content"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item
          label={"Category"}
          name={"category_id"}
          initialValue={formProps?.initialValues?.category?.id}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label={"Status"}
          name={["status"]}
          initialValue={"draft"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue={"draft"}
            options={[
              { value: "draft", label: "Draft" },
              { value: "published", label: "Published" },
              { value: "rejected", label: "Rejected" },
            ]}
            style={{ width: 120 }}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
