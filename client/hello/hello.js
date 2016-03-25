import hello from './hello.html';
import styles from './hello.m.css';
import message from './message.html';

hello.helpers({
  message,
});

hello.viewmodel({
  styles,
  counter: 0,
  incrementCounter() {
    this.counter(this.counter() + 1);
  }
});