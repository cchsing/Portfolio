class project {
    constructor(
        id,
        name,
        startdate,
        enddate,
        description,
        creators = []
    ) {
        this.id = id;
        this.name = name;
        this.startdate = startdate;
        this.enddate = enddate;
        this.description = description;
        this.creators = creators;
    }
    newDescription(newDscrptn) {
        this.description = newDscrptn;
    }
    completion(state) {
        if(state) {
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth();
            let yyyy = today.getFullYear();
            
            today = dd + "/" + mm + "/" + yyyy;
            this.enddate = today;
            console.log("Project Completed ! ", this.enddate);
        } else {
            this.enddate = "Ongoing";
            console.log("Project Ongoing...");
        }
    }
}
export default project;