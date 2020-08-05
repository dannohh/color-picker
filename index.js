import { Picker, InputColor, OutputColor, Slider, Switch } from './components'

import convert from 'color-convert'

function render () {
  document.querySelector('#root').innerHTML = `
  ${Picker()}
  ${Switch()}
  ${Slider()}
  ${InputColor()}
  ${OutputColor()}
`

  const HTMLRoot = document.querySelector(':root')
  const labels = document.querySelectorAll('.switchContainer label')
  const colorSlideValue = document.querySelector('#colorSlideLabel span')

  document.querySelector('#color').addEventListener(
    // 'input' is like a 'value change' event (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
    'input',
    function () {
      // element.style.setProperty("--my-var", jsVar + 4) (https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#Values_in_JavaScript);
      HTMLRoot.style.setProperty('--input-color', this.value)
      HTMLRoot.style.setProperty('--output-color', this.value)
    }
  )

  document.querySelector('#switch').addEventListener('change', function () {
    labels.forEach((label) => {
      // ⚠️ DO NOT include the '.' when using 'classList'!
      label.classList.toggle('isActive')
    })
  })

  document.querySelector('#colorSlider').addEventListener('input', function () {
    colorSlideValue.textContent = this.value
  })
}

render()
