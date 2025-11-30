# Rakonto
## a lightweight alternative to react-storybook built on esbuild and ts.

### Usage

1. Install as a dependency:
```bash
npm install rakonto
```

2. Create a `.storyboardrc.js` file in your project root (this file must be at the root of your project):
```javascript
export default {
    stories: [
        'src/stories/Button.stories.jsx',
        'src/stories/Header.stories.jsx',
        // Add your story files here
    ]
};
```

3. Create story files that use the Story function:
```typescript
import Story from 'rakonto/story.tsx';
import React from 'react';
import { Button } from './Button';

export default function ButtonStory() {
    return Story(
        <Button primary size="large">
            Click me
        </Button>
    );
}
```

3. The `public` directory and HTML files will be created automatically when you run the rakonto command.

4. Add scripts to your package.json:
```json
{
  "scripts": {
    "storybook": "rakonto --dev",
    "build-storybook": "rakonto"
  }
}
```

5. Run the storybook:
```bash
npm run storybook
```

This will start the development server at http://localhost:8000
