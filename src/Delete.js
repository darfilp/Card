import { makeAutoObservable } from "mobx";

class Delete {
    value = '';
    constructor() {
        makeAutoObservable(this)
    }

    deleteInput() {
        this.value = '';
    }

    setInput(e) {
        this.value = e.target.value;
    }
}

export default new Delete()