
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import Hello from '../demo/Index';


let container: Element;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});

it('renders with or without a name', () => {
  act(() => {
    render(<Hello disclaimer="Jenny" />, container);
  });
  expect(container.textContent).toBe('Jenny');
});


