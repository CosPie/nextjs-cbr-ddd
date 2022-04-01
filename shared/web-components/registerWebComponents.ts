import { createComponent } from '@lit-labs/react';
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import React from 'react';

export function registerWebComponents(
  tagName: string,
  element: typeof LitElement,
  exportProps: Record<string, string>,
) {
  if (!customElements.get(tagName)) {
    customElement(tagName)(element);
  }
  return createComponent(React, tagName, element, exportProps);
}
