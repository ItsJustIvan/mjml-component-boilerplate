import { BodyComponent } from 'mjml-core'

/*
  Our component wraps outer table with mktoContainer
*/
export default class MarketoContainer extends BodyComponent {
  /* 
    Tell the parser that our component won't contain other mjml tags.
    This means any html tag inside its content will be left as it is.
    Without this, it would be parsed as mjml content.
    Examples of endingTags are mj-text, mj-button, mj-raw, etc.
  */
  static endingTag = false
  
  static dependencies = {
    // Tell the validator which tags are allowed as our component's parent
    // Tell the validator which tags are allowed as our component's children
    'marketo-container': ['marketo-module'],
    'mj-body': ['marketo-container'],


  }

  // Tells the validator which attributes are allowed for mj-layout
  static allowedAttributes = {
    'id': 'string',
  }

  // What the name suggests. Fallback value for this.getAttribute('attribute-name').
  static defaultAttributes = {
    'id': 'outerTable',
  }


  /*
    Render is the only required function in a component.
    It must return an html string.
  */
    render() {
      return `<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                  <tbody ${this.htmlAttributes({ 
                      'id': this.getAttribute('id'), 
                      'class': 'mktoContainer'
                  })}>
                  ${this.renderChildren()}
                  </tbody>
              </table>`
  }
}
