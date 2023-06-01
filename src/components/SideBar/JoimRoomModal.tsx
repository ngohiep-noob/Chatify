import { Form, FormInstance, Input, Modal, Select, SelectProps } from "antd";
import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { GetAllUsers } from "../../apis/user.api";

export interface JoinRoomMadalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  form: FormInstance;
}

export const JoinRoomMadall = ({
  open,
  onOk,
  onCancel,
  form,
}: JoinRoomMadalProps) => {
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
    <Modal title="Add members" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item label="Members" name="members">
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
