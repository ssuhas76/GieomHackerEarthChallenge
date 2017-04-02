import {Component, OnInit} from '@angular/core'
import {IProject} from './project'
import {ProjectService} from './kickstarter.service'

@Component({
    selector : 'kickstarter-projects',
    templateUrl : './kickstarter-list.component.html',
})
export class KickStarterListComponent implements OnInit{
    projectFilter :string;
    projects : IProject[];
    errorMessage: string;
    constructor (private _projectService: ProjectService){

    }

    ngOnInit(): void{
        this._projectService.getProjects()
        .subscribe(
            projects => this.projects = projects,
            error => this.errorMessage = <any>error);
    }
}