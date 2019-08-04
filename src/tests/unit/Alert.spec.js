import { mount } from '@vue/test-utils'
import Alert from '../../components/Alert.vue'

describe('Alert', () => {
  test('default content should be invisible', () => {
    const wrapper = mount(Alert, {})
    expect(wrapper).not.toBeNull()

    const alertTextClasses = wrapper.find('div').classes()
    expect(alertTextClasses).toContain('alert-success')
    expect(alertTextClasses).toContain('not-visible')
  })

  test('correct content and styling when enabling successful alert', () => {
    // Mount component
    const wrapper = mount(Alert, {})
    expect(wrapper).not.toBeNull()

    // Update props to show alert
    wrapper.setProps({
      isActive: true
    })

    // Check that the correct message is showing
    const alertTextDiv = wrapper.find('div')
    expect(alertTextDiv.text()).toEqual(expect.stringContaining('successful'))

    // Check that the correct styling is applied
    const alertTextClasses = alertTextDiv.classes()
    expect(alertTextClasses).toContain('alert-success')
    expect(alertTextClasses).not.toContain('not-visible')
  })

  test('correct content and styling when enabling error alert', () => {
    // Mount component
    const wrapper = mount(Alert, {
      propsData: {
        alertType: 'error'
      }
    })
    expect(wrapper).not.toBeNull()

    // Update props to show alert
    wrapper.setProps({
      isActive: true,
      alertType: 'error'
    })

    // Check that the correct message is showing
    const alertTextDiv = wrapper.find('div')
    expect(alertTextDiv.text()).toEqual(expect.stringContaining('error'))

    // Check that the correct styling is applied
    const alertTextClasses = alertTextDiv.classes()
    expect(alertTextClasses).toContain('alert-danger')
    expect(alertTextClasses).not.toContain('not-visible')
  })

  test('correct styling when disabling alert', () => {
    // Mount component
    const wrapper = mount(Alert, {
      propsData: {
        isActive: true
      }
    })
    expect(wrapper).not.toBeNull()

    // Update props to hide alert
    wrapper.setProps({
      isActive: false
    })

    // Check that the correct styling is applied
    const alertTextClasses = wrapper.find('div').classes()
    expect(alertTextClasses).toContain('disappear')
    expect(alertTextClasses).not.toContain('not-visible')
  })
})
