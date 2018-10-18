import {Action} from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';

export class EditText implements Action {

  type: string = EDIT_TEXT;

  constructor(public  payload: string) {
  }
}

export class UpVote implements Action {
  type: string = UPVOTE;
}

export class DownVote implements Action {
  type: string = DOWNVOTE;
}

export class Reset implements Action {
  type: string = RESET;
}

export type  Action = EditText | UpVote | DownVote | Reset;
