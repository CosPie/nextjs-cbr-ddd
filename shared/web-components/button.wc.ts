import { LitElement, html, css } from 'lit';
import { lazy } from 'react';
import { registerWebComponents } from './registerWebComponents';
import { MyButtonElementName } from './webComponentAssignedName';
// @refresh reset
class MyButtonElement extends LitElement {
  static styles = css`
    .circle {
      position: relative;
      background: steelblue;
      --box-size: 25vw;
      height: var(--box-size);
      width: var(--box-size);
      border-radius: 50%;
    }
    .button {
      color: blue;
    }
  `;

  render() {
    return html` <button class="button"><slot></slot></button> `;
  }
}

export default registerWebComponents(MyButtonElementName, MyButtonElement, {
  onClick: 'click',
  test: 'test',
});
