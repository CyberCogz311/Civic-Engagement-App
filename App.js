
---

### 2. **app/App.js**

This is the main entry point for the React Native app.

**File Content:**
```javascript
import React from 'react';
import { View, Text } from 'react-native';
import ActivityTracker from './components/ActivityTracker';

export default function App() {
  return (
    <View>
      <Text>Civic Engagement App</Text>
      <ActivityTracker />
    </View>
  );
}
