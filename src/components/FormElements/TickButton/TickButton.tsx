import React from 'react';
import { View } from 'react-native';

export type ITickButtonProps = {
  disabled?: boolean;
  onClick: () => void;
}

const TickButton: React.FC<ITickButtonProps> = ({ 
    disabled = false, 
    onClick 
}) => {
  return (
    <View>
    </View>
  );
}

export default TickButton;