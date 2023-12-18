// ModalTableComponent.tsx
import React, { useState } from 'react';
import { Modal, Table, Button } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface ModalTableComponentProps {
  visible: boolean;
  onClose: () => void;
  data: any[]; // Replace 'any[]' with your actual data type
}

const ModalTableComponent: React.FC<ModalTableComponentProps> = ({ visible, onClose, data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns: ColumnsType<any> = [
    // Replace 'any' with your actual data type
    // Define your table columns here
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    // Add more columns as needed
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => {
      setSelectedRowKeys(keys);
    },
  };

  return (
    <Modal
      visible={visible}
      title="Table in Modal"
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="ok" type="primary" onClick={onClose}>
          OK
        </Button>,
      ]}
    >
      <Table
        dataSource={data}
        columns={columns}
        rowSelection={rowSelection}
        rowKey={(record) => record.key} // Replace 'key' with the actual unique key property in your data
      />
    </Modal>
  );
};

export default ModalTableComponent;








import React, { useState } from 'react';
import ModalTableComponent from './ModalTableComponent';

const YourParentComponent: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const mockData = [
    { key: '1', name: 'John Doe', age: 25 },
    { key: '2', name: 'Jane Doe', age: 30 },
    // Add more data as needed
  ];

  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <ModalTableComponent visible={modalVisible} onClose={handleCloseModal} data={mockData} />
    </div>
  );
};

export default YourParentComponent;
