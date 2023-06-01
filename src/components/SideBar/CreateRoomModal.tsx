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

  return (
    <Modal title="Tạo phòng" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item label="Tên phòng" name="name">
          <Input placeholder="Nhập tên phòng" allowClear />
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <Input.TextArea placeholder="Nhập mô tả" allowClear />
        </Form.Item>
        <Form.Item label="Thành viên nhóm" name="members">
          <Select
            mode="multiple"
            allowClear
            placeholder="Chọn thành viên"
            options={options}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
