import { shallowMount } from '@vue/test-utils'
import Alert from '../../components/Alert.vue'

describe('Alert', () => {
  test('default content should be invisible', () => {
    const wrapper = shallowMount(Alert, {})
    expect(wrapper.exists()).toBe(true)

    const alertTextClasses = wrapper.find('div').classes()
    expect(alertTextClasses).toContain('alert-success')
    expect(alertTextClasses).toContain('not-visible')
  })

  test('correct content and styling when enabling successful alert', () => {
    // Mount component
    const wrapper = shallowMount(Alert, {})
    expect(wrapper.exists()).toBe(true)

    // Update props to show alert
    wrapper.setProps({
      isActive: true
    })

    // Check that the correct message is showing
    wrapper.vm.$nextTick(() => {
      const alertTextDiv = wrapper.find('div')
      expect(alertTextDiv.text()).toEqual(expect.stringContaining('successful'))

      // Check that the correct styling is applied
      const alertTextClasses = alertTextDiv.classes()
      expect(alertTextClasses).toContain('alert-success')
      expect(alertTextClasses).not.toContain('not-visible')
    })
  })

  test('correct content and styling when enabling error alert', () => {
    // Mount component
    const wrapper = shallowMount(Alert, {
      propsData: {
        alertType: 'error'
      }
    })
    expect(wrapper.exists()).toBe(true)

    // Update props to show alert
    wrapper.setProps({
      isActive: true,
      alertType: 'error'
    })

    wrapper.vm.$nextTick(() => {
      // Check that the correct message is showing
      const alertTextDiv = wrapper.find('div')
      expect(alertTextDiv.text()).toEqual(expect.stringContaining('error'))

      // Check that the correct styling is applied
      const alertTextClasses = alertTextDiv.classes()
      expect(alertTextClasses).toContain('alert-danger')
      expect(alertTextClasses).not.toContain('not-visible')
    })
  })

  test('correct styling when disabling alert', () => {
    // Mount component
    const wrapper = shallowMount(Alert, {
      propsData: {
        isActive: true
      }
    })
    expect(wrapper.exists()).toBe(true)

    // Update props to hide alert
    wrapper.setProps({
      isActive: false
    })

    wrapper.vm.$nextTick(() => {
      // Check that the correct styling is applied
      const alertTextClasses = wrapper.find('div').classes()
      expect(alertTextClasses).toContain('disappear')
      expect(alertTextClasses).not.toContain('not-visible')
    })
  })
})
