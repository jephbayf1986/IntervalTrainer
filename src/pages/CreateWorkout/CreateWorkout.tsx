import React, { useState } from "react";

import AppContainerWithHeader from "../../components/AppContainer/AppContainerWithHeader";
import { FormContainer } from "../../components/FormElements/FormContainer/FormContainer";
import { InputBox } from "../../components/FormElements/InputBox/InputBox";
import { colors } from "../../theme/colors";

const CreateWorkout: React.FC = () => {

  const [workoutName, setWorkoutName] = useState<string>('');

  return (
    <AppContainerWithHeader backgroundColor={colors.darkBlue}>
      <FormContainer>
        <InputBox 
          label="Workout Name" 
          placeholderText="Enter Workout Name"
          value={workoutName}
          onValueChange={setWorkoutName} 
        />
      </FormContainer>
    </AppContainerWithHeader>
  );
};

export default CreateWorkout;
