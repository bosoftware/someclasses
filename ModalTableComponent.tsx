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





// ModalComponent.tsx
import React, { useState } from 'react';
import { Modal, Row, Col, Pagination } from 'antd';
import PhotoGallery from './PhotoGallery'; // Assuming you've implemented the PhotoGallery component from the previous example
import 'antd/dist/antd.css';

interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
  photos: string[]; // Array of photo URLs
}

const ModalComponent: React.FC<ModalComponentProps> = ({ visible, onClose, photos }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Modal
      visible={visible}
      title="Photo Gallery Modal"
      onCancel={onClose}
      footer={null}
      width="80%"
    >
      <Row gutter={[16, 16]}>
        <Col span={4} style={{ borderRight: '1px solid #ccc', paddingRight: '16px' }}>
          {/* Left Part (15% of the width) */}
          {/* You can add content to the left part if needed */}
          <div>Left Part</div>
        </Col>
        <Col span={20}>
          {/* Right Part (85% of the width) */}
          <PhotoGallery photos={photos} currentPage={currentPage} itemsPerPage={10} />
          <Pagination
            current={currentPage}
            total={photos.length}
            pageSize={10}
            showSizeChanger={false}
            onChange={onPageChange}
            style={{ marginTop: '16px', textAlign: 'center' }}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalComponent;


// YourParentComponent.tsx
import React, { useState } from 'react';
import ModalComponent from './ModalComponent';

const YourParentComponent: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Replace with your actual photo URLs
  const samplePhotos = [
    'https://example.com/photo1.jpg',
    'https://example.com/photo2.jpg',
    // Add more photo URLs as needed
  ];

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <ModalComponent visible={modalVisible} onClose={handleCloseModal} photos={samplePhotos} />
    </div>
  );
};

export default YourParentComponent;

