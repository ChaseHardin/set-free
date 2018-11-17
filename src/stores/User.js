import { observable } from 'mobx';
 
class User {
    @observable user = {
        name: 'Chase Hardin'
        email: '',
        password: ''
    }
}

export default new User();