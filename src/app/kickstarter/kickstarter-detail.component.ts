import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Subscription} from 'rxjs/Subscription';

import {IProject} from './project';
import {ProjectService} from './kickstarter.service';

@Component({
    templateUrl : './kickstarter-detail.component.html',
})
export class KickStarterDetailComponent implements OnInit{

    project : IProject;

    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _projectService: ProjectService) {
    }

    ngOnInit(): void {
                let id = +this._route.snapshot.params['id'];
                this.getProject(id);
    }

   
    getProject(id: number) {
        this._projectService.getProject(id).subscribe(
            project => this.project = project,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/projects']);
    }
}