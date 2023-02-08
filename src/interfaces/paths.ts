import { Component } from "../components/component"

export type pageMarkup = () => Component

export interface paths {
  [key: string]: pageMarkup
}

