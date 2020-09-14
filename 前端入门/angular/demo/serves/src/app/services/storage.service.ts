import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key, value) {

    localStorage.setItem(key, JSON.stringify(value));
    //                   ||       ||
    //                   ||       ||        
    //                   ||       ||             
    //                存储的名称 存储的内容
  }

  getItem(key) {
    return JSON.parse(localStorage.getItem(key));

  }

  removeItem(key) {
    localStorage.removeItem(key);
  }
}
