import { observable } from 'mobx';

class User {
    @observable user = {
        name: 'Chase Hardin'
    }
}

export default new User();