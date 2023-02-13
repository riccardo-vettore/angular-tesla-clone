import {Component} from '@angular/core';
import {teslaSections} from './const/tesla-sections';
import {TeslaHomeSection} from './model/tesla-home-section';

@Component({
    selector: 'app-home',
    template: `
        <tesla-home-section *ngFor="let section of sections"
                            [modelName]="section.title"
                            [showSubTitle]="section.showSubTitle"
                            [subTitle]="section.subTitle"
                            [subTitleHRef]="section.subTitleHRef"
                            [disclaimer]="section.disclaimer"
                            [showDownArrow]="section.showDownArrow"
                            [backgroundImgUrl]="section.backgroundImgUrl"
                            (down-arrow-click)="downArrowClick()"
        >
            <tesla-button *ngFor="let button of section.buttons"
                          [variant]="button.variant"
                          (click)="navigate(button.path)"
            >
                {{button.label}}
            </tesla-button>
        </tesla-home-section>
    `,
    styles: []
})
export class HomeComponent {
    sections: TeslaHomeSection[] = teslaSections;

    constructor() {
    }

    downArrowClick(): void {
        let pageHeight = window.innerHeight
        window.scrollBy({top: pageHeight, left: 0, behavior: 'smooth'})
    }

    navigate(path: string): void {
        window.location.href = path;
    }
}
