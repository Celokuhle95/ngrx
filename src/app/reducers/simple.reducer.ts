import {Action} from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World ', action: Action): string {
  console.log(action.type, state);

  switch (action.type) {
    case 'ENGLISH':
      state = 'GREETINGS IN ENGLISH';
      return state;
    case 'ISIZULU':
      state = 'SIYAKUBINGELELA NGESIZULU';
      return state;
    default:
      return state;
  }
}
