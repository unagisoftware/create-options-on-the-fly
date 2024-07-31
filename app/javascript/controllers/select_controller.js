import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select"
import { post } from '@rails/request.js'

export default class extends Controller {
  static targets = ['item']

  connect() {
    new TomSelect(
      this.element, {
        create: (input, callback) => {
          if(prompt('New genre', input)) {
            post(`/genres?name=${input}`, { responseKind: 'turbo-stream' })
          } else {
            callback(false)
          }
        },
      }
    )
  }

  itemTargetConnected(element) {
    this.element.tomselect.sync()
    this.element.tomselect.setValue(element.value)
  }
}
