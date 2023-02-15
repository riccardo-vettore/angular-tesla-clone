import {Component} from '@angular/core';
import {teslaSections} from './const/tesla-sections';
import {navbarCenterItems} from './const/navbar-center-items';
import {navbarRightItems} from './const/navbar-right-items';
import {TeslaHomeSection} from './model/tesla-home-section';
import {TeslaNavbarItem} from './model/tesla-navbar-item';

@Component({
    selector: 'app-home',
    template: `
        <tesla-navbar>
            <div slot="center">
                <tesla-navbar-item *ngFor="let centerItem of centerItems"
                                   [href]="centerItem.href"
                >
                    {{centerItem.name}}
                </tesla-navbar-item>
            </div>
            <div slot="right">
                <tesla-navbar-item *ngFor="let rightItem of rightItems"
                                   [href]="rightItem.href"
                >
                    {{rightItem.name}}
                </tesla-navbar-item>
            </div>
        </tesla-navbar>
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
    centerItems: TeslaNavbarItem[] = navbarCenterItems;
    rightItems: TeslaNavbarItem[] = navbarRightItems;

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
