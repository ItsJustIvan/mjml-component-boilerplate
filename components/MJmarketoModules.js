import { BodyComponent } from 'mjml-core'

/*
  Our component wraps outer table with mktoContainer
*/
export default class MarketoModule extends BodyComponent {

  static dependencies = {
    // Tell the validator which tags are allowed as our component's parent
    // Tell the validator which tags are allowed as our component's children
    'marketo-container': ['marketo-module'],
    'marketo-module': ['mj-section'],
  }

  // Tells the validator which attributes are allowed for mj-layout
  static allowedAttributes = {
    'id': 'string',
    'mktoName': 'string',
    'mktoActive': 'string',
    'mktoAddByDefault': 'string',
  }

  // What the name suggests. Fallback value for this.getAttribute('attribute-name').
  static defaultAttributes = {
    'id': 'renameModule',
    'mktoName': 'mktoName',
    'mktoActive': 'true',
    'mktoAddByDefault': 'true',
  }


  /*
    Render is the only required function in a component.
    It must return an html string.
  */
    render() {
      return `<tr ${this.htmlAttributes({ 
              'class': 'mktoModule',
              'id': this.getAttribute('id'),
              'mktoName': this.getAttribute('mktoName'),
              'mktoActive': this.getAttribute('mktoActive'),
              'mktoAddByDefault': this.getAttribute('mktoAddByDefault')
          })}>
              <td>
              ${this.renderChildren()}
              </td>
          </tr>`
  }
}
