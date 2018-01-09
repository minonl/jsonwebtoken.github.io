import { tokenEditor } from './instances.js';
import { 
  algorithmSelect, 
  publicKeyTextArea,
  editorElement,
  decodedElement
} from '../dom-elements.js';

export function getTrimmedValue(instance) {
  const value = instance.getValue();
  if (!value) {
    return '';
  }

  return value.replace(/\s/g, '');
}

export function copyTokenLink() {
  const algorithm = algorithmSelect.querySelector(':selected').value;

  let url = 'https://jwt.io/#debugger-io?'
    + `token=${encodeURIComponent(getTrimmedValue(tokenEditor))}`;
  if (algorithm.indexOf('HS') === -1) {
    url += `&publicKey=${encodeURIComponent(publicKeyTextArea.value)}`;
  }

  copyTextToClipboard(url);
}

export function fixEditorHeight() {
  if(window.matchMedia('(min-width: 768px)').matches) {
    editorElement.style.height = `${decodedElement.offsetHeight}px`;
  }
}

export function stringify(object) {
  return JSON.stringify(object, 2);
}