import { Modal, Typography } from "antd";
import { User } from "../../types/User";

export interface MemberListModalProps {
  open: boolean;
  onClose?: () => void;
  members: User[];
  ownerId?: string;
}

export const MemberListModal = ({
  open,
  members,
  onClose,
  ownerId,
}: MemberListModalProps) => {
  const isOwner = (id: string | undefined) => {
    if (!id || !ownerId) return false;
    return ownerId === id;
  };

  return (
    <Modal
      open={open}
      title={"Danh sách thành viên trong phòng"}
      style={{
        maxHeight: "50vh",
        overflow: "auto",
      }}
      onCancel={onClose}
      footer={null}
    >
      {members.map((member, index) => (
        <div key={index}>
          <Typography.Text>
            {index + 1}. {member.fullName}
            <b>({member.username})</b> -- {" "}
          </Typography.Text>
          <Typography.Text>
            {member.email} {isOwner(member.id) && "(Chủ phòng)"}
          </Typography.Text>
          <br />
        </div>
      ))}
    </Modal>
  );
};
