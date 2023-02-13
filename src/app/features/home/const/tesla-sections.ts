import {TeslaHomeSection} from '../model/tesla-home-section';

export const teslaSections: TeslaHomeSection[] = [
    {
        title: 'Model 3',
        subTitle: 'Leasing starting at $349/mo',
        backgroundImgUrl: '../../../../assets/img/home/M3.jpeg',
        showDownArrow: true,
        showSubTitle: true,
        buttons: [
            {
                variant: 'dark',
                label: 'Custom Order',
                path: 'https://www.tesla.com/model3/design#overview'
            },
            {
                variant: 'neutral',
                label: 'Demo Drive',
                path: 'https://www.tesla.com/drive'
            }
        ]
    },
    {
        title: 'Model Y',
        showSubTitle: false,
        backgroundImgUrl: '../../../../assets/img/home/MY.jpeg',
        showDownArrow: false,
        buttons: [
            {
                variant: 'dark',
                label: 'Custom Order',
                path: 'https://www.tesla.com/modely/design#overview'
            },
            {
                variant: 'neutral',
                label: 'Demo Drive',
                path: 'https://www.tesla.com/drive'
            }
        ]
    },
    {
        title: 'Model S',
        subTitle: 'Schedule a Demo Drive',
        subTitleHRef: 'https://www.tesla.com/drive',
        showSubTitle: true,
        backgroundImgUrl: '../../../../assets/img/home/MS.jpeg',
        showDownArrow: false,
        buttons: [
            {
                variant: 'dark',
                label: 'Custom Order',
                path: 'https://www.tesla.com/models/design#overview'
            },
            {
                variant: 'neutral',
                label: 'Demo Drive',
                path: 'https://www.tesla.com/drive'
            }
        ]
    },
    {
        title: 'Model X',
        subTitle: 'Schedule a Demo Drive',
        subTitleHRef: 'https://www.tesla.com/drive',
        showSubTitle: true,
        backgroundImgUrl: '../../../../assets/img/home/MX.jpeg',
        showDownArrow: false,
        buttons: [
            {
                variant: 'dark',
                label: 'Custom Order',
                path: 'https://www.tesla.com/modelx/design#overview'
            },
            {
                variant: 'neutral',
                label: 'Demo Drive',
                path: 'https://www.tesla.com/drive'
            }
        ]
    }
]
