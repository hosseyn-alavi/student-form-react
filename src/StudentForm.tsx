import {Button,  Form, Input} from "antd";
import {Student} from "./App";

interface StudentFromProps {
    addStudent: (student: Student) => void;
}

export function StudentForm(props: StudentFromProps) {
    function finishForm(student: Student) {
        props.addStudent(student);
    }

    return (
        <Form
            name="basic"
            labelCol={{span: 3}}
            wrapperCol={{span: 4}}
            onFinish={finishForm}
            autoComplete="off"
        >
            <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                    {required: true, message: "Please input your username!"},
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                    {required: true, message: "Please input your username!"},
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {required: true, message: "Please input your username!"},
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
