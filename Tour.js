import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CopilotStep } from 'react-native-copilot';

class Tour extends Component {
  handleStartTour = () => {
    const { start } = this.props;
    if (start) {
      start(); // Start the tour
    }
  };

  render() {
    return (
      <View>
        <CopilotStep text="Step 1">
          <Text>This is step 1.</Text>
        </CopilotStep>
        {/* Additional steps can be added here */}
        <TouchableOpacity onPress={this.handleStartTour}>
          <Text>Start Tour</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withCopilot(Tour);
