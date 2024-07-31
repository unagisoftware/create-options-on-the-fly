import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select"
import { post } from '@rails/request.js'

export default class extends Controller {
  connect() {
    new TomSelect(
      this.element, {
        create: (input, callback) => {
          const params = new URLSearchParams({ name: input });

          post(`/genres?${params}`, { responseKind: 'turbo-stream' })
        },
      }
    )
  }

  itemTargetConnected(element) {
    const value = element.value
    const text = element.text

    this.element.tomselect.addOption({value: value, text: text})
    this.element.tomselect.addItem(value)
  }
}
