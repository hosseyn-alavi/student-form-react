import {Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {Student} from "./App";

interface TableProps {
    students: Student[];
}

export function StudentTable(props: TableProps) {
    const columns: ColumnsType<Student> = [
        {
            title: "First Name",
            dataIndex: "firstName",
            key: "firstName",
        },
        {
            title: "Last Name",
            dataIndex: "lastName",
            key: "lastName",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
    ];

    return <Table columns={columns} dataSource={props.students} />;
}
