import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IProject} from './project';

@Injectable()
export class ProjectService{

    private _productUrl = 'http://starlord.hackerearth.com/kickstarter';

    constructor(private _http:Http){

    }
    getProjects(): Observable<IProject[]>{
        return this._http.get(this._productUrl)
        .map((response: Response) => <IProject[]> response.json())
        .catch(this.handleError); 
    }

    getProject(id: number): Observable<IProject> {
        return this.getProjects()
            .map((projects: IProject[]) => projects.find(p => p["s.no"] === id));
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'API error');
    }
}