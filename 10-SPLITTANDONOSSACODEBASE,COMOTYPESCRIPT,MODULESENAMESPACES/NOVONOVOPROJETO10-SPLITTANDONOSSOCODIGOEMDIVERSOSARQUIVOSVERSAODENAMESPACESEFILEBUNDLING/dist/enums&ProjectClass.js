"use strict";
var App;
(function (App) {
    let ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
        ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
    })(ProjectStatus = App.ProjectStatus || (App.ProjectStatus = {}));
    class Project {
        constructor(id, title, description, people, projectStatus) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.people = people;
            this.projectStatus = projectStatus;
        }
    }
    App.Project = Project;
})(App || (App = {}));
//# sourceMappingURL=enums&ProjectClass.js.map