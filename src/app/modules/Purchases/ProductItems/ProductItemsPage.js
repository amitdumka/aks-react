import React, { Component } from 'react'
import ComponentPage from '../../../componets/Modules/ComponentPage'

import * as Settings from './Settings'
import {FormsElements} from './FormSettings';
export default class ProductItemsPage extends Component {
  render() {
    return (
      <>
        <ComponentPage Settings={Settings} InputFormElement={FormsElements} />
      </>
    )
  }
}
