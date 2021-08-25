import { shallowMount } from '@vue/test-utils'
import flushPromises from "flush-promises";
import Login from "@/components/Login";
jest.mock('axios', () => ({
    get: () => Promise.resolve({data: true})
}))
describe('Login.vue', () => {
    const wrapper = shallowMount(Login, {})
    it('submits when given values',  async () => {
        wrapper.find('button').trigger('click')
        await flushPromises()
        expect(wrapper.vm.$data.resData).toBe(true)
    })
})
