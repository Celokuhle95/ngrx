import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Post} from './models/post.module';
import * as PostActions from './actions/post.action';

interface SimpleAppSate {
  message: string;
}

interface PostAppSate {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message$: Observable<string>; // NB
  message: string;

  post$: Observable<Post>;
  text: string;

  constructor(private  simpleStore: Store<SimpleAppSate>, private postStore: Store<PostAppSate>) { // NB
    this.message$ = simpleStore.select('simple');
    this.message$.subscribe((message) => {
      this.message = message;
    });

    this.post$ = postStore.select('post');
  }

  // for simple logic
  showEnglishMessage() {
    this.simpleStore.dispatch({type: 'ENGLISH'});
  }

  showZuluMessage() {
    this.simpleStore.dispatch({type: 'ISIZULU'});
  }

  // for post logic
  editText() {
    this.postStore.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.postStore.dispatch(new PostActions.Reset());
  }

  upvotePost() {
    this.postStore.dispatch(new PostActions.UpVote());
  }

  downPost() {
    this.postStore.dispatch(new PostActions.DownVote());
  }
}
