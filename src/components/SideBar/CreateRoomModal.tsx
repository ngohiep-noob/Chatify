import { Form, FormInstance, Input, Modal, Select, SelectProps } from "antd";
import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { GetAllUsers } from "../../apis/user.api";

export interface CreateRoomModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  form: FormInstance;
}

export const CreateRoomModal = ({
  open,
  onOk,
  onCancel,
  form,
}: CreateRoomModalProps) => {
  const [options, setOptions] = useState<SelectProps["options"]>([]);

  useEffect(() => {
    (async () => {
      const res = await GetAllUsers();

      const options = res.data.map((user) => ({
        label: `${user.fullName} (${user.username})`,
        value: user.username,
      }));

      setOptions(options);
    })();
  }, []);

  useEffect(() => {
    if (!open) form.resetFields();
  }, [open]);

  return (
    <Modal title="Tạo phòng mới" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item label="Tên phòng" name="name">
          <Input placeholder="Input name" allowClear />
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <Input.TextArea placeholder="Input description" allowClear />
        </Form.Item>
        <Form.Item label="Các thành viên ban đầu" name="members">
          <Select
            mode="multiple"
            allowClear
            placeholder="Choses members"
            options={options}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
