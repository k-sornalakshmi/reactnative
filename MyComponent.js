import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CopilotStep, CopilotProvider, useCopilot, walkthroughable } from 'react-native-copilot';

const MyComponent = ({ start }) => {
    const [step1Visible, setStep1Visible] = useState(false);
    const [step2Visible, setStep2Visible] = useState(false);
    const { copilotEvents } = useCopilot();

    useEffect(() => {
        const listener = () => {
            // Copilot tutorial finished!
        };

        copilotEvents.on("stop", listener);

        return () => {
            copilotEvents.off("stop", listener)
        };
    }, []);
    const handleTourComplete = () => {

        console.log('Tour completed!');
        // Perform any actions you need upon tour completion
    };
    const CopilotText = walkthroughable(Text);
    return (
        <View style={styles.container}>
            <CopilotStep text="This is the first step" order={1} name="step1" active={step1Visible}>
                <CopilotText>This is the first step of the tour.</CopilotText>
            </CopilotStep>
            <CopilotStep text="This is the second step" order={2} name="step2" active={step2Visible}>
                <CopilotText>This is the second step of the tour.</CopilotText>
            </CopilotStep>
            {/* Add more CopilotStep components for additional steps */}
            <TouchableOpacity onPress={handleTourComplete}>
                <Text>Start Tour</Text>
            </TouchableOpacity>
        </View>
    );
};

const Copilot = () => {
    return (
        <CopilotProvider overlay='svg' tooltipStyle={styles.style} arrowColor="#9FA8DA" backdropColor="rgba(50, 50, 100, 0.9)">
            <MyComponent />
        </CopilotProvider>
    );
};

export default Copilot;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style: {
        backgroundColor: "#9FA8DA",
        borderRadius: 10,
        paddingTop: 5,
    }
});
