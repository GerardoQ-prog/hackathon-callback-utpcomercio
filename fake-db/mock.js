import MockAdapter from 'axios-mock-adapter'
import axios from "../plugins/axios"
const Mock = new MockAdapter(axios);
export default Mock;