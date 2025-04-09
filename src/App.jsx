import React from "react";
import FormRender, { useForm } from "form-render";
const CustomInput = (props: any) => {
  const { addons } = props;
  return <div>{addons.dataIndex[0]}</div>;
};
const schema = {
  type: "object",
  displayType: "row",
  properties: {
    list: {
      title: "对象数组",
      description: "对象数组嵌套功能",
      type: "array",
      widget: "tableList",
      items: {
        type: "object",
        properties: {
          input1: {
            title: "简单输入框",
            widget: "CustomInput",
            bind: false,
          },
          input2: {
            title: "简单输入框2",
            type: "string",
          },
          input3: {
            title: "简单输入框3",
            type: "string",
          },
          select1: {
            title: "单选",
            type: "string",
            enum: ["a", "b", "c"],
            enumNames: ["早", "中", "晚"],
            widget: "select",
          },
        },
      },
    },
  },
};

const onFinish = (formData) => {
  console.log("formData", formData);
};

export default () => {
  const form = useForm();
  return (
    <FormRender
      schema={schema}
      form={form}
      onFinish={onFinish}
      footer={true}
      widgets={{ CustomInput }}
    />
  );
};
