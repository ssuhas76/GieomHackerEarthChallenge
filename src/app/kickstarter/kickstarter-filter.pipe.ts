import {Pipe, PipeTransform} from '@angular/core'

import {IProject} from './project';

@Pipe({
    name: 'searchFilter'
})
export class KickStarterFilterPipe implements PipeTransform{
    transform(value: IProject[], filterBy:string): IProject[]{
        filterBy = filterBy?filterBy.toLocaleLowerCase():null;
        return filterBy? value.filter((project : IProject) =>
            project.title.toLocaleLowerCase().indexOf(filterBy)!==-1) : value;
    }
}
