import React from "react";

import AppContainer from "../../components/AppContainer/AppContainer";
import Seperator from "../../components/LayoutElements/Seperator/Seperator";
import colors from "../../theme/colors";
import { Dashboard } from "./components/Dashboard/Dashboard";
import WorkoutList from "./components/WorkoutList/WorkoutList";
import { StyledOverviewContainer } from "./styles/overview-container.styled";

const Overview: React.FC = () => {
  return (
    <AppContainer backgroundColor={colors.darkBlue}>
      <StyledOverviewContainer>
        <Dashboard />
        <Seperator />
        <WorkoutList />
      </StyledOverviewContainer>
    </AppContainer>
  );
};

export default Overview;
