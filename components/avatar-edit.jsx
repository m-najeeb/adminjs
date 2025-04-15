import React from 'react';
import { Label, Box, DropZone } from '@adminjs/design-system';

const AvatarEdit = (props) => {
  const { property, onChange, record } = props;
  const currentValue = record.params[property.name];

  const handleUpload = (files) => {
    if (files && files.length > 0) {
      onChange(property.name, files[0]);
    }
  };

  return (
    <Box marginBottom="xl">
      <Label>{property.label || 'Avatar'}</Label>
      
      {currentValue && (
        <Box marginBottom="default">
          <img
            src={currentValue}
            alt="Avatar preview"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '10px',
            }}
          />
        </Box>
      )}
      
      <DropZone
        onChange={handleUpload}
        multiple={false}
        validate={{
          mimeTypes: ['image/png', 'image/jpeg', 'image/gif'],
          maxSize: 1048576, // 1MB
        }}
      />
      
      <Box marginTop="sm">
        <small>Upload JPG, PNG, or GIF, max 1MB</small>
      </Box>
    </Box>
  );
};

export default AvatarEdit;