import { configure } from '@storybook/react';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

function loadStories() {
  require('./stories/app.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS
  }
});