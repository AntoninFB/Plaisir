class CompoTaskList {/**
    * @class
    * @summary Constructeur de la fonction
    * @param {*} param - Objet de paramétrage
    */
    constructor(param) {
        this.param = param;
    }
    /**
     * 
     * @summary retourne TaskList avec le bon paramètre
     * 
     */
    getTaskList() {
        return this.param.taskList;
    }

    /**
     * 
     * @summary retourne l'élément
     * 
     */
    getElement() {
        return this.param.element;
    }

    render() {
        let children = [];
        if (this.param.taskList) {
            console.log(this.param.taskList);
            for (let i = 0; i < this.param.taskList.getTasks().length; i++) {
                let item = document.createElement('div');
                this.param.element.appendChild(item);
                new CompoTask({
                    task: this.param.taskList.getTasks()[i],
                    element: item}).render();
            }
        }
    }
}