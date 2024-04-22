import {
  CopilotProvider,
  CopilotStep,
  walkthroughable,
} from "react-native-copilot";
import { Text, View } from "react-native";
const CopilotText = walkthroughable(Text);

export default function HomeScreen() {
  return (
    <View>
      <CopilotStep text="This is a hello world example!" order={1} name="hello">
        <CopilotText>Hello world!</CopilotText>
      </CopilotStep>
    </View>
  );
};