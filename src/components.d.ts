/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  TodoItem,
} from './components/models/todoItem';
import {
  TodoFinishedChangeEvent,
} from './components/models/todo-finished-change.event';

export namespace Components {
  interface MyApp {}
  interface MyHeader {}
  interface UiTodoInput {}
  interface UiTodoTable {
    'todos': TodoItem[];
  }
}

declare global {


  interface HTMLMyAppElement extends Components.MyApp, HTMLStencilElement {}
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };

  interface HTMLMyHeaderElement extends Components.MyHeader, HTMLStencilElement {}
  var HTMLMyHeaderElement: {
    prototype: HTMLMyHeaderElement;
    new (): HTMLMyHeaderElement;
  };

  interface HTMLUiTodoInputElement extends Components.UiTodoInput, HTMLStencilElement {}
  var HTMLUiTodoInputElement: {
    prototype: HTMLUiTodoInputElement;
    new (): HTMLUiTodoInputElement;
  };

  interface HTMLUiTodoTableElement extends Components.UiTodoTable, HTMLStencilElement {}
  var HTMLUiTodoTableElement: {
    prototype: HTMLUiTodoTableElement;
    new (): HTMLUiTodoTableElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
    'my-header': HTMLMyHeaderElement;
    'ui-todo-input': HTMLUiTodoInputElement;
    'ui-todo-table': HTMLUiTodoTableElement;
  }
}

declare namespace LocalJSX {
  interface MyApp extends JSXBase.HTMLAttributes<HTMLMyAppElement> {}
  interface MyHeader extends JSXBase.HTMLAttributes<HTMLMyHeaderElement> {}
  interface UiTodoInput extends JSXBase.HTMLAttributes<HTMLUiTodoInputElement> {
    'onNewTodoTitle'?: (event: CustomEvent<string>) => void;
  }
  interface UiTodoTable extends JSXBase.HTMLAttributes<HTMLUiTodoTableElement> {
    'onDeleteTodoItem'?: (event: CustomEvent<number>) => void;
    'onTodoFinishedChange'?: (event: CustomEvent<TodoFinishedChangeEvent>) => void;
    'todos'?: TodoItem[];
  }

  interface IntrinsicElements {
    'my-app': MyApp;
    'my-header': MyHeader;
    'ui-todo-input': UiTodoInput;
    'ui-todo-table': UiTodoTable;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


