import { Form, FormInstance, Modal, Select, SelectProps } from "antd";
import { useEffect, useState } from "react";
import { GetAllUsers } from "../../apis/user.api";

export interface JoinRoomModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  form: FormInstance;
}

export const JoinRoomModal = ({
  open,
  onOk,
  onCancel,
  form,
}: JoinRoomModalProps) => {
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
    if (open !== true) {
      form.resetFields();
    }
  }, [open]);

  return (
    <Modal title="Thêm thành viên" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item label="Thành viên mới" name="members">
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
