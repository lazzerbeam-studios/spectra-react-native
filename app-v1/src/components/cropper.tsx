import React, { useState, useRef } from 'react';
import { ReactCrop, Crop, PixelCrop } from 'react-image-crop';
import { View, Modal, TouchableOpacity, StyleSheet } from 'react-native';

import { Text } from '~/src/components/ui/text';

import 'react-image-crop/dist/ReactCrop.css';

interface CropperProps {
  uri: string;
  visible: boolean;
  onComplete: (uri: string) => void;
  onCancel: () => void;
};

async function CroppedImageGet(
  image: HTMLImageElement,
  crop: PixelCrop,
): Promise<string> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('No 2d context');
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  canvas.width = crop.width;
  canvas.height = crop.height;

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height,
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Canvas is empty'));
        return;
      }
      const url = URL.createObjectURL(blob);
      resolve(url);
    }, 'image/jpeg');
  });
};

export const Cropper = ({ uri, visible, onComplete, onCancel }: CropperProps) => {
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });
  const [cropCompleted, setCropCompleted] = useState<PixelCrop>();
  const imageRef = useRef<HTMLImageElement>(null);

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    const size = Math.min(width, height) * 0.8;
    const x = (width - size) / 2;
    const y = (height - size) / 2;
    const crop: Crop = {
      unit: 'px',
      x: x,
      y: y,
      width: size,
      height: size,
    };
    setCrop(crop);
  };

  const imageSave = async () => {
    if (cropCompleted && imageRef.current) {
      try {
        const croppedImageUrl = await CroppedImageGet(imageRef.current, cropCompleted);
        onComplete(croppedImageUrl);
      } catch (errors) {
        console.error('Error cropping image:', errors);
      }
    }
  };

  if (!visible) return null;

  return (
    <Modal visible={visible} transparent animationType='fade'>
      <View style={styles.container}>

        <View style={styles.cropContainer}>
          <ReactCrop
            aspect={1}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCropCompleted(c)}
            circularCrop
          >
            <img
              src={uri}
              ref={imageRef}
              onLoad={onImageLoad}
              style={{ maxHeight: '70vh', maxWidth: '100%' }}
              alt='Crop Preview'
            />
          </ReactCrop>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
            <Text className='text-lg font-semibold text-white'>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={imageSave} style={styles.saveButton}>
            <Text className='text-lg font-semibold text-white'>
              Save
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
  },
  cropContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    gap: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#6b7280',
  },
  saveButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#3b82f6',
  },
});
