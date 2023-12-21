// CardComponent.tsx
import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

interface CardComponentProps {
  title: string;
  imageSrc: string;
  footer: React.ReactNode;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, imageSrc, footer }) => {
  return (
    <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>{title}</h2>
      </div>
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img alt={title} src={imageSrc} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div style={{ textAlign: 'center' }}>{footer}</div>
    </Card>
  );
};

export default CardComponent;



// YourParentComponent.tsx
import React from 'react';
import CardComponent from './CardComponent';

const YourParentComponent: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CardComponent
        title="Card Title"
        imageSrc="https://placekitten.com/300/200" // Replace with your actual image URL
        footer={<p>This is the footer content</p>}
      />
    </div>
  );
};

export default YourParentComponent;
