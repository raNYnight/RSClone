import { Component } from '../components/component';

export type PageMarkup = () => Component;

export interface Paths {
  [key: string]: PageMarkup;
}
