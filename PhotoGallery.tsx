// PhotoGallery.tsx
import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import 'antd/dist/antd.css';

interface PhotoGalleryProps {
  photos: string[]; // Array of photo URLs
  itemsPerPage: number;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPhotos = photos.slice(startIndex, endIndex);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {currentPhotos.map((photo, index) => (
          <Card key={index} style={{ width: '20%', margin: '16px' }}>
            <img
              alt={`Photo ${index + 1}`}
              src={photo}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
          </Card>
        ))}
      </div>
      <Pagination
        current={currentPage}
        total={photos.length}
        pageSize={itemsPerPage}
        showSizeChanger={false}
        onChange={onPageChange}
        style={{ marginTop: '16px', textAlign: 'center' }}
      />
    </div>
  );
};

export default PhotoGallery;
